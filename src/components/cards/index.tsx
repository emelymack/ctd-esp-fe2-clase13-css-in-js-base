import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import {createUseStyles} from 'react-jss'

export interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const useStyles = createUseStyles({
  container: {
    margin: '40px 0'
  },
  title: {
    textAlign: 'center',
    color: '#273B09',
    fontWeight: 800
  },
  charactersSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px 20px',
  }
})

const Character = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);
  const styles = useStyles()

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Algunos personajes de la serie</h2>
      <section className={styles.charactersSection}>
        {character.map((data: CharacterProps) => (
          <Card data={data} />
        ))}
      </section>
    </div>
  );
};

export default Character;
