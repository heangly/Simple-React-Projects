import styled from 'styled-components'

const Review = ({ reviewInfo, randomHandler, nextHandler, prevHandler }) => {
  return (
    <StyledWrapper>
      <div className='review'>
        <div className='heading'>
          <div className='heading__image'>
            <img src={reviewInfo.image} alt={reviewInfo.name} />
            <i className='fas fa-quote-right'></i>
          </div>
          <h2 className='heading__name'>{reviewInfo.name}</h2>
          <h3 className='heading__job'>{reviewInfo.job}</h3>
        </div>

        <p className='details'>{reviewInfo.text}</p>

        <div className='nagivation-btn'>
          <button className='nagivation-btn__prev'>
            <i className='fas fa-chevron-left' onClick={prevHandler}></i>
          </button>
          <button className='nagivation-btn__next'>
            <i className='fas fa-chevron-right' onClick={nextHandler}></i>
          </button>
        </div>

        <button className='random-btn' onClick={randomHandler}>
          Suprise Me
        </button>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .review {
    letter-spacing: 0.2rem;
    background-color: #fff;
    max-width: 60rem;
    margin: 0 auto;
    box-shadow: var(--box-shadow-1);
    border-radius: 1rem;
    padding: 0.2rem 3rem;
    text-align: center;

    .heading {
      position: relative;

      &__image {
        margin: 2rem auto;
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        background-color: var(--clr-blue-light);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transform: translate(-1rem, 0.3rem);
        }

        i {
          color: #fff;
          background-color: var(--clr-blue-light);
          padding: 1.3rem;
          border-radius: 50%;
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-7.5rem);
        }
      }

      &__name {
        text-transform: capitalize;
        font-size: 1.9rem;
        font-weight: 700;
      }

      &__job {
        text-transform: uppercase;
        font-size: 1.3rem;
        color: var(--clr-blue-light);
        margin: 0.7rem 0 1rem 0;
      }
    }

    .details {
      letter-spacing: 0.12rem;
      font-size: 1.5rem;
      color: var(--clr-blue-text);
      line-height: 2rem;
    }

    .nagivation-btn {
      margin-top: 1.5rem;

      &__prev,
      &__next {
        color: var(--clr-blue-light);
      }

      &__prev {
        margin-right: 3rem;
      }
    }

    .random-btn {
      font-size: 1.6rem;
      background-color: var(--clr-blue-pale);
      color: var(--clr-blue-light);
      padding: 0.5rem 1.5rem;
      margin: 2rem 0;
      border-radius: 0.5rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #000;
        background-color: var(--clr-blue-light);
      }
    }
  }
`

export default Review
