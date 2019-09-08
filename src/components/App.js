import React from 'react';
import {Router,Route} from 'react-router-dom';
import history from './history';
import Login from './Login';
import HomePage from './Home/HomePage';
import Post from './Posts/Post';
import DeletePost from '../components/Posts/DeletePost';
import EditPost from '../components/Posts/EditPost';


class App extends React.Component {
    render(){
        return(
            <Router history={history}>
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/HomePage" component={HomePage}/>
                <Route path="/post/:id" component={Post}/>
                <Route path="/post/delete/:id" component={DeletePost}/>
                <Route path="/post/edit/:id" component={EditPost}/>
            </div>
            </Router>
        )
    }
}      

export default App;
