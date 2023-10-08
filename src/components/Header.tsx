import { TonConnectButton } from "@tonconnect/ui-react";
import SendTransaction from "./sendTransaction.tsx"
const Header = () => {
  return (
    <header>
      <TonConnectButton
        className="my-button-class"
        style={{ marginLeft: 900 }}
      />
        <SendTransaction/>
    </header>
  );
};

export default Header;
