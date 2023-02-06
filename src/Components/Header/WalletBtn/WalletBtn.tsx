import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Spinner from '../../Spinner/Spinner';
import ConnectedWalletBtn from '../ConnectedWalletBtn/ConnectedWalletBtn';

import { AddWalletListener, ConnectToWallet, GetCurrentWallet } from './WalletBtn.functions';
import { WalletBtnStyled } from './WalletBtn.styled';

function WalletBtn() {
	const [loading, setLoading] = useState<boolean>(false);
	const wallet = useAppSelector((state) => state.wallet);
	const dispatch = useAppDispatch();

	useEffect(() => {
		GetCurrentWallet(dispatch, setLoading);
		AddWalletListener(dispatch, setLoading);
	}, []);

	return (
		<>
			{wallet.walletAddress && wallet.walletAddress.length > 0 ? (
				<ConnectedWalletBtn />
			) : (
				<WalletBtnStyled onClick={() => ConnectToWallet(dispatch, setLoading)} disabled={loading}>
					{loading ? <Spinner /> : 'Connect Wallet'}
				</WalletBtnStyled>
			)}
		</>
	);
}

export default WalletBtn;
