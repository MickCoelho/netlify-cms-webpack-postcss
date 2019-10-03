import fetch from 'node-fetch';
console.log('ok');

const readAll = () => {
  return fetch('/.netlify/functions/customers-read-all').then(
    (response) => {
      return response.json();
    },
  );
};

const create = (data) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then((response) => {
    return response.json();
  });
};

export default {
  readAll,
  create,
};
