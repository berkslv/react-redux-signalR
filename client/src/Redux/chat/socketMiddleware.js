import { HubConnectionBuilder } from "@microsoft/signalr";
import { types } from "./chatTypes";

const socketMiddleware = (storeAPI) => {
    let connection=null;
    
    // NOTE HubConnection created
    try {
        connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5000/chathub")
        .withAutomaticReconnect()
        .build();
        
    } catch (error) {
        console.error(error);
    }

    // NOTE Message is received. This channel is open every time. It will be updated on every incoming message.
    if (connection) {
        connection
            .start()
            .then((result) => {
            console.log("Connected!");
    
            connection.on("ReceiveMessage", (message) => {
                storeAPI.dispatch({
                    type : types.RECEIVED_MESSAGE,
                    payload : message
                });
            });
            })
            .catch((e) => console.log("Connection failed: ", e));
    }

    // NOTE Message is sending.
    // NOTE connection.invoke("SendMessageToAll", message) method needs a custom name like [HubMethodName("SendMessageToAll")]. if you confused, read this doc: https://docs.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-5.0
    return next => async (action) => {
        if(action.type === types.SEND_MESSAGE) {
            console.log("socketMiddleware: ", action);
            await connection.invoke("SendMessageToAll", action.payload);
            return;
        }

        return next(action);
    }
}

export default socketMiddleware