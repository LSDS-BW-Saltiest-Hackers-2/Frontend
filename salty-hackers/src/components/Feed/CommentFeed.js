import React, { useEffect, useState } from "react";
import Comment from "./Comment"
import { Route } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import './CommentFeed.css'




function CommentFeed() {

    const [ comments, addComments ] = useState([])

    //get comments 
        useEffect(() => { 
            axiosWithAuth().get(`https://saltyhackers2.herokuapp.com/users/1/AllComments`)
            .then(res => {
                console.log('this should only render once!')
                console.log(res)
                addComments(res.data)
                console.log(comments)
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
                        return <Comment key={comment.id} info={comment}/>
                        })

                    }
                        
                </div>
            </div>
        
        </Route>
        
    )
}


export default CommentFeed