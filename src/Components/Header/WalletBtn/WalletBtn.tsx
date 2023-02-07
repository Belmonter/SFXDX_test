import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { AddWalletListener, ConnectToWallet, GetCurrentWallet } from '../../../redux/walletSlice';
import Spinner from '../../Spinner/Spinner';
import ConnectedWalletBtn from '../ConnectedWalletBtn/ConnectedWalletBtn';
import { WalletBtnStyled } from './WalletBtn.styled';

function WalletBtn() {
	const wallet = useAppSelector((state) => state.wallet);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(GetCurrentWallet());
		dispatch(AddWalletListener());
	}, [dispatch]);

	return (
		<>
			{wallet.walletAddress && wallet.walletAddress.length > 0 ? (
				<ConnectedWalletBtn />
			) : (
				<WalletBtnStyled onClick={() => dispatch(ConnectToWallet())} disabled={wallet.loading}>
					{wallet.loading ? <Spinner /> : 'Connect Wallet'}
				</WalletBtnStyled>
			)}
		</>
	);
}

export default WalletBtn;
