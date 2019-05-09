import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



describe('Splash Page', () => {
  berforeAll( () => {
    it('renders sucessfully', () => {
      rtl.render(<App />);
    });
  })
  
  

  it('displays signin component ', () => {
    const signinWrapper = rtl.render(
      <div className='signin'></div>
    )

  })

  it('returns a user object', () => {
    //object has properties uuid etc.
  })


})