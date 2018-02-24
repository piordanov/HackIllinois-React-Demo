import React from 'react';
import axios from 'axios';
import './PostPage.css';

class PostPage extends React.Component {
    state = {
        comments: [],
        post: undefined
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3030/comments/${id}`).then((response) => {
            console.log(response.data);
            this.setState({comments: response.data});
        });
        axios.get(`http://localhost:3030/posts/${id}`).then((response) => {
            console.log(response.data);
            this.setState({post: response.data});
        });
    }

    clickhandler = () => {
        this.setState
    }

    render() {
        return (
            this.state.post === undefined ?
                <span>Loading</span> :
             <div>
                <div> 
                    <h3>{this.state.post.title}</h3>
                    <div>
                        {this.state.post.text}
                    </div>
                    <ul>
                        {this.state.comments.map((c, index) => {
                            return (
                                <div key={index}>
                                    <div className="author">{c.author}</div>
                                    <div className="text">{c.text}</div>
                                </div>);
                        })}
                    </ul>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PostPage;
