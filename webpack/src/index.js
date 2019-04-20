import './style';
import { createNavigationBar } from './navigation-bar';

window.document.body.appendChild(createNavigationBar());
window.document.querySelector('.test-insert').innerHTML = 'Hello, World!';