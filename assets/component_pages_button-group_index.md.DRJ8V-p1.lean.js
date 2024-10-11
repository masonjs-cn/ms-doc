import{_ as o,c as s,j as a,a as n,G as D,aP as A,B as l,o as E}from"./chunks/framework.UKNQUgmq.js";const i=JSON.parse('{"title":"按钮组","description":"","frontmatter":{},"headers":[],"relativePath":"component/pages/button-group/index.md","filePath":"component/pages/button-group/index.md"}'),C={name:"component/pages/button-group/index.md"};function p(F,t,d,k,r,c){const e=l("demo");return E(),s("div",null,[t[0]||(t[0]=a("h1",{id:"按钮组",tabindex:"-1"},[n("按钮组 "),a("a",{class:"header-anchor",href:"#按钮组","aria-label":'Permalink to "按钮组"'},"​")],-1)),t[1]||(t[1]=a("p",null,"常用的操作按钮。",-1)),t[2]||(t[2]=a("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),D(e,{src:"../../demo/button-group.vue",desc:"使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。",codeStr:"%3Ctemplate%3E%0A%20%20%20%20%3Cms-button-group%20%3Aoption%3D%22btnOptions%22%20%40updateEvent%3D%22updateEvent%22%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20h%20%7D%20from%20'vue'%0A%0Aconst%20updateEvent%20%3D%20(key%3A%20string)%20%3D%3E%20%7B%0A%20%20console.log(key)%0A%7D%0A%0Aconst%20btnOptions%20%3D%20reactive(%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E7%BC%96%E8%BE%91'%2C%0A%20%20%20%20key%3A%20'edit'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%A0%E9%99%A4'%2C%0A%20%20%20%20key%3A%20'del'%2C%0A%20%20%20%20type%3A%20'error'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%9D%83%E9%99%90'%2C%0A%20%20%20%20key%3A%20'edit2'%2C%0A%20%20%20%20hide%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%8F%92%E6%A7%BD'%2C%0A%20%20%20%20key%3A%20'edit2'%2C%0A%20%20%20%20slots%3A%20true%2C%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20h(%0A%20%20%20%20%20%20%20%20NButton%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'info'%2C%0A%20%20%20%20%20%20%20%20%20%20quaternary%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20size%3A%20'small'%2C%0A%20%20%20%20%20%20%20%20%20%20onClick%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(2)%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20default%3A%20()%20%3D%3E%20'Play'%20%7D%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%7D%0A%5D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%3E%3C%2Fstyle%3E%0A",htmlStr:"%3Cpre%20class%3D%22shiki%20material-theme-palenight%22%20style%3D%22background-color%3A%23292D3E%3Bcolor%3A%23babed8%22%20tabindex%3D%220%22%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%221%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A1%3A0%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A1%3A1%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A1%3A9%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%222%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A0%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A2%3A5%22%3Ems-button-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A20%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A2%3A22%22%3Eoption%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A28%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A29%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A2%3A30%22%3EbtnOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A40%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A41%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A2%3A43%22%3EupdateEvent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A54%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A55%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A2%3A56%22%3EupdateEvent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A67%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A68%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%223%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A3%3A0%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A3%3A2%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A3%3A10%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%224%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%225%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A0%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A5%3A1%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A5%3A7%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A12%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A13%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A5%3A14%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A16%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A5%3A17%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A23%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%226%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A6%3A0%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A6%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A6%3A8%22%3E%20reactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A17%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A6%3A18%22%3E%20h%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A20%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A6%3A22%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A27%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A6%3A29%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A32%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%227%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%228%22%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A8%3A0%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A8%3A5%22%3E%20updateEvent%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A18%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A19%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A8%3A21%22%3Ekey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A24%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFCB6B%22%20data-token%3D%22token%3A8%3A25%22%3E%20string%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A32%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A8%3A33%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A36%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%229%22%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A9%3A0%22%3E%20%20console%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A9%3A9%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A9%3A10%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A9%3A13%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A9%3A14%22%3Ekey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A9%3A17%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2210%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A10%3A0%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2211%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2212%22%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A12%3A0%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A12%3A5%22%3E%20btnOptions%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A12%3A17%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A12%3A18%22%3E%20reactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A12%3A27%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2213%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A13%3A0%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2214%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A14%3A0%22%3E%20%20%20%20label%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A14%3A9%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A14%3A10%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A14%3A12%22%3E%E7%BC%96%E8%BE%91%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A14%3A14%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A14%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2215%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A15%3A0%22%3E%20%20%20%20key%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A15%3A7%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A15%3A8%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A15%3A10%22%3Eedit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A15%3A14%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2216%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A16%3A0%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2217%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A17%3A0%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2218%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A18%3A0%22%3E%20%20%20%20label%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A18%3A9%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A18%3A10%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A18%3A12%22%3E%E5%88%A0%E9%99%A4%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A18%3A14%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A18%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2219%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A19%3A0%22%3E%20%20%20%20key%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A19%3A7%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A19%3A8%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A19%3A10%22%3Edel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A19%3A13%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A19%3A14%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2220%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A20%3A0%22%3E%20%20%20%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A20%3A8%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A20%3A9%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A20%3A11%22%3Eerror%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A20%3A16%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2221%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A21%3A0%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2222%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A22%3A0%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2223%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A23%3A0%22%3E%20%20%20%20label%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A23%3A9%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A23%3A10%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A23%3A12%22%3E%E6%9D%83%E9%99%90%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A23%3A14%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A23%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2224%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A24%3A0%22%3E%20%20%20%20key%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A24%3A7%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A24%3A8%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A24%3A10%22%3Eedit2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A24%3A15%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A24%3A16%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2225%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A25%3A0%22%3E%20%20%20%20hide%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A25%3A8%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FF9CAC%22%20data-token%3D%22token%3A25%3A9%22%3E%20true%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2226%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A26%3A0%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2227%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A27%3A0%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2228%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A28%3A0%22%3E%20%20%20%20label%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A28%3A9%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A28%3A10%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A28%3A12%22%3E%E6%8F%92%E6%A7%BD%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A28%3A14%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A28%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2229%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A29%3A0%22%3E%20%20%20%20key%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A29%3A7%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A29%3A8%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A29%3A10%22%3Eedit2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A29%3A15%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A29%3A16%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2230%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A30%3A0%22%3E%20%20%20%20slots%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A30%3A9%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FF9CAC%22%20data-token%3D%22token%3A30%3A10%22%3E%20true%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A30%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2231%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A31%3A0%22%3E%20%20%20%20render%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A31%3A10%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A31%3A12%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2232%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A32%3A0%22%3E%20%20%20%20%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A32%3A12%22%3E%20h%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A32%3A14%22%3E(%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2233%22%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A33%3A0%22%3E%20%20%20%20%20%20%20%20NButton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A33%3A15%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2234%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A34%3A0%22%3E%20%20%20%20%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2235%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A35%3A0%22%3E%20%20%20%20%20%20%20%20%20%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A35%3A14%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A35%3A15%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A35%3A17%22%3Einfo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A35%3A21%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A35%3A22%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2236%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A36%3A0%22%3E%20%20%20%20%20%20%20%20%20%20quaternary%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A36%3A20%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FF9CAC%22%20data-token%3D%22token%3A36%3A21%22%3E%20true%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A36%3A26%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2237%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A37%3A0%22%3E%20%20%20%20%20%20%20%20%20%20size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A37%3A14%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A37%3A15%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A37%3A17%22%3Esmall%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A37%3A22%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A37%3A23%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2238%22%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A38%3A0%22%3E%20%20%20%20%20%20%20%20%20%20onClick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A38%3A17%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A38%3A18%22%3E%20()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A38%3A21%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A38%3A24%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2239%22%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A39%3A0%22%3E%20%20%20%20%20%20%20%20%20%20%20%20console%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A39%3A19%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A39%3A20%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A39%3A23%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F78C6C%22%20data-token%3D%22token%3A39%3A24%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A39%3A25%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2240%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A40%3A0%22%3E%20%20%20%20%20%20%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2241%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A41%3A0%22%3E%20%20%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2242%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A0%22%3E%20%20%20%20%20%20%20%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A42%3A9%22%3E%20default%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A17%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A18%22%3E%20()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A42%3A21%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A24%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A42%3A26%22%3EPlay%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A30%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A42%3A31%22%3E%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2243%22%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A43%3A0%22%3E%20%20%20%20%20%20)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2244%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A44%3A0%22%3E%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2245%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A45%3A0%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2246%22%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A46%3A0%22%3E%5D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2247%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A47%3A0%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A47%3A2%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A47%3A8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2248%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2249%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A49%3A0%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A49%3A1%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A49%3A6%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A49%3A9%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A49%3A14%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%2250%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"%E4%BD%BF%E7%94%A8%20%3Ccode%3Etype%3C%2Fcode%3E%E3%80%81%3Ccode%3Eplain%3C%2Fcode%3E%E3%80%81%3Ccode%3Eround%3C%2Fcode%3E%20%E5%92%8C%20%3Ccode%3Ecircle%3C%2Fcode%3E%20%E6%9D%A5%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E7%9A%84%E6%A0%B7%E5%BC%8F%E3%80%82",codePath:"../../doc/component/demo/button-group.vue",language:"vue"}),t[3]||(t[3]=A('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">string</td><td style="text-align:left;">名称</td><td style="text-align:left;"></td></tr><tr><td>key</td><td style="text-align:center;">string</td><td style="text-align:left;">关键值</td><td style="text-align:left;"></td></tr><tr><td>quaternary</td><td style="text-align:center;">boolean</td><td style="text-align:left;">按钮样式</td><td style="text-align:left;">true</td></tr><tr><td>disabled</td><td style="text-align:center;">boolean</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">true</td></tr><tr><td>hide</td><td style="text-align:center;">boolean</td><td style="text-align:left;">是否可见</td><td style="text-align:left;">true</td></tr><tr><td>type</td><td style="text-align:center;">&#39;default&#39; | &#39;tertiary&#39; | &#39;primary&#39; | &#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</td><td style="text-align:left;">按钮类型</td><td style="text-align:left;">&#39;info&#39;</td></tr><tr><td>slots</td><td style="text-align:center;">boolean</td><td style="text-align:left;">是否开启自定义插槽</td><td style="text-align:left;">false</td></tr><tr><td>render</td><td style="text-align:center;">vue h()</td><td style="text-align:left;">渲染</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th style="text-align:center;">类型</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td>updateEvent</td><td style="text-align:center;">( key:string) =&gt; void</td><td style="text-align:right;">点击会回返回点击了哪一个按钮</td></tr></tbody></table>',4))])}const B=o(C,[["render",p]]);export{i as __pageData,B as default};
