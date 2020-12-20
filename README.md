## What is this?

This project was created to explain as much as I can the suitable method to use the react - redux - signalR trio together.
 
### How?
To use redux and signalR together, signalR operations should be done from a custom middleware. Middleware for this project is the heart of the project. The remaining components etc. it was created around this, it was not added to the api project, it was thought as if it existed.
 

## Code reading order:

 - Redux/chat/socketMiddleware
 - Redux/chat/chatActions
 - Redux/chat/chatReducer
 - Redux/rootReducer
 - Redux/store
 - Components/Chat
