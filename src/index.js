import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './components/App/app.js';
// import Firebase, { FirebaseContext } from './components/Firebase';
// import DeepRCC from "./components/Template/Deepgram/DeepRCC";
// import DeepRFC from "./components/Template/Deepgram/DeepRFC";
// import DeepRFC2 from "./components/Template/Deepgram/DeepRFC2";
import TwitterTemp from './components/Template/Twitter/TwitterTemp';

// ReactDOM.render(
//     <FirebaseContext.Provider value={new Firebase()}>
//       <App />
//     </FirebaseContext.Provider>,
//     document.getElementById('root'),
//   );

ReactDOM.render( 
  <div>
    {/* <DeepRCC /> */}
    {/* <DeepRFC /> */}
    {/* <DeepRFC2 /> */}
    <TwitterTemp />
  </div>, document.getElementById("root"));

serviceWorker.unregister();
