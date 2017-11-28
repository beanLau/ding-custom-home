import PageConst from './PageConst';
import nattyFetch from 'api';
import { Toast } from 'antd-mobile';

const ctx = nattyFetch.context({
    rest: true,
    withCredentials: false
});

ctx.create('basic', {
    getBasicData: {
        url: 'rootPage/:id',
        urlMark: false,
        urlStamp: false
    },
    findshuji:{
        url: 'findshuji/:id',
        urlMark: false,
        urlStamp: false
    },
    findzhishu:{
        url: 'findzhishu/:id',
        urlMark: false,
        urlStamp: false
    },
    findActivist:{
        url: 'findActivist/:id',
        urlMark: false,
        urlStamp: false
    }
});

const io = ctx.api;

let content = {
        data: [{url:'aaa'}, {url:'bbb'}, {url:'ccc'},],
        initialHeight:600,
        gridData:[{icon: 'http://static.dingtalk.com/media/lALOSqpWSMzIzMg_200_200.png',text: '签到',id:'-8'},
        {icon: 'http://static.dingtalk.com/media/lALOD48D7czIzMg_200_200.png',text: '考勤',id:'158'},
        {icon: 'http://static.dingtalk.com/media/lALOD5sFK8zIzMg_200_200.png',text: '日志',id:'2'},
        {icon: 'http://static.dingtalk.com/media/lALOD8EH6szIzMg_200_200.png',text: '审批',id:'-4'},
        {icon: 'http://static.dingtalk.com/media/lALOI3NZwczIzMg_200_200.png',text: '电话会议',id:'-9'},
        {icon: 'http://static.dingtalk.com/media/lALOASopJMzIzMg_200_200.png',text: '免费电话',id:'-10'},
        {icon: 'http://static.dingtalk.com/media/lALO6HqwRszIzMg_200_200.png',text: '视频会议',id:'[1288]'},
        {icon: 'http://static.dingtalk.com/media/lALOsj36jczIzMg_200_200.png',text: '审批',id:'[-4]'}],
        appListData:[{icon: require('assets/img/party.png'),text: '干部管理',id:'-8'},
        {icon: require('assets/img/cattle.png'),text: '优美奶吧',id:'158'},
        {icon: require('assets/img/task.png'),text: '任务管理',id:'2'},
        {icon: require('assets/img/grid.png'),text: '网格管理系统',id:'-4'}]
    }
export default {
    defaults(props) {
        //初始的state
        return {
            ...content
        }
    },
    async initPageData(ctx) {
        Toast.loading('Loading...',300);
        try {//获取基层首页数据
            let res = await io.basic.getBasicData({
                ':id': ctx.getState().current_areaId
            });
            const { childRegion, currentMessage,crumbsData,level } = res;
            content = {
                childRegion: childRegion,
                currentMessage: currentMessage,
                crumbsData: crumbsData,
                level:level,
                current_areaId:ctx.getState().current_areaId
            };
            ctx.setState(content);
            Toast.hide();
            return res;
        } catch (e) {
            console.error(e);
            Toast.hide();
            return e;
        }

    },
    async queryDataById(ctx, id) {
        Toast.loading('Loading...',300);
        try {
            let res = await io.basic.getBasicData({
                ':id':id
            });
            const { childRegion, currentMessage,crumbsData,level } = res;
            content = {
                childRegion: childRegion,
                currentMessage: currentMessage,
                crumbsData: crumbsData,
                level:level,
                current_areaId:id
            };
            ctx.setState(content);
            Toast.hide();
            return res;
        } catch (e) {
            console.error(e);
            Toast.hide();
            return e;
        }
    },
    queryRegionForId(ctx, id, level) {
        //通过id获取数据修改data数据
        ctx.setState({ current_parenntId: id })
        ctx.setState({ data: [{ id: 5, name: '林家庄' }, { id: 6, name: '谢家屯' }, { id: 7, name: '章台村' }, { id: 8, name: '大豆村' }, { id: 9, name: '西豆村' }] })
    },
    deleteRegioForId(id) {

    },
    updataRegioForId(id) {

    }

};
