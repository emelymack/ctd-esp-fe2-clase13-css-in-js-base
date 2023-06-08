// import {createUseStyles} from 'react-jss'
import { CharacterProps } from '.'
import styled from 'styled-components'

interface Props {
  data: CharacterProps
}
interface GenderProps {
  gender: String
}

// CSS-in-JS
// const useStyles = createUseStyles({
//   myCard: {
//     borderRadius: 12,
//     border: '1px solid gray',
//     padding: 10,
//     width: 'fit-content',
//     background: '#04F06A',
//     marginBottom: 20,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center'
//   },
//   gender: {
//     color: ((props: any) => props.gender === 'Male' ? 'blue' : 'red')
//   }
// })

// Styled Components
const Card = styled.article`
  border-radius: 12px;
  padding: 10;
  width: fit-content;
  background: #04F06A;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
`;
const Gender = styled.h3<GenderProps>`
  color: ${({gender}) => gender === 'Male' ? 'blue' : 'red'};
`;
const Img = styled.img`
  border-radius: 12px 12px 0 0;
`

export const CharacterCard = ({data}: Props) => {
  // const styles = useStyles({gender})
  return (
    <Card key={data.id}>
      <Img src={data.image} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <Gender gender={data.gender}>{data.gender}</Gender>
      </div>
    </Card>
  );
}