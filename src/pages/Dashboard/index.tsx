/* eslint-disable max-len */
import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight, FiStar } from 'react-icons/fi';
import { GoStar, GrFavorite } from 'react-icons/all';
import { Link } from 'react-router-dom';
import {} from '@material-ui/core';
import api from '../../services/api';
import {
  Title, Form, Info, Error, Header, Button,
} from './styles';

interface CharacterInfo {
  favorited: boolean;
  count: number;
  results: [
    {
      name: string;
      height: number;
      mass: number;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string
      films: [];
    }
  ];

}

interface HomeworldInfo{
  name:string
 }

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [favorited, setFavorite] = useState<CharacterInfo[]>(() => {
    const storagedCharacter = localStorage.getItem('@githubExplorer:Character');
    if (storagedCharacter) {
      return JSON.parse(storagedCharacter); // desconvertendo para um array
    }
    return [];
  });

  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  // // if (favorite) {
  // const storagedCharacter = localStorage.getItem('@githubExplorer:Character');

  // if (storagedCharacter) {
  //   return JSON.parse(storagedCharacter); // desconvertendo para um array
  // }
  // return [];
  // // }

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:Character', JSON.stringify(favorited),
    );
  },
  [favorited]); // saves repositores on localstorage when Character is altered

  function deleteFavorite(character: CharacterInfo) {
    const filtrados = favorited.filter((char) => char !== character);
    setFavorite(filtrados);
  }

  function handleAddToFavorites(character: CharacterInfo) {
    const existingElement = favorited.some((char) => char.results[0].name === character.results[0].name);

    if (!existingElement) {
      setFavorite([...favorited, character]);
      return;
    }
    setInputError('That character has already been added to favorites');
  }

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError(' Type the character name');
      return;
    }

    const persona = await api.get<CharacterInfo>(`/people/?search=${newRepo}`);

    if (persona.data.count === 0) {
      setInputError('Character not found');
      return;
    }

    const character = persona.data;
    setCharacters([...characters, character]);

    setNewRepo('');
    setInputError('');
  }

  return (
    <>
      <Header>
        Star Wars Explorer
      </Header>
      <Title>Explore Star Wars Characters</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(eventInput) => setNewRepo(eventInput.target.value)}
          placeholder="Type the character name"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      {' '}
      {/* se inputError estiver preenchido, mostre o erro em tela */}

      {characters && (
      <Info>
        {characters.map((character) => (
          <>
            <Link key={character.results[0].name} to={`/character/${character.results[0].name}`}>

              <div>

                <strong className="NormalTitle">{character.results[0].name}</strong>
                <p>Birth Year: {character.results[0].birth_year}</p>
                <p>Gender: {character.results[0].gender}</p>
                <p>Height {character.results[0].height}cm</p>

              </div>

              <FiChevronRight size={20} />
            </Link>

            <Button onClick={() => { handleAddToFavorites(character); }}>Adicionar aos favoritos</Button>
          </>

        ))}
      </Info>
      )}

      {favorited.length && (
      <Info>
        <p>Favorites</p>
        {favorited.map((character) => (
          <>

            <Link key={character.results[0].name} to={`/character/${character.results[0].name}`}>

              <div>
                <GoStar />

                <strong>{character.results[0].name}</strong>
                <p>Birth Year: {character.results[0].birth_year}</p>
                <p>Gender: {character.results[0].gender}</p>
                <p>Height {character.results[0].height}cm</p>

              </div>

              <FiChevronRight size={20} />
            </Link>

            <Button onClick={() => { deleteFavorite(character); }}>Remover dos favoritos</Button>
          </>

        ))}
      </Info>
      )}

    </>
  );
};

export default Dashboard;
