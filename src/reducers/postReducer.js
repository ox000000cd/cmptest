export const postReducer = (state = {list: [{title: 'init', id: 0}]}, action) => {
    switch (action.type) {
        case 'load':
            console.log("do load type");
            return {
                ...state, list: action.payload
            };
        default:
            console.log("do default");
            return state;
    }
};