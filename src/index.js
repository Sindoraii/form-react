import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const user = {
    name: 'Name',
    surname: 'Surname',
    email: 'emailsdsk@gmail.com',
    dateOfBirth: '1994-02-13',
    cardNumber: '7777 7777 7777 7777',
    cardExpiration: '2023-02',
    cardCvc: '123',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App entity={{}} isEdit={false}/>
  </React.StrictMode>
);
