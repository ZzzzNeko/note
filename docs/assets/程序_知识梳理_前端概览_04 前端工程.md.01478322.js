import{_ as s,o as a,c as l,V as n}from"./chunks/framework.bbae8ef5.js";const u=JSON.parse('{"title":"前端工程","description":"","frontmatter":{},"headers":[],"relativePath":"程序/知识梳理/前端概览/04 前端工程.md","filePath":"程序/知识梳理/前端概览/04 前端工程.md","lastUpdated":1688291041000}'),o={name:"程序/知识梳理/前端概览/04 前端工程.md"},p=n(`<h1 id="前端工程" tabindex="-1">前端工程 <a class="header-anchor" href="#前端工程" aria-label="Permalink to &quot;前端工程&quot;">​</a></h1><h2 id="项目优化" tabindex="-1">项目优化 <a class="header-anchor" href="#项目优化" aria-label="Permalink to &quot;项目优化&quot;">​</a></h2><h3 id="加载优化" tabindex="-1">加载优化 <a class="header-anchor" href="#加载优化" aria-label="Permalink to &quot;加载优化&quot;">​</a></h3><p>不同于传统 GUI 开发应用先下载后使用的方式，网页应用是动态增量下载的 <br> 因而页面加载是对用户使用体验影响最大的部分，超过 3s 的加载时间会导致大量用户的流失。<br> 提高加载速度，即在最短的时间内获取用户需要使用到的资源，包括对资源的压缩和控制资源的获取两大方面。</p><h4 id="资源方面" tabindex="-1">资源方面 <a class="header-anchor" href="#资源方面" aria-label="Permalink to &quot;资源方面&quot;">​</a></h4><p>图片资源</p><ul><li>小图资源：对于常规小图采用 BASE64 编码，对于图标资源转为字体图标或 svg 图标，以减少资源请求</li><li>大图资源：开启资源压缩，或使用预览图片用于原图加载的缓冲</li></ul><p>代码资源</p><ul><li>使用 tree shaking 移除无效代码</li><li>开启压缩减少代码体积</li><li>使用 SplitChunks 拆分依赖</li></ul><h4 id="网络方面" tabindex="-1">网络方面 <a class="header-anchor" href="#网络方面" aria-label="Permalink to &quot;网络方面&quot;">​</a></h4><p>配置 CDN</p><ul><li>对静态资源或静态页面开启 CDN</li><li>针对不同的资源类型使用不同的域名(并避免 cookie 的携带)</li></ul><p>配置缓存</p><ul><li>频繁修改的资源：使用协商缓存，配置 <code>Cache-Control: no-cache</code> 并配合 <code>Etag</code> 检测是否使用缓存</li><li>长期不变的资源：使用强缓存，配置 <code>Cache-Control: max-age=xxx</code></li><li>无需缓存的资源：禁用缓存，配置 <code>Cache-Control: no-store</code></li></ul><p>开启 HTTP2</p><ul><li>多路复用：提高 TCP 连接使用效率</li><li>头部压缩：减少数据请求大小</li></ul><p>服务端</p><ul><li>DNS 解析使用 IP 循环</li><li>开启反向代理实现负载均衡</li><li>开启 GZIP 压缩减少响应体积</li></ul><h4 id="加载方面" tabindex="-1">加载方面 <a class="header-anchor" href="#加载方面" aria-label="Permalink to &quot;加载方面&quot;">​</a></h4><p>标签位置</p><ul><li>样式文件：置于页面头部，CSS 文件的加载不会阻塞 DOM 的解析</li><li>脚本文件：置于页面底部，JS 文件的加载会阻塞页面的解析和渲染</li></ul><p>预处理</p><ul><li>DNS 预获取：<code>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//www.xxx.com&quot; /&gt;</code></li><li>资源预加载：<code>&lt;link rel=&quot;preload&quot; href=&quot;https://www.xxx.com&quot; as=&quot;style&quot; /&gt;</code><ul><li>用于预先加载当前页面需要使用的资源，提高在后续使用时的效率</li></ul></li><li>资源预获取：<code>&lt;link rel=&quot;prefetch&quot; href=&quot;https://www.xxx.com&quot; /&gt;</code><ul><li>用于预先获取接下来需要使用的资源并缓存 5 分钟，提高页面切换时的效率</li></ul></li><li>资源预渲染：<code>&lt;link rel=&quot;prerender&quot; href=&quot;https://www.xxx.com&quot; /&gt;</code><ul><li>实验中的属性，预先获取资源并在屏幕之外进行渲染，提高渲染时的效率</li></ul></li></ul><p>懒加载</p><ul><li>懒加载：在使用时再加载 <ul><li>路由切换：常见于 SPA 应用</li><li>滚动加载：当模块滚动到可视区域时进行加载(如 <code>&lt;img loading=&quot;lazy&quot; /&gt;</code>)</li></ul></li><li>懒执行：在使用时再执行，通常用于耗时逻辑，一般通过事件唤醒</li></ul><h4 id="首屏加载" tabindex="-1">首屏加载 <a class="header-anchor" href="#首屏加载" aria-label="Permalink to &quot;首屏加载&quot;">​</a></h4><p>首屏加载主要指优化白屏时间以提升用户体验</p><ul><li>对于需要服务请求的页面：可以使用 loading 或骨架屏缓解用户等待体验</li><li>对于无需服务请求的页面：可以使用服务端渲染或静态页面</li></ul><h3 id="运行优化" tabindex="-1">运行优化 <a class="header-anchor" href="#运行优化" aria-label="Permalink to &quot;运行优化&quot;">​</a></h3><p>某些时候，可能需要使用动画效果提升页面表现，或者渲染大量的列表元素用于内容展示 <br> 前者往往容易频繁的触发页面的回流重绘降低网页流畅度，后者可能导致页面短时间卡顿。</p><h4 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h4><ul><li>独立图层：独立图层的布局互不干扰，可以提高渲染效率 <ul><li>有 3d <code>transform</code>；</li><li>对 <code>opacity</code>、<code>transform</code>、<code>filter</code> 应用了动画或过渡</li><li>设置 <code>will-change: opacity|transform|top|left|right|bottom</code></li></ul></li><li>减少回流 <ul><li>使用 <code>transform</code>、<code>opacity</code> 实现动画效果，会创建独立图层并获得 GPU 加速</li><li>使用 <code>requestAnimationFrame</code> 实现动画</li><li>对于多次操作的 DOM 元素先离线(<code>display: none</code>)，等处理完毕后再展示</li></ul></li></ul><h4 id="批量渲染" tabindex="-1">批量渲染 <a class="header-anchor" href="#批量渲染" aria-label="Permalink to &quot;批量渲染&quot;">​</a></h4><p>对于一次性渲染大量元素，可以使用 <code>requestAnimationFrame</code> 控制渲染频率，使用 <code>DocumentFragment</code> 对多个元素进行一次插入</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// &lt;div id=&quot;wrap&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">total</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1e4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">once</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1e2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fragment</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createDocumentFragment</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">once</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">fragment</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">wrap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fragment</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">once</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">total</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">append</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">append</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="虚拟渲染" tabindex="-1">虚拟渲染 <a class="header-anchor" href="#虚拟渲染" aria-label="Permalink to &quot;虚拟渲染&quot;">​</a></h4><p>对于大量数据渲染的列表，若每项高度可计算，可以仅渲染可视区域以及滚动缓冲部分，对于其他不可视部分，使用一个计算后的空白盒子进行支撑。</p><h4 id="计算优化" tabindex="-1">计算优化 <a class="header-anchor" href="#计算优化" aria-label="Permalink to &quot;计算优化&quot;">​</a></h4><p>使用 web worker 将耗时的操作交给其他线程，减轻主线程压力</p>`,39),e=[p];function t(c,r,i,F,y,D){return a(),l("div",null,e)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};
