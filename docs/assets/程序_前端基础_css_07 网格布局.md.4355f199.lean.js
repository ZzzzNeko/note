import{_ as l,v as s,b as a,R as o}from"./chunks/framework.cc13f38d.js";const C=JSON.parse('{"title":"网格布局","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/css/07 网格布局.md","filePath":"程序/前端基础/css/07 网格布局.md","lastUpdated":1687109729000}'),n={name:"程序/前端基础/css/07 网格布局.md"},e=o(`<h1 id="网格布局" tabindex="-1">网格布局 <a class="header-anchor" href="#网格布局" aria-label="Permalink to &quot;网格布局&quot;">​</a></h1><blockquote><p>网格是一组相交的水平线和垂直线，它定义了网格的列和行。我们可以将网格元素放置在与这些行和列相关的位置上。</p></blockquote><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><ul><li>网格容器：用于实现网格布局的元素</li><li>网格元素：网格容器的所有直系子元素</li><li>网格线：用来划分网格轨道的平行线，包括行网格线和列网格线，其编号顺序同文本方向</li><li>网格轨道：相邻的两条平行的网格线之间的空间，包括行轨道和列轨道</li><li>网格单元：相邻的列网格线和相邻的行网格线交叉形成的区域，网格单元是网格容器中最小的单位</li><li>网格区域：网格单元向行或列方向扩展一个或多个单元形成的矩形区域</li><li>网格间距：网格单元之间横向和纵向的间距，不包括网格单元与网格容器边缘之间的间距</li><li>隐式网格：如果非固定宽高的网格容器无法容纳额外的网格元素，将按照一定规则创建隐式网格行轨道或列轨道，同时改变该方向上网格容器的尺寸</li><li>嵌套网格：网格元素作为网格容器称为嵌套网格，嵌套网格与父级无关且无隐式网格</li></ul><h2 id="描述轨道" tabindex="-1">描述轨道 <a class="header-anchor" href="#描述轨道" aria-label="Permalink to &quot;描述轨道&quot;">​</a></h2><p>下面使用 <code>&lt;track&gt;</code> 表示一个轨道，使用 <code>&lt;track-list&gt;</code> 表示一组轨道</p><hr><p><code>&lt;track&gt;</code> 的描述格式为 <code>[lineName-start] &lt;track-size&gt; [lineName-end]</code> ，其中:</p><ul><li><code>[lineName]</code> 为网格线命名，可以使用多个命名，如 <code>[line1-end line2-start]</code></li><li><code>[lineName-start]</code> 和 <code>[lineName-end]</code> 为可选的，如果使用，则需要含在方括号内</li><li><code>[lineName-start]</code> 和 <code>[lineName-end]</code> 使用 &#39;-start&#39; 和 &#39;-end&#39; 作为后缀时将自动生成同名(去掉后缀)的 <code>grid-area</code></li><li><code>&lt;track-size&gt;</code>表示轨道的尺寸，可以: <ul><li>使用传统尺寸单位，如 <code>px</code></li><li>使用 <code>%</code> 单位: 相对于网格容器的百分比，如果网格容器的尺寸依赖于网格轨道，则该值视为 <code>auto</code></li><li>使用 <code>fr</code> 单位 <ul><li>该单位将对容器当前方向上的剩余空间进行占比分配，若无剩余空间则依据网格元素内容的最大尺寸</li><li><strong>当轨道 <code>fr</code> 值之和小于 1 时，各轨道依据 <code>fr</code> 值占据剩余空间的对应的百分比而非依据各轨道自身占比</strong></li></ul></li><li>使用 <code>auto</code> 单位，该单位将对容器依据网格元素尺寸进行自适应，如果网格元素内容超出，将依据其他网格元素内容剩余空间进行调整(该行为与<code>fr</code>不一致)</li><li>使用 <code>min-content</code>:</li><li>使用 <code>max-content</code>:</li><li>使用 <code>fit-content([&lt;length&gt; | &lt;percentage&gt;])</code>:</li><li>使用 <code>minmax(min, max)</code> 函数: 该函数将限制轨道的最大最小尺寸</li></ul></li></ul><hr><p><code>&lt;track-list&gt;</code> 的描述格式为</p><ul><li>对每一个轨道进行单独描述，如 <code>&lt;track1&gt; &lt;track2&gt; ...</code></li><li>使用 <code>repeat(&lt;interger&gt;|auto-fill, &lt;track&gt;)</code> 可以对重复的轨道进行简写，使用整数指定重复次数或使用 <code>auto-fill</code> 关键字让容器自动计算最大可填充列数(轨道尺寸不能指定为 <code>fr</code>)</li><li>使用上述两种方式混合使用</li></ul><p>例子:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    [nav-start] </span><span style="color:#F78C6C;">200px</span><span style="color:#A6ACCD;"> [nav-end main-start] </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    [main-end rest-start] </span><span style="color:#F78C6C;">1fr</span><span style="color:#A6ACCD;"> [rest-end]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="网格容器" tabindex="-1">网格容器 <a class="header-anchor" href="#网格容器" aria-label="Permalink to &quot;网格容器&quot;">​</a></h2><ul><li>创建容器：通过给元素指定样式 <code>display: grid;</code> 或 <code>display: inline-grid;</code> 创建一个网格容器。</li><li>定义结构：通过 <code>grid-template-rows</code> 和 <code>grid-template-columns</code> 定义行与列轨道</li><li>定义布局：通过 <code>grid-template-areas</code> 定义命名网格区域布局</li><li>隐式网格：通过 <code>grid-auto-flow</code> 指定隐式网格创建方向，通过 <code>grid-auto-rows</code> 或 <code>grid-auto-columns</code> 指定隐式网格轨道创建规则</li><li>定义间距：通过 <code>grid-gap-rows</code> 和 <code>grid-gap-columns</code> 定义横向和列向的网格元素间距</li></ul><h3 id="grid-template-rows" tabindex="-1"><code>grid-template-rows</code> <a class="header-anchor" href="#grid-template-rows" aria-label="Permalink to &quot;\`grid-template-rows\`&quot;">​</a></h3><ul><li>说明 <ul><li>定义网格容器行轨道</li></ul></li><li>格式 <ul><li><code>grid-template-rows: &lt;track-list&gt;;</code></li></ul></li><li>取值 <ul><li><code>none</code>: 表示不明确的指定栅格，所有的行和其尺寸由 <code>grid-auto-rows</code> 属性隐式指定</li><li><code>&lt;track-list&gt;</code>: 见 &#39;描述轨道&#39;</li></ul></li></ul><h3 id="grid-template-columns" tabindex="-1"><code>grid-template-columns</code> <a class="header-anchor" href="#grid-template-columns" aria-label="Permalink to &quot;\`grid-template-columns\`&quot;">​</a></h3><ul><li>说明 <ul><li>定义网格容器列轨道</li></ul></li><li>格式 <ul><li><code>grid-template-columns: &lt;track-list&gt;</code></li></ul></li><li>取值 <ul><li><code>none</code>: 表示不明确的指定栅格，所有的列和其尺寸由 <code>grid-auto-columns</code> 属性隐式指定</li><li><code>&lt;track-list&gt;</code>: 见 &#39;描述轨道&#39;</li></ul></li></ul><h3 id="grid-template-areas" tabindex="-1"><code>grid-template-areas</code> <a class="header-anchor" href="#grid-template-areas" aria-label="Permalink to &quot;\`grid-template-areas\`&quot;">​</a></h3><ul><li>说明 <ul><li>定义网格区域的结构</li></ul></li><li>示例</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-areas</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hd hd hd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bd bd bd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.. ft ..</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>取值 <ul><li><code>none</code></li><li><code>grid areas</code> 结构</li></ul></li><li>格式 <ul><li>如示例所示，&#39;hd&#39;、&#39;bd&#39;、&#39;ft&#39; 为网格区域名称，&#39;..&#39; 表示空白区域</li><li>每一行使用一组网格区域名称放在引号中进行描述，行与行之间使用空格或换行分隔</li><li>跨越相邻行或列的网格区域名称描述一个网格区块</li><li>网格区块需要为矩形</li></ul></li><li>默认 <ul><li><code>none</code></li></ul></li></ul><h3 id="grid-template" tabindex="-1"><code>grid-template</code> <a class="header-anchor" href="#grid-template" aria-label="Permalink to &quot;\`grid-template\`&quot;">​</a></h3><ul><li>说明 <ul><li>该属性为 <code>grid-template-columns</code> 、<code>grid-template-rows</code> 、<code>grid-template-areas</code> 的复合属性</li><li>该属性通常用于进行创建简单网格，对于复杂的网格应当将其拆分为单一属性以提升可读性</li></ul></li><li>取值 <ul><li><code>none</code>: 相当于 <code>grid-template-columns: none; grid-template-rows: none; grid-template-areas: none;</code></li><li>见格式</li></ul></li><li>默认 <ul><li><code>none</code></li></ul></li><li>格式 <ul><li>格式 ①：<code>&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;</code></li><li>格式 ②：<code>&lt;grid-template-areas&gt; &lt;grid-template-rows&gt; / &lt;grid-template-column&gt;</code></li></ul></li><li>注意 <ul><li>格式 ① 在 &#39;/&#39; 左右添加 <code>[lineName]</code> 时在 vscode 中会报错(猜测为 bug 或部分插件限制)，提示应当将其进行拆分为单一属性</li><li>格式 ② 可以在 <code>&lt;grid-template-areas&gt; &lt;grid-template-rows&gt;</code> 前后添加网格线命名，在 vscode 中会报同样的错误，应当将其拆分为单一属性</li><li>猜测上述 vscode 中的报错为编译器认为属性值过于复杂会提升理解难度，这种写法应当禁止</li></ul></li><li>示例</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> / </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">/* 指定了网格区域名称的情况 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hd hd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nv bd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nv bd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ft ft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span></span>
<span class="line"><span style="color:#A6ACCD;">    / </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="grid-auto-flow" tabindex="-1"><code>grid-auto-flow</code> <a class="header-anchor" href="#grid-auto-flow" aria-label="Permalink to &quot;\`grid-auto-flow\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格元素在自动布局中的排列方向</li></ul></li><li>语法 <ul><li><code>[row | column] | [dense]</code></li></ul></li><li>取值 <ul><li><code>row</code>: 自动布局算法按照逐行填充来排列元素</li><li><code>column</code>: 自动布局算法按照逐列填充来排列元素</li><li><code>dense</code>: 使用稠密堆积算法，容器试图使用小尺寸元素填充网格中之前留下的空白，可能导致元素次序被打乱</li><li><code>row dense</code>: 自动布局为列方向，使用稠密堆积算法</li><li><code>column dense</code>: 自动布局为行方向，使用稠密堆积算法</li></ul></li><li>默认 <ul><li><code>row</code></li></ul></li></ul><h3 id="grid-auto-columns" tabindex="-1"><code>grid-auto-columns</code> <a class="header-anchor" href="#grid-auto-columns" aria-label="Permalink to &quot;\`grid-auto-columns\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定隐式创建的列轨道尺寸</li></ul></li><li>取值 <ul><li><code>&lt;track-size&gt;</code></li><li><code>&lt;track-size-list&gt;</code></li></ul></li><li>注意 <ul><li>不支持 <code>repeat</code> 模式描述的轨道列表</li></ul></li></ul><h3 id="grid-auto-rows" tabindex="-1"><code>grid-auto-rows</code> <a class="header-anchor" href="#grid-auto-rows" aria-label="Permalink to &quot;\`grid-auto-rows\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定隐式创建的行轨道尺寸</li></ul></li><li>取值 <ul><li><code>&lt;track-size&gt;</code></li><li><code>&lt;track-size-list&gt;</code></li></ul></li><li>注意 <ul><li>不支持 <code>repeat</code> 模式描述的轨道列表</li></ul></li></ul><h3 id="grid-row-gap" tabindex="-1"><code>grid-row-gap</code> <a class="header-anchor" href="#grid-row-gap" aria-label="Permalink to &quot;\`grid-row-gap\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格行轨道之间的行间隔间距</li><li>指定轨道间隔间距可能会使内容超出网格容器</li></ul></li><li>取值 <ul><li><code>&lt;length&gt;</code>: 固定的行轨道间隔间距</li><li><code>&lt;percentage&gt;</code>: 间距尺寸依据网格容器高度，需要先指定网格容器的 <code>height</code> 值，否则不生效</li></ul></li><li>注意 <ul><li>此为行轨道之间的间隔间距，不包括行轨道与网格容器之间的间隔</li><li>若存在 <code>fr</code> 计算的轨道，轨道间距不在剩余空间内</li><li>取值为百分比时需指定容器高度，该行为与 <code>grid-auto-flow</code> 无关</li></ul></li></ul><h3 id="grid-column-gap" tabindex="-1"><code>grid-column-gap</code> <a class="header-anchor" href="#grid-column-gap" aria-label="Permalink to &quot;\`grid-column-gap\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格列轨道之间的列间隔间距</li><li>指定轨道间隔间距可能会使内容超出网格容器</li></ul></li><li>取值 <ul><li><code>&lt;length&gt;</code>: 固定列轨道间距间距</li><li><code>&lt;percentage&gt;</code>: 间距尺寸依据网格容器宽度</li></ul></li><li>注意 <ul><li>此为列轨道之间的间隔间距，不包括列轨道与网格容器之间的间隔</li><li>若存在 <code>fr</code> 计算的轨道，轨道间距不在剩余空间内</li></ul></li></ul><h3 id="grid-gap" tabindex="-1"><code>grid-gap</code> <a class="header-anchor" href="#grid-gap" aria-label="Permalink to &quot;\`grid-gap\`&quot;">​</a></h3><ul><li>说明 <ul><li>该属性为 <code>grid-column-gap</code> 和 <code>grid-row-gap</code> 的复合属性</li></ul></li><li>格式 <ul><li><code>grid-gap: &lt;gap&gt;</code>: 该简写 <code>column-gap</code> 值同 <code>row-gap</code></li><li><code>grid-gap: &lt;row-gap&gt; &lt;column-gap&gt;</code></li></ul></li><li>取值 <ul><li><code>&lt;length&gt;</code>: 固定的轨道间隔间距</li><li><code>&lt;percentage&gt;</code>: 间距尺寸依据网格容器尺寸，列方向的网格间距需要先指定网格容器的 <code>height</code> 值，否则不生效</li></ul></li><li>注意 <ul><li>此为轨道之间的间隔间距，不包括轨道与网格容器之间的间隔</li><li>若存在 <code>fr</code> 计算的轨道，轨道间距不在剩余空间内</li><li><code>&lt;row=gap&gt;</code> 取值为百分比时需指定容器高度，该行为与 <code>grid-auto-flow</code> 无关</li></ul></li></ul><h3 id="align-items" tabindex="-1"><code>align-items</code> <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;\`align-items\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格元素在列轴上的对齐方式</li></ul></li><li>取值 <ul><li><code>start</code>: 块方向开始位置对齐</li><li><code>center</code>: 块方向居中对齐</li><li><code>end</code>: 块方向末尾位置对齐</li><li><code>stretch</code>: 拉伸</li></ul></li><li>注意 <ul><li>具有指定宽高的网格元素，默认行为为 <code>start</code></li><li>没有指定宽高的网格元素，默认行为为 <code>stretch</code></li></ul></li></ul><h3 id="justify-items" tabindex="-1"><code>justify-items</code> <a class="header-anchor" href="#justify-items" aria-label="Permalink to &quot;\`justify-items\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格元素在行轴上的对齐方式</li></ul></li><li>取值 <ul><li><code>start</code>: 行方向开始位置对齐</li><li><code>center</code>: 行方向居中对齐</li><li><code>end</code>: 行方向末尾位置对齐</li><li><code>stretch</code>: 拉伸</li></ul></li><li>注意 <ul><li>具有指定宽高的网格元素，默认行为为 <code>start</code></li><li>没有指定宽高的网格元素，默认行为为 <code>stretch</code></li></ul></li></ul><h3 id="align-content" tabindex="-1"><code>align-content</code> <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;\`align-content\`&quot;">​</a></h3><ul><li>说明 <ul><li>当总网格区域尺寸小于网格容器时，可以设置网格轨道的对齐方式</li><li>这里要求总网格区域块方向尺寸小于网格容器高度</li></ul></li><li>取值 <ul><li><code>start</code></li><li><code>center</code></li><li><code>end</code></li><li><code>stretch</code>: 拉伸</li><li><code>space-around</code>: 均匀分布，网格元素间距相等，网格元素与网格容器间距为网格元素间距的一半</li><li><code>space-between</code>: 两端对齐，网格元素间距相等</li><li><code>space-evenly</code>: 等距分布，网格元素间距，网格元素与网格容器间距相同</li></ul></li><li>注意 <ul><li>取 <code>stretch</code> 时，若网格轨道为固定值则失效</li></ul></li></ul><h3 id="justify-content" tabindex="-1"><code>justify-content</code> <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;\`justify-content\`&quot;">​</a></h3><ul><li>说明 <ul><li>当总网格区域尺寸小于网格容器时，可以设置网格轨道的对齐方式</li><li>这里要求总网格区域行方向尺寸小于网格容器宽度</li></ul></li><li>取值 <ul><li><code>start</code></li><li><code>center</code></li><li><code>end</code></li><li><code>stretch</code>: 拉伸</li><li><code>space-around</code>: 均匀分布，网格元素间距相等，网格元素与网格容器间距为网格元素间距的一半</li><li><code>space-between</code>: 两端对齐，网格元素间距相等</li><li><code>space-evenly</code>: 等距分布，网格元素间距，网格元素与网格容器间距相同</li></ul></li><li>注意 <ul><li>取 <code>stretch</code> 时，若网格轨道为固定值则失效</li></ul></li></ul><h2 id="网格元素" tabindex="-1">网格元素 <a class="header-anchor" href="#网格元素" aria-label="Permalink to &quot;网格元素&quot;">​</a></h2><p>网格元素定位可以通过以下方式进行描述</p><ul><li>基于网格线的描述 <ul><li>使用网格线编号(<strong>注意：网格线编号是从 1 开始计算的</strong>)</li><li>使用网格线名称</li></ul></li><li>基于命名网格区域的描述 <ul><li>使用网格区域名称</li></ul></li></ul><h3 id="grid-column-start-grid-row-start" tabindex="-1"><code>grid-column-start</code> &amp;&amp; <code>grid-row-start</code> <a class="header-anchor" href="#grid-column-start-grid-row-start" aria-label="Permalink to &quot;\`grid-column-start\` &amp;&amp; \`grid-row-start\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格元素起始位置</li><li>未指定网格元素结束位置时默认延当前方向跨越 1 个轨道</li></ul></li><li>取值 <ul><li><code>auto</code></li><li><code>&lt;line-name&gt;</code>: 起始位置为指定的命名列网格线</li><li><code>&lt;integer&gt;</code>: 起始位置为指定编号的列网格线，若为负数则从行方向尾部开始计算</li><li><code>span &lt;integer&gt;</code>: 指定跨越的轨道数，需要与 <code>grid-column-end</code> 或 <code>grid-row-end</code> 结合使用</li><li><code>span &lt;line-name&gt;</code>: 指定起始网格线，需指定 <code>grid-column-end</code> 或 <code>grid-row-end</code> 才生效</li></ul></li></ul><h3 id="grid-column-end-grid-row-end" tabindex="-1"><code>grid-column-end</code> &amp;&amp; <code>grid-row-end</code> <a class="header-anchor" href="#grid-column-end-grid-row-end" aria-label="Permalink to &quot;\`grid-column-end\` &amp;&amp; \`grid-row-end\`&quot;">​</a></h3><ul><li>说明 <ul><li>指定网格元素的结束位置</li><li>未指定网格元素开始位置时默认逆当前方向跨越 1 个轨道</li></ul></li><li>取值 <ul><li><code>auto</code></li><li><code>&lt;line-name&gt;</code></li><li><code>span &lt;integer&gt;</code></li><li><code>span &lt;line-name&gt;</code></li></ul></li></ul><h3 id="grid-column-grid-row" tabindex="-1"><code>grid-column</code> &amp;&amp; <code>grid-row</code> <a class="header-anchor" href="#grid-column-grid-row" aria-label="Permalink to &quot;\`grid-column\` &amp;&amp; \`grid-row\`&quot;">​</a></h3><ul><li>说明 <ul><li><code>grid-column</code> 为 <code>grid-column-start</code> 与 <code>grid-column-end</code> 的复合属性</li><li><code>grid-row</code> 为 <code>grid-row-start</code> 与 <code>grid-row-end</code> 的复合属性</li></ul></li><li>格式 <ul><li><code>grid-column: &lt;column-start&gt; / &lt;column-end&gt;</code></li><li><code>grid-row: &lt;row-start&gt; / &lt;row-end&gt;</code></li><li><code>grid-column: &lt;linename&gt;</code>: 相当于 <code>grid-column: &lt;linename-start&gt; / &lt;linename-end&gt;</code> 的简写</li><li><code>grid-row: &lt;linename&gt;</code>: 相当于 <code>grid-row: &lt;linename-start&gt; / &lt;linename-end&gt;</code> 的简写</li></ul></li></ul><h3 id="grid-area" tabindex="-1"><code>grid-area</code> <a class="header-anchor" href="#grid-area" aria-label="Permalink to &quot;\`grid-area\`&quot;">​</a></h3><ul><li>说明 <ul><li>该属性为 <code>grid-row-start</code>、<code>grid-column-start</code>、<code>grid-row-end</code>、<code>grid-column-end</code> 的简写</li><li>也可以指定为一个命名网格区域的名称</li></ul></li></ul><h3 id="align-self" tabindex="-1"><code>align-self</code> <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;\`align-self\`&quot;">​</a></h3><ul><li>说明 <ul><li>作用于网格元素</li><li>效果同 <code>align-items</code></li><li>设置该属性将优先于 <code>align-items</code> 的作用效果</li></ul></li></ul><h3 id="justify-self" tabindex="-1"><code>justify-self</code> <a class="header-anchor" href="#justify-self" aria-label="Permalink to &quot;\`justify-self\`&quot;">​</a></h3><ul><li>说明 <ul><li>作用于网格元素</li><li>效果同 <code>justify-items</code></li><li>设置该属性将优先于 <code>justify-items</code> 的作用效果</li></ul></li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nav</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> dashed </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">aaa</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">720px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">240px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">480px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> auto </span><span style="color:#F78C6C;">80px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-areas</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nav main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nav footer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">720px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">640px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80px</span><span style="color:#A6ACCD;"> auto </span><span style="color:#F78C6C;">80px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">grid-template-areas</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nav</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> header</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">nav</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nav</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> main</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">footer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> footer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> orange</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,65),p=[e];function t(c,r,i,d,D,y){return s(),a("div",null,p)}const u=l(n,[["render",t]]);export{C as __pageData,u as default};
