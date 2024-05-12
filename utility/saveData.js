
export function saveDataBeforeUnload(DataName){
    window.addEventListener('unload',()=>{
      localStorage.setItem('settings', JSON.stringify(DataName))
    })
}