import 'whatwg-fetch';
import 'babel-polyfill'
//import './ding';
import  { jwtStorage } from 'utils';
const token = jwtStorage.get('jwtToken');
console.log('token is ' +  token);
// if (token) {
//     require('./routers');
// }
require('./routers');