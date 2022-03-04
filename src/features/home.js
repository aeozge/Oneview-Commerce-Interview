import React, { Component } from 'react';
import Search from '../features/search';
import Users from '../features/users';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Search />
                <Users />
            </div>
        )
    }
}