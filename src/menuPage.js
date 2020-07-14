import {navigationBar} from './navBar';

function menuLoad() {

    const div = document.getElementById("content");
    div.innerHTML = `
    <div class = "borderMenu"> 
      <div class= "menuBorderLine">
       <h2 class = "menuTitle"> Menu </h2> 
        <p3 class = "itemOne">Beef Burger + Fries</p3>
        <br>
        <p3 class = "itemTwo">Schnitzel (chicken or beef) with Salad and Mushroom Sauce</p3>
        <br>
        <p3 class = "itemThree">Spaghetti Meatballs w/ Parmesan Cheese and Basil</p3>
        <br>
        <p3 class = "itemFour">Porterhouse Steak + Fries and Gravy</p3>
        <br>
        <p3 class = "itemFive">Butter Chicken w/ Basmati rice and Garlic Naan</p3> 
      </div>
    </div>`;
};

export {menuLoad}