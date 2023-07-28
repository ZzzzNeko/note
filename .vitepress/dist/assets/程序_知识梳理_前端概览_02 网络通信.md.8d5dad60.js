import{_ as l,o as i,c as a,V as e}from"./chunks/framework.3b22bc79.js";const S=JSON.parse('{"title":"网络通信","description":"","frontmatter":{},"headers":[],"relativePath":"程序/知识梳理/前端概览/02 网络通信.md","filePath":"程序/知识梳理/前端概览/02 网络通信.md","lastUpdated":1688291041000}'),t={name:"程序/知识梳理/前端概览/02 网络通信.md"},o=e(`<h1 id="网络通信" tabindex="-1">网络通信 <a class="header-anchor" href="#网络通信" aria-label="Permalink to &quot;网络通信&quot;">​</a></h1><h2 id="网络模型" tabindex="-1">网络模型 <a class="header-anchor" href="#网络模型" aria-label="Permalink to &quot;网络模型&quot;">​</a></h2><ul><li>应用层：HTTP、域名系统</li><li>传输层：TCP、UDP</li><li>网络层</li><li>链路层</li></ul><hr><h3 id="传输层-tcp" tabindex="-1">传输层 - TCP <a class="header-anchor" href="#传输层-tcp" aria-label="Permalink to &quot;传输层 - TCP&quot;">​</a></h3><h4 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h4><ol><li>请求方 -- SYN --&gt; 响应方；请求方进入 SYN_SEND 状态</li><li>响应方(接收 SYN) -- ACK + SYN --&gt; 请求方；响应方进入 SYN_RECV 状态</li><li>请求方(接收 ACK + SYN) -- ACK --&gt; 响应方；请求方进入 ESTABLISHED 状态</li></ol><h4 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h4><ol><li>请求方 -- FIN --&gt; 响应方；请求方不再发送数据，进入 FIN_WAIT_1 状态</li><li>响应方(接收 FIN) -- ACK --&gt; 请求方； <ul><li>响应方进入 CLOSE_WAIT 状态</li><li>请求方(接收 ACK) 进入 FIN_WAIT_2 状态</li></ul></li><li>响应方(数据发送完) -- FIN --&gt; 请求方；响应方进入 LAST_ACT 状态</li><li>请求方(接收 FIN) -- ACK --&gt; 响应方；请求方进入 TIME_WAIT 状态 <ul><li>响应方(接收 ACK) 进入 CLOSED 状态</li><li>请求方(经过最大生存期后)进入 CLOSED 状态</li></ul></li></ol><p>说明：第二次和第三次可以合并发送</p><h4 id="重传机制" tabindex="-1">重传机制 <a class="header-anchor" href="#重传机制" aria-label="Permalink to &quot;重传机制&quot;">​</a></h4><p>在发送报文时会开启定时器并保留副本</p><ul><li>在定时器时间内接收到响应则取消定时器并删除副本</li><li>在超出定时器时间外会重置定时器并重新发送报文</li><li>一般超时重传时间取 加权平均往返时间 + 4 倍加权平均往返偏差时间</li></ul><h4 id="滑动窗口" tabindex="-1">滑动窗口 <a class="header-anchor" href="#滑动窗口" aria-label="Permalink to &quot;滑动窗口&quot;">​</a></h4><p>发送方和接收方分别维护发送窗口和接收窗口</p><ul><li>发送窗口按序号发送帧，直到全部帧处于待确认状态</li><li>接收窗口按序号接收帧，接收后发送确认帧后滑动窗口</li><li>发送窗口接收到确认帧，删除重发表对应帧后滑动窗口</li></ul><p>根据发送窗口和接收窗口的大小分为</p><ul><li>停等协议：发送窗口=1，接收窗口=1；需要不断等待应答，效率低下</li><li>后退 n 协议：发送窗口&gt;1，接收窗口=1；重传时需要后退到错误帧并重传</li><li>选择重传协议：发生窗口&gt;1，接收窗口&gt;1；传输效率较高，需要接收方具有足够的缓冲空间</li></ul><h4 id="拥塞控制" tabindex="-1">拥塞控制 <a class="header-anchor" href="#拥塞控制" aria-label="Permalink to &quot;拥塞控制&quot;">​</a></h4><ol><li>慢启动：给定一个初始 cwnd，每次收到确认包时大小翻倍，直到达到 ssthresh 或丢包</li><li>拥塞避免：cwnd 达到 ssthresh 时，采用线增积减的反馈机制控制 cwnd 大小 <ul><li>若网络良好，则每经过一个 RTT ，cwnd 与 ssthresh += 1MSS</li><li>若网络拥塞，则 ssthresh 减半，cwnd 置为 1MSS，进入慢启动阶段</li></ul></li><li>快速重传：当发送方收到 4 次相同的确认时，忽略超时计时器并立即重发，进入快速恢复阶段</li><li>快速恢复：发送方将 cwnd 与 ssthresh 减半，进入拥塞避免阶段</li></ol><p>说明：</p><ul><li>MSS: 最大分段大小，拥塞窗口的大小单位</li><li>cwnd: 拥塞窗口，每次发送数据包的大小，由发送方维护</li><li>ssthresh: 慢开始门限，控制拥塞窗口的最大值</li></ul><hr><h3 id="传输层-udp" tabindex="-1">传输层 - UDP <a class="header-anchor" href="#传输层-udp" aria-label="Permalink to &quot;传输层 - UDP&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;源端口号&gt;&lt;目的端口&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;报文长度&gt;&lt;报文校验码&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;数据内容&gt;</span></span></code></pre></div><p>特点：报文结构简单，开销低，传输效率高；传输时不建立连接，无状态、不可靠</p><p>用途：DNS，广播，及时通话</p><hr><h3 id="应用层-dns" tabindex="-1">应用层 - DNS <a class="header-anchor" href="#应用层-dns" aria-label="Permalink to &quot;应用层 - DNS&quot;">​</a></h3><p>域名系统时将域名与 IP 地址相互映射的分布式数据库</p><p>域名解析流程</p><ul><li>静态映射：通过本地缓存或配置进行查询 <ol><li>客户端缓存</li><li>本地 host</li><li>本地 DNS 缓存</li><li>本地 DNS 服务器</li></ol></li><li>动态映射：通过其他域名服务器进行查询 <ol><li>跟域名服务器</li><li>顶级域名服务器</li><li>权威域名服务器</li></ol></li></ul><p>DNS 基于 UDP 协议实现，理由如下</p><ul><li>DNS 解析发生在数据传输之前，追求快速</li><li>DNS 解析报文简单，域名服务器相对稳定</li></ul><p>注：当报文超过 512 字节时，应当转为 TCP 进行查询</p><hr><h3 id="应用层-http" tabindex="-1">应用层 - HTTP <a class="header-anchor" href="#应用层-http" aria-label="Permalink to &quot;应用层 - HTTP&quot;">​</a></h3><h4 id="基本内容" tabindex="-1">基本内容 <a class="header-anchor" href="#基本内容" aria-label="Permalink to &quot;基本内容&quot;">​</a></h4><p>报文格式</p><ul><li>请求报文 <ul><li>请求行：方法 地址 协议</li><li>请求头</li><li>空行</li><li>请求体</li></ul></li><li>响应报文 <ul><li>状态行(协议 状态)</li><li>响应头</li><li>恐慌</li><li>响应体</li></ul></li></ul><p>请求方法：GET POST PUT PATCH DELETE OPTIONS HEAD TRACE CONNECT</p><p>状态码</p><ul><li>1xx：消息类通知</li><li>2xx：成功类通知</li><li>3xx：重定向通知；301-永久重定向，302-临时重定向，304-命中协商缓存</li><li>4xx：客户端错误；400-请求错误，401-用户未认证，403-请求被拒绝，404-资源不存在</li><li>5xx：服务端错误：500-服务器异常，502-网关错误，504-网关超时</li></ul><h4 id="http1-x" tabindex="-1">HTTP1.x <a class="header-anchor" href="#http1-x" aria-label="Permalink to &quot;HTTP1.x&quot;">​</a></h4><p>传输特点</p><ul><li>持久连接：设置 <code>Connection: Keep-Alive</code>开启</li><li>管道机制</li><li>断点续传</li><li>虚拟网络</li></ul><p>存在问题</p><ul><li>明文传输：可以被窃听、篡改、冒充</li><li>性能浪费：由 持久连接 导致占用服务器资源</li><li>对头阻塞：由 管道机制 导致有序请求阻塞时整列请求受阻</li></ul><h4 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h4><p>HTTPS = HTTP + SSL/TLS</p><p>SSL/TLS 进行了以下处理</p><ul><li>信息加密，避免窃听</li><li>信息校验，避免篡改</li><li>证书校验，避免冒充</li></ul><p>工作流程</p><ol><li>客户端 -- client hello --&gt; 服务端</li><li>服务端 -- 证书(公钥) --&gt; 客户端</li><li>客户端(获取证书公钥) -- 公钥加密信息 --&gt; 服务端</li><li>服务端(私钥解密信息) -- 生成会话密钥 --&gt; 客户端</li><li>后续服务端与客户端使用会话密钥进行加密解密通信(对称加密)</li></ol><h4 id="http2" tabindex="-1">HTTP2 <a class="header-anchor" href="#http2" aria-label="Permalink to &quot;HTTP2&quot;">​</a></h4><ul><li>二进制分帧</li><li>请求优先级</li><li>头部压缩</li><li>多路复用：解决 对头阻塞 问题</li><li>服务端推送</li></ul><hr><h2 id="网络安全" tabindex="-1">网络安全 <a class="header-anchor" href="#网络安全" aria-label="Permalink to &quot;网络安全&quot;">​</a></h2><h3 id="跨站脚本攻击-xss" tabindex="-1">跨站脚本攻击(XSS) <a class="header-anchor" href="#跨站脚本攻击-xss" aria-label="Permalink to &quot;跨站脚本攻击(XSS)&quot;">​</a></h3><ul><li>攻击原理：通过注入包含可被浏览器解析的标签(如 <code>script</code>)，让浏览器对标签内容解析为脚本并执行。</li><li>攻击方式：通过向数据库提交恶意代码(常见于社区、论坛网站)；创建包含恶意代码的 URL 由前端执行。</li><li>预防方式 <ul><li>服务端：设置 CSP(内容安全策略)，拦截不安全的数据，设置 HTTP-only 避免脚本获取</li><li>服务端渲染：在使用数据拼接 HTML 时对数据进行转义处理</li><li>浏览器渲染：在使用 innerHTML/v-html 时对文本进行转义处理</li></ul></li></ul><h3 id="跨站请求伪造-csrf" tabindex="-1">跨站请求伪造(CSRF) <a class="header-anchor" href="#跨站请求伪造-csrf" aria-label="Permalink to &quot;跨站请求伪造(CSRF)&quot;">​</a></h3><ul><li>攻击原理：若网站仅通过 <code>cookie</code> 作为用户身份验证，则服务端只能确保请求的来源而无法确保由是否由用户本身发出</li><li>攻击方式：攻击网站(B)向使用简单授权的网站(A)发送请求，若用户在 A 的 <code>cookie</code> 未过期，则可能遭受伪造攻击。</li><li>预防方式 <ul><li>同源检测：检测 <code>Origin</code> 或 <code>Referer</code> 字段拦截非同源请求</li><li>凭证检测：使用 <code>Token</code> 对用户进行检测而非简单的 <code>cookie</code></li><li>双重 cookie：在发送请求时携带 cookie 作为 URL 参数，后端验证 cookie 与参数是否相同 (利用 CSRF 攻击无法获取 cookie 值的特点)</li></ul></li></ul><h3 id="sql-注入" tabindex="-1">SQL 注入 <a class="header-anchor" href="#sql-注入" aria-label="Permalink to &quot;SQL 注入&quot;">​</a></h3><ul><li>攻击原理：通过注入包含 SQL 处理的数据作为普通字符串，在对 SQL 语句进行字符串拼接的时候，直接使用为转义的内容并执行</li><li>攻击方式：通过在向数据库提交信息的场景提交恶意字符串</li><li>预防方式 <ul><li>对提交内容进行特殊字符过滤</li><li>语法上禁止 SQL 语句拼接，严格使用参数绑定</li></ul></li></ul><h3 id="盗链" tabindex="-1">盗链 <a class="header-anchor" href="#盗链" aria-label="Permalink to &quot;盗链&quot;">​</a></h3><ul><li>实现方式：在第三方网站使用资源网站的资源链接</li><li>预防方式 <ul><li>对链接处理 <ul><li>资源地址自动化更新</li><li>对 <code>referer</code> 头进行同源或白名单判断</li><li>用户认证，判断当前资源的访问者</li></ul></li><li>对资源处理 <ul><li>添加水印</li></ul></li></ul></li></ul>`,66),r=[o];function h(s,n,c,d,u,p){return i(),a("div",null,r)}const P=l(t,[["render",h]]);export{S as __pageData,P as default};
