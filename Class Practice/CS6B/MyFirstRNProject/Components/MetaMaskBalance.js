import React, { useState, useEffect } from "react";
import Web3 from "web3";

const MetaMaskBalance = () => {
  const [balance, setBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connectToMetaMask();
  }, []);

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please install MetaMask to use this feature.");
    }
  };

  const getAccountBalance = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const address = accounts[0];

      if (address) {
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(address);
        const formattedBalance = web3.utils.fromWei(balance, "ether");
        setBalance(formattedBalance);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getAccountBalance} disabled={!isConnected}>
        Get Balance
      </button>
      {balance && <p>Your account balance: {balance} ETH</p>}
    </div>
  );
};

export default MetaMaskBalance;
