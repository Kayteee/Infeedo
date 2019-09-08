import React from 'react';
import { connect } from 'react-redux';
import CommentDetails from './CommentDetails';
import { Link } from 'react-router-dom';
import requireAuth from '../requireAuth';
class Post extends React.Component {

    
    renderId=()=>{
        const daata=this.props.data
        //console.log(daata)
        if(daata){
          return(
            <div style={{backgroundColor:'black'}}className="ui raised very padded text container segment" key={daata.id}>
                <div style={{backgroundColor:'#00ff40',padding:'.2rem'}}>Id:{daata.id}</div>
                <div style={{backgroundColor:'#80ff00',padding:'.2rem'}}>UserId:{daata.userId}</div>
                <div style={{backgroundColor:'#40ff00',padding:'.2rem'}} >Title:{daata.title}</div>
                <div style={{backgroundColor:'#00ff00',padding:'.2rem'}}>Body:{daata.body}</div><br/>
                <div className="right floated content">
                <Link to={`/post/edit/${daata.id}`} className="ui button primary">Edit</Link>
                <Link to={`/post/delete/${daata.id}`}className="ui button negative">Delete </Link>
                </div>
            </div>
          )
        }
        return null;
    }
    render() {
        //console.log(this.props.data)
        return(
            <div>
            <div className="ui secondary pointing menu">
                <Link to ="/HomePage" className="item">HomePage</Link>
                <div className="right menu">
                <Link to="/" className="ui item">Logout</Link>
                </div>
            </div>
              {this.renderId()}
              <CommentDetails/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    //console.log(state.Data)
    //console.log(ownProps)
    const detail = state.PostData.find((data) => {
        //console.log(data)

        return parseInt(data.id) === parseInt(ownProps.match.params.id);
            
        
    })
    return {data : detail};
    
}

export default connect(mapStateToProps)(requireAuth(Post));
