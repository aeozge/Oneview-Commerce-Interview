import React from 'react';
import { connect } from 'react-redux';
import { postsAction } from '../store/actions/postsAction';
import '../style/App.css'

export function Users(props) {
	return (
	<div >
		<h3 >All Users Table </h3>
		{props.searchUser.length === 0 && (
		<div> 
			<h4>NO USER FOUND!</h4> 
		</div>)}
		{props.searchUser.length > 0 &&
			<table>
				<thead>
				<tr> 
					<th>Name</th>
					<th>Email</th>
					<th>City</th>
					<th>Company</th>  
			    </tr>
				</thead>
				{props.searchUser.map((user, name) => {
					return (
					<tbody key = {name} >
					<tr className='table-row' onClick={() => props.postsAction(user.id, user.name)}>
						<td>{ user.name }</td>
                        <td>{ user.email }</td>
                        <td>{ user.address.city }</td>
                        <td>{ user.company.name }</td>
					</tr>
					</tbody>
				)})}
			</table>
}
</div>
	)}

const mapStatetoProps = (state) => ({
	searchUser: state.users.searchUser,
	userPost: state.users.postsAction,
});

export default connect(mapStatetoProps, { postsAction })(Users);

