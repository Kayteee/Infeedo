import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../history';
import { fetchPosts, deletePost } from '../../actions';

class DeletePost extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }

  onDelete= (id) => {
    this.props.deletePost(parseInt(id));
    history.push('/HomePage');
  }

  renderActions() {
    //console.log(this.props.match.params.id)
    const id =this.props.match.params.id


    return (
      <React.Fragment>
        <button
          onClick={() => this.onDelete(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    //console.log(this.props.stream)
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
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
  console.log('stream', stream)
  return {stream: stream}
};


export default connect(
  mapStateToProps,
  { fetchPosts,deletePost}
)(DeletePost);