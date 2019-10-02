const readAll = () => {
  return fetch('/.netlify/functions/customers-read-all').then(
    (response) => {
      return response.json();
    },
  );
};

export default {
  readAll,
};
