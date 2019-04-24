import '../style';
import createGreetingMessage from '../greeting-message';
import { createNavigationBar } from '../navigation-bar';

window.document.body.appendChild(createNavigationBar());
window.document.body.appendChild(createGreetingMessage('admin', 'blue'));