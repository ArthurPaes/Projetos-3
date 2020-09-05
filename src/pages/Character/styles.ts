import styled from 'styled-components';

export const Button = styled.button`
background-color:transparent;
color: #FFE81F;
border: 0;
display: flex;
align-items: center;
text-decoration: none;
color: #FFE81F;
transition: color 0.2s;
font-size:16px;
`;

export const Title = styled.h1`
  color:  #FFE81F;
  text-decoration: none;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFE81F;
    transition: color 0.2s;
  }

  svg{
    margin-right: 4px;
  }
`;

export const Info = styled.section`
  margin-top: 80px;


header{
  display:flex;
  align-items: center;

}
img{
  width: 120px;
  height: 120px;
  border-radius: 50%;

}

div{
  color: #FFE81F;

  strong{
    font-size:40px;
    color: #FFE81F;

  }
  p{
    font-size: 18px;
    color: #FFE81F;
    margin-top: 20px;
  }
}
}

ul{
display: flex;
list-style: none;
margin-top:40px;

li{
  margin-top: 20px

  &+li{
    margin-left: 80px;
    margin-top: 20px;
  }

  strong{
    display: block;
    font-size:36px;
    color: #3d3d4d;
  }

  span{
    display: block;
    margin-top: 4px;
    color: #6c6c80;

  }

  h1{
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 25px;
    color: #FFE81F
  }

  p{
    font-size: 20px;
    color: #FFE81F;
    margin-top: 15px;
  }
}

`;

export const Issues = styled.div`
margin-top: 80px;


a{
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &+a{
    margin-top: 16px
  }





div{
  margin: 0 16px;
  flex: 1;


  strong{
    font-size: 20px;
    color: #3D3D4D;

  }

  p{
    font-size: 18px;
    color: #FFE81F;
    margin-top: 4px;
  }
}
svg{
    margin-left: auto;
    color: #cbcbd6;
  }

  &:hover{
    transform: translateX(10px)
  }

}
`;
