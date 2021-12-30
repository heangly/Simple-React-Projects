import styled from 'styled-components'

const Food = ({ desc, img, price, title }) => {
  return (
    <StyledWrapper>
      <div className='image'>
        <img src={img} alt={title} />
      </div>

      <div className='info'>
        <div className='info__title'>
          <h2>{title}</h2>
          <h3>${price}</h3>
        </div>
        <p className='info__description'>{desc}</p>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;

  .image {
    width: 20rem;
    height: 12.5rem;
    border: 0.5rem solid var(--clr-gold);
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    max-width: 43rem;
    margin-left: 1rem;
    letter-spacing: 0.15rem;

    &__title {
      border-bottom: 1px dotted var(--clr-text-primary);
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: var(--clr-text-primary);
        text-transform: capitalize;
        font-size: 2rem;
      }

      h3 {
        color: var(--clr-gold);
        font-size: 1.5rem;
      }
    }

    &__description {
      margin-top: 1.5rem;
      color: var(--clr-text-secondary);
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 1200px) {
      & {
        max-width: 58rem;
      }
    }
  }
`

export default Food
