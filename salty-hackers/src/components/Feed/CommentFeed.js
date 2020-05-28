import React, { useEffect, useState } from "react";
import Comment from "./Comment"
import { Route } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import './CommentFeed.css'




function CommentFeed() {

    const [ comments, addComments ] = useState([])
    

    const saveComment = ( comment_id ) => {
            const id2 = localStorage.getItem('id')
            axiosWithAuth()
            .post(`https://saltyhackers2.herokuapp.com/users/${id2}/comment/${comment_id}/saved-comments/`)
            .then(res => {
                console.log('SAVED COMMENT SUCCEEDED -->', res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    //get comments 
        useEffect(() => { 
            axiosWithAuth().get(`https://saltyhackers2.herokuapp.com/users/1/AllComments`)
            .then(res => {
                console.log(res.data, '<----get request for all comments')
                addComments(res.data)
            })
            .catch(err => {
                console.log('nope')
                })
            }, [])

    return (
        <Route path='/feed'>
            <div className='feed-container'>
                <div className='feed-list'>

                    {
                        comments.map(comment => {
                        return <Comment key={comment.id} info={comment} saveComment={saveComment}/>
                        })

                    }
                        
                </div>
            </div>
        
        </Route>
        
    )
}


export default CommentFeed