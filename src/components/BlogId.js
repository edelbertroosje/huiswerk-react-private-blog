import React from 'react';
import posts from '../data/posts.json';
import {Link} from 'react-router-dom';

 function BlogId() {

    return (
        <>
            <h1>ff kijken wat ik kan zien</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`post/${post.id}`}>
                        {post.title}
                        </Link>
                    </li>
                })}
            </ul>
            <div>
                <Link to={'/'}>
                    terug naar home
                </Link>
            </div>

        </>
    );
}

export default BlogId;