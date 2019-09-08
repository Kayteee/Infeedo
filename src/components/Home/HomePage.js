import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import history from '../history';
import requireAuth from '../requireAuth';

class HomePage extends React.Component{
    state = {
        Searching:''
    };

    componentDidMount(){
        if(this.props.apiData.length === 0){
            this.props.fetchPosts();    
        }
        
        
    }

    renderList=()=> {
        let search=this.state.Searching
    //console.log(this.props.apiData);
    const arr = this.props.apiData.map(detail => {
        //console.log('detail',detail);
        if(search.length===0){
            //console.log(search.length)
            return (
                <div style={{backgroundColor:'black'}} className="ui raised very padded text container segment" key={detail.id}>
                    <div onClick={()=>history.push(`/post/${detail.id}`)}>
                     <div style={{backgroundColor:'#00ff40',padding:'.2rem'}}>Id:{detail.id}</div>
                     <div style={{backgroundColor:'#80ff00',padding:'.2rem'}}>UserId:{detail.userId}</div>
                     <div style={{backgroundColor:'#40ff00',padding:'.2rem'}} >Title:{detail.title}</div>
                     <div style={{backgroundColor:'#00ff00',padding:'.2rem'}}>Body:{detail.body}</div><br/>
                    </div>
                </div>
            )
        }else{
            if(detail.title.includes(search) || detail.body.includes(search)){
                //console.log(search.length)
                return (
                <div style={{backgroundColor:'black'}}className="ui raised very padded text container segment" key={detail.id}>
                    <div onClick={()=>history.push(`/post/${detail.id}`)}>
                    <div style={{backgroundColor:'#00ff40',padding:'.2rem'}}>Id:{detail.id}</div>
                     <div style={{backgroundColor:'#80ff00',padding:'.2rem'}}>UserId:{detail.userId}</div>
                     <div style={{backgroundColor:'#40ff00',padding:'.2rem'}} >Title:{detail.title}</div>
                     <div style={{backgroundColor:'#00ff00',padding:'.2rem'}}>Body:{detail.body}</div><br/>
                    </div>
                </div>
                )
            }
            return null;
        }

        

        });

      
      if(arr.every(ele => ele === null)){
          return (
              <div>
                  <h2>No Records Found</h2>
              </div>
          )
      }

      return arr;
        
        
    }

    onSearch=(value)=>{
        this.setState({Searching:value})
    }
    
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                <Link to ="/HomePage" className="item">HomePage</Link>
                <div className="right menu">
                <Link to="/" className="ui item">Logout</Link>
                </div>
            </div>
                <SearchBar search={this.state.Searching} onSearch={this.onSearch}/>
                {this.renderList() }

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.Data); 
    return {
        apiData:state.PostData
    } 
};

export default connect(
    mapStateToProps,
    {fetchPosts}
  )(requireAuth(HomePage));
