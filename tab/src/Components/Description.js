import styled from 'styled-components'

const Description = ({ company, dates, duties, title }) => {
  return (
    <StyledWrapper>
      <h2 className='title'>{title}</h2>
      <h3 className='name'>{company}</h3>
      <h4 className='date'>{dates}</h4>
      <div className='duties'>
        {duties.map((duty) => (
          <p>
            <i class='fas fa-angle-double-right'></i>
            {duty}
          </p>
        ))}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: left;
  .title {
    font-size: 3.2rem;
    font-weight: 400;
  }

  .name {
    font-size: 1.9rem;
    color: var(--clr-text-secondary);
    background-color: #dae2ec;
    display: inline-block;
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .date {
    color: var(--clr-text-secondary);
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  .duties {
    p {
      font-size: 1.7rem;
      color: var(--clr-text-primary);
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      i {
        margin-right: 4rem;
        color: var(--clr-teal-dark);
      }
    }
  }
`

export default Description
