import React from 'react';
import posts from "../data/posts.json";
import {Link} from "react-router-dom";


 function Blogpost() {
    return (
        <>
            <h1>blogoverzichtpagina</h1>
            <h2>Aantal blogspots: 20</h2>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>

        </>
    );
}
export default Blogpost;