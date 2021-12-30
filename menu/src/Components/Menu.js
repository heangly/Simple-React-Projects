import { useState, useEffect } from 'react'
import data from '../data/data'
import styled from 'styled-components'
import Food from './Food'

const Menu = () => {
  const [foods, setFoods] = useState(data)
  const [foodCategories, setFoodCategories] = useState([])

  useEffect(() => {
    const categories = new Set()
    foods.forEach((d) => categories.add(d.category))
    setFoodCategories(['All', ...categories])
  }, [])

  const categoryHandler = (category) => {
    console.log(category)
    if (category === 'All') {
      setFoods(data)
    } else {
      setFoods(data.filter((d) => d.category === category))
    }
  }

  return (
    <StyledWrapper>
      <div className='heading'>
        <div className='heading__title'>
          <h1>Our menu</h1>
          <div className='heading__bottom-line'></div>
        </div>
        <div className='heading__buttons'>
          {foodCategories.map((foodCategory, idx) => (
            <button key={idx} onClick={() => categoryHandler(foodCategory)}>
              {foodCategory}
            </button>
          ))}
        </div>
      </div>

      <div className='foods'>
        {foods.map((food) => (
          <Food key={food.id} {...food} />
        ))}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.main`
  max-width: 90%;
  margin: 8rem auto;

  .heading {
    text-align: center;

    &__title {
      h1 {
        color: var(--clr-text-primary);
        font-size: 4.5rem;
        text-transform: capitalize;
      }
    }

    &__bottom-line {
      width: 8rem;
      height: 0.4rem;
      background-color: var(--clr-gold);
      margin: 0.2rem auto;
    }

    &__buttons {
      margin-top: 4rem;
      button {
        font-size: 1.8rem;
        color: var(--clr-gold);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s ease-in-out;
        text-transform: capitalize;

        &:not(:last-child) {
          margin-right: 2rem;
        }

        &:hover {
          background-color: var(--clr-gold);
          color: #fff;
        }
      }
    }
  }

  .foods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 5rem;

    @media only screen and (max-width: 1200px) {
      & {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`

export default Menu
