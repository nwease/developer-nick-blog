import React, {useState, useEffect} from 'react';
import './App.css';
import Banner from './components/Banner';
import Post from './components/Post';
import { db } from './firebase';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, [])

    return (
        <div className='app'>
            <Banner />

            <div className='app__postContainer'>
                {
                    posts.map(({id, post}) => (
                        <Post postId={id} post={post}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
