export const InnerDataResucer = (state = {hasCaluse: "false"}, action) => {
    switch (action.type) {
        case 'postData_Fill':
            console.log("inner data show", action);
            return {
                ...state, resultData: action.payload
            };
        default:
            console.log("do inner default", action);
            return {
                state
            }
    }
};