/* eslint-disable max-len */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useCallback, useState, createContext } from 'react';
import api from '../services/api';

interface IContext {
  testandoApenas: any;
  data: any
  setData: any
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: React.FC = ({ children }) => {

  var teste = 'asdsad';

  const [data, setData] = useState<any>('');

  const testandoApenas = useCallback(async (rota) => {
    var newCharacters: any = {};
    const filmsNames: any[] = [];

    console.log('rota', rota);

    const respostona = await api.get(`/people/?search=${rota}`);

    respostona.data.results[0].films.map(async (item: any) => {
      const resposta = await api.get(`${item}`);
      filmsNames.push(resposta.data.title);
    });

    newCharacters = {
      ...respostona.data,
      nomeDosFilmes: filmsNames,
    };

    console.log('novos chars', newCharacters);

    setTimeout(() => {
      setData(newCharacters);

    }, 1000);

    return newCharacters;

  }, []);

  return (
    <AuthContext.Provider value={{ testandoApenas, data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
