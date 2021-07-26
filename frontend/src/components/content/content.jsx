import menuImg from '../../media/menu.png'
import SearchInput from './searchInput'
import Filters from './filters'
import headerImg from '../../media/headerimage.png'
import d from '../../media/d.png'
import RightArrow from '../../media/rightArrow.svg'
import './styles.css'
import Results from './results'

const Content = ({ results, findResults, car, carContent }) => {
  return (
    <div className='contentContainer'>
      <header className='contentHeader'>
        <img src={menuImg} alt="" className='menuIcon' />
        <h2>Chukwudi</h2>
        <SearchInput />
      </header>
      <div className='contentPromo'>
        <img src={headerImg} alt="" className='promoMainImg' />
        <div className='promoRight'>
          <div className='promoText'>
            <h3>$0 delivery for 30 days!<img src={d} alt="" className='partyIcon' /></h3>
          </div>
          <p className='subText'>$0 delivery free for orders over $10 for 30 days</p>
          <a href="nada" className='promoLink'>
            <p>Learn more</p>
            <img src={RightArrow} alt="" className='linkIcon' />
          </a>
        </div>
      </div>
      <Filters findResults={findResults}/>
      <Results results={results} car={car} carContent={carContent}/>
    </div>
  )
}

export default Content