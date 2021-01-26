/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

const Button = styled.button`
  margin-top: 20px;
  text-align: center;
  padding: 15px 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0;
  cursor: pointer;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius}
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: 0;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius}
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Legend of Code</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={function (e) {
                  setName(e.target.value);
                }}
                placeholder="Diz ai seu nome pra jogar :)"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ddsahd dadsd ds....</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/AlanDeveloper" />
      </QuizContainer>
    </QuizBackground>
  );
}
