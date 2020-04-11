import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  }
body {
  background: #ddd;
  box-sizing: inherit; 
  font: 16px sans-serif;
  margin:0;
}
}
.header, .footer {
  background: #db7093;
  color: #fff;
  font-size: 18px;
  margin: 0;
  text-align: center;
}
.header {
  height: 50px;
}
.footer {
  height: 40px;
}
.header p  {
  margin: 0;
}
.footer p  {
  margin: 0;
  padding-top:10px;
}
.wrapper {
  display: flex;
  max-width: 1000px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin: 0 auto;
  min-height: calc(100vh - 90px);
  justify-content: space-between;
}
.menu {
  width: 25%;
  background-color: rgb(239, 239, 239); 
  padding: 15px 5px 0;
  };
.menu h3 {
  margin: 0 0 20px 0;
  text-align: center;
}
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li a { 
  display: block;
  padding: 5px 10px 5px 5px;
  text-decoration: none;
  color: #000;
  background: #f5d8eb;
  margin-bottom: 2px;
}
.menu li a:hover, .openSubmenu:hover {
  color: #666;
}


.containerSubmenu { 
  background: #f5d8eb;
  position: relative;
  padding-left: 5px;
  margin-bottom: 2px;
}

.submenu {
  display: none;
  margin: 0 2px 0 5px;
}

ul.submenu a {
  background: rgba(176,71,112,0.8);
  color: #fff;
  }
ul.submenu a:hover {
  color: #fff;
  }


.openSubmenu {
  display: block;
  padding: 5px 10px 5px 0; 
}

.containerSubmenu:hover .submenu {
  display: block;
  position: absolute;
  top: 0;
  left: 90%;
  z-index: 10;
}
.submenu:hover {
  display: block;
}





main {
  width: 75%;
  background: #fff;
  padding: 5px 0 0 20px;
  };
main h1 {
    margin:0 0 20px 0;
    text-align: center;
  }

`;

export default GlobalStyle;
