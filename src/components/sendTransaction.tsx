import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';

const SendTransaction = () => {
    const [tonConnectUI] = useTonConnectUI();
    const [address, setAddress] = useState(""); // State cho địa chỉ
    const [amount, setAmount] = useState("");   // State cho số lượng

    const transaction = {
        messages: [
            {
                address: address, // Sử dụng giá trị từ state cho địa chỉ
                amount: amount    // Sử dụng giá trị từ state cho số lượng
            }
        ],
        validUntil: new Date().getTime() + 1000 * 60 * 10 // 10 minutes
    };

    const handleSendTransaction = async () => {
        try {
            await tonConnectUI.sendTransaction(transaction);
            // Giao dịch đã được gửi thành công, có thể thêm xử lý bổ sung ở đây nếu cần
            console.log("Giao dịch đã được gửi thành công");
        } catch (error) {
            // Xử lý lỗi nếu giao dịch không thành công
            console.error("Lỗi khi gửi giao dịch:", error);
        }
    };


    return (
        <div>
            <div>
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount (Toncoin in nanotons):</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSendTransaction} style={{ marginLeft: 900 }}>
                    Send transaction
                </button>
            </div>
        </div>
    );
};

export default SendTransaction;
