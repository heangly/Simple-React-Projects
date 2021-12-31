import Experience from './Components/Expereince'
import styled from 'styled-components'

const App = () => {
  return (
    <StyledWrapper>
      <Experience />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.main`
  width: 90%;
  margin: 8rem auto;
  text-align: center;
  letter-spacing: 0.1rem;
`

export default App
