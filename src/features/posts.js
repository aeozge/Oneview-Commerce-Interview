import React from "react";
import { connect } from "react-redux";

export function Posts(props) {
  return (
    <div>
      {props.userPost.posts.length > 0 && (
        <div>
          <h3>{props.userPost.user} 's Posts :</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
				        <th>Body</th>
              </tr>
            </thead>
            {props.userPost.posts.map((post, userid) => {
              return (
				  <tbody key = {userid}>
                <tr>
					<td>{post.title}</td>
					<td>{post.body}</td>
                </tr>
				</tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

const mapStatetoProps = (state) => ({
  userPost: state.users.postsAction,
});

export default connect(mapStatetoProps, null)(Posts);
