let banner = document.getElementsByClassName("banner")[0];
let navbar = document.getElementsByClassName("navbar")[0];

window.onscroll = function() {
    if (window.pageYOffset >= navbar.offsetTop) {
        banner.classList.add("sticky");
    } else {
        banner.classList.remove("sticky");
    }
};
