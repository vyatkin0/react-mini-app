import React from 'react';
import {Router, Route, RouterContext, RouteContext} from 'react-router-slim';
import Int from './int.js';

//Router Link component implementation
function Link ({ children, to, update }) {
    const router = React.useContext(RouterContext);
    const route = React.useContext(RouteContext);
    const navigate = router.navigate;
    const onClick = React.useCallback(e => {
        e.preventDefault();
        navigate?.(to);
        update();
    }, [to, navigate]);

    return React.createElement('a', { href: to, onClick: onClick}, children);
}

function RouteT({ children, path, error }) {
    const router = React.useContext(RouterContext);

    if (!router.match) {
        throw new Error('Route requires a match function in the Router context');
    }

    const route = React.useContext(RouteContext);

    let routeParams = {};
    let routePath  = (route.path || '') + (path || '');

    const childRoute = { ...route, path: routePath, params: routeParams, matches: [] };

    const props = { value: childRoute };

    if (Array.isArray(children)) {
        if (error) {
            return React.createElement(RouteContext.Provider, props, React.createElement(ErrorBoundary, { FallbackComponent: error }, ...children));
        }

        return React.createElement(RouteContext.Provider, props, ...children);
    }

    if (error) {
        return React.createElement(RouteContext.Provider, props, React.createElement(ErrorBoundary, { FallbackComponent: error }, children));
    }

    return React.createElement(RouteContext.Provider, props, children);
}

export default function App() {
    const [id, setId] = React.useState(0);

    const update = React.useCallback(()=>setId(id=>id), []);

  return <div>
    Application
    <Router id="1">
        <Link to="/route1" update={update}>To route 1</Link>
        <Link to="/route2" update={update}>To route 2</Link>
        <RouteT path="/route0">Route0</RouteT>
        <RouteT path="/route00">Route00</RouteT>
        <Router id="3">
            <Route path="/route13"><div>Route31</div></Route>
            <Route path="/route32"><div>Route32</div></Route>
        </Router>
        <Int></Int>
    </Router>
  </div>;
}
