import React, {Component} from "react";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    handler(event) {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <div className='comment-box'>
                <textarea
                    value = {this.state.term}
                    onChange={this.handler.bind(this)}/>
                <button>commit submit</button>
            </div>
        );
    }
}

export default CommentBox;