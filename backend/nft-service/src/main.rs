use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use solana_client::rpc_client::RpcClient;
use solana_sdk::{
    pubkey::Pubkey,
    signature::{Keypair, Signer},
    system_instruction,
    transaction::Transaction,
};
use borsh::{BorshDeserialize, BorshSerialize};
use std::str::FromStr;

// Define instruction data
#[derive(BorshSerialize, BorshDeserialize, Debug, Serialize, Deserialize)]
pub enum MarketplaceInstruction {
    MintNFT { metadata: String },
    ListNFT { price: u64 },
    BuyNFT,
}

// Define HTTP request structures
#[derive(Deserialize)]
struct MintNFTRequest {
    metadata: String,
    payer: String,
    mint_account: String,
}

#[derive(Deserialize)]
struct ListNFTRequest {
    nft_account: String,
    price: u64,
    owner: String,
}

#[derive(Deserialize)]
struct BuyNFTRequest {
    nft_account: String,
    buyer: String,
    owner: String,
}

// Solana RPC client setup
const RPC_URL: &str = "https://api.devnet.solana.com";
const PROGRAM_ID: &str = "FRMfETxMmQKtcm1s72pVS3ZARo5HQV4Cdxzo3FKoWk3g";

// Mint NFT handler
async fn mint_nft(req: web::Json<MintNFTRequest>) -> impl Responder {
    let client = RpcClient::new(RPC_URL);
    let program_id = Pubkey::from_str(PROGRAM_ID).unwrap();

    let payer = Keypair::from_base58_string(&req.payer);
    let mint_account = Pubkey::from_str(&req.mint_account).unwrap();

    let instruction = MarketplaceInstruction::MintNFT {
        metadata: req.metadata.clone(),
    };

    let instruction_data = instruction.try_to_vec().unwrap();
    let transaction = Transaction::new_signed_with_payer(
        &[
            system_instruction::create_account(
                &payer.pubkey(),
                &mint_account,
                client.get_minimum_balance_for_rent_exemption(8 + 256).unwrap(),
                8 + 256,
                &program_id,
            ),
        ],
        Some(&payer.pubkey()),
        &[&payer],
        client.get_latest_blockhash().unwrap(),
    );

    match client.send_and_confirm_transaction(&transaction) {
        Ok(signature) => HttpResponse::Ok().json(signature),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

// List NFT handler
async fn list_nft(req: web::Json<ListNFTRequest>) -> impl Responder {
    let client = RpcClient::new(RPC_URL);
    let program_id = Pubkey::from_str(PROGRAM_ID).unwrap();

    let nft_account = Pubkey::from_str(&req.nft_account).unwrap();
    let owner = Keypair::from_base58_string(&req.owner);

    let instruction = MarketplaceInstruction::ListNFT {
        price: req.price,
    };

    let instruction_data = instruction.try_to_vec().unwrap();
    let transaction = Transaction::new_signed_with_payer(
        &[], // Add your account manipulation instructions here
        Some(&owner.pubkey()),
        &[&owner],
        client.get_latest_blockhash().unwrap(),
    );

    match client.send_and_confirm_transaction(&transaction) {
        Ok(signature) => HttpResponse::Ok().json(signature),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

// Buy NFT handler
async fn buy_nft(req: web::Json<BuyNFTRequest>) -> impl Responder {
    let client = RpcClient::new(RPC_URL);
    let program_id = Pubkey::from_str(PROGRAM_ID).unwrap();

    let buyer = Keypair::from_base58_string(&req.buyer);
    let nft_account = Pubkey::from_str(&req.nft_account).unwrap();
    let owner_account = Pubkey::from_str(&req.owner).unwrap();

    let instruction = MarketplaceInstruction::BuyNFT;
    let instruction_data = instruction.try_to_vec().unwrap();
    let transaction = Transaction::new_signed_with_payer(
        &[], // Add your account manipulation instructions here
        Some(&buyer.pubkey()),
        &[&buyer],
        client.get_latest_blockhash().unwrap(),
    );

    match client.send_and_confirm_transaction(&transaction) {
        Ok(signature) => HttpResponse::Ok().json(signature),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/mint-nft", web::post().to(mint_nft))
            .route("/list-nft", web::post().to(list_nft))
            .route("/buy-nft", web::post().to(buy_nft))
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
