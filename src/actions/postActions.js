import { FETCH_POSTS, NEW_POST } from '../actions/types';
import post from '../components/post';

export function fetchPosts() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
    }
}

export function createPost(postData) {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: data
        }));
    }
}