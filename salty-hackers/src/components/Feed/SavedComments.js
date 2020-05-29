import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import stripHtml from "string-strip-html";

import LoadingSpinner from '../Styling/LoadingSpinner';

import { removeSavedComment } from '../../action/appAction';
import { fetchSavedComments } from '../../action/appAction';

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
                        <div key={Math.random()}>
                            <h2>Username: {item.username}</h2>
                            <p>Comment: {stripHtml(item.commentSaved)}</p>
                            <p>Saltiness: {item.Saltiness}</p>
                            <Button onClick={() => push(`/edit-comment/${item.id}`)}>Edit</Button>
                            <Button onClick={() => push(`/delete-comment/${item.id}`)}>Delete</Button>
                        </div>
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