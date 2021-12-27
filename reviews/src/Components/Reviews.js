import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
import Review from './Review'

const Reviews = () => {
  const reviewInfos = data
  const [selectedIdx, setSelectedIdx] = useState(0)

  const randomHandler = () => {
    const randNum = Math.floor(Math.random() * reviewInfos.length)
    setSelectedIdx(randNum)
  }

  const prevHandler = () => {
    if (selectedIdx === 0) {
      setSelectedIdx(reviewInfos.length - 1)
    } else {
      setSelectedIdx(selectedIdx - 1)
    }
  }

  const nextHandler = () => {
    if (selectedIdx === reviewInfos.length - 1) {
      setSelectedIdx(0)
    } else {
      setSelectedIdx(selectedIdx + 1)
    }
  }

  return (
    <StyledWrapper>
      <div className='reviews'>
        <div className='reviews__heading'>
          <h1>Our Reviews</h1>
          <div className='bottom-line'></div>
        </div>
        <Review
          reviewInfo={reviewInfos[selectedIdx]}
          randomHandler={randomHandler}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
        />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  .reviews {
    margin: 10rem;

    &__heading {
      text-align: center;
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
      }

      .bottom-line {
        width: 10rem;
        height: 0.4rem;
        background-color: var(--clr-blue-light);
        margin: 1rem auto 8rem auto;
      }
    }
  }
`

export default Reviews
