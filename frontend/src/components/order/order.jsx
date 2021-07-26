import './styles.css'
import userIcon from '../../media/user.svg'
import Cookies from 'universal-cookie'
import emoji from '../../media/emoji.png'
import { useEffect, useState } from 'react';
import firebase from 'firebase'
import DeliveryInfo from './deliveryInfo';
import CarContent from './carContent';
import React from 'react';

const cookies = new Cookies();

const Order = ({ car, carContent }) => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(cookies.get('user'))

  const handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
    }).catch(error => {
      console.error(`Error: ${error.code}: ${error.message}`)
    })
  }

  const handleLogOut = () => {
    firebase.auth().signOut()
      .then(() => console.log("Te has desconectado"))
      .catch((error) => console.error(`Error: ${error.code}: ${error.message}`))
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        cookies.set('user', user, { path: '/' })
      } else {
        setUser(null)
        cookies.remove('user')
      }
    })
  }, [])

  return (
    <React.Fragment>
      <i className={open ? 'rightArrow' : 'leftArrow'} onClick={() => setOpen(!open)}></i>
      <div className={open ? 'orderContainer' : 'orderContainerClose'}>
        <header className='orderHeader'>
          {user && user.photoURL ?
            <img src={user.photoURL} alt="" onClick={handleLogOut} /> :
            <img src={userIcon} alt="" onClick={handleAuth} />
          }
          <div>
            <p>{car.length}</p>
          </div>
        </header>
        <h2 className='orderText'>My <img src={emoji} alt="" /></h2>
        <h2 className='orderText'>Order</h2>
        <DeliveryInfo />
        <CarContent car={car} carContent={carContent} />
      </div>
    </React.Fragment>
  )
}

export default Order
