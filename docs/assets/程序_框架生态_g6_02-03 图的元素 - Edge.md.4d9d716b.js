import{_ as s,o as n,c as a,V as l}from"./chunks/framework.bbae8ef5.js";const i=JSON.parse('{"title":"图的元素 - Edge","description":"","frontmatter":{},"headers":[],"relativePath":"程序/框架生态/g6/02-03 图的元素 - Edge.md","filePath":"程序/框架生态/g6/02-03 图的元素 - Edge.md","lastUpdated":1688196095000}'),o={name:"程序/框架生态/g6/02-03 图的元素 - Edge.md"},p=l(`<h1 id="图的元素-edge" tabindex="-1">图的元素 - Edge <a class="header-anchor" href="#图的元素-edge" aria-label="Permalink to &quot;图的元素 - Edge&quot;">​</a></h1><h2 id="通用属性" tabindex="-1">通用属性 <a class="header-anchor" href="#通用属性" aria-label="Permalink to &quot;通用属性&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EdgeStyle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stroke</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 边的颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineWidth</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 边的宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineAppendWidth</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 边的检测宽度，用于提高鼠标事件命中范围</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">endArrow</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arrow</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可以自定义 \`Arrow { path-路径, d-偏移量 }\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">startArrow</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arrow</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可以自定义 \`Arrow { path-路径, d-偏移量 }\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">strokeOpacity</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 边透明度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shadowColor</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shadowBlur</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 阴影范围</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shadowOffsetX</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shadowOffsetY</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineDash</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#676E95;font-style:italic;">// [实线长度, 虚线长度]</span></span>
<span class="line"><span style="color:#A6ACCD;">  cursor</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> string  </span><span style="color:#676E95;font-style:italic;">// 同 css cursor</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface Config </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  source?</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string  </span><span style="color:#676E95;font-style:italic;">// 起点 node id，若指定图类型或布局，可以省略</span></span>
<span class="line"><span style="color:#A6ACCD;">  target</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string  </span><span style="color:#676E95;font-style:italic;">// 终点 noed id，若指定图类型或布局，可以省略</span></span>
<span class="line"><span style="color:#A6ACCD;">  id</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string      </span><span style="color:#676E95;font-style:italic;">// 唯一</span></span>
<span class="line"><span style="color:#A6ACCD;">  type</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string   </span><span style="color:#676E95;font-style:italic;">// 边类型，支持 内置 Edge 类型 或 自定义 Edge，默认 &#39;line&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  sourceAnchor</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number </span><span style="color:#676E95;font-style:italic;">// 起点 node 的锚点索引</span></span>
<span class="line"><span style="color:#A6ACCD;">  targetAnchor</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number </span><span style="color:#676E95;font-style:italic;">// 终点 node 的锚点索引</span></span>
<span class="line"><span style="color:#A6ACCD;">  style</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> EdgeStyle</span></span>
<span class="line"><span style="color:#A6ACCD;">  color</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string  </span><span style="color:#676E95;font-style:italic;">// 优先级低于 \`style.stroke\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  label</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 文本</span></span>
<span class="line"><span style="color:#A6ACCD;">  labelCfg</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    refX?</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number </span><span style="color:#676E95;font-style:italic;">// label 在x轴偏移量</span></span>
<span class="line"><span style="color:#A6ACCD;">    refY</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number </span><span style="color:#676E95;font-style:italic;">// label 在y轴偏移量</span></span>
<span class="line"><span style="color:#A6ACCD;">    position</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 默认 &#39;center&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoRotate</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean </span><span style="color:#676E95;font-style:italic;">// 跟随边旋转，默认 false</span></span>
<span class="line"><span style="color:#A6ACCD;">    style</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> LabelStyle </span><span style="color:#676E95;font-style:italic;">// 参见 Shape 通用属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="配置-edge" tabindex="-1">配置 Edge <a class="header-anchor" href="#配置-edge" aria-label="Permalink to &quot;配置 Edge&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 配置默认 Edge，其配置内容会被 data 中数据替换</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> graph </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> G6</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Graph</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultEdge: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 默认 Edge，包含部分配置项</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 数据中进行配置, 优先级高于 \`defaultEdge\` 且配置项完整</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nodes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">edges</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">(data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 通过方法包装，优先级最高，将覆盖已有的 edge 配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 该方法需要在 \`.render()\` 之前调用；该方法在增加元素、更新元素时会被调用</span></span>
<span class="line"><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">edge</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">edge</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> edge</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">polyline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="内置-edge" tabindex="-1">内置 Edge <a class="header-anchor" href="#内置-edge" aria-label="Permalink to &quot;内置 Edge&quot;">​</a></h2><table><thead><tr><th>类型</th><th>名称</th><th>controlPoints</th><th>其他属性</th></tr></thead><tbody><tr><td>line</td><td>直线</td><td>无</td><td>无</td></tr><tr><td>polyline</td><td>折线</td><td>默认在线段拐点处</td><td><code>style.radius</code>、<code>style.offset</code>、<code>routeCfg: RouteCfg</code></td></tr><tr><td>arc</td><td>圆弧</td><td>无</td><td><code>curveOffset: number</code>(可理解为弧度, 默认 20)</td></tr><tr><td>quadratic</td><td>二次贝塞尔曲线</td><td>默认在中点弯曲处</td><td><code>curveOffset: number|number[]</code>、<code>curvePosition: number|number[]</code></td></tr><tr><td>cubic</td><td>三次贝塞尔曲线</td><td>默认在 1/3 和 2/3 弯曲处</td><td><code>curveOffset: number|number[]</code>、<code>curvePosition: number|number[]</code>、<code>minCurveOffset: number|number[]</code></td></tr><tr><td>cubic-vertical</td><td>三次贝塞尔曲线-垂直</td><td>默认在 1/3 和 2/3 弯曲处</td><td><code>curveOffset: number|number[]</code>、<code>curvePosition: number|number[]</code>、<code>minCurveOffset: number|number[]</code></td></tr><tr><td>cubic-horizontal</td><td>三次贝塞尔曲线-水平</td><td>默认在 1/3 和 2/3 弯曲处</td><td><code>curveOffset: number|number[]</code>、<code>curvePosition: number|number[]</code>、<code>minCurveOffset: number|number[]</code></td></tr><tr><td>loop</td><td>自环(起止点相同)</td><td>无</td><td><code>loopCfg: LoopCfg</code></td></tr></tbody></table><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 控制点，不指定时自动生成</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ControlPoints</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 路径配置，type 为 &#39;polyline&#39; 生效</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RouteCfg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gridSize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 计算折现的网格大小， 默认 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">maxAllowedDirectionChange</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 允许的最大转角，默认 Math.Pi/2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">obstacles</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INode</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 需要躲避的障碍节点</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 自环配置，type 为 &#39;loop&#39; 生效</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LoopCfg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">?:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top-left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top-right</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom-left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom-right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 自环相对节点的位置，默认 &#39;top&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dist</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 自环的大小，默认为节点的高度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">clockwise</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 顺时针，默认 true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pointPaddiing</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 偏移量，默认 节点宽高最小值/4</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="内置-arrow" tabindex="-1">内置 Arrow <a class="header-anchor" href="#内置-arrow" aria-label="Permalink to &quot;内置 Arrow&quot;">​</a></h2><table><thead><tr><th>名称</th><th>形状</th><th>用法(示例为默认值)</th><th>参数(顺序)</th></tr></thead><tbody><tr><td>triangle</td><td>三角</td><td><code>{ path: G6.Arrow.triangle(10, 20, 0), d: 0 }</code></td><td>箭头宽度、长度、偏移量</td></tr><tr><td>vee</td><td>V 型</td><td><code>{ path: G6.Arrow.vee(15, 20, 0), d: 0 }</code></td><td>箭头宽度、长度、偏移量</td></tr><tr><td>circle</td><td>原点</td><td><code>{ path: G6.Arrow.triangle(5, 0), d: 0 }</code></td><td>箭头半径、偏移量</td></tr><tr><td>diamond</td><td>菱形</td><td><code>{ path: G6.Arrow.diamond(15, 15, 0), d: 0 }</code></td><td>箭头宽度、长度、偏移量</td></tr><tr><td>rect</td><td>矩形</td><td><code>{ path: G6.Arrow.rect(10, 10, 0), d: 0 }</code></td><td>箭头宽度、长度、偏移量</td></tr><tr><td>triangleRect</td><td><code>〡&gt;</code></td><td><code>{ path: G6.Arrow.triangle(15, 15, 15, 3, 5, 0), d: 0 }</code></td><td>箭头三角宽度、三角长度、矩形宽度、矩形长度、间距、偏移量</td></tr></tbody></table><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`style.startArrow\` 或 \`style.endArrow\` 指定为 \`true\` 时使用默认箭头及配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arrow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * NOTE: 经测试,通过 \`Arrow\` 绘制时传入的偏移量是 \`d\` 的 2 倍(与文档相悖，疑似 bug)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`Arrow\` 中偏移量的方向与 \`d\` 相反</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可通过内置 \`Arrow\` 进行绘制, 或传入自定义 \`svg\` 的 \`path\` 值；</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 偏移量</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stroke</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fill</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineDash</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">strokeOpacity</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">opacity</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fillOpacity</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),t=[p];function e(c,r,y,D,C,F){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{i as __pageData,d as default};
