import { 
    FETCH_SAVED_COMMENTS_START,
    FETCH_SAVED_COMMENTS_SUCCESS,
    FETCH_SAVED_COMMENTS_FAILURE
} from '../action/appAction';

const initialState = {
    isFetchingSavedComments: false,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    };
};