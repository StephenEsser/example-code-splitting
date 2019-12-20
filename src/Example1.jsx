import React from 'react';

const Example = () => (
  <div>
    <p>
      Welcome to Example 1. Example 1 has an iframe that loads Example 2.
    </p>
    <iframe src="?example=2" title="happy hacking" />
    <p>
      Want to navigate to <a href="?example=2">Example 2</a>?
    </p>
  </div>
);

export default Example;
