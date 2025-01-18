/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {playbackService} from './musicService'

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);