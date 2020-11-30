import axios from 'axios';
import Qs from 'qs';


const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});