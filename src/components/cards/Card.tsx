import {createUseStyles} from 'react-jss'
import { CharacterProps } from '.'

interface Props {
  data: CharacterProps
}

// CSS-in-JS
const useStyles = createUseStyles({
  myCard: {
    borderRadius: 12,
    border: '1px solid gray',
    padding: 10,
    width: 'fit-content',
    background: '#04F06A',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  gender: {
    color: ((props: any) => props.gender === 'Male' ? 'blue' : 'red')
  }
})

export const Card = ({data}: Props) => {
  const gender = data.gender
  const styles = useStyles({gender})
  return (
    <article key={data.id} className={styles.myCard}>
      <img src={data.image} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <h3 className={styles.gender}>{data.gender}</h3>
      </div>
    </article>
  );
}