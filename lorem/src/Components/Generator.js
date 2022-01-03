import { useState } from 'react'
import styled from 'styled-components'
import data from '../data'

const Generator = () => {
  const [paragraphs, setParagraphs] = useState([])
  const [num, setNum] = useState(1)

  const clickHandler = () => {
    if (num <= 0) {
      setParagraphs([data[0]])
    } else if (num >= data.length - 1) {
      setParagraphs(data)
    } else {
      setParagraphs(data.slice(0, num))
    }
  }

  return (
    <StyledWrapper>
      <h1 className='title'>Tired of boring lorem ipsum?</h1>

      <div className='generate'>
        <h2>Paragraphs: </h2>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type='number'
        />
        <button onClick={clickHandler}>Generate</button>
      </div>

      <div className='para'>
        {paragraphs.map((pa, idx) => (
          <p key={idx}>{pa}</p>
        ))}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 90%;
  text-align: center;
  margin: 8rem auto;

  .title {
    color: var(--clr-text-primary);
    font-size: 3rem;
    text-transform: uppercase;
  }

  .generate {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--clr-text-primary);
      letter-spacing: 0.1rem;
    }

    input {
      margin: 0 1.5rem;
      font-size: 2rem;
      padding: 0.6rem;
      width: 7rem;
      border: none;
      box-shadow: var(--box-shadow-1);
      border-radius: 0.3rem;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: var(--clr-btn-primary);
      padding: 0.8rem 2rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      border-radius: 0.3rem;
      transition: all 0.3s;
      box-shadow: var(--box-shadow-1);

      &:hover {
        background-color: var(--clr-btn-secondary);
        color: var(--clr-btn-primary);
      }
    }
  }

  .para {
    margin-top: 8rem;
    p {
      color: var(--clr-text-secondary);
      font-size: 1.6rem;
      margin-top: 3rem;
    }
  }
`

export default Generator
