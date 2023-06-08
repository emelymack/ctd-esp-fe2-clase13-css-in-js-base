import React from "react";
import {createUseStyles} from 'react-jss'

// CSS-in-JS
const useStyles = createUseStyles({
  container: {
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    color: '#002400',
    fontWeight: 800,
    fontSize: 40,
    marginBottom: 10
  },
  text: {
    width: '75vw',
  },
  button: {
    padding: '10px 25px',
    borderRadius: 12,
    border: '2px solid #002400',
    background: '#04F06A',
    color: '#002400',
    fontWeight: 600,
    boxShadow: '6px 5px 12px #002400',
    marginRight: 20,
    fontSize: 17,
    '&:hover': {
      background: '#002400',
      color: '#04F06A'
    },
    '&:active': {
      color: 'white'
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  }
})

const Banner = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rick and Morty</h1>
      <p className={styles.text}>
          Rick and Morty es una serie animada para adultos de ciencia
          ficción y comedia estadounidense creada por Justin Roiland y
          Dan Harmon para el bloque de programación nocturna Adult Swim,
          transmitido en el canal Cartoon Network.
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Ver el trailer</button>
        <button className={styles.button}>Guardar en favoritos</button>
      </div>
    </div>
  );
};

export default Banner;
