import styled from 'styled-components'
import Accordions from './components/Accordions'

const App = () => {
  return (
    <StyledWrapper>
      <div className='heading'>
        <h1>Questions And Answers About Login</h1>
      </div>
      <Accordions />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: #fff;
  width: 85%;
  max-width: 95rem;
  margin: 6rem auto;
  box-shadow: var(--clr-box-shadow-1);
  border-radius: 0.5rem;
  display: flex;
  padding: 5rem;

  .heading {
    width: 35%;
    margin-right: 5rem;

    h1 {
      font-size: 3rem;
      font-weight: 400;
    }
  }
`

export default App
