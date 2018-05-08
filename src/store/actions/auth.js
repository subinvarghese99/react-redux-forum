import axios from 'axios'
import { SubmissionError, startSubmit } from 'redux-form'

import config from '../../config'

export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (values) => async (dispatch) => {
  try {
    const response = await axios.post(`${config.apiUrl}/login`, {
      email: values.email,
      password: values.password
    })
  
    dispatch({
      type: LOGIN_USER,
      payload: response.data
    })
  } catch (errors) {
    // handle errors.
    throw new SubmissionError({
      email: 'email is not valid',
      _error: 'swr'
    })
  }
}
