import PageConst from './PageConst';
import nattyFetch from 'api';
import { Toast } from 'antd-mobile';

const ctx = nattyFetch.context({
    rest: true,
    withCredentials: false
});

ctx.create('org', {
    getOrgDataById: {
        url: 'findChild/:id',
        urlMark: false,
        urlStamp: false
    }
});

const io = ctx.api;

let content = {
    level:'',
    current_areaId: '130526000000',
    childRegion: [],// [{ id: 1, name: '任城镇' }, { id: 2, name: '邢家湾镇' }, { id: 3, name: '辛店镇' }, { id: 4, name: '天口镇' }, { id: 5, name: '西固城乡' }, { id: 6, name: '永福庄乡' }],
    currentMessage: '',// '任县县委组织部，位于：河北省邢台市任县任城镇北街，交通方便，欢迎上级领导莅临指导，社会各界共同监督，本乡镇财务已按国家规定进行公开，如欲了解详情，请和我们联系，为了更好的服务公众，任县县委组织部已开通微博。新闻媒体采访请事先与上级宣传单位联系。随着改革开放以来，经济发展迅速，我单位积极响应号召，坚持以民为主，大力促进经济发展，振兴市场。',
    crumbsData: [],// [{ name: '河北省组织部', id: 1 }, { name: '邢台市组织部', id: 2 }, { name: '任县组织部', id: 3 }, { name: '任城镇', id: 4 }, { name: '西街村', id: 5 }],
    personnelData: [],// [{ name: '曹海江', id: 1, imgUrl: '/src/assets/img/headPortrait.png' }, { name: '刘伟涛', id: 2, imgUrl: '/src/assets/img/headPortrait.png' }, { name: '王木真', id: 3, imgUrl: '/src/assets/img/headPortrait.png' }, { name: '张京杭', id: 4, imgUrl: '/src/assets/img/headPortrait.png' }, { name: '赵鹏龙', id: 5, imgUrl: '/src/assets/img/headPortrait.png' }],
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
        try {
            let res = await io.org.getOrgDataById({
                ':id': ctx.getState().current_areaId
            });
            const { childRegion, currentMessage, crumbsData, maillList,level } = res;
            content = {
                childRegion: childRegion,
                current_areaId: ctx.getState().current_areaId,
                currentMessage: currentMessage,
                crumbsData: crumbsData,
                personnelData: maillList,
                level:level
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
    async queryRegionForId(ctx, id) {
        Toast.loading('Loading...',300);
        try {
            let res = await io.org.getOrgDataById({
                ':id': id
            });
            const { childRegion, currentMessage, crumbsData, maillList,level } = res;
            content = {
                childRegion: childRegion,
                current_areaId: id,
                currentMessage: currentMessage,
                crumbsData: crumbsData,
                personnelData: maillList,
                level:level
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
    deleteRegioForId(id) {

    },
    updataRegioForId(id) {

    }

};
