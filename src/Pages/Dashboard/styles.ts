import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  max-width: 28.125rem;
  line-height: 3.5rem;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.75rem;

  display: flex;

  button {
    width: 13.125rem;
    height: 70px;
    background: #04d361;
    border-radius: 0.313rem;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 43.75rem;

  ul {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + ul {
      margin-top: 16px;
    }
    &:hover {
      transform: translatex(10px);
    }
  }

  div {
    margin-left: 1rem;
    flex: 1;
    svg {
      color: #cbcbd6;

      transition: filter 0.2s;
      cursor: pointer;
      &:hover {
        filter: brightness(0.7);
      }
    }

    p {
      font-size: 1.125rem;
      margin-top: 0.25rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  button {
    width: 13.125rem;
    height: 4.375rem;
    margin-top: 1.25rem;
    background: #04d361;
    border-radius: 5px 5px 5px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
