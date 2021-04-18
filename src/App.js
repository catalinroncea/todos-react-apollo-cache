import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/Switch';
import {CardPage} from './pages/card/card';
import {CardsPage} from './pages/cards/cards';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={CardsPage}/>
                    <Route exact path='/cards' component={CardsPage}/>
                    <Route exact path='/cards/:id' component={CardPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
