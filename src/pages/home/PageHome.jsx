require('./PageHome.less');
import { Component } from 'refast';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="home">
                {/*中间嵌套的页面*/}
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title:'Home' })
    }

}

export default Home ;
