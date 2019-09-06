import Web3 from 'web3'

let web3Provider = null

export default async ({ app, store, redirect, error, route }, inject) => {
  console.log('plugin')

  const provider = await initWeb3(store)
  console.log('web3P')
  console.log(provider)
  inject('web3', provider)

}
// let getWeb3 = new Promise(function(resolve, reject) { }
/*
export default ({ $axios, app, store, redirect }) => {
  console.log('plugins')
}
 */

window.addEventListener('load', function() {
   console.log('on load')
})


async function initWeb3(store) {
  console.log('initWeb3')
  if (window.ethereum) {
    web3Provider = window.ethereum;
    try {
      // Request account access
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3Provider = window.web3.currentProvider;
  }
  // If no injected web3 instance is detected, fall back to Ganache
  else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
  }

  const web3 = new Web3(web3Provider)
  console.log('WEB333')
  console.log(web3)
  return web3Provider
}

function initContract(){

}


/*
initContract: function() {
  console.log('initContract')
  $.getJSON('Adoption.json', function(data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    console.log('data')
    console.log(data)
    var AdoptionArtifact = data;
    App.contracts.Adoption = TruffleContract(AdoptionArtifact);

    // Set the provider for our contract
    App.contracts.Adoption.setProvider(App.web3Provider);

    // Use our contract to retrieve and mark the adopted pets
    return App.markAdopted();
  });

  return App.bindEvents();
},
*/

