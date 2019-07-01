/**
 * 
 *  todo: 2) Add HMR as such:
 *        * if (process.env.NODE_ENV !== "production") {
 *        *   if (module.hot) {
 *        *     module.hot.accept('./reducers', () => {
 *        *       store.replaceReducer(rootReducer)
 *        *     })
 *        *   }
 *        * }
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
// import App from './App';
import 'semantic-ui-less/semantic.less'

import home from './containers/HomePage'
import ReasoningRock from './containers/About/ReasoningRock'
import ProjectManager from './containers/About/ProjectManager'
import Questions from './containers/About/Questions'
import GivingBack from './containers/About/GivingBack'
import Apps from './containers/Apps'
import RefErr from './containers/RefErr'
import ContactMe from './containers/ContactMe'
import WebFixedEx from './containers/WebPages/WebFixedEx'
import WebStickyEx from './containers/WebPages/WebStickyEx'
import WebNavEx from './containers/WebPages/WebNavEx'
import WebHomeEx from './containers/WebPages/WebHomeEx'
import WebLoginEx from './containers/WebPages/WebLoginEx'
import Scalability from './containers/Philosophy/Scalability'
import Tools from './containers/WebDevelopment/Tools'
import ThemeEx from './containers/Customization/ThemeEx'
import Interoperability from './containers/Usability/Interoperability'
import UserInterface from './containers/Usability/UserInterface'
import UserExperience from './containers/Usability/UserExperience'
import Developmental from './containers/Philosophy/Developmental'
import DevScalability from './containers/WebDevelopment/DevScalability'
import ResponsiveDevelopment from './containers/WebDevelopment/ResponsiveDevelopment'
import DesignScalability from './containers/WebDesign/DesignScalability'
import Branding from './containers/WebDesign/Branding'
import Expectations from './containers/Mobile/Expectations'
import MobileApps from './containers/Mobile/MobileApps'
import MobileDev from './containers/Mobile/MobileDev'
import Theme from './containers/Customization/Theme'
import i18n from './containers/Customization/i18n'
import ResponsiveContainer from './containers/Nav';
// import {unregister} from './serviceWorker';

const preloadedState = {};
const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ResponsiveContainer>
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/scalability' component={Scalability} />
          <Route path='/developmental' component={Developmental} />
          <Route path='/development_scalability' component={DevScalability} />
          <Route path='/responsive_development' component={ResponsiveDevelopment} />
          <Route path='/tools' component={Tools} />
          <Route path='/design_scalability' component={DesignScalability} />
          <Route path='/custom_theme' component={Theme} />
          <Route path='/interoperability' component={Interoperability} />
          <Route path='/user_interface' component={UserInterface} />
          <Route path='/user_experience' component={UserExperience} />
          <Route path='/homepage_example' component={WebHomeEx} />
          <Route path='/login_example' component={WebLoginEx} />
          <Route path='/sticky_example' component={WebStickyEx} />
          <Route path='/nav_example' component={WebNavEx} />
          <Route path='/fixed_example' component={WebFixedEx} />
          <Route path='/theme_example' component={ThemeEx} />
          <Route path='/i18n' component={i18n} />
          <Route path='/branding' component={Branding} />
          <Route path='/expectations' component={Expectations} />
          <Route path='/apps' component={Apps} />
          <Route path='/mobile_development' component={MobileDev} />
          <Route path='/mobile_apps' component={MobileApps} />
          <Route path='/contact' component={ContactMe} />
          <Route path='/reasoning_rock' component={ReasoningRock} />
          <Route path='/project_manager' component={ProjectManager} />
          <Route path='/questions' component={Questions} />
          <Route path='/giving_back' component={GivingBack} />
          <Route component={RefErr} />
        </Switch>
      </ResponsiveContainer>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

