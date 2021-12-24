const Person = ({ person }) => {
  return (
    <div className='person'>
      <div className='person__image'>
        <img src={person.image} alt={person.name} />
      </div>
      <div className='person__info'>
        <h3>{person.name}</h3>
        <p>{person.age} years</p>
      </div>
    </div>
  )
}

export default Person
