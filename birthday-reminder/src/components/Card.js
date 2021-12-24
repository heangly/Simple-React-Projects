import { useState } from 'react'
import Person from './Person'
import data from '../data'

const Card = () => {
  const [people, setPeople] = useState(data)

  const clickHandler = () => {
    setPeople([])
  }

  const reloadHandler = () => {
    setPeople(data)
  }

  return (
    <div className='card box-shadow-2 rounded'>
      <h1> {people.length} Birthdays Today</h1>
      {people.map((d) => (
        <Person key={d.id} person={d} />
      ))}
      {people.length > 0 ? (
        <button className='btn btn-pink' onClick={clickHandler}>
          Clear All
        </button>
      ) : (
        <button className='btn btn-pink' onClick={reloadHandler}>
          Reload Birthday
        </button>
      )}
    </div>
  )
}

export default Card
