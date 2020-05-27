import { 
    FETCH_SAVED_COMMENTS_START,
    FETCH_SAVED_COMMENTS_SUCCESS,
    FETCH_SAVED_COMMENTS_FAILURE,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_FAILURE,
    REMOVE_SAVED_COMMENT_SUCCESS,
    REMOVE_SAVED_COMMENT_FAILURE
} from '../action/appAction';

const initialState = {
    isFetchingSavedComments: false,
    savedComments: []
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        //=============REMOVE SAVED COMMENTS=====================
        case REMOVE_SAVED_COMMENT_FAILURE:
            return {
                ...state,
            }
        case REMOVE_SAVED_COMMENT_SUCCESS:
            return {
                ...state,
            }
        //=============FETCH SAVED COMMENTS BELOW====================
        case FETCH_SAVED_COMMENTS_START:
            return {
                ...state,
                isFetchingSavedComments: true
            };
        case FETCH_SAVED_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetchingSavedComments: false
            }
        case FETCH_SAVED_COMMENTS_FAILURE:
            return {
                ...state
            }
        //=============SAVE COMMENT BELOW====================
        case SAVE_COMMENT_SUCCESS:
            return {
                ...state
            }
        case SAVE_COMMENT_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    };
};