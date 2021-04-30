import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-BoldItalic.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Roboto/Roboto-LightItalic.ttf';
import './fonts/Roboto/Roboto-Medium.ttf';
import './fonts/Roboto/Roboto-MediumItalic.ttf';
import './fonts/Roboto/Roboto-Thin.ttf';
import './fonts/Roboto/Roboto-ThinItalic.ttf';
import './fonts/Roboto/Roboto-Black.ttf';
import './fonts/Roboto/Roboto-BlackItalic.ttf';
import {ApolloClient, ApolloProvider} from '@apollo/client';
import {typeDefs} from './graphql/schema';
import {cacheWithLocalFields} from './cache-with-local-fields';
import {LocalStorageWrapper, persistCache} from 'apollo3-cache-persist';

async function init() {
    await persistCache({
        cache: cacheWithLocalFields,
        storage: new LocalStorageWrapper(window.localStorage)
    });

    const client = new ApolloClient({
        cache: cacheWithLocalFields,
        connectToDevTools: true,
        typeDefs
    });

    ReactDOM.render(
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ApolloProvider>,
        document.getElementById('root')
    );
}

init();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
