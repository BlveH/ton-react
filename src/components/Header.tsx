import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import SendTransaction from "./sendTransaction";
const Header = () => {
  const userFriendlyAddress = useTonAddress();
  // const rawAddress = useTonAddress(false);
  return (
    <header className="max-w-[500px] mx-auto w-full mt-10 flex items-center justify-center flex-col">
      <TonConnectButton />
      {userFriendlyAddress && <SendTransaction></SendTransaction>}
    </header>
  );
};

export default Header;
