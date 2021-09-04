import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// import views
import Dashboard from '../views/Dashboard';

function MainLayout() {
	const { path } = useRouteMatch();
	return (
		<div>
			<div>Main Layout</div>
			<div>
				<Switch>
					<Route exact path={`${path}/dashboard`}>
						<Dashboard />
					</Route>
					<Route path='*'>
						<div>error</div>
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default MainLayout;
