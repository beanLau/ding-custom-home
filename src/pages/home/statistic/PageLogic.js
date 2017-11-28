import PageConst from './PageConst';
import nattyFetch from 'api';
import { Toast } from 'antd-mobile';

const ctx = nattyFetch.context({
    rest: true,
    withCredentials: false
});

ctx.create('statistic', {
    getStatisticData: {
        url: 'digitalCount/:id',
        urlMark: false,
        urlStamp: false,
        rest: true
    }
});

const io = ctx.api;

let content = {
    current_areaId:'130526000000',
    childRegion:[],// [{ id: 1, name: '任城镇' }, { id: 2, name: '邢家湾镇' }, { id: 3, name: '辛店镇' }, { id: 4, name: '天口镇' }, { id: 5, name: '西固城乡' }, { id: 6, name: '永福庄乡' }],
    crumbsData:[],// [{ name: '河北省组织部', id: 1 }, { name: '邢台市组织部', id: 2 }, { name: '任县组织部', id: 3 }, { name: '任城镇', id: 4 }, { name: '西街村', id: 5 }],
    digitalStatistics: {
        "Lianren25": 0,
        "Lianren15": 0,
        "Lianren5": 0,
        "Leiren25": 0,
        "Leiren15": 0,
        "Leiren5": 0,
        "Shuoshi": 0,
        "Benke": 0,
        "Zhuanke": 0,
        "Zhongzhuan": 0
    },
    chartStatistics: {
        "Lianren": [
            {
                "tem": 0,
                "city": "连任25年以上"
            },
            {
                "tem": 0,
                "city": "连任15年以上"
            },
            {
                "tem": 0,
                "city": "连任5年以上"
            }
        ],
        "Leiren": [
            {
                "tem": 0,
                "city": "累任25年以上"
            },
            {
                "tem": 0,
                "city": "累任15年以上"
            },
            {
                "tem": 0,
                "city": "累任5年以上"
            }
        ],
        "Xueli": [
            {
                "tem": 0,
                "city": "硕士研究生及以上"
            },
            {
                "tem": 0,
                "city": "本科"
            },
            {
                "tem": 0,
                "city": "专科"
            },
            {
                "tem": 0,
                "city": "中专及以下"
            }
        ]
    },
    areaid:1
}
export default {
    defaults(props) {
        //初始的state
        return {
            ...content
        }
    },
    async initPageData(ctx, id) {
        ctx.setState({areaid:id||1});
        Toast.loading('Loading...',300);
        try {
            let res = await io.statistic.getStatisticData({
                ':id': id || ctx.getState().current_areaId
            });
            const { childRegion, crumbsData, digitalStatistics, chartStatistics } = res;
            content = {
                childRegion: childRegion,
                digitalStatistics: digitalStatistics,
                crumbsData: crumbsData,
                chartStatistics: chartStatistics,
                current_areaId:id || ctx.getState().current_areaId
            };
            ctx.setState(content);
            GM.Global.pixelRatio = 2;
            var chart = new GM.Chart({
                id: 'c1'
            });
            chart.source(chartStatistics.Lianren, {
                tem: {
                    min: 0
                }
            });
            //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
            chart.axis('city', {
                label: {
                    fontSize: 14
                },
                grid: null
            });
            chart.interval().position('city*tem').color('city');
            chart.render();

            var chart = new GM.Chart({
                id: 'c2'
            });
            chart.source(chartStatistics.Leiren, {
                tem: {
                    min: 0
                }
            });
            //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
            chart.axis('city', {
                label: {
                    fontSize: 14
                },
                grid: null
            });
            chart.interval().position('city*tem').color('city');
            chart.render();


            var chart = new GM.Chart({
                id: 'c3'
            });
            chart.source(chartStatistics.Xueli, {
                tem: {
                    min: 0
                }
            });
            //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
            chart.axis('city', {
                label: {
                    fontSize: 12
                },
                grid: null
            });
            chart.interval().position('city*tem').color('city');
            chart.render();
            Toast.hide();
            return;
        } catch (e) {
            console.error(e);
            Toast.hide();
            return e;
        }
    }

};
