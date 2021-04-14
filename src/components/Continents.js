import React, { useState }from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialiser un client GraphQL 
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
  
  // écrire une requête GraphQL qui demande des noms et des codes pour tous les continents
  const LIST_CONTINENTS = gql`
    {
      continents {
        name
      }
    }
  `;
  
  // crée un composant qui rend une entrée de sélection pour les continents
  const Continents = () => {
    const [cont, setCont] = useState('North America');
    const {data, loading, error} = useQuery(LIST_CONTINENTS, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
    
    // création du select
    return (
      <select value={cont} id="continents-select" onChange={event => setCont(event.target.value)}>
        {data.continents.map(cont => (
          <option key={cont.name} value={cont.name}>
            {cont.name}
          </option>
        ))}
      </select>
    );
  };

  export default Continents;