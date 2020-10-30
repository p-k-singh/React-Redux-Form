import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import MyForm from './FormComponent';
import Header from './HeaderComponent';
function Main(props){
    
        return (
            <div >
              <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/form" component={MyForm } />
                <Redirect to="/home" />
              </Switch>
          
              
            </div>
          );
   
}
export default Main