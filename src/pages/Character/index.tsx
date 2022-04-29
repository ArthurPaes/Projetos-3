/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React, {
  useCallback, useEffect, useState, useContext,
} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import { Header, Info, Title } from './styles';
import { AuthContext, AuthProvider } from '../../components/test';

interface CharacterParams {
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
      homeworld: string;
      films: [
        {
          title: string;
        },
      ];
      species: [];
      vehicles: [];
      starships: [];
      favorited: boolean;
    },
  ];
  filmeszeira: {
    name: string;
    url: string;
  }[];
}

interface HomeworldInfo {
  name: string;
  url: string;
}

interface SpeciesInfo {
  name: string;
  url: string;
}

interface FilmsInfo {
  title: string;
}

interface FavoriteInfo {
  favoritado: boolean;
}

const Character: React.FunctionComponent = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  const [homeworld, setHomeworld] = useState<HomeworldInfo | null>(null);
  const [species, setSpecies] = useState<SpeciesInfo | null>(null);
  const [films, setFilms] = useState<FilmsInfo[]>([]);

  const { testandoApenas, data, setData } = useContext(AuthContext);

  const { params } = useRouteMatch<CharacterParams>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getRidOfHttp(string: string) {
    const url = string.replace(/^https?:\/\//, '');
    const baseUrl = 'swapi.dev/api/';
    const finalUrl = url.replace(baseUrl, '');
    return finalUrl;
  }

  let newCharacters: any = {};
  const filmsNames: { name: string; url: string }[] = [];

  const fetchData = useCallback(async () => {
    const dados = await testandoApenas(params.character);
    console.log('dados', dados);
    // setData(dados)
  }, [params.character]);

  useEffect(() => {
    // fetchData()
    // console.log('wth', teste)
    // setCharacter(teste)
    api.get(`/people/?search=${params.character}`).then((response: any) => {
      if (response.data) {
        const fetchHistory = response.data.results[0].films.map(
          // eslint-disable-next-line no-async-promise-executor
          (item: any) => new Promise<void>(async (resolve, reject) => {
            const resposta = await api.get(`${item}`);
            filmsNames.push({
              name: resposta.data.title,
              url: resposta.data.url,
            });

            resolve();
          }),
        );
        newCharacters = {
          ...response.data,
          filmeszeira: filmsNames,
        };
        console.log('duha81h4e ', newCharacters);
        Promise.all(fetchHistory);
      }
      setTimeout(() => {
        setCharacter(newCharacters);
      }, 2000);
    });
  }, [params.character]);

  useEffect(() => {
    if (character?.results[0].homeworld) {
      api.get(`${character?.results[0]?.homeworld}`).then((response: any) => {
        setHomeworld(response.data);
        console.log('acho que nem ta send');
      });
    }

    if (character?.results[0].species) {
      api.get(`${character?.results[0].species}`).then((response: any) => {
        setSpecies(response.data);
        console.log('teste');
      });
    }

    // console.log("aaaaaaaaaaaa", character?.results[0].films)

    // api.get(`${character?.results[0].films}`).then((response: any) => {
    //   setFilms(response.data);
    //   console.log("dados")
    // });
  }, [character]);

  if (character?.results[0].favorited === true) {
    useEffect(() => {
      localStorage.setItem(
        '@githubExplorer:repositories',
        JSON.stringify(character),
      );
    }, [character]); // saves repositores on localstorage when repositories is altered
  }

  useEffect(() => {
    // console.log("teasd234", teste)
    console.log('daibdiad', character);
    console.log('logando', data);
  }, [character, data]);

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

            <Link
              key={homeworld?.name}
              to={`/Homeworlds/${getRidOfHttp(String(homeworld?.url))}`}
            >
              <p>Homeworld: {homeworld?.name}</p>
            </Link>
            {character?.results[0].species.length && <p>Species:</p>}
            <Link
              key={species?.name}
              to={`/species/${getRidOfHttp(String(species?.url))}`}
            >
              <p>{species?.name}</p>
            </Link>

            {character?.results[0].vehicles.length && <p>Their vehicles:</p>}
            {character?.results[0].vehicles.map((vehicle) => (
              <Link
                key={vehicle}
                to={`/vehicles/${getRidOfHttp(String(vehicle))}`}
              >
                <p>{vehicle}</p>
              </Link>
            ))}

            <p>Films they appear in:</p>
            {character
              && character?.filmeszeira.map((film: any) => (
                <Link
                  key={film.name}
                  to={`/Details/${getRidOfHttp(String(film.url))}`}
                >
                  <p>{film.name}</p>
                </Link>
              ))}

            {character?.results[0].starships.length && <p>Their starships:</p>}
            {character?.results[0].starships.map((starship) => (
              <Link
                key={starship}
                to={`/Starships/${getRidOfHttp(String(starship))}`}
              >
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
