import{_ as l,o as i,c as a,V as e}from"./chunks/framework.bbae8ef5.js";const p=JSON.parse('{"title":"网络模型","description":"","frontmatter":{},"headers":[],"relativePath":"程序/网络通信/网络模型/网络模型.md","filePath":"程序/网络通信/网络模型/网络模型.md","lastUpdated":1687109729000}'),t={name:"程序/网络通信/网络模型/网络模型.md"},o=e('<h1 id="网络模型" tabindex="-1">网络模型 <a class="header-anchor" href="#网络模型" aria-label="Permalink to &quot;网络模型&quot;">​</a></h1><h2 id="osi-七层模型" tabindex="-1">OSI 七层模型 <a class="header-anchor" href="#osi-七层模型" aria-label="Permalink to &quot;OSI 七层模型&quot;">​</a></h2><ul><li>应用层</li><li>表示层</li><li>会话层</li><li>传输层</li><li>网络层</li><li>链路层</li><li>物理层</li></ul><h2 id="tcp-ip-四层模型" tabindex="-1">TCP/IP 四层模型 <a class="header-anchor" href="#tcp-ip-四层模型" aria-label="Permalink to &quot;TCP/IP 四层模型&quot;">​</a></h2><p>TCP/IP 协议在一定程度上参考了 OSI 体系结构，并对相似的部分进行了合并，从而转换为效率更高、成本更低的四层模型</p><ul><li>应用层：定义数据格式并进行解析，为用于通信的应用程序和用于消息传输的底层网络提供接口 <ul><li>DNS: 用于将域名与 IP 进行映射</li><li>HTTP：常用于各种网络应用</li><li>SMTP：常用于邮件传输</li><li>TELNET：常用于远程登录服务</li><li>FTP：常用于文件传输</li></ul></li><li>传输层：定义端口(标识应用程序)、实现端到端通信，基本功能包括 依据端口寻址、数据分割重组、连接管理、流量控制、数据纠错 <ul><li>UDP：用户数据报协议，无连接、不可靠的通信协议</li><li>TCP：传输控制协议，面向连接、可靠的通信协议</li></ul></li><li>网络层：定义网络地址、区分网段、子网内 MAC 寻址、对于不同子网数据包进行路由 <ul><li>IP：制定一套地址规则，区分两台主机是否属于同一网络</li><li>ARP：地址解析协议，根据 IP 地址获取 MAC 地址</li><li>路由协议：以最佳路径对不同子网数据包进行转发</li></ul></li><li>链路层：对电信号进行分组并生成数据帧，然后以广播的形式通过物理介质发送给接收方 <ul><li>MAC 地址(物理地址)：在网络中唯一标识一个网卡</li></ul></li></ul>',6),r=[o];function _(s,c,n,d,u,P){return i(),a("div",null,r)}const T=l(t,[["render",_]]);export{p as __pageData,T as default};
