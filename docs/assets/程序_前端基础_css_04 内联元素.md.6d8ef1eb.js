import{_ as s,o as l,c as a,V as n}from"./chunks/framework.bbae8ef5.js";const C=JSON.parse('{"title":"内联元素","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/css/04 内联元素.md","filePath":"程序/前端基础/css/04 内联元素.md","lastUpdated":1687109729000}'),o={name:"程序/前端基础/css/04 内联元素.md"},p=n(`<h1 id="内联元素" tabindex="-1">内联元素 <a class="header-anchor" href="#内联元素" aria-label="Permalink to &quot;内联元素&quot;">​</a></h1><h2 id="基线" tabindex="-1">基线 <a class="header-anchor" href="#基线" aria-label="Permalink to &quot;基线&quot;">​</a></h2><p>基线是字母 &quot;x&quot; 的下边缘</p><p><code>x-height</code>: 小写字母 x 的高度，等于 基线与等分线(中线) 的间距</p><p><code>line-height</code> 指两条基线的间距</p><p><code>vertial-align</code> 默认值为 <code>baseline</code></p><p><code>vertial-align: middle</code> 使元素的中部与父元素的基线加上父元素 <code>x-height</code> 的一半对齐。</p><h3 id="ex" tabindex="-1">ex <a class="header-anchor" href="#ex" aria-label="Permalink to &quot;ex&quot;">​</a></h3><p>css 早期支持的相对尺寸单位，小写字母 &#39;x&#39; 的高度</p><p>给 <code>icon</code> 设置 <code>1ex</code> 可以实现 <code>vertial-align: middle</code> 的效果</p><h2 id="行高" tabindex="-1">行高 <a class="header-anchor" href="#行高" aria-label="Permalink to &quot;行高&quot;">​</a></h2><p>对于非替换元素的纯内联元素，其可视高度完全由行高决定(不受 height padding border 影响)</p><p>设置内联元素行高与父元素高度相同可以实现近似垂直居中</p><p>line-height 默认值为 normal，其具体值与 font-family 有关</p><p>line-height: <code>&lt;number&gt; | &lt;percent&gt; | &lt;number&gt;&lt;unit&gt;</code></p><ul><li>使用数字时，子元素集成父元素行高数字</li><li>使用百分比或具体数值时，子元素集成父元素行高计算后的值</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 全局初始化 */</span></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="vertical-align" tabindex="-1">vertical-align <a class="header-anchor" href="#vertical-align" aria-label="Permalink to &quot;vertical-align&quot;">​</a></h2><p>作用在 内联元素和 display: table-cell 元素</p><p>取值</p><ul><li>基于线对齐 <ul><li>baseline: 对于空的 inline-block 元素为其底部，对于内联元素为小写字母 x 的底部</li><li>top/bottom: 对于内联元素为当前行框盒子(注意：非块状容器)的顶/底部，对于 table-cell 元素为元素底 Padding 边缘和行顶部</li><li>middle: 元素中心基于小写 x 的中心对齐</li></ul></li><li>基于文本对齐 <ul><li>text-top: 盒子顶部与父级内容区域顶部对齐</li><li>text-bottom: 盒子底部与父级内容区域底部对齐</li></ul></li><li>上下角标</li><li>数值百分比 <ul><li>数值：支持正负值，相对于基线正直向上偏移，负值向下偏移</li><li>百分比：相对于 line-height 计算</li></ul></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 下面示例中 .box 的高度为 35px  --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 原因在于默认的幽灵空白节点，字体大小与 .text 不等 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 从而导致 .text 基线上移与幽灵空白节点基线对其 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 设置 .box 与 .text 字体大小相同可以解决 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 这里显现一个 x 作为幽灵空白节点 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 常见的 img 底部留白问题 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 解决方式(任选其一): .line{line-height: 0}; .line{font-size: 0}; .img{display: block}; .img{vertical-align: top}; --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* line-height: 0; */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box-2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box box-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="文本修饰" tabindex="-1">文本修饰 <a class="header-anchor" href="#文本修饰" aria-label="Permalink to &quot;文本修饰&quot;">​</a></h2><p>描述字体: <code>font：[font-style] [font-variant] [font-weight] &lt;font-size&gt;/[line-height] &lt;font-family&gt;</code></p><ul><li>说明 <ul><li><code>font</code> 是一个复合属性，在使用时略显复杂，很少使用</li><li><code>font</code> 必须包含 <code>font-size</code> 和 <code>font-family</code> 属性，且需要遵守一定的顺序，<code>font-size</code> 与 <code>line-height</code> 中间要加入 &#39;/&#39; 。</li><li><code>font</code> 会重置 <code>font-stretch</code>、<code>font-size-adjust</code>、<code>font-kerning</code> 属性，虽然无法通过 <code>font</code> 设置</li><li>加载字体 <code>@font-face{ font-family:字体名称; src:url(字体地址) format（&quot;&quot;）; }</code>, format 中 ttf 字体为<code>truetype</code>，otf 字体为<code>opentype</code></li><li>引用字体 <code>src:local(&quot;&quot;)</code></li></ul></li><li>子属性 <ul><li><code>font-family</code>: 字体，可指定多个，若无当前字体则按从左到右选择，详见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family" target="_blank" rel="noreferrer">文档</a></li><li><code>font-style</code>: 文本样式，取值 <code>normal</code>-默认、<code>italic</code>-斜体、<code>oblique</code>-倾斜体</li><li><code>font-variant</code>: 文本变体，该属性为复合属性，由于在中文网站中并不常见，具体查看 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant" target="_blank" rel="noreferrer">文档</a></li><li><code>font-weight</code>: 字体粗细，取值 1-1000(整百) 或关键字 <code>normal</code>-等值 400、<code>bold</code>-等值 700、<code>lighter/bolder</code>-依继承值计算</li><li><code>font-size</code>: 字体大小，取值 <code>&lt;length&gt;</code> 或相对单位 <code>em</code>、<code>rem</code> 等</li><li><code>line-height</code>: 行高、取值 <code>&lt;length&gt;</code> 或相对单位 <code>em</code>、<code>rem</code> 或 数字(表示与当前元素字体大小相乘)，默认 <code>normal</code>(大部分字体约 1.2)</li></ul></li></ul><p>修饰字体</p><ul><li><code>color</code>: 字体颜色</li><li><code>text-shadow</code>: 文本阴影 (距左 px 据上 px 清晰度 px 背景颜色),用逗号隔开可以加多层阴影</li><li><code>text-decoration</code>: 文本修饰（line-through/underline/overline/none）</li><li><code>text-transform</code>: 文本转换，取值 <code>capitalize</code>、<code>capitalize</code>、<code>lowercase</code> 等</li><li><code>font-size-adjust</code>: 小写字母字体大小，该属性的值应该被定义为 <code>font-size</code> 的值所要乘的系数</li><li><code>-webkit-text-stroke</code>: 文字描边(需要前缀)</li></ul><p>陈列方式</p><ul><li><code>text-indent</code>: 首行缩进</li><li><code>text-align</code>: 文本对齐</li><li><code>letter-spacing</code>: 字符间距</li><li><code>word-spacing</code>: 单词间距</li><li><code>white-space</code>: 空白符处理，常用 <code>normal</code>(默认) 和 <code>nowrap</code>(不换行)</li><li><code>word-break</code>: 单词换行，取值 <code>normal</code>(默认)、<code>break-all</code>(超出换行)、<code>keep-all</code>(中日韩 不换行、其他语言同 <code>normal</code>)</li><li><code>direction</code>: 文本方向，取值 <code>ltr</code>(默认，从左到右)、<code>rtl</code>(从右到左)</li><li><code>unicode-bidi</code>: 文本方向，该属性为文档类型定义的设计者专用</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 超出隐藏展示省略号 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">text-ellipsis</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>补充说明：</p><ul><li>文本不换行通常使用 <code>white-space: nowrap</code> 而非 <code>word-break: keep-all</code>，<code>word-break</code> 对于英文字母处理时会转为 <code>normal</code></li><li><code>word-wrap: break-word</code> 该属性在 MDN 中未能搜索但确实存在，表现效果与 <code>word-break: break-all</code> 类似</li></ul>`,33),e=[p];function t(c,r,i,D,y,F){return l(),a("div",null,e)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
