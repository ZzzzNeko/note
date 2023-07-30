import{_ as s,v as l,b as a,R as n}from"./chunks/framework.cc13f38d.js";const d=JSON.parse('{"title":"样式复用","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/sass/06 样式复用.md","filePath":"程序/前端基础/sass/06 样式复用.md","lastUpdated":1687109729000}'),o={name:"程序/前端基础/sass/06 样式复用.md"},p=n(`<h1 id="样式复用" tabindex="-1">样式复用 <a class="header-anchor" href="#样式复用" aria-label="Permalink to &quot;样式复用&quot;">​</a></h1><h2 id="extend" tabindex="-1"><code>@extend</code> <a class="header-anchor" href="#extend" aria-label="Permalink to &quot;\`@extend\`&quot;">​</a></h2><p>Sass 提供 <code>@extend &lt;selector&gt;</code> 用于继承指定选择器的全部样式，同时会继承其组合选择器的样式</p><ul><li><code>@extend</code> 允许继承任意合法的选择器，通常用于继承 <code>class</code> 选择器</li><li><code>@extend</code> 允许在同一个选择器中被多次调用 <ul><li>后定义的样式享有优先权(按照被继承样式定义顺序而非继承时的调用顺序)</li><li>可以使用逗号分隔选择器进行简写，如 <code>@extend .a, .b</code></li></ul></li><li><code>@extend</code> 允许连续继承</li><li><code>@extend</code> 不支持选择器列，如 <code>.foo .bar</code> 或 <code>.foo + .bar</code></li><li><code>@extend</code> 继承一个选择器列中的某个元素 <ul><li>应当避免这种情况的使用</li><li>如果未包含相同的选择器则生成两个新的选择器 <ul><li>第一列出现在第二列之前</li><li>第二列出现在第一列之前</li></ul></li><li>如果两个列包含相同的选择器，相同部分将合并，其他部分交替输出</li></ul></li><li>占位符选择器 <ul><li>格式: <code>%selector</code> ，类似于 <code>id</code> 和 <code>class</code> 选择器，但自身不会被编译到 css 中</li><li>使用: 通过 <code>@extend</code> 使用</li></ul></li><li><code>!optional</code> 声明 <ul><li>当 <code>@extend</code> 继承一个不存在的选择器时，编译将报错</li><li>使用该声明将忽略错误处理</li><li>示例: <code>@extend .inexistent !optional</code></li></ul></li><li>一些限制: 不允许将 <code>@media</code> 层外的 css 规则在 <code>@media</code> 层内使用</li></ul><p>示例</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">%normal</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#FFCB6B;">%large</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#FFCB6B;">.card</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@extend </span><span style="color:#FFCB6B;">%normal</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">&amp;</span><span style="color:#C792EA;">:hover</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;font-style:italic;">px</span><span style="color:#A6ACCD;"> solid grey</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">.img</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">cursor</span><span style="color:#A6ACCD;">: pointer</span></span>
<span class="line"><span style="color:#FFCB6B;">.card-large</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@extend </span><span style="color:#FFCB6B;">.card</span><span style="color:#676E95;font-style:italic;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">%large</span></span></code></pre></div><p>编译为</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-large</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-large</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-large</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid grey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-large</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pointer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="mixin-与-include" tabindex="-1"><code>@mixin</code> 与 <code>@include</code> <a class="header-anchor" href="#mixin-与-include" aria-label="Permalink to &quot;\`@mixin\` 与 \`@include\`&quot;">​</a></h2><p>该指令为混合指令，用于定义可重复使用的样式，用于避免无语义的 class</p><ul><li>定义与引用 <ul><li><code>@mixin</code> 用于定义一组混合样式 <ul><li>无参数定义: <code>@mixin mixinName</code></li><li>含参数定义: <code>@mixin mixinName($attr1: &lt;default&gt;, $attr2, ...)</code>，可以指定默认值</li></ul></li><li><code>@include</code> 用于引用一组混合样式 <ul><li>无参数引用: <code>@include mixinName</code></li><li>传参数引用 <ul><li>按顺序传参: <code>@include mixinName($val1, $val2, ...)</code></li><li>按关键字传参: <code>@include mixinName($attr: $val, $att2: $val2)</code>，可打乱顺序</li></ul></li></ul></li></ul></li><li>导入内容 <ul><li><code>@mixin</code> 中可以使用 <code>@content</code> 标志需要导入样式的地方(类似于 vue 中 slot 标签)</li><li><code>@include</code> 中可以使用换行(scss 则使用花括号)添加导入的内容</li></ul></li><li>使用注意 <ul><li><code>@mixin</code><ul><li>混合样式中允许使用 <code>&amp;</code>引用父选择器，但应当只定义后代选择器</li><li><code>@mixin</code> 定义混合样式中可以 <code>@include</code> 其他混合样式</li></ul></li><li><code>@include</code><ul><li>可以在最外层引用混合样式 <ul><li>不可直接定义属性，需要混合样式中指定选择器</li><li>不可使用父选择器</li></ul></li></ul></li><li>传递参数为 list 时，使用 <code>$attr...</code> 进行处理，此时会将 <code>$attr</code> 视为 list</li></ul></li><li>使用简写 <ul><li><code>@mixin mixName</code> 可以简写为 <code>=mixName</code> 这里可以有空格</li><li><code>@include mixName</code> 可以简写为 <code>+mixName</code> 这里不能有空格</li></ul></li></ul><p>示例</p><div class="language-sass"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#82AAFF;"> equidistance-margin(</span><span style="color:#A6ACCD;">$vertial: </span><span style="color:#F78C6C;">0</span><span style="color:#676E95;font-style:italic;">,</span><span style="color:#A6ACCD;"> $horizontal: auto</span><span style="color:#82AAFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">top</span><span style="color:#A6ACCD;">: $vertial</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">bottom</span><span style="color:#A6ACCD;">: $vertial</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#A6ACCD;">: $horizontal</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">right</span><span style="color:#A6ACCD;">: $horizontal</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@content</span></span>
<span class="line"><span style="color:#FFCB6B;">.rect</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#82AAFF;"> equidistance-margin(</span><span style="color:#A6ACCD;">$horizontal: </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;font-style:italic;">px</span><span style="color:#82AAFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#A6ACCD;">: red</span></span></code></pre></div><p>编译为</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,15),e=[p];function c(t,i,r,C,y,D){return l(),a("div",null,e)}const A=s(o,[["render",c]]);export{d as __pageData,A as default};
