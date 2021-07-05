import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar';
import List from '../../components/List';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Link to="/favs">Lista de favoritos</Link>
                <SearchBar />
                <List />
                Home
            </div>
        )
    }
}
