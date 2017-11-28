require('./PageMine.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'refast';
import { WhiteSpace, WingBlank, Button, Flex, Result, Icon, List, Toast, NavBar } from 'antd-mobile';
import TabBar from 'components/stateful/card-tabbar-self';

class Center extends Component {
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

export default Center;