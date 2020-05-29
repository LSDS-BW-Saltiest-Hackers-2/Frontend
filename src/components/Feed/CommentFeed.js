import React, { useEffect, useState, useRef } from "react";
import Comment from "./Comment"
import { Route } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import './CommentFeed.css'
import gsap from 'gsap'




function CommentFeed(props) {

    const [ comments, addComments ] = useState([])
    const [ savedComments, setSavedComments ] = useState([]);

    let commentsDiv = useRef(null)

    useEffect(() => { 
        gsap.to(
        commentsDiv,
        3,
        {
          y: 75,
          opacity: 1
        }
      )}, [])
   

    useEffect(() => {
        console.log(savedComments)
    }, [savedComments])

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
            <div ref={el => {commentsDiv=el}} className='feed-container'>
                <div  className='feed-list'>
                    {
                        comments.map(comment => {
                        return <Comment key={comment.Comment_ID} info={comment}/>

                        })
                    }
                </div>
            </div>
        </Route>     
    )
}


export default CommentFeed