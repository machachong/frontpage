import{e as _,j as f,C as n,p as a,ac as c,aB as u,o as E}from"./index-Cq0hu8dX.js";import{E as v}from"./el-button-BAG-mleq.js";import{E as y}from"./el-card-Iip8AZ5C.js";import{L as p,v as m}from"./el-loading-DGAnjgXW.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C_5UEoYW.js";import"./use-form-common-props-DOUBQZCF.js";const C={install(e){e.directive("loading",m),e.config.globalProperties.$loading=p},directive:m,service:p},x={lock:!0,text:"加载中..."},g=(e,t={})=>{let r;return async(...i)=>{try{return r=C.service({...x,...t}),await e(...i)}finally{r.close()}}},L={code:0,data:{list:[]},message:"获取成功"};function S(e){return new Promise(t=>{setTimeout(()=>{t({...L,data:{list:e}})},1e3)})}function k(){return new Promise((e,t)=>{setTimeout(()=>{t(new Error("发生错误"))},1e3)})}const A={class:"app-container"},b=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,T=_({__name:"use-fullscreen-loading",setup(e){const t={text:"即将发生错误...",background:"#F56C6C20",svg:b,svgViewBox:"-10, -10, 50, 50"};async function r(){const s=await g(S)([1,2,3]);u.success(`${s.message}，传参为 ${s.data.list.toString()}`)}async function i(){try{await g(k,t)()}catch(s){u.error(s.message)}}return(s,o)=>{const l=y,d=v;return E(),f("div",A,[n(l,{shadow:"never"},{default:a(()=>o[0]||(o[0]=[c(" 该示例是演示：通过将要执行的函数传递给 composable，让 composable 自动开启全屏 loading，函数执行结束后自动关闭 loading ")])),_:1}),n(l,{header:"示例",shadow:"never"},{default:a(()=>[n(d,{type:"primary",onClick:r},{default:a(()=>o[1]||(o[1]=[c(" 查询成功 ")])),_:1}),n(d,{type:"danger",onClick:i},{default:a(()=>o[2]||(o[2]=[c(" 查询失败 ")])),_:1})]),_:1})])}}}),M=w(T,[["__scopeId","data-v-d330363c"]]);export{M as default};
