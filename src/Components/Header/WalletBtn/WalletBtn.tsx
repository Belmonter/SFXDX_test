import React, {useEffect} from 'react';
import {WalletBtnStyled} from "./WalletBtn.styled";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {setWalletAddress} from "../../../redux/walletSlice";
import ConnectedWalletBtn from "../ConnectedWalletBtn/ConnectedWalletBtn";

function WalletBtn() {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector(state => state.wallet)

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  })

  const connectToWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        if (accounts && Array.isArray(accounts)) {
          dispatch(setWalletAddress(accounts[0]))
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      alert('Please install Metamask extension')
    }
  }

  const getCurrentWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({method: "eth_accounts"});
        if (accounts && Array.isArray(accounts) && accounts.length > 0) {
          dispatch(setWalletAddress(accounts[0]))
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != 'undefined') {
      window.ethereum.on('accountsChanged', (accs) => {
        if (accs && Array.isArray(accs)) {
          dispatch(setWalletAddress(accs[0]))
        }
      })
    } else {
      dispatch(setWalletAddress(''))
    }
  }

  return (
    <>
      {wallet.walletAddress && wallet.walletAddress.length > 0 ?
        <ConnectedWalletBtn/>
        :
        <WalletBtnStyled onClick={() => connectToWallet()}>Connect Wallet</WalletBtnStyled>
      }
    </>
  );
}

export default WalletBtn;
