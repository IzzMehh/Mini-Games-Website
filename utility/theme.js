const mainSection = document.querySelector('#section-2')

const mobileFooter = document.querySelector('#footer-row')

export function storedTheme(){
if(accountStoredData.userData.theme === 'light'){
    mainSection.classList.replace('section-2-dark','section-2-blue');
    document.documentElement.style.setProperty('--bg-col', '#E1DED5');
    document.documentElement.style.setProperty('--text-col', 'black');
    document.documentElement.style.setProperty('--card-col', '#BCB8AC');
    document.documentElement.style.setProperty('--slider-col', '#a8a5a5');
    document.documentElement.style.setProperty('--btn-col', '#a8a5a5');
    document.documentElement.style.setProperty('--border-col', 'black');
    // mobileFooter.style.backgroundColor = '#182030';

    
    mobileFooter.style.backgroundColor = 'transparent';
  
  }
  else if (accountStoredData.userData.theme === 'dark'){
    mainSection.classList.replace('section-2-blue','section-2-dark');
    document.documentElement.style.setProperty('--bg-col', '#292626');
    document.documentElement.style.setProperty('--text-col', 'white');
    document.documentElement.style.setProperty('--card-col', '#4C4444');
    document.documentElement.style.setProperty('--slider-col', '#554C4C');
    document.documentElement.style.setProperty('--btn-col', '#6B5E5E');
    document.documentElement.style.setProperty('--border-col', 'white');
    // mobileFooter.style.backgroundColor = 'rgba(49, 47, 47, 0.693)';

    
    mobileFooter.style.backgroundColor = 'transparent';
  }
}

export function themeToggle(){
  if(accountStoredData.userData.theme=='light'){
    mainSection.classList.replace('section-2-blue','section-2-dark');
    document.documentElement.style.setProperty('--bg-col', '#292626');
    document.documentElement.style.setProperty('--text-col', 'white');
    document.documentElement.style.setProperty('--card-col', '#4C4444');
    document.documentElement.style.setProperty('--slider-col', '#554C4C');
    document.documentElement.style.setProperty('--btn-col', '#6B5E5E');
    document.documentElement.style.setProperty('--border-col', 'white');
    
    accountStoredData.userData.theme = 'dark'
    localStorage.setItem('settings',JSON.stringify(accountStoredData))


    mobileFooter.style.backgroundColor = 'transparent'
    // mobileFooter.style.backgroundColor = 'rgba(49, 47, 47, 0.693)';

  }
  else if(accountStoredData.userData.theme=='dark'){
    mainSection.classList.replace('section-2-dark','section-2-blue');
    document.documentElement.style.setProperty('--bg-col', '#E1DED5');
    document.documentElement.style.setProperty('--text-col', 'black');
    document.documentElement.style.setProperty('--card-col', '#BCB8AC');
    document.documentElement.style.setProperty('--slider-col', '#a8a5a5');
    document.documentElement.style.setProperty('--btn-col', '#a8a5a5');
    document.documentElement.style.setProperty('--border-col', 'black');


    
    accountStoredData.userData.theme = 'light'
    localStorage.setItem('settings',JSON.stringify(accountStoredData))

    
    mobileFooter.style.backgroundColor = 'transparent';
    // mobileFooter.style.backgroundColor = '#182030';

  }

}