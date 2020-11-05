(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{376:function(v,_,n){"use strict";n.r(_);var t=n(25),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h1",{attrs:{id:"域名系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名系统"}},[v._v("#")]),v._v(" 域名系统")]),v._v(" "),n("p",[v._v("域名系统(Domain Name System，DNS)，是将域名与 IP 地址相互映射的分布式数据库 "),n("br"),v._v("\nDNS 运行在应用层上，基于 UDP 协议，默认端口 53")]),v._v(" "),n("h2",{attrs:{id:"域名层级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名层级"}},[v._v("#")]),v._v(" 域名层级")]),v._v(" "),n("ul",[n("li",[v._v("根域名：最高一级的域名节点，管理顶级域名(可在顶级域名后添加 '.'，但一般不写)")]),v._v(" "),n("li",[v._v("顶级域名(一级域名)\n"),n("ul",[n("li",[v._v("国际顶级域名：表示注册人类别和功能\n"),n("ul",[n("li",[v._v(".com：表示工商企业")]),v._v(" "),n("li",[v._v(".net：表示网络提供商")]),v._v(" "),n("li",[v._v(".rog：表示非营利组织")])])]),v._v(" "),n("li",[v._v("国家顶级域名：表示注册地理或国家，个人不能随意申请(如 .cn，)")])])]),v._v(" "),n("li",[v._v("二级域名\n"),n("ul",[n("li",[v._v("国际顶级域名下：注册人指定的域名")]),v._v(" "),n("li",[v._v("国家顶级域名下：表示注册人类别和功能(如 .com.cn)")])])]),v._v(" "),n("li",[v._v("三级域名：作为二级域名的子域名，无需单独申请")])]),v._v(" "),n("p",[v._v("一个完整的域名至少包含顶级域名与二级域名")]),v._v(" "),n("h2",{attrs:{id:"域名解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[v._v("#")]),v._v(" 域名解析")]),v._v(" "),n("p",[v._v("静态映射：通过本地查询各种缓存或配置进行查询")]),v._v(" "),n("Mermaid",[v._v("graph LR\n  A[客户端]\n  B[浏览器缓存]\n  C[本地host]\n  D[本地DNS解析器缓存]\n  E[本地DNS服务器]\n  A --\x3e B -.-> C -.-> D -.-> E\n  B -.-> A\n  C -.-> A\n  D -.-> A\n  E -.-> A\n")]),n("p",[v._v("动态映射：通过本地向其他域名服务器查询")]),v._v(" "),n("Mermaid",[v._v("graph LR\n  A[客户端]\n  B[本地DNS服务器]\n  C[根域名服务器]\n  D[顶级域名服务器]\n  E[权威域名服务器]\n  A -- 1 --\x3e B\n  B -- 8 --\x3e A\n  B -- 2 --\x3e C\n  C -- 3 --\x3e B\n  B -- 4 --\x3e D\n  D -- 5 --\x3e B\n  B -- 6 --\x3e E\n  E -- 7 --\x3e B\n")]),n("p",[v._v("本地服务器查询是递归查询过程；客户端发出一次请求")]),v._v(" "),n("p",[v._v("本地 DNS 服务器向其他域名服务器为迭代查询过程；本地 DNS 服务器发出多次请求")]),v._v(" "),n("h2",{attrs:{id:"负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[v._v("#")]),v._v(" 负载均衡")]),v._v(" "),n("p",[v._v("通常，具有一定规模的服务由多台服务器组成，DNS 服务器可以循环返回这些 IP 地址从而实现负载均衡")]),v._v(" "),n("h2",{attrs:{id:"为何基于-udp-协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为何基于-udp-协议"}},[v._v("#")]),v._v(" 为何基于 UDP 协议")]),v._v(" "),n("p",[v._v("UDP 相比 TCP 具有更高的效率")]),v._v(" "),n("ul",[n("li",[v._v("UDP 无连接，无需三次握手")]),v._v(" "),n("li",[v._v("使用 UDP 可以降低服务器开销和网络流量")])]),v._v(" "),n("p",[v._v("DNS 解析要求的是快，加上 DNS 服务器网络通常比较稳定，故基于 UDP 具有更好的效率")]),v._v(" "),n("p",[v._v("注意：当报文长度超过 512 字节时，应当转为 TCP 进行传输")]),v._v(" "),n("ul",[n("li",[v._v("客户端认为响应包超过 512 字节时，应主动转为 TCP 协议")]),v._v(" "),n("li",[v._v("服务端发现相应包超过 512 字节时，在截断 UDP 响应报文中将 TC 设为 1，客户端受到后再次发起一次 TCP 请求")])])],1)}),[],!1,null,null,null);_.default=a.exports}}]);