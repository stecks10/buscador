import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Title, Form, Repositories } from './styles';
import { AiFillDelete } from 'react-icons/ai';

interface Repository {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  filtro: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function handleRemove(index: number) {
    const newArray = [...repositories];
    newArray.splice(index, 1);
    setRepositories(newArray);
  }

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const { data } = await axios('https://www.boredapi.com/api/activity/');
    const repository = data;

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <Title>Explore suas Buscas</Title>

      <Form onSubmit={handleAddRepository}>
        <button type="submit">Gere uma busca</button>
      </Form>

      <Repositories>
        {repositories.map((repository, index) => {
          return (
            <ul key={index}>
              <div>
                <AiFillDelete onClick={() => handleRemove(index)} size={20} />

                <p> Nome da atividade: {repository.activity}</p>
                <p>Tipo da atividade: {repository.type}</p>
                <p> Quantidade de participantes: {repository.participants}</p>
                <p> Custo da atividade: {repository.price}</p>
                {repository.link ? (
                  <p> link da atividade: {repository.link}</p>
                ) : null}

                <p> Acessibilidade: {repository.accessibility}</p>
                <p>Chave da atividade: {repository.key}</p>
              </div>
            </ul>
          );
        })}
      </Repositories>
    </>
  );
};

export default Dashboard;
