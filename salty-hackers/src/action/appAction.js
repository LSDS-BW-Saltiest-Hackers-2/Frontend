import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_SAVED_COMMENTS_START = 'FETCH_SAVED_COMMENTS_START'; 
export const FETCH_SAVED_COMMENTS_SUCCESS = 'FETCH_SAVED_COMMENTS_SSUCCESS'; 
export const FETCH_SAVED_COMMENTS_FAILURE = 'FETCH_SAVED_COMMENTS_FAILURE';
export const fetchSavedComments = () => {
    return dispatch => {
        const id = localStorage.getItem('id')
        dispatch({ type: FETCH_SAVED_COMMENTS_START });
        axiosWithAuth()
            .get(`https://saltyhackers2.herokuapp.com/users/${id}/saved-comments/`)
            .then(res => {
                dispatch({ type: FETCH_SAVED_COMMENTS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SAVED_COMMENTS_FAILURE, payload: console.log(err)})
            })
    }
} 

export const SAVE_COMMENT2 = 'SAVE_COMMENT2'
export const saveComment2 = comment => {
    console.log('this is working')
    return dispatch => {
        dispatch({ type: SAVE_COMMENT, payload: comment})
    }
}

export const SAVE_COMMENT = 'SAVE_COMMENT'
export const saveComment = ( comment_id ) => {
    return dispatch => {
    const id2 = localStorage.getItem('id')
    axiosWithAuth()
    .post(`https://saltyhackers2.herokuapp.com/users/${id2}/comment/${comment_id}/saved-comments/`)
    .then(res => {
        console.log('SAVED COMMENT SUCCEEDED -->', res)
        dispatch({ type: SAVE_COMMENT, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}
}

export const EDIT_SAVED_COMMENT_SUCCESS = 'EDIT_SAVED_COMMENT_SUCCESS';
export const EDIT_SAVED_COMMENT_FAILURE = 'EDIT_SAVED_COMMENT_FAILURE';
export const editSavedComment = (id, commentSaved) => {
    return dispatch => {
        const id2 = localStorage.getItem('id')
        axiosWithAuth()
            .put(`https://saltyhackers2.herokuapp.com/users/${id2}/comment/${id}/saved-comments/`, commentSaved)
            .then(res => {
                console.log(res.data)
                dispatch({ type: EDIT_SAVED_COMMENT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: EDIT_SAVED_COMMENT_FAILURE, payload: console.log(err) })
            })
    }
}

export const REMOVE_SAVED_COMMENT_SUCCESS = 'REMOVE_SAVED_COMMENT_SUCCESS';
export const REMOVE_SAVED_COMMENT_FAILURE = 'REMOVE_SAVED_COMMENT_FAILURE';
export const removeSavedComment = ( id, comment_id) => {
    return dispatch => {
        const id2 = localStorage.getItem('id')
        axiosWithAuth()
            .delete(`https://saltyhackers2.herokuapp.com/users/${id2}/saved-comments/${id}`, comment_id)
            .then(res => {
                console.log('REMOVE COMMENT SUCCESS-->', res.data)
                dispatch({ type: REMOVE_SAVED_COMMENT_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: REMOVE_SAVED_COMMENT_FAILURE, payload: console.log(err)})
            })
    }
}