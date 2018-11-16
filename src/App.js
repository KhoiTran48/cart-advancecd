import React, { Component } from 'react';
import './App.css';
import FilterContainer from './containers/FilterContainer';
import ProductContainer from './containers/ProductContainer';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
        <div>
            <main>
                {/* filter */}
                <FilterContainer/>
                {/* product list */}
                <ProductContainer/>
            </main>
            <Footer/>
            <Cart/>
            </div>
        );
    }
}

export default App;
