import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

class App extends Component {
  state = {
    socketUrl: 'wss://ws.blockchain.info/inv',
    transitionType: {
      "op":"unconfirmed_sub"
    },
    blocks: []
  }
  componentDidMount = () => {
    // ping bloackchain 
    this.blockChainData()
  }

  connectBlockChainScoket = () => {
    return new WebSocket(this.state.socketUrl)
  }
  
  blockChainData = () => {
    const socketConnection = this.connectBlockChainScoket()
    socketConnection.onopen = this.socketConnectionOnOpen(socketConnection)
    socketConnection.onmessage = this.socketConnectionOnMsg
  }


  socketConnectionOnOpen =  ( connection ) =>  () => {
    connection.send(JSON.stringify(this.state.transitionType))
  }

  socketConnectionOnMsg = (msg) => {
    this.setState({
      ...this.state,
      blocks: [ ...this.state.blocks, JSON.parse(msg.data) ]
    })    
  }

  render() {
    return (
      <div className="App">
        <div className="list">
          { this.state.blocks.map((block,index) => <BlockComponent key={block.x.hash} block={block} /> ) }  
        </div>
      </div>
    );
  }
}



const BlockComponent = ( { block: { x: { hash }} } ) => <div className="item">
  <div className="hash">Hash: {hash}</div>
</div>

export default App;
