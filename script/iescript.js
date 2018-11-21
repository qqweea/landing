
function bullets() {
    var pag = document.getElementById('trainers__pagination').children;
    var add = 1;
    for (var i = 0; i < pag.length; i++) {
        pag[i].classList.add('trainer-' + add);
        add++;
    }
}

window.onload = bullets();
window.onload = function(){bullets();};


// Form Variables
var form = document.getElementById("form");
var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var error = document.querySelector('.error');

name.addEventListener('keyup', function (event) {
    var name = event.target;validateInp(name);
}, false);
email.addEventListener('keyup', function (event) {
    var name = event.target;validateInp(name);
}, false);
phone.addEventListener('keyup', function (event) {
    var name = event.target;validateInp(name);
}, false);

function validateInp(ele) {

    var reg = '';
    switch (ele.id) {
        case 'name':
            reg = /[A-Za-z\u0410-\u044F]+/gm;
            break;
        case 'email':
            reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break;
        case 'phone':
            reg = /^[\d\(\)\+\s/-]+$/;
            break;
    }
    var v = reg.test(ele.value) ? ele.style.borderColor = 'green' : ele.style.borderColor = 'red';
}

function formAdd(ele) {
    document.getElementsByClassName('inp--' + ele.id)[0].classList.add('inp--active');
}
function formRem(ele) {
    if (ele.value === '') document.getElementsByClassName('inp--' + ele.id)[0].classList.remove('inp--active');
}

form.addEventListener("focus", function (event) {
    var ele = event.target;formAdd(ele);
}, true);
form.addEventListener("focusout", function (event) {
    var ele = event.target;formRem(ele);
}, true);

form.addEventListener("submit", function (event) {

    if (!(name.validity.valid && email.validity.valid) || !(name.validity.valid && phone.validity.valid)) {
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

var anchor = {
    anchors: document.getElementsByClassName('anchor'),

    currentView: function isElementInViewport(el) {

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        ;
    },

    visible: function visibleAnchor() {
        for (var i = 0; i < this.anchors.length; i++) {
            if (this.currentView(this.anchors[i])) {
                return this.anchors[i].id;
            }
        }
    },

    update: function update() {
        if (this.visible() != location.hash.replace('#', "") && this.visible() != undefined) {
            history.replaceState(null, null, "#" + this.visible());
        }
    },

    goTo: function goTo() {
        for (var i = 0; i < this.anchors.length; i++) {
            if (this.anchors[i].id === location.hash.replace('#', "")) {
                location.hash = this.anchors[i + 1].id;
                break;
            }
        }
    }
};

document.addEventListener('scroll', function () {
    anchor.update();
}, false);
document.getElementsByClassName('side-menu__next')[0].addEventListener('click', function () {
    anchor.goTo();
}, false);