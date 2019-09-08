import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../../actions';
//import history from './history';

class CommentDetails extends React.Component{
    
    state = { pageNumber: 1};

    componentDidMount(){
        this.props.fetchComments();
        //console.log(this.props.comments.length)
        
    }

    renderMore = () => {
        this.setState({pageNumber : this.state.pageNumber + 1});
    }
    
    renderList=()=> {

          let arr = this.props.comments.map(comment => {
            return (
            <div style={{backgroundColor:'Black'}} className="ui raised very padded text container segment" key={comment.id}>
             <div style={{backgroundColor:'#00ff40',padding:'.2rem'}}>Id:{comment.id}</div>
             <div style={{backgroundColor:'#80ff00',padding:'.2rem'}} >PostId:{comment.postId}</div>
             <div style={{backgroundColor:'#40ff00',padding:'.2rem'}}>Email:{comment.email}</div>
             <div style={{backgroundColor:'#00ff00',padding:'.2rem'}}>Name:{comment.name}</div>
             <div style={{backgroundColor:'#60ff00',padding:'.2rem'}}>Body:{comment.body}</div><br/>
            </div>
            )
         });

         let returnArr = [];
         let limit = this.state.pageNumber * 10;
         //console.log('limit', limit);
         for (let i =0; i < limit; i++){
            returnArr.push(arr[i]);
         }

         return returnArr;

       
    }

    
    render() {
        return (
            <div>
                {this.renderList()}
                <div style={{textAlign: 'center'}}>
                    <button onClick = {this.renderMore}>Load More</button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state); 
    return {
        comments:state.CommentData
    } 
};

export default connect(
    mapStateToProps,
    {fetchComments}
  )(CommentDetails);
    