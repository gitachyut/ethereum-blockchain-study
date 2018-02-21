# Ethereum how and why !  
Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.

## The Ethereum blockchain  

The structure of the ethereum blockchain is very similar to bitcoin's, in that it is a shared record of the entire transaction history. Every node on the network stores a copy of this history.

The big difference with ethereum is that its nodes store the most recent state of each smart contract, in addition to all of the ether transactions. (This is much more complicated than described, but the text below should help you get your feet wet.)

For each ethereum application, the network needs to keep track of the 'state', or the current information of all of these applications, including each user's balance, all the smart contract code and where it's all stored.

Bitcoin uses unspent transaction outputs to track who has how much bitcoin.

While it sounds more complex, the idea is fairly simple. Every time a bitcoin transaction is made, the network 'breaks' the total amount as if it was paper money, issuing back bitcoins in a way that makes the data behave similarly to physical coins or change.

To make future transactions, the bitcoin network must add up all your pieces of change, which are classed as either 'spent' or 'unspent'.

Ethereum, on the other hand, uses accounts.

Like bank account funds, ether tokens appear in a wallet, and can be ported (so to speak) to another account. Funds are always somewhere, yet don't have what you might call a continued relationship.



## Ethereumjs testrpc  

testrpc is a Node.js based Ethereum client for testing and development. It uses ethereumjs to simulate full client behavior and make developing Ethereum applications much faster. It also includes all popular RPC functions and features (like events) and can be run deterministically to make development a breeze.  

`npm install -g ethereumjs-testrpc`    

## MetaMask 

MetaMask is a bridge that allows you to visit the distributed ethereum network from your browser. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node. MetaMask includes a secure identity vault, providing a user interface to manage your identities on different sites


##  Solidity  

Solidity is a contract-oriented, high-level language for implementing smart contracts. It is designed to target the Ethereum Virtual Machine (EVM).

## Remix  

Remix is a browser-based compiler and IDE that enables users to build Ethereum contracts with Solidity language and to debug transactions.  

visit https://remix.ethereum.org.  

If you want to use it without connection to the Internet, go to https://github.com/ethereum/browser-solidity/blob/gh-pages/remix-7013ed1.zip  and download the .ZIP file as explained on that page.





