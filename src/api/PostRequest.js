import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const getTimeLinePosts = (id) => API.get(`/posts/${id}/timeline`)
export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);