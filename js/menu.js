

const hamburguer = document.querySelector('.menu')
const menu = document.querySelector('.menu-navegacion')

hamburguer.addEventListener('click', ()=>{
menu.classList.toggle("spread")
}
)

/*
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer){
console.log('cerrar')
menu.classList.toggle("spread" )
}
}
)*/