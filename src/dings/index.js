import jsapi from './jsapi.json';
import {sync, jwtStorage} from 'utils';

const storage = jwtStorage;

const {AUTH_URL, AgentID, APP_URL, TOKEN_URl} = require(`config/${ENV}.json`);

const isMobile = (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));

const dingdingHelper = dd;

class DingClient {

    ddConfig() {
        return new Promise(async (resolve, reject) => {
            let jsapiArr = Object.keys(jsapi);
            try {
                let res = await fetch(`${AUTH_URL}?url=${APP_URL}`);
                let data = await res.json();
                if (data.success) {
                    const {corpId, timeStamp, nonceStr, signature} = data.content;
                    //返回的data数据自行修改
                    dingdingHelper.config({
                        //agentId: AgentID,
                        corpId: corpId,
                        timeStamp: timeStamp,
                        nonceStr: nonceStr,
                        signature: signature,
                        jsApiList: jsapiArr
                    });

                    dingdingHelper.error(function (error) {
                        alert('鉴权失败, 请联系管理员');
                        reject("DingTalk jsApi concent : ", JSON.stringify(error))
                    });

                    dingdingHelper.ready(async () => {
                        try {
                            let res = await storage.has('jwtToken');

                            if (!res.has) {
                                let res = await sync(dingdingHelper.runtime.permission.requestAuthCode, {corpId: corpId});
                                const {code} = res;
                                res = await fetch(`${TOKEN_URl}${code}`);
                                let data = await res.json();
                                console.log(data);
                                if (data.success) {
                                    const {JwtToken, UserName} = data.content;

                                    await storage.asyncSet('jwtToken', JwtToken);
                                    await storage.asyncSet('UserName', UserName);
                                    
                                    //dingdingHelper.biz.navigation.setTitle({title: UserName});
                                    require('../routers');
                                } else {
                                    console.log(data.errors);
                                }
                               }
                        } catch (e) {
                            console.log(e);
                        }
                        
                        //console.log(storage.has('UserName'));
                        //if (storage.has('UserName').has) {
                        //    dingdingHelper.biz.navigation.setTitle({title: storage.has('UserName').value});
                        //}
                        
                        resolve('DingTalk jsApi concent  ok: ')
                    });
                } else {
                    console.log(data.errors);

                }
            } catch (e) {
                console.error(e);
            }
        });
    };
}
;

export { dingdingHelper, isMobile };
export default new DingClient();