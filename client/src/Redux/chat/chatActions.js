import { types } from "./chatTypes";


export const sendMessage = (message) => {
    return {
        type : types.SEND_MESSAGE,
        payload : message
    }
}

