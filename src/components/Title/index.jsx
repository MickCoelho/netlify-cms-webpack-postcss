import React from 'react';
import { string } from 'prop-types';

const Person = ({ name }) => (
  <div>
    <h1>
      {'Hello '}
      {name}
    </h1>
  </div>
);

Person.propTypes = {
  name: string,
};

export default Person;
