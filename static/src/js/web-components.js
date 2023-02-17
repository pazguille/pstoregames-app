// https://unpkg.com/@ungap/custom-elements@1.1.1/es.js
!function(){"use strict";var e=(e,t)=>{const n=e=>{for(let t=0,{length:n}=e;t<n;t++)o(e[t])},o=({target:e,attributeName:t,oldValue:n})=>{e.attributeChangedCallback(t,n,e.getAttribute(t))};return(r,l)=>{const{observedAttributes:s}=r.constructor;return s&&e(l).then((()=>{new t(n).observe(r,{attributes:!0,attributeOldValue:!0,attributeFilter:s});for(let e=0,{length:t}=s;e<t;e++)r.hasAttribute(s[e])&&o({target:r,attributeName:s[e],oldValue:null})})),r}};
const t=!0,n=!1,o="querySelectorAll",r="querySelectorAll",{document:l,Element:s,MutationObserver:c,Set:a,WeakMap:i}=self,u=e=>r in e,{filter:f}=[];var h=e=>{const h=new i,d=(t,n)=>{let o;if(n)for(let r,l=(e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector)(t),s=0,{length:c}=p;s<c;s++)l.call(t,r=p[s])&&(h.has(t)||h.set(t,new a),o=h.get(t),o.has(r)||(o.add(r),e.handle(t,n,r)));else h.has(t)&&(o=h.get(t),h.delete(t),o.forEach((o=>{e.handle(t,n,o)})))},g=(e,t=!0)=>{for(let n=0,{length:o}=e;n<o;n++)d(e[n],t)},{query:p}=e,m=e.root||l,y=((e,r=document,l=MutationObserver,s=["*"])=>{const c=(n,r,l,s,a,i)=>{for(const u of n)(i||o in u)&&(a?l.has(u)||(l.add(u),s.delete(u),e(u,a)):s.has(u)||(s.add(u),l.delete(u),e(u,a)),i||c(u[o](r),r,l,s,a,t))},a=new l((e=>{if(s.length){const o=s.join(","),r=new Set,l=new Set;for(const{addedNodes:s,removedNodes:a}of e)c(a,o,r,l,n,n),c(s,o,r,l,t,n)}})),{observe:i}=a;return(a.observe=e=>i.call(a,e,{subtree:t,childList:t}))(r),a})(d,m,c,p),{attachShadow:w}=s.prototype;return w&&(s.prototype.attachShadow=function(e){const t=w.call(this,e);return y.observe(t),t}),p.length&&g(m[r](p)),{drop:e=>{for(let t=0,{length:n}=e;t<n;t++)h.delete(e[t])},flush:()=>{const e=y.takeRecords();for(let t=0,{length:n}=e;t<n;t++)g(f.call(e[t].removedNodes,u),!1),g(f.call(e[t].addedNodes,u),!0)},observer:y,parse:g}};const{document:d,Map:g,MutationObserver:p,Object:m,Set:y,WeakMap:w,Element:b,HTMLElement:E,Node:v,Error:S,TypeError:M,Reflect:O}=self,{defineProperty:A,keys:N,getOwnPropertyNames:q,setPrototypeOf:C}=m;let T=!self.customElements;const D=e=>{const t=N(e),n=[],{length:o}=t;for(let r=0;r<o;r++)n[r]=e[t[r]],delete e[t[r]];return()=>{for(let r=0;r<o;r++)e[t[r]]=n[r]}};if(T){const{createElement:L}=d,P=new g,$=new g,k=new g,I=new g,x=[],H=(e,t,n)=>{const o=k.get(n);if(t&&!o.isPrototypeOf(e)){const t=D(e);R=C(e,o);try{new o.constructor}finally{R=null,t()}}const r=(t?"":"dis")+"connectedCallback";r in o&&e[r]()},{parse:_}=h({query:x,handle:H});let R=null;const V=e=>{if(!$.has(e)){let t,n=new Promise((e=>{t=e}));$.set(e,{$:n,_:t})}return $.get(e).$},j=e(V,p);function W(){const{constructor:e}=this;if(!P.has(e))throw new M("Illegal constructor");const t=P.get(e);if(R)return j(R,t);const n=L.call(d,t);return j(C(n,e.prototype),t)}A(self,"customElements",{configurable:!0,value:{define:(e,t)=>{if(I.has(e))throw new S(`the name "${e}" has already been used with this registry`);P.set(t,e),k.set(e,t.prototype),I.set(e,t),x.push(e),V(e).then((()=>{_(d.querySelectorAll(e))})),$.get(e)._(t)},get:e=>I.get(e),whenDefined:V}}),A(W.prototype=E.prototype,"constructor",{value:W}),A(self,"HTMLElement",{configurable:!0,value:W}),A(d,"createElement",{configurable:!0,value(e,t){const n=t&&t.is,o=n?I.get(n):I.get(e);return o?new o:L.call(d,e)}}),"isConnected"in v.prototype||A(v.prototype,"isConnected",{configurable:!0,get(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(T=!self.customElements.get("extends-li"),T)try{function F(){return self.Reflect.construct(HTMLLIElement,[],F)}F.prototype=HTMLLIElement.prototype;const U="extends-li";self.customElements.define("extends-li",F,{extends:"li"}),T=d.createElement("li",{is:U}).outerHTML.indexOf(U)<0;const{get:z,whenDefined:B}=self.customElements;A(self.customElements,"whenDefined",{configurable:!0,value(e){return B.call(this,e).then((t=>t||z.call(this,e)))}})}catch(G){}if(T){const J=self.customElements,{createElement:K}=d,{define:Q,get:X,upgrade:Y}=J,{construct:Z}=O||{construct(e){return e.call(this)}},ee=new w,te=new y,ne=new g,oe=new g,re=new g,le=new g,se=[],ce=[],ae=e=>le.get(e)||X.call(J,e),ie=(e,t,n)=>{const o=re.get(n);if(t&&!o.isPrototypeOf(e)){const t=D(e);pe=C(e,o);try{new o.constructor}finally{pe=null,t()}}const r=(t?"":"dis")+"connectedCallback";r in o&&e[r]()},{parse:ue}=h({query:ce,handle:ie}),{parse:fe}=h({query:se,handle(e,t){ee.has(e)&&(t?te.add(e):te.delete(e),ce.length&&me.call(ce,e))}}),{attachShadow:he}=b.prototype;he&&(b.prototype.attachShadow=function(e){const t=he.call(this,e);return ee.set(this,t),t});const de=e=>{if(!oe.has(e)){let t,n=new Promise((e=>{t=e}));oe.set(e,{$:n,_:t})}return oe.get(e).$},ge=e(de,p);let pe=null;function me(e){const t=ee.get(e);ue(t.querySelectorAll(this),e.isConnected)}q(self).filter((e=>/^HTML.*Element$/.test(e))).forEach((e=>{const t=self[e];function n(){const{constructor:e}=this;if(!ne.has(e))throw new M("Illegal constructor");const{is:n,tag:o}=ne.get(e);if(n){if(pe)return ge(pe,n);const t=K.call(d,o);return t.setAttribute("is",n),ge(C(t,e.prototype),n)}return Z.call(this,t,[],e)}C(n,t),A(n.prototype=t.prototype,"constructor",{value:n}),A(self,e,{value:n})})),A(d,"createElement",{configurable:!0,value(e,t){const n=t&&t.is;if(n){const t=le.get(n);if(t&&ne.get(t).tag===e)return new t}const o=K.call(d,e);return n&&o.setAttribute("is",n),o}}),A(J,"get",{configurable:!0,value:ae}),A(J,"whenDefined",{configurable:!0,value:de}),A(J,"upgrade",{configurable:!0,value(e){const t=e.getAttribute("is");if(t){const n=le.get(t);if(n)return void ge(C(e,n.prototype),t)}Y.call(J,e)}}),A(J,"define",{configurable:!0,value(e,t,n){if(ae(e))throw new S(`'${e}' has already been defined as a custom element`);let o;const r=n&&n.extends;ne.set(t,r?{is:e,tag:r}:{is:"",tag:e}),r?(o=`${r}[is="${e}"]`,re.set(o,t.prototype),le.set(e,t),ce.push(o)):(Q.apply(J,arguments),se.push(o=e)),de(e).then((()=>{r?(ue(d.querySelectorAll(o)),te.forEach(me,[o])):fe(d.querySelectorAll(o))})),oe.get(e)._(t)}})}}();

class Loader extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .x-loader {
          animation: xboxloader infinite 1.5s linear;
          border: #FFF 5px solid;
          border-radius:50%;
          box-sizing: border-box;
          height: 20px;
          opacity: 0;
          width: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -10px;
          z-index: 10;
        }

        @keyframes xboxloader {
          0% { transform: scale(0); opacity:0; }
          20% { opacity:1; }
          25% { transform: scale(1); opacity:1; }
          50% { border-width:0; opacity:0; transform: scale(1.3);  }
        }
      </style>
      <div class="x-loader"></div>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setAttribute('aria-label', 'Cargando');
  }

  show() {
    this.removeAttribute('hidden');
  }

  hide() {
    this.setAttribute('hidden', true);
  }
}
window.customElements.define('x-loader', Loader);

class ShareButton extends HTMLButtonElement {
  constructor() {
    super();
    this._title = this.getAttribute('title');
    this._url = window.location.href;
    this.addEventListener('click', this._onClick.bind(this));
  }

  get title() { return this._title }
  get url() { return this._url }

  _onClick() {
    if ('share' in navigator) {
      navigator.share({
        title: this.title,
        url: this.url,
      });

    } else if ('clipboard' in navigator) {
      navigator.clipboard.writeText(this.url)
        .then(() => alert('¡Copiado al portapapeles!'));

    } else {
      alert(`Copiá la url: ${this.url}`);
    }
  }
}
window.customElements.define('share-button', ShareButton, { extends: 'button' });


class BackButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', this._onClick.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  show() {
    this.removeAttribute('hidden');
  }

  hide() {
    this.setAttribute('hidden', true);
  }

  _onClick() {
    window.history.back();
  }
}
window.customElements.define('back-button', BackButton, { extends: 'button' });

