import {initPage} from './pageLoad';
import {navigationBar} from './navBar';
import {menuLoad} from './menuPage';
import {contactLoad} from './ContactPage';

initPage();
navigationBar("animation start-home");


var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menuLoad);

var homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", initPage);

var contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", contactLoad);


