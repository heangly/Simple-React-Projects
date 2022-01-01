import styled from 'styled-components'

const Review = ({ review }) => {
  const { image, name, quote, title } = review
  return (
    <StyledWrapper className='review'>
      <div className='heading'>
        <div className='heading__img'>
          <img src={image} alt={name} />
        </div>

        <div className='heading__name'>
          <h2>{name}</h2>
        </div>
        <div className='heading__position'>
          <h3>{title}</h3>
        </div>
      </div>

      <div className='description'>
        <p>{quote}</p>
        <i className='fas fa-quote-right'></i>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .heading {
    &__img {
      width: 14rem;
      height: 14rem;
      border-radius: 50%;
      margin: 0 auto;
      margin-bottom: 2.5rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--clr-gray);
        box-shadow: var(--box-shadow-2);
      }
    }

    &__name {
      h2 {
        color: var(--clr-orange);
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1.8rem;
      }
    }

    &__position {
      h3 {
        color: var(--clr-text-primary);
        font-size: 1.5rem;
        text-transform: capitalize;
        font-weight: 600;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
      }
    }
  }

  .description {
    p {
      color: var(--clr-text-secondary);
      font-size: 1.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    .fa-quote-right {
      font-size: 5rem;
      color: var(--clr-orange);
    }
  }
`

export default Review
