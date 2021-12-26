import { useState } from 'react'
import styled from 'styled-components'

const Tour = ({ tourInfo, notInterestedHandler }) => {
  const [description, setDescription] = useState(
    tourInfo.info.slice(0, Math.floor(tourInfo.info.length / 2))
  )
  const [showMore, setShowMore] = useState(false)

  const toggleDescriptionLength = () => {
    if (showMore) {
      setShowMore(false)
      setDescription(
        tourInfo.info.slice(0, Math.floor(tourInfo.info.length / 2))
      )
    } else {
      setShowMore(true)
      setDescription(tourInfo.info)
    }
  }

  return (
    <StyledWrapper>
      <div className='tour'>
        <div className='tour__image'>
          <img src={tourInfo.image} alt='' />
        </div>
        <div className='tour__details'>
          <div className='tour__details__heading'>
            <h2>{tourInfo.name}</h2>
            <span>{tourInfo.price}</span>
          </div>
          <div className='tour__details__description'>
            <p>{description}</p>
            <button onClick={toggleDescriptionLength}>
              {!showMore ? 'Show More' : 'Show Less'}
            </button>
          </div>
          <div className='tour__details__btn'>
            <button onClick={() => notInterestedHandler(tourInfo.id)}>
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .tour {
    margin: 5rem auto;
    background-color: #fff;
    width: 60rem;
    box-shadow: var(--box-shadow-2);
    border-radius: 0.5rem;

    .tour__image {
      height: 38rem;

      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }

    .tour__details {
      margin: 3rem;
      padding-bottom: 3rem;

      &__heading {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 2rem;
          letter-spacing: 0.2rem;
        }

        span {
          letter-spacing: 0.2rem;
          background-color: var(--clr-blue-secondary);
          color: var(--clr-blue-primary);
          padding: 0.2rem 2rem;
          font-size: 2rem;
          font-weight: bold;
          border-radius: 0.5rem;
        }
      }

      &__description {
        margin-top: 2rem;
        line-height: 2.3rem;
        letter-spacing: 0.1rem;
        text-align: justify;
        font-size: 1.6rem;
        color: var(--clr-gray-primary);

        p {
          display: inline;
        }

        button {
          margin-left: 1rem;
          font-size: 1.6rem;
          color: var(--clr-blue-primary);
        }
      }

      &__btn {
        margin-top: 2rem;
        button {
          color: var(--clr-red-primary);
          border: 1px solid var(--clr-red-primary);
          border-radius: 0.5rem;
          padding: 0.5rem 2rem;
          font-size: 1.6rem;
          letter-spacing: 0.2rem;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: translateY(-0.3rem);
            box-shadow: var(--box-shadow-1);
          }
        }
      }
    }
  }
`

export default Tour
