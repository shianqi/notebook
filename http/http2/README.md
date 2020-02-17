# HTTP/2 改进

## HTTP/2 头部压缩（HPack）

HTTP 头压缩需要在 HTTP/2 Client 和服务端之间：

- 维护一份相同的静态表（Static Table），包含常见的头部名称，以及特别常见的头部名称与值的组合；
- 维护一份相同的动态表（Dynamic Table），可以动态地添加内容；
- 基于静态哈夫曼码表的哈夫曼编码（Huffman Coding）；

对于静态表里的字段，原来需要 N 个字符表示的，现在只需要一个索引即可，对于静态、动态表中不存在的内容，还可以使用哈夫曼编码来减小体积。HTTP/2 标准里也给出了一份详细的静态哈夫曼码表（https://tools.ietf.org/html/rfc7541#appendix-B）

## HTTP/2 ALPN

negotiation 的机制，让客户端和服务器选择使用 HTTP 1.1 还是 2.0，当 Server 收到后，会识别 Client 发过来的协议列表，如果不认识就忽略掉。如果认识多个，则选择一个最合适的协议发布给 Client

## HTTP/2 Server Push 机制

在 HTTP 1.1 里，在同一个 TCP 连接里面，上一个回应（response）发送完了，服务器才能发送下一个，但在 HTTP/2 里，可以将多个回应一起发送。

例如：当 Client 只请求 index.html，但是 Server 把 index.html、style.css、example.png 全部发送给浏览器。这样只需要一轮 HTTP 通信，Client 就得到了全部资源。
