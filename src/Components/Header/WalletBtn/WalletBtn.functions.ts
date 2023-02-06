import { setWalletAddress } from '../../../redux/walletSlice';

export const ConnectToWallet = async (dispatch: Function, setLoading: Function) => {
	if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
		try {
			setLoading(true);
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			if (accounts && Array.isArray(accounts)) {
				setLoading(false);
				dispatch(setWalletAddress(accounts[0]));
			}
		} catch (e) {
			setLoading(false);
			console.log(e);
		}
	} else {
		alert('Please install Metamask extension');
	}
};

export const GetCurrentWallet = async (dispatch: Function, setLoading: Function) => {
	if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_accounts' });
			if (accounts && Array.isArray(accounts) && accounts.length > 0) {
				setLoading(true);
				dispatch(setWalletAddress(accounts[0]));
				setLoading(false);
			}
		} catch (e) {
			console.log(e);
		}
	}
};

export const AddWalletListener = async (dispatch: Function, setLoading: Function) => {
	if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
		window.ethereum.on('accountsChanged', (accs) => {
			setLoading(true);
			if (accs && Array.isArray(accs)) {
				setLoading(false);
				dispatch(setWalletAddress(accs[0]));
			}
		});
	} else {
		dispatch(setWalletAddress(''));
	}
};
