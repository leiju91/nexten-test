import React, { useState }from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialiser un client GraphQL 
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
  
  // écrire une requête GraphQL qui demande des noms et des codes pour toutes les langues
  const LIST_LANGUAGES = gql`
    {
      languages {
        name
        native
      }
    }
  `;
  
  // crée un composant qui rend une entrée de sélection pour les langues 
  const Languages = () => {
    const [lang, setLang] = useState('English');
    const {data, loading, error} = useQuery(LIST_LANGUAGES, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
    
    // création du select
    return (
      <select value={lang} id="lang-select" onChange={event => setLang(event.target.value)}>
        {data.languages.map(lang => (
          <option key={lang.name} value={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>
    );
  };

  export default Languages;