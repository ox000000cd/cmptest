export const counterReducer = (state = {count: 1}, action) => {
    console.log(action);
    return state;
};