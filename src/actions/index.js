import Json  from '../api/Json';


export const fetchPosts = () => async dispatch => {
    const response = await Json.get('/posts');
     dispatch({ type: 'FETCH_POSTS', payload:response.data });
     
};

export const fetchComments = () => async dispatch => {
    const response = await Json.get('/comments');
     dispatch({ type: 'FETCH_COMMENTS', payload:response.data });
     
};

export const editPost=(id,title,body)=>
    ({type:'EDIT_POST', payload:{id,title,body}});



export const deletePost=(id) => ({type: 'DELETE_POST',payload: id});

export const isLoggedIn=(status)=>{
    return {type:'LOGIN_STATUS',payload:status}
}
   
