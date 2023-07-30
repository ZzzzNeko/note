import{_ as s,v as n,b as a,R as l}from"./chunks/framework.cc13f38d.js";const h=JSON.parse('{"title":"node 版本管理","description":"","frontmatter":{},"headers":[],"relativePath":"程序/项目管理/依赖管理/node 版本管理.md","filePath":"程序/项目管理/依赖管理/node 版本管理.md","lastUpdated":1687958817000}'),o={name:"程序/项目管理/依赖管理/node 版本管理.md"},p=l(`<h1 id="node-版本管理" tabindex="-1">node 版本管理 <a class="header-anchor" href="#node-版本管理" aria-label="Permalink to &quot;node 版本管理&quot;">​</a></h1><p>由于 node 版本迭代较快，一段时间未维护的项目可能在某个版本之后便无法正常运行； <br> 借助 node 版本工具可以方便在不同项目之间进行切换，以及新版本的体验等。</p><h2 id="nvm-windows" tabindex="-1"><a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows</a> <a class="header-anchor" href="#nvm-windows" aria-label="Permalink to &quot;[nvm-windows](https://github.com/coreybutler/nvm-windows)&quot;">​</a></h2><p>由于 nvm 本身记于 linux 开发，windows 平台可以使用 nvm-windows</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><ol><li>若本地存在 node, 需要先删除 node</li><li><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm-setup.exe</a>, 下载并安装</li></ol><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lts</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看已安装版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看使用方法</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置代理</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_mirror</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm_mirror</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div><h2 id="n" tabindex="-1">n <a class="header-anchor" href="#n" aria-label="Permalink to &quot;n&quot;">​</a></h2><p>Linux 中的 node 版本管理工具, 不支持 Windows 系统</p><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">n</span></span></code></pre></div><h3 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 安装指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 安装标记版本，latest-最新 stable-稳定 lts-长期支持</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stable</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除(可以简写为减号)</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除非当前版本</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prune</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span></code></pre></div>`,15),e=[p];function t(c,r,i,y,C,D){return n(),a("div",null,e)}const A=s(o,[["render",t]]);export{h as __pageData,A as default};
