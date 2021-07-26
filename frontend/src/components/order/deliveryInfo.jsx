import { useState } from "react"
import clock from '../../media/clock yellow.svg'

const DeliveryInfo = () => {
  const [direction, setDirection] = useState('')
  const [editing, setEditing] = useState(true)

  const editDirection = () => {
    setEditing(false)
    setTimeout(() => {
      document.getElementById('myDirection').focus()
    }, 100);
  }

  return (
    <div className='deliveryInfo'>
      <div className='directionInfo'>
        <input type="text" id='myDirection' placeholder='Add an address' value={direction} onBlur={() => setEditing(true)} onChange={(e) => setDirection(e.target.value)} readOnly={editing} />
        <button onClick={editDirection}>Edit</button>
      </div>
      <div className='timeInfo'>
        <div>
          <div className='infoTimeIcon'>
            <img src={clock} alt="" />
          </div>
          <p>35 min</p>
        </div>
        <button >Choose time</button>
      </div>
    </div>
  )
}

export default DeliveryInfo