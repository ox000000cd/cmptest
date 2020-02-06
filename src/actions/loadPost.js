import get from "axios";

export const loadPostAction = async dispatch => {
    let res = await get('http://jsonplaceholder.typicode.com/posts');
    console.log("after get data", res);
    dispatch({
        type: "load",
        payload: res.data
    })
};