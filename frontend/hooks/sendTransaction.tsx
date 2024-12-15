export const sendTransaction = async (transaction, wallet, connection) => {
  if (!wallet.connected) throw new Error("Wallet is not connected.");

  // Sign transaction with the user's wallet
  const signedTransaction = await wallet.signTransaction(transaction);

  // Send transaction to the network
  const rawTransaction = signedTransaction.serialize();
  const signature = await connection.sendRawTransaction(rawTransaction, {
    skipPreflight: false,
    preflightCommitment: "confirmed",
  });

  await connection.confirmTransaction(signature, "confirmed");
  return signature;
};
