import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const ProductHeader = ({id, title, text}) => {
    return (
        <div> 
            <h3>{title}</h3>
            <div>
                {text}
                <Link to={`post/${id}`}>
                    Comments
                </Link>
            </div>
           
        </div>
        );
};

class HomePage extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://localhost:3030/posts').then((response) => {
            this.setState({posts: response.data});
        });
    }

    render() {
        return (
        <div>
            <ul>
                {this.state.posts.map((post, index) => {
                    return <ProductHeader key={index} id={post.id} title={post.title} text={post.text}/>
                })}
            </ul>
        </div>);
    }
}

export default HomePage;