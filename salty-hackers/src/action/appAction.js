import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_FAILUE = 'SAVE_COMMENT_SUCCESS';


export const FETCH_SAVED_COMMENTS_START = 'FETCH_SAVED_COMMENTS_START'; 
export const FETCH_SAVED_COMMENTS_SUCCESS = 'FETCH_SAVED_COMMENTS_SSUCCESS'; 
export const FETCH_SAVED_COMMENTS_FAILURE = 'FETCH_SAVED_COMMENTS_FAILURE';
export const fetchSavedComments = () => {
    return dispatch => {
        dispatch({ type: FETCH_SAVED_COMMENTS_START });
        axiosWithAuth()
            .get('URLGOESHEREFORSAVEDCOMMENTS')
            .then(res => {
                console.log(res)
                // dispatch({ type: FETCH_SAVED_COMMENTS_SUCCESS, payload: res.data. })
            })
            .catch(err => {
                dispatch({ type: FETCH_SAVED_COMMENTS_FAILURE, payload: console.log(err)})
            })
    }
} 