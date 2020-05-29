import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import stripHtml from "string-strip-html";

import { removeSavedComment } from '../../action/appAction';
import { fetchSavedComments } from '../../action/appAction';

const SavedComments = (props) => {
    const {
        isFetchingSavedComments,
        savedComments
    } = props
    useEffect(() => {
        props.fetchSavedComments();
    }, [])

    // guided project had the action function passed into the dependency array but i will first try without it
    // and just run it once. See what happens. if it works, delete this comment.
    const { push } = useHistory();
    return (
        <main>
            {isFetchingSavedComments && <h3>Fetching Comments..Should I add a spinner icon..?</h3>}
            {!isFetchingSavedComments && (
                <div className='saved-comments-container'>
                    {savedComments.map(item => (
                        <div key={Math.random()}>
                            <h2>Username: {item.username}</h2>
                            <p>Comment: {stripHtml(item.commentSaved)}</p>
                            <p>Saltiness: {item.Saltiness}</p>
                            <Button onClick={() => push(`/edit-comment/${item.id}`)}>Edit</Button>
                            <Button onClick={() => push(`/delete-comment/${item.id}`)}>Delete</Button>
                            {/* <Button onClick={() => props.removeSavedComment(item.id)}>Delete</Button> */}
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