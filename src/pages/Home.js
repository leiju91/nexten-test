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
            <h1 className="hover-underline-animation">Test Julie</h1>
            <a href="https://github.com/leiju91/nexten-test" target="_blank">Liens vers le code sur github.com</a>
            <h2>Importer une API contenant des pays mais pas que !</h2>
            <Continents />            
            <Countries /> 
            <Languages/>                 
        </div>
    );
};

export default Home;