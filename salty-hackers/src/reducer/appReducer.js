import { 
    FETCH_SAVED_COMMENTS_START,
    FETCH_SAVED_COMMENTS_SUCCESS,
    FETCH_SAVED_COMMENTS_FAILURE,
    // EDIT_SAVE_COMMENT_SUCCESS,
    // EDIT_SAVE_COMMENT_FAILURE,
    REMOVE_SAVED_COMMENT_SUCCESS,
    REMOVE_SAVED_COMMENT_FAILURE
} from '../action/appAction';

const initialState = {
    isFetchingSavedComments: false,
    comments: [
        {
            Comment: '',
            Comment_ID: 0,
            Deleted: '',
            StoryID: 0,
            UserName: ''  
        }
    ]
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
                isFetchingSavedComments: false,
                comments: action.payload
            }
        case FETCH_SAVED_COMMENTS_FAILURE:
            return {
                ...state,
                isFetchingSavedComments: false
            }
        //=============EDIT SAVE COMMENT BELOW====================
        // case EDIT_SAVE_COMMENT_SUCCESS:
        //     return {
        //         ...state
        //     }
        // case EDIT_SAVE_COMMENT_FAILURE:
        //     return {
        //         ...state
        //     }
        default:
            return state;
    };
};