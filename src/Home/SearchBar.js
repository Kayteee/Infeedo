import React from 'react';
 
class SearchBar extends React.Component{

    OnEnter=(e)=>{
        //console.log(this.props.search)
        this.props.onSearch(e.target.value)

    }
    render() {
        return(
            <div className="ui input focus">
                 <input type="text" placeholder="Search..." autoComplete="off" value={this.props.search} onChange={this.OnEnter}></input>
            </div>
        )
    }
}
export default SearchBar;
