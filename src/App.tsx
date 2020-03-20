import React from 'react';
import {Provider} from 'react-redux'
import {state} from './redux/store'
import Main from './components/Main'


function App() {
  return (
      <Provider store={state} >
          <Main/>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Provider>
  );
}

export default App;
