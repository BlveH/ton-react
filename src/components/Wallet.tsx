import { useTonWallet } from '@tonconnect/ui-react';
import { useState } from 'react';

export const TransactionInput = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const sendTransaction = async () => {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address,
                    amount,
                },
            ],
        };

        try {
            const result = await tonConnectUI.sendTransaction(transaction);

            // you can use signed boc to find the transaction
            const someTxData = await myAppExplorerService.getTransaction(result.boc);
            alert('Transaction was sent successfully', someTxData);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <button onClick={sendTransaction}>Send Transaction</button>
        </div>
    );
};

export const Wallet = () => {
    const wallet = useTonWallet();

    return (
        wallet && (
            <div>
                <span>Connected wallet: {wallet.name}</span>
                <span>Device: {wallet.device.appName}</span>
            </div>
        )
    );
};
