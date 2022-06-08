
//(async () => {
//    const rawResponse = await fetch('http://localhost:3000/Balance')
//    const content = await rawResponse.json();
//    console.log(content);
//  })();

const form = document.getElementById('wallet-form'); 

form.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      requestBalance(form.value);
    }})


var requestBalance = function(walletAddress){
  
  fetch('http://localhost:3000/Balance'+'/'+ walletAddress)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw Error
    }
  })
  .then(function(value) {
    const walletbalance = document.getElementById('wallet-balance')
    walletbalance.innerText = value['Eth'] + ' ETH';
  })
  .catch(function(err) {
    console.log(err);
  });
}