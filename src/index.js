import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css'
import MainRouter from './MainRouter';
import { BrowserRouter } from "react-router-dom";


const element = <MainRouter />
const root = document.getElementById('root')

ReactDOM.render(<BrowserRouter>{ element }</BrowserRouter>, root);

