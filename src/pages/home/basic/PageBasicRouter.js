import { Route } from 'react-keeper'
import Page from './PageBasic';
const BasicPage = (props) => (<div>
    {props.children}
</div>);


export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={BasicPage} path= '/basic' >
                <Route index path="/index" component={ Page }></Route>
            </Route>
        </div>)
};