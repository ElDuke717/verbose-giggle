import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/styles.css";

function PostDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        // Fetch the blog post details
        axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => console.error('Error fetching post data:', error));

        // Fetch the comments for this post
        axios.get(`${process.env.REACT_APP_API_URL}/api/comments/post/${id}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        // Post the new comment to the server
        axios.post(`${process.env.REACT_APP_API_URL}/api/comments`, {
            post_id: id,
            author_id: 1, // Replace with the actual logged-in user ID
            content: newComment,
        })
        .then(response => {
            setComments([...comments, response.data]);
            setNewComment('');
        })
        .catch(error => console.error('Error posting comment:', error));
    };

    if (!post) {
        return <div>Loading post...</div>;
    }

    return (
        <div>
            <Header />
        
        <div className="post-detail-container">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Author ID: {post.author_id}</p>

            <h2>Comments</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <p>{comment.content}</p>
                            <small>Comment by User ID: {comment.author_id}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}

            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    required
                />
                <button type="submit">Submit Comment</button>
            </form>
        </div>
        <Footer />
        </div>
    );
}

export default PostDetailPage;