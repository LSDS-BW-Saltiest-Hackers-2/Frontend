import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSavedComments } from '../../action/appAction';

const SavedComments = ({
    isFetchingSavedComments,
}) => {
    useEffect(() => {
        fetchSavedComments();
    }, [])

    // guided project had the action function passed into the dependency array but i will first try without it
    // and just run it once. See what happens. if it works, delete this comment.

    return (
        <main>
            {isFetchingSavedComments && <h3>Fetching Comments..Should I add a spinner icon..?</h3>}
            {!isFetchingSavedComments && (
                <div className='saved-comments-container'>
                    {/* 
                        Mimic the layout of the main comment feed 
                        Need to Map over Comments that are saved to a user's profile
                    */}
                    <div className='saved-comments-feed'>
                        {/* {fetchSavedComments.map(comment => (
                            <div className='saved-comment' key={comment.id}>
                            </div>
                        ))} */}
                    </div>
                </div>
            )}
        </main>
    )
}

const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetchingSavedComments: state.isFetchingSavedComments
    }
}

export default connect(
    mapStateToProps,
    { fetchSavedComments }
)(SavedComments)