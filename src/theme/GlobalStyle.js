import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  }
body {
  box-sizing: inherit; 
  font: 16px sans-serif;
  margin:0;
}
}
.header, .footer {
  background: rgb(219, 112, 147);
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
  min-height: calc(100vh - 90px);
  justify-content: space-between;
}
.menu {
  width: 20%;
  padding-left: 10px; 
  background-color: rgb(239, 239, 239); 
  };
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
main {
  width: 80%;
  background: #ffc;
  padding-left: 20px;
  };

`;

export default GlobalStyle;
