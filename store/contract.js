import DemoContract from '~/truffle/build/contracts/DemoContract.json'
import TruffleContract from 'truffle-contract'
import Web3 from 'web3'

// const contract = require('truffle-contract')

export const state = () => ({ })

export const getters = { }

export const mutations = {
  /*
  setWeb3Provider(state, provider) {
    state.originalOutlines = provider
  }
  */

}
export const actions = {

  async callDemoContract({ state, commit, dispatch }, text) {
     console.assert(this.$web3 != null, 'web3Provider is Null!!')

     console.log('callDemoContract')
     console.log(this.$web3)

     const demoContract = TruffleContract(DemoContract)
     demoContract.setProvider(this.$web3)

     const web3 = new Web3(this.$web3)

     web3.eth.getAccounts(async function(error, accounts) {
       if (error) {
         console.log(error);
       }
       const account = accounts[0];
       console.log('account')
       console.log(account)

       const instance = await demoContract.deployed()
       instance.createRandomData(text, {from: account})
     })
  },
  async getContractData({ state, commit, dispatch }) {
    console.assert(this.$web3 != null, 'web3Provider is Null!!')

    const demoContract = TruffleContract(DemoContract)
    demoContract.setProvider(this.$web3)
    const web3 = new Web3(this.$web3)

    web3.eth.getAccounts(async function(error, accounts) {
       if (error) {
         console.log(error);
       }
       const account = accounts[0];

       const instance = await demoContract.deployed()
       const result = await instance.getData.call()
      console.log('result')
      console.log(result)
    })
  }
}
