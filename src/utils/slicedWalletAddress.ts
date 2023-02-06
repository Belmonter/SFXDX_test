export const slicedWalletAddress = (walletAddress: string): string => {
	return `${walletAddress.substring(0, 10)}...${walletAddress.substring(walletAddress.length - 4)}`;
};
