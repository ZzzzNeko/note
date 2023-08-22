import{_ as i,v as a,b as o,R as t,F as l,L as e}from"./chunks/framework.ecc14119.js";const x=JSON.parse('{"title":"图形语法","description":"","frontmatter":{},"headers":[],"relativePath":"程序/可视化库/g2/01 图形语法.md","filePath":"程序/可视化库/g2/01 图形语法.md","lastUpdated":1691395408000}'),s={name:"程序/可视化库/g2/01 图形语法.md"},c=t('<h1 id="图形语法" tabindex="-1">图形语法 <a class="header-anchor" href="#图形语法" aria-label="Permalink to &quot;图形语法&quot;">​</a></h1><p>图表是数据到集合对象图形属性的一种映射</p><p>G2 中构建图表由一系列独立的图形语法元素组成</p><ul><li>数据</li><li>图形属性：负责将数据中的变量映射至图形空间</li><li>几何标记：图形元素，如 点、线、多边形</li><li>度量：数据到图形属性的转换</li><li>坐标系</li><li>可视化组件：辅助元素，如 图例、坐标轴、提示、滑动条等</li><li>分面：如何将数据分解为子集，用于多维数据分析</li></ul><h2 id="视觉通道" tabindex="-1">视觉通道 <a class="header-anchor" href="#视觉通道" aria-label="Permalink to &quot;视觉通道&quot;">​</a></h2><p>可视化编码是将数据映射为可视化元素的过程，由两部分组成</p><ul><li>几何标记：用何种几何图形多数据进行展示，该部分用于确定展示的方式，如 点、线、面、体</li><li>视觉通道：数据数值转换为可视元素的属性，该部分用于量化数据的表现，如 大小、方向、色彩</li></ul><p>针对视觉通道的描述采用以下属性</p><ul><li><code>position</code></li><li><code>size</code></li><li><code>color</code></li><li><code>shape</code></li></ul>',9),d=l("p",null,[e("视觉通道的语法格式为 "),l("code",{js:""},"chart.<geomType>().<attrType>(dims[, callback])")],-1),n=l("ul",null,[l("li",null,[l("code",null,"geom"),e(": 图表类型")]),l("li",null,[l("code",null,"attr"),e(": 图表属性")]),l("li",null,[l("code",null,"dims"),e(": 参与单个视觉通道映射的字段")]),l("li",null,[l("code",null,"callback"),e(": 自定义解析方式")])],-1),r=[c,d,n];function u(_,p,h,m,f,b){return a(),o("div",null,r)}const k=i(s,[["render",u]]);export{x as __pageData,k as default};
