import React from "react";
import harveyABI from "./HarveyABI.json"
import { ethers } from "ethers";

const Balance = ({balance}, {setBalance}) => {

    //get the total supply of contract
    // const viewBalanceHandler = async () =>{
    //     console.log("fired")
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     const harvey = new ethers.Contract("0x85B1935C9F05Ed298A80985FE240A699c4Fe5475", harveyABI, provider)
    
    //     const totalSupply = await harvey.totalSupply()
    //     console.log(totalSupply.toNumber())
    //     setBalance(totalSupply.toNumber())
    // }

    //get balance of admin account
    // const getAdminBalance = async () =>{
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     const harvey = new ethers.Contract("0x85B1935C9F05Ed298A80985FE240A699c4Fe5475", harveyABI, provider)
    //     const adminBalance = await harvey._viewAdminBalance()
    //     console.log(adminBalance.toNumber())
    //     setBalance(adminBalance.toNumber())
    // }

    //get balance of User logged in at the moment
    const getUserBalance = async () =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const harvey = new ethers.Contract("0x85B1935C9F05Ed298A80985FE240A699c4Fe5475", harveyABI, provider)
        const signer = await provider.getSigner()
        const signerAddress = await signer.getAddress()
        const userBalance = await harvey.balanceOf(signerAddress)
        console.log(userBalance.toNumber())
        setBalance(userBalance.toNumber())
    }
    
    //transfer tokens to wallet
    const transferToken = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner()
        const harvey = new ethers.Contract("0x85B1935C9F05Ed298A80985FE240A699c4Fe5475", harveyABI, signer)
        await harvey._loyalCustomersTransferTokens("0x3E6D35139C3b570899fE2E42619ec7D28eE5A535", 10)
    }

  return (
    // Use your custom error component to show errors
    <div>
        <div className="balance">
            <input type="text" />
            <button onClick={getUserBalance}>View Balance</button>
            <p>{balance}</p>
        </div>
        <div className="transfer">
            <input type="text" className="receiver" placeholder="Receipient"/>
            <input type="text" className="amount" placeholder="Amount to transfer" />
            <button onClick={transferToken}>Transfer</button>
        </div>
    </div>
  );
};

export default Balance;
