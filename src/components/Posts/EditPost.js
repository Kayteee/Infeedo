import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../history';
import { fetchPosts, editPost } from '../../actions';
import requireAuth from '../requireAuth';

class DeletePost extends React.Component {

    state={
        title:'',
        body:''
    }
  componentDidMount() {
      this.setState({
          title:this.props.stream.title,
          body:this.props.stream.body
    })
    
  }

  onEdit= (id) => {
    this.props.editPost(parseInt(id),this.state.title,this.state.body);
    history.push('/HomePage');
  }

  renderActions() {
    //console.log(this.props.match.params.id)
    const id =this.props.match.params.id


    return (
      <React.Fragment>
        <button
          onClick={() => this.onEdit(id)}
          className="ui button primary"
        >
          Save
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
valueChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
} 
  renderContent() {
    //console.log(this.props.stream)
    if (!this.props.stream) {
      return 'Are you sure you want to edit this stream?';
    }

    return(
        <div>
        <form className="ui form">    
        <label>
        Title:<br/>
        <input type="text" name="title" value = {this.state.title} onChange={this.valueChange}autoComplete="off"/><br/><br/>
        Body:<br/>
        <input type="text" name="body" value = {this.state.body} onChange={this.valueChange}autoComplete="off"/><br /><br/>
       </label>
       <br/><br/>
        </form>
        </div>  
            
        )
  }

  render() {
    return (
      <Modal
        title="Edit Post"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/HomePage')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.id)
  // console.log('data',state.PostData)
  const stream = state.PostData.find(ele => ele.id === parseInt(ownProps.match.params.id))
  //console.log('stream', stream)
  return {stream: stream}
};


export default connect(
  mapStateToProps,
  { fetchPosts,editPost}
)(requireAuth(DeletePost));