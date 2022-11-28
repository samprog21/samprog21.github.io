/** @format */

import React from 'react';
import {
	About,
	Header,
	Footer,
	Skills,
	Work,
	Testimonial
} from './container';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Education from './container/Education/Education';
import Home from './components/Home';

const App = () => {
	return (
        <div className='app'>
            <Navbar/>
			<Routes>
				 <Route index element={<Header />} />
<Route
                   exact path='/'
					element={<Home />}
				/>



				<Route
					exact path='/work'
					element={<Work />}
				/>
				<Route
					exact path='/skills'
					element={<Skills />}
				/>
				<Route
					exact path='/education'
					element={<Education />}
				/>
				<Route
					exact path='/about'
					element={<About />}
                />

                <Route
					exact path='/contact'
					element={<Footer />}
                />
                 <Route
					exact path='/testimonials'
					element={<Testimonial />}
					/>

				</Routes>


 <About />
			<Work />
			<Skills />
			<Education />
			<Testimonial />
            <Footer />

			{/* <Header /> */}


		</div>
	);
};

export default App;
