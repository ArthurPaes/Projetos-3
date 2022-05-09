import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/atividades-para-ensinar-matematica.jpg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

html{
  height:100%;
  widht:100%;
}

body{
  height:100%;
  widht:100%;
  background: #F5F5F5;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
}

body,input , button{
  font:16px;
  font-family: 'Roboto', sans-serif;
}

#root{
  margin: 0 auto;
}

button{
  cursor: pointer;
}

`;
