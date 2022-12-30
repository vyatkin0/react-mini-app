import React from 'react';
import {Router, Route} from 'react-router-slim';


export default ()=><div>
        <Router id="2">
            <Route path="/route1"><div>Route1</div></Route>
            <Route path="/route2"><div>Route2</div></Route>
        </Router>
  </div>;