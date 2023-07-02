import axios from 'axios';

async function getData(endpoint, method, params = {}, queryParams = {}) {
  try {
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const url = `${apiEndpoint}/${endpoint}`;

    const config = {
      method,
      url,
      params: queryParams,
      data: params,
    };

    const response = await axios(config);
    const responseData = response.data;
    
    if (Array.isArray(responseData)) {
      return responseData;
    } else {
      console.log('Response data is not an array:', responseData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default getData;




/*
EXAMPLES HOW TO USE 

import getData from './getData';

// Fetch data using GET method without parameters or query parameters
getData('users', 'get')
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Create a new user using POST method with request parameters
const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};
getData('users', 'post', newUser)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Fetch data using GET method with query parameters
const queryParams = {
  sortBy: 'name',
  limit: 10,
};
getData('users', 'get', {}, queryParams)
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


*/