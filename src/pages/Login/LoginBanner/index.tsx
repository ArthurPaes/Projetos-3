import React from 'react';
import { Typography } from '@material-ui/core';

import * as S from './styles';

const SigninBanner = () => (
  <S.FullWidthContainer>
    <S.BannerWrapper>
      <S.WelcomeWrapper className="wrapper welcome-wrapper">
        <Typography className="subtitle" variant="h4">
          Bem-vindo(a) à
        </Typography>
        <Typography className="title" variant="h1">
          Sua Área
        </Typography>
        <Typography className="title" variant="h1">
          De Estudos
        </Typography>
      </S.WelcomeWrapper>

      <S.LogoWrapper className="wrapper">
        <Typography>a</Typography>
      </S.LogoWrapper>
    </S.BannerWrapper>
  </S.FullWidthContainer>
);

export default SigninBanner;
