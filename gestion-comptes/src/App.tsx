import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import AccountList from './components/AccountList';

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Liste des comptes</h1>
                <AccountList />
            </div>
        </ApolloProvider>
    );
}

export default App;
