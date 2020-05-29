import { 
    FETCH_SAVED_COMMENTS_START,
    FETCH_SAVED_COMMENTS_SUCCESS,
    FETCH_SAVED_COMMENTS_FAILURE,
    EDIT_SAVED_COMMENT_SUCCESS,
    EDIT_SAVED_COMMENT_FAILURE,
    REMOVE_SAVED_COMMENT_SUCCESS,
    REMOVE_SAVED_COMMENT_FAILURE,
    SAVE_COMMENT,
} from '../action/appAction';

const initialState = {
    isFetchingSavedComments: false,
    commentSaved: [],
    savedComments: []
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        //=============REMOVE SAVED COMMENTS=====================
        case REMOVE_SAVED_COMMENT_FAILURE:
            return {
                ...state
            }
        case REMOVE_SAVED_COMMENT_SUCCESS:
            return {
                ...state,
                savedComments: action.payload
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
                isFetchingSavedComments: false,
                savedComments: action.payload
            }
        case FETCH_SAVED_COMMENTS_FAILURE:
            return {
                ...state,
                isFetchingSavedComments: false
            }

        case SAVE_COMMENT:
            return {
                ...state,
                savedComments: action.payload
            }
        //=============EDIT SAVE COMMENT BELOW====================
        case EDIT_SAVED_COMMENT_SUCCESS:
            return {
                ...state,
                savedComments: [...state.savedComments, action.payload]
            }
        case EDIT_SAVED_COMMENT_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    };
};