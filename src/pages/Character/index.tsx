/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title,
} from './styles';

interface CharacterParams{
  character: string;
}

interface CharacterInfo {
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
      films: [
        {
        title: string;
        }
      ];
      species: [];
      vehicles: [];
      starships: [];
      favorited: boolean;

    }
  ];

}

interface HomeworldInfo{
 name:string
 url:string;
}

interface SpeciesInfo{
  name:string
  url:string;
 }

interface FilmsInfo{
   title:string;

}

interface FavoriteInfo{

  favoritado: boolean;

}

const Character: React.FunctionComponent = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  const [homeworld, setHomeworld] = useState<HomeworldInfo | null>(null);
  const [species, setSpecies] = useState<SpeciesInfo | null>(null);
  const [films, setFilms] = useState<FilmsInfo[]>([]);

  const { params } = useRouteMatch<CharacterParams>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getRidOfHttp(string: string) {
    const url = string.replace(/^https?:\/\//, '');
    const baseUrl = 'swapi.dev/api/';
    const finalUrl = url.replace(baseUrl, '');
    return finalUrl;
  }

  useEffect(() => {
    api.get(`/people/?search=${params.character}`).then((response) => {
      setCharacter(response.data);
    });
  }, [params.character]);

  useEffect(() => {
    api.get(`${character?.results[0].homeworld}`).then((response) => {
      setHomeworld(response.data);
    });

    api.get(`${character?.results[0].species}`).then((response) => {
      setSpecies(response.data);
    });

    api.get(`${character?.results[0].films}`).then((response) => {
      setFilms(response.data);
    });
  }, [character]);

  if (character?.results[0].favorited === true) {
    useEffect(() => {
      localStorage.setItem(
        '@githubExplorer:repositories', JSON.stringify(character),
      );
    },
    [character]); // saves repositores on localstorage when repositories is altered
  }

  return (
    <>
      <Header>
        <Title>Star Wars Explorer</Title>
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <Info>
        <header>
          <div>
            <strong>{character?.results[0].name}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>Height: {character?.results[0].height}cm</p>
            <p>Birth Year: {character?.results[0].birth_year}</p>
            <p>Mass: {character?.results[0].mass}kg</p>

            <Link key={homeworld?.name} to={`/Homeworlds/${getRidOfHttp(String(homeworld?.url))}`}>
              <p>Homeworld: {homeworld?.name}</p>
            </Link>
            {character?.results[0].species.length && <p>Species:</p>}
            <Link key={species?.name} to={`/species/${getRidOfHttp(String(species?.url))}`}>

              <p>{species?.name}</p>
            </Link>

            {character?.results[0].vehicles.length && <p>Their vehicles:</p>}
            {character?.results[0].vehicles.map((vehicle) => (
              <Link key={vehicle} to={`/vehicles/${getRidOfHttp(String(vehicle))}`}>
                <p>{vehicle}</p>
              </Link>

            ))}

            <p>Films they appear in:</p>
            {character?.results[0].films.map((film) => (

              <Link key={film.title} to={`/Details/${(getRidOfHttp(String(film)))}`}>
                <p>{film}</p>
              </Link>
            ))}

            {character?.results[0].starships.length && <p>Their starships:</p>}
            {character?.results[0].starships.map((starship) => (

              <Link key={starship} to={`/Starships/${(getRidOfHttp(String(starship)))}`}>
                <p>{starship}</p>
              </Link>
            ))}

          </li>
        </ul>

      </Info>

    </>
  );
};

export default Character;
