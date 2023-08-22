import{_ as l,v as e,b as i,R as o}from"./chunks/framework.ecc14119.js";const c="/assets/flex-box.46866614.png",m=JSON.parse('{"title":"弹性容器模型","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/css/06 弹性布局.md","filePath":"程序/前端基础/css/06 弹性布局.md","lastUpdated":1688486445000}'),d={name:"程序/前端基础/css/06 弹性布局.md"},a=o('<h1 id="弹性容器模型" tabindex="-1">弹性容器模型 <a class="header-anchor" href="#弹性容器模型" aria-label="Permalink to &quot;弹性容器模型&quot;">​</a></h1><p><img src="'+c+'" alt="flex-box.png"></p><ul><li>弹性容器(flex container): 采用 <code>flex</code> 布局的父级元素</li><li>弹性项目(flex item): 弹性容器内的子元素，或称 弹性元素</li><li>主轴(main axis): 弹性容器中弹性元素的主要布局方向</li><li>主轴起点(main start)、主轴终点(main end): 弹性容器中弹性元素在主轴上被放置的位置区域</li><li>主轴尺寸(main size): 弹性元素在主轴区域内的长度</li><li>侧轴(cross axis): 垂直于主轴的轴</li><li>侧轴起点(cross start)、侧轴终点(cross end): 弹性容器中弹性元素在侧轴上被放置的位置区域</li><li>侧轴尺寸(cross size): 弹性元素在侧轴区域内的长度</li></ul><h2 id="设置元素为弹性容器" tabindex="-1">设置元素为弹性容器 <a class="header-anchor" href="#设置元素为弹性容器" aria-label="Permalink to &quot;设置元素为弹性容器&quot;">​</a></h2><ul><li>说明 <ul><li>通过指定 <code>display: flex;</code> 设置元素为块级弹性容器</li><li>通过指定 <code>display: inline-flex;</code> 设置元素为行内弹性容器</li></ul></li><li>注意 <ul><li>指定元素为弹性容器后，其弹性元素的 <code>float</code>、<code>clear</code>、<code>vertical-align</code> 属性将失效</li></ul></li></ul><h2 id="弹性容器属性" tabindex="-1">弹性容器属性 <a class="header-anchor" href="#弹性容器属性" aria-label="Permalink to &quot;弹性容器属性&quot;">​</a></h2><h3 id="flex-direction" tabindex="-1"><code>flex-direction</code> <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;`flex-direction`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性容器的主轴方向</li></ul></li><li>取值 <ul><li><code>row</code>: 主轴为水平轴，<strong>方向同文本方向</strong></li><li><code>row-reverse</code>: 主轴为水平轴，<strong>方向逆文本方向</strong></li><li><code>column</code>: 主轴为垂直轴，方向为自上而下</li><li><code>column-reverse</code>: 主轴为垂直轴，方向为自下而上</li></ul></li><li>默认 <ul><li><code>row</code></li></ul></li><li>注意 <ul><li>弹性容器的文本方向可以通过 <code>dir</code> 属性控制，其值为 <code>ltr</code> (从左向右) 或 <code>rtl</code> (从右向左)，默认为 <code>ltr</code></li><li>当指定主轴为 <code>row</code> 或 <code>row-reverse</code> 时，<strong>主轴</strong>方向依据于弹性容器的文本方向</li><li>当指定主轴为 <code>column</code> 或 <code>column-reverse</code> 时，<strong>侧轴</strong>方向依据于弹性容器的文本方向</li></ul></li></ul><h3 id="flex-wrap" tabindex="-1"><code>flex-wrap</code> <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;`flex-wrap`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性容器是否允许多行显示以及允许多行下的行堆叠方向</li></ul></li><li>取值 <ul><li><code>nowrap</code>: 不换行</li><li><code>wrap</code>: 弹性元素若溢出则换行，方向同侧轴方向</li><li><code>wrap-reverse</code>: 弹性元素溢出换行，方向逆侧轴方向</li></ul></li><li>默认 <ul><li><code>nowrap</code></li></ul></li><li>注意 <ul><li>指定为 <code>nowrap</code> 时，若弹性元素主轴尺寸之和超出主轴长度，则进行收缩处理</li><li>收缩时按照 <code>flex-shrink</code> 属性进行收缩</li><li>若收缩时达到文本内容最小填充尺寸，则该收缩元素停止收缩</li></ul></li></ul><h3 id="flex-flow" tabindex="-1"><code>flex-flow</code> <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;`flex-flow`&quot;">​</a></h3><ul><li>说明 <ul><li>该属性为 <code>flex-direction</code> 和 <code>flex-wrap</code> 的复合属性</li></ul></li><li>取值 <ul><li><code>&lt;direction&gt; &lt;wrap&gt;</code></li></ul></li><li>默认 <ul><li><code>row nowrap</code></li></ul></li></ul><h3 id="justify-content" tabindex="-1"><code>justify-content</code> <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;`justify-content`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性容器中每一行弹性元素在主轴上的对齐方式</li></ul></li><li>取值 <ul><li><code>flex-start</code>: 对齐方向为 主轴起点 向 主轴终点</li><li><code>flex-end</code>: 对齐方向为 主轴终点 向 主轴起点</li><li><code>center</code>: 对齐方式为 居中对齐</li><li><code>space-between</code>: 对齐方式为 两端对齐。相邻弹性元素间距相同，每行首位元素与行首对齐，末位元素与行尾对齐</li><li><code>space-around</code>: 指齐方式为 均匀分布。相邻弹性元素间距相同，每行首位元素与行首的间距和末位元素与行尾的间距为相邻元素间距的一半</li></ul></li><li>默认 <ul><li><code>flex-start</code></li></ul></li></ul><h3 id="align-content" tabindex="-1"><code>align-content</code> <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;`align-content`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性容器中<strong>多行</strong>在侧轴上的对齐方式，<strong>不适用于单行弹性容器</strong></li></ul></li><li>取值 <ul><li><code>flex-start</code>: 对齐方向为 侧轴起点 向 侧轴终点</li><li><code>flex-end</code>: 对齐方向为 测轴终点 向 测轴起点</li><li><code>center</code>: 对齐方式为 居中对齐</li><li><code>space-between</code>: 对齐方式为 两端对齐。相邻行间距相同，首行与侧轴起点对齐，末行与侧轴终点对齐</li><li><code>space-around</code>: 对齐方式为 均匀分布。相邻行间距相同，首行与侧轴起点的间距和末行与侧轴终点的间距为相邻行间距的一半</li><li><code>stretch</code>: 拉伸所有行以填满剩余空间，剩余空间均分给每一行</li></ul></li><li>默认 <ul><li><code>stretch</code></li></ul></li></ul><h3 id="align-items" tabindex="-1"><code>align-items</code> <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;`align-items`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性容器中每一行弹性元素在侧轴上的对齐方式</li></ul></li><li>取值 <ul><li><code>flex-start</code>: 对齐方向为 测轴起点 向 测轴终点</li><li><code>flex-end</code>: 对齐方向为 测轴终点 向 测轴起点</li><li><code>center</code>: 对齐方式为 居中对齐。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。</li><li><code>baseline</code>: 对齐方式为 基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。</li><li><code>stretch</code>: 指定弹性元素当前行上沿侧轴方向被拉伸到与该行相同的高度或宽度。</li></ul></li><li>默认 <ul><li><code>stretch</code></li></ul></li></ul><h2 id="弹性元素属性" tabindex="-1">弹性元素属性 <a class="header-anchor" href="#弹性元素属性" aria-label="Permalink to &quot;弹性元素属性&quot;">​</a></h2><h3 id="order" tabindex="-1"><code>order</code> <a class="header-anchor" href="#order" aria-label="Permalink to &quot;`order`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性元素的布局顺序，数值越小，排序越前，同值弹性元素依照 DOM 中的顺序排列</li></ul></li><li>取值 <ul><li><code>&lt;integer&gt;</code>: 整数</li></ul></li><li>默认 <ul><li><code>0</code></li></ul></li></ul><h3 id="align-self" tabindex="-1"><code>align-self</code> <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;`align-self`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性元素在当前行上沿侧轴的对齐方式，</li><li>该属性会覆盖弹性容器中 <code>align-items</code> 的效果，</li><li>若任何弹性元素的<strong>侧轴方向</strong>的 <code>margin</code> 设置为 <code>auto</code>，则忽略该属性</li></ul></li><li>取值 <ul><li><code>auto</code>: 指定为父元素的 <code>align-items</code> 值，若无父元素则设置为 <code>stretch</code></li><li><code>flex-start</code>: 对齐方向为 测轴起点 向 测轴终点</li><li><code>flex-end</code>: 对齐方向为 测轴终点 向 测轴起点</li><li><code>center</code>: 对齐方式为 居中对齐。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。</li><li><code>baseline</code>: 对齐方式为 基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。</li><li><code>stretch</code>: 指定弹性元素当前行上沿侧轴方向被拉伸到与该行相同的高度或宽度。</li></ul></li><li>默认 <ul><li><code>auto</code></li></ul></li></ul><h3 id="flex-grow" tabindex="-1"><code>flex-grow</code> <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;`flex-grow`&quot;">​</a></h3><ul><li>说明 <ul><li>如果主轴存在剩余空间，则按照该属性值对剩余空间进行划分，弹性元素在主轴上进行响应的拉伸</li><li>弹性元素主轴尺寸获得的尺寸为 <code>(grow/sum(grow)) * 主轴剩余尺寸</code></li><li>拉伸的尺寸与当前弹性元素自身主轴尺寸无关</li></ul></li><li>取值 <ul><li><code>&lt;num&gt;</code>: 非负数</li></ul></li><li>默认 <ul><li><code>0</code>: 表示即使存在剩余空间也不会进行拉伸</li></ul></li></ul><h3 id="flex-shrink" tabindex="-1"><code>flex-shrink</code> <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;`flex-shrink`&quot;">​</a></h3><ul><li>说明 <ul><li>当弹性元素默认主轴尺寸之和大于容器主轴长度时，弹性元素在主轴上进行收缩</li><li>收缩的尺寸为 <code>(main size * shrink / sum(main size * shrink)) * 超出尺寸</code></li><li>收缩的尺寸与元素自身主轴尺寸有关</li><li>弹性容器需指定为 <code>wrap: nowrap</code></li></ul></li><li>取值 <ul><li><code>&lt;num&gt;</code> 正数</li></ul></li><li>默认 <ul><li><code>1</code></li></ul></li></ul><h3 id="flex-basis" tabindex="-1"><code>flex-basis</code> <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;`flex-basis`&quot;">​</a></h3><ul><li>说明 <ul><li>指定弹性元素在主轴上的初始大小</li><li>该值会替代弹性元素宽度或高度(取决于主轴方向)</li></ul></li><li>取值 <ul><li><code>auto</code>: 同元素尺寸</li><li><code>&lt;num&gt;&lt;unit&gt;</code>: 自定义值。 num 为非负数，unit 为单位</li></ul></li><li>默认 <ul><li><code>auto</code></li></ul></li></ul><h3 id="flex" tabindex="-1"><code>flex</code> <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;`flex`&quot;">​</a></h3><ul><li>说明 <ul><li>该值为 <code>flex-grow</code>、<code>flex-shrink</code>、<code>flex-basis</code> 的复合属性</li></ul></li><li>取值 <ul><li><code>&lt;grow&gt; &lt;shrink&gt; &lt;basis&gt;</code></li><li><code>auto</code>: 相当于 <code>flex: 1 1 auto;</code></li><li><code>initial</code>: 相当于 <code>flex: 0 1 auto;</code></li><li><code>none</code>: 相当于 <code>flex: 0 0 auto;</code></li></ul></li><li>默认 <ul><li><code>0 1 auto</code></li></ul></li></ul>',31),t=[a];function r(n,u,s,h,f,x){return e(),i("div",null,t)}const b=l(d,[["render",r]]);export{m as __pageData,b as default};
