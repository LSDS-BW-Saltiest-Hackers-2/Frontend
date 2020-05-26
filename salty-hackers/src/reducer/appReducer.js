

const initialState = {
    isFetchingComments: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};