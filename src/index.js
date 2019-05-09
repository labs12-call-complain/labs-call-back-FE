import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './components/App/app.js';
// import Firebase, { FirebaseContext } from './components/Firebase';
import DeepRCC from "./components/Template/Deepgram/DeepRCC";
// import DeepRFC from "./components/Template/Deepgram/DeepRFC";

// ReactDOM.render(
//     <FirebaseContext.Provider value={new Firebase()}>
//       <App />
//     </FirebaseContext.Provider>,
//     document.getElementById('root'),
//   );

ReactDOM.render( 
  <div>
    <DeepRCC />
    {/* <DeepRFC /> */}
  </div>, document.getElementById("root"));

serviceWorker.unregister();
