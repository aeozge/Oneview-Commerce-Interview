import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { users } from './store/actions/usersAction';
import Home from './features/home'
import Posts from './features/posts'


import './style/App.css'

export function App(props) {
	useEffect(() => {
		props.users();
	}, []);

	return (
		<div className='App'>
			<h2>Oneview Commerce Take-Home Assignment</h2>
			<Home />
			<Posts />
		</div>
	);
}

export default connect(null, { users })(App);
