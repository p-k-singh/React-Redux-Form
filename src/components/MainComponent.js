import React,{Component} from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import MyForm from './FormComponent';
import Header from './HeaderComponent';
import {actions} from 'react-redux-form';
import {connect} from 'react-redux';
const mapStateToProps = state =>{
  return {}
}
const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () =>{dispatch(actions.reset('feedback'))}
});
class Main extends Component{
     constructor(props){
       super(props);
     }
     render(){
        return (
            <div >
              <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/form" component={()=> <MyForm resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                <Redirect to="/home" />
              </Switch>
          
              
            </div>
          );
        }
   
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));