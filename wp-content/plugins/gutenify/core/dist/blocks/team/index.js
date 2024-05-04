(()=>{var e,t={1276:(e,t,a)=>{"use strict";const r=window.React,n=window.wp.i18n,o=window.wp.components,l=window.wp.blocks;var i=a(2485),c=a.n(i),s=a(6638),u=a.n(s);const m=window.wp.blockEditor,d=window.wp.compose,g=window.wp.element,p=window.wp.hooks,b=({tabs:e=[]})=>{const[{currentTab:t},a]=(0,g.useState)({currentTab:!1});return(0,r.createElement)("div",{className:"gutenify-accordion-wrapper"},e.map((e=>{const n=e.label,l=t===e.name;let i="gutenify-accordion-item";return i+=l?" gutenify-accordion-item-active":"",(0,r.createElement)("div",{className:i,key:`gutenify-accordion-item-${e.name}`},(0,r.createElement)("button",{onClick:()=>{a({currentTab:t===e.name?"":e.name})},className:"gutenify-accordion-item-heading"},(0,r.createElement)("div",{className:"gutenify-accordion-item-heading-arrow"},(0,r.createElement)(o.Icon,{icon:l?"arrow-down-alt2":"arrow-right-alt2"})),(0,r.createElement)("div",{className:"gutenify-accordion-item-label"},(0,r.createElement)(n,null))),(0,r.createElement)("div",{className:"gutenify-accordion-item-content"}," ",e.cb()))})))},h="gutenify",v=window?.[`_${h}_vars`]?window[`_${h}_vars`]:{},{is_pro_activated:f,pro_account_url:y,pro_license_status:w,title:C,prefix:k,slug:E,authorWebSite:x,authorDemoWebSite:A,authorWebSiteProPage:_,defaultTheme:$,authorWebSiteSupport:B,plugin_directory_url:M,brand_color:H,plugin_main_version:L,documentationsURL:V,pro_title:Z,active_blocks:S,plugin_main_camel_case_name:O}=v,I=(v?.siteUrl?v.siteUrl:v.site_url,(0,n.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+_+'" target="_blank">',Z,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:O,pluginMainFunctionPrefix:"gutenify"}),N=({layouts:e,label:t="Layouts",value:a,onChange:n,blockName:o})=>{e=(0,p.applyFilters)(`${E}--layouts--${o}`,e);const l=o.replace(new RegExp(E+"--","gi"),"");return(0,r.createElement)(r.Fragment,null,e&&e.length?(0,r.createElement)("div",{className:`${E}-template-browser`},(0,r.createElement)("h2",null,t),(0,r.createElement)("ul",null,e.map((e=>{let t=`${E}-template-browser-item`;return a===e.name&&(t+=` ${E}-template-browser-item-active`),(0,r.createElement)("li",{className:t,key:e.name},(0,r.createElement)("button",{className:`${E}-template-browser-selector`,onClick:()=>{n(e)}},(0,r.createElement)("img",{src:e?.thumbnailUrl?e.thumbnailUrl:`${M}/assets/images/layouts/${l}/${e.name}.png`,alt:e.name}),(0,r.createElement)("small",null,e.label)))})))):"")},j=window.wp.data,z=JSON.parse('{"name":"gutenify/team","rE":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"padding":{"desktop":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}}},"layout":{"type":"string","default":"layout-1"},"containerSize":{"type":"string","default":"center"},"columnSize":{"type":"number","default":2}},"supports":{"anchor":true,"html":false,"align":["wide","full"]}}'),{name:G}=z,T={name:G,blockId:G.replace("/","--"),hookPrefix:"team"},P=JSON.parse('{"name":"gutenify/team-member"}'),{name:F}=P,W={name:F,blockId:F.replace("/","--"),hookPrefix:"team-member",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",socialIconAlign:"center"},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",socialIconAlign:"left"},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",socialIconAlign:"right"}]},{blockId:R}=T,{layouts:U,blockId:D}=W,{pluginMainSlug:J}=I;(0,p.addFilter)(`${J}--inspector-controls--${R}--content`,`${J}--inspector-controls--${R}--content--opitons`,((e,t)=>{const{attributes:a,setAttributes:l}=t,{layout:i,columnSize:c}=a;return[...e,(0,r.createElement)(g.Fragment,{key:`${J}--inspector-controls--${R}--content--opitons`},(0,r.createElement)(b,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,n.__)("Team"),cb:()=>(0,r.createElement)(g.Fragment,null,(0,r.createElement)(N,{layouts:U,value:i,blockName:D,onChange:e=>{const a={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};l(a),((e,t)=>{const{clientId:a}=t;(0,j.select)("core/block-editor").getBlocksByClientId(a)[0].innerBlocks.forEach((function(t){"gutenify/team-member"===t.name&&((0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{layout:e.name,titleAlign:e.titleAlign,imageAlign:e.imageAlign,ratingAlign:e.ratingAlign}),(0,j.select)("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks.forEach((function(t){if("core/image"===t.name&&(0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.imageAlign}),"core/heading"===t.name&&(0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlign:e.titleAlign}),"core/paragraph"===t.name&&(0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.titleAlign}),"gutenify/star-rating"===t.name&&(0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlignment:e.ratingAlign}),"core/social-links"===t.name){const a=e?.socialLinks?.attributes?e?.socialLinks?.attributes:{align:e.socialIconAlign,layout:{type:"flex",justifyContent:e.socialIconAlign}};(0,j.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{...a})}})))}))})(e,t)}}),(0,r.createElement)(o.RangeControl,{value:c,label:(0,n.__)("Columns"),min:1,max:(0,p.applyFilters)(`${J}--${R}--max-columns`,4),step:1,onChange:e=>{l({columnSize:e})}}))}]}))]}));const q=window.lodash,K=e=>{const{clearable:t=!0}=e,{colors:a}=(0,j.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,r.createElement)(o.BaseControl,{label:e.label,id:"textcolor-1"},(0,r.createElement)(o.ColorPalette,{colors:a,value:e.value,onChange:t=>{e.onChange(t)},clearable:t}))},Q=e=>{const{clearable:t=!0}=e,{colors:a,gradients:n}=(0,j.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,r.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,r.createElement)(m.__experimentalColorGradientControl,{label:e.label,colorValue:e.colorValue,gradientValue:e.gradientValue,colors:a,gradients:n,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:t=>{if((0,q.isEmpty)(t))return;const a={backgroundColor:t,backgroundGradient:void 0};e.onChange(a)},onGradientChange:t=>{if((0,q.isEmpty)(t))return;const a={backgroundGradient:t,backgroundColor:void 0};e.onChange(a)},clearable:!1}),t&&(0,r.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,r.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{e.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))};g.Component;const{blockId:X}=T,{pluginMainSlug:Y}=I;(0,p.addFilter)(`${Y}--inspector-controls--${X}--style`,`${Y}--inspector-controls--${X}--style--opitons`,((e,t)=>{const{attributes:a,setAttributes:l}=t,{blockAdvanceOptions:i}=a;return[...e,(0,r.createElement)(g.Fragment,{key:`gutenify-block-${X}-options-tab-content-basic`},(0,r.createElement)(b,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,n.__)("Team Style"),cb:()=>(0,r.createElement)(g.Fragment,null,(0,r.createElement)(o.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,n.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,n.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,r.createElement)(g.Fragment,null,"normal"===e.name&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(K,{label:(0,n.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,textColor:e}};l(t)},value:i.textColor}),(0,r.createElement)(Q,{label:(0,n.__)("Background Color"),colorValue:i.backgroundColor,gradientValue:i.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,...e}};l(t)}}),(0,r.createElement)(K,{label:(0,n.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,borderColor:e}};l(t)},value:i.borderColor})),"hover"===e.name&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(K,{label:(0,n.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverTextColor:e}};l(t)},value:i.hoverTextColor}),(0,r.createElement)(Q,{label:(0,n.__)("Background Color"),colorValue:i.hoverBackgroundColor,gradientValue:i.hoverBackgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient}};l(t)}}),(0,r.createElement)(K,{label:(0,n.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBorderColor:e}};l(t)},value:i.hoverBorderColor})),(0,r.createElement)(o.__experimentalNumberControl,{label:(0,n.__)("Border Width"),value:i.borderWidth,onChange:e=>{const t={blockAdvanceOptions:{...i,borderWidth:e}};l(t)},min:0,max:300}),(0,r.createElement)(o.__experimentalUnitControl,{label:(0,n.__)("Border Radius"),value:i.borderRadius,onChange:e=>{const t={blockAdvanceOptions:{...i,borderRadius:e}};l(t)},min:0,max:300})))))}]}))]}));const{hookPrefix:ee,blockId:te,name:ae}=T,{pluginMainSlug:re}=I;(0,p.addFilter)(`${re}--inline-styles--${te}`,`${re}--inline-styles--${te}--button`,((e,t,a="")=>{const{attributes:r,name:n}=t;if(n!==ae)return e;const{blockAdvanceOptions:o,blockClientId:l}=r;a=a||`.gutenify-section-${l}`;let i="";i+=(0,q.has)(o,"textColor")&&!(0,q.isEmpty)(o.textColor)?`color: ${o.textColor};`:"",i+=(0,q.has)(o,"backgroundColor")&&!(0,q.isEmpty)(o.backgroundColor)?`background: ${o.backgroundColor};`:"",(0,q.has)(o,"backgroundGradient")&&!(0,q.isEmpty)(o.backgroundGradient)&&(i+=`background: ${o.backgroundGradient};`),i+=(0,q.has)(o,"borderColor")&&!(0,q.isEmpty)(o.borderColor)?`border-color: ${o.borderColor};`:"",i+=(0,q.has)(o,"borderWidth")&&o.borderWidth>0?`border-width: ${o.borderWidth}px;`:"",i+=(0,q.has)(o,"borderWidth")&&o.borderWidth>0?"border-style: solid;":"",i+=(0,q.has)(o,"borderRadius")&&!(0,q.isEmpty)(o.borderRadius)?`border-radius: ${o.borderRadius};`:"",i&&(e+=`${a} { ${i} }`);let c="";return c+=(0,q.has)(o,"hoverTextColor")&&!(0,q.isEmpty)(o.hoverTextColor)?`color: ${o.hoverTextColor};`:"",c+=(0,q.has)(o,"hoverBackgroundColor")&&!(0,q.isEmpty)(o.hoverBackgroundColor)?`background: ${o.hoverBackgroundColor};`:"",(0,q.has)(o,"hoverBackgroundGradient")&&!(0,q.isEmpty)(o.hoverBackgroundGradient)&&(c+=`background: ${o.hoverBackgroundGradient};`),c+=(0,q.has)(o,"hoverBorderColor")&&!(0,q.isEmpty)(o.hoverBorderColor)?`border-color: ${o.hoverBorderColor};`:"",c&&(e+=`${a}:hover { ${c} }`),(0,p.applyFilters)(`gutenify--${ee}--inline-styles`,e,t)}));const ne=e=>{const{children:t,name:a,className:n}=e,o=a.replace("/","-")+"-section",l=c()(o,n);return(0,r.createElement)("div",{className:l},t)},oe=["gutenify/team-member"],le=function(e,t){var a,r,n=0;function o(){var o,l,i=a,c=arguments.length;e:for(;i;){if(i.args.length===arguments.length){for(l=0;l<c;l++)if(i.args[l]!==arguments[l]){i=i.next;continue e}return i!==a&&(i===r&&(r=i.prev),i.prev.next=i.next,i.next&&(i.next.prev=i.prev),i.next=a,i.prev=null,a.prev=i,a=i),i.val}i=i.next}for(o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return i={args:o,val:e.apply(null,o)},a?(a.prev=i,i.next=a):r=i,n===t.maxSize?(r=r.prev).next=null:n++,a=i,i.val}return t=t||{},o.clear=function(){a=null,r=null,n=0},o}((e=>u()(e,(()=>["gutenify/team-member",{className:"has-shadow-dark"}])))),ie=(0,d.compose)([])((e=>{const{attributes:t,clientId:a}=e,{layout:n,columnSize:o,blockClientId:l}=t,i=c()("gutenify-team-block-wrapper",`gutenify-team-${n}`,`gutenify-team-col-${o}`,`gutenify-section-${l}`,`${z.name.replace(/\//gm,"-")}-version-${z.rE}`),s=(0,m.useBlockProps)({className:i}),{children:u,...d}=(0,m.useInnerBlocksProps)(s,{allowedBlocks:oe,template:le(2),templateInsertUpdatesSelection:!1,orientation:"horizontal",__experimentalCaptureToolbars:!0,renderAppender:m.InnerBlocks.ButtonBlockAppender});return(0,r.createElement)("div",{...d},(0,r.createElement)(ne,{...e,sectionID:a},u))})),ce=window.wp.primitives,{name:se,attributes:ue,supports:me}=((0,r.createElement)(ce.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(ce.G,{fill:H},(0,r.createElement)(ce.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,r.createElement)(ce.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)(ce.Rect,{height:"14.5",rx:".875",stroke:H,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,r.createElement)(ce.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:H,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,r.createElement)(ce.G,{fill:H},(0,r.createElement)(ce.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,r.createElement)(ce.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,r.createElement)(ce.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(ce.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,r.createElement)(ce.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,r.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:H})),(0,r.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,r.createElement)("g",null,(0,r.createElement)("g",null,(0,r.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,r.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:H}))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:H}))),(0,r.createElement)("svg",{id:"a764fa4e-cc3b-472f-ad43-7e74fc450527","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M3.49,19.54H9.1l2.47,4.21a.49.49,0,0,0,.86,0l2.47-4.21h5.61a2.22,2.22,0,0,0,2.22-2.23V2.23A2.22,2.22,0,0,0,20.51,0h-17A2.22,2.22,0,0,0,1.27,2.23V17.31A2.22,2.22,0,0,0,3.49,19.54ZM2.27,2.23A1.23,1.23,0,0,1,3.49,1h17a1.23,1.23,0,0,1,1.22,1.23V17.31a1.23,1.23,0,0,1-1.22,1.23h-5.9a.5.5,0,0,0-.43.24L12,22.51,9.82,18.78a.5.5,0,0,0-.43-.24H3.49a1.23,1.23,0,0,1-1.22-1.23Z",fill:H}),(0,r.createElement)("path",{d:"M8.31,11a.64.64,0,0,1,.18.57L8,14.65a.64.64,0,0,0,.93.68l2.81-1.48a.64.64,0,0,1,.6,0l2.81,1.48a.64.64,0,0,0,.93-.68l-.53-3.13a.64.64,0,0,1,.18-.57L18,8.74a.64.64,0,0,0-.35-1.1l-3.14-.46A.66.66,0,0,1,14,6.83L12.58,4a.65.65,0,0,0-1.16,0L10,6.83a.66.66,0,0,1-.49.35l-3.14.46A.64.64,0,0,0,6,8.74Z",fill:H})),(0,r.createElement)("svg",{id:"af96b2d0-e766-45ff-a399-fea356ead648","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M10.84,9.71H4.26a.5.5,0,0,0-.5.5V11.9a.5.5,0,0,0,1,0V10.71H7.05V18H6.28a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.82a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5H8.05V10.71h2.29V11.9a.5.5,0,1,0,1,0V10.21A.5.5,0,0,0,10.84,9.71Z",fill:H}),(0,r.createElement)("path",{d:"M19.74,10H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,10Z",fill:H}),(0,r.createElement)("path",{d:"M19.74,17.72H14.06a.5.5,0,0,0,0,1h5.68a.5.5,0,0,0,0-1Z",fill:H}),(0,r.createElement)("path",{d:"M19.74,13.84H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,13.84Z",fill:H}),(0,r.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:H})),(0,r.createElement)("svg",{id:"b9750429-17f3-433d-9161-079c88c0d998","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M9.71,9.15h4.58a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H9.71a.5.5,0,0,0-.5.5A.5.5,0,0,0,9.71,9.15Z",fill:H}),(0,r.createElement)("path",{d:"M17.63,10.72H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,10.72Z",fill:H}),(0,r.createElement)("path",{d:"M17.63,13.29H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,13.29Z",fill:H}),(0,r.createElement)("path",{d:"M15.94,15.87H8.06a.5.5,0,0,0-.5.5v2.8a.5.5,0,0,0,.5.5h7.88a.5.5,0,0,0,.5-.5v-2.8A.5.5,0,0,0,15.94,15.87Zm-.5,2.8H8.56v-1.8h6.88Z",fill:H}),(0,r.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:H})),(0,r.createElement)("svg",{id:"a7f22ee9-1614-475a-8b5a-2a4b05234844","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z",fill:H}),(0,r.createElement)("path",{d:"M17.61,10.12l-3.14-.45A.67.67,0,0,1,14,9.31l-1.4-2.84a.65.65,0,0,0-1.16,0L10,9.31a.67.67,0,0,1-.49.36l-3.14.45A.64.64,0,0,0,6,11.22l2.27,2.22a.64.64,0,0,1,.18.57L8,17.14a.64.64,0,0,0,.93.67l2.81-1.47a.64.64,0,0,1,.6,0l2.81,1.47a.64.64,0,0,0,.93-.67L15.51,14a.64.64,0,0,1,.18-.57L18,11.22A.64.64,0,0,0,17.61,10.12Z",fill:H})),(0,r.createElement)("svg",{id:"a1a34775-0c0f-439f-9b3d-b3905e6f0449","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M23.37,4.36l-7.54,2-2.62-.7V5.6a5,5,0,1,0-10.09,0s0,.05,0,.08L.37,6.41A.5.5,0,0,0,0,6.9V23a.47.47,0,0,0,.2.39.46.46,0,0,0,.3.11l.13,0,7.54-2,7.53,2,.13,0,.13,0,7.67-2.05A.5.5,0,0,0,24,20.9v-16a.51.51,0,0,0-.63-.49ZM8.17,1.55a4.05,4.05,0,0,1,4,4.05c0,1.73-2.64,5.33-4,7.05-1.41-1.72-4-5.32-4-7A4.06,4.06,0,0,1,8.17,1.55ZM1,7.28l2.3-.62c.75,2.54,3.65,6.11,4.37,7v6.89L1,22.29Zm7.67,6.34c.71-.85,3.62-4.42,4.36-7l2.3.62v15L8.67,20.51ZM23,20.51l-6.67,1.78v-15L23,5.5Z",fill:H}),(0,r.createElement)("path",{d:"M10.74,5.6A2.57,2.57,0,1,0,8.17,8.17,2.58,2.58,0,0,0,10.74,5.6ZM6.6,5.6A1.57,1.57,0,1,1,8.17,7.17,1.57,1.57,0,0,1,6.6,5.6Z",fill:H})),z),de={title:(0,n.__)("Team"),description:(0,n.__)("Gutenify Team"),icon:(0,r.createElement)(o.Icon,{icon:()=>(0,r.createElement)("svg",{id:"a87ea476-6a29-4a52-8bb2-7e72426abedf","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M6.05,22.41l.1.06a11.95,11.95,0,0,0,11.7,0l.1-.07a12.08,12.08,0,0,0,5.22-6,.58.58,0,0,0,.07-.21A12,12,0,1,0,6.05,22.41ZM1.79,16.07A5.45,5.45,0,0,1,7,12.24a5.28,5.28,0,0,1,1.9.34,3.72,3.72,0,0,0-.56,1.93,3.67,3.67,0,0,0,1.6,3,6.32,6.32,0,0,0-3.81,3.74A11,11,0,0,1,1.79,16.07ZM4.24,8.49A2.75,2.75,0,1,1,7,11.24,2.74,2.74,0,0,1,4.24,8.49Zm10.44,6A2.68,2.68,0,1,1,12,11.83,2.68,2.68,0,0,1,14.68,14.51ZM7,21.78a5.29,5.29,0,0,1,10,0,10.9,10.9,0,0,1-10,0Zm10.9-.51a6.32,6.32,0,0,0-3.81-3.74,3.67,3.67,0,0,0,1.6-3,3.72,3.72,0,0,0-.56-1.93,5.28,5.28,0,0,1,1.9-.34,5.45,5.45,0,0,1,5.19,3.84A11,11,0,0,1,17.89,21.27ZM14.27,8.49A2.75,2.75,0,1,1,17,11.24,2.75,2.75,0,0,1,14.27,8.49ZM12,1A11,11,0,0,1,23,12a10.89,10.89,0,0,1-.33,2.63,6.49,6.49,0,0,0-3.56-3,3.75,3.75,0,1,0-4.19,0l-.47.19a3.63,3.63,0,0,0-4.9,0l-.47-.19a3.75,3.75,0,1,0-4.19,0,6.49,6.49,0,0,0-3.56,3A10.89,10.89,0,0,1,1,12,11,11,0,0,1,12,1Z",fill:H}))}),keywords:["gutenify",(0,n.__)("team")],example:{attributes:{teams:{}}},attributes:ue,edit:ie,save:function(e){const{attributes:t}=e,{layout:a,columnSize:n,blockClientId:o}=t,l=c()(`gutenify-team-block-wrapper gutenify-team-${a}`,`gutenify-team-col-${n}`,`gutenify-section-${o}`,`${z.name.replace(/\//gm,"-")}-version-${z.rE}`),i=m.useBlockProps.save({className:l}),s=m.useInnerBlocksProps.save(i);return(0,r.createElement)("div",{className:l},(0,r.createElement)(ne,{...e,name:"gutenify/team"},s.children))},supports:me};(0,l.registerBlockType)(se,{...de})},2485:(e,t)=>{var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)r.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},1873:(e,t,a)=>{var r=a(9325).Symbol;e.exports=r},2552:(e,t,a)=>{var r=a(1873),n=a(659),o=a(9350),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?n(e):o(e)}},8096:e=>{e.exports=function(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}},4128:(e,t,a)=>{var r=a(1800),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}},4066:(e,t,a)=>{var r=a(3488);e.exports=function(e){return"function"==typeof e?e:r}},4840:(e,t,a)=>{var r="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=r},659:(e,t,a)=>{var r=a(1873),n=Object.prototype,o=n.hasOwnProperty,l=n.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),a=e[i];try{e[i]=void 0;var r=!0}catch(e){}var n=l.call(e);return r&&(t?e[i]=a:delete e[i]),n}},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,a)=>{var r=a(4840),n="object"==typeof self&&self&&self.Object===Object&&self,o=r||n||Function("return this")();e.exports=o},1800:e=>{var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},3488:e=>{e.exports=function(e){return e}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,a)=>{var r=a(2552),n=a(346);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}},6638:(e,t,a)=>{var r=a(8096),n=a(4066),o=a(1489),l=4294967295,i=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var a=l,c=i(e,l);t=n(t),e-=l;for(var s=r(c,t);++a<e;)t(a);return s}},7400:(e,t,a)=>{var r=a(9374),n=1/0;e.exports=function(e){return e?(e=r(e))===n||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},1489:(e,t,a)=>{var r=a(7400);e.exports=function(e){var t=r(e),a=t%1;return t==t?a?t-a:t:0}},9374:(e,t,a)=>{var r=a(4128),n=a(3805),o=a(4394),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var a=i.test(e);return a||c.test(e)?s(e.slice(2),a?2:8):l.test(e)?NaN:+e}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8326:0,5354:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,i,c]=a,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(a);s<l.length;s++)o=l[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[5354],(()=>r(1276)));n=r.O(n)})();