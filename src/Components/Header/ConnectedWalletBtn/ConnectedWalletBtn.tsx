import React from 'react';

import frame from '../../../assets/img/svg/Frame.svg';
import metaMaskLogo from '../../../assets/img/svg/metamask_logo.svg';
import { useAppSelector } from '../../../redux/hooks';
import { slicedWalletAddress } from '../../../utils/slicedWalletAddress';

import StyledConnectedWalletBtn from './ConnectedWalletBtn.styled';

function ConnectedWalletBtn() {
	const wallet = useAppSelector((state) => state.wallet);

	return (
		<StyledConnectedWalletBtn>
			<img src={metaMaskLogo} alt="metaMask logo" />
			<p>{slicedWalletAddress(wallet.walletAddress)}</p>
			<img src={frame} alt="frame" />
		</StyledConnectedWalletBtn>
	);
}

export default ConnectedWalletBtn;
