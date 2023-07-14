const ls = window.localStorage

function darkMode (){
    const btn = document.getElementById('btn--dark')

    if(ls.getItem('color') === 'dark'){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }


    btn.addEventListener('click', () =>{
        document.body.classList.toggle('dark')

        if(document.body.classList.contains('dark')){
            ls.setItem('color', 'dark')
        }else{
            ls.removeItem('color')
            
        }
    })
    
}

export default darkMode