import { useState } from 'react'
import styled from 'styled-components'

const Accordion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <StyledWrapper>
      <div className='title'>
        <h2>{title}</h2>
        <i
          className={`fas fa-${showInfo ? 'minus' : 'plus'}`}
          onClick={() => setShowInfo(!showInfo)}
        ></i>
      </div>
      {showInfo && <p>{info}</p>}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  box-shadow: var(--box-shadow-2);
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  padding: 2.5rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.9rem;
      letter-spacing: 0.17rem;
      margin-right: 1rem;
    }

    i {
      background-color: var(--clr-light);
      color: var(--clr-secondary);
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: var(--clr-secondary);
        color: var(--clr-light);
      }
    }
  }

  p {
    margin-top: 2rem;
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
    color: var(--clr-text);
  }
`

export default Accordion
