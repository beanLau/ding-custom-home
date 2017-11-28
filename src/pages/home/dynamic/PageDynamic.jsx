require('./PageDynamic.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';
import { NavBar } from 'antd-mobile';
import TabBar from 'components/stateful/card-tabbar-self';

class Dynamic extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }

    render() {
        return (
            <div>
                <NavBar
                    iconName=""
                    mode="light"
                >
                    动态
                </NavBar>

                {/*内容*/}

                <TabBar />
            </div>
        );
    }

}

export default Dynamic ;
