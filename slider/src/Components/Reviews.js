import { useState, useEffect } from 'react'
import data from '../data'
import styled from 'styled-components'
import Review from './Review'

const Reviews = () => {
  const [reviews, setReviews] = useState(data)
  const [reviewIdx, setReviewIdx] = useState(0)

  const previousHandler = () => {
    if (reviewIdx === 0) {
      setReviewIdx(reviews.length - 1)
    } else {
      setReviewIdx(reviewIdx - 1)
    }

    const reviewElement = document.querySelector('.review')
    reviewElement.classList.remove('left-1')
    reviewElement.classList.remove('left-2')

    if (reviewElement.classList.contains('right-1')) {
      reviewElement.classList.remove('right-1')
      reviewElement.classList.add('right-2')
    } else {
      reviewElement.classList.remove('right-2')
      reviewElement.classList.add('right-1')
    }
  }

  const nextHandler = () => {
    if (reviewIdx === reviews.length - 1) {
      setReviewIdx(0)
    } else {
      setReviewIdx(reviewIdx + 1)
    }

    const reviewElement = document.querySelector('.review')
    reviewElement.classList.remove('right-1')
    reviewElement.classList.remove('right-2')

    if (reviewElement.classList.contains('left-1')) {
      reviewElement.classList.remove('left-1')
      reviewElement.classList.add('left-2')
    } else {
      reviewElement.classList.remove('left-2')
      reviewElement.classList.add('left-1')
    }
  }

  return (
    <StyledWrapper>
      <h1 className='title'>
        <span>/</span> Reviews
      </h1>

      <div className='review-container'>
        <div className='icon icon-left' onClick={previousHandler}>
          <i className='fas fa-chevron-left'></i>
        </div>

        <Review review={reviews[reviewIdx]} />

        <div className='icon icon-right' onClick={nextHandler}>
          <i className='fas fa-chevron-right'></i>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.main`
  width: 50%;
  text-align: center;
  margin: 8rem auto;

  .title {
    font-size: 4rem;
    font-weight: 600;
    color: var(--clr-text-primary);
    margin-bottom: 5rem;

    span {
      color: var(--clr-orange);
      margin-right: 0.5rem;
    }
  }

  .review-container {
    position: relative;

    .icon {
      border-radius: 0.4rem;
      height: 3.5rem;
      width: 3.5rem;
      background-color: var(--clr-text-secondary);
      display: inline-block;
      color: var(--clr-background);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--clr-orange);
      }
    }

    i {
      font-size: 1.7rem;
    }

    .icon-left {
      top: 15rem;
      left: 0;
    }

    .icon-right {
      top: 15rem;
      right: 0;
    }

    .review {
      &.left-1 {
        animation-name: slide-left-1;
        animation-duration: 0.4s;
      }

      &.left-2 {
        animation-name: slide-left-2;
        animation-duration: 0.4s;
      }

      &.right-1 {
        animation-name: slide-right-1;
        animation-duration: 0.4s;
      }

      &.right-2 {
        animation-name: slide-right-2;
        animation-duration: 0.4s;
      }

      @keyframes slide-left-1 {
        from {
          transform: translateX(50rem);
        }

        to {
          transform: translateX(0);
        }
      }

      @keyframes slide-left-2 {
        from {
          transform: translateX(50rem);
        }

        to {
          transform: translateX(0);
        }
      }

      @keyframes slide-right-1 {
        from {
          transform: translateX(-30rem);
        }

        to {
          transform: translateX(0);
        }
      }

      @keyframes slide-right-2 {
        from {
          transform: translateX(-30rem);
        }

        to {
          transform: translateX(0);
        }
      }
    }
  }
`

export default Reviews
