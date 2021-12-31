import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Description from './Description'

const Experience = () => {
  const URL = 'https://course-api.com/react-tabs-project'
  const [people, setPeople] = useState([])
  const [selectedId, setSelectedId] = useState('')
  const [person, setPerson] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL)
        if (res.status === 200) {
          const data = await res.json()
          setPeople(data)
          setSelectedId(data[0].id)
          setPerson(data[0])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const clickHandler = (id) => {
    setSelectedId(id)
    const clickedPerson = people.filter((person) => person.id === id)[0]
    setPerson(clickedPerson)
  }

  return (
    <StyledWrapper>
      <div className='heading'>
        <h1 className='heading__title'>Experience</h1>
        <div className='heading__bottom-line'></div>
      </div>
      <div className='info'>
        <div className='info__name'>
          {people.map((person) => (
            <button
              className={`${selectedId === person.id ? 'selected' : ''}`}
              key={person.id}
              onClick={() => clickHandler(person.id)}
            >
              {person.company}
            </button>
          ))}
        </div>

        <div className='info__description'>
          <Description {...person} />
        </div>
      </div>

      <button className='more-info'>More Info</button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .heading {
    &__title {
      font-size: 4rem;
    }

    &__bottom-line {
      height: 0.4rem;
      width: 8rem;
      background-color: var(--clr-teal-dark);
      margin: 0.5rem auto;
    }
  }

  .info {
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;

    &__name {
      margin-right: 8rem;
      button {
        font-size: 2.5rem;
        font-weight: 400;
        display: block;
        padding: 1rem 3rem;

        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }

        &.selected {
          border-left: 2px solid var(--clr-teal-dark);
          color: var(--clr-teal-dark);
        }
      }
    }
  }

  .more-info {
    margin-top: 5rem;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    background-color: var(--clr-teal-dark);
    color: var(--clr-background);
    padding: 0.7rem 4rem;
    border-radius: 0.5rem;
    transition: all 0.3s;
    font-weight: 700;
    box-shadow: var(--box-shadow-1);

    &:hover {
      background-color: var(--clr-teal-light);
      color: #000;
    }
  }
`

export default Experience
