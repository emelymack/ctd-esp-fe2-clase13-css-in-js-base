import React from "react";
import {createUseStyles} from 'react-jss'
import styled from "styled-components";

// CSS-in-JS
// const useStyles = createUseStyles({
//   container: {
//     padding: '10px 20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   title: {
//     textAlign: 'center',
//     color: '#002400',
//     fontWeight: 800,
//     fontSize: 40,
//     marginBottom: 10
//   },
//   text: {
//     width: '75vw',
//   },
//   button: {
//     padding: '10px 25px',
//     borderRadius: 12,
//     border: '2px solid #002400',
//     background: '#04F06A',
//     color: '#002400',
//     fontWeight: 600,
//     boxShadow: '6px 5px 12px #002400',
//     marginRight: 20,
//     fontSize: 17,
//     '&:hover': {
//       background: '#002400',
//       color: '#04F06A'
//     },
//     '&:active': {
//       color: 'white'
//     }
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: 20
//   }
// })

interface BackgroundProps {
  background: boolean
}

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  text-align: 'center';
  color: '#002400';
  font-weight: 800;
  font-size: 40;
  margin-bottom: 10;
`
const Text = styled.p`
  width: 75vw;
`
const BtnContainer = styled.div`
  display: 'flex';
  justify-content: 'center';
  margin-top: 20;
`
const Button = styled.button<BackgroundProps>`
  padding: 10px 25px;
  border-radius: 12px;
  border: 2px solid #002400;
  background: ${({background}) => background ? '#04F06A' : 'gray' };
  color: #002400;
  font-weight: 600;
  box-shadow: 6px 5px 12px #002400;
  margin-right: 15px;
  font-size: 17px;
  &:hover {
    background: #002400;
    color: #04F06A;
  };
  &:active {
    color: white;
  }
`

const Banner = () => {
  // const styles = useStyles()

  return (
    <Container>
      <Title>Rick and Morty</Title>
      <Text>
          Rick and Morty es una serie animada para adultos de ciencia
          ficción y comedia estadounidense creada por Justin Roiland y
          Dan Harmon para el bloque de programación nocturna Adult Swim,
          transmitido en el canal Cartoon Network.
      </Text>
      <BtnContainer>
        <Button background={true}>Ver el trailer</Button>
        <Button background={false}>Guardar en favoritos</Button>
      </BtnContainer>
    </Container>
  );
};

export default Banner;
