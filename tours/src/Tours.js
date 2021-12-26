import { useState, useEffect } from 'react'
import axios from 'axios'
import Tour from './Tour'
import styled from 'styled-components'

const Tours = () => {
  const URL = 'https://course-api.com/react-tours-project'
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data: res } = await axios.get(URL)
      setData(res)
    }
    fetchData()
  }, [])

  const notInterestedHandler = (id) => {
    const newData = data.filter((d) => d.id !== id)
    setData(newData)
  }

  const refreshTourHandler = () => {
    const fetchData = async () => {
      const { data: res } = await axios.get(URL)
      setData(res)
    }
    fetchData()
  }

  return (
    <StyledWrapper>
      <div className='tours'>
        <div className='tours__heading'>
          <h1 className='tours__heading__title'>
            {' '}
            {data.length > 0 ? 'Our Tours' : 'No Tour Left'}
          </h1>
          <div className='tours__heading__bottom-line'></div>
        </div>
        {data.map((d) => (
          <Tour
            key={d.id}
            detail
            tourInfo={d}
            notInterestedHandler={notInterestedHandler}
          />
        ))}
        {data.length > 0 && (
          <button className='tours__refresh' onClick={refreshTourHandler}>
            Refresh Tour
          </button>
        )}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  .tours {
    text-align: center;
    padding: 5rem 3rem;

    .tours__heading {
      .tours__heading__title {
        font-size: 5rem;
        letter-spacing: 0.3rem;
      }

      .tours__heading__bottom-line {
        height: 0.4rem;
        width: 11rem;
        background-color: var(--clr-blue-primary);
        margin: 0.5rem auto 8rem auto;
      }
    }

    .tours__refresh {
      font-size: 2rem;
      color: #fff;
      background-color: var(--clr-blue-primary);
      padding: 0.8rem 3rem;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #000;
      }
    }
  }
`

export default Tours
