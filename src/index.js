import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import Parser from './parser';

// Parses the browser url for the example parameter value.
const { example } = Parser.parse();

// Example 3 is a fallback for root and any invalid parameters.
const Example = lazy(() => import(`./Example${example || 3}`));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Example />
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));
