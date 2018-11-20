/*
var btnOpenMenu = document.getElementsByClassName("menu__btn--closed")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
var btnCloseMenu = document.getElementsByClassName("menu__btn--open")[0];
var menu = document.getElementsByClassName("menu")[0];
var anchors = document.getElementsByClassName("menu__link");
let current;
let wBody, wMenu;


function updateW () {
    if (menu.style.width != 0) {
        wBody = window.innerWidth * 0.75;
        wMenu = window.innerWidth * 0.25;
        wrapper.style.width = wBody+"px";
        menu.style.width = wMenu+"px";
    }
    return wBody, wMenu;
}


function openMenu() {
    updateW();
    wrapper.style.width = window.innerWidth * 0.75+"px";
    btnOpenMenu.style.visibility = "hidden";
    menu.style.width = window.innerWidth * 0.25+"px";
    btnCloseMenu.style.visibility = "visible";
    btnCloseMenu.style.right = window.innerWidth * 0.27+"px";
    btnCloseMenu.style.opacity = "1";
}

function closeMenu() {
    wrapper.style.width = "";
    btnOpenMenu.style.visibility = "visible";
    menu.style.width = "";
    btnCloseMenu.style.visibility = "hidden";
    btnCloseMenu.style.right = "";
    btnCloseMenu.style.opacity = "";
}

function menuEscape(event) {
    if (event.key == "Escape"){
        closeMenu();
    }
}

function updateAnchors() {
    var anchorsLen = anchors.length;
    var newActive = document.getElementById('a_' + location.hash.replace('#',""));
    for (var i = 0; i < anchorsLen; i++) {
        anchors[i].classList.remove('menu__link--active');
    } 
    if (location.hash == "") {
        anchors[0].classList.add("menu__link--active");
        window.location.hash = 'home';
    } else {
        newActive.classList.add("menu__link--active");
        window.onhashchange = function() {updateAnchors()};
        window.onhashchange = function() {closeMenu()};
    }
    
}

function changeColor() {
    current = document.elementFromPoint(0, 30);
     if (current.id != "" && window.location.hash != "#"+current.id){
        // window.location.hash = current.id;
        history.replaceState(null, null, "#"+current.id);
    }

    if  (current == document.getElementById("services") || current == document.getElementById("portfolio")) {
        btnOpenMenu.style.filter = "invert(100%)";
        btnCloseMenu.style.filter = "invert(100%)";
    }
    else {
        btnOpenMenu.style.filter = "";
        btnCloseMenu.style.filter = "";
    }
}


btnOpenMenu.addEventListener("click", openMenu, false);
btnOpenMenu.addEventListener("click", updateAnchors, false);
btnCloseMenu.addEventListener("click", closeMenu, false);
window.onhashchange = function() {updateAnchors()};
document.addEventListener("scroll", updateAnchors, false);
window.onload = function () {updateAnchors()};
document.addEventListener("scroll", changeColor, false);
window.addEventListener("keydown", menuEscape, false);
window.addEventListener("resize", updateW, false);
*/
function bullets() {
    let pag = document.getElementById('trainers__pagination').children;
    let add = 1;
    for (let i = 0; i < pag.length; i++) {
        pag[i].classList.add('trainer-'+add);
        add++;
    }

}

window.onload = bullets();
// Form Variables
let form = document.getElementById("form");
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let error = document.querySelector('.error');

name.addEventListener('keyup', function(event){let name = event.target; validateInp(name)}, false);
email.addEventListener('keyup', function(event){let name = event.target; validateInp(name)}, false);
phone.addEventListener('keyup', function(event){let name = event.target; validateInp(name)}, false);

function validateInp(ele) {
    
    let reg = '';
    switch(ele.id){
        case 'name':
            reg = /[a-zA-Zа-яА-Я]+/gum;
            break;  
        case 'email':
            reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break;
        case 'phone':
            reg = /^[\d\(\)\+\s/-]+$/;
            break;
        }
    let v = (reg.test(ele.value)) ? ele.style.borderColor = 'green':ele.style.borderColor = 'red';
}


function formAdd(ele) {
    document.getElementsByClassName('inp--'+ele.id)[0].classList.add('inp--active');
}
function formRem(ele) {
    if(ele.value === '')
    document.getElementsByClassName('inp--'+ele.id)[0].classList.remove('inp--active');
}


form.addEventListener("focus", function( event ) {let ele = event.target; formAdd(ele)}, true);
form.addEventListener("focusout", function( event ) {let ele = event.target; formRem(ele)}, true);

form.addEventListener("submit", function (event) {
    
    if(!(name.validity.valid && email.validity.valid) || !(name.validity.valid && phone.validity.valid)){
        event.preventDefault();
    }
    

    if (!email.validity.valid) {
      
      // If the field is not valid, we display a custom
      // error message.
      error.innerHTML = "I expect an e-mail, darling!";
      error.className = "error active";
      // And we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  }, false);