import * as api from '../../service/api'; // Assuming you have your API functions in api.js
export const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
export const loginSuccess = (user) => ({ type: 'LOGIN_SUCCESS', payload: { user } });
export const loginFailure = (error) => ({ type: 'LOGIN_FAILURE', payload: { error } });

// Thunk action for login
export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await api.authenticateLogin(userData);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

// Similar action creators and thunk actions can be defined for signup, product, and payment
// You'll need to create SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, etc.


// Similar action creators and thunk actions can be defined for signup, product, and payment
// You'll need to create SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, etc.
