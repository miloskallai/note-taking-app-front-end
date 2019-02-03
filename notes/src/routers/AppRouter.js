import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddNote from '../Components/AddNote';
import ShowNotes from '../Components/ShowNotes';
import ShowNote from '../Components/showNote';
import EditNote from '../Components/EditNote';
import NotFound from '../Components/NotFound';
import Welcome from '../Components/Welcome';

const AppRouter = () => (
	<BrowserRouter>
		<div className='router-container'>
			<ShowNotes />
			<Switch>
				<Route path='/' exact={true} component={Welcome} />
				<Route path='/note/:id' component={ShowNote} />
				<Route path='/notes/edit/:id' component={EditNote} />
				<Route path='/new' component={AddNote} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
