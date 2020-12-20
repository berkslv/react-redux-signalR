import { types } from "./chatTypes";

const initialState = {
    chats: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            return {
                ...state,
                chats: action.payload
            }
        case types.RECEIVED_MESSAGE:
            return {
                ...state,
                chats: action.payload
            }
        default: return state
    }
}

export default reducer
  