import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import { BrowserRouter } from 'react-router-dom';

//1 - Criando nossa aplicação (cliente), que vai ter toda informação sobre nosso servidor graphql que vamos consultar
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

//https://rickandmortyapi.com/graphql

//2 - Nosso apolo esta englobando toda a aplicação e interpretando nossa aplicação
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
