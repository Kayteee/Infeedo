import React from 'react';
import{connect} from 'react-redux';
import history from './history';

export default (ChildComponent)=>{
    class ComposedComponent extends React.Component{

        componentDidMount(){
            this.shouldNavigate()
        }
        componentDidUpdate(){
            this.shouldNavigate()
        }
        shouldNavigate=()=>{
            if(!this.props.authKey){
                history.push('/')
            }
        }
        render() {
            return(
                <ChildComponent {...this.props} />
            )
        }
    
    }
    const mapStateToProps=(state)=>{
        return {authKey:state.Auth}
    }

    return connect (mapStateToProps)(ComposedComponent);
}
