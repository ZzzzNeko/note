import{_ as s,v as a,b as l,R as o}from"./chunks/framework.ecc14119.js";const d=JSON.parse('{"title":"数组及其扩展","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/typescript/03 数组类型及扩展.md","filePath":"程序/前端基础/typescript/03 数组类型及扩展.md","lastUpdated":1687190476000}'),n={name:"程序/前端基础/typescript/03 数组类型及扩展.md"},p=o(`<h1 id="数组及其扩展" tabindex="-1">数组及其扩展 <a class="header-anchor" href="#数组及其扩展" aria-label="Permalink to &quot;数组及其扩展&quot;">​</a></h1><p>typescript 处理支持原生的 <code>Array</code>、<code>Set</code>、<code>Map</code>、<code>WeakSet</code>、<code>WeakMap</code> 类型，还提供了以下扩展</p><ul><li>元组(Tuple)类型</li><li><code>ReadonlyArray&lt;T&gt;</code></li><li><code>ReadonlySet&lt;T&gt;</code></li><li><code>ReadonlyMap&lt;T&gt;</code></li></ul><h2 id="tuple" tabindex="-1">Tuple <a class="header-anchor" href="#tuple" aria-label="Permalink to &quot;Tuple&quot;">​</a></h2><p>说明：</p><ul><li>元组类型用于描述一个已知元素数量和类型的数组，各元素类型不必相同</li><li>当访问越界元素时，会使用联合类型替代</li></ul><p>示例</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> tuple</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">tuple[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lazyneko</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// tuple[3] = true; // Error，这里将使用联合类型 number|string 进行判断</span></span></code></pre></div><h2 id="array" tabindex="-1">Array <a class="header-anchor" href="#array" aria-label="Permalink to &quot;Array&quot;">​</a></h2><p>可以使用两种方式描述数组：</p><ul><li>在元素类型后面添加 <code>[]</code> 表示由此类型元素组成的一个数组</li><li>使用数组泛型 <code>Array&lt;T&gt;</code> 表示元素类型为 <code>T</code> 的数组</li></ul><p>示例:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="readonlyarray" tabindex="-1">ReadonlyArray <a class="header-anchor" href="#readonlyarray" aria-label="Permalink to &quot;ReadonlyArray&quot;">​</a></h2><p>说明：使用 <code>ReadonlyArray&lt;T&gt;</code> 表示元素类型为 <code>T</code> 的只读数组，数组创建后无法修改</p><p>示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadonlyArray</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h2><p>说明：使用 <code>Set&lt;T&gt;</code> 表示一个元素类型为 <code>T</code> 的集合</p><p>示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="readonlyset" tabindex="-1">ReadonlySet <a class="header-anchor" href="#readonlyset" aria-label="Permalink to &quot;ReadonlySet&quot;">​</a></h2><p>说明：使用 <code>ReadonlySet&lt;T&gt;</code> 表示一个元素类型为 <code>T</code> 的只读集合，集合创建后无法修改</p><p>示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadonlySet</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="weakset" tabindex="-1">WeakSet <a class="header-anchor" href="#weakset" aria-label="Permalink to &quot;WeakSet&quot;">​</a></h2><p>说明：使用 <code>WeakSet&lt;T&gt;</code> 表示一个元素类型为 <code>T</code> 的 <code>WeakSet</code>，<code>T</code> 类型需要是一个对象</p><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><p>说明：使用 <code>Map&lt;K, V&gt;</code> 表示一组类型为 <code>K</code> 的元素映射到类型为 <code>V</code> 的元素的字典</p><p>示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="readonlymap" tabindex="-1">ReadonlyMap <a class="header-anchor" href="#readonlymap" aria-label="Permalink to &quot;ReadonlyMap&quot;">​</a></h2><p>说明：使用 <code>ReadonlyMap&lt;K, V&gt;</code> 表示一组类型为 <code>K</code> 的元素映射到类型为 <code>V</code> 的元素的字典，字典创建后无法修改</p><p>示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadonlyMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="weakmap" tabindex="-1"><code>WeakMap</code> <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;\`WeakMap\`&quot;">​</a></h2><p>说明：使用 <code>WeakMap&lt;K, V&gt;</code> 描述一个 <code>WeakMap</code> ，<code>K</code> 需要是一个对象</p>`,37),e=[p];function t(c,r,y,D,C,F){return a(),l("div",null,e)}const i=s(n,[["render",t]]);export{d as __pageData,i as default};
