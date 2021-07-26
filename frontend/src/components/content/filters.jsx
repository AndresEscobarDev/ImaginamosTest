import { useState } from 'react';
import categories from '../../jsons/categories.json'
import hamburguer from '../../media/hamburguer.svg'
import clock from '../../media/clock.svg'

const Filters = ({ findResults }) => {
  const [selected, setSelected] = useState(1)

  const changeCategory = (category) => {
    setSelected(category)
    findResults(category)
  }

  return (
    <div className='filtersContainer'>
      <div className='filtersTitle'>
        <h2>Restaurants <img src={hamburguer} alt="" /></h2>
        <div>
          <img src={clock} alt="" />
          <p>Delivery: </p>
          <select name="" id="">
            <option value="Now">Now</option>
          </select>
          <i></i>
        </div>
      </div>
      <div className='filtersCategories'>
        {categories.map(category => (
          <div key={category.id} className={selected === category.id ? 'categoryContainer selectedCategory' : 'categoryContainer'} onClick={() => changeCategory(category.id)}>
            <div className='categoryImg'>
              <img src={category.icon} alt="" />
            </div>
            <p key={category.id}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters