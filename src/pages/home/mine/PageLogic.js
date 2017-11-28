import PageConst from './PageConst';

export default {
    defaults(props) {
        //初始的state
        return {
            name: '',
            imgUrl: '',
            company: ''
        }
    },
    initPageData(ctx) {
        dd.ready(function () {
            dd.biz.user.get({
                onSuccess: function (info) {
                    let obj = {
                        name: info.nickName,
                        imgUrl: info.avatar,
                        company: info.emplId
                    }
                    ctx.setState(obj);
                },
                onFail: function (err) {
                    alert('失败');
                }
            });
        })

    }


};
