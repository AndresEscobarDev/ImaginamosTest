import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './components/shop/shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Shop}/>
        <Route exact path='*' component={Shop}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes