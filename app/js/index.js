const ReactDOM = require('react-dom')
const React = require('react')
const injectTapEventPlugin = require('react-tap-event-plugin')
const $ = require('jquery')
const _ = require('lodash')
const moment = require('moment')
const PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin.js')
const ReactGridLayout = require('react-grid-layout');
global.$ = require('jquery')

window.React = React
window.ReactDOM = ReactDOM
window.injectTapEventPlugin = injectTapEventPlugin
window.$ = $
window.jquery = $
window._ = _
window.moment = moment
window.PureRenderMixin = PureRenderMixin
window.ReactGridLayout = ReactGridLayout
global.api_server = "http://localhost:8080";

global.Login = require('./components/Login.js')
global.Registration = require('./components/Registration.js')
//global.Dashboard = require('./components/Dashboard.js')
global.ProfileEdit = require('./components/ProfileEdit.js')
global.HSDeckBuilder = require('./components/HSDeckBuilder.js')
global.SideBar = require('./components/SideBar.js')
//global.Playground = require('./components/Playground.js')
global.Dashboardv2 = require('./components/Dashboardv2.js')
//let Index = require('./components/index.js')
injectTapEventPlugin();

ReactDOM.render(
  <Login />,
  document.getElementById('main-content')
);
