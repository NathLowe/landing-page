var breakpoint = 780; //px
// Collapse Links
var lis = document.querySelectorAll('#menu li.collapse');
var timeout = null;
var diselectLi = function (li) {
    if (li.classList.contains('active')) {
        if (timeout != null) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            li.classList.remove('active');
            li.classList.add('hide');
        }, 300);
    }
};
var selectLi = function (li) {
    if (!li.classList.contains('active')) {
        var previously = document.querySelector('#menu li.collapse.active');
        if (previously) {
            diselectLi(previously);
        }
        li.classList.remove('hide');
        li.classList.add('active');
    }
};
var diselectUl = function (ul) {
    var li = ul.parentElement;
    diselectLi(li);
};
var selectUl = function (ul) {
    var li = ul.parentElement;
    if (timeout != null) {
        window.clearTimeout(timeout);
    }
    selectLi(li);
};
var mouseoverli = function (li) { return function () {
    if (window.innerWidth > breakpoint) {
        selectLi(li);
    }
}; };
var mouseoutli = function (li) { return function () {
    if (window.innerWidth > breakpoint) {
        diselectLi(li);
    }
}; };
var clickLi = function (li) { return function () {
    if (window.innerWidth <= breakpoint) {
        if (li.classList.contains('active')) {
            diselectLi(li);
        }
        else {
            selectLi(li);
        }
    }
}; };
var mouseoverul = function (ul) { return function () {
    if (window.innerWidth > breakpoint) {
        selectUl(ul);
    }
}; };
var mouseoutul = function (ul) { return function () {
    if (window.innerWidth > breakpoint) {
        diselectUl(ul);
    }
}; };
if (lis) {
    for (var index = 0; index < lis.length; index++) {
        var li = lis[index];
        li.addEventListener('mouseover', mouseoverli(li));
        li.addEventListener('mouseout', mouseoutli(li));
        li.addEventListener('click', clickLi(li));
        var ulChild = li.querySelector('ul.child');
        ulChild.addEventListener('mouseover', mouseoverul(ulChild));
        ulChild.addEventListener('mouseout', mouseoutul(ulChild));
    }
}
// Menu 
var menuIcon = document.querySelector('#menu .menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', function () {
        var menu = document.querySelector('#menu');
        var content = document.querySelector('#menu .content');
        var body = document.querySelector('body');
        if (!menuIcon.classList.contains('open')) {
            menu.classList.add('open');
            menuIcon.classList.add('open');
            content.classList.add('open');
            body.classList.add('o-hidden');
        }
        else {
            menu.classList.remove('open');
            menuIcon.classList.remove('open');
            content.classList.remove('open');
            body.classList.remove('o-hidden');
        }
    });
}
