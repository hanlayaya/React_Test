import React, {Component} from "react";

class CommentBox extends Component {
    render() {
        return (
            <div className='comment-box'>
                <textarea/>
                <button>commit submit</button>
            </div>
        );
    }
}

export default CommentBox;