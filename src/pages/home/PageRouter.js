import { Route } from 'react-keeper'
import Page from './PageHome';
import Basic from './basic';
export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/home' >
                <div>
                    <Basic.route />
                </div>
            </Route>
        </div>)
};

