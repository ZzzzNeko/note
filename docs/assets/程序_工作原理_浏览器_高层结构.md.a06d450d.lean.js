import{_ as a,v as s,b as n,R as e}from"./chunks/framework.cc13f38d.js";const u=JSON.parse('{"title":"高层结构","description":"","frontmatter":{},"headers":[],"relativePath":"程序/工作原理/浏览器/高层结构.md","filePath":"程序/工作原理/浏览器/高层结构.md","lastUpdated":1687109729000}'),l={name:"程序/工作原理/浏览器/高层结构.md"},r=e(`<h1 id="高层结构" tabindex="-1">高层结构 <a class="header-anchor" href="#高层结构" aria-label="Permalink to &quot;高层结构&quot;">​</a></h1><p>浏览器的高层结构</p><ul><li>用户界面(User Interface)：除主窗口展示文档之外的部分，如 地址栏、书签菜单、前进后退刷新按钮等</li><li>浏览器引擎(Browser Engine)：在用户界面与渲染引擎之间传送指令</li><li>渲染引擎(Rendering Engine)：负责显示请求的内容</li><li>网络(Networking)：用于网络调用</li><li>用户界面后端(UI Backend)：用于绘制基本的窗口小部件</li><li>js 解释器(JS Interpreter)：用于解析和执行 JS 代码</li><li>数据存储(Data Storage)：数据持久层。如 Storage、IndexedDB、Cookie</li></ul><p>注：Chrome 中对于每一个标签页都创建一个新的渲染引擎示例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">graph TD</span></span>
<span class="line"><span style="color:#A6ACCD;">  A[User Interface]</span></span>
<span class="line"><span style="color:#A6ACCD;">  B[Browser Engine]</span></span>
<span class="line"><span style="color:#A6ACCD;">  C[Rendering Engine]</span></span>
<span class="line"><span style="color:#A6ACCD;">  D[Networking]</span></span>
<span class="line"><span style="color:#A6ACCD;">  E[JS Interpreter]</span></span>
<span class="line"><span style="color:#A6ACCD;">  F[UI Backend]</span></span>
<span class="line"><span style="color:#A6ACCD;">  G[Data Persistence]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  A --&gt; B</span></span>
<span class="line"><span style="color:#A6ACCD;">  A --&gt; F</span></span>
<span class="line"><span style="color:#A6ACCD;">  B --&gt; C</span></span>
<span class="line"><span style="color:#A6ACCD;">  B --&gt; G</span></span>
<span class="line"><span style="color:#A6ACCD;">  C --&gt; D</span></span>
<span class="line"><span style="color:#A6ACCD;">  C --&gt; E</span></span>
<span class="line"><span style="color:#A6ACCD;">  C --&gt; F</span></span></code></pre></div><h2 id="工作进程" tabindex="-1">工作进程 <a class="header-anchor" href="#工作进程" aria-label="Permalink to &quot;工作进程&quot;">​</a></h2><ul><li>Browser 进程：浏览器主进程，负责界面展示、各页面管理、各进程管理</li><li>Render 进程：页面渲染进程</li><li>GPU 进程：最多 1 个，当 GPU 硬件加速打开时创建</li><li>工具进程</li><li>插件进程</li></ul><h2 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h2><p>渲染进程有四个线程组成</p><ul><li>主线程：负责构建 DOM、网络通信、资源解析、JS 执行、样式布局</li><li>工作线程：包括 Web Worker 与 Service Worker，无法访问 DOM <ul><li>Web Worker：负责分担主线程的计算压力</li><li>Service Worker：充当代理服务器，旨在提高离线访问体验</li></ul></li><li>光栅线程</li><li>排版线程</li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/" target="_blank" rel="noreferrer">浏览器的工作原理</a></p>`,12),i=[r];function t(p,o,c,C,d,h){return s(),n("div",null,i)}const D=a(l,[["render",t]]);export{u as __pageData,D as default};
