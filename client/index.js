//Root. Call ReactDOM.Render and serviceWorker here.
//React Router stuff here

import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './components/Homepage'
import {Provider} from 'react-redux'
// import store from './store'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider>
    <Homepage />
  </Provider>, 
  document.getElementById('root'))

  //Uncomment line below when you want to try to implement service workers (for PWA)
  // registerServiceWorker()


  //In provider tag, put store={store} (pass it the prop), once store is set up and uncomment import statement