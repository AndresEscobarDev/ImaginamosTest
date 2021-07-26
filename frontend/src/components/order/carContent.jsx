import React, { useState } from 'react'
import carImg from '../../media/car.svg'
import rightArrow from '../../media/rightArrow black.svg'

const CarContent = ({ car, carContent }) => {
  const [persons, setPersons] = useState(1)
  let ammountItems = []
  let totalPrice = 0

  for (const item of car) {
    let auxBool = false
    for (const inCar of ammountItems) {
      if (item.id === inCar.id) {
        inCar.amount += 1
        inCar.price += item.price
        totalPrice = ((totalPrice * 1000) + (item.price * 1000)) / 1000
        auxBool = true
        break
      }
    }
    if (!auxBool) {
      ammountItems.push({ ...item, amount: 1 })
      totalPrice = ((totalPrice * 1000) + (item.price * 1000)) / 1000
    }
  }

  const removeElement = (id) => {
    carContent(car.filter(i => i.id !== id))
  }

  return (
    <React.Fragment>
      <div className='carContentContainer'>
        {ammountItems.map(item => (
          <div className='carContentItem' key={item.id} onClick={() => removeElement(item.id)}>
            <img src={item.image} alt="" />
            <p className='carContentAmount'>{item.amount} x</p>
            <p className='carContentName'>{item.name}</p>
            <p className='carContentPrice'>${item.price}</p>
          </div>
        ))}
        <div className='carContentItem'>
          <div style={{ backgroundColor: '#fcf3d6' }}>
            <img src={carImg} alt="" />
          </div>
          <p className='carContentName'>Delivery</p>
          <p className='carContentPrice'>$0.00</p>
        </div>
      </div>
      <div className='carTotal'>
        <div className='carTotalPrice'>
          <h3>Total</h3>
          <h2>${totalPrice}</h2>
        </div>
        <div className='carCheckout'>
          <div className='counterPersons'>
            <p>Persons</p>
            <div>
              <button onClick={() => persons > 1 ? setPersons(persons - 1) : ''}>-</button>
              <input type="number" value={persons} onChange={(e) => e.target.value > 0 ? setPersons(e.target.value) : ''} />
              <button onClick={() => setPersons(persons + 1)}>+</button>
            </div>
          </div>
          <button className='checkoutButton' onClick={() => carContent([])}>Checkout <img src={rightArrow} alt="" /></button>
        </div>
      </div>
    </React.Fragment >
  )
}

export default CarContent