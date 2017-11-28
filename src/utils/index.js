import { jwtStorage } from './storage';
import { dingdingHelper } from 'dings';

function PromptMessage(message) {
    return {
        title: "提示", buttonName: "收到",
        message: message,
    };
};

function formatDate(val) {
    var date = new Date(val);
    var datestr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getUTCHours() + ':' + date.getMinutes();
    return <span>{datestr}</span>

}
function formatDateToYY(val) {
    if (!val) {
        val = new Date();
    }
    var date = new Date(val);
    var datestr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return datestr

}
function getDateDif(date1, date2) {
    var date3 = date2.getTime() - date1.getTime();   //时间差的毫秒数
    //计算相差的年数
    var years = Math.floor(date3 / (12 * 30 * 24 * 3600 * 1000));
    //计算相差的月数
    var leave = date3 % (12 * 30 * 24 * 3600 * 1000);
    var months = Math.floor(leave / (30 * 24 * 3600 * 1000));
    //计算出相差天数
    var leave0 = leave % (30 * 24 * 3600 * 1000);
    var days = Math.floor(leave0 / (24 * 3600 * 1000));
    return years + "年" + months + "月" + days + "天 ";

}
function apiSync(fn, p, m) {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fn(p, m);
            const empty = !data.length;

            if (empty) {
                dingdingHelper.device.notification.alert(PromptMessage('没有找到呀,请换一个?'))
            } else { console.log(`请求成功！`) };

            resolve = { data, empty };
        } catch (e) {
            dingdingHelper.device.notification.alert(PromptMessage('数据出错啦,请在试一次?'));
            reject = { data: [], empty: false };
        }
    })
}

function sync(dingtalkFunction, param) {
    return new Promise((resolve, reject) => {
        let params = {
            ...param,
            onSuccess: res => {
                resolve(res)
            },
            onFail: err => {
                reject(err)
            }
        };
        dingtalkFunction(params);
    });
}

export { sync, apiSync, jwtStorage, formatDate, formatDateToYY,getDateDif};
