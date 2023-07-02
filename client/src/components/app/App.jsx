import AppHeader from '../app-header/AppHeader';
import AppFooter from '../app-footer/AppFooter';

import './app.sass';

function App() {
  return (
    <div className="app flx-c">
        <AppHeader></AppHeader>
        <AppFooter></AppFooter>
    </div>
  );
}

export default App;