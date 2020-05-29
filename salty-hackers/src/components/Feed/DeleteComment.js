import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { removeSavedComment } from '../../action/appAction';

const DeleteComment = props => {
    const { push } = useHistory();
    const { id } = useParams();

    const deleteThisComment = e => {
        e.preventDefault()
        props.removeSavedComment(id)
        push(`/saved-comments`)
    }

    return (
        <div>
            <h1>Are you sure you want to delete this comment from your Saved List?</h1>
            <Button onClick={deleteThisComment}>Yes</Button>
            <Button onClick={() => push(`/saved-comments`)}>No</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedComments: state.savedComments
    }
}

export default connect(
    mapStateToProps,
    { removeSavedComment }
)(DeleteComment)