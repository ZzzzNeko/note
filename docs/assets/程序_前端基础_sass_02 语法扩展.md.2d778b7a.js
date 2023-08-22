import{_ as s,v as a,b as n,R as l}from"./chunks/framework.ecc14119.js";const F=JSON.parse('{"title":"语法扩展","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/sass/02 语法扩展.md","filePath":"程序/前端基础/sass/02 语法扩展.md","lastUpdated":1687109729000}'),p={name:"程序/前端基础/sass/02 语法扩展.md"},o=l(`<h1 id="语法扩展" tabindex="-1">语法扩展 <a class="header-anchor" href="#语法扩展" aria-label="Permalink to &quot;语法扩展&quot;">​</a></h1><h2 id="注释扩展" tabindex="-1">注释扩展 <a class="header-anchor" href="#注释扩展" aria-label="Permalink to &quot;注释扩展&quot;">​</a></h2><ul><li>单行注释: <code>//</code>，不会被编译到 css 文件中</li><li>多行注释: <code>/* */</code>，会被编译到 css 文件中(<code>compressed</code> 模式下会被删除)</li><li>压缩保留: <code>/*! */</code>，保证在 <code>compressed</code> 模式保留该注释，一般用于版权声明</li><li>插值语句: <code>#{content}</code> 也可以写入注释中，这里 <code>content</code> 为变量</li></ul><p>示例:</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这里声明一个变量 $author , 这里的注释不会保留</span></span>
<span class="line"><span style="color:#A6ACCD;">$author: neko</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * author: #{$author}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><p>编译后:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * author: neko</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><h2 id="嵌套规则" tabindex="-1">嵌套规则 <a class="header-anchor" href="#嵌套规则" aria-label="Permalink to &quot;嵌套规则&quot;">​</a></h2><h3 id="基本嵌套" tabindex="-1">基本嵌套 <a class="header-anchor" href="#基本嵌套" aria-label="Permalink to &quot;基本嵌套&quot;">​</a></h3><p>sass 允许将一套 css 样式嵌入另一套样式中，外层选择器将作为内层样式的父选择器</p><p>示例:</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.article</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;font-style:italic;">%</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">.title</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;font-style:italic;">px</span></span></code></pre></div><p>编译后:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="父选择器" tabindex="-1">父选择器 <a class="header-anchor" href="#父选择器" aria-label="Permalink to &quot;父选择器&quot;">​</a></h3><p>内存样式中，可能需要直接使用父元素选择器，可以使用 <code>&amp;</code> 标识符</p><ul><li><code>&amp;</code> 标识符指向父元素选择器，当无父级选择器时， <code>&amp;</code> 值为 <code>null</code></li><li><code>&amp;</code> 可以作为<strong>第一个字符</strong>与后缀生成复合选择器</li></ul><p>示例:</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.confirm</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;font-style:italic;">px</span><span style="color:#A6ACCD;"> solid grey</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">&amp;</span><span style="color:#C792EA;">:hover</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#A6ACCD;">: none</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">&amp;</span><span style="color:#FFCB6B;">-icon</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#A6ACCD;">: none</span></span></code></pre></div><p>编译后:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">confirm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid grey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">confirm</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">confirm-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="属性嵌套" tabindex="-1">属性嵌套 <a class="header-anchor" href="#属性嵌套" aria-label="Permalink to &quot;属性嵌套&quot;">​</a></h3><p>对于遵循相同命名空间的 css 属性，如: <code>font</code>、<code>padding</code>、<code>margin</code> 等，可以使用属性嵌套简写</p><ul><li>css 命名空间作为嵌套的父级(注意: 需要添加冒号否则会被当做选择器处理)</li><li>命名空间可以包含自己的属性值</li><li>嵌套样式使用后缀作为属性名</li></ul><p>示例:</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.rect</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#A6ACCD;">: no-repeat</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#A6ACCD;">: none</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">image</span><span style="color:#A6ACCD;">: none</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,27),e=[o];function c(t,r,i,C,y,D){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{F as __pageData,A as default};
