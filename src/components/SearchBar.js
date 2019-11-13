import React from 'react';

import Button from './Button';
// import "../styles/App.css"
class SearchBar extends React.Component {
    state = {
        search_field: ''
    };
    handleChange = (event) => {
        this.setState({
            search_field: event.target.value
        });
               
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.search_field);
    }

    render() {
        return (
            <div id="search-bar-div" className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form' id="search-film">
                    <div className='field'>
                        
                        <input onChange={this.handleChange} 
                            name='search-film'
                            type="text"
                            id="search-film-input"
                            placeholder="Procure seu filme"
                            value={this.state.search_field}/>
                    </div>
                    <Button/>
                </form>
            </div>
        )
    }
}
export default SearchBar;