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
    handlerSubmit(event) {
        event.preventDefault();

        this.setState({ term: '' });


    }

    render() {
        return (
            <form className='comment-box'
                    onSubmit={this.handlerSubmit.bind(this)}
                >
                <textarea
                    value = {this.state.term}
                    onChange={this.handler.bind(this)}/>
                <button type='submit'>commit submit</button>
            </form>
        );
    }
}

export default CommentBox;