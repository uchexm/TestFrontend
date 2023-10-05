// actions.js
export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataError = (error) => ({
  type: 'FETCH_DATA_ERROR',
  payload: error,
});
// actions.js
export const fetchData = () => ({
  type: 'FETCH_DATA', // You can replace 'FETCH_DATA' with your actual action type
});
