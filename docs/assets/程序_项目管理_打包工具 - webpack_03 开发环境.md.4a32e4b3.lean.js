import{_ as s,v as a,b as n,R as l}from"./chunks/framework.cc13f38d.js";const A=JSON.parse('{"title":"开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"程序/项目管理/打包工具 - webpack/03 开发环境.md","filePath":"程序/项目管理/打包工具 - webpack/03 开发环境.md","lastUpdated":1687958817000}'),o={name:"程序/项目管理/打包工具 - webpack/03 开发环境.md"},p=l(`<h1 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h1><h2 id="常见需求" tabindex="-1">常见需求 <a class="header-anchor" href="#常见需求" aria-label="Permalink to &quot;常见需求&quot;">​</a></h2><p>开发模式下对更关注构建的效率, 常见的需求有</p><ul><li>自动构建: 当模块内容变化时, 期望能监听到变化并自动编译</li><li>无刷新响应: 当模块内容变化时, 期望能自动编译但不自动刷新页面</li><li>源代码映射: 开发中 debug, 查看输出时, 期望准确定位至源文件中</li></ul><h2 id="自动构建" tabindex="-1">自动构建 <a class="header-anchor" href="#自动构建" aria-label="Permalink to &quot;自动构建&quot;">​</a></h2><p>自动构建有以下几种处理方式</p><ul><li>使用 webpack 的观察模式 (最易)</li><li>使用 <code>webpack-dev-server</code> (常用)</li><li>使用 <code>webpack-dev-middleware</code> (灵活)</li></ul><h3 id="启用观察模式" tabindex="-1">启用观察模式 <a class="header-anchor" href="#启用观察模式" aria-label="Permalink to &quot;启用观察模式&quot;">​</a></h3><p>观察模式下 webpack 将监听文件内容的变化并进行自动构建，该方式无法自动刷新</p><p><strong>package.json</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">watch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack --watch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="使用-webpack-dev-server" tabindex="-1">使用 <code>webpack-dev-server</code> <a class="header-anchor" href="#使用-webpack-dev-server" aria-label="Permalink to &quot;使用 \`webpack-dev-server\`&quot;">​</a></h3><p><code>webpack-dev-server</code> 将开启一个 web 服务器，并监听文件内容变化并自动构建，同时自动刷新页面; 其相关选项在 <code>devServer</code> 字段中配置</p><p><strong>安装依赖</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack-dev-server</span></span></code></pre></div><p><strong>package.json</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack-dev-server --open --mode=development</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>webpack.config.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...others</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 这里列出常见的配置, 大部分配置使用默认值即可</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 模块热替换, 需要同时添加 webpack.HotModuleReplacementPlugin 插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">https</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">allowedHosts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.host.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxoo.host.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 白名单, &#39;.&#39; 表示任意子域名</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3000/router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">historyApiFallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// history 模式下, 将 404 响应替换为 index.html; 可以指定一个对象进行深度配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">defore</span><span style="color:#A6ACCD;">(app) </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 在服务内部的所有中间件之前执行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">after</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 在服务内部的其他中间件执行后执行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/assets/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 此路径下的打包文件可在浏览器中访问, 确保总是以 &#39;/&#39; 开头和结尾 或使用完整的 URL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">contentBase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 提供内容的目录, 在提供静态文件时才需要, 优先级低于 publicPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 自动打开浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">openPage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 指定打开浏览器的页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">clientLogLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;info&#39; | &#39;none&#39; | &#39;error&#39; | &#39;warning&#39; 控制 console 输出信息内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 开启命令行彩色输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">progress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 显示进度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">compress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 关闭 gzip 压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="使用-webpack-dev-middleware" tabindex="-1">使用 <code>webpack-dev-middleware</code> <a class="header-anchor" href="#使用-webpack-dev-middleware" aria-label="Permalink to &quot;使用 \`webpack-dev-middleware\`&quot;">​</a></h3><p><code>webpack-dev-middleware</code> 是一个中间件模块, 会将 webpack 处理后的内容传递给一个服务器, <code>webpack-dev-server</code> 内部使用了该中间件, 该中间件也可以配合其他服务单独使用。</p><p><strong>webpack.config.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 来自官网的示例, 需要安装 express 和 webpack-dev-middleware</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> express </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpackDevMiddleware </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack-dev-middleware</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">express</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./webpack.config.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> compiler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">webpack</span><span style="color:#A6ACCD;">(config)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Tell express to use the webpack-dev-middleware and use the webpack.config.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// configuration file as a base.</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">webpackDevMiddleware</span><span style="color:#A6ACCD;">(compiler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">output</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">publicPath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Serve the files on port 3000.</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example app listening on port 3000!</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong>package.json</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node server.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="无刷新响应" tabindex="-1">无刷新响应 <a class="header-anchor" href="#无刷新响应" aria-label="Permalink to &quot;无刷新响应&quot;">​</a></h2><p>使用 <code>webpack-dev-server</code> 时，每次更新时会自动刷新页面，在大多数情况下期望页面无刷新就能响应模块的变化。</p><p>webpack 中使用 模块热替换(HMR) 实现无刷新响应的功能</p><h3 id="启用-hmr-插件" tabindex="-1">启用 HMR 插件 <a class="header-anchor" href="#启用-hmr-插件" aria-label="Permalink to &quot;启用 HMR 插件&quot;">​</a></h3><p>在配置文件中添加插件</p><p><strong>webpack.config.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// others...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 开启 HMR</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// others...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HotModuleReplacementPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// HMR 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NamedModulesPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 开启 HMR 时显示模块相对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="添加处理逻辑" tabindex="-1">添加处理逻辑 <a class="header-anchor" href="#添加处理逻辑" aria-label="Permalink to &quot;添加处理逻辑&quot;">​</a></h3><p>开启 HMR 后需要在相应的模块中添加处理逻辑</p><p><strong>index.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//假设需要热替换 test 文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">hot </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">hot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">accept</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./test.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>注意: 若 DOM 绑定了 HMR 中处理的方法, 在处理模块替换时并不会更新对应的监听器, 需要手动重新处理</p><h3 id="loader-自处理" tabindex="-1">loader 自处理 <a class="header-anchor" href="#loader-自处理" aria-label="Permalink to &quot;loader 自处理&quot;">​</a></h3><p>一些常用的 loader 内部会自行行使用 <code>module.hot.accept</code> 处理 HMR 的逻辑, 常见的有</p><ul><li><code>style-loader</code>, <code>css-loader</code></li><li><code>vue-loader</code></li><li><code>react-hot-loader</code></li><li><code>elm-hot-loader</code></li><li><code>angular-hmr</code></li></ul><h2 id="源代码映射" tabindex="-1">源代码映射 <a class="header-anchor" href="#源代码映射" aria-label="Permalink to &quot;源代码映射&quot;">​</a></h2><p>源代码映射(Source Map)用于将构建后的代码映射至对应的源码, 可以通过以下方式开启</p><ul><li>指定 <code>devtool</code> 配置选项</li><li>使用 <a href="https://webpack.docschina.org/plugins/source-map-dev-tool-plugin" target="_blank" rel="noreferrer"><code>SourceMapDevToolPlugin</code></a> / <a href="https://webpack.docschina.org/plugins/eval-source-map-dev-tool-plugin/" target="_blank" rel="noreferrer"><code>EvalSourceMapDevToolPlugin</code></a> 插件</li></ul><p>注意</p><ul><li><code>SourceMapDevToolPlugin</code> / <code>EvalSourceMapDevToolPlugin</code> 插件提供了更加详细的配置</li><li><code>devtool</code> 选项内部使用了 <code>SourceMapDevToolPlugin</code> / <code>EvalSourceMapDevToolPlugin</code> 插件</li><li><code>devtool</code> 与 <code>SourceMapDevToolPlugin</code> / <code>EvalSourceMapDevToolPlugin</code> 不要并用(会重复执行)</li></ul><h3 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h3><p><strong>webpack.config.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...others</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devtool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source-map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="配置选项" tabindex="-1">配置选项 <a class="header-anchor" href="#配置选项" aria-label="Permalink to &quot;配置选项&quot;">​</a></h3><p><code>devtool</code> 提供了默认的 <code>false</code> 及其他多种选项，这些选项为以下基本选项的组合</p><ul><li><code>inline</code>: 不会生成独立的 map 文件而是以 dataURL 形式插入</li><li><code>cheap</code>: 会忽略源文件中列信息, 可以提高构建速度</li><li><code>module</code>: 包含了 loader 之间的 source map</li><li><code>eval</code><ul><li>构建和重新构建速率高</li><li>会生成 <code>//@ sourceURL</code> 进行映射关联</li><li>不会生成 source-map 文件</li><li>只能映射至转换后的代码, 而非源码</li></ul></li><li><code>source-map</code><ul><li>为每个打包后模块生成独立的 sorce map 文件</li></ul></li></ul><h3 id="常用选项" tabindex="-1">常用选项 <a class="header-anchor" href="#常用选项" aria-label="Permalink to &quot;常用选项&quot;">​</a></h3><p>对于开发环境</p><ul><li><code>eval-source-map</code>: 用于生成最佳品质的 source map</li><li><code>cheap-module-eval-source-map</code>: 低开销的 source map , 会忽略列映射</li></ul><p>对于生成环境</p><ul><li><code>false</code> 或省略</li><li><code>source-map</code>: 生成独立的 source map 文件, 应当禁止普通用户访问这些文件</li><li><code>hidden-source-map</code>: 用于错误报告工具, 不应当部署至服务器</li><li><code>nosources-source-map</code>: 不包含源码内容, 用于映射堆栈跟踪, 可以部署至服务器</li></ul><p>推荐的选项</p><ul><li>开发环境: <code>cheap-module-eval-source-map</code></li><li>生成环境: <code>cheap-module-source-map</code></li></ul>`,58),e=[p];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{A as __pageData,d as default};
