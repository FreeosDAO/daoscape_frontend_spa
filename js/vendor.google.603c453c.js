"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[1403],{6354:(t,e,i)=>{var s=i(73165),n=i(78729),a=i(80244);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=null!=navigator.xr&&null!=self.XRSession&&null!=navigator.xr.isSessionSupported,o=r&&null!=self.XRSession.prototype.requestHitTestSource,l=null!=self.ResizeObserver,h=null!=self.IntersectionObserver,c=o,d=((()=>{const t=navigator.userAgent||navigator.vendor||self.opera;let e=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)})(),/\bCrOS\b/.test(navigator.userAgent),/android/i.test(navigator.userAgent)),u=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,p=(/Safari\//.test(navigator.userAgent),/firefox/i.test(navigator.userAgent)),m=/OculusBrowser/.test(navigator.userAgent),g=(u&&/CriOS\//.test(navigator.userAgent),d&&!p&&!m),f=Boolean(window.webkit&&window.webkit.messageHandlers),b=(()=>{if(u){if(f)return Boolean(/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent));{const t=document.createElement("a");return Boolean(t.relList&&t.relList.supports&&t.relList.supports("ar"))}}return!1})();var v=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=t=>t&&"null"!==t?S(t):null,w=()=>{if(c)return;const t=[];throw r||t.push("WebXR Device API"),o||t.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${t.join(", ")}`)},S=t=>{const e=new URL(t,window.location.toString());return e.toString()},x=(t,e)=>{let i=null;const s=(...s)=>{null==i&&(t(...s),i=self.setTimeout((()=>i=null),e))};return s.flush=()=>{null!=i&&(self.clearTimeout(i),i=null)},s},M=(t,e)=>{let i=null;return(...s)=>{null!=i&&self.clearTimeout(i),i=self.setTimeout((()=>{i=null,t(...s)}),e)}},C=(t,e,i)=>Math.max(e,Math.min(i,t)),T=1,E=(()=>{const t=(()=>{var t;if(null===(t=document.documentElement.getAttribute("itemtype"))||void 0===t?void 0:t.includes("schema.org/SearchResultsPage"))return!0;const e=null!=document.head?Array.from(document.head.querySelectorAll("meta")):[];for(const i of e)if("viewport"===i.name)return!0;return!1})();return t||v.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>t?window.devicePixelRatio:T})(),A=(()=>{const t="model-viewer-debug-mode",e=new RegExp(`[?&]${t}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),P=(t=0)=>new Promise((e=>setTimeout(e,t))),R=(t,e,i=null)=>new Promise((s=>{function n(a){i&&!i(a)||(s(a),t.removeEventListener(e,n))}t.addEventListener(e,n)}));
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var L=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const k=.5,O=0,F=1,D=1,I=Symbol("currentEnvironmentMap"),V=Symbol("currentBackground"),z=Symbol("updateEnvironment"),N=Symbol("cancelEnvironmentUpdate"),j=t=>{var e,i,n;class a extends t{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=O,this.shadowSoftness=F,this.exposure=D,this[e]=null,this[i]=null,this[n]=null}updated(t){super.updated(t),t.has("shadowIntensity")&&(this[Qr].setShadowIntensity(this.shadowIntensity*k),this[to]()),t.has("shadowSoftness")&&(this[Qr].setShadowSoftness(this.shadowSoftness),this[to]()),t.has("exposure")&&(this[Qr].exposure=this.exposure,this[to]()),(t.has("environmentImage")||t.has("skyboxImage"))&&this[lo]()&&this[z]()}hasBakedShadow(){return this[Qr].bakedShadows.size>0}async[(e=I,i=V,n=N,z)](){const{skyboxImage:t,environmentImage:e}=this;null!=this[N]&&(this[N](),this[N]=null);const{textureUtils:i}=this[no];if(null==i)return;const s=this[ao].beginActivity();try{const{environmentMap:n,skybox:a}=await i.generateEnvironmentMapAndSkybox(y(t),e,(t=>s(C(t,0,1))));this[I]!==n&&(this[I]=n,this.dispatchEvent(new CustomEvent("environment-change"))),this[V]=null!=a?a.name===n.name?n:a:null,this[Qr].setEnvironmentAndSkybox(this[I],this[V]),this[Qr].dispatchEvent({type:"envmap-update"})}catch(n){if(n instanceof Error)throw this[Qr].setEnvironmentAndSkybox(null,null),n}finally{s(1)}}}return L([(0,s.Cb)({type:String,attribute:"environment-image"})],a.prototype,"environmentImage",void 0),L([(0,s.Cb)({type:String,attribute:"skybox-image"})],a.prototype,"skyboxImage",void 0),L([(0,s.Cb)({type:Number,attribute:"shadow-intensity"})],a.prototype,"shadowIntensity",void 0),L([(0,s.Cb)({type:Number,attribute:"shadow-softness"})],a.prototype,"shadowSoftness",void 0),L([(0,s.Cb)({type:Number})],a.prototype,"exposure",void 0),a},B=a.dy`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`,U=a.dy`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`,_=a.dy`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`,q=a.dy`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${_}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${U}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${B}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,H=t=>{(0,a.sY)(q,t)};var G,W,K=i(90563),$=i(7652),X=i(81038);const Y=Symbol("retainerCount"),Z=Symbol("recentlyUsed"),J=Symbol("evict"),Q=Symbol("evictionThreshold"),tt=Symbol("cache");class et{constructor(t,e=5){this[G]=new Map,this[W]=[],this[tt]=t,this[Q]=e}set evictionThreshold(t){this[Q]=t,this[J]()}get evictionThreshold(){return this[Q]}get cache(){return this[tt]}retainerCount(t){return this[Y].get(t)||0}reset(){this[Y].clear(),this[Z]=[]}retain(t){this[Y].has(t)||this[Y].set(t,0),this[Y].set(t,this[Y].get(t)+1);const e=this[Z].indexOf(t);-1!==e&&this[Z].splice(e,1),this[Z].unshift(t),this[J]()}release(t){this[Y].has(t)&&this[Y].set(t,Math.max(this[Y].get(t)-1,0)),this[J]()}[(G=Y,W=Z,J)](){if(!(this[Z].length<this[Q]))for(let t=this[Z].length-1;t>=this[Q];--t){const e=this[Z][t],i=this[Y].get(e);0===i&&(this[tt].delete(e),this[Z].splice(t,1))}}}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const it=t=>{const e=[],i=new Set;for(const s of t){let t=s,n=0;while(i.has(t))t=s+"."+ ++n;i.add(t),e.push(t)}return e},st=t=>{const e=new Map;for(const i of t.mappings)for(const t of i.variants)e.set(t,{material:null,gltfMaterialIndex:i.material});return e};class nt{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,i=e.json;if(void 0===i.extensions||void 0===i.extensions[this.name])return null;const s=i.extensions[this.name],n=s.variants||[],a=it(n.map((t=>t.name)));for(const r of t.scenes)r.traverse((t=>{const s=t;if(!s.material)return;const n=e.associations.get(s);if(null==n||null==n.meshes||null==n.primitives)return;const a=i.meshes[n.meshes],r=a.primitives,o=r[n.primitives],l=o.extensions;l&&l[this.name]&&(s.userData.variantMaterials=st(l[this.name]))}));return t.userData.variants=a,Promise.resolve()}}var at,rt,ot=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.xEZ.DEFAULT_ANISOTROPY=4;const lt=(t,e,i=(()=>{}))=>{const s=t=>{const e=t.loaded/t.total;i(Math.max(0,Math.min(1,isFinite(e)?e:1)))};return new Promise(((i,n)=>{e.load(t,i,s,n)}))},ht=t=>new Promise(((e,i)=>{const s=document.createElement("script");document.body.appendChild(s),s.onload=e,s.onerror=i,s.async=!0,s.src=t})),ct=new Map,dt=new Map;let ut;const pt=new K._;let mt;const gt=new X.a;let ft,bt;const vt=Symbol("loader"),yt=Symbol("evictionPolicy"),wt=Symbol("GLTFInstance");class St extends n.pBf{constructor(t){super(),this[rt]=(new $.E).register((t=>new nt(t))),this[wt]=t,this[vt].setDRACOLoader(pt),this[vt].setKTX2Loader(gt)}static setDRACODecoderLocation(t){ut=t,pt.setDecoderPath(t)}static getDRACODecoderLocation(){return ut}static setKTX2TranscoderLocation(t){mt=t,gt.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return mt}static setMeshoptDecoderLocation(t){ft!==t&&(ft=t,bt=ht(t).then((()=>MeshoptDecoder.ready)).then((()=>MeshoptDecoder)))}static getMeshoptDecoderLocation(){return ft}static initializeKTX2Loader(t){gt.detectSupport(t)}static get cache(){return ct}static clearCache(){ct.forEach(((t,e)=>{this.delete(e)})),this[yt].reset()}static has(t){return ct.has(t)}static async delete(t){if(!this.has(t))return;const e=ct.get(t);dt.delete(t),ct.delete(t);const i=await e;i.dispose()}static hasFinishedLoading(t){return!!dt.get(t)}get[(at=yt,rt=vt,yt)](){return this.constructor[yt]}async preload(t,e,i=(()=>{})){if(this[vt].setWithCredentials(St.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!ct.has(t)){null!=bt&&this[vt].setMeshoptDecoder(await bt);const e=lt(t,this[vt],(t=>{i(.8*t)})),s=this[wt],n=e.then((t=>s.prepare(t))).then((t=>(i(.9),new s(t)))).catch((t=>(ot.error(t),new s)));ct.set(t,n)}await ct.get(t),dt.set(t,!0),i&&i(1)}async load(t,e,i=(()=>{})){await this.preload(t,e,i);const s=await ct.get(t),n=await s.clone();return this[yt].retain(t),n.dispose=()=>{this[yt].release(t)},n}}St[at]=new et(St);var xt=i(22217),Mt=i(50112),Ct=i(48386);
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt=t=>void 0!==t.material&&t.userData&&t.userData.variantMaterials&&!!Array.from(t.userData.variantMaterials.values()).filter((t=>Et(t.material))),Et=t=>t&&t.isMaterial&&!Array.isArray(t);class At{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set;for(const i of t)i.traverse((t=>{if(!Tt(t))return;const i=t.userData.variantMaterials,s=t.userData.variantData;for(const[n,a]of s){const t=i.get(a.index);t&&Et(t.material)&&e.add(n)}}));e.forEach((t=>this.variantNames.push(t)))}writeMesh(t,e){if(!Tt(t))return;const i=t.userData,s=i.variantMaterials,n=i.variantData,a=new Map,r=new Map,o=Array.from(n.values()).sort(((t,e)=>t.index-e.index));for(const[c,d]of o.entries())r.set(d.index,c);for(const c of n.values()){const t=s.get(c.index);if(!t||!Et(t.material))continue;const e=this.writer.processMaterial(t.material);a.has(e)||a.set(e,{material:e,variants:[]}),a.get(e).variants.push(r.get(c.index))}const l=Array.from(a.values()).map((t=>t.variants.sort(((t,e)=>t-e))&&t)).sort(((t,e)=>t.material-e.material));if(0===l.length)return;const h=Et(i.originalMaterial)?this.writer.processMaterial(i.originalMaterial):-1;for(const c of e.primitives)h>=0&&(c.material=h),c.extensions=c.extensions||{},c.extensions[this.name]={mappings:l}}afterParse(){if(0===this.variantNames.length)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map((t=>({name:t})));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}var Pt=i(68150);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=1e4,Lt=.001,kt=50;class Ot{constructor(t=kt){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(Lt,t)}update(t,e,i,s){const n=2e-4*this.naturalFrequency;if(null==t||0===s)return e;if(t===e&&0===this.velocity)return e;if(i<0)return t;const a=t-e,r=this.velocity+this.naturalFrequency*a,o=a+i*r,l=Math.exp(-this.naturalFrequency*i),h=(r-this.naturalFrequency*o)*l,c=-this.naturalFrequency*(h+r*l);return Math.abs(h)<n*Math.abs(s)&&c*a>=0?(this.velocity=0,e):(this.velocity=h,e+o*l)}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft=.2,Dt=.03,It=.75,Vt=12,zt=Math.PI/(2*Vt),Nt=new n.FM8,jt=(t,e,i)=>{let s=e>0?i>0?0:-Math.PI/2:i>0?Math.PI/2:Math.PI;for(let n=0;n<=Vt;++n)t.push(e+(Ft-Dt)*Math.cos(s),i+(Ft-Dt)*Math.sin(s),0,e+Ft*Math.cos(s),i+Ft*Math.sin(s),0),s+=zt};class Bt extends n.Kj0{constructor(t,e){const i=new n.u9r,s=[],a=[],{size:r,boundingBox:o}=t,l=r.x/2,h=("back"===e?r.y:r.z)/2;jt(a,l,h),jt(a,-l,h),jt(a,-l,-h),jt(a,l,-h);const c=a.length/3;for(let n=0;n<c-2;n+=2)s.push(n,n+1,n+3,n,n+3,n+2);const d=c-2;s.push(d,d+1,1,d,1,0),i.setAttribute("position",new n.a$l(a,3)),i.setIndex(s),super(i),this.side=e;const u=this.material;switch(u.side=n.ehD,u.transparent=!0,u.opacity=0,this.goalOpacity=0,this.opacityDamper=new Ot,this.hitPlane=new n.Kj0(new n._12(2*(l+Ft),2*(h+Ft))),this.hitPlane.visible=!1,this.hitPlane.material.side=n.ehD,this.add(this.hitPlane),o.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.offsetHeight=0}getHit(t,e,i){Nt.set(e,-i),this.hitPlane.visible=!0;const s=t.positionAndNormalFromPoint(Nt,this.hitPlane);return this.hitPlane.visible=!1,null==s?null:s.position}getExpandedHit(t,e,i){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const s=this.getHit(t,e,i);return this.hitPlane.scale.set(1,1,1),s}set offsetHeight(t){t-=.001,"back"===this.side?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return"back"===this.side?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?It:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){var t;const{geometry:e,material:i}=this.hitPlane;e.dispose(),i.dispose(),this.geometry.dispose(),this.material.dispose(),null===(t=this.parent)||void 0===t||t.remove(this)}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut=(t,e)=>({type:"number",number:t,unit:e}),_t=(()=>{const t={},e=1e3;return i=>{const s=i;if(s in t)return t[s];const n=[];let a=0;while(i){if(++a>e){i="";break}const t=qt(i),s=t.nodes[0];if(null==s||0===s.terms.length)break;n.push(s),i=t.remainingInput}return t[s]=n}})(),qt=(()=>{const t=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,i=/^[\),]/,s="(",n="#";return a=>{const r=[];while(a.length){if(a=a.trim(),i.test(a))break;if(a[0]===s){const{nodes:t,remainingInput:e}=Kt(a);a=e,r.push({type:"function",name:{type:"ident",value:"calc"},arguments:t})}else if(t.test(a)){const t=Ht(a),e=t.nodes[0];if(a=t.remainingInput,a[0]===s){const{nodes:t,remainingInput:i}=Kt(a);r.push({type:"function",name:e,arguments:t}),a=i}else r.push(e)}else if(e.test(a))r.push({type:"operator",value:a[0]}),a=a.slice(1);else{const{nodes:t,remainingInput:e}=a[0]===n?Wt(a):Gt(a);if(0===t.length)break;r.push(t[0]),a=e}}return{nodes:[{type:"expression",terms:r}],remainingInput:a}}})(),Ht=(()=>{const t=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const i=e.match(t),s=null==i?e:e.substr(0,i.index),n=null==i?"":e.substr(i.index);return{nodes:[{type:"ident",value:s}],remainingInput:n}}})(),Gt=(()=>{const t=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,i=/^(m|mm|cm|rad|deg|[%])$/;return s=>{const n=s.match(t),a=null==n?"0":n[0];s=null==a?s:s.slice(a.length);const r=s.match(e);let o=null!=r&&""!==r[0]?r[0]:null;const l=null==r?s:s.slice(o.length);return null==o||i.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(a)||0,unit:o}],remainingInput:l}}})(),Wt=(()=>{const t=/^[a-f0-9]*/i;return e=>{e=e.slice(1).trim();const i=e.match(t),s=null==i?[]:[{type:"hex",value:i[0]}];return{nodes:s,remainingInput:null==i?e:e.slice(i[0].length)}}})(),Kt=t=>{const e=[];t=t.slice(1).trim();while(t.length){const i=qt(t);if(e.push(i.nodes[0]),t=i.remainingInput.trim(),","===t[0])t=t.slice(1).trim();else if(")"===t[0]){t=t.slice(1);break}}return{nodes:e,remainingInput:t}},$t=Symbol("visitedTypes");class Xt{constructor(t){this[$t]=t}walk(t,e){const i=t.slice();while(i.length){const t=i.shift();switch(this[$t].indexOf(t.type)>-1&&e(t),t.type){case"expression":i.unshift(...t.terms);break;case"function":i.unshift(t.name,...t.arguments);break}}}}const Yt=Object.freeze({type:"number",number:0,unit:null}),Zt=(t,e=0)=>{let{number:i,unit:s}=t;if(isFinite(i)){if("rad"===t.unit||null==t.unit)return t}else i=e,s="rad";const n="deg"===s&&null!=i,a=n?i:0,r=a*Math.PI/180;return{type:"number",number:r,unit:"rad"}},Jt=(t,e=0)=>{let i,{number:s,unit:n}=t;if(isFinite(s)){if("m"===t.unit)return t}else s=e,n="m";switch(n){default:i=1;break;case"cm":i=.01;break;case"mm":i=.001;break}const a=i*s;return{type:"number",number:a,unit:"m"}},Qt=(()=>{const t=t=>t,e={rad:t,deg:Zt,m:t,mm:Jt,cm:Jt};return(t,i=Yt)=>{isFinite(t.number)||(t.number=i.number,t.unit=i.unit);const{unit:s}=t;if(null==s)return t;const n=e[s];return null==n?i:n(t)}})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var te,ee,ie;const se=Symbol("evaluate"),ne=Symbol("lastValue");class ae{constructor(){this[te]=null}static evaluatableFor(t,e=Yt){if(t instanceof ae)return t;if("number"===t.type)return"%"===t.unit?new le(t,e):t;switch(t.name.value){case"calc":return new pe(t,e);case"env":return new ce(t)}return Yt}static evaluate(t){return t instanceof ae?t.evaluate():t}static isConstant(t){return!(t instanceof ae)||t.isConstant}static applyIntrinsics(t,e){const{basis:i,keywords:s}=e,{auto:n}=s;return i.map(((e,i)=>{const a=null==n[i]?e:n[i];let r=t[i]?t[i]:a;if("ident"===r.type){const t=r.value;t in s&&(r=s[t][i])}return null!=r&&"ident"!==r.type||(r=a),"%"===r.unit?Ut(r.number/100*e.number,e.unit):(r=Qt(r,e),r.unit!==e.unit?e:r)}))}get isConstant(){return!1}evaluate(){return this.isConstant&&null!=this[ne]||(this[ne]=this[se]()),this[ne]}}te=ne;const re=Symbol("percentage"),oe=Symbol("basis");class le extends ae{constructor(t,e){super(),this[re]=t,this[oe]=e}get isConstant(){return!0}[se](){return Ut(this[re].number/100*this[oe].number,this[oe].unit)}}const he=Symbol("identNode");class ce extends ae{constructor(t){super(),this[ee]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;null!=e&&"ident"===e.type&&(this[he]=e)}get isConstant(){return!1}[(ee=he,se)](){if(null!=this[he])switch(this[he].value){case"window-scroll-y":const t=window.pageYOffset,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),i=t/(e-window.innerHeight)||0;return{type:"number",number:i,unit:null}}return Yt}}const de=/[\*\/]/,ue=Symbol("evaluator");class pe extends ae{constructor(t,e=Yt){if(super(),this[ie]=null,1!==t.arguments.length)return;const i=t.arguments[0].terms.slice(),s=[];while(i.length){const t=i.shift();if(s.length>0){const i=s[s.length-1];if("operator"===i.type&&de.test(i.value)){const i=s.pop(),n=s.pop();if(null==n)return;s.push(new be(i,ae.evaluatableFor(n,e),ae.evaluatableFor(t,e)));continue}}s.push("operator"===t.type?t:ae.evaluatableFor(t,e))}while(s.length>2){const[t,i,n]=s.splice(0,3);if("operator"!==i.type)return;s.unshift(new be(i,ae.evaluatableFor(t,e),ae.evaluatableFor(n,e)))}1===s.length&&(this[ue]=s[0])}get isConstant(){return null==this[ue]||ae.isConstant(this[ue])}[(ie=ue,se)](){return null!=this[ue]?ae.evaluate(this[ue]):Yt}}const me=Symbol("operator"),ge=Symbol("left"),fe=Symbol("right");class be extends ae{constructor(t,e,i){super(),this[me]=t,this[ge]=e,this[fe]=i}get isConstant(){return ae.isConstant(this[ge])&&ae.isConstant(this[fe])}[se](){const t=Qt(ae.evaluate(this[ge])),e=Qt(ae.evaluate(this[fe])),{number:i,unit:s}=t,{number:n,unit:a}=e;if(null!=a&&null!=s&&a!=s)return Yt;const r=s||a;let o;switch(this[me].value){case"+":o=i+n;break;case"-":o=i-n;break;case"/":o=i/n;break;case"*":o=i*n;break;default:return Yt}return{type:"number",number:o,unit:r}}}const ve=Symbol("evaluatables"),ye=Symbol("intrinsics");class we extends ae{constructor(t,e){super(),this[ye]=e;const i=t[0],s=null!=i?i.terms:[];this[ve]=e.basis.map(((t,e)=>{const i=s[e];return null==i?{type:"ident",value:"auto"}:"ident"===i.type?i:ae.evaluatableFor(i,t)}))}get isConstant(){for(const t of this[ve])if(!ae.isConstant(t))return!1;return!0}[se](){const t=this[ve].map((t=>ae.evaluate(t)));return ae.applyIntrinsics(t,this[ye]).map((t=>t.number))}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se,xe,Me,Ce;const Te=Symbol("instances"),Ee=Symbol("activateListener"),Ae=Symbol("deactivateListener"),Pe=Symbol("notifyInstances"),Re=Symbol("notify"),Le=Symbol("callback");class ke{constructor(t){this[Le]=t}static[Pe](){for(const t of ke[Te])t[Re]()}static[(Se=Te,Ee)](){window.addEventListener("scroll",this[Pe],{passive:!0})}static[Ae](){window.removeEventListener("scroll",this[Pe])}observe(){0===ke[Te].size&&ke[Ee](),ke[Te].add(this)}disconnect(){ke[Te].delete(this),0===ke[Te].size&&ke[Ae]()}[Re](){this[Le]()}}ke[Se]=new Set;const Oe=Symbol("computeStyleCallback"),Fe=Symbol("astWalker"),De=Symbol("dependencies"),Ie=Symbol("onScroll");class Ve{constructor(t){this[xe]={},this[Me]=new Xt(["function"]),this[Ce]=()=>{this[Oe]({relatedState:"window-scroll"})},this[Oe]=t}observeEffectsFor(t){const e={},i=this[De];this[Fe].walk(t,(t=>{const{name:s}=t,n=t.arguments[0],a=n.terms[0];if("env"===s.value&&null!=a&&"ident"===a.type)switch(a.value){case"window-scroll-y":if(null==e["window-scroll"]){const t="window-scroll"in i?i["window-scroll"]:new ke(this[Ie]);t.observe(),delete i["window-scroll"],e["window-scroll"]=t}break}}));for(const s in i){const t=i[s];t.disconnect()}this[De]=e}dispose(){for(const t in this[De]){const e=this[De][t];e.disconnect()}}}xe=De,Me=Fe,Ce=Ie;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=t=>{const e=t.observeEffects||!1,i=t.intrinsics instanceof Function?t.intrinsics:()=>t.intrinsics;return(s,n)=>{const a=s.updated,r=s.connectedCallback,o=s.disconnectedCallback,l=Symbol(`${n}StyleEffector`),h=Symbol(`${n}StyleEvaluator`),c=Symbol(`${n}UpdateEvaluator`),d=Symbol(`${n}EvaluateAndSync`);Object.defineProperties(s,{[l]:{value:null,writable:!0},[h]:{value:null,writable:!0},[c]:{value:function(){const t=_t(this[n]);this[h]=new we(t,i(this)),null==this[l]&&e&&(this[l]=new Ve((()=>this[d]()))),null!=this[l]&&this[l].observeEffectsFor(t)}},[d]:{value:function(){if(null==this[h])return;const e=this[h].evaluate();this[t.updateHandler](e)}},updated:{value:function(t){t.has(n)&&(this[c](),this[d]()),a.call(this,t)}},connectedCallback:{value:function(){r.call(this),this.requestUpdate(n,this[n])}},disconnectedCallback:{value:function(){o.call(this),null!=this[l]&&(this[l].dispose(),this[l]=null)}}})}},Ne=t=>t<.5?2*t*t:(4-2*t)*t-1,je=(t,e,i=Ne)=>s=>t+(e-t)*i(s),Be=(t,e)=>{const i=t=>e=>t+=e,s=e.map(i(0));return e=>{e=C(e,0,1),e*=s[s.length-1];const i=s.findIndex((t=>t>=e)),n=i<1?0:s[i-1],a=s[i];return t[i]((e-n)/(a-n))}},Ue=t=>{const e=[],i=[];let s=t.initialValue;for(let n=0;n<t.keyframes.length;++n){const a=t.keyframes[n],{value:r,frames:o}=a,l=a.ease||Ne,h=je(s,r,l);e.push(h),i.push(o),s=r}return Be(e,i)};var _e=i(40019),qe=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=5e3,Ge=Ue({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),We=Ue({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),Ke=30,$e=12,Xe="0deg 75deg 105%",Ye="auto auto auto",Ze="auto",Je=2.2,Qe=["front","right","back","left"],ti=["upper-","","lower-"],ei=3e3,ii=". Use mouse, touch or arrow keys to move.",si={AUTO:"auto",NONE:"none"},ni={BASIC:"basic",WIGGLE:"wiggle"},ai={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},ri=()=>({basis:[Zt(Ut(Ke,"deg"))],keywords:{auto:[null]}}),oi=()=>({basis:[Zt(Ut($e,"deg"))],keywords:{auto:[null]}}),li=(()=>{const t=_t(Xe)[0].terms,e=Qt(t[0]),i=Qt(t[1]);return t=>{const s=t[Qr].idealCameraDistance();return{basis:[e,i,Ut(s,"m")],keywords:{auto:[null,null,Ut(105,"%")]}}}})(),hi=t=>{const e=Je*t[Qr].boundingSphere.radius;return{basis:[Ut(-1/0,"rad"),Ut(Math.PI/8,"rad"),Ut(e,"m")],keywords:{auto:[null,null,null]}}},ci=t=>{const e=li(t),i=new we([],e),s=i.evaluate()[2];return{basis:[Ut(1/0,"rad"),Ut(Math.PI-Math.PI/8,"rad"),Ut(s,"m")],keywords:{auto:[null,null,null]}}},di=t=>{const e=t[Qr].boundingBox.getCenter(new n.Pa4);return{basis:[Ut(e.x,"m"),Ut(e.y,"m"),Ut(e.z,"m")],keywords:{auto:[null,null,null]}}},ui=Math.PI/2,pi=Math.PI/3,mi=ui/2,gi=2*Math.PI,fi=Symbol("controls"),bi=Symbol("panElement"),vi=Symbol("promptElement"),yi=Symbol("promptAnimatedContainer"),wi=Symbol("fingerAnimatedContainers"),Si=Symbol("deferInteractionPrompt"),xi=Symbol("updateAria"),Mi=Symbol("updateCameraForRadius"),Ci=Symbol("cancelPrompts"),Ti=Symbol("onChange"),Ei=Symbol("onPointerChange"),Ai=Symbol("waitingToPromptUser"),Pi=Symbol("userHasInteracted"),Ri=Symbol("promptElementVisibleTime"),Li=Symbol("lastPromptOffset"),ki=Symbol("cancellationSource"),Oi=Symbol("lastSpherical"),Fi=Symbol("jumpCamera"),Di=Symbol("initialized"),Ii=Symbol("maintainThetaPhi"),Vi=Symbol("syncCameraOrbit"),zi=Symbol("syncFieldOfView"),Ni=Symbol("syncCameraTarget"),ji=Symbol("syncMinCameraOrbit"),Bi=Symbol("syncMaxCameraOrbit"),Ui=Symbol("syncMinFieldOfView"),_i=Symbol("syncMaxFieldOfView"),qi=t=>{var e,i,a,r,o,l,h,c,d,u,p,m,g,f,b,v,y;class w extends t{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=Xe,this.cameraTarget=Ye,this.fieldOfView=Ze,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=ei,this.interactionPrompt=si.AUTO,this.interactionPromptStyle=ni.WIGGLE,this.orbitSensitivity=1,this.touchAction=ai.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=kt,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[i]=this.shadowRoot.querySelector("#prompt"),this[a]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[r]=this.shadowRoot.querySelector(".pan-target"),this[o]=0,this[l]=1/0,this[h]=!1,this[c]=!1,this[d]=Qi.AUTOMATIC,this[u]=new ts(this[Qr].camera,this[Zr],this[Qr]),this[p]=new n.$V,this[m]=!1,this[g]=!1,this[f]=!1,this[b]=()=>{const t=this[fi].changeSource;this[ki]=t,t===Qi.USER_INTERACTION&&(this[Pi]=!0,this[Si]())},this[v]=()=>{this[xi](),this[to]();const t=this[fi].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:t}}))},this[y]=t=>{"pointer-change-start"===t.type?this[Yr].classList.add("pointer-tumbling"):this[Yr].classList.remove("pointer-tumbling")}}get inputSensitivity(){return this[fi].inputSensitivity}set inputSensitivity(t){this[fi].inputSensitivity=t}getCameraOrbit(){const{theta:t,phi:e,radius:i}=this[Oi];return{theta:t,phi:e,radius:i,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return ho(this[no].isPresenting?this[no].arRenderer.target:this[Qr].getTarget())}getFieldOfView(){return this[fi].getFieldOfView()}getMinimumFieldOfView(){return this[fi].options.minimumFieldOfView}getMaximumFieldOfView(){return this[fi].options.maximumFieldOfView}getIdealAspect(){return this[Qr].idealAspect}jumpCameraToGoal(){this[Fi]=!0,this.requestUpdate(Fi,!1)}resetInteractionPrompt(){this[Li]=0,this[Ri]=1/0,this[Pi]=!1,this[Ai]=this.interactionPrompt===si.AUTO&&this.cameraControls}zoom(t){const e=new WheelEvent("wheel",{deltaY:-30*t});this[Zr].dispatchEvent(e)}connectedCallback(){super.connectedCallback(),this[fi].addEventListener("user-interaction",this[Ci]),this[fi].addEventListener("pointer-change-start",this[Ei]),this[fi].addEventListener("pointer-change-end",this[Ei])}disconnectedCallback(){super.disconnectedCallback(),this[fi].removeEventListener("user-interaction",this[Ci]),this[fi].removeEventListener("pointer-change-start",this[Ei]),this[fi].removeEventListener("pointer-change-end",this[Ei])}updated(t){super.updated(t);const e=this[fi],i=this[Qr];if(t.has("cameraControls")&&(this.cameraControls?(e.enableInteraction(),this.interactionPrompt===si.AUTO&&(this[Ai]=!0)):(e.disableInteraction(),this[Si]()),this[Zr].setAttribute("aria-label",this[qr])),t.has("disableZoom")&&(e.disableZoom=this.disableZoom),t.has("disablePan")&&(e.enablePan=!this.disablePan),t.has("disableTap")&&(e.enableTap=!this.disableTap),(t.has("interactionPrompt")||t.has("cameraControls")||t.has("src"))&&(this.interactionPrompt===si.AUTO&&this.cameraControls&&!this[Pi]?this[Ai]=!0:this[Si]()),t.has("interactionPromptStyle")&&(this[yi].style.opacity=this.interactionPromptStyle==ni.BASIC?"1":"0"),t.has("touchAction")){const t=this.touchAction;e.applyOptions({touchAction:t}),e.updateTouchActionStyle()}t.has("orbitSensitivity")&&(e.orbitSensitivity=this.orbitSensitivity),t.has("interpolationDecay")&&(e.setDamperDecayTime(this.interpolationDecay),i.setTargetDamperDecayTime(this.interpolationDecay)),!0===this[Fi]&&Promise.resolve().then((()=>{e.jumpToGoal(),i.jumpToGoal(),this[Ti](),this[Fi]=!1}))}async updateFraming(){const t=this[Qr],e=t.adjustedFoV(t.framedFoVDeg);await t.updateFraming();const i=t.adjustedFoV(t.framedFoVDeg),s=this[fi].getFieldOfView()/e;this[fi].setFieldOfView(i*s),this[Ii]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(t,e,i){const s=this[Zr],n=this[wi];if("1"===n[0].style.opacity)return void _e.warn("interact() failed because an existing interaction is running.");const a=new Array;a.push({x:Ue(e.x),y:Ue(e.y)});const r=[{x:a[0].x(0),y:a[0].y(0)}];null!=i&&(a.push({x:Ue(i.x),y:Ue(i.y)}),r.push({x:a[1].x(0),y:a[1].y(0)}));let o=performance.now();const{width:l,height:h}=this[Qr],c=t=>{for(const[e,i]of r.entries()){const{style:a}=n[e];a.transform=`translateX(${l*i.x}px) translateY(${h*i.y}px)`,"pointerdown"===t?a.opacity="1":"pointerup"===t&&(a.opacity="0");const r={pointerId:e-5678,pointerType:"touch",target:s,clientX:l*i.x,clientY:h*i.y,altKey:!0};s.dispatchEvent(new PointerEvent(t,r))}},d=()=>{const e=this[ki];if(e!==Qi.AUTOMATIC||!s.isConnected){for(const t of this[wi])t.style.opacity="0";return c("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:e}})),void document.removeEventListener("visibilitychange",u)}const i=Math.min(1,(performance.now()-o)/t);for(const[t,s]of r.entries())s.x=a[t].x(i),s.y=a[t].y(i);c("pointermove"),i<1?requestAnimationFrame(d):(c("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:Qi.AUTOMATIC}})),document.removeEventListener("visibilitychange",u))},u=()=>{let t=0;"hidden"===document.visibilityState?t=performance.now()-o:o=performance.now()-t};document.addEventListener("visibilitychange",u),c("pointerdown"),this[ki]=Qi.AUTOMATIC,requestAnimationFrame(d)}[(e=vi,i=yi,a=wi,r=bi,o=Li,l=Ri,h=Pi,c=Ai,d=ki,u=fi,p=Oi,m=Fi,g=Di,f=Ii,zi)](t){const e=this[fi],i=this[Qr];i.framedFoVDeg=180*t[0]/Math.PI,e.changeSource=Qi.NONE,e.setFieldOfView(i.adjustedFoV(i.framedFoVDeg)),this[Ci]()}[Vi](t){const e=this[fi];if(this[Ii]){const{theta:e,phi:i}=this.getCameraOrbit();t[0]=e,t[1]=i,this[Ii]=!1}e.changeSource=Qi.NONE,e.setOrbit(t[0],t[1],t[2]),this[Ci]()}[ji](t){this[fi].applyOptions({minimumAzimuthalAngle:t[0],minimumPolarAngle:t[1],minimumRadius:t[2]}),this.jumpCameraToGoal()}[Bi](t){this[fi].applyOptions({maximumAzimuthalAngle:t[0],maximumPolarAngle:t[1],maximumRadius:t[2]}),this[Mi](t[2]),this.jumpCameraToGoal()}[Ui](t){this[fi].applyOptions({minimumFieldOfView:180*t[0]/Math.PI}),this.jumpCameraToGoal()}[_i](t){const e=this[Qr].adjustedFoV(180*t[0]/Math.PI);this[fi].applyOptions({maximumFieldOfView:e}),this.jumpCameraToGoal()}[Ni](t){const[e,i,s]=t;this[no].arRenderer.isPresenting||this[Qr].setTarget(e,i,s),this[fi].changeSource=Qi.NONE,this[no].arRenderer.updateTarget(),this[Ci]()}[eo](t,e){if(super[eo](t,e),this[no].isPresenting||!this[oo]())return;const i=this[fi],s=this[Qr],n=performance.now();if(this[Ai]&&this.loaded&&n>this[Kr]+this.interactionPromptThreshold&&(this[Ai]=!1,this[Ri]=n,this[vi].classList.add("visible")),isFinite(this[Ri])&&this.interactionPromptStyle===ni.WIGGLE){const t=(n-this[Ri])/He%1,e=Ge(t),a=We(t);if(this[yi].style.opacity=`${a}`,e!==this[Li]){const t=e*s.width*.05,n=(e-this[Li])*Math.PI/16;this[yi].style.transform=`translateX(${t}px)`,i.changeSource=Qi.AUTOMATIC,i.adjustOrbit(n,0,0),this[Li]=e}}const a=i.update(t,e),r=s.updateTarget(e);(a||r)&&this[Ti]()}[Si](){this[Ai]=!1,this[vi].classList.remove("visible"),this[Ri]=1/0}[Mi](t){const e=Math.max(this[Qr].boundingSphere.radius,t),i=0,s=2*e;this[fi].updateNearFar(i,s)}[xi](){const{theta:t,phi:e}=this[fi].getCameraSpherical(this[Oi]),i=(4+Math.floor((t%gi+mi)/ui))%4,s=Math.floor(e/pi),n=Qe[i],a=ti[s];this[Wr](`View from stage ${a}${n}`)}get[qr](){return super[qr].replace(/\.$/,"")+(this.cameraControls?ii:"")}async[so](t){const e=this[fi],i=this[Qr],s=i.adjustedFoV(i.framedFoVDeg);super[so](t);const n=i.adjustedFoV(i.framedFoVDeg)/s,a=e.getFieldOfView()*(isFinite(n)?n:1);e.updateAspect(this[Qr].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[fi].setFieldOfView(a),this.jumpCameraToGoal()}[io](){super[io](),this[Di]?this[Ii]=!0:this[Di]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return b=Ci,v=Ti,y=Ei,qe([(0,s.Cb)({type:Boolean,attribute:"camera-controls"})],w.prototype,"cameraControls",void 0),qe([ze({intrinsics:li,observeEffects:!0,updateHandler:Vi}),(0,s.Cb)({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],w.prototype,"cameraOrbit",void 0),qe([ze({intrinsics:di,observeEffects:!0,updateHandler:Ni}),(0,s.Cb)({type:String,attribute:"camera-target",hasChanged:()=>!0})],w.prototype,"cameraTarget",void 0),qe([ze({intrinsics:ri,observeEffects:!0,updateHandler:zi}),(0,s.Cb)({type:String,attribute:"field-of-view",hasChanged:()=>!0})],w.prototype,"fieldOfView",void 0),qe([ze({intrinsics:hi,updateHandler:ji}),(0,s.Cb)({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],w.prototype,"minCameraOrbit",void 0),qe([ze({intrinsics:ci,updateHandler:Bi}),(0,s.Cb)({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],w.prototype,"maxCameraOrbit",void 0),qe([ze({intrinsics:oi,updateHandler:Ui}),(0,s.Cb)({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],w.prototype,"minFieldOfView",void 0),qe([ze({intrinsics:ri,updateHandler:_i}),(0,s.Cb)({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],w.prototype,"maxFieldOfView",void 0),qe([(0,s.Cb)({type:Number,attribute:"interaction-prompt-threshold"})],w.prototype,"interactionPromptThreshold",void 0),qe([(0,s.Cb)({type:String,attribute:"interaction-prompt"})],w.prototype,"interactionPrompt",void 0),qe([(0,s.Cb)({type:String,attribute:"interaction-prompt-style"})],w.prototype,"interactionPromptStyle",void 0),qe([(0,s.Cb)({type:Number,attribute:"orbit-sensitivity"})],w.prototype,"orbitSensitivity",void 0),qe([(0,s.Cb)({type:String,attribute:"touch-action"})],w.prototype,"touchAction",void 0),qe([(0,s.Cb)({type:Boolean,attribute:"disable-zoom"})],w.prototype,"disableZoom",void 0),qe([(0,s.Cb)({type:Boolean,attribute:"disable-pan"})],w.prototype,"disablePan",void 0),qe([(0,s.Cb)({type:Boolean,attribute:"disable-tap"})],w.prototype,"disableTap",void 0),qe([(0,s.Cb)({type:Number,attribute:"interpolation-decay"})],w.prototype,"interpolationDecay",void 0),w},Hi=.018,Gi=2,Wi=300,Ki=new n.FM8,$i=new n.Pa4,Xi=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),Yi=Math.PI/8,Zi=.04,Ji=10,Qi={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class ts extends n.pBf{constructor(t,e,i){super(),this.camera=t,this.element=e,this.scene=i,this.orbitSensitivity=1,this.inputSensitivity=1,this.changeSource=Qi.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new n.Vkp,this.panPerPixel=0,this.spherical=new n.$V,this.goalSpherical=new n.$V,this.thetaDamper=new Ot,this.phiDamper=new Ot,this.radiusDamper=new Ot,this.logFov=Math.log(Xi.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Ot,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=t=>{if(this.enablePan)t.preventDefault();else for(const e of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:e.id})))},this.touchModeZoom=(t,e)=>{if(!this._disableZoom){const t=this.twoTouchDistance(this.pointers[0],this.pointers[1]),e=Zi*(this.lastSeparation-t)*50/this.scene.height;this.lastSeparation=t,this.userAdjustOrbit(0,0,e)}this.panPerPixel>0&&this.movePan(t,e)},this.disableScroll=t=>{t.preventDefault()},this.touchModeRotate=(t,e)=>{const{touchAction:i}=this._options;if(!this.touchDecided&&"none"!==i){this.touchDecided=!0;const s=Math.abs(t),n=Math.abs(e);if(this.changeSource===Qi.USER_INTERACTION&&("pan-y"===i&&n>s||"pan-x"===i&&s>n))return void(this.touchMode=null);this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(t,e)},this.onPointerDown=t=>{if(this.pointers.length>2)return;const{element:e}=this;0===this.pointers.length&&(e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=t.clientX,this.startPointerPosition.clientY=t.clientY,this.startTime=performance.now());try{e.setPointerCapture(t.pointerId)}catch(G){}this.pointers.push({clientX:t.clientX,clientY:t.clientY,id:t.pointerId}),this.isUserPointing=!1,"touch"===t.pointerType?(this.changeSource=t.altKey?Qi.AUTOMATIC:Qi.USER_INTERACTION,this.onTouchChange(t)):(this.changeSource=Qi.USER_INTERACTION,this.onMouseDown(t)),this.changeSource===Qi.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=t=>{const e=this.pointers.find((e=>e.id===t.pointerId));if(null==e)return;if("mouse"===t.pointerType&&0===t.buttons)return void this.onPointerUp(t);const i=this.pointers.length,s=(t.clientX-e.clientX)/i,n=(t.clientY-e.clientY)/i;0===s&&0===n||(e.clientX=t.clientX,e.clientY=t.clientY,"touch"===t.pointerType?(this.changeSource=t.altKey?Qi.AUTOMATIC:Qi.USER_INTERACTION,null!==this.touchMode&&this.touchMode(s,n)):(this.changeSource=Qi.USER_INTERACTION,this.panPerPixel>0?this.movePan(s,n):this.handleSinglePointerMove(s,n)))},this.onPointerUp=t=>{const{element:e}=this,i=this.pointers.findIndex((e=>e.id===t.pointerId));-1!==i&&this.pointers.splice(i,1),this.panPerPixel>0&&!t.altKey&&this.resetRadius(),0===this.pointers.length?(e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(t)):null!==this.touchMode&&this.onTouchChange(t),this.scene.element[bi].style.opacity=0,e.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=t=>{this.changeSource=Qi.USER_INTERACTION;const e=t.deltaY*(1==t.deltaMode?18:1)*Zi/30;this.userAdjustOrbit(0,0,e),t.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=t=>{const{changeSource:e}=this;this.changeSource=Qi.USER_INTERACTION;const i=t.shiftKey&&this.enablePan?this.panKeyCodeHandler(t):this.orbitZoomKeyCodeHandler(t);i?(t.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=e},this._options=Object.assign({},Xi),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(!1===this._interactionEnabled){const{element:t}=this;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchmove",(()=>{}),{passive:!1}),t.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(!0===this._interactionEnabled){const{element:t}=this;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("contextmenu",this.onContext),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,!0===t?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new n.$V){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.far=0===e?2:e,this.camera.near=Math.max(t,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,i=this.goalSpherical.radius){const{minimumAzimuthalAngle:s,maximumAzimuthalAngle:n,minimumPolarAngle:a,maximumPolarAngle:r,minimumRadius:o,maximumRadius:l}=this._options,{theta:h,phi:c,radius:d}=this.goalSpherical,u=C(t,s,n);isFinite(s)||isFinite(n)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-u)+u);const p=C(e,a,r),m=C(i,o,l);return(u!==h||p!==c||m!==d)&&(!!(isFinite(u)&&isFinite(p)&&isFinite(m))&&(this.goalSpherical.theta=u,this.goalSpherical.phi=p,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),!0))}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:i}=this._options;t=C(t,e,i),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,i){const{theta:s,phi:n,radius:a}=this.goalSpherical,{minimumRadius:r,maximumRadius:o,minimumFieldOfView:l,maximumFieldOfView:h}=this._options,c=this.spherical.theta-s,d=Math.PI-.001,u=s-C(t,-d-c,d-c),p=n-e,m=0===i?0:((i>0?o:r)-a)/(Math.log(i>0?h:l)-this.goalLogFov),g=a+i*(isFinite(m)?m:2*(o-r));if(this.setOrbit(u,p,g),0!==i){const t=this.goalLogFov+i;this.setFieldOfView(Math.exp(t))}}jumpToGoal(){this.update(0,Rt)}update(t,e){if(this.isStationary())return!1;const{maximumPolarAngle:i,maximumRadius:s}=this._options,n=this.spherical.theta-this.goalSpherical.theta;return Math.abs(n)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(n)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,i),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,s),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&"none"!==e?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new n.USm(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(t,e,i){this.adjustOrbit(t*this.orbitSensitivity*this.inputSensitivity,e*this.orbitSensitivity*this.inputSensitivity,i*this.inputSensitivity)}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI),i=e-Math.floor(e);return 2*i*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.scene.height}twoTouchDistance(t,e){const{clientX:i,clientY:s}=t,{clientX:n,clientY:a}=e,r=n-i,o=a-s;return Math.sqrt(r*r+o*o)}handleSinglePointerMove(t,e){const i=this.pixelLengthToSphericalAngle(t),s=this.pixelLengthToSphericalAngle(e);!1===this.isUserPointing&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(i,s,0)}initializePan(){const{theta:t,phi:e}=this.spherical,i=t-this.scene.yaw;this.panPerPixel=Hi/this.scene.height,this.panProjection.set(-Math.cos(i),-Math.cos(e)*Math.sin(i),0,0,Math.sin(e),0,Math.sin(i),-Math.cos(e)*Math.cos(i),0)}movePan(t,e){const{scene:i}=this,s=$i.set(t,e,0).multiplyScalar(this.inputSensitivity),n=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;s.multiplyScalar(n);const a=i.getTarget();a.add(s.applyMatrix3(this.panProjection)),i.boundingSphere.clampPoint(a,a),i.setTarget(a.x,a.y,a.z)}recenter(t){if(performance.now()>this.startTime+Wi||Math.abs(t.clientX-this.startPointerPosition.clientX)>Gi||Math.abs(t.clientY-this.startPointerPosition.clientY)>Gi)return;const{scene:e}=this,i=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(null==i){const{cameraTarget:t}=e.element;e.element.cameraTarget="",e.element.cameraTarget=t,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(i.position),e.setTarget(i.position.x,i.position.y,i.position.z)}resetRadius(){const{scene:t}=this,e=t.positionAndNormalFromPoint(Ki.set(0,0));if(null==e)return;t.target.worldToLocal(e.position);const i=t.getTarget(),{theta:s,phi:n}=this.spherical,a=s-t.yaw,r=$i.set(Math.sin(n)*Math.sin(a),Math.cos(n),Math.sin(n)*Math.cos(a)),o=r.dot(e.position.sub(i));i.add(r.multiplyScalar(o)),t.setTarget(i.x,i.y,i.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-o)}onTouchChange(t){if(1===this.pointers.length)this.touchMode=this.touchModeRotate;else{if(this._disableZoom)return this.touchMode=null,void this.element.removeEventListener("touchmove",this.disableScroll);this.touchMode=this.touchDecided&&null===this.touchMode?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&null!=this.touchMode&&(this.initializePan(),t.altKey||(this.scene.element[bi].style.opacity=1))}}onMouseDown(t){this.panPerPixel=0,this.enablePan&&(2===t.button||t.ctrlKey||t.metaKey||t.shiftKey)&&(this.initializePan(),this.scene.element[bi].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(t){let e=!0;switch(t.key){case"PageUp":this.userAdjustOrbit(0,0,Zi);break;case"PageDown":this.userAdjustOrbit(0,0,-1*Zi);break;case"ArrowUp":this.userAdjustOrbit(0,-Yi,0);break;case"ArrowDown":this.userAdjustOrbit(0,Yi,0);break;case"ArrowLeft":this.userAdjustOrbit(-Yi,0,0);break;case"ArrowRight":this.userAdjustOrbit(Yi,0,0);break;default:e=!1;break}return e}panKeyCodeHandler(t){this.initializePan();let e=!0;switch(t.key){case"ArrowUp":this.movePan(0,-1*Ji);break;case"ArrowDown":this.movePan(0,Ji);break;case"ArrowLeft":this.movePan(-1*Ji,0);break;case"ArrowRight":this.movePan(Ji,0);break;default:e=!1;break}return e}}var es=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=30,ss=.8,ns=1.5,as=20,rs=1.3,os=1/rs,ls=.25,hs=10,cs={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},ds={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},us=new n.Pa4,ps=new n.yGw,ms=new n.Pa4,gs=new n.cPb(45,1,.1,100);class fs extends n.pBf{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new n.Pa4,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new n.Pa4,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new n.Pa4,this.goalYaw=0,this.goalScale=1,this.xDamper=new Ot,this.yDamper=new Ot,this.zDamper=new Ot,this.yawDamper=new Ot,this.scaleDamper=new Ot,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{null!=this.placementBox&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new Bt(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const e=this.transientHitTestSource;if(null==e)return;const i=this.frame.getHitTestResultsForTransientInput(e),s=this.presentedScene,n=this.placementBox;if(1===i.length){this.inputSource=t.inputSource;const{axes:e}=this.inputSource.gamepad,i=n.getHit(this.presentedScene,e[0],e[1]);n.show=!0,null!=i?(this.isTranslating=!0,this.lastDragPosition.copy(i)):!1===this.placeOnWall&&(this.isRotating=!0,this.lastAngle=e[0]*ns)}else if(2===i.length){n.show=!0,this.isTwoFingering=!0;const{separation:t}=this.fingerPolar(i);this.firstRatio=t/s.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){w();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return w(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return es.warn("Request to present in WebXR denied:"),es.warn(t),es.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&es.warn("Cannot present while a model is already presenting");let i=new Promise(((t,e)=>{requestAnimationFrame((()=>t()))}));t.setHotspotsVisibility(!1),t.queueRender(),await i,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),!0===e&&(this.xrLight=new Pt.K(this.threeRenderer),this.xrLight.addEventListener("estimationstart",(()=>{if(!this.isPresenting||null==this.xrLight)return;const t=this.presentedScene;t.add(this.xrLight),t.environment=this.xrLight.environment})));const s=await this.resolveARSession();s.addEventListener("end",(()=>{this.postSessionCleanup()}),{once:!0});const n=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");n.classList.add("enabled"),n.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=n;const a=await s.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,t.background=null,this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.element.addEventListener("load",this.onUpdateScene);const r=as*Math.PI/180,o=!0===this.placeOnWall?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(r),z:-Math.cos(r)});s.requestHitTestSource({space:a,offsetRay:o}).then((t=>{this.initialHitSource=t})),this.currentSession=s,this.placementBox=new Bt(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:cs.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise((t=>{this.resolveCleanup=t}));try{await this.currentSession.end(),await t}catch(e){es.warn("Error while trying to end WebXR AR session"),es.warn(e),this.postSessionCleanup()}}get isPresenting(){return null!=this.presentedScene}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(null!=t){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;null!=t&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(this._presentedScene=null,null!=e){const{element:t}=e;null!=this.xrLight&&(e.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),e.position.set(0,0,0),e.scale.set(1,1,1),e.setShadowOffset(0);const i=this.turntableRotation;null!=i&&(e.yaw=i);const s=this.oldShadowIntensity;null!=s&&e.setShadowIntensity(s),e.setEnvironmentAndSkybox(t[I],t[V]);const n=this.oldTarget;e.setTarget(n.x,n.y,n.z),e.xrCamera=null,e.element.removeEventListener("load",this.onUpdateScene),e.orientHotspots(0),t.requestUpdate("cameraTarget"),t.requestUpdate("maxCameraOrbit"),t[so](t.getBoundingClientRect()),requestAnimationFrame((()=>{e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:Qi.NONE}}))}))}this.renderer.height=0;const i=this.exitWebXRButtonContainer;null!=i&&(i.classList.remove("enabled"),i.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const s=this.transientHitTestSource;null!=s&&(s.cancel(),this.transientHitTestSource=null);const n=this.initialHitSource;null!=n&&(n.cancel(),this.initialHitSource=null),null!=this.placementBox&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,null!=this.resolveCleanup&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:cs.NOT_PRESENTING})}updateView(t){const e=this.presentedScene,i=this.threeRenderer.xr;i.updateCamera(gs),e.xrCamera=i.getCamera();const{elements:s}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(s[1],s[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const e=t.recommendedViewportScale;t.requestViewportScale(Math.max(e,ls))}const n=i.getBaseLayer();if(null!=n){const e=n instanceof XRWebGLLayer?n.getViewport(t):i.getBinding().getViewSubImage(n,t).viewport;this.threeRenderer.setViewport(e.x,e.y,e.width,e.height)}}placeInitially(){const t=this.presentedScene,{position:e,element:i}=t,s=t.getCamera(),{width:n,height:a}=this.overlay.getBoundingClientRect();t.setSize(n,a),s.projectionMatrixInverse.copy(s.projectionMatrix).invert();const{theta:r,radius:o}=i.getCameraOrbit(),l=s.getWorldDirection(us);t.yaw=Math.atan2(-l.x,-l.z)-r,this.goalYaw=t.yaw,e.copy(s.position).add(l.multiplyScalar(o)),this.updateTarget();const h=t.getTarget();e.add(h).sub(this.oldTarget),this.goalPosition.copy(e),t.setHotspotsVisibility(!0);const{session:c}=this.frame;c.addEventListener("selectstart",this.onSelectStart),c.addEventListener("selectend",this.onSelectEnd),c.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then((t=>{this.transientHitTestSource=t}))}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return null!=e&&(us.copy(e).sub(this.presentedScene.getCamera().position),us.length()>hs)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),i=t.getPose(e);if(null==i)return null;const s=ps.fromArray(i.transform.matrix);return!0===this.placeOnWall&&(this.goalYaw=Math.atan2(s.elements[4],s.elements[6])),s.elements[5]>.75!==this.placeOnWall?ms.setFromMatrixPosition(s):null}moveToFloor(t){const e=this.initialHitSource;if(null==e)return;const i=t.getHitTestResults(e);if(0==i.length)return;const s=i[0],n=this.getHitPoint(s);null!=n&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(n):this.goalPosition.y=n.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:cs.OBJECT_PLACED}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,i=t[1].inputSource.gamepad.axes,s=i[0]-e[0],n=i[1]-e[1],a=Math.atan2(n,s);let r=this.lastAngle-a;return r>Math.PI?r-=2*Math.PI:r<-Math.PI&&(r+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(s*s+n*n),deltaYaw:r}}processInput(t){const e=this.transientHitTestSource;if(null==e)return;if(!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const i=t.getHitTestResultsForTransientInput(e),s=this.presentedScene,n=s.scale.x;if(this.isTwoFingering)if(i.length<2)this.isTwoFingering=!1;else{const{separation:t,deltaYaw:e}=this.fingerPolar(i);if(!1===this.placeOnWall&&(this.goalYaw+=e),s.canScale){const e=t/this.firstRatio;this.goalScale=e<rs&&e>os?1:e}}else if(2!==i.length)if(this.isRotating){const t=this.inputSource.gamepad.axes[0]*ns;this.goalYaw+=t-this.lastAngle,this.lastAngle=t}else this.isTranslating&&i.forEach((t=>{if(t.inputSource!==this.inputSource)return;let e=null;if(t.results.length>0&&(e=this.getHitPoint(t.results[0])),null==e&&(e=this.getTouchLocation()),null!=e){if(this.goalPosition.sub(this.lastDragPosition),!1===this.placeOnWall){const t=e.y-this.lastDragPosition.y;if(t<0){this.placementBox.offsetHeight=t/n,this.presentedScene.setShadowOffset(t);const i=us.copy(s.getCamera().position),a=-t/(i.y-e.y);i.multiplyScalar(a),e.multiplyScalar(1-a).add(i)}}this.goalPosition.add(e),this.lastDragPosition.copy(e)}}));else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:t}=this.fingerPolar(i);this.firstRatio=t/n}}moveScene(t){const e=this.presentedScene,{position:i,yaw:s}=e,n=e.boundingSphere.radius,a=this.goalPosition,r=e.scale.x,o=this.placementBox;let l=Qi.NONE;if(!a.equals(i)||this.goalScale!==r){l=Qi.USER_INTERACTION;let{x:s,y:h,z:c}=i;s=this.xDamper.update(s,a.x,t,n),h=this.yDamper.update(h,a.y,t,n),c=this.zDamper.update(c,a.z,t,n),i.set(s,h,c);const d=this.scaleDamper.update(r,this.goalScale,t,1);if(e.scale.set(d,d,d),!this.isTranslating){const t=a.y-h;this.placementComplete&&!1===this.placeOnWall?(o.offsetHeight=t/d,e.setShadowOffset(t)):0===t&&(this.placementComplete=!0,o.show=!1,e.setShadowIntensity(ss))}}o.updateOpacity(t),e.updateTarget(t),e.yaw=this.yawDamper.update(s,this.goalYaw,t,Math.PI),e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:l}}))}onWebXRFrame(t,e){this.frame=e,++this.frames;const i=this.threeRenderer.xr.getReferenceSpace(),s=e.getViewerPose(i);null==s&&!0===this.tracking&&this.frames>is&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:ds.NOT_TRACKING}));const n=this.presentedScene;if(null==s||null==n||!n.element.loaded)return void this.threeRenderer.clear();!1===this.tracking&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:ds.TRACKING}));let a=!0;for(const r of s.views){if(this.updateView(r),a){this.moveToFloor(e),this.processInput(e);const i=t-this.lastTick;this.moveScene(i),this.renderer.preRender(n,t,i),this.lastTick=t,n.renderShadow(this.threeRenderer)}this.threeRenderer.render(n,n.getCamera()),a=!1}}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(t){t.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then((()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:t,THREE:{ShaderMaterial:n.jyz,Texture:n.xEZ,Mesh:n.Kj0,Scene:n.xsS,PlaneGeometry:n._12,OrthographicCamera:n.iKG,WebGLRenderTarget:n.dd2}}}))}))}addScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:t}}))}removeScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:t}}))}}var vs=i(34046);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ys=Symbol("prepared"),ws=Symbol("prepare"),Ss=Symbol("preparedGLTF"),xs=Symbol("clone");class Ms{constructor(t){this[Ss]=t}static prepare(t){if(null==t.scene)throw new Error("Model does not have a scene");if(t[ys])return t;const e=this[ws](t);return e[ys]=!0,e}static[ws](t){const{scene:e}=t,i=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:i})}get parser(){return this[Ss].parser}get animations(){return this[Ss].animations}get scene(){return this[Ss].scene}get scenes(){return this[Ss].scenes}get cameras(){return this[Ss].cameras}get asset(){return this[Ss].asset}get userData(){return this[Ss].userData}clone(){const t=this.constructor,e=this[xs]();return new t(e)}dispose(){this.scenes.forEach((t=>{t.traverse((t=>{const e=t;if(!e.material)return;const i=Array.isArray(e.material)?e.material:[e.material];i.forEach((t=>{for(const e in t){const i=t[e];if(i instanceof n.xEZ){const t=i.source.data;null!=t.close&&t.close(),i.dispose()}}t.dispose()})),e.geometry.dispose()}))}))}[xs](){const t=this[Ss],e=vs.d9(this.scene);Cs(e,this.scene);const i=[e],s=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:i,userData:s})}}const Cs=(t,e)=>{Ts(t,e,((t,e)=>{void 0!==e.userData.variantMaterials&&(t.userData.variantMaterials=new Map(e.userData.variantMaterials)),void 0!==e.userData.variantData&&(t.userData.variantData=e.userData.variantData),void 0!==e.userData.originalMaterial&&(t.userData.originalMaterial=e.userData.originalMaterial)}))},Ts=(t,e,i)=>{i(t,e);for(let s=0;s<t.children.length;s++)Ts(t.children[s],e.children[s],i)},Es=Symbol("threeGLTF"),As=Symbol("gltf"),Ps=Symbol("gltfElementMap"),Rs=Symbol("threeObjectMap"),Ls=Symbol("parallelTraverseThreeScene"),ks=Symbol("correlateOriginalThreeGLTF"),Os=Symbol("correlateCloneThreeGLTF");class Fs{constructor(t,e,i,s){this[Es]=t,this[As]=e,this[Ps]=s,this[Rs]=i}static from(t,e){return null!=e?this[Os](t,e):this[ks](t)}static[ks](t){const e=t.parser.json,i=t.parser.associations,s=new Map,a={name:"Default"},r={type:"materials",index:-1};for(const o of i.keys())o instanceof n.F5T&&null==i.get(o)&&(r.index<0&&(null==e.materials&&(e.materials=[]),r.index=e.materials.length,e.materials.push(a)),o.name=a.name,i.set(o,{materials:r.index}));for(const[n,o]of i){if(o){const t=n;t.userData=t.userData||{},t.userData.associations=o}for(const t in o)if(null!=t&&"primitives"!==t){const i=t,a=e[i]||[],r=a[o[i]];if(null==r)continue;let l=s.get(r);null==l&&(l=new Set,s.set(r,l)),l.add(n)}}return new Fs(t,e,i,s)}static[Os](t,e){const i=e.threeGLTF,s=e.gltf,n=JSON.parse(JSON.stringify(s)),a=new Map,r=new Map;for(let o=0;o<i.scenes.length;o++)this[Ls](i.scenes[o],t.scenes[o],((t,i)=>{const s=e.threeObjectMap.get(t);if(null!=s)for(const e in s)if(null!=e&&"primitives"!==e){const t=e,o=s[t],l=n[t][o],h=a.get(i)||{};h[t]=o,a.set(i,h);const c=r.get(l)||new Set;c.add(i),r.set(l,c)}}));return new Fs(t,n,a,r)}static[Ls](t,e,i){const s=(t,e)=>{if(i(t,e),t.isObject3D){const n=t,a=e;if(n.material)if(Array.isArray(n.material))for(let t=0;t<n.material.length;++t)i(n.material[t],a.material[t]);else i(n.material,a.material);for(let i=0;i<t.children.length;++i)s(t.children[i],e.children[i])}};s(t,e)}get threeGLTF(){return this[Es]}get gltf(){return this[As]}get gltfElementMap(){return this[Ps]}get threeObjectMap(){return this[Rs]}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ds=Symbol("correlatedSceneGraph");class Is extends Ms{static[ws](t){const e=super[ws](t);null==e[Ds]&&(e[Ds]=Fs.from(e));const{scene:i}=e,s=new n.aLr(void 0,1/0);return i.traverse((t=>{t.renderOrder=1e3,t.frustumCulled=!1,t.name||(t.name=t.uuid);const i=t;if(i.material){const{geometry:t}=i;i.castShadow=!0,i.isSkinnedMesh&&(t.boundingSphere=s,t.boundingBox=null);const a=i.material;if(!0===a.isMeshBasicMaterial&&(a.toneMapped=!1),a.shadowSide=n.Wl3,a.aoMap){const{gltf:i,threeObjectMap:s}=e[Ds],n=s.get(a);if(null!=i.materials&&null!=n&&null!=n.materials){const e=i.materials[n.materials];e.occlusionTexture&&0===e.occlusionTexture.texCoord&&null!=t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv)}}}})),e}get correlatedSceneGraph(){return this[Ss][Ds]}[xs](){const t=super[xs](),e=new Map;return t.scene.traverse((t=>{const i=t;if(i.material){const t=i.material;if(null!=t){if(e.has(t.uuid))return void(i.material=e.get(t.uuid));i.material=t.clone(),e.set(t.uuid,i.material)}}})),t[Ds]=Fs.from(t,this.correlatedSceneGraph),t}}var Vs=i(89601);
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs extends n.xsS{constructor(){super(),this.position.y=-3.5;const t=new n.DvJ;t.deleteAttribute("uv");const e=new n.Wid({metalness:0,side:n._Li}),i=new n.Wid({metalness:0}),s=new n.cek(16777215,500,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new n.Kj0(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new n.Kj0(t,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new n.Kj0(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new n.Kj0(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new n.Kj0(t,i);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const c=new n.Kj0(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const d=new n.Kj0(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new n.Kj0(t,this.createAreaLightMaterial(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const p=new n.Kj0(t,this.createAreaLightMaterial(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const m=new n.Kj0(t,this.createAreaLightMaterial(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const g=new n.Kj0(t,this.createAreaLightMaterial(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const f=new n.Kj0(t,this.createAreaLightMaterial(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const b=new n.Kj0(t,this.createAreaLightMaterial(100));b.position.set(0,20,0),b.scale.set(1,.1,1),this.add(b)}createAreaLightMaterial(t){const e=new n.vBJ;return e.color.setScalar(t),e}}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns extends n.xsS{constructor(){super(),this.position.y=-3.5;const t=new n.DvJ;t.deleteAttribute("uv");const e=new n.Wid({metalness:0,side:n._Li}),i=new n.Wid({metalness:0}),s=new n.cek(16777215,400,28,2);s.position.set(.5,14,.5),this.add(s);const a=new n.Kj0(t,e);a.position.set(0,13.2,0),a.scale.set(31.5,28.5,31.5),this.add(a);const r=new n.Kj0(t,i);r.position.set(-10.906,-1,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new n.Kj0(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new n.Kj0(t,i);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new n.Kj0(t,i);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const c=new n.Kj0(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const d=new n.Kj0(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new n.Kj0(t,this.createAreaLightMaterial(80));u.position.set(-14,10,8),u.scale.set(.1,2.5,2.5),this.add(u);const p=new n.Kj0(t,this.createAreaLightMaterial(80));p.position.set(-14,14,-4),p.scale.set(.1,2.5,2.5),this.add(p);const m=new n.Kj0(t,this.createAreaLightMaterial(23));m.position.set(14,12,0),m.scale.set(.1,5,5),this.add(m);const g=new n.Kj0(t,this.createAreaLightMaterial(16));g.position.set(0,9,14),g.scale.set(5,5,.1),this.add(g);const f=new n.Kj0(t,this.createAreaLightMaterial(80));f.position.set(7,8,-14),f.scale.set(2.5,2.5,.1),this.add(f);const b=new n.Kj0(t,this.createAreaLightMaterial(80));b.position.set(-7,16,-14),b.scale.set(2.5,2.5,.1),this.add(b);const v=new n.Kj0(t,this.createAreaLightMaterial(1));v.position.set(0,20,0),v.scale.set(.1,.1,.1),this.add(v)}createAreaLightMaterial(t){const e=new n.vBJ;return e.color.setScalar(t),e}}var js=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=.04,Us=20,_s=/\.hdr(\.js)?$/;class qs extends n.pBf{constructor(t){super(),this.threeRenderer=t,this.lottieLoaderUrl="",this.withCredentials=!1,this._ldrLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}get ldrLoader(){return null==this._ldrLoader&&(this._ldrLoader=new n.dpR),this._ldrLoader.setWithCredentials(this.withCredentials),this._ldrLoader}get hdrLoader(){return null==this._hdrLoader&&(this._hdrLoader=new Vs.x,this._hdrLoader.setDataType(n.cLu)),this._hdrLoader.setWithCredentials(this.withCredentials),this._hdrLoader}async getLottieLoader(){if(null==this._lottieLoader){const{LottieLoader:t}=await i(68696)(this.lottieLoaderUrl);this._lottieLoader=new t}return this._lottieLoader.setWithCredentials(this.withCredentials),this._lottieLoader}async loadImage(t){const e=await new Promise(((e,i)=>this.ldrLoader.load(t,e,(()=>{}),i)));return e.name=t,e.flipY=!1,e}async loadLottie(t,e){const i=await this.getLottieLoader();i.setQuality(e);const s=await new Promise(((e,s)=>i.load(t,e,(()=>{}),s)));return s.name=t,s}async loadEquirect(t,e=(()=>{})){try{const i=_s.test(t),s=i?this.hdrLoader:this.ldrLoader,a=await new Promise(((i,n)=>s.load(t,i,(t=>{e(t.loaded/t.total*.9)}),n)));return e(1),a.name=t,a.mapping=n.dSO,i||(a.encoding=n.knz),a}finally{e&&e(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,i=(()=>{})){const s="legacy"!==e;"legacy"!==e&&"neutral"!==e||(e=null),e=y(e);let n,a=Promise.resolve(null);t&&(a=this.loadEquirectFromUrl(t,i)),n=e?this.loadEquirectFromUrl(e,i):t?this.loadEquirectFromUrl(t,i):s?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[r,o]=await Promise.all([n,a]);if(null==r)throw new Error("Failed to load environment map.");return{environmentMap:r,skybox:o}}async loadEquirectFromUrl(t,e){if(!this.skyboxCache.has(t)){const i=this.loadEquirect(t,e);this.skyboxCache.set(t,i)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await P();const i=this.threeRenderer,s=new n.oAp(256,{generateMipmaps:!1,type:n.cLu,format:n.wk1,encoding:n.rnI,depthBuffer:!0}),a=new n._am(.1,100,s),r=a.renderTarget.texture;r.name=e;const o=i.outputEncoding,l=i.toneMapping;return i.toneMapping=n.uL9,i.outputEncoding=n.rnI,a.update(i,t),this.blurCubemap(s,Bs),i.toneMapping=l,i.outputEncoding=o,r}async loadGeneratedEnvironmentMap(){return null==this.generatedEnvironmentMap&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new zs,"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return null==this.generatedEnvironmentMapAlt&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new Ns,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(null==this.blurMaterial){this.blurMaterial=this.getBlurShader(Us);const t=new n.DvJ,e=new n.Kj0(t,this.blurMaterial);this.blurScene=new n.xsS,this.blurScene.add(e)}const i=t.clone();this.halfblur(t,i,e,"latitudinal"),this.halfblur(i,t,e,"longitudinal")}halfblur(t,e,i,s){const a=3,r=t.width,o=isFinite(i)?Math.PI/(2*r):2*Math.PI/(2*Us-1),l=i/o,h=isFinite(i)?1+Math.floor(a*l):Us;h>Us&&js.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Us}`);const c=[];let d=0;for(let n=0;n<Us;++n){const t=n/l,e=Math.exp(-t*t/2);c.push(e),0==n?d+=e:n<h&&(d+=2*e)}for(let n=0;n<c.length;n++)c[n]=c[n]/d;const u=this.blurMaterial.uniforms;u["envMap"].value=t.texture,u["samples"].value=h,u["weights"].value=c,u["latitudinal"].value="latitudinal"===s,u["dTheta"].value=o;const p=new n._am(.1,100,e);p.update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),i=new n.Pa4(0,1,0),s=new n.jyz({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:i}},vertexShader:"\n      \n      varying vec3 vOutputDirection;\n  \n      void main() {\n  \n        vOutputDirection = vec3( position );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  \n      }\n    ",fragmentShader:"\n        varying vec3 vOutputDirection;\n  \n        uniform samplerCube envMap;\n        uniform int samples;\n        uniform float weights[ n ];\n        uniform bool latitudinal;\n        uniform float dTheta;\n        uniform vec3 poleAxis;\n  \n        vec3 getSample( float theta, vec3 axis ) {\n  \n          float cosTheta = cos( theta );\n          // Rodrigues' axis-angle rotation\n          vec3 sampleDirection = vOutputDirection * cosTheta\n            + cross( axis, vOutputDirection ) * sin( theta )\n            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n  \n          return vec3( textureCube( envMap, sampleDirection ) );\n  \n        }\n  \n        void main() {\n  \n          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n  \n          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n  \n            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n  \n          }\n  \n          axis = normalize( axis );\n  \n          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n  \n          for ( int i = 1; i < n; i++ ) {\n  \n            if ( i >= samples ) {\n  \n              break;\n  \n            }\n  \n            float theta = dTheta * float( i );\n            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n  \n          }\n        }\n      ",blending:n.jFi,depthTest:!1,depthWrite:!1,side:n._Li});return s}async dispose(){for(const[,t]of this.skyboxCache){const e=await t;e.dispose()}null!=this.generatedEnvironmentMap&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),null!=this.generatedEnvironmentMapAlt&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),null!=this.blurMaterial&&this.blurMaterial.dispose()}}var Hs=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=.2,Ws=40,Ks=60,$s=5,Xs=[1,.79,.62,.5,.4,.31,.25],Ys=3,Zs="high-performance";class Js extends n.pBf{constructor(t){super(),this.loader=new St(Is),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=Ys,this.avgFrameDuration=(Ks+Ws)/2,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;null===(t=this.textureUtils)||void 0===t||t.dispose(),this.textureUtils=new qs(this.threeRenderer);for(const e of this.scenes)e.element[z]()},this.dpr=E(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new n.CP7({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=n.knz,this.threeRenderer.useLegacyLights=!1,this.threeRenderer.setPixelRatio(1),this.debugger=t.debug?new bs(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=n.LY2}catch(e){Hs.warn(e)}this.arRenderer=new fs(this),this.textureUtils=this.canRender?new qs(this.threeRenderer):null,St.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new Js({powerPreference:(self.ModelViewerElement||{}).powerPreference||Zs,debug:A()});for(const e of t)e.connectedCallback()}get canRender(){return null!=this.threeRenderer}get scaleFactor(){return Xs[this.scaleStep]}set minScale(t){let e=1;while(e<Xs.length){if(Xs[e]<t)break;++e}this.lastStep=e-1}registerScene(t){this.scenes.add(t),t.forceRescale();const e=new n.FM8;this.threeRenderer.getSize(e),t.canvas.width=e.x,t.canvas.height=e.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop(((t,e)=>this.render(t,e))),null!=this.debugger&&this.debugger.addScene(t)}unregisterScene(t){this.scenes.delete(t),this.canvas3D.parentElement===t.canvas.parentElement&&t.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&0===this.scenes.size&&this.threeRenderer.setAnimationLoop(null),null!=this.debugger&&this.debugger.removeScene(t)}displayCanvas(t){return this.multipleScenesVisible?t.element[Jr]:this.canvas3D}countVisibleScenes(){const{canvas3D:t}=this;let e=0,i=null;for(const n of this.scenes){const{element:s}=n;s.modelIsVisible&&null==n.externalRenderer&&++e,t.parentElement===n.canvas.parentElement&&(i=n)}const s=e>1;if(null!=i){const e=s&&!this.multipleScenesVisible,n=!i.element.modelIsVisible;if(e||n){const{width:e,height:s}=this.sceneSize(i);this.copyPixels(i,e,s),t.parentElement.removeChild(t)}}this.multipleScenesVisible=s}updateRendererSize(){const t=E();if(t!==this.dpr)for(const s of this.scenes){const{element:t}=s;t[jr](t.getBoundingClientRect())}let e=0,i=0;for(const s of this.scenes)e=Math.max(e,s.width),i=Math.max(i,s.height);if(e!==this.width||i!==this.height||t!==this.dpr){this.width=e,this.height=i,this.dpr=t,e=Math.ceil(e*t),i=Math.ceil(i*t),this.canRender&&this.threeRenderer.setSize(e,i,!1);for(const t of this.scenes){const{canvas:s}=t;s.width=e,s.height=i,t.forceRescale()}}}updateRendererScale(t){const e=this.scaleStep;this.avgFrameDuration+=C(Gs*(t-this.avgFrameDuration),-$s,$s),this.avgFrameDuration>Ks?++this.scaleStep:this.avgFrameDuration<Ws&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e!==this.scaleStep&&(this.avgFrameDuration=(Ks+Ws)/2)}shouldRender(t){if(t.shouldRender())t.scaleStep!=this.scaleStep&&(t.scaleStep=this.scaleStep,this.rescaleCanvas(t));else{if(0==t.scaleStep)return!1;t.scaleStep=0,this.rescaleCanvas(t)}return!0}rescaleCanvas(t){const e=Xs[t.scaleStep],i=Math.ceil(this.width/e),s=Math.ceil(this.height/e),{style:n}=t.canvas;n.width=`${i}px`,n.height=`${s}px`,this.canvas3D.style.width=`${i}px`,this.canvas3D.style.height=`${s}px`;const a=this.dpr*e,r=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*Xs[this.lastStep],pixelWidth:Math.ceil(t.width*a),pixelHeight:Math.ceil(t.height*a),reason:r}}))}sceneSize(t){const{dpr:e}=this,i=Xs[t.scaleStep],s=Math.min(Math.ceil(t.width*i*e),this.canvas3D.width),n=Math.min(Math.ceil(t.height*i*e),this.canvas3D.height);return{width:s,height:n}}copyPixels(t,e,i){const s=t.context;null!=s?(s.clearRect(0,0,e,i),s.drawImage(this.canvas3D,0,0,e,i,0,0,e,i),t.canvas.classList.add("show")):Hs.log("could not acquire 2d context")}orderedScenes(){const t=[];for(const e of[!1,!0])for(const i of this.scenes)i.element.modelIsVisible===e&&t.push(i);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,i){const{element:s,exposure:n}=t;s[eo](e,i);const a="number"===typeof n&&!Number.isNaN(n);this.threeRenderer.toneMappingExposure=a?n:1}render(t,e){if(null!=e)return void this.arRenderer.onWebXRFrame(t,e);const i=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(i),this.renderedLastFrame=!1);const{canvas3D:s}=this;for(const n of this.orderedScenes()){const{element:e}=n;if(!e.loaded||!e.modelIsVisible&&n.renderCount>0)continue;if(this.preRender(n,t,i),!this.shouldRender(n))continue;if(null!=n.externalRenderer){const t=n.getCamera();t.updateMatrix();const{matrix:e,projectionMatrix:i}=t,s=e.elements.slice(),a=n.getTarget();s[12]+=a.x,s[13]+=a.y,s[14]+=a.z,n.externalRenderer.render({viewMatrix:s,projectionMatrix:i.elements});continue}if(!e.modelIsVisible&&!this.multipleScenesVisible)for(const t of this.scenes)t.element.modelIsVisible&&t.queueRender();const{width:a,height:r}=this.sceneSize(n);n.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-r,a,r),this.threeRenderer.render(n,n.camera),this.multipleScenesVisible||!n.element.modelIsVisible&&0===n.renderCount?this.copyPixels(n,a,r):s.parentElement!==n.canvas.parentElement&&(n.canvas.parentElement.appendChild(s),n.canvas.classList.remove("show")),n.hasRendered(),++n.renderCount,this.renderedLastFrame=!0}}dispose(){null!=this.textureUtils&&this.textureUtils.dispose(),null!=this.threeRenderer&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}Js._singleton=new Js({powerPreference:(self.ModelViewerElement||{}).powerPreference||Zs,debug:A()});
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=Symbol("correlatedObjects"),tn=Symbol("sourceObject"),en=Symbol("onUpdate");class sn{constructor(t,e,i=null){this[en]=t,this[tn]=e,this[Qs]=i}}var nn=i(40019);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new n.vBJ,rn=new n._12(2,2);let on=0;const ln=Symbol("threeTexture");Symbol("applyTexture");class hn extends sn{get[ln](){var t;return nn.assert(null!=this[Qs]&&this[Qs].size>0,"Image correlated object is undefined"),null===(t=this[Qs])||void 0===t?void 0:t.values().next().value}constructor(t,e,i){i=null!==i&&void 0!==i?i:{name:e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image",uri:e&&e.image&&e.image.src?e.image.src:"adhoc_image"+on++},super(t,i,new Set(e?[e]:[]))}get name(){return this[tn].name||""}get uri(){return this[tn].uri}get bufferView(){return this[tn].bufferView}get element(){const t=this[ln];if(t&&(t.isCanvasTexture||t.isVideoTexture))return t.image}get animation(){const t=this[ln];if(t&&t.isCanvasTexture&&t.animation)return t.animation}get type(){return null!=this.uri?"external":"embedded"}set name(t){this[tn].name=t}update(){const t=this[ln];t&&t.isCanvasTexture&&!t.animation&&(this[ln].needsUpdate=!0,this[en]())}async createThumbnail(t,e){const i=new n.xsS;an.map=this[ln];const s=new n.Kj0(rn,an);i.add(s);const a=new n.iKG(-1,1,1,-1,0,1),{threeRenderer:r}=Js.singleton,o=new n.dd2(t,e);r.setRenderTarget(o),r.render(i,a),r.setRenderTarget(null);const l=new Uint8Array(t*e*4);r.readRenderTargetPixels(o,0,0,t,e,l),Rr.width=t,Rr.height=e;const h=Rr.getContext("2d"),c=h.createImageData(t,e);return c.data.set(l),h.putImageData(c,0,0),new Promise((async(t,e)=>{Rr.toBlob((i=>{if(!i)return e("Failed to capture thumbnail.");t(URL.createObjectURL(i))}),"image/png")}))}}var cn,dn;(function(t){t[t["Nearest"]=9728]="Nearest",t[t["Linear"]=9729]="Linear",t[t["NearestMipmapNearest"]=9984]="NearestMipmapNearest",t[t["LinearMipmapNearest"]=9985]="LinearMipmapNearest",t[t["NearestMipmapLinear"]=9986]="NearestMipmapLinear",t[t["LinearMipmapLinear"]=9987]="LinearMipmapLinear"})(cn||(cn={})),function(t){t[t["ClampToEdge"]=33071]="ClampToEdge",t[t["MirroredRepeat"]=33648]="MirroredRepeat",t[t["Repeat"]=10497]="Repeat"}(dn||(dn={}));var un=i(40019);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=(()=>{const t=[cn.Nearest,cn.Linear,cn.NearestMipmapNearest,cn.LinearMipmapLinear,cn.NearestMipmapLinear,cn.LinearMipmapLinear];return e=>t.indexOf(e)>-1})(),mn=(()=>{const t=[cn.Nearest,cn.Linear];return e=>t.indexOf(e)>-1})(),gn=(()=>{const t=[dn.ClampToEdge,dn.MirroredRepeat,dn.Repeat];return e=>t.indexOf(e)>-1})(),fn=(t,e)=>{switch(t){case"minFilter":return pn(e);case"magFilter":return mn(e);case"wrapS":case"wrapT":return gn(e);default:throw new Error(`Cannot configure property "${t}" on Sampler`)}},bn=Symbol("threeTextures"),vn=Symbol("setProperty"),yn=Symbol("sourceSampler");class wn extends sn{get[bn](){return un.assert(null!=this[Qs]&&this[Qs].size>0,"Sampler correlated object is undefined"),this[Qs]}get[yn](){return un.assert(null!=this[tn],"Sampler source is undefined"),this[tn]}constructor(t,e,i){i=null!==i&&void 0!==i?i:{},null==i.minFilter&&(i.minFilter=e?e.minFilter:cn.LinearMipmapLinear),null==i.magFilter&&(i.magFilter=e?e.magFilter:cn.Linear),null==i.wrapS&&(i.wrapS=e?e.wrapS:dn.Repeat),null==i.wrapT&&(i.wrapT=e?e.wrapT:dn.Repeat),super(t,i,new Set(e?[e]:[]))}get name(){return this[tn].name||""}get minFilter(){return this[yn].minFilter}get magFilter(){return this[yn].magFilter}get wrapS(){return this[yn].wrapS}get wrapT(){return this[yn].wrapT}setMinFilter(t){this[vn]("minFilter",t)}setMagFilter(t){this[vn]("magFilter",t)}setWrapS(t){this[vn]("wrapS",t)}setWrapT(t){this[vn]("wrapT",t)}[vn](t,e){const i=this[yn];if(null!=i){if(fn(t,e)){i[t]=e;for(const i of this[bn])i[t]=e,i.needsUpdate=!0}this[en]()}}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=Symbol("image"),xn=Symbol("sampler");class Mn extends sn{constructor(t,e,i=null,s=null,n=null){super(t,i||{},new Set(e?[e]:[])),this[xn]=new wn(t,e,s),this[Sn]=new hn(t,e,n)}get name(){return this[tn].name||""}set name(t){this[tn].name=t}get sampler(){return this[xn]}get source(){return this[Sn]}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cn,Tn,En;const An=Symbol("texture"),Pn=Symbol("transform"),Rn=Symbol("materials"),Ln=Symbol("usage"),kn=Symbol("onUpdate"),On=Symbol("activeVideo");var Fn;(function(t){t[t["Base"]=0]="Base",t[t["MetallicRoughness"]=1]="MetallicRoughness",t[t["Normal"]=2]="Normal",t[t["Occlusion"]=3]="Occlusion",t[t["Emissive"]=4]="Emissive"})(Fn||(Fn={}));class Dn{constructor(t,e,i,s,a,r){if(this[Cn]=null,this[Tn]={rotation:0,scale:new n.FM8(1,1),offset:new n.FM8(0,0)},this[En]=!1,r&&i){const e=a.textures?a.textures[r.index]:null,s=e&&a.samplers?a.samplers[e.sampler]:null,n=e&&a.images?a.images[e.source]:null;this[Pn].rotation=i.rotation,this[Pn].scale.copy(i.repeat),this[Pn].offset.copy(i.offset),this[An]=new Mn(t,i,e,s,n)}this[kn]=t,this[Rn]=s,this[Ln]=e}get texture(){return this[An]}setTexture(t){var e,i;const s=null!=t?t.source[ln]:null,a=null===(e=this[An])||void 0===e?void 0:e.source[ln];if(null!=a&&a.isVideoTexture?this[On]=!1:(null===(i=this[An])||void 0===i?void 0:i.source.animation)&&this[An].source.animation.removeEventListener("enterFrame",this[kn]),this[An]=t,null!=s&&s.isVideoTexture){const t=s.image;if(this[On]=!0,null!=t.requestVideoFrameCallback){const e=()=>{this[On]&&(this[kn](),t.requestVideoFrameCallback(e))};t.requestVideoFrameCallback(e)}else{const t=()=>{this[On]&&(this[kn](),requestAnimationFrame(t))};requestAnimationFrame(t)}}else null!=(null===t||void 0===t?void 0:t.source.animation)&&t.source.animation.addEventListener("enterFrame",this[kn]);let r=n.knz;if(this[Rn])for(const o of this[Rn]){switch(this[Ln]){case Fn.Base:o.map=s;break;case Fn.MetallicRoughness:r=n.rnI,o.metalnessMap=s,o.roughnessMap=s;break;case Fn.Normal:r=n.rnI,o.normalMap=s;break;case Fn.Occlusion:r=n.rnI,o.aoMap=s;break;case Fn.Emissive:o.emissiveMap=s;break;default:}o.needsUpdate=!0}s&&(s.encoding=r,s.rotation=this[Pn].rotation,s.repeat=this[Pn].scale,s.offset=this[Pn].offset),this[kn]()}}Cn=An,Tn=Pn,En=On;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In=Symbol("threeMaterials"),Vn=Symbol("baseColorTexture"),zn=Symbol("metallicRoughnessTexture");class Nn extends sn{constructor(t,e,i,s){super(t,i,s),null==i.baseColorFactor&&(i.baseColorFactor=[1,1,1,1]),null==i.roughnessFactor&&(i.roughnessFactor=1),null==i.metallicFactor&&(i.metallicFactor=1);const{baseColorTexture:n,metallicRoughnessTexture:a}=i,{map:r,metalnessMap:o}=s.values().next().value;this[Vn]=new Dn(t,Fn.Base,r,s,e,n||null),this[zn]=new Dn(t,Fn.MetallicRoughness,o,s,e,a||null)}get[In](){return this[Qs]}get baseColorFactor(){return this[tn].baseColorFactor}get metallicFactor(){return this[tn].metallicFactor}get roughnessFactor(){return this[tn].roughnessFactor}get baseColorTexture(){return this[Vn]}get metallicRoughnessTexture(){return this[zn]}setBaseColorFactor(t){const e=new n.Ilk;t instanceof Array?e.fromArray(t):e.set(t).convertSRGBToLinear();for(const s of this[In])s.color.set(e),t instanceof Array?s.opacity=t[3]:(t=[0,0,0,s.opacity],e.toArray(t));const i=this[tn];i.baseColorFactor=t,this[en]()}setMetallicFactor(t){for(const i of this[In])i.metalness=t;const e=this[tn];e.metallicFactor=t,this[en]()}setRoughnessFactor(t){for(const i of this[In])i.roughness=t;const e=this[tn];e.roughnessFactor=t,this[en]()}}var jn,Bn=i(40019);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=Symbol("pbrMetallicRoughness"),_n=Symbol("normalTexture"),qn=Symbol("occlusionTexture"),Hn=Symbol("emissiveTexture"),Gn=Symbol("backingThreeMaterial"),Wn=Symbol("applyAlphaCutoff"),Kn=Symbol("lazyLoadGLTFInfo"),$n=Symbol("initialize"),Xn=Symbol("getLoadedMaterial"),Yn=Symbol("ensureMaterialIsLoaded"),Zn=Symbol("gltfIndex"),Jn=Symbol("setActive"),Qn=Symbol("variantIndices"),ta=Symbol("isActive"),ea=Symbol("variantSet"),ia=Symbol("modelVariants");class sa extends sn{constructor(t,e,i,s,n,a,r,o){super(t,i,r),this[jn]=new Set,this[Zn]=s,this[ta]=n,this[ia]=a,null==o?this[$n](e):this[Kn]=o}get[(jn=ea,Gn)](){return this[Qs].values().next().value}[$n](t){const e=this[en],i=this[tn],s=this[Qs];i.extensions&&i.extensions["KHR_materials_pbrSpecularGlossiness"]&&Bn.warn(`Material ${i.name} uses a deprecated extension\n          "KHR_materials_pbrSpecularGlossiness", please use\n          "pbrMetallicRoughness" instead. Specular Glossiness materials are\n          no longer supported; to convert to metal-rough, see \n          https://www.donmccurdy.com/2022/11/28/converting-gltf-pbr-materials-from-specgloss-to-metalrough/.`),null==i.pbrMetallicRoughness&&(i.pbrMetallicRoughness={}),this[Un]=new Nn(e,t,i.pbrMetallicRoughness,s),null==i.emissiveFactor&&(i.emissiveFactor=[0,0,0]),null==i.doubleSided&&(i.doubleSided=!1),null==i.alphaMode&&(i.alphaMode="OPAQUE"),null==i.alphaCutoff&&(i.alphaCutoff=.5);const{normalTexture:n,occlusionTexture:a,emissiveTexture:r}=i,{normalMap:o,aoMap:l,emissiveMap:h}=s.values().next().value;this[_n]=new Dn(e,Fn.Normal,o,s,t,n||null),this[qn]=new Dn(e,Fn.Occlusion,l,s,t,a||null),this[Hn]=new Dn(e,Fn.Emissive,h,s,t,r||null)}async[Xn](){if(null!=this[Kn]){const{set:t,material:e}=await this[Kn].doLazyLoad();return this[Qs]=t,this[$n](this[Kn].gltf),this[Kn]=void 0,this.ensureLoaded=async()=>{},e}return this[Qs].values().next().value}[Yn](){if(null!=this[Kn])throw new Error(`Material "${this.name}" has not been loaded, call 'await\n    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Xn]()}get isLoaded(){return null==this[Kn]}get isActive(){return this[ta]}[Jn](t){this[ta]=t}get name(){return this[tn].name}set name(t){const e=this[tn];if(null!=e&&(e.name=t),null!=this[Qs])for(const i of this[Qs])i.name=t}get pbrMetallicRoughness(){return this[Yn](),this[Un]}get normalTexture(){return this[Yn](),this[_n]}get occlusionTexture(){return this[Yn](),this[qn]}get emissiveTexture(){return this[Yn](),this[Hn]}get emissiveFactor(){return this[Yn](),this[tn].emissiveFactor}get index(){return this[Zn]}[Qn](){return this[ea]}hasVariant(t){const e=this[ia].get(t);return null!=e&&this[ea].has(e.index)}setEmissiveFactor(t){this[Yn]();const e=new n.Ilk;t instanceof Array?e.fromArray(t):e.set(t).convertSRGBToLinear();for(const i of this[Qs])i.emissive.set(e);this[tn].emissiveFactor=e.toArray(),this[en]()}[Wn](){this[Yn]();const t=this[tn];for(const e of this[Qs])"MASK"===this[tn].alphaMode?e.alphaTest=t.alphaCutoff:e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(t){this[Yn](),this[tn].alphaCutoff=t,this[Wn](),this[en]()}getAlphaCutoff(){return this[Yn](),this[tn].alphaCutoff}setDoubleSided(t){this[Yn]();for(const e of this[Qs])e.side=t?n.ehD:n.Wl3,e.needsUpdate=!0;this[tn].doubleSided=t,this[en]()}getDoubleSided(){return this[Yn](),this[tn].doubleSided}setAlphaMode(t){this[Yn]();const e=(t,e)=>{t.transparent=e,t.depthWrite=!e};this[tn].alphaMode=t;for(const i of this[Qs])e(i,"BLEND"===t),this[Wn](),i.needsUpdate=!0;this[en]()}getAlphaMode(){return this[Yn](),this[tn].alphaMode}}var na=i(40019);class aa{constructor(t){this.name="",this.children=new Array,this.name=t}}class ra extends aa{constructor(t,e,i,s){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:n,threeGLTF:a,threeObjectMap:r}=s;this.modelVariants=i,this.mesh.userData.variantData=i;const o=r.get(t.material);null!=o.materials?this.initialMaterialIdx=this.activeMaterialIdx=o.materials:na.error(`Primitive (${t.name}) missing initial material reference.`);const l=t.userData.associations||{};if(null==l.meshes)return void na.error("Mesh is missing primitive index association");const h=n["meshes"]||[],c=h[l.meshes].primitives||[],d=c[l.primitives];if(null!=d){if(null!=d.material)this.materials.set(d.material,e[d.material]);else{const t=e.findIndex((t=>"Default"===t.name));t>=0?this.materials.set(t,e[t]):na.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions["KHR_materials_variants"]){const t=d.extensions["KHR_materials_variants"],s=a.parser.json.extensions,n=s["KHR_materials_variants"].variants;for(const a of t.mappings){const t=e[a.material];this.materials.set(a.material,t);for(const e of a.variants){const{name:s}=n[e];this.variantToMaterialMap.set(e,t),t[Qn]().add(e),i.has(s)||i.set(s,{name:s,index:e})}}}}else na.error("Mesh primitive definition is missing.")}async setActiveMaterial(t){const e=this.materials.get(t);return null!=e&&(this.mesh.material=await e[Xn](),this.activeMaterialIdx=t),this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(null==t)return this.setActiveMaterial(this.initialMaterialIdx);if(null!=this.variantToMaterialMap&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(null!=this.variantToMaterialMap&&null!=t){const e=this.variantToMaterialMap.get(t);if(null!=e)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(null!=this.variantToMaterialMap)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(null!=e.material)continue;const i=await this.enableVariantHelper(t);null!=i&&(e.material=i)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const i=this.modelVariants.get(e),s=i.index;return t[Qn]().add(s),this.variantToMaterialMap.set(s,t),this.materials.set(t.index,t),this.updateVariantUserData(s,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;null!=e&&e.delete(t)}}updateVariantUserData(t,e){e[Qn]().add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map;const i=this.mesh.userData.variantMaterials;i.set(t,{material:e[Qs].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return null==e||!this.variantInfo.has(e.index)||(na.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1)}}var oa,la,ha,ca,da,ua,pa=i(40019);
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=Symbol("materials"),ga=Symbol("hierarchy"),fa=Symbol("roots"),ba=Symbol("primitives"),va=(Symbol("loadVariant"),Symbol("correlatedSceneGraph")),ya=Symbol("prepareVariantsForExport"),wa=Symbol("switchVariant"),Sa=Symbol("materialFromPoint"),xa=Symbol("nodeFromPoint"),Ma=Symbol("nodeFromIndex"),Ca=Symbol("variantData"),Ta=Symbol("availableVariants"),Ea=Symbol("modelOnUpdate"),Aa=Symbol("cloneMaterial");class Pa{constructor(t,e,i,s){this.gltf=t,this.gltfElementMap=e,this.mapKey=i,this.doLazyLoad=s}}class Ra{constructor(t,e=(()=>{})){this[oa]=new Array,this[la]=new Array,this[ha]=new Array,this[ca]=new Array,this[da]=()=>{},this[ua]=new Map,this[Ea]=e,this[va]=t;const{gltf:i,threeGLTF:s,gltfElementMap:a}=t;for(const[n,l]of i.materials.entries()){const t=a.get(l);if(null!=t)this[ma].push(new sa(e,i,l,n,!0,this[Ca],t));else{const r=i["materials"]||[],o=r[n],l=n,h=async()=>{const t=await s.parser.getDependency("material",l),e=new Set;return a.set(o,e),e.add(t),{set:e,material:t}};this[ma].push(new sa(e,i,o,n,!1,this[Ca],t,new Pa(i,a,o,h)))}}const r=new Map,o=new Array;for(const n of s.scene.children)o.push(n);while(o.length>0){const e=o.pop();let i=null;e instanceof n.Kj0?(i=new ra(e,this.materials,this[Ca],t),this[ba].push(i)):i=new aa(e.name);const s=r.get(e);null!=s?s.children.push(i):this[fa].push(i),this[ga].push(i);for(const t of e.children)o.push(t),r.set(e,i)}}get materials(){return this[ma]}[(oa=ma,la=ga,ha=fa,ca=ba,da=Ea,ua=Ca,Ta)](){const t=Array.from(this[Ca].values());return t.sort(((t,e)=>t.index-e.index)),t.map((t=>t.name))}getMaterialByName(t){const e=this[ma].filter((e=>e.name===t));return e.length>0?e[0]:null}[Ma](t,e){const i=this[ga].find((i=>{if(i instanceof ra){const{meshes:s,primitives:n}=i.mesh.userData.associations;if(s==t&&n==e)return!0}return!1}));return null==i?null:i}[xa](t){return this[ga].find((e=>{if(e instanceof ra){const i=e;if(i.mesh===t.object)return!0}return!1}))}[Sa](t){return this[xa](t).getActiveMaterial()}async[wa](t){for(const e of this[ba])await e.enableVariant(t);for(const e of this.materials)e[Jn](!1);for(const e of this[ba])this.materials[e.getActiveMaterial().index][Jn](!0)}async[ya](){const t=new Array;for(const e of this[ba])t.push(e.instantiateVariants());await Promise.all(t)}[Aa](t,e){const i=this.materials[t];i.isLoaded||pa.error("Cloning an unloaded material,\n           call 'material.ensureLoaded() before cloning the material.");const s=i[Qs],n=JSON.parse(JSON.stringify(i[tn]));n.name=e;const a=this[va].gltf;a.materials.push(n);const r=new Set;for(const[l,h]of s.entries()){const t=h.clone();t.name=e+(s.size>1?"_inst"+l:""),r.add(t)}const o=new sa(this[Ea],this[va].gltf,n,this[ma].length,!1,this[Ca],r);return this[ma].push(o),o}createMaterialInstanceForVariant(t,e,i,s=!0){let n=null;for(const a of this[ba]){const s=this[Ca].get(i);null!=s&&a.variantInfo.has(s.index)||null!=a.getMaterial(t)&&(this.hasVariant(i)||this.createVariant(i),null==n&&(n=this[Aa](t,e)),a.addVariant(n,i))}if(s&&null!=n){n[Jn](!0),this.materials[t][Jn](!1);for(const t of this[ba])t.enableVariant(i)}return n}createVariant(t){this[Ca].has(t)?pa.warn(`Variant '${t}'' already exists`):this[Ca].set(t,{name:t,index:this[Ca].size})}hasVariant(t){return this[Ca].has(t)}setMaterialToVariant(t,e){if(null!=this[Ta]().find((t=>t===e)))if(t<0||t>=this.materials.length)pa.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const i of this[ba]){const s=i.getMaterial(t);null!=s&&i.addVariant(s,e)}else pa.warn(`Can't add material to '${e}', the variant does not exist.'`)}updateVariantName(t,e){const i=this[Ca].get(t);null!=i&&(i.name=e,this[Ca].set(e,i),this[Ca].delete(t))}deleteVariant(t){const e=this[Ca].get(t);if(null!=e){for(const i of this.materials)i.hasVariant(t)&&i[ea].delete(e.index);for(const t of this[ba])t.deleteVariant(e.index);this[Ca].delete(t)}}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var La=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const ka=Symbol("currentGLTF"),Oa=Symbol("originalGltfJson"),Fa=Symbol("model"),Da=Symbol("getOnUpdateMethod"),Ia=Symbol("buildTexture"),Va=t=>{var e,i,a;class r extends t{constructor(){super(...arguments),this[e]=void 0,this[i]=null,this[a]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Fa]}get availableVariants(){return this.model?this.model[Ta]():[]}get originalGltfJson(){return this[Oa]}[(e=Fa,i=ka,a=Oa,Da)](){return()=>{this[to]()}}[Ia](t){return t.encoding=n.knz,t.wrapS=n.rpg,t.wrapT=n.rpg,new Mn(this[Da](),t)}async createTexture(t,e="image/png"){const{textureUtils:i}=this[no],s=await i.loadImage(t);return s.userData.mimeType=e,this[Ia](s)}async createLottieTexture(t,e=1){const{textureUtils:i}=this[no],s=await i.loadLottie(t,e);return this[Ia](s)}createVideoTexture(t){const e=document.createElement("video");e.src=t,e.muted=!0,e.playsInline=!0,e.loop=!0,e.play();const i=new n.fO1(e);return this[Ia](i)}createCanvasTexture(){const t=document.createElement("canvas"),e=new n.ROQ(t);return this[Ia](e)}async updated(t){if(super.updated(t),t.has("variantName")){const t=this[ao].beginActivity();t(.1);const e=this[Fa],{variantName:i}=this;null!=e&&(await e[wa](i),this[to](),this.dispatchEvent(new CustomEvent("variant-applied"))),t(1)}if(t.has("orientation")||t.has("scale")){if(!this.loaded)return;const t=this[Qr];t.applyTransform(),t.updateBoundingBox(),t.updateShadow(),this[no].arRenderer.onUpdateScene(),this[to]()}}[io](){super[io]();const{currentGLTF:t}=this[Qr];if(null!=t){const{correlatedSceneGraph:e}=t;null!=e&&t!==this[ka]&&(this[Fa]=new Ra(e,this[Da]()),this[Oa]=JSON.parse(JSON.stringify(e.gltf))),"variants"in t.userData&&this.requestUpdate("variantName")}this[ka]=t}async exportScene(t){const e=this[Qr];return new Promise((async(i,s)=>{const n={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(n,t),n.animations=e.animations,n.truncateDrawRange=!0;const a=e.shadow;let r=!1;null!=a&&(r=a.visible,a.visible=!1),await this[Fa][ya]();const o=(new Ct.M).register((t=>new At(t)));o.parse(e.model,(t=>i(new Blob([n.binary?t:JSON.stringify(t)],{type:n.binary?"application/octet-stream":"application/json"}))),(()=>s("glTF export failed")),n),null!=a&&(a.visible=r)}))}materialFromPoint(t,e){const i=this[Fa];if(null==i)return null;const s=this[Qr],n=s.getNDC(t,e),a=s.hitFromPoint(n);return null==a||null==a.face?null:i[Sa](a)}}return La([(0,s.Cb)({type:String,attribute:"variant-name"})],r.prototype,"variantName",void 0),La([(0,s.Cb)({type:String,attribute:"orientation"})],r.prototype,"orientation",void 0),La([(0,s.Cb)({type:String,attribute:"scale"})],r.prototype,"scale",void 0),r},za=new n.Pa4,Na=new n.Pa4,ja=new n.Pa4,Ba=new n.Vkp,Ua=new n.CJI,_a=new n._fP;class qa extends xt.j{constructor(t){super(document.createElement("div")),this.normal=new n.Pa4(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal),this.surface=t.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,0===this.referenceCount}updatePosition(t){if(null==t)return;const e=_t(t)[0].terms;for(let i=0;i<3;++i)this.position.setComponent(i,Qt(e[i]).number);this.updateMatrixWorld()}updateNormal(t){if(null==t)return;const e=_t(t)[0].terms;for(let i=0;i<3;++i)this.normal.setComponent(i,e[i].number)}updateSurface(t){if(!t&&this.initialized)return;const{mesh:e,tri:i,bary:s}=this;if(null==e||null==i||null==s)return;e.getVertexPosition(i.x,za),e.getVertexPosition(i.y,Na),e.getVertexPosition(i.z,ja),za.toArray(Ba.elements,0),Na.toArray(Ba.elements,3),ja.toArray(Ba.elements,6),this.position.copy(s).applyMatrix3(Ba);const n=this.parent;n.worldToLocal(e.localToWorld(this.position)),Ua.set(za,Na,ja),Ua.getNormal(this.normal).transformDirection(e.matrixWorld);const a=n.parent;_a.setFromAxisAngle(za.set(0,1,0),-a.yaw),this.normal.applyQuaternion(_a)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){t?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const i=e,s=i.dataset.visibilityAttribute;if(null!=s){const e=`data-${s}`;t?i.setAttribute(e,""):i.removeAttribute(e)}i.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))})),this.initialized=!0}}var Ha=i(7245),Ga=i(37690),Wa=i(50454);
/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ka=9,$a=6,Xa=2,Ya=.3;class Za extends n.Tme{constructor(t,e,i){super(),this.camera=new n.iKG,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new n.lRF,this.horizontalBlurMaterial=new n.jyz(Ha.P),this.verticalBlurMaterial=new n.jyz(Ga.Z),this.intensity=0,this.softness=1,this.boundingBox=new n.ZzF,this.size=new n.Pa4,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:s}=this;s.rotation.x=Math.PI/2,s.left=-.5,s.right=.5,s.bottom=-.5,s.top=.5,this.add(s);const a=new n._12,r=new n.vBJ({opacity:1,transparent:!0,side:n._Li});this.floor=new n.Kj0(a,r),this.floor.userData.shadow=!0,s.add(this.floor),this.blurPlane=new n.Kj0(a),this.blurPlane.visible=!1,s.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(t){t.fragmentShader=t.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,i)}setScene(t,e,i){const{boundingBox:s,size:n,rotation:a,position:r}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(n.x,n.y,n.z)*(this.isAnimated?Xa:1),this.boundingBox.getCenter(r),"back"===i){const{min:t,max:e}=s;[t.y,t.z]=[t.z,t.y],[e.y,e.z]=[e.z,e.y],[n.y,n.z]=[n.z,n.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const t=s.min.y,e=s.max.y;n.y=this.maxDimension,s.expandByVector(n.subScalar(this.maxDimension).multiplyScalar(-.5)),s.min.y=t,s.max.y=e,n.set(this.maxDimension,e-t,this.maxDimension)}"bottom"===i?r.y=s.min.y:r.z=s.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:i}=this,s=this.isAnimated?Xa:1,n=s*Math.pow(2,Ka-t*(Ka-$a));this.setMapSize(n);const a=e.y/2,r=e.y*s;i.near=0,i.far=(0,Wa.t7)(r,a,t),this.depthMaterial.opacity=1/t,i.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=Xa);const i=Math.floor(e.x>e.z?t:t*e.x/e.z),s=Math.floor(e.x>e.z?t*e.z/e.x:t),a=10,r=a+i,o=a+s;if(null==this.renderTarget||this.renderTarget.width===r&&this.renderTarget.height===o||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),null==this.renderTarget){const t={format:n.wk1};this.renderTarget=new n.dd2(r,o,t),this.renderTargetBlur=new n.dd2(r,o,t),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+a/i),e.z*(1+a/s),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*(0,Wa.t7)(Ya,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+.001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const i=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const s=t.xr.enabled;t.xr.enabled=!1;const n=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=s,t.setRenderTarget(n),t.setClearAlpha(i)}blurShadow(t){const{camera:e,horizontalBlurMaterial:i,verticalBlurMaterial:s,renderTarget:n,renderTargetBlur:a,blurPlane:r}=this;r.visible=!0,r.material=i,i.uniforms.h.value=1/this.renderTarget.width,i.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(a),t.render(r,e),r.material=s,s.uniforms.v.value=1/this.renderTarget.height,s.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(n),t.render(r,e),r.visible=!1}dispose(){null!=this.renderTarget&&this.renderTarget.dispose(),null!=this.renderTargetBlur&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}var Ja=i(40019);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=100,tr=new n.Pa4,er=new n.Pa4,ir=new n.Pa4,sr=new n.iMs,nr=new n.Pa4,ar=new n.FM8;class rr extends n.xsS{constructor({canvas:t,element:e,width:i,height:s}){super(),this.annotationRenderer=new xt.M,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new n.cPb(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new n.Tme,this.animationNames=[],this.boundingBox=new n.ZzF,this.boundingSphere=new n.aLr,this.size=new n.Pa4,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.canScale=!0,this.isDirty=!1,this.goalTarget=new n.Pa4,this.targetDamperX=new Ot,this.targetDamperY=new Ot,this.targetDamperZ=new Ot,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new n.cPb(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(i,s),this.target.name="Target",this.mixer=new n.Xcj(this.target);const{domElement:a}=this.annotationRenderer,{style:r}=a;r.display="none",r.pointerEvents="none",r.position="absolute",r.top="0",this.element.shadowRoot.querySelector(".default").appendChild(a),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return null!=this.xrCamera?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(t){this.reset(),this._model=t,this.target.add(t),await this.setupScene()}async setSource(t,e=(()=>{})){if(!t||t===this.url)return void e(1);if(this.reset(),this.url=t,null!=this.externalRenderer){const t=await this.externalRenderer.load(e);return this.boundingSphere.radius=t.framedRadius,void(this.idealAspect=t.fieldOfViewAspect)}let i;null!=this.cancelPendingSourceChange&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{i=await new Promise((async(i,s)=>{this.cancelPendingSourceChange=()=>s();try{const s=await this.element[no].loader.load(t,this.element,e);i(s)}catch(n){s(n)}}))}catch(r){if(null==r)return;throw r}this.cancelPendingSourceChange=null,this.reset(),this.url=t,this._currentGLTF=i,null!=i&&(this._model=i.scene,this.target.add(i.scene));const{animations:s}=i,n=new Map,a=[];for(const o of s)n.set(o.name,o),a.push(o.name);this.animations=s,this.animationsByName=n,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity)}reset(){this.url=null,this.renderCount=0,this.queueRender(),null!=this.shadow&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:t}=this;null!=t&&(t.removeFromParent(),this._model=null);const e=this._currentGLTF;null!=e&&(e.dispose(),this._currentGLTF=null),null!=this.currentAnimationAction&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),null!=this.shadow&&(this.shadow.dispose(),this.shadow=null),this.element[ka]=null,this.element[Oa]=null,this.element[Fa]=null}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(this.width!==t||this.height!==e){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,null!=this.externalRenderer){const i=E();this.externalRenderer.resize(t*i,e*i)}this.queueRender()}}markBakedShadow(t){t.userData.shadow=!0,this.bakedShadows.add(t)}unmarkBakedShadow(t){t.userData.shadow=!1,t.visible=!0,this.bakedShadows.delete(t),this.boundingBox.expandByObject(t)}findBakedShadows(t){const e=new n.ZzF;t.traverse((t=>{const i=t;if(!i.material)return;const s=i.material;if(!s.transparent)return;e.setFromObject(i);const n=e.getSize(nr),a=Math.min(n.x,n.y,n.z),r=Math.max(n.x,n.y,n.z);r<Qa*a||this.markBakedShadow(i)}))}checkBakedShadows(){const{min:t,max:e}=this.boundingBox,i=new n.ZzF;this.boundingBox.getSize(this.size);for(const s of this.bakedShadows)i.setFromObject(s),i.min.y<t.y+this.size.y/Qa&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.z<=t.z&&i.max.z>=e.z||i.min.z<t.z+this.size.z/Qa&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.y<=t.y&&i.max.y>=e.y||this.unmarkBakedShadow(s)}applyTransform(){const{model:t}=this;if(null==t)return;const e=_t(this.element.orientation)[0].terms,i=Qt(e[0]).number,s=Qt(e[1]).number,a=Qt(e[2]).number;t.quaternion.setFromEuler(new n.USm(s,a,i,"YXZ"));const r=_t(this.element.scale)[0].terms;t.scale.set(r[0].number,r[1].number,r[2].number)}updateBoundingBox(){const{model:t}=this;if(null==t)return;this.target.remove(t),this.findBakedShadows(t);const e=(t,e)=>t.expandByPoint(e);this.setBakedShadowVisibility(!1),this.boundingBox=(0,Mt.W7)(t,e,new n.ZzF),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach((t=>this.unmarkBakedShadow(t))),this.boundingBox=(0,Mt.W7)(t,e,new n.ZzF)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(t)}async updateFraming(){const{model:t}=this;if(null==t)return;this.target.remove(t),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,e.copy(this.getTarget());const i=(t,i)=>Math.max(t,e.distanceToSquared(i));this.boundingSphere.radius=Math.sqrt((0,Mt.W7)(t,i,0));const s=(t,i)=>{i.sub(e);const s=Math.sqrt(i.x*i.x+i.z*i.z);return Math.max(t,s/(this.idealCameraDistance()-Math.abs(i.y)))};this.idealAspect=(0,Mt.W7)(t,s,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(t)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(null!=this.xrCamera)ar.set(t/window.screen.width,e/window.screen.height);else{const i=this.element.getBoundingClientRect();ar.set((t-i.x)/this.width,(e-i.y)/this.height)}return ar.multiplyScalar(2).subScalar(1),ar.y*=-1,ar}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(t,e){this.element[no].arRenderer.presentedScene!==this&&(this.environment=t,this.background=e,this.queueRender())}setTarget(t,e,i){this.goalTarget.set(-t,-e,-i)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(Rt)}updateTarget(t){const e=this.goalTarget,i=this.target.position;if(e.equals(i))return!1;{const s=this.boundingSphere.radius/10;let{x:n,y:a,z:r}=i;return n=this.targetDamperX.update(n,e.x,t,s),a=this.targetDamperY.update(a,e.y,t,s),r=this.targetDamperZ.update(r,e.z,t,s),this.target.position.set(n,a,r),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(t,e){const{x:i,z:s}=this.position;this.yaw=Math.atan2(t-i,e-s)}get model(){return this._model}set yaw(t){this.rotation.y=t,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(null!=this.currentAnimationAction){const t=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===n.uEv&&1===(1&t)?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return null!=this.currentAnimationAction&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return null!=this.currentAnimationAction}playAnimation(t=null,e=0,i=n.YKA,s=1/0){if(null==this._currentGLTF)return;const{animations:a}=this;if(null==a||0===a.length)return;let r=null;if(null!=t&&(r=this.animationsByName.get(t),null==r)){const e=parseInt(t);!isNaN(e)&&e>=0&&e<a.length&&(r=a[e])}null==r&&(r=a[0]);try{const{currentAnimationAction:t}=this,n=this.mixer.clipAction(r,this);this.currentAnimationAction=n,this.element.paused?this.mixer.stopAllAction():(n.paused=!1,null!=t&&n!==t?n.crossFadeFrom(t,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),n.setLoop(i,s),n.enabled=!0,n.clampWhenFinished=!0,n.play()}catch(o){Ja.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(null!=t){const e="wall"===this.element.arPlacement?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;null!=e&&1==e.needsUpdate&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){null!=this.shadow&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,null!=this._currentGLTF&&(this.setBakedShadowVisibility(),!(t<=0&&null==this.shadow))){if(null==this.shadow){const t="wall"===this.element.arPlacement?"back":"bottom";this.shadow=new Za(this,this.shadowSoftness,t)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;null!=e&&e.setSoftness(t)}setShadowOffset(t){const e=this.shadow;null!=e&&e.setOffset(t)}hitFromPoint(t,e=this){sr.setFromCamera(t,this.getCamera());const i=sr.intersectObject(e,!0);return i.find((t=>t.object.visible&&!t.object.userData.shadow))}positionAndNormalFromPoint(t,e=this){var i;const s=this.hitFromPoint(t,e);if(null==s)return null;const a=s.point,r=null!=s.face?s.face.normal.clone().applyNormalMatrix((new n.Vkp).getNormalMatrix(s.object.matrixWorld)):sr.ray.direction.clone().multiplyScalar(-1),o=null!==(i=s.uv)&&void 0!==i?i:null;return{position:a,normal:r,uv:o}}surfaceFromPoint(t,e=this){const i=this.element.model;if(null==i)return null;const s=this.hitFromPoint(t,e);if(null==s||null==s.face)return null;const a=i[xa](s),{meshes:r,primitives:o}=a.mesh.userData.associations,l=new n.Pa4,h=new n.Pa4,c=new n.Pa4,{a:d,b:u,c:p}=s.face,m=s.object;m.getVertexPosition(d,l),m.getVertexPosition(u,h),m.getVertexPosition(p,c);const g=new n.CJI(l,h,c),f=new n.Pa4;return g.getBarycoord(m.worldToLocal(s.point),f),`${r} ${o} ${d} ${u} ${p} ${f.x.toFixed(3)} ${f.y.toFixed(3)} ${f.z.toFixed(3)}`}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let i=0,s=e.length;i<s;i++){const s=e[i];s instanceof qa&&t(s)}}initializeSurface(t){if(null!=t.surface&&null==t.mesh){const e=_t(t.surface)[0].terms;if(8!=e.length)return void Ja.warn(t.surface+" does not have exactly 8 numbers.");const i=this.element.model[Ma](e[0].number,e[1].number),s=new n.Pa4(e[2].number,e[3].number,e[4].number);if(null==i)return void Ja.warn(t.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");const a=i.mesh.geometry.attributes.position.count;if(s.x>=a||s.y>=a||s.z>=a)return void Ja.warn(t.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");const r=new n.Pa4(e[5].number,e[6].number,e[7].number);t.mesh=i.mesh,t.tri=s,t.bary=r}}updateSurfaceHotspots(){const t=!this.element.paused;this.forHotspots((e=>{this.initializeSurface(e),e.updateSurface(t)}))}updateHotspotsVisibility(t){this.forHotspots((e=>{tr.copy(t),er.setFromMatrixPosition(e.matrixWorld),tr.sub(er),ir.copy(e.normal).transformDirection(this.target.matrixWorld),tr.dot(ir)<0?e.hide():e.show()}))}orientHotspots(t){this.forHotspots((e=>{e.orient(t)}))}setHotspotsVisibility(t){this.forHotspots((e=>{e.visible=t}))}updateSchema(t){var e;const{schemaElement:i,element:s}=this,{alt:n,poster:a,iosSrc:r}=s;if(null!=t){const s=[{"@type":"MediaObject",contentUrl:t,encodingFormat:"gltf"===(null===(e=t.split(".").pop())||void 0===e?void 0:e.toLowerCase())?"model/gltf+json":"model/gltf-binary"}];r&&s.push({"@type":"MediaObject",contentUrl:r,encodingFormat:"model/vnd.usdz+zip"});const o={"@context":"http://schema.org/","@type":"3DModel",image:null!==a&&void 0!==a?a:void 0,name:null!==n&&void 0!==n?n:void 0,encoding:s};i.textContent=JSON.stringify(o),document.head.appendChild(i)}else null!=i.parentElement&&i.parentElement.removeChild(i)}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const or=async t=>new Promise(((e,i)=>{const s=512,n=t.match(/data:(.*);/);if(!n)return i(new Error(`${t} is not a valid data Url`));const a=n[1],r=t.replace(/data:image\/\w+;base64,/,""),o=atob(r),l=[];for(let t=0;t<o.length;t+=s){const e=o.slice(t,t+s),i=new Array(e.length);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);const n=new Uint8Array(i);l.push(n)}e(new Blob(l,{type:a}))}));
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const t={progress:0,completed:!1};return this.ongoingActivities.add(t),1===this.ongoingActivityCount&&this.announceTotalProgress(t,0),e=>{let i;return i=Math.max(C(e,0,1),t.progress),i!==t.progress&&this.announceTotalProgress(t,i),t.progress}}announceTotalProgress(t,e){let i=0,s=0;1==e&&(t.completed=!0);for(const r of this.ongoingActivities){const{progress:t}=r;i+=1-t,!0===r.completed&&s++}const n=t.progress;t.progress=e,this.totalProgress+=(e-n)*(1-this.totalProgress)/i;const a=s===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:a}})),s===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}var hr,cr,dr,ur,pr,mr,gr,fr,br,vr,yr,wr,Sr,xr=i(40019),Mr=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=10,Tr=50,Er=0,Ar=300,Pr=150,Rr=document.createElement("canvas"),Lr=Symbol("fallbackResizeHandler"),kr=Symbol("defaultAriaLabel"),Or=Symbol("resizeObserver"),Fr=Symbol("clearModelTimeout"),Dr=Symbol("onContextLost"),Ir=Symbol("loaded"),Vr=Symbol("status"),zr=Symbol("onFocus"),Nr=Symbol("onBlur"),jr=Symbol("updateSize"),Br=Symbol("intersectionObserver"),Ur=Symbol("isElementInViewport"),_r=Symbol("announceModelVisibility"),qr=Symbol("ariaLabel"),Hr=Symbol("altDefaulted"),Gr=Symbol("statusElement"),Wr=Symbol("updateStatus"),Kr=Symbol("loadedTime"),$r=Symbol("updateSource"),Xr=Symbol("markLoaded"),Yr=Symbol("container"),Zr=Symbol("input"),Jr=Symbol("canvas"),Qr=Symbol("scene"),to=Symbol("needsRender"),eo=Symbol("tick"),io=Symbol("onModelLoad"),so=Symbol("onResize"),no=Symbol("renderer"),ao=Symbol("progressTracker"),ro=Symbol("getLoaded"),oo=Symbol("getModelIsVisible"),lo=Symbol("shouldAttemptPreload"),ho=t=>({x:t.x,y:t.y,z:t.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),co=t=>({u:t.x,v:t.y,toString(){return`${this.u} ${this.v}`}});class uo extends a.fl{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[hr]=!1,this[cr]=!1,this[dr]=0,this[ur]="",this[pr]=null,this[mr]=M((()=>{const t=this.getBoundingClientRect();this[jr](t)}),Tr),this[gr]=M((t=>{const e=this.modelIsVisible;e!==t&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:e}}))}),Er),this[fr]=null,this[br]=null,this[vr]=new lr,this[yr]=()=>{this[Gr].textContent=this[Vr]},this[wr]=()=>{this[Gr].textContent=""},this[Sr]=t=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:t.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;let e,i;if(H(t),this[Yr]=t.querySelector(".container"),this[Zr]=t.querySelector(".userInput"),this[Jr]=t.querySelector("canvas"),this[Gr]=t.querySelector("#status"),this[kr]=this[Zr].getAttribute("aria-label"),this.isConnected){const t=this.getBoundingClientRect();e=t.width,i=t.height}else e=Ar,i=Pr;this[Qr]=new rr({canvas:this[Jr],element:this,width:e,height:i}),Promise.resolve().then((()=>{this[jr](this.getBoundingClientRect())})),l&&(this[Or]=new ResizeObserver((t=>{if(!this[no].isPresenting)for(let e of t)e.target===this&&this[jr](e.contentRect)}))),h?this[Br]=new IntersectionObserver((t=>{for(let e of t)if(e.target===this){const t=this.modelIsVisible;this[Ur]=e.isIntersecting,this[_r](t),this[Ur]&&!this.loaded&&this[$r]()}}),{root:null,rootMargin:"0px",threshold:1e-5}):this[Ur]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){St[yt].evictionThreshold=t}static get modelCacheSize(){return St[yt].evictionThreshold}static set minimumRenderScale(t){t>1&&xr.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&xr.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Js.singleton.minScale=t}static get minimumRenderScale(){return Js.singleton.minScale}get loaded(){return this[ro]()}get[(hr=Ur,cr=Ir,dr=Kr,ur=Vr,pr=Fr,mr=Lr,gr=_r,fr=Or,br=Br,vr=ao,no)](){return Js.singleton}get modelIsVisible(){return this[oo]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),l?this[Or].observe(this):self.addEventListener("resize",this[Lr]),h&&this[Br].observe(this),this.addEventListener("focus",this[zr]),this.addEventListener("blur",this[Nr]);const t=this[no];t.addEventListener("contextlost",this[Dr]),t.registerScene(this[Qr]),null!=this[Fr]&&(self.clearTimeout(this[Fr]),this[Fr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),l?this[Or].unobserve(this):self.removeEventListener("resize",this[Lr]),h&&this[Br].unobserve(this),this.removeEventListener("focus",this[zr]),this.removeEventListener("blur",this[Nr]);const t=this[no];t.removeEventListener("contextlost",this[Dr]),t.unregisterScene(this[Qr]),this[Fr]=self.setTimeout((()=>{this[Qr].dispose(),this[Fr]=null}),Cr)}updated(t){super.updated(t),t.has("src")&&(null==this.src?(this[Ir]=!1,this[Kr]=0,this[Qr].reset()):this.src!==this[Qr].url&&(this[Ir]=!1,this[Kr]=0,this[$r]())),t.has("alt")&&this[Zr].setAttribute("aria-label",this[qr]),t.has("withCredentials")&&(St.withCredentials=this.withCredentials,this[no].textureUtils.withCredentials=this.withCredentials),t.has("generateSchema")&&(this.generateSchema?this[Qr].updateSchema(this.src):this[Qr].updateSchema(null))}toDataURL(t,e){return this[no].displayCanvas(this[Qr]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,i=t?t.qualityArgument:void 0,s=t?t.idealAspect:void 0,{width:n,height:a,idealAspect:r,aspect:o}=this[Qr],{dpr:l,scaleFactor:h}=this[no];let c=n*h*l,d=a*h*l,u=0,p=0;if(!0===s)if(r>o){const t=d;d=Math.round(c/r),p=(t-d)/2}else{const t=c;c=Math.round(d*r),u=(t-c)/2}Rr.width=c,Rr.height=d;try{return new Promise((async(t,s)=>(Rr.getContext("2d").drawImage(this[no].displayCanvas(this[Qr]),u,p,c,d,0,0,c,d),!Rr.msToBlob||e&&"image/png"!==e?Rr.toBlob?void Rr.toBlob((e=>{if(!e)return s(new Error("Unable to retrieve canvas blob"));t(e)}),e,i):t(await or(Rr.toDataURL(e,i))):t(Rr.msToBlob()))))}finally{this[jr]({width:n,height:a})}}registerRenderer(t){this[Qr].externalRenderer=t}unregisterRenderer(){this[Qr].externalRenderer=null}get[qr](){return this[Hr]}get[Hr](){return null==this.alt||"null"===this.alt?this[kr]:this.alt}[ro](){return this[Ir]}[oo](){return this.loaded&&this[Ur]}[lo](){return!!this.src&&this[Ur]}[jr]({width:t,height:e}){0!==t&&0!==e&&(this[Yr].style.width=`${t}px`,this[Yr].style.height=`${e}px`,this[so]({width:t,height:e}))}[eo](t,e){}[Xr](){this[Ir]||(this[Ir]=!0,this[Kr]=performance.now())}[to](){this[Qr].queueRender()}[io](){}[Wr](t){this[Vr]=t;const e=this.getRootNode();null!=e&&e.activeElement===this&&this[Gr].textContent!=t&&(this[Gr].textContent=t)}[(yr=zr,wr=Nr,so)](t){this[Qr].setSize(t.width,t.height)}async[(Sr=Dr,$r)](){const t=this[Qr];if(this.loaded||!this[lo]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[Wr]("Loading"),t.stopAnimation();const e=this[ao].beginActivity(),i=this.src;try{const s=t.setSource(i,(t=>e(.95*C(t,0,1)))),n=this[z]();await Promise.all([s,n]),this[Xr](),this[io](),await new Promise((t=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:i}})),t()}))}))}))}catch(s){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:s}}))}finally{e(1)}}}Mr([(0,s.Cb)({type:String})],uo.prototype,"alt",void 0),Mr([(0,s.Cb)({type:String})],uo.prototype,"src",void 0),Mr([(0,s.Cb)({type:Boolean,attribute:"with-credentials"})],uo.prototype,"withCredentials",void 0),Mr([(0,s.Cb)({type:Boolean,attribute:"generate-schema"})],uo.prototype,"generateSchema",void 0);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var po=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const mo=1e3,go=Symbol("changeAnimation"),fo=Symbol("paused"),bo={repetitions:1/0,pingpong:!1},vo=t=>{var e;class i extends t{constructor(...t){super(t),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[Qr].subscribeMixerEvent("loop",(t=>{const e=t.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:e}}))})),this[Qr].subscribeMixerEvent("finished",(()=>{this[fo]=!0,this.dispatchEvent(new CustomEvent("finished"))}))}get availableAnimations(){return this.loaded?this[Qr].animationNames:[]}get duration(){return this[Qr].duration}get paused(){return this[fo]}get currentTime(){return this[Qr].animationTime}set currentTime(t){this[Qr].animationTime=t,this[to]()}get timeScale(){return this[Qr].animationTimeScale}set timeScale(t){this[Qr].animationTimeScale=t}pause(){this[fo]||(this[fo]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(t){this.availableAnimations.length>0&&(this[fo]=!1,this[go](t),this.dispatchEvent(new CustomEvent("play")))}[(e=fo,io)](){super[io](),this[fo]=!0,null!=this.animationName&&this[go](),this.autoplay&&this.play()}[eo](t,e){super[eo](t,e),this[fo]||!this[oo]()&&!this[no].isPresenting||(this[Qr].updateAnimation(e/mo),this[to]())}updated(t){super.updated(t),t.has("autoplay")&&this.autoplay&&this.play(),t.has("animationName")&&this[go]()}[go](t=bo){var e;const i=null!==(e=t.repetitions)&&void 0!==e?e:1/0,s=t.pingpong?n.uEv:1===i?n.jAl:n.YKA;this[Qr].playAnimation(this.animationName,this.animationCrossfadeDuration/mo,s,i),this[fo]&&(this[Qr].updateAnimation(0),this[to]())}}return po([(0,s.Cb)({type:Boolean})],i.prototype,"autoplay",void 0),po([(0,s.Cb)({type:String,attribute:"animation-name"})],i.prototype,"animationName",void 0),po([(0,s.Cb)({type:Number,attribute:"animation-crossfade-duration"})],i.prototype,"animationCrossfadeDuration",void 0),i},yo=Symbol("hotspotMap"),wo=Symbol("mutationCallback"),So=Symbol("observer"),xo=Symbol("addHotspot"),Mo=Symbol("removeHotspot"),Co=new n.yGw,To=t=>{var e,i,s;class a extends t{constructor(){super(...arguments),this[e]=new Map,this[i]=t=>{t.forEach((t=>{t instanceof MutationRecord&&"childList"!==t.type||(t.addedNodes.forEach((t=>{this[xo](t)})),t.removedNodes.forEach((t=>{this[Mo](t)})),this[to]())}))},this[s]=new MutationObserver(this[wo])}connectedCallback(){super.connectedCallback();for(let e=0;e<this.children.length;++e)this[xo](this.children[e]);const{ShadyDOM:t}=self;null==t?this[So].observe(this,{childList:!0}):this[So]=t.observeChildren(this,this[wo])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:t}=self;null==t?this[So].disconnect():t.unobserveChildren(this[So])}[(e=yo,i=wo,s=So,eo)](t,e){super[eo](t,e);const i=this[Qr],{annotationRenderer:s}=i,n=i.getCamera();i.shouldRender()&&(i.updateSurfaceHotspots(),i.updateHotspotsVisibility(n.position),s.domElement.style.display="",s.render(i,n))}updateHotspot(t){const e=this[yo].get(t.name);null!=e&&(e.updatePosition(t.position),e.updateNormal(t.normal),e.surface=t.surface,this[to]())}queryHotspot(t){const e=this[yo].get(t);if(null==e)return null;const i=ho(e.position),s=ho(e.normal),a=e.facingCamera,r=this[Qr],o=r.getCamera(),l=new n.Pa4;l.setFromMatrixPosition(e.matrixWorld),l.project(o);const h=r.width/2,c=r.height/2;l.x=l.x*h+h,l.y=-l.y*c+c;const d=ho(new n.Pa4(l.x,l.y,l.z));return Number.isFinite(d.x)&&Number.isFinite(d.y)?{position:i,normal:s,canvasPosition:d,facingCamera:a}:null}positionAndNormalFromPoint(t,e){const i=this[Qr],s=i.getNDC(t,e),n=i.positionAndNormalFromPoint(s);if(null==n)return null;Co.copy(i.target.matrixWorld).invert();const a=ho(n.position.applyMatrix4(Co)),r=ho(n.normal.transformDirection(Co));let o=null;return null!=n.uv&&(o=co(n.uv)),{position:a,normal:r,uv:o}}surfaceFromPoint(t,e){const i=this[Qr],s=i.getNDC(t,e);return i.surfaceFromPoint(s)}[xo](t){if(!(t instanceof HTMLElement&&0===t.slot.indexOf("hotspot")))return;let e=this[yo].get(t.slot);null!=e?e.increment():(e=new qa({name:t.slot,position:t.dataset.position,normal:t.dataset.normal,surface:t.dataset.surface}),this[yo].set(t.slot,e),this[Qr].addHotspot(e)),this[Qr].queueRender()}[Mo](t){if(!(t instanceof HTMLElement))return;const e=this[yo].get(t.slot);e&&(e.decrement()&&(this[Qr].removeHotspot(e),this[yo].delete(t.slot)),this[Qr].queueRender())}}return a};var Eo=i(72898);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao=t=>e=>{try{const i=_t(e),s=(i.length?i[0].terms:[]).filter((t=>t&&"ident"===t.type)).map((t=>t.value)).filter((e=>t.indexOf(e)>-1)),n=new Set;for(const t of s)n.add(t);return n}catch(i){}return new Set};var Po=i(40019),Ro=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=!1,ko=!1;const Oo="#model-viewer-no-ar-fallback",Fo=Ao(["quick-look","scene-viewer","webxr","none"]),Do="webxr scene-viewer quick-look",Io={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},Vo=Symbol("arButtonContainer"),zo=Symbol("enterARWithWebXR"),No=Symbol("openSceneViewer"),jo=Symbol("openIOSARQuickLook"),Bo=Symbol("canActivateAR"),Uo=Symbol("arMode"),_o=Symbol("arModes"),qo=Symbol("arAnchor"),Ho=Symbol("preload"),Go=Symbol("onARButtonContainerClick"),Wo=Symbol("onARStatus"),Ko=Symbol("onARTracking"),$o=Symbol("onARTap"),Xo=Symbol("selectARMode"),Yo=Symbol("triggerLoad"),Zo=t=>{var e,i,n,a,r,o,l,h,d,u;class p extends t{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=Do,this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[i]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[a]=new Set,this[r]=Io.NONE,this[o]=!1,this[l]=t=>{t.preventDefault(),this.activateAR()},this[h]=({status:t})=>{t!==cs.NOT_PRESENTING&&this[no].arRenderer.presentedScene!==this[Qr]||(this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}})),t===cs.NOT_PRESENTING?this.removeAttribute("ar-tracking"):t===cs.SESSION_STARTED&&this.setAttribute("ar-tracking",ds.TRACKING))},this[d]=({status:t})=>{this.setAttribute("ar-tracking",t),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:t}}))},this[u]=t=>{"_apple_ar_quicklook_button_tapped"==t.data&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Uo]!==Io.NONE}connectedCallback(){super.connectedCallback(),this[no].arRenderer.addEventListener("status",this[Wo]),this.setAttribute("ar-status",cs.NOT_PRESENTING),this[no].arRenderer.addEventListener("tracking",this[Ko]),this[qo].addEventListener("message",this[$o])}disconnectedCallback(){super.disconnectedCallback(),this[no].arRenderer.removeEventListener("status",this[Wo]),this[no].arRenderer.removeEventListener("tracking",this[Ko]),this[qo].removeEventListener("message",this[$o])}update(t){super.update(t),t.has("arScale")&&(this[Qr].canScale="fixed"!==this.arScale),t.has("arPlacement")&&(this[Qr].updateShadow(),this[to]()),t.has("arModes")&&(this[_o]=Fo(this.arModes)),(t.has("ar")||t.has("arModes")||t.has("src")||t.has("iosSrc"))&&this[Xo]()}async activateAR(){switch(this[Uo]){case Io.QUICK_LOOK:this[jo]();break;case Io.WEBXR:await this[zo]();break;case Io.SCENE_VIEWER:this[No]();break;default:Po.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(e=Bo,i=Vo,n=qo,a=_o,r=Uo,o=Ho,l=Go,h=Wo,d=Ko,u=$o,Xo)](){let t=Io.NONE;if(this.ar){if(null!=this.src)for(const e of this[_o]){if("webxr"===e&&c&&!Lo&&await this[no].arRenderer.supportsPresentation()){t=Io.WEBXR;break}if("scene-viewer"===e&&g&&!ko){t=Io.SCENE_VIEWER;break}if("quick-look"===e&&b){t=Io.QUICK_LOOK;break}}t===Io.NONE&&null!=this.iosSrc&&b&&(t=Io.QUICK_LOOK)}if(t!==Io.NONE)this[Vo].classList.add("enabled"),this[Vo].addEventListener("click",this[Go]);else if(this[Vo].classList.contains("enabled")){this[Vo].removeEventListener("click",this[Go]),this[Vo].classList.remove("enabled");const t=cs.FAILED;this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}}))}this[Uo]=t}async[zo](){Po.log("Attempting to present in AR with WebXR..."),await this[Yo]();try{this[Vo].removeEventListener("click",this[Go]);const{arRenderer:t}=this[no];t.placeOnWall="wall"===this.arPlacement,await t.present(this[Qr],this.xrEnvironment)}catch(t){Po.warn("Error while trying to present in AR with WebXR"),Po.error(t),await this[no].arRenderer.stopPresenting(),Lo=!0,Po.warn("Falling back to next ar-mode"),await this[Xo](),this.activateAR()}finally{this[Xo]()}}async[Yo](){this.loaded||(this[Ho]=!0,this[$r](),await R(this,"load"),this[Ho]=!1)}[lo](){return super[lo]()||this[Ho]}[No](){const t=self.location.toString(),e=new URL(t),i=new URL(this.src,t);i.hash&&(i.hash="");const s=new URLSearchParams(i.search);if(e.hash=Oo,s.set("mode","ar_preferred"),s.has("disable_occlusion")||s.set("disable_occlusion","true"),"fixed"===this.arScale&&s.set("resizable","false"),"wall"===this.arPlacement&&s.set("enable_vertical_placement","true"),s.has("sound")){const e=new URL(s.get("sound"),t);s.set("sound",e.toString())}if(s.has("link")){const e=new URL(s.get("link"),t);s.set("link",e.toString())}const n=`intent://arvr.google.com/scene-viewer/1.0?${s.toString()+"&file="+encodeURIComponent(i.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(e.toString())};end;`,a=()=>{self.location.hash===Oo&&(ko=!0,self.history.back(),Po.warn("Error while trying to present in AR with Scene Viewer"),Po.warn("Falling back to next ar-mode"),this[Xo]())};self.addEventListener("hashchange",a,{once:!0}),this[qo].setAttribute("href",n),Po.log("Attempting to present in AR with Scene Viewer..."),this[qo].click()}async[jo](){const t=!this.iosSrc;this[Vo].classList.remove("enabled");const e=t?await this.prepareUSDZ():this.iosSrc,i=new URL(e,self.location.toString());if(t){const t=self.location.toString(),e=new URL(t),s=new URL(this.src,e);s.hash&&(i.hash=s.hash)}"fixed"===this.arScale&&(i.hash&&(i.hash+="&"),i.hash+="allowsContentScaling=0");const s=this[qo];s.setAttribute("rel","ar");const n=document.createElement("img");s.appendChild(n),s.setAttribute("href",i.toString()),t&&s.setAttribute("download","model.usdz"),s.style.display="none",s.isConnected||this.shadowRoot.appendChild(s),Po.log("Attempting to present in AR with Quick Look..."),s.click(),s.removeChild(n),t&&URL.revokeObjectURL(e),this[Vo].classList.add("enabled")}async prepareUSDZ(){const t=this[ao].beginActivity();await this[Yo]();const{model:e,shadow:i}=this[Qr];if(null==e)return"";let s=!1;null!=i&&(s=i.visible,i.visible=!1),t(.2);const n=new Eo.Y,a=await n.parse(e),r=new Blob([a],{type:"model/vnd.usdz+zip"}),o=URL.createObjectURL(r);return t(1),null!=i&&(i.visible=s),o}}return Ro([(0,s.Cb)({type:Boolean,attribute:"ar"})],p.prototype,"ar",void 0),Ro([(0,s.Cb)({type:String,attribute:"ar-scale"})],p.prototype,"arScale",void 0),Ro([(0,s.Cb)({type:String,attribute:"ar-placement"})],p.prototype,"arPlacement",void 0),Ro([(0,s.Cb)({type:String,attribute:"ar-modes"})],p.prototype,"arModes",void 0),Ro([(0,s.Cb)({type:String,attribute:"ios-src"})],p.prototype,"iosSrc",void 0),Ro([(0,s.Cb)({type:Boolean,attribute:"xr-environment"})],p.prototype,"xrEnvironment",void 0),p};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jo=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const Qo=100,tl="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",el="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",il="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",sl={AUTO:"auto",MANUAL:"manual"},nl={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},al=Symbol("defaultProgressBarElement"),rl=Symbol("posterContainerElement"),ol=Symbol("defaultPosterElement"),ll=Symbol("shouldDismissPoster"),hl=Symbol("hidePoster"),cl=Symbol("modelIsRevealed"),dl=Symbol("updateProgressBar"),ul=Symbol("ariaLabelCallToAction"),pl=Symbol("onProgress"),ml=t=>{var e,i,a,r,o,l,h,c;class d extends t{constructor(...t){super(...t),this.poster=null,this.reveal=sl.AUTO,this.loading=nl.AUTO,this[e]=!1,this[i]=!1,this[a]=this.shadowRoot.querySelector(".slot.poster"),this[r]=this.shadowRoot.querySelector("#default-poster"),this[o]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[l]=this[ol].getAttribute("aria-label"),this[h]=x((t=>{const e=this[al].parentNode;requestAnimationFrame((()=>{this[al].style.transform=`scaleX(${t})`,0===t&&(e.removeChild(this[al]),e.appendChild(this[al])),1===t?this[al].classList.add("hide"):this[al].classList.remove("hide")}))}),Qo),this[c]=t=>{const e=t.detail.totalProgress;1===e&&(this[dl].flush(),this.loaded&&(this[ll]||this.reveal===sl.AUTO)&&this[hl]()),this[dl](e),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:e}}))};const s=self.ModelViewerElement||{},n=s.dracoDecoderLocation||tl;St.setDRACODecoderLocation(n);const d=s.ktx2TranscoderLocation||el;St.setKTX2TranscoderLocation(d),s.meshoptDecoderLocation&&St.setMeshoptDecoderLocation(s.meshoptDecoderLocation);const u=s.lottieLoaderLocation||il;Js.singleton.textureUtils.lottieLoaderUrl=u}static set dracoDecoderLocation(t){St.setDRACODecoderLocation(t)}static get dracoDecoderLocation(){return St.getDRACODecoderLocation()}static set ktx2TranscoderLocation(t){St.setKTX2TranscoderLocation(t)}static get ktx2TranscoderLocation(){return St.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(t){St.setMeshoptDecoderLocation(t)}static get meshoptDecoderLocation(){return St.getMeshoptDecoderLocation()}static set lottieLoaderLocation(t){Js.singleton.textureUtils.lottieLoaderUrl=t}static get lottieLoaderLocation(){return Js.singleton.textureUtils.lottieLoaderUrl}static mapURLs(t){Js.singleton.loader[vt].manager.setURLModifier(t)}dismissPoster(){this.loaded?this[hl]():(this[ll]=!0,this[$r]())}showPoster(){const t=this[rl];if(t.classList.contains("show"))return;t.classList.add("show"),this[Zr].classList.remove("show");const e=this[ol];e.removeAttribute("tabindex"),e.removeAttribute("aria-hidden");const i=this.modelIsVisible;this[cl]=!1,this[_r](i)}getDimensions(){return ho(this[Qr].size)}getBoundingBoxCenter(){return ho(this[Qr].boundingBox.getCenter(new n.Pa4))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[ao].addEventListener("progress",this[pl])}disconnectedCallback(){super.disconnectedCallback(),this[ao].removeEventListener("progress",this[pl])}async updated(t){super.updated(t),t.has("poster")&&null!=this.poster&&(this[ol].style.backgroundImage=`url(${this.poster})`),t.has("alt")&&this[ol].setAttribute("aria-label",this[Hr]),(t.has("reveal")||t.has("loading"))&&this[$r]()}[(e=cl,i=ll,a=rl,r=ol,o=al,l=ul,h=dl,c=pl,lo)](){return!!this.src&&(this[ll]||this.loading===nl.EAGER||this.reveal===sl.AUTO&&this[Ur])}[hl](){this[ll]=!1;const t=this[rl];if(!t.classList.contains("show"))return;t.classList.remove("show"),this[Zr].classList.add("show");const e=this.modelIsVisible;this[cl]=!0,this[_r](e);const i=this.getRootNode();i&&i.activeElement===this&&this[Zr].focus();const s=this[ol];s.setAttribute("aria-hidden","true"),s.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[oo](){return super[oo]()&&this[cl]}}return Jo([(0,s.Cb)({type:String})],d.prototype,"poster",void 0),Jo([(0,s.Cb)({type:String})],d.prototype,"reveal",void 0),Jo([(0,s.Cb)({type:String})],d.prototype,"loading",void 0),d};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gl=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const fl=Math.PI/32,bl=3e3,vl={basis:[Zt(Ut(fl,"rad"))],keywords:{auto:[null]}},yl=Symbol("autoRotateStartTime"),wl=Symbol("radiansPerSecond"),Sl=Symbol("syncRotationRate"),xl=Symbol("onCameraChange"),Ml=t=>{var e,i,n;class a extends t{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=bl,this.rotationPerSecond="auto",this[e]=performance.now(),this[i]=0,this[n]=t=>{this.autoRotate&&"user-interaction"===t.detail.source&&(this[yl]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[xl]),this[yl]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[xl]),this[yl]=performance.now()}updated(t){super.updated(t),t.has("autoRotate")&&(this[yl]=performance.now())}[(e=yl,i=wl,Sl)](t){this[wl]=t[0]}[eo](t,e){if(super[eo](t,e),!this.autoRotate||!this[oo]()||this[no].isPresenting)return;const i=Math.min(e,t-this[yl]-this.autoRotateDelay);i>0&&(this[Qr].yaw=this.turntableRotation+this[wl]*i*.001)}get turntableRotation(){return this[Qr].yaw}resetTurntableRotation(t=0){this[Qr].yaw=t}}return n=xl,gl([(0,s.Cb)({type:Boolean,attribute:"auto-rotate"})],a.prototype,"autoRotate",void 0),gl([(0,s.Cb)({type:Number,attribute:"auto-rotate-delay"})],a.prototype,"autoRotateDelay",void 0),gl([ze({intrinsics:vl,updateHandler:Sl}),(0,s.Cb)({type:String,attribute:"rotation-per-second"})],a.prototype,"rotationPerSecond",void 0),a},Cl=To(Va(Ml(j(qi(Zo(ml(vo(uo))))))));customElements.define("model-viewer",Cl)}}]);