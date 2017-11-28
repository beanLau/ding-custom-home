import { Route } from 'react-keeper'
import Page from './PageDynamic';

const DynamicPage = (props) => (<div>
    {props.children}
</div>);


export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={DynamicPage} path= '/dynamic' >
                <div>
                    <Route index path="/index" component={ Page }></Route>
                </div>
            </Route>
        </div>)
};
