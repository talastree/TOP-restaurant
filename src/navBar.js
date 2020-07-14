   function navigationBar(x) { 
      const head = document.getElementById("head");
      var header = document.createElement("h1");
      var heading = document.createTextNode("Inams Kitchen");
      var nav = document.createElement("nav");
      var hypeHome = document.createElement("a");
      hypeHome.id = "homeBtn";
      var hypeContact = document.createElement("a");
      hypeContact.id = "contactBtn";
      var hypeMenu = document.createElement("a");
      hypeMenu.id = "menuBtn";
      var navHome = document.createTextNode("Home");
      var navContact = document.createTextNode("Contact");
      var navMenu = document.createTextNode("Menu");
      var animateDiv = document.createElement("div");
      animateDiv.id = "animateId"
      head.innerHTML = "";
      animateDiv.className = x;
      hypeHome.appendChild(navHome);
      hypeContact.appendChild(navContact);
      hypeMenu.appendChild(navMenu);
      nav.appendChild(hypeHome);
      nav.appendChild(hypeContact);
      nav.appendChild(hypeMenu);
      nav.appendChild(animateDiv);
      header.appendChild(heading);
      head.appendChild(header);
      head.appendChild(nav);
   };

   export {navigationBar};