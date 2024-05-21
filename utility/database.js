
let data = {
    isSlideBarActive: false,
    userData: {
      theme: 'dark',
        wins: 0,
        totalPlayed: 0,
        amount:2000,
    },
  }



  let accountStoredData = JSON.parse(localStorage.getItem('settings')) || data
  localStorage.setItem('settings',JSON.stringify(accountStoredData))
  
  
  // DATA LOAD ->
  
  function updateDisplayedCoins(){
  const displayCash = document.querySelector('#cashAmount')
  displayCash.innerHTML = `<img id='nav-currency-logo' height="20px" src="images/currency-logo.jpg" alt=""> ${accountStoredData.userData.amount} Coins`
  }

  updateDisplayedCoins()