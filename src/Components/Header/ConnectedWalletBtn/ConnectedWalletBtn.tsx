import React from 'react';
import StyledConnectedWalletBtn from "./ConnectedWalletBtn.styled";
import metaMaskLogo from '../../../assets/img/svg/metamask_logo.svg'
import frame from '../../../assets/img/svg/Frame.svg'
import {useAppSelector} from "../../../redux/hooks";

function ConnectedWalletBtn() {
  const wallet = useAppSelector(state => state.wallet)
  const slicedWalletAddress = `${wallet.walletAddress.substring(0, 10)}...${wallet.walletAddress.substring(wallet.walletAddress.length - 4)}`

  return (
    <StyledConnectedWalletBtn>
      <img src={metaMaskLogo} alt="metaMask logo"/>
      <p>{slicedWalletAddress}</p>
      <img src={frame} alt="frame"/>
    </StyledConnectedWalletBtn>
  );
}

export default ConnectedWalletBtn;
