require('./PageBasic.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';
import { Control } from 'react-keeper';
import Crumb from 'components/crumbs';
import { WhiteSpace, WingBlank, Button, Result, Icon, List, Toast, Carousel, Grid } from 'antd-mobile';
//import TabBar from 'components/stateful/card-tabbar-self';
import { isMobile } from 'dings';

class Basic extends Component {
    constructor(props) {
        super(props, logic);
        this.gridClick = this.gridClick.bind(this);
    }
    gridClick(el, index) {
        // dd.biz.util.openLink({ 使用钉钉jsapi页面闪动2次bug
        //     url: `dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=dinga04ad0aa6f805b3435c2f4657eb6378f&appid=${el.id}`,
        //     onSuccess: function () {
        //         if (typeof corpId === 'function') {
        //             corpId();
        //         }
        //     },
        //     onFail: function () {
        //         if (typeof corpId === 'function') {
        //             corpId();
        //         }
        //     }
        // });
        window.location.href = `dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=dinga04ad0aa6f805b3435c2f4657eb6378f&appid=${el.id}`
    }
    render() {
        const { state: { data, initialHeight, gridData, appListData } } = this;
        const Item = List.Item;
        const Brief = Item.Brief;
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <div>
                <div style={{ borderTop: '2px solid #ccc' }}>

                </div>
                <Carousel
                    className="my-carousel"
                    autoplay={true}
                    hasLine={true}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={5}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    style={{ height: '2.8rem', overflow: 'hidden' }}
                >
                    {this.state.data.map((item, index) => (
                        <a href="http://www.baidu.com" key={index}>
                            <img
                                src={require(`assets/img/${item.url}.jpg`)}
                                alt=""
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    // this.setState({
                                    //     initialHeight: null,
                                    // });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div className="myGrid">

                </div>

                <div style={{ position: 'relative', display: 'flex', paddingLeft: '0.3rem', minHeight: '0.68rem', verticalAlign: 'middle', overflow: 'hidden', alignItems: 'center', transform: 'background-color 200ms' }}>
                    <div style={{ boxSizing: 'border-box', textAlign: 'left', position: 'absolute', left: '0.3rem', lineHeight: '0.68rem' }}>我的办公</div>
                </div>
                <Grid
                    data={gridData}
                    activeStyle={false}
                    columnNum={4}
                    onClick={(el, index) => this.gridClick(el, index)}

                />
                <div style={{ position: 'relative', display: 'flex', paddingLeft: '0.3rem', minHeight: '0.68rem', verticalAlign: 'middle', overflow: 'hidden', alignItems: 'center', transform: 'background-color 200ms' }}>
                    <div style={{ boxSizing: 'border-box', textAlign: 'left', position: 'absolute', left: '0.3rem', lineHeight: '0.68rem' }}>我的项目</div>
                </div>
                <Grid
                    data={appListData}
                    activeStyle={false}
                    columnNum={4}
                    onClick={(el, index) => console.log(`${el}---${index}`)}
                    //onClick={(el, index) => this.gridClick(el, index)}

                />
            </div>
        );
    }
    componentDidMount() {
        dd.ready(function () {
            dd.biz.navigation.setTitle({ title: '人员信息' })
        })
    }

}

export default Basic;
