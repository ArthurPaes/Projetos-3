import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import {
  Title, Form, Repositories, Error,
} from './styles';

interface Repository{
  full_name: string;
  description: string;
  owner:{
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories); // desconvertendo para um array
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories', JSON.stringify(repositories),
    );
  },
  [repositories]); // saves repositores on localstorage when repositories is altered

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError(' Type author/name of repository');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Error trying to find repository');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github_discoverer" />
      <Title>Explore github repositories</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(eventInput) => setNewRepo(eventInput.target.value)}
          placeholder="Type repository name"
        />
        <button type="submit">Explore</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      {' '}
      {/* se inputError estiver preenchido, mostre o erro em tela */}
      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>

        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
