require('./CardTabbarSelf.less');
import { Component } from 'refast';
import { Control } from 'react-keeper';
import logic from './Logic';
import TabBar, { activeTabbar } from '../../stateless/card-tabbar';


class CardTabbarSelf extends Component {
    constructor(props) {
        super(props, logic);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key){
        this.dispatch('setTabbarIndex',key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {

        const { state: { menu, tabbarIndex, badge} } = this;
        const activeIndex=activeTabbar( menu );

        if (tabbarIndex != activeIndex  ){ // 对比url索引和当前选中的值,如不对应则纠正.
            this.dispatch('setTabbarIndex',activeIndex);
        }

        return (<div>
            <TabBar menu={menu} tabbarIndex={tabbarIndex} badge={badge} onChange={this.handleChange} />
        </div>)
    }
}

export default CardTabbarSelf ;