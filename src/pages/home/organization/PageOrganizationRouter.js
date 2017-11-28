import { Route } from 'react-keeper'
import Page from './PageOrganization';
const OrganizationPage = (props) => (<div>
    {props.children}
</div>);


export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={ OrganizationPage } path= '/organization' >
                <div>
                    <Route index path="/index" component={ Page }></Route>
                </div>
            </Route>
        </div>)
};
