import axios from 'axios';

//On start, need to get address from ngrok
export default axios.create({
    baseURL: 'http://f2d369dc5c5a.ngrok.io'
})