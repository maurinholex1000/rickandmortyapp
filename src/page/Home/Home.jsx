import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar';
import List from '../../components/List';

export default class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <List />
                Home
            </div>
        )
    }
}
