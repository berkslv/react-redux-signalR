import { Provider } from 'react-redux'
import Chat from './Components/Chat'
import store from "./Redux/store"

function App() {
  return (
    <Provider store={store}>
    <div>
      <Chat></Chat>
    </div>
    </Provider>
  );
}

export default App;
