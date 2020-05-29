import React, { useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import stripHtml from "string-strip-html";

import LoadingSpinner from '../Styling/LoadingSpinner';

import { removeSavedComment } from '../../action/appAction';
import { fetchSavedComments } from '../../action/appAction';

import { Card, CardBody, CardImg } from 'reactstrap';
import image from './blank-profile-picture.png';
import './CommentFeed.css'



const SavedComments = (props) => {
    const { push } = useHistory();

    const {
        isFetchingSavedComments,
        savedComments
    } = props
    useEffect(() => {
        props.fetchSavedComments();
    }, [])


    
    return (
        <main>
            {isFetchingSavedComments && <LoadingSpinner/>}
            {!isFetchingSavedComments && (
                <div className='saved-comments-container'>
                    {savedComments.map(item => (
                        <Card style={{ backgroundColor: '#f6f6ef',  margin: '1%', width: '25rem'}} key={Math.random()}>
                            <CardBody> 
                                <CardImg src={image} style = {{marginBottom: '5%'}}></CardImg>
                                <h2>Username: {item.username}</h2>
                                <p>Comment: {stripHtml(item.commentSaved)}</p>
                                <p style={{fontWeight:'bold'}}>Saltiness: {item.Saltiness}</p>
                                <Button onClick={() => push(`/edit-comment/${item.id}`)} style={{backgroundColor:'#00BABA', borderColor:'#00BABA', marginRight:'1rem'}}>Edit</Button>
                                <Button onClick={() => push(`/delete-comment/${item.id}`)} style={{backgroundColor:'#FF4500', borderColor:'#FF4500', marginRight:'1rem'}}>Delete</Button>  
                            </CardBody>      
                        </Card>
                    ))}
                </div>
            )}
        </main>
    )
}

const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetchingSavedComments: state.isFetchingSavedComments,
        commentSaved: state.commentSaved,
        savedComments: state.savedComments
    }
}

export default connect(
    mapStateToProps,
    { fetchSavedComments, removeSavedComment }
)(SavedComments)