(()=>{var e={2485:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var l=o.apply(null,a);l&&e.push(l)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.wp.components,o=window.wp.blocks;var r=a(2485),l=a.n(r);const c=window.wp.blockEditor,i=window.wp.compose,s=window.wp.data,d=window.wp.element,g=window.wp.hooks,u=({tabs:t=[]})=>{const[{currentTab:a},o]=(0,d.useState)({currentTab:!1});return(0,e.createElement)("div",{className:"gutenify-accordion-wrapper"},t.map((t=>{const r=t.label,l=a===t.name;let c="gutenify-accordion-item";return c+=l?" gutenify-accordion-item-active":"",(0,e.createElement)("div",{className:c,key:`gutenify-accordion-item-${t.name}`},(0,e.createElement)("button",{onClick:()=>{o({currentTab:a===t.name?"":t.name})},className:"gutenify-accordion-item-heading"},(0,e.createElement)("div",{className:"gutenify-accordion-item-heading-arrow"},(0,e.createElement)(n.Icon,{icon:l?"arrow-down-alt2":"arrow-right-alt2"})),(0,e.createElement)("div",{className:"gutenify-accordion-item-label"},(0,e.createElement)(r,null))),(0,e.createElement)("div",{className:"gutenify-accordion-item-content"}," ",t.cb()))})))},m=JSON.parse('{"name":"gutenify/faqs","rE":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{}},"initialOpenFirst":{"type":"boolean","default":false},"initialOpenAll":{"type":"boolean","default":true},"hasAccordion":{"type":"boolean","default":true},"gap":{"type":"string","default":"10px"}},"supports":{"html":true,"anchor":true,"align":["wide","full"]}}'),{name:p}=m,h={hookPrefix:"faqs",blockId:p.replace("/","--")},b="gutenify",v=window?.[`_${b}_vars`]?window[`_${b}_vars`]:{},{is_pro_activated:k,pro_account_url:C,pro_license_status:f,title:w,prefix:E,slug:_,authorWebSite:y,authorDemoWebSite:A,authorWebSiteProPage:$,defaultTheme:x,authorWebSiteSupport:B,plugin_directory_url:H,brand_color:M,plugin_main_version:V,documentationsURL:L,pro_title:Z,active_blocks:O,plugin_main_camel_case_name:S}=v,F=(v?.siteUrl?v.siteUrl:v.site_url,(0,t.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+$+'" target="_blank">',Z,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:S,pluginMainFunctionPrefix:"gutenify"}),{blockId:G}=h,{pluginMainSlug:T}=F;(0,g.addFilter)(`${T}--inspector-controls--${G}--content`,`${T}--inspector-controls--${G}--content--opitons`,((a,o)=>{const{attributes:r,setAttributes:l,updateInnerBlocks:c}=o,{initialOpenFirst:i,initialOpenAll:s,hasAccordion:g}=r;return[...a,(0,e.createElement)(d.Fragment,{key:`gutenify-block-${G}-options-tab-content-basic`},(0,e.createElement)(u,{tabs:[{name:"faqs",initialOpen:!0,label:()=>(0,t.__)("Faqs"),cb:()=>(0,e.createElement)(d.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Accordion"),checked:g,onChange:()=>{l({hasAccordion:!g})}}),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Open All FAQs"),checked:s,onChange:()=>{l({initialOpenAll:!s}),c(!s,i)}}),!s&&(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Open first FAQ"),checked:i,onChange:()=>{l({initialOpenFirst:!i}),c(s,!i)}}))}]}))]}));const I=window.lodash,N=t=>{const{clearable:a=!0}=t,{colors:o}=(0,s.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,e.createElement)(n.BaseControl,{label:t.label,id:"textcolor-1"},(0,e.createElement)(n.ColorPalette,{colors:o,value:t.value,onChange:e=>{t.onChange(e)},clearable:a}))},q=t=>{const{clearable:a=!0}=t,{colors:n,gradients:o}=(0,s.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,e.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,e.createElement)(c.__experimentalColorGradientControl,{label:t.label,colorValue:t.colorValue,gradientValue:t.gradientValue,colors:n,gradients:o,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:e=>{if((0,I.isEmpty)(e))return;const a={backgroundColor:e,backgroundGradient:void 0};t.onChange(a)},onGradientChange:e=>{if((0,I.isEmpty)(e))return;const a={backgroundGradient:e,backgroundColor:void 0};t.onChange(a)},clearable:!1}),a&&(0,e.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,e.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{t.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))};d.Component;const{blockId:P}=h,{pluginMainSlug:z}=F;(0,g.addFilter)(`${z}--inspector-controls--${P}--style`,`${z}--inspector-controls--${P}--style--options`,((a,o)=>{const{attributes:r,setAttributes:l}=o,{gap:c,blockAdvanceOptions:i}=r,{header:s,content:g,border:m}=i;return[...a,(0,e.createElement)(d.Fragment,{key:`gutenify-block-${P}-options-tab-content-basic`},(0,e.createElement)(u,{tabs:[{name:"faq-style",initialOpen:!0,label:()=>(0,t.__)("Faq Style"),cb:()=>(0,e.createElement)(d.Fragment,null,(0,e.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Gap"),type:"number",min:0,max:100,step:1,value:c,onChange:e=>{l({gap:e})}}))}]}),(0,e.createElement)(u,{tabs:[{name:"button",initialOpen:!0,label:()=>(0,t.__)("Header Style"),cb:()=>(0,e.createElement)(d.Fragment,null,(0,e.createElement)(n.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,t.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,t.__)("Hover"),className:"gutenify-color-hover-tab"}]},(a=>(0,e.createElement)(d.Fragment,null,"normal"===a.name&&(0,e.createElement)(d.Fragment,null,(0,e.createElement)(N,{label:(0,t.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,textColor:e}})}};l(t)},value:s?.textColor}),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Transparent Background"),checked:(0,I.has)(s,"backgroundColor")&&"transparent"===s.backgroundColor,onChange:()=>{const e={backgroundColor:"transparent",backgroundGradient:""};"transparent"===s.backgroundColor&&(e.backgroundColor="");const t={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,...e}})}};l(t)}}),(!(0,I.has)(s,"backgroundColor")||"transparent"!==s.backgroundColor)&&(0,e.createElement)(q,{label:(0,t.__)("Background Color"),colorValue:s?.backgroundColor,gradientValue:s?.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,...e}})}};l(t)}})),"hover"===a.name&&(0,e.createElement)(d.Fragment,null,(0,e.createElement)(N,{label:(0,t.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,hoverTextColor:e}})}};l(t)},value:s?.hoverTextColor}),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Transparent Background"),checked:(0,I.has)(s,"hoverBackgroundColor")&&"transparent"===s.hoverBackgroundColor,onChange:()=>{const e={hoverBackgroundColor:"transparent",hoverBackgroundGradient:""};"transparent"===s.hoverBackgroundColor&&(e.hoverBackgroundColor="");const t={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,...e}})}};l(t)}}),(!(0,I.has)(s,"hoverBackgroundColor")||"transparent"!==s.hoverBackgroundColor)&&(0,e.createElement)(q,{label:(0,t.__)("Background Color"),colorValue:s?.hoverBackgroundColor,gradientValue:s?.hoverBackgroundGradient,onChange:e=>{const t={hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient},a={blockAdvanceOptions:{...(0,I.assign)(i,{header:{...s,...t}})}};l(a)}})),(0,e.createElement)(n.__experimentalDivider,null)))))}]}),(0,e.createElement)(u,{tabs:[{name:"button",initialOpen:!0,label:()=>(0,t.__)("Content Style"),cb:()=>(0,e.createElement)(d.Fragment,null,(0,e.createElement)(N,{label:(0,t.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{content:{...g,textColor:e}})}};l(t)},value:g?.textColor}),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Transparent Background"),checked:(0,I.has)(g,"backgroundColor")&&"transparent"===g.backgroundColor,onChange:()=>{const e={backgroundColor:"transparent",backgroundGradient:""};"transparent"===g.backgroundColor&&(e.backgroundColor="");const t={blockAdvanceOptions:{...(0,I.assign)(i,{content:{...g,...e}})}};l(t)}}),(!(0,I.has)(g,"backgroundColor")||"transparent"!==g.backgroundColor)&&(0,e.createElement)(q,{label:(0,t.__)("Background Color"),colorValue:g?.backgroundColor,gradientValue:g?.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{content:{...g,...e}})}};l(t)}}))}]}),(0,e.createElement)(u,{tabs:[{name:"button",initialOpen:!0,label:()=>(0,t.__)("Border Style"),cb:()=>(0,e.createElement)(d.Fragment,null,(0,e.createElement)(N,{label:(0,t.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{border:{...m,color:e}})}};l(t)},value:m?.color}),(0,e.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Width"),value:m?.width,onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{border:{...m,width:e}})}};l(t)},min:0,max:300}),(0,e.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Radius"),value:m?.radius,onChange:e=>{const t={blockAdvanceOptions:{...(0,I.assign)(i,{border:{...m,radius:e}})}};l(t)},min:0,max:300}))}]}))]}));const{blockId:j}=h,{pluginMainSlug:W}=F,R=(0,i.compose)([(0,s.withDispatch)(((e,t,a)=>({addSlide:()=>{const{clientId:n}=t,{replaceInnerBlocks:r}=e(c.store),{getBlocks:l}=a.select(c.store);let i=l(n);i=[...i,(0,o.createBlock)(`${W}/content-toggle-item`)],r(n,i)}})))])((a=>{const{addSlide:o}=a;return(0,e.createElement)(n.Toolbar,null,(0,e.createElement)(n.Button,{icon:"insert",showTooltip:!0,label:(0,t.__)("Add Faq"),className:"components-toolbar-button",onClick:()=>{o()}}))}));(0,g.addFilter)(`${W}--block-controls--${j}`,`${W}--block-controls--${j}--add-faq`,((t,a)=>[...t,(0,e.createElement)(d.Fragment,{key:`${W}--block-controls--${j}--add-faq`},(0,e.createElement)(R,{...a}))]));const{pluginMainSlug:U}=F,D=(0,i.compose)([(0,s.withDispatch)(((e,t)=>{const{clientId:a}=t,{selectBlock:n}=e("core/block-editor");return{updateInnerBlocks(t,n){(0,s.select)("core/block-editor").getBlocksByClientId(a)[0].innerBlocks.forEach((function(a,o){`${U}/content-toggle-item`===a.name&&e("core/block-editor").updateBlockAttributes(a.clientId,{initialOpen:0===o?n:t})}))},selectBlock:()=>{n(t.clientId)}}}))])((t=>{const{attributes:a}=t,{blockClientId:n,hasAccordion:o}=a,r=l()(`${U}-block-faq-wrapper`,o?`${U}-block-faq-accordion`:"",`${U}-section-${n}`,`${m.name.replace(/\//gm,"-")}-version-${m.rE}`),i=(0,c.useBlockProps)({className:r}),s=[[`${U}/content-toggle-item`,{}],[`${U}/content-toggle-item`,{}]],{children:d,...g}=(0,c.useInnerBlocksProps)(i,{allowedBlocks:[`${U}/content-toggle-item`],template:s,renderAppender:!1});return(0,e.createElement)("div",{...g},d)})),{pluginMainSlug:Q}=F,J=window.wp.primitives,{blockId:K}=((0,e.createElement)(J.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(J.G,{fill:M},(0,e.createElement)(J.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,e.createElement)(J.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,e.createElement)(J.Rect,{height:"14.5",rx:".875",stroke:M,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,e.createElement)(J.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:M,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,e.createElement)(J.G,{fill:M},(0,e.createElement)(J.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,e.createElement)(J.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,e.createElement)(J.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(J.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,e.createElement)(J.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:M})),(0,e.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,e.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:M}))),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,e.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:M}))),(0,e.createElement)("svg",{id:"a764fa4e-cc3b-472f-ad43-7e74fc450527","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M3.49,19.54H9.1l2.47,4.21a.49.49,0,0,0,.86,0l2.47-4.21h5.61a2.22,2.22,0,0,0,2.22-2.23V2.23A2.22,2.22,0,0,0,20.51,0h-17A2.22,2.22,0,0,0,1.27,2.23V17.31A2.22,2.22,0,0,0,3.49,19.54ZM2.27,2.23A1.23,1.23,0,0,1,3.49,1h17a1.23,1.23,0,0,1,1.22,1.23V17.31a1.23,1.23,0,0,1-1.22,1.23h-5.9a.5.5,0,0,0-.43.24L12,22.51,9.82,18.78a.5.5,0,0,0-.43-.24H3.49a1.23,1.23,0,0,1-1.22-1.23Z",fill:M}),(0,e.createElement)("path",{d:"M8.31,11a.64.64,0,0,1,.18.57L8,14.65a.64.64,0,0,0,.93.68l2.81-1.48a.64.64,0,0,1,.6,0l2.81,1.48a.64.64,0,0,0,.93-.68l-.53-3.13a.64.64,0,0,1,.18-.57L18,8.74a.64.64,0,0,0-.35-1.1l-3.14-.46A.66.66,0,0,1,14,6.83L12.58,4a.65.65,0,0,0-1.16,0L10,6.83a.66.66,0,0,1-.49.35l-3.14.46A.64.64,0,0,0,6,8.74Z",fill:M})),(0,e.createElement)("svg",{id:"af96b2d0-e766-45ff-a399-fea356ead648","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M10.84,9.71H4.26a.5.5,0,0,0-.5.5V11.9a.5.5,0,0,0,1,0V10.71H7.05V18H6.28a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.82a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5H8.05V10.71h2.29V11.9a.5.5,0,1,0,1,0V10.21A.5.5,0,0,0,10.84,9.71Z",fill:M}),(0,e.createElement)("path",{d:"M19.74,10H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,10Z",fill:M}),(0,e.createElement)("path",{d:"M19.74,17.72H14.06a.5.5,0,0,0,0,1h5.68a.5.5,0,0,0,0-1Z",fill:M}),(0,e.createElement)("path",{d:"M19.74,13.84H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,13.84Z",fill:M}),(0,e.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:M})),(0,e.createElement)("svg",{id:"b9750429-17f3-433d-9161-079c88c0d998","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M9.71,9.15h4.58a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H9.71a.5.5,0,0,0-.5.5A.5.5,0,0,0,9.71,9.15Z",fill:M}),(0,e.createElement)("path",{d:"M17.63,10.72H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,10.72Z",fill:M}),(0,e.createElement)("path",{d:"M17.63,13.29H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,13.29Z",fill:M}),(0,e.createElement)("path",{d:"M15.94,15.87H8.06a.5.5,0,0,0-.5.5v2.8a.5.5,0,0,0,.5.5h7.88a.5.5,0,0,0,.5-.5v-2.8A.5.5,0,0,0,15.94,15.87Zm-.5,2.8H8.56v-1.8h6.88Z",fill:M}),(0,e.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:M})),(0,e.createElement)("svg",{id:"a7f22ee9-1614-475a-8b5a-2a4b05234844","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z",fill:M}),(0,e.createElement)("path",{d:"M17.61,10.12l-3.14-.45A.67.67,0,0,1,14,9.31l-1.4-2.84a.65.65,0,0,0-1.16,0L10,9.31a.67.67,0,0,1-.49.36l-3.14.45A.64.64,0,0,0,6,11.22l2.27,2.22a.64.64,0,0,1,.18.57L8,17.14a.64.64,0,0,0,.93.67l2.81-1.47a.64.64,0,0,1,.6,0l2.81,1.47a.64.64,0,0,0,.93-.67L15.51,14a.64.64,0,0,1,.18-.57L18,11.22A.64.64,0,0,0,17.61,10.12Z",fill:M})),(0,e.createElement)("svg",{id:"a1a34775-0c0f-439f-9b3d-b3905e6f0449","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M23.37,4.36l-7.54,2-2.62-.7V5.6a5,5,0,1,0-10.09,0s0,.05,0,.08L.37,6.41A.5.5,0,0,0,0,6.9V23a.47.47,0,0,0,.2.39.46.46,0,0,0,.3.11l.13,0,7.54-2,7.53,2,.13,0,.13,0,7.67-2.05A.5.5,0,0,0,24,20.9v-16a.51.51,0,0,0-.63-.49ZM8.17,1.55a4.05,4.05,0,0,1,4,4.05c0,1.73-2.64,5.33-4,7.05-1.41-1.72-4-5.32-4-7A4.06,4.06,0,0,1,8.17,1.55ZM1,7.28l2.3-.62c.75,2.54,3.65,6.11,4.37,7v6.89L1,22.29Zm7.67,6.34c.71-.85,3.62-4.42,4.36-7l2.3.62v15L8.67,20.51ZM23,20.51l-6.67,1.78v-15L23,5.5Z",fill:M}),(0,e.createElement)("path",{d:"M10.74,5.6A2.57,2.57,0,1,0,8.17,8.17,2.58,2.58,0,0,0,10.74,5.6ZM6.6,5.6A1.57,1.57,0,1,1,8.17,7.17,1.57,1.57,0,0,1,6.6,5.6Z",fill:M})),h),{pluginMainSlug:X}=F;(0,g.addFilter)(`${X}--inline-styles--${K}`,`${X}--inline-styles--${K}--button`,(function(e,t,a=!1){const{blockAdvanceOptions:n,gap:o,blockClientId:r}=t.attributes,{header:l,content:c,border:i}=n;a=a||`.gutenify-section-${r} .gutenify-block-content-toggle-item-wrapper`;let s="";return s+=o?`margin-bottom: ${o};`:"",s+=(0,I.has)(i,"color")&&!(0,I.isEmpty)(i.color)?`border-color: ${i.color};`:"",s+=(0,I.has)(i,"width")&&i.width>0?`border-width: ${i.width}px;`:"",s+=(0,I.has)(i,"width")&&i.width>0?"border-style: solid;":"",s+=(0,I.has)(i,"radius")&&!(0,I.isEmpty)(i.radius)?`border-radius: ${i.radius};`:"",s&&(e+=`${a} { ${s} }`),s="",s+=(0,I.has)(l,"textColor")&&!(0,I.isEmpty)(l.textColor)?`color: ${l.textColor};`:"",s&&(e+=`${a} .gutenify-content-toggle-item-header > * { ${s} }`),s="",s+=(0,I.has)(l,"backgroundColor")&&!(0,I.isEmpty)(l.backgroundColor)?`background: ${l.backgroundColor};`:"",(0,I.has)(l,"backgroundGradient")&&!(0,I.isEmpty)(l.backgroundGradient)&&(s+=`background: ${l.backgroundGradient};`),s&&(e+=`${a} .gutenify-content-toggle-item-header { ${s} }`),s="",s+=(0,I.has)(l,"hoverTextColor")&&!(0,I.isEmpty)(l.hoverTextColor)?`color: ${l.hoverTextColor};`:"",s&&(e+=`${a} .gutenify-content-toggle-item-header:hover > * { ${s} }`),s="",s+=(0,I.has)(l,"hoverBackgroundColor")&&!(0,I.isEmpty)(l.hoverBackgroundColor)?`background: ${l.hoverBackgroundColor};`:"",(0,I.has)(l,"hoverBackgroundGradient")&&!(0,I.isEmpty)(l.hoverBackgroundGradient)&&(s+=`background: ${l.hoverBackgroundGradient};`),s&&(e+=`${a} .gutenify-content-toggle-item-header:hover { ${s} }`),s="",s+=(0,I.has)(c,"textColor")&&!(0,I.isEmpty)(c.textColor)?`color: ${c.textColor};`:"",s&&(e+=`${a} .gutenify-content-toggle-item-content > * { ${s} }`),s="",s+=(0,I.has)(c,"backgroundColor")&&!(0,I.isEmpty)(c.backgroundColor)?`background: ${c.backgroundColor};`:"",(0,I.has)(c,"backgroundGradient")&&!(0,I.isEmpty)(c.backgroundGradient)&&(s+=`background: ${c.backgroundGradient};`),s&&(e+=`${a} .gutenify-content-toggle-item-content { ${s} }`),(0,g.applyFilters)(`gutenify--${K}--inline-styles`,e,t)}));const{name:Y,attributes:ee,supports:te}=m,ae={title:(0,t.__)("Faqs"),description:(0,t.__)("Gutenify Faqs."),icon:(0,e.createElement)(n.Icon,{icon:()=>(0,e.createElement)("svg",{id:"b496a53f-257c-4058-9f90-075cb4a2f8ae","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M22.26,1.24H10.08A1.74,1.74,0,0,0,8.35,3V5.29H1.74A1.74,1.74,0,0,0,0,7v10.8a1.74,1.74,0,0,0,1.74,1.73H4.46l1.73,3a.49.49,0,0,0,.86,0l1.73-3h5.14a1.74,1.74,0,0,0,1.73-1.73V16.24L17,18.46a.49.49,0,0,0,.86,0l1.73-3h2.72A1.74,1.74,0,0,0,24,13.78V3A1.74,1.74,0,0,0,22.26,1.24ZM13.92,18.56H8.49a.5.5,0,0,0-.43.25L6.62,21.27,5.18,18.81a.5.5,0,0,0-.43-.25h-3A.74.74,0,0,1,1,17.83V7a.74.74,0,0,1,.74-.74H8.35v7.49a1.74,1.74,0,0,0,1.73,1.73h4.57v2.32A.73.73,0,0,1,13.92,18.56ZM23,13.78a.74.74,0,0,1-.74.73h-3a.48.48,0,0,0-.43.25l-1.44,2.46-1.44-2.46a.48.48,0,0,0-.43-.25H10.08a.73.73,0,0,1-.73-.73V3a.74.74,0,0,1,.73-.74H22.26A.74.74,0,0,1,23,3Z",fill:M}),(0,e.createElement)("path",{d:"M16.43,4.06a2.55,2.55,0,0,0-2.51,2.57.5.5,0,0,0,.48.52.49.49,0,0,0,.52-.49,1.6,1.6,0,0,1,3.19-.12,1.6,1.6,0,0,1-.87,1.53A2.22,2.22,0,0,0,16,10.13a.5.5,0,0,0,.5.48h0a.5.5,0,0,0,.48-.52A1.21,1.21,0,0,1,17.7,9a2.62,2.62,0,0,0,1.41-2.5A2.56,2.56,0,0,0,16.43,4.06Z",fill:M}),(0,e.createElement)("path",{d:"M16.87,11.58a.51.51,0,0,0-.55-.11.57.57,0,0,0-.16.11.5.5,0,0,0-.14.35.46.46,0,0,0,.3.46.48.48,0,0,0,.2,0,.5.5,0,0,0,.35-.14.55.55,0,0,0,.15-.36.65.65,0,0,0,0-.19A.57.57,0,0,0,16.87,11.58Z",fill:M}))}),keywords:["gutenify",(0,t.__)("Faqs"),(0,t.__)("Faq"),(0,t.__)("questions")],example:{attributes:{}},supports:te,attributes:ee,edit:D,save:function(t){const{attributes:a}=t,{hasAccordion:n,blockClientId:o,initialOpenFirst:r,initialOpenAll:i}=a,s=l()(`${Q}-block-faq-wrapper`,n?`${Q}-block-faq-accordion`:"",`${Q}-section-${o}`,`${m.name.replace(/\//gm,"-")}-version-${m.rE}`,i?`${Q}-block-faq-open-all`:"",r?`${Q}-block-faq-open-first`:""),d=c.useBlockProps.save({className:s}),g=c.useInnerBlocksProps.save(d);return(0,e.createElement)("div",{...g},g.children)}};(0,o.registerBlockType)(Y,{...ae})})()})();