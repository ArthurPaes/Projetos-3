/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  Grid, Card, CardContent, Button,
} from '@material-ui/core';
import { Formik, Form as FormikForm } from 'formik';
// @ts-ignore
import { FormikTextField } from 'formik-material-fields';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

const SigninForm = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/Dashboard');
  };
  return (
    <S.FormWrapper>
      <Grid container justify="center" alignItems="center">
        <Card>
          <CardContent>
            <Formik onSubmit={handleSubmit} initialValues={[]}>
              {() => (
                <FormikForm>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormikTextField name="email" label="Email" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikTextField
                        name="password"
                        label="Senha"
                        fullWidth
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button style={{backgroundColor:'#FF8B1F'}} variant="contained" type="submit" color="primary">
                        Entrar
                      </Button>
                    </Grid>
                  </Grid>
                </FormikForm>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
    </S.FormWrapper>
    // </FullWidthContainer>
  );
};

export default SigninForm;
