import{_ as s,o as a,c as l,V as n}from"./chunks/framework.bbae8ef5.js";const d=JSON.parse('{"title":"性能优化","description":"","frontmatter":{},"headers":[],"relativePath":"程序/项目管理/打包工具 - webpack/05 性能优化.md","filePath":"程序/项目管理/打包工具 - webpack/05 性能优化.md","lastUpdated":1687958817000}'),o={name:"程序/项目管理/打包工具 - webpack/05 性能优化.md"},e=n(`<h1 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h1><p>项目的增大可能会导致 webpack 启动和构建的时间增长到影响开发和发布的效率</p><p>优化 webpack 开发构建速度即减少 webpack 处理无意义的工作</p><h2 id="减少构建范围" tabindex="-1">减少构建范围 <a class="header-anchor" href="#减少构建范围" aria-label="Permalink to &quot;减少构建范围&quot;">​</a></h2><h3 id="缩小解析范围" tabindex="-1">缩小解析范围 <a class="header-anchor" href="#缩小解析范围" aria-label="Permalink to &quot;缩小解析范围&quot;">​</a></h3><p>通过配置 <code>resolve</code>，提高解析文件路径时的效率</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getResolvePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> p)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用绝对路径减少模块路径查询</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">getResolvePath</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">getResolvePath</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my_packages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 假设使用了自定义模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 减少扩展文件后缀查询，其他文件使用完整文件名引入</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 若不使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">symlinks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>缩小 loader 匹配的范围，减少不必要的匹配</p><ul><li>使用 <code>include</code> 缩小匹配范围</li><li>使用 <code>exclude</code> 减少匹配内容</li></ul><h3 id="忽略指定模块" tabindex="-1">忽略指定模块 <a class="header-anchor" href="#忽略指定模块" aria-label="Permalink to &quot;忽略指定模块&quot;">​</a></h3><p>使用 <code>IgnorePlugin</code> 插件忽略无需构建的模块</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * new webpack.IgnorePlugin(requestRegExp, [contextRegExp]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * - \`requestRegExp\`: 匹配(test)资源请求路径的正则表达式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * - \`contextRegExp\`: 可选, 匹配(test)资源上下文(目录)的正则表达式。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 示例</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...others</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IgnorePlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#A6ACCD;">\\.\\/</span><span style="color:#C3E88D;">locale</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">moment</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="提升处理性能" tabindex="-1">提升处理性能 <a class="header-anchor" href="#提升处理性能" aria-label="Permalink to &quot;提升处理性能&quot;">​</a></h2><h3 id="thread-loader" tabindex="-1">thread-loader <a class="header-anchor" href="#thread-loader" aria-label="Permalink to &quot;thread-loader&quot;">​</a></h3><p>TODO: 利用多线程加速 loader 执行的 loader</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> threadLoader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">thread-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">threadLoader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">warmup</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// loaders</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="dlls" tabindex="-1">Dlls <a class="header-anchor" href="#dlls" aria-label="Permalink to &quot;Dlls&quot;">​</a></h3><p>使用 <a href="https://webpack.docschina.org/plugins/dll-plugin" target="_blank" rel="noreferrer"><code>DllPlugin</code></a> 对修改频率低的代码(通常是第三方库)单独编译, 该插件会生成 <code>manifest.json</code> 文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DllPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vendors_[name]_[hash]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist/manifest.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h2 id="针对具体环境" tabindex="-1">针对具体环境 <a class="header-anchor" href="#针对具体环境" aria-label="Permalink to &quot;针对具体环境&quot;">​</a></h2><h3 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h3><h4 id="提高编译速度" tabindex="-1">提高编译速度 <a class="header-anchor" href="#提高编译速度" aria-label="Permalink to &quot;提高编译速度&quot;">​</a></h4><ul><li>使用 <code>webpack-dev-server</code>、<code>webpack-hot-middleware</code> 或 <code>webpacl-dev-middleware</code> 在内存中编译</li><li>设置 <code>devtool: cheap-module-eval-source-map</code> 以减少 Source Map 开支</li><li>webpack4 使用 <code>stats.toJson</code> 输出大量数据, 避免访问 <code>stats</code> 对象的内容</li><li>使用 <code>ts-loader</code> 时, 配置 <code>transpileOnly: true</code> 和 <code>experimentalWatchApi: true</code> 提高构建速度</li></ul><h4 id="减少处理内容" tabindex="-1">减少处理内容 <a class="header-anchor" href="#减少处理内容" aria-label="Permalink to &quot;减少处理内容&quot;">​</a></h4><ul><li>最小化入口 chunk</li><li>避免额外的优化, 避免在生产环境中使用的工具 <ul><li><code>UglifyJsPlugin</code></li><li><code>ExtractTextPlugin</code></li><li><code>[hash]/[chunkhash]</code></li><li><code>AggressiveSplittingPlugin</code></li><li><code>AggressiveMergingPlugin</code></li><li><code>ModuleConcatenationPlugin</code></li></ul></li><li>设置 <code>output: pathinfo: false</code> 使输出文件不携带路径信息</li></ul><h3 id="生产环境优化" tabindex="-1">生产环境优化 <a class="header-anchor" href="#生产环境优化" aria-label="Permalink to &quot;生产环境优化&quot;">​</a></h3><p>生产环境中对性能的要求远小于对程序质量的要求, 通常不做过多优化</p><ul><li>多个编译时 <ul><li><code>parallel-webpack</code>: 用于开启一个 worker</li><li><code>cache-loader</code>: 缓存可以在多个编译时之间共享</li></ul></li><li>source map: 不使用或使用 <code>cheap-module-source-map</code> (注意不应当让用户访问)</li></ul><h2 id="提高项目质量" tabindex="-1">提高项目质量 <a class="header-anchor" href="#提高项目质量" aria-label="Permalink to &quot;提高项目质量&quot;">​</a></h2><h3 id="更新工具版本" tabindex="-1">更新工具版本 <a class="header-anchor" href="#更新工具版本" aria-label="Permalink to &quot;更新工具版本&quot;">​</a></h3><ul><li>保持 webpack 的较新版本</li><li>保持 npm 的较新版本</li><li>保持 node 的较新版本, 注意 node 8.9.10 - 9.11.1 存在性能回退问题, 应避免使用</li></ul><h3 id="优化项目资源" tabindex="-1">优化项目资源 <a class="header-anchor" href="#优化项目资源" aria-label="Permalink to &quot;优化项目资源&quot;">​</a></h3><ul><li>使用更少的库</li><li>移除废弃代码</li></ul><h3 id="优化构建流程" tabindex="-1">优化构建流程 <a class="header-anchor" href="#优化构建流程" aria-label="Permalink to &quot;优化构建流程&quot;">​</a></h3><ul><li>拆分构建步骤：代码、资源分批构建</li><li>拆分项目代码：对项目业务进行拆分</li></ul>`,35),p=[e];function t(c,r,i,D,y,F){return a(),l("div",null,p)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
