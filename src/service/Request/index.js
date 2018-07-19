import axios from 'axios';
import getToken from '../Auth/get-token';

const token = getToken();

console.log(token);

const req = axios.create({
  headers: {
    Authorization: `Bearer ${token.idToken}`
  }
});

export default req;
