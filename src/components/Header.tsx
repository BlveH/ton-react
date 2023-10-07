import { TonConnectButton } from "@tonconnect/ui-react";
import {Wallet} from "./Wallet.tsx"
const Header = () => {
  return (
    <header>
      <TonConnectButton
        className="my-button-class"
        style={{ marginLeft: 900 }}
      />
        <Wallet/>
    </header>
  );
};

export default Header;
