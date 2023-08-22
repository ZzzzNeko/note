import{_ as a,v as e,b as t,R as s}from"./chunks/framework.ecc14119.js";const D=JSON.parse('{"title":"UDP","description":"","frontmatter":{},"headers":[],"relativePath":"程序/网络通信/网络模型/传输层 - UDP.md","filePath":"程序/网络通信/网络模型/传输层 - UDP.md","lastUpdated":1687109729000}'),n={name:"程序/网络通信/网络模型/传输层 - UDP.md"},r=s(`<h1 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h1><p>UDP(用户数据报协议)是一个面向报文的协议，只对报文进行搬运，不对报文进行拆分和拼接等操作 <br> 在发送端，UDP 对应用层数据添加 UDP 头标识后直接传递给网络层<br> 在接收端，UDP 对网络层数据进行接收并去除 IP 报文头便直接传递给 应用层</p><h2 id="报文结构" tabindex="-1">报文结构 <a class="header-anchor" href="#报文结构" aria-label="Permalink to &quot;报文结构&quot;">​</a></h2><p>UDP 头部报文为 8 字节，包含端口、长度、校验码信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[源端口号]&lt;目的端口号&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;数据报文长度&gt;&lt;数据报文校验码&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;应用数据&gt;</span></span></code></pre></div><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><h3 id="无连接-无状态-不可靠" tabindex="-1">无连接&amp;无状态&amp;不可靠 <a class="header-anchor" href="#无连接-无状态-不可靠" aria-label="Permalink to &quot;无连接&amp;无状态&amp;不可靠&quot;">​</a></h3><p>UDP 是无连接的，在通信中无需建立和断开连接 <br> UDP 是不可靠的，由于通信双方无法确认是否建立连接，故不能确认对方是否接收到信息 <br> UDP 缺少拥塞控制，会以恒定的速度传输数据</p><h3 id="低开销" tabindex="-1">低开销 <a class="header-anchor" href="#低开销" aria-label="Permalink to &quot;低开销&quot;">​</a></h3><p>UDP 头部开销仅 8 字节，相比于 TCP 的 20 字节头部开销，具有更高的传输效率</p><h3 id="传输方式" tabindex="-1">传输方式 <a class="header-anchor" href="#传输方式" aria-label="Permalink to &quot;传输方式&quot;">​</a></h3><p>UDP 支持一对一、一对多、多对多、多对一的方式</p>`,12),l=[r];function o(i,p,d,h,c,P){return e(),t("div",null,l)}const _=a(n,[["render",o]]);export{D as __pageData,_ as default};
