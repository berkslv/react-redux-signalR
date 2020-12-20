[<code><img height="18" width="40" src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/gb.svg"></code>](https://github.com/berkslv/react-redux-signalR/blob/master/README.md)
[<code><img height="20" width="40" src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/tr.svg"></code>](https://github.com/berkslv/react-redux-signalR/blob/master/README.tr.md)

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
