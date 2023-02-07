import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IWalletData {
	walletAddress: string;
	loading: boolean;
}

const initialState: IWalletData = {
	walletAddress: '',
	loading: false,
};

type WalletAddress = string;

export const ConnectToWallet = createAsyncThunk<WalletAddress, undefined, { rejectValue: string }>(
	'wallet/ConnectToWallet',
	async function (_, { rejectWithValue }) {
		if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
			try {
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				if (accounts && Array.isArray(accounts)) {
					return accounts[0];
				}
			} catch (e) {
				if (e instanceof Error) rejectWithValue(e.message);
			}
		} else {
			alert('Please install Metamask extension');
		}
	}
);

export const GetCurrentWallet = createAsyncThunk<WalletAddress, undefined, { rejectValue: string }>(
	'wallet/GetCurrentWallet',
	async function (_, { rejectWithValue }) {
		if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
			try {
				const accounts = await window.ethereum.request({ method: 'eth_accounts' });
				if (accounts && Array.isArray(accounts) && accounts.length > 0) {
					return accounts[0];
				}
			} catch (e) {
				if (e instanceof Error) rejectWithValue(e.message);
			}
		}
	}
);

export const AddWalletListener = createAsyncThunk<void, undefined>('wallet/AddWalletListener', async function (_, { dispatch }) {
	if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
		dispatch(setLoading(true));
		window.ethereum.on('accountsChanged', (accs) => {
			if (accs && Array.isArray(accs)) {
				dispatch(setLoading(false));
				dispatch(setWallet(accs[0]));
			}
		});
	} else {
		dispatch(setWallet(''));
	}
});

export const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setWallet: (state, action: PayloadAction<WalletAddress>) => {
			state.walletAddress = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(ConnectToWallet.pending, (state) => {
				state.loading = true;
			})
			.addCase(ConnectToWallet.fulfilled, (state, action) => {
				state.loading = false;
				state.walletAddress = action.payload;
			})
			.addCase(ConnectToWallet.rejected, (state) => {
				state.loading = false;
				state.walletAddress = '';
			})
			.addCase(GetCurrentWallet.pending, (state) => {
				state.loading = true;
			})
			.addCase(GetCurrentWallet.fulfilled, (state, action) => {
				state.loading = false;
				state.walletAddress = action.payload;
			})
			.addCase(GetCurrentWallet.rejected, (state) => {
				state.loading = false;
				state.walletAddress = '';
			});
	},
});

export const walletReducer = walletSlice.reducer;
export const { setLoading, setWallet } = walletSlice.actions;
