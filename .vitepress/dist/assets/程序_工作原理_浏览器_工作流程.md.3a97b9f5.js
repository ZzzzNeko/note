import{_ as l,o as i,c as e,V as a}from"./chunks/framework.3b22bc79.js";const S=JSON.parse('{"title":"工作流程","description":"","frontmatter":{},"headers":[],"relativePath":"程序/工作原理/浏览器/工作流程.md","filePath":"程序/工作原理/浏览器/工作流程.md","lastUpdated":1687109729000}'),t={name:"程序/工作原理/浏览器/工作流程.md"},o=a('<h1 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h1><h2 id="资源请求" tabindex="-1">资源请求 <a class="header-anchor" href="#资源请求" aria-label="Permalink to &quot;资源请求&quot;">​</a></h2><ol><li>获取用户输入的 URL 地址</li><li>根据地址请求资源或使用缓存(缓存策略) <ul><li>未缓存: 发起请求, 获取资源</li><li>已缓存: 判断缓存是否过期 <ul><li>未过期: 从缓存中读取资源</li><li>已过期: 向服务器请求资源 <ul><li>使用协商缓存: 返回 304 状态码, 使用缓存资源并更新过期时间</li><li>使用响应资源: 返回 200 状态码, 使用服务器资源</li></ul></li></ul></li></ul></li><li>浏览器解析 URL 地址</li><li>浏览器组装 HTTP 请求</li><li>浏览器获取主机 IP 地址(DNS 查询) <ol><li>查看浏览器缓存</li><li>查看本机缓存</li><li>查看 Host 文件</li><li>查看路由器缓存</li><li>查看 IPS DNS 混村</li><li>DNS 递归查询</li></ol></li><li>打开 Socket 与服务器端口建立 TCP 连接(三次握手) <ol><li>客户端发送请求包给服务器, 等待服务器确认</li><li>服务器接收到请求包后发送响应包给客户端</li><li>客户端收到响应包后发送确认包给服务器</li></ol></li><li>TCP 连接建立后发送 HTTP 请求</li><li>服务器接收请求处理后返回响应</li><li>浏览器接收 HTTP 响应, 根据情况选择是否断开 TCP 连接(四次挥手) <ol><li>客户端发送 FIN 报文给服务器</li><li>服务器接收 FIN 并返回 ACK 报文给客户端</li><li>服务器关闭与客户端的连接并发送 FIN 报文给客户端</li><li>客户端接收 FIN 并发送 ACK 报文给服务器表示确认</li></ol></li><li>浏览器接收响应后判断响应状态码并进行处理 <ul><li>判断资源是否可以缓存并进行相应处理</li><li>判断资源是否需要解码并进行相应处理</li><li>判断资源是否可以解析并进行相应处理</li></ul></li></ol><h2 id="资源解析" tabindex="-1">资源解析 <a class="header-anchor" href="#资源解析" aria-label="Permalink to &quot;资源解析&quot;">​</a></h2><ul><li>解析 HTML 和 CSS <ol><li>HTML 解析为 DOM Tree, CSS 解析为 CSS Rules</li><li>根据 DOM Tree 和 CSS Rules 生成 Render Tree</li><li>对 Render Tree 进行 Layout 和 Painting 并进行页面呈现</li><li>加载异步资源, 如图片、AJAX 请求、预取资源等</li></ol></li><li>解析 JS <ul><li>同步的 script: 加载完后按顺序同步执行</li><li>异步的 script <ul><li>async script: 异步加载, 先加载的先执行</li><li>defer script: 延迟加载, 按顺序加载执行</li></ul></li></ul></li></ul>',5),r=[o];function s(n,c,_,u,d,h){return i(),e("div",null,r)}const p=l(t,[["render",s]]);export{S as __pageData,p as default};
