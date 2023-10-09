import { useTonConnectUI } from "@tonconnect/ui-react";
import { useState } from "react";
import Row from "./Row";

const SendTransaction = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const transaction = {
    messages: [
      {
        address: address,
        amount: amount,
      },
    ],
    validUntil: new Date().getTime() + 1000 * 60 * 10, // 10 minutes
  };

  const handleSendTransaction = async () => {
    try {
      await tonConnectUI.sendTransaction(transaction);
      console.log("Giao dịch đã được gửi thành công");
      setAddress('')
      setAmount('')
    } catch (error) {
      console.error("Lỗi khi gửi giao dịch:", error);
    }
  };

  return (
    <div className="flex flex-col gap-y-5 w-full justify-center-center mt-10 bg-gray-200 p-5 rounded-md shadow-lg">
      <Row>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
          className="px-3 py-2 rounded-md text-gray-500"
        />
      </Row>
      <Row>
        <label htmlFor="amount">Amount (Toncoin in nanotons)</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter your amount"
          className="px-3 py-2 rounded-md text-gray-500"
        />
      </Row>
      <div className="flex items-center justify-center">
        <button
          onClick={handleSendTransaction}
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-center"
        >
          Send transaction
        </button>
      </div>
    </div>
  );
};

export default SendTransaction;
