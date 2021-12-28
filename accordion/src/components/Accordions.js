import Accordion from './Accordion'
import data from '../data'
import styled from 'styled-components'

const Accordions = () => {
  return (
    <StyledWrapper>
      {data.map((d) => (
        <Accordion key={d.id} title={d.title} info={d.info} />
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 90%;
`

export default Accordions
