// Redux에서 관리할 초기 상태
const initialSate ={
  user: {
    userToken: null
  }
}

// 액션 타입
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

// 액션 생성자
export const getToken = ( userToken ) => ({ 
        type: SET_USER,
        payload: userToken
});

export const removeToken = (  ) => ({ 
  type: REMOVE_USER,
});

export default function user(state = initialSate, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          userToken: action.payload
        }
      }

    default:
      return state;
  }
}