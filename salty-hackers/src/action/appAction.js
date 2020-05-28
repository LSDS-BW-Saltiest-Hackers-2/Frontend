import { axiosWithAuth } from '../utils/axiosWithAuth';
// DOUBLE CHECK THE URL FOR SAVED COMMENTS IS CORRECT 
// export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
// export const SAVE_COMMENT_FAILURE = 'SAVE_COMMENT_FAILURE';
// export const editSavedComment = ( commentID, savedComment) => {
//     return dispatch => {
//     }
// }

export const FETCH_SAVED_COMMENTS_START = 'FETCH_SAVED_COMMENTS_START'; 
export const FETCH_SAVED_COMMENTS_SUCCESS = 'FETCH_SAVED_COMMENTS_SSUCCESS'; 
export const FETCH_SAVED_COMMENTS_FAILURE = 'FETCH_SAVED_COMMENTS_FAILURE';
export const fetchSavedComments = () => {
    return dispatch => {
        dispatch({ type: FETCH_SAVED_COMMENTS_START });
        axiosWithAuth()
            .get('https://saltyhackers2.herokuapp.com/users/1/saved-comments/')
            .then(res => {
                console.log('FETCH SAVED COMMENTS SUCCESS-->', res)
                // dispatch({ type: FETCH_SAVED_COMMENTS_SUCCESS, payload: res.data. })
            })
            .catch(err => {
                dispatch({ type: FETCH_SAVED_COMMENTS_FAILURE, payload: console.log(err)})
            })
    }
} 

export const REMOVE_SAVED_COMMENT_SUCCESS = 'REMOVE_SAVED_COMMENT_SUCCESS';
export const REMOVE_SAVED_COMMENT_FAILURE = 'REMOVE_SAVED_COMMENT_FAILURE';
export const removeSavedComment = id => {
    return dispatch => {
        axiosWithAuth()
            .delete('URLGOESHEREFORSAVEDCOMMENTS', id)
            .then(res => {
                console.log('REMOVE COMMENT SUCCESS-->', res)
                // dispatch({ type: REMOVE_SAVED_COMMENT_SUCCESS, payload: res.data.})
            })
            .catch(err => {
                dispatch({ type: REMOVE_SAVED_COMMENT_FAILURE, payload: console.log(err)})
            })
    }
}