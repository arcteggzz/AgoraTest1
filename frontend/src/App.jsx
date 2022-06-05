import './App.css';
import React, {useState} from 'react';
import Balance from './Balance';
import harveyABI from "./HarveyABI.json"
import { ethers } from "ethers";

function App() {
    // const [receiverAddr, setReceiverAddr] = useState("")
  // const [receiverAmount, setReceiverAmount] = useState("")

  const [extraMintAmount, setExtraMintAmount] = useState("")

  const extraMintAmountHandler = (e) =>{
    setExtraMintAmount(e.target.value)
  }

  const extraMintHandler = async(val)=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = await provider.getSigner()
    const harvey = new ethers.Contract("0x85B1935C9F05Ed298A80985FE240A699c4Fe5475", harveyABI, signer)
    await harvey._extraMint(val)
  }


  return (
    <div className="App">
      <div className="login">
        <button id='loginbtn' >Login</button>
        <button id='logoutbtn'>Logout</button>
      </div>
      <div className="extraMint">
        <input type="text" placeholder='Amount'onChange={extraMintAmountHandler}/>
        <button onClick={()=>extraMintHandler(extraMintAmount)}>ExtraMint</button>
      </div>
      <Balance/>
    </div>
  );
}

export default App;

//contract address lnink ()=> https://rinkeby.etherscan.io/address/0x85B1935C9F05Ed298A80985FE240A699c4Fe5475
