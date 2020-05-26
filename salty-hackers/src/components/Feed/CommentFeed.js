import React, { useEffect, useState } from "react";
import Comment from "./Comment"
import { Route, Link} from 'react-router-dom';


const dummyData = [

    {
        rank: 'High',
        name: 'Troll Z',
        score: 1000
    },

    {
        rank: 'Low',
        name: 'Troll X',
        score: 1000000,
    }
    

]

function CommentFeed() {
    // vR1 Zone to implement MVP Reqsv

    // ^R1 Zone to implement MVP Reqs^


    const [ comments, addComments ] = useState()

    return (

        <Route path='/feed'>
                <div className='feed-container'>
                    <div className='feed-list'>
                        {
                            dummyData.map(comment => {
                                return <Comment info={comment}/>
                            })
                        }
                        
                    </div>
                </div>
        </Route>
        
    )
}

export default CommentFeed