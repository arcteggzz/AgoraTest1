import './App.css';
import React from 'react';
import Balance from './Balance';

function App() {

  return (
    <div className="App">
      <div className="login">
        <button id='loginbtn' >Login</button>
        <button id='logoutbtn'>Logout</button>
      </div>
      <div className="extraMint">
        <input type="text" />
        <button>ExtraMint</button>
      </div>
      <Balance />
    </div>
  );
}

export default App;

//contract address lnink ()=> https://rinkeby.etherscan.io/address/0x85B1935C9F05Ed298A80985FE240A699c4Fe5475