class SwitchButton extends HTMLButtonElement {
  static observedAttributes = ['active'];
  static formAssociated = true;

  constructor() {
    super();
    this._active = null;
    this.setAttribute('role', 'switch');
    this.ariaChecked = false;
    this.addEventListener('click', this._onClick.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._active = ['on', 'true', ''].includes(newValue);
    this.ariaChecked = this._active;
    this._updateRendering();
  }

  get active() {
    return this._active;
  }

  set active(a) {
    this.toggleAttribute('active', Boolean(a));
  }

  show(a) {
    this.setAttribute('active', a);
    this.removeAttribute('hidden');
  }

  hide() {
    this.setAttribute('hidden', true);
  }

  _updateRendering() {
    this.classList[this._active ? 'add' : 'remove']('switch-on');
  }

  _onClick() {
    this._active = !this._active;
    this[this._active ? 'setAttribute' : 'removeAttribute']('active', '');
  }
}
window.customElements.define('switch-button', SwitchButton, { extends: 'button' });

class ToggleCollapse extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .collapse:not([hidden]) {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          height: 50px;
          background-color: var(--bg-xbox-dark-color);
          text-align: left;
          display: flex;
          align-items: center;
          margin: 0;
        }

        .close-btn {
          height: 50px;
          color: var(--txt-color);
          font-size: 16px;
          padding: 0 5px;
          background: none;
          border: none;
        }
      </style>
      <slot name="trigger"></slot>
      <div class="collapse" hidden>
        <slot name="content"></slot>
        <button class="close-btn">Cancelar</button>
      </div>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.trigger.setAttribute('aria-expanded', false);
    this.trigger.setAttribute('aria-expanded', false);
    this.trigger.addEventListener('click', this.open.bind(this));
    this.closeBtn.addEventListener('click', this.close.bind(this));
    this.querySelector('[slot="content"]').removeAttribute('hidden');
  }

  get trigger() {
    return this.querySelector('[slot="trigger"]');
  }

  get content() {
    return this.shadowRoot.querySelector('.collapse');
  }

  get closeBtn() {
    return this.shadowRoot.querySelector('.close-btn');
  }

  open() {
    this.trigger.setAttribute('aria-expanded', true);
    this.content.removeAttribute('hidden');
  }

  close() {
    this.trigger.setAttribute('aria-expanded', false);
    this.content.setAttribute('hidden', true);
  }

  show() {
    this.removeAttribute('hidden');
  }

  hide() {
    this.close();
    this.setAttribute('hidden', true);
  }
}
window.customElements.define('x-toggle-collapse', ToggleCollapse);
class NotificationPrompt extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 15px;
          padding: 15px;
          border-radius: 10px;
          background: linear-gradient(210deg, #FF057C 0%, #8D0B93 50%, #321575 100%);
          width: auto;
        }

        p {
          margin: 0 0 10px;
          line-height: 1.4em;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: .9em;
          line-height: 1.5em;
          text-align: center;
          background-color: var(--txt-color);
          border: 1px solid var(--bg-highlight-color);
          padding: 0.5em 0.7em;
          cursor: pointer;
          border-radius: 4px;
          white-space: nowrap;
          box-sizing: border-box;
          text-decoration: none;
        }
      </style>
      <p>Enterate cuando tus juegos favoritos estén en oferta activando las notificaciones.</p>
      <button class="btn">
        <svg width="18" height="18"  viewBox="0 0 612 612" aria-hidden="true"><path d="M570 500c-65-29-67-155-67-158v-85c0-81-50-151-121-181a76 76 0 0 0-152 0 197 197 0 0 0-121 181v85c0 3-2 129-67 158a17 17 0 0 0 7 33h165c3 19 12 36 25 50a92 92 0 0 0 134 0c13-14 22-31 25-50h165a17 17 0 0 0 7-33zm-86-60c7 21 17 41 31 59H97c14-18 24-38 31-59h356zM306 35c19 0 35 12 40 30a197 197 0 0 0-80 0c5-18 21-30 40-30zM144 342v-85a162 162 0 0 1 324 0v85c0 2 0 30 7 63H137c7-33 7-61 7-63zm162 235c-26 0-49-19-57-44h114c-8 25-31 44-57 44z"/><path d="M306 119c-74 0-135 61-135 135a17 17 0 0 0 35 0c0-55 45-100 100-100a17 17 0 1 0 0-35z"/></svg>
        Activar notificaciones
      </button>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.addEventListener('click', this._onClick.bind(this));
    this._permissions();
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  show() {
    this.removeAttribute('hidden');
  }

  hide() {
    this.setAttribute('hidden', true);
  }

  _onClick() {
    window.Notification.requestPermission().then(async (result) => {
      if (result === 'granted') {
        this.hide();
      }
    });
  }

  async _permissions() {
    if (!navigator.permissions) { return; }

    const bsStatus = await navigator.permissions.query({ name: 'periodic-background-sync' });
    const notifStatus = await navigator.permissions.query({ name: 'notifications' });
    if (bsStatus.state === 'granted') {
      if (['denied', 'granted'].includes(notifStatus.state)) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
}
window.customElements.define('notification-prompt', NotificationPrompt);

class InstallButton extends HTMLButtonElement {
  constructor() {
    super();
    this._deferredPrompt = null;

    this.addEventListener('click', this._onClick.bind(this));

    window.addEventListener('beforeinstallprompt', (eve) => {
      this._deferredPrompt = eve;
      this.show();
    });

    window.addEventListener('appinstalled', () => {
      this._deferredPrompt = null;
      this.hide();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  show() {
    if (this._deferredPrompt) {
      this.removeAttribute('hidden');
    }
  }

  hide() {
    this.setAttribute('hidden', true);
  }

  _onClick() {
    if (this._deferredPrompt) {
      this._deferredPrompt.prompt();
    }
  }
}
window.customElements.define('install-button', InstallButton, { extends: 'button' });


export class LiteYTEmbed extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",LiteYTEmbed.warmConnections,{once:!0}),this.addEventListener("click",(()=>this.addIframe()))}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return Number(this.getAttribute("videoStartAt")||"0")}set videoStartAt(t){this.setAttribute("videoStartAt",String(t))}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}setupDom(){const t=this.attachShadow({mode:"open"});t.innerHTML='\n      <style>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n          --lyt-animation: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          --lyt-play-btn-default: #212121;\n          --lyt-play-btn-hover: #f00;\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: \'\';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n          height: 60px;\n          width: 100%;\n          transition: var(--lyt-animation);\n          z-index: 1;\n        }\n\n        #playButton {\n          width: 70px;\n          height: 46px;\n          background-color: var(--lyt-play-btn-hover);\n          z-index: 1;\n          opacity: 0.8;\n          border-radius: 14%;\n          transition: var(--lyt-animation);\n          border: 0;\n        }\n\n        #frame:hover > #playButton {\n          background-color: var(--lyt-play-btn-hover);\n          opacity: 1;\n        }\n\n        #playButton:before {\n          content: \'\';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <source id="webpPlaceholder" type="image/webp">\n          <source id="jpegPlaceholder" type="image/jpeg">\n          <img id="fallbackPlaceholder" referrerpolicy="origin">\n        </picture>\n        <button id="playButton"></button>\n      </div>\n    ',this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),this.autoLoad&&this.initIntersectionObserver()}attributeChangedCallback(t,e,i){switch(t){case"videoid":case"playlistid":e!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1))}}addIframe(t=!1){if(!this.isIframeLoaded){const e=t?0:1,i=this.noCookie?"-nocookie":"";let n;n=this.playlistId?`?listType=playlist&list=${this.playlistId}&`:`${this.videoId}?`;const o=`\n<iframe frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube${i}.com/embed/${n}autoplay=${e}&${this.params}"\n></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",o),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){LiteYTEmbed.addPrefetch("preconnect","https://i.ytimg.com/");const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,e=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=t,this.domRefImg.jpeg.srcset=e,this.domRefImg.fallback.src=e,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg?.fallback?.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&!this.isIframeLoaded&&(LiteYTEmbed.warmConnections(),this.addIframe(!0),e.unobserve(this))}))}),{root:null,rootMargin:"0px",threshold:0}).observe(this)}static addPrefetch(t,e,i){const n=document.createElement("link");n.rel=t,n.href=e,i&&(n.as=i),n.crossOrigin="true",document.head.append(n)}static warmConnections(){LiteYTEmbed.isPreconnected||(LiteYTEmbed.addPrefetch("preconnect","https://s.ytimg.com"),LiteYTEmbed.addPrefetch("preconnect","https://www.youtube.com"),LiteYTEmbed.addPrefetch("preconnect","https://www.google.com"),LiteYTEmbed.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),LiteYTEmbed.addPrefetch("preconnect","https://static.doubleclick.net"),LiteYTEmbed.isPreconnected=!0)}}LiteYTEmbed.isPreconnected=!1,customElements.define("lite-youtube",LiteYTEmbed);
