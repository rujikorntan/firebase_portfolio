import React from 'react';
import './Navbar.css'

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {    //down-content
    let navnav = document.getElementById('navnav');
    navnav.style.setProperty('background-color', 'white', 'important');
    navnav.style.top = "0px";
    navnav.style.height = "58px";
    navnav.style.color = 'black';
    navnav.classList.add("nav-scrollDown");
    document.querySelector('.menu-bar').style.justifyContent = "center";

    const listBar= document.querySelectorAll('li');
    listBar.forEach((box) => {
      box.style.paddingTop = '5px';
      box.style.paddingBottom = '14px';
      box.style.marginLeft = '30px';
    })
    let upscroll = document.getElementById('icon-scroll');
    upscroll.style.visibility = 'visible';
    upscroll.style.fontSize = '2.5vw';

    // let select = document.querySelectorAll('#select');           //select aboutMe
    // select.forEach((sel, index) => {
    //   if(index === 0){
    //     sel.style.color = 'rgb(230, 76, 16)';
    //     sel.style.borderBottom = '1px solid rgb(230, 76, 16)';
    //   }else{
    //     sel.style.color = 'unset';
    //     sel.style.border = 'unset';
    //   }
    // })
    // if (document.body.scrollTop > 790 || document.documentElement.scrollTop > 790) {    //select experience
    //   let select = document.querySelectorAll('#select');
    //   select.forEach((sel, index) => {
    //     if(index === 1){
    //       sel.style.color = 'rgb(230, 76, 16)';
    //       sel.style.borderBottom = '1px solid rgb(230, 76, 16)';
    //     }else{
    //       sel.style.color = 'unset';
    //       sel.style.border = 'unset';
    //     }
    //   })
    // }
    // if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {    //select contact
    //   let select = document.querySelectorAll('#select');
    //   select.forEach((sel, index) => {
    //     if(index === 2){
    //       sel.style.color = 'rgb(230, 76, 16)';
    //       sel.style.borderBottom = '1px solid rgb(230, 76, 16)';
    //     }else{
    //       sel.style.color = 'unset';
    //       sel.style.border = 'unset';
    //     }
    //   })
    // }
  } 
  else  if ( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {   // hide
    let navnav = document.getElementById('navnav');
    navnav.style.backgroundColor = "transparent";
    navnav.style.top = "-90px";
    navnav.style.color = "white"
  }else  if (document.body.scrollTop <= 200 || document.documentElement.scrollTop <= 200) {   // top
    let navnav = document.getElementById('navnav');
    navnav.classList.remove("nav-scrollDown");
    navnav.style.backgroundColor = "transparent";
    navnav.style.top = "0px";
    navnav.style.color = "white";
    navnav.style.height = "auto";
    document.querySelector('.menu-bar').style.justifyContent = "flex-end";


    const listBar= document.querySelectorAll('li');
    listBar.forEach((box) => {
      box.style.padding = '20px';
      box.style.marginLeft = '0px';

    })

    let upscroll = document.getElementById('icon-scroll');
    upscroll.style.visibility = 'hidden';
    upscroll.style.fontSize = '0px';


    // let select = document.querySelectorAll('#select');      //select none
    // select.forEach((sel) => {
    //     sel.style.color = 'unset';
    //     sel.style.border = 'unset';
    // })
  }
}
const Navbar = ({onRouteChange}) => {
  const routeTo = (jump, select_i) => {
    // const select = document.querySelectorAll('#select');
    // select.forEach((sel, index) => {
    //   if(index === select_i){
    //     sel.style.color = 'rgb(230, 76, 16)';
    //     sel.style.borderBottom = '1px solid rgb(230, 76, 16)';
    //   }else{
    //     sel.style.color = 'unset';
    //     sel.style.border = 'unset';
    //   }
    // })
    onRouteChange(jump);
  }
  return (
    <div className="nav-bar" id="navnav">
      <ul className="menu-bar">
        <li id="select"  onClick={() => routeTo('me', 0)}>About me</li>
        <li id="select"  onClick={() => routeTo('experience', 1)}>Experience</li>
        <li id="select"  onClick={() => routeTo('contact', 2)}>Contact</li>
      </ul>
    </div>
  )
}
export default Navbar;