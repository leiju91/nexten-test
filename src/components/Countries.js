import React, { useState }from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialiser un client GraphQL 
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
  
  // écrire une requête GraphQL qui demande des noms et des codes pour tous les pays 
  const LIST_COUNTRIES = gql`
    {
      countries {
        name
        code
      }
    }
  `;
  
  // crée un composant qui rend une entrée de sélection pour les pays 
  const Countries = () => {
    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
    
    // création du select
    return (
            
      <select value={country} id="country-select" onChange={event => setCountry(event.target.value)}>
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>    
    );
  };

  export default Countries;
