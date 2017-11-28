require('./PageOrganization.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';
import { Control } from 'react-keeper';
import Crumb from 'components/crumbs';
import { NavBar, WhiteSpace, WingBlank, Button, Result, Icon, List, Toast, SwipeAction, Flex, SegmentedControl, Tag } from 'antd-mobile';
import TabBar from 'components/stateful/card-tabbar-self';
import { isMobile } from 'dings'; 

class Basic extends Component {
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

export default Basic;
