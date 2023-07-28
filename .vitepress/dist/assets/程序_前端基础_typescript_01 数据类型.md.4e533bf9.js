import{_ as a,o as e,c as s,V as l}from"./chunks/framework.3b22bc79.js";const y=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"程序/前端基础/typescript/01 数据类型.md","filePath":"程序/前端基础/typescript/01 数据类型.md","lastUpdated":1687190476000}'),t={name:"程序/前端基础/typescript/01 数据类型.md"},o=l('<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><p>typescript 通过使用类型注解对变量和函数进行类型约束，如</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> PI</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>这里通过 <code>Varible: Type</code> 的格式限定了变量的类型</p><h2 id="类型约束" tabindex="-1">类型约束 <a class="header-anchor" href="#类型约束" aria-label="Permalink to &quot;类型约束&quot;">​</a></h2><p>typescript 使用类型对变量进行类型约束，被约束的变量值需要满足约束条件；</p><p>typescript 支持与 javascript 相同的数据类型，支持 es6 新增数据类型，同时提供了额外的数据类型；</p><h2 id="类型分类" tabindex="-1">类型分类 <a class="header-anchor" href="#类型分类" aria-label="Permalink to &quot;类型分类&quot;">​</a></h2><p>主要分为以下几类</p><ul><li>基本类型 <ul><li>包括 js 的基本类型和 ts 扩展的类型</li><li>几种特殊类型 <ul><li><code>never</code>: 用于描述不能存在的类型</li><li><code>any</code>: 用于描述任意类型</li></ul></li></ul></li><li>引用类型 <ul><li>数组类型：包括 js 的数组类型、 es6 的扩展和 ts 的扩展</li><li>对象类型：包括 对象、函数、类</li></ul></li><li>泛型</li><li>高级类型</li><li>其他类型：整理至基本类型中</li></ul>',10),p=[o];function i(n,c,r,d,_,h){return e(),s("div",null,p)}const C=a(t,[["render",i]]);export{y as __pageData,C as default};
