(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{373:function(t,e,r){"use strict";r.r(e);r(180);var n=r(356),i=r.n(n),a={name:"Mermaid",data:function(){return{chartDom:null,markdown:""}},methods:{render:function(){var t=this.$slots.default[0].text;this.markdown.trim()!=t.trim()&&(this.chartDom.innerHTML=t,this.chartDom.removeAttribute("data-processed"),i.a.init(".mermaid"))}},mounted:function(){this.chartDom=this.$refs.chart,this.render()},updated:function(){this.render()}},s=r(25),o=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart",staticClass:"mermaid"})}),[],!1,null,null,null);e.default=o.exports}}]);