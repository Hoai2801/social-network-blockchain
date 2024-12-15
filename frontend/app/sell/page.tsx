import { metaplex } from "@metaplex-foundation/js";

const SellNFT = () => {
  const autionClient = metaplex
    // const umi = createUmi('https://api.devnet.solana.com').use(auctionHouseApi());
    // const [formData, setFormData] = useState({
    //     assetId: '',
    //     price: '',
    // });
    // const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    //
    // const handleSellNFT = async () => {
    //     const { assetId, price } = formData;
    //     if (!assetId || !price) {
    //         setStatus('Please provide both Asset ID and Price.');
    //         return;
    //     }
    //
    //     try {
    //         setStatus('Processing...');
    //         const assetPublicKey = publicKey(assetId);
    //         const priceInLamports = Number(price) * 1e9; // Convert SOL to Lamports
    //
    //         const auctionHouse = await umi.auctionHouse.getAuctionHouse({
    //             creator: publicKey('YourAuctionHouseCreatorPublicKey'), // Replace with your Auction House creator public key
    //         });
    //
    //         await umi.auctionHouse.list({
    //             auctionHouse,
    //             seller: publicKey('YourSellerWalletPublicKey'), // Replace with your seller wallet public key
    //             mint: assetPublicKey,
    //             price: priceInLamports,
    //         });
    //
    //         setStatus('NFT listed successfully!');
    //     } catch (error) {
    //         console.error('Error listing NFT:', error);
    //         setStatus('Failed to list NFT. Check console for details.');
    //     }
    // };

    .return(
      <div className="sell-nft">
        <h1>Sell Your NFT</h1>
        <div className="form">
          <label>
            Asset ID:
            <input
              type="text"
              name="assetId"
              value={formData.assetId}
              onChange={handleChange}
              placeholder="Enter NFT Asset ID"
            />
          </label>
          <label>
            Price (SOL):
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price in SOL"
            />
          </label>
          <button onClick={handleSellNFT}>List NFT for Sale</button>
        </div>
        {status && <p className="status">{status}</p>}
      </div>,
    );
};

export default SellNFT;
