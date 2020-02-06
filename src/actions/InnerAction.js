export const submitInner = async (dispatch, oriValue) => {
    let res = Math.ceil(Math.random() * 10);
    let value = {hasCaluse: oriValue + res}
    dispatch({
        type: "postData_Fill",
        payload: value
    })
};

export const showInner = (id) => {

    let res = Math.ceil(Math.random() * 10);
    let value = {hasCaluse: id + res}
    return {
        type: "postData_Fill",
        payload: value
    };
};