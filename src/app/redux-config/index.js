import ReduxStore from './store';
import ReduxAction from './actions';

window.stroe = ReduxStore; // global bind of store
window.action = ReduxAction; // global bind of action

console.log('Code execute');