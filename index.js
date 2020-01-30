/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import LandingPage from './src/pages/LandingPage/LandingPage';
import CreateAccountAndLogIn from './src/pages/CreateAccountAndLogIn/CreateAccountAndLogIn';
import SignIn from './src/pages/signIn/SignIn';
import Input from './src/component/input/Input';

AppRegistry.registerComponent(appName, () => SignIn);
