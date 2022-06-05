import './App.css';
import React, { useState } from 'react';
import Balance from './Balance';
// import { ethers } from "ethers";

function App() {
  const [balance, setBalance] = useState("Balance not set")
  const [receiverAddr, setReceiverAddr] = useState("")
  const [receiverAmount, setReceiverAmount] = useState("")

  return (
    <div className="App">
      <div className="login">
        <button id='loginbtn' >Login</button>
        <button id='logoutbtn'>Logout</button>
      </div>
      <div className="extraMint">
        <input type="text" placeholder='Amount'/>
        <button>ExtraMint</button>
      </div>
      <Balance
        balance={balance}
        setBalance={setBalance}
        receiverAddr ={receiverAddr}
        setReceiverAddr ={setReceiverAddr}
        receiverAmount ={receiverAmount}
        setReceiverAmount ={setReceiverAmount}
        />
    </div>
  );
}

export default App;

//contract address lnink ()=> https://rinkeby.etherscan.io/address/0x85B1935C9F05Ed298A80985FE240A699c4Fe5475
