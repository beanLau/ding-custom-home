import { Route } from 'react-keeper'
import Page from './PageMine';
const MinePage = (props) => (<div>
    {props.children}
</div>);

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={MinePage} path= '/mine' >
                <Route index path='/index' component={Page}/>
            </Route>
        </div>)
};