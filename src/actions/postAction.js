import * as PostApi from '../api/PostRequest.js'

export const getTimeLinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETRIVING_START" })
    try {
        const { data } = await PostApi.getTimelinePosts(id);
        dispatch({ type: "RETREIVING_SUCCESSFUL", data: data })
    } catch (error) {
        dispatch({ type: "RETREIVING_FAIL" });
        console.log(error);
    }
}