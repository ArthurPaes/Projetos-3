import React from 'react';

import { Grid } from '@material-ui/core';
import * as S from './styles';

import logo from '../../assets/index.jpeg';
import SigninBanner from './LoginBanner';
import SigninForm from './LoginForm';

const SigninPage = () => (
  <S.AuthPageContainer>
    <Grid container style={{ height: '100%', padding: 0 }}>
      <Grid item xs={12} md={8} sm={6}>
        <SigninBanner />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white',
          }}
        >
          {/* <div
            style={{
              background: `url(${logo}) no-repeat center center`,
              backgroundSize: 'contain',
              height: 200,
              marginBottom: 20,
              width: '85%',
            }}
          /> */}
          <SigninForm />
        </div>
      </Grid>
    </Grid>
  </S.AuthPageContainer>
);

export default SigninPage;
