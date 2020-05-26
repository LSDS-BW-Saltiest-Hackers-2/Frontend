import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSavedComments } from '../../action/appAction';

const SavedComments = ({
    isFetchingSavedComments,
}) => {
    useEffect(() => {
        fetchSavedComments();
    }, [fetchSavedComments])

    return (
        <main>
            {isFetchingSavedComments && <h3>Fetching Comments..Should I add a spinner icon..?</h3>}
            {!isFetchingSavedComments && (
                <div className='saved-comments-container'>
                    {/* Mimic the layout of the main comment feed */}
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