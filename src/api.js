import nattyFetch from 'natty-fetch';
const { API_URL, MOCK_URL } = require(`config/${ENV}.json`);
import  { jwtStorage } from 'utils';

const token = jwtStorage.get('jwtToken');
nattyFetch.setGlobal({
    data: {
        //配置token
        //hx_token: `${token}`
    },
    withCredentials: false,
    // header: {
    //     'Authorization': `Bearer ${token}`,
    // },
    urlPrefix:'http://123.56.120.20:8080/'//实际的urlprefix eg: http://test.gbtong.com
});
export default nattyFetch;
