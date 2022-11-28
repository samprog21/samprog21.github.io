import React from 'react';
import { BrowserRouter, Route } from './react-router-dom';
import { Header } from './Header';
import { StreamList } from './StreamList';
import { StreamDetails } from './StreamDetails';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/details" exact component={StreamDetails} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;