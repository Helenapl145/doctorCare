window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
   showScroll()
   backToTop()
   activetedMenuAtCurrentSection(home)
   activetedMenuAtCurrentSection(servicos)
   activetedMenuAtCurrentSection(about)
   activetedMenuAtCurrentSection(contato)

    
}

function activetedMenuAtCurrentSection(section){
    const targentLine = scrollY + innerHeight / 2

    //veriticar se a seção passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    

    const sectionTopReachOrPassedTargentLine= targentLine >= sectionTop

    const sectionEndAt = sectionTop + sectionHeight 

    const sectionEndReachOrPassedTargentLine = sectionEndAt <= targentLine

    //limites da seção

    const sectionBoundaries = sectionTopReachOrPassedTargentLine && !sectionEndReachOrPassedTargentLine

    const sectioId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectioId}]`)
   
    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}


function showScroll(){
    var nav = document.getElementById('navegacao')

    if(scrollY > 0){
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
    
}


function backToTop(){
    var nav = document.getElementById('backToTop')

    if(scrollY > 50){
        nav.classList.add('show')
    }else{
        nav.classList.remove('show')
    }
}


function openMenu(){
    document.body.classList.add('menu-expadir')
}

function closeMenu(){
    document.body.classList.remove('menu-expadir')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
           #home img,
           #home .info
           #servicos,
           #servicos header,
           #servicos card,
           #about,
           #about header,
           #about .conteudo`);


