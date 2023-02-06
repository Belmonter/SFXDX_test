import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IWalletData {
	walletAddress: string;
}

const initialState: IWalletData = {
	walletAddress: '',
};

type WalletAddress = string;

export const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setWalletAddress(state, action: PayloadAction<WalletAddress>) {
			state.walletAddress = action.payload;
		},
	},
});

export const walletReducer = walletSlice.reducer;
export const { setWalletAddress } = walletSlice.actions;
