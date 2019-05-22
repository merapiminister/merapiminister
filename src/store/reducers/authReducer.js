const initState = {
  authError: "kosong"
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
    console.log('login error');
    return {
      ...state, authError: 'fail'
    }
    case 'LOGIN_SUCCESS':
    console.log('login success');
    return{
      ...state, authError: "login"
    }
    case 'LOGOUT_SUCCESS':
    console.log('logout success');
    return {
      ...state, authError: "kosong"
    }
    default:
    return state;

  }
  return state;
}

export default authReducer
