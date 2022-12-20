"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6383],{56383:(t,e,i)=>{i.r(e),i.d(e,{dyte_participant_tile:()=>r});var o=i(94196),a=i(79781),n=i(7147),s=i(61070);i(55752);const r=class{constructor(t){(0,o.r)(this,t),this.isPinned=!1,this.nameTagPosition="bottom-left",this.isPreview=!1,this.variant="solid",this.iconPack=n.d,this.t=(0,s.u)(),this.onVideoUpdate=t=>{this.videoState=t},this.onPinned=({isPinned:t})=>{this.isPinned=t}}connectedCallback(){this.participantsChanged(this.participant)}componentDidLoad(){this.videoStateChanged(this.videoState)}disconnectedCallback(){null!=this.participant&&(this.participant.removeListener("videoUpdate",this.onVideoUpdate),this.participant.removeListener("pinned",this.onPinned),this.participant.removeListener("unpinned",this.onPinned))}participantsChanged(t){null!=t&&(this.videoState={videoEnabled:t.videoEnabled,videoTrack:t.videoTrack},this.isPinned=t.isPinned,t.addListener("videoUpdate",this.onVideoUpdate),t.addListener("pinned",this.onPinned),t.addListener("unpinned",this.onPinned))}videoStateChanged(t){if(null!=t&&null!=this.videoEl)if(t.videoEnabled){const e=new MediaStream;if(null==t.videoTrack)return;e.addTrack(t.videoTrack),this.videoEl.srcObject=e}else this.videoEl.srcObject=void 0}isMirrored(){var t,e;if(null!=this.participant){if(this.isPreview||this.participant.id===(null===(t=this.meeting)||void 0===t?void 0:t.self.id)){const t=this.states||a.s,i=null===(e=null==t?void 0:t.prefs)||void 0===e?void 0:e.mirrorVideo;if("boolean"==typeof i)return i}}return!1}render(){var t,e,i,a;return(0,o.h)(o.H,null,(0,o.h)("video",{ref:t=>this.videoEl=t,class:{visible:null===(t=this.videoState)||void 0===t?void 0:t.videoEnabled,mirror:this.isMirrored(),[null!==(a=null===(i=null===(e=this.config)||void 0===e?void 0:e.config)||void 0===i?void 0:i.videoFit)&&void 0!==a?a:"cover"]:!0},autoPlay:!0,playsInline:!0,muted:!0}),this.isPinned&&(0,o.h)("dyte-icon",{class:"pinned-icon",icon:this.iconPack.pin,"aria-label":this.t("Pinned")}),(0,o.h)("slot",null))}static get watchers(){return{participant:["participantsChanged"],videoState:["videoStateChanged"]}}};r.style=":host{position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--dyte-font-family, sans-serif);aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}video{display:none;position:absolute;height:100%;width:100%;border-radius:var(--dyte-border-radius-lg, 12px)}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}.pinned-icon{position:absolute;left:var(--dyte-space-3, 12px);top:var(--dyte-space-3, 12px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}"},61070:(t,e,i)=>{i.d(e,{g:()=>a,u:()=>n});var o=i(55752);const a=async t=>{if(null==t||"en"===t||""===t.trim())return o.d;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},o.d,await e.json()):o.d}catch(e){return o.d}},n=(t=o.d)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}},79781:(t,e,i)=>{i.d(e,{o:()=>d,s:()=>r});var o=i(94196);const a=t=>!("isConnected"in t)||t.isConnected,n=((t,e)=>{let i;return(...o)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,t(...o)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(a))}),2e3),s=(t,e)=>{const i=t.indexOf(e);i>=0&&(t[i]=t[t.length-1],t.length--)},{state:r,onChange:d}=((t,e)=>{const i=((t,e=((t,e)=>t!==e))=>{let i=new Map(Object.entries(null!=t?t:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{i=new Map(Object.entries(null!=t?t:{})),o.reset.forEach((t=>t()))},n=t=>(o.get.forEach((e=>e(t))),i.get(t)),r=(t,a)=>{const n=i.get(t);e(a,n,t)&&(i.set(t,a),o.set.forEach((e=>e(t,a,n))))},d="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>n(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,i)=>(r(e,i),!0)}),c=(t,e)=>(o[t].push(e),()=>{s(o[t],e)});return{state:d,get:n,set:r,on:c,onChange:(e,i)=>{const o=c("set",((t,o)=>{t===e&&i(o)})),a=c("reset",(()=>i(t[e])));return()=>{o(),a()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(c("set",e.set)),e.get&&t.push(c("get",e.get)),e.reset&&t.push(c("reset",e.reset)),e.dispose&&t.push(c("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{o.dispose.forEach((t=>t())),a()},reset:a,forceUpdate:t=>{const e=i.get(t);o.set.forEach((i=>i(t,e,e)))}}})(t,e);return i.use((()=>{if("function"!=typeof o.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const i=(0,o.a)();i&&((t,e,i)=>{const o=t.get(e);o?o.includes(i)||o.push(i):t.set(e,[i])})(t,e,i)},set:e=>{const i=t.get(e);i&&t.set(e,i.filter(o.f)),n(t)},reset:()=>{t.forEach((t=>t.forEach(o.f))),n(t)}}})()),i})({})}}]);