import {navigationBar} from './navBar';

function contactLoad (){
    const divContent = document.getElementById("content");
    divContent.innerHTML = `
   
    <div class="borderContent">
      <div class = "textBox">
      <h2 class ="textBody" id = "hours">Opening Hours </h2> 
        <br>
      <p4 class ="textBody" id= "timesDay">Mon - Fri : noon - 9pm</p4> 
        <br>
      <p4 class ="textBody" id= "timesEnd">Sat & Sun : 9am - 5pm</p4> 
        <br>
      <h2 class ="textBody" id="phone"> Phone </h2>
        <p4 class ="textBody" id = "number"> 08 86547239</p4>
        <br>
      <a class ="textBody"><img id="instaIcon" src="https://i.ibb.co/mqVvLhM/instagram.png" alt="instagram" border="0"></a>
      <a class ="textBody"><img src="https://i.ibb.co/bNFnPcD/facebook.png" alt="facebook" border="0"></a>
      </div>
      
    </div>
`;
}

export {contactLoad}