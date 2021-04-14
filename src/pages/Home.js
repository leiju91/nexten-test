// Page accueil
// snippets 'rcs'

import React from 'react';
// import du component qui contient l'API Countries 
import Continents from '../components/Continents';
import Countries from '../components/Countries';
import Languages from '../components/Languages';

const Home = () => {
    return (
        <div className="Home">
            <h1>Test Julie</h1>
            <h2>Importer une API contenant des pays !</h2>
            <Continents />            
            <Countries /> 
            <Languages/>        
        </div>
    );
};

export default Home;