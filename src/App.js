import { Provider } from 'react-redux';

import AppRouters from './components/routers/AppRouters';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
