import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Base, Derived } from "./classes";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('coverage trigger', () => {
  const derivedInstance = new Derived(1);
  derivedInstance.increment();
});