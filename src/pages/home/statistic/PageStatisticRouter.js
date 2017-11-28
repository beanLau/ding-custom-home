import { Route } from 'react-keeper'
import Page from './PageStatistic';

const StatisticPage = (props) => (<div>
    {props.children}
</div>);

export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={StatisticPage} path= '/statistic' >
                <div>
                    <Route index path="/index" component={ Page }></Route>
                </div>
            </Route>
        </div>)
};
