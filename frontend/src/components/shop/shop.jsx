import { connect } from 'react-redux'
import Content from '../content/content';
import Order from '../order/order';
import findResults from '../../redux/actions/findResults';
import carContent from '../../redux/actions/carContent';
import './shop.css'

const Shop = ({ results, findResults, car, carContent }) => {
  return (
    <div className='shopContainer'>
      <Content results={results} findResults={findResults} carContent={carContent} car={car}/>
      <Order car={car} carContent={carContent} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
    car: state.car
  }
}

const mapDispatchToProps = { findResults, carContent }

export default connect(mapStateToProps, mapDispatchToProps)(Shop)