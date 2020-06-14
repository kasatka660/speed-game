import 'bootstrap';
import './styles/index.scss';
import App from './components/app'


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});


