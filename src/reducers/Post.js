export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      case 'EDIT_POST':
        //console.log('edit post')
        const arr1 = state.map(el => {
          //console.log(el);
          if (el.id===action.payload.id){
            console.log(el);
            el.title=action.payload.title;
             el.body=action.payload.body;
          }
          return el;
        });
        return arr1;
      case 'DELETE_POST':
        const arr = state.filter(el => {
          if(el.id === action.payload){
            return false;
          }
          return true;
        });
        //console.log('reducer arr', arr);
        return arr;
      default:
        return state;
    }
  };