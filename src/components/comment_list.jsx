import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {


    render() {
        const list = this.props.comments.map(comment=>
             <li key={comment}>
            {comment}
            </li>

        );
        console.log(this.props.comments);
        return (
            <ul className="comment-list">
            {list}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {comments:state.comments};
}

export default connect(mapStateToProps)(CommentList);