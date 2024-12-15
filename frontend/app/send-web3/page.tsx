"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  // sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

const SendPrivateSOL = () => {
  const { publicKey, sendTransaction } = useWallet();
  const [toAddress, setToAddress] = useState("");
  const [status, setStatus] = useState("");

  const sendPrivateSol = async () => {
    if (!publicKey) {
      setStatus("Wallet not connected.");
      return;
    }

    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const recipientPublicKey = new PublicKey(toAddress);

      // Create a transaction to send-web3 SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPublicKey,
          lamports: 1 * LAMPORTS_PER_SOL, // Amount in lamports (1 SOL)
        }),
      );

      // Sign the transaction with the connected wallet
      const signature = await sendTransaction(transaction, connection);

      // Confirm the transaction
      await connection.confirmTransaction(signature);

      setStatus("Transaction successful!");
    } catch (error) {
      console.error("Error sending SOL:", error);
      setStatus("Failed to send-web3 SOL. Check console for details.");
    }
  };

  return (
    <div>
      <h1>Send Private SOL</h1>
      <div>
        <label>
          To Address:
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder="Recipient Address"
          />
        </label>
      </div>
      <button onClick={sendPrivateSol} disabled={!publicKey || !toAddress}>
        Send Private SOL
      </button>
      <p>{status}</p>
    </div>
  );
};

export default SendPrivateSOL;
