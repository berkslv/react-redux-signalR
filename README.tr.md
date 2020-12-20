## Bu proje nedir?

Bu proje react - redux - signalR üçlüsünü bir arada kullanmak için uygun olan methodu elimden geldiğince açıklamak için oluşturulmuştur. 
### Nasıl?
redux ve signalR ikilisini beraber kullanmak için custom bir middleware içerisinden signalR işlemleri yapılmalıdır. Bu proje için middleware projenin kalbidir. Geri kalan componentler vs. bunun etrafında oluşturulmuş, api projeside eklenmemiş, varmış gibi düşünülmüştür.
 

## Kod okuma sırası:

 - Redux/chat/socketMiddleware
 - Redux/chat/chatActions
 - Redux/chat/chatReducer
 - Redux/rootReducer
 - Redux/store
 - Components/Chat
