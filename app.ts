let breakpoint = 780 //px

// Collapse Links

let lis = document.querySelectorAll('#menu li.collapse')
var timeout = null

let diselectLi = (li:Element)=>{
    if(li.classList.contains('active')){     
        
        if(timeout!=null){
            window.clearTimeout(timeout)
        }

        timeout = window.setTimeout(()=>{
            li.classList.remove('active')
            li.classList.add('hide')
        },300)
        
    }
}

let selectLi = (li:Element)=>{
    if(!li.classList.contains('active')){
        let previously = document.querySelector('#menu li.collapse.active')
        if(previously){
            diselectLi(previously)
        }

        li.classList.remove('hide')
        li.classList.add('active')
    }
}

let diselectUl = (ul:Element)=>{
    let li = ul.parentElement
    diselectLi(li)
}

let selectUl = (ul:Element)=>{
    let li = ul.parentElement
    if(timeout!=null){
        window.clearTimeout(timeout)
    }
    selectLi(li)
}


let mouseoverli = (li:Element)=>()=>{
    if(window.innerWidth > breakpoint){
        selectLi(li)
    }
}
let mouseoutli = (li:Element)=>()=>{
    if(window.innerWidth > breakpoint){
        diselectLi(li)
    }
}
let clickLi = (li:Element)=>()=>{
    if(window.innerWidth <= breakpoint){
        if(li.classList.contains('active')){
            diselectLi(li)
        }else{
            selectLi(li)
        }
    }
}
let mouseoverul = (ul:Element)=>()=>{
    if(window.innerWidth > breakpoint){
        selectUl(ul)
    }
}
let mouseoutul = (ul:Element)=>()=>{
    if(window.innerWidth > breakpoint){
        diselectUl(ul)
    }
}


if(lis){
    for (let index = 0; index < lis.length; index++) {
        let li = lis[index];
        li.addEventListener('mouseover',mouseoverli(li))
        li.addEventListener('mouseout',mouseoutli(li))
        li.addEventListener('click',clickLi(li))

        let ulChild = li.querySelector('ul.child')
        ulChild.addEventListener('mouseover',mouseoverul(ulChild))
        ulChild.addEventListener('mouseout',mouseoutul(ulChild))
    }
}


// Menu 
let menuIcon = document.querySelector('#menu .menu-icon')
if(menuIcon){
    menuIcon.addEventListener('click',()=>{
        let menu = document.querySelector('#menu')
        let content = document.querySelector('#menu .content')
        let body = document.querySelector('body')
        if(!menuIcon.classList.contains('open')){
            menu.classList.add('open')
            menuIcon.classList.add('open')
            content.classList.add('open')
            body.classList.add('o-hidden')
        }else{
            menu.classList.remove('open')
            menuIcon.classList.remove('open')
            content.classList.remove('open')
            body.classList.remove('o-hidden')
        }
    })
}