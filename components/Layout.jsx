import { createContext } from 'preact';
import { asset } from '$fresh/runtime.ts';

import Head from '@/components/Head.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageTransition from '@/islands/PageTransition.jsx';

export const AppContext = createContext({
  section: '',
});

export default function Layout({ children, section }) {
  return (
    <AppContext.Provider value={{ section }}>
      <Head />
      <Header />
      {/* <PageTransition /> */}
      <main>
        {/* <div class="splash-loading" hidden>
          <svg width="100px" height="100px" viewbox="-20 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m110 104.1-5.5-77A5.5 5.5 0 0 0 99 22H77a22 22 0 1 0-44 0H11a5.5 5.5 0 0 0-5.5 5.1l-5.5 77a5.5 5.5 0 0 0 5.5 5.9h99a5.5 5.5 0 0 0 5.5-5.9ZM55 5.5c9.1 0 16.5 7.4 16.5 16.5h-33c0-9.1 7.4-16.5 16.5-16.5Zm-49.5 99 5.5-77h88l5.5 77h-99Z" fill="#fff" />
            <path d="M43.6 46.4h-.1v-.1A23.2 23.2 0 0 1 55 43a21.7 21.7 0 0 1 11.5 3.2l-.1.2H66l-.3-.1h-.8l-2 .1a18 18 0 0 0-4.1 1.3 108.3 108.3 0 0 0-3.8 1.8 20.8 20.8 0 0 0-4.8-2.2l-2.6-.8-2.5-.3-.8.1h-.7Zm5.4 8.8a83 83 0 0 0-9.4 14.3c-.7 1.4-1.2 2.7-1.6 3.9a11.9 11.9 0 0 0-.5 4.1l.1.8h-.1a21.5 21.5 0 0 1-2.8-21.8l2-3.9c.9-1.2 1.8-2.3 2.9-3.2l.3-.1h.3c.4 0 1 0 1.4.2l1.6.8a17.6 17.6 0 0 1 3.3 2.5A21.6 21.6 0 0 1 49 55v.1Zm20.8-6h.3A21.4 21.4 0 0 1 77 65a21.6 21.6 0 0 1-4.5 13.3h-.1V78l.1-.5v-.8c0-1-.1-2-.5-3.3l-1.6-3.9a52 52 0 0 0-4.7-8 84 84 0 0 0-4.7-6.3V55a87.4 87.4 0 0 1 4-3.6l1.7-1.2 1.6-.8 1.5-.3ZM55 60.7l1.2.9a73.6 73.6 0 0 0 3.4 3 71.3 71.3 0 0 1 8 9.3c.8 1 1.4 2.1 1.8 3.2.5 1 .7 2 .7 2.7l-.1 1-.5.8-1.5 1.2-1.6 1a21.9 21.9 0 0 1-22.8 0 55.6 55.6 0 0 1-3-2.2c-.3-.2-.5-.5-.6-.8a3 3 0 0 1-.1-1c0-.7.2-1.6.6-2.6a34.5 34.5 0 0 1 6.7-9.3 66 66 0 0 1 7.8-7.2Z" fill="#fff" />
          </svg>
        </div>
        <script dangerouslySetInnerHTML={{ __html:`
          const { pathname } = new URL(window.location.href);
          const pathSplit = pathname.split('/');
          const page = pathSplit[1];
          if (page === '') {
            document.querySelector('.splash-loading').toggleAttribute('hidden');
          }
          window.addEventListener('load', () => {
            if (page === '') {
              const $splash = document.querySelector('.splash-loading');
              requestIdleCallback(() => {
                $splash.classList.add('bye');
                setTimeout(() => {
                  $splash.toggleAttribute('hidden');
                }, 500);
              });
            }
          });
        `}} /> */}
        {children}
      </main>
      <Footer />

      {/* <script type="text/partytown" dangerouslySetInnerHTML={{ __html:`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GTM4ELWW90', {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          restricted_data_processing: true,
        });

        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          personalization_storage: 'denied',
          functionality_storage: 'denied',
          security_storage: 'denied',
        });

        var s = document.createElement('script');
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-GTM4ELWW90';
        s.async = 1;
        s.type='text/partytown';
        var m = document.getElementsByTagName('script')[0];
        m.parentNode.insertBefore(s,m);
      `}} /> */}

      <script>

      </script>
      <script dangerouslySetInnerHTML={{ __html:`
        window.requestIdleCallback = window.requestIdleCallback || function (cb) {
          var start = Date.now();
          return setTimeout(function () {
            cb({
              didTimeout: false,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
              }
            });
          }, 1);
        };

        window.yieldToMain = function yieldToMain(task) {
          return new Promise(resolve => {
            setTimeout(() => {
              task && task();
              resolve();
            }, 0);
          });
        };

        // window.addEventListener('load', function() {
        //   requestIdleCallback(() => {
        //     try {
        //       window.partytown = {
        //         forward: ['dataLayer.push', 'gtag'],
        //       };
        //       /* Inlined Partytown Snippet */
        //       !function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener("pt0",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.5.4":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement("script")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);
        //     } catch {}
        //   });
        // });

        try {
          if (navigator.serviceWorker) {
            navigator.serviceWorker
              .register('/sw.js', { scope: '/' })
              .then((reg) => {
                console.log('Registration succeeded. Scope is ' + reg.scope);
              }).catch((error) => {
                console.log('Registration failed with ' + error);
              });

            bs();
          }
        } catch {}

        async function bs() {
          if (!navigator.permissions) { return; }

          const registration = await navigator.serviceWorker.ready;
          const status = await navigator.permissions.query({
            name: 'periodic-background-sync',
          });
          if (status.state === 'granted') {
            await registration.periodicSync.register('check-deals', {
              // An interval of one day.
              minInterval: 24 * 60 * 60 * 1000,
            });
          }
        }
      `}} />

      <script type="module" src={asset("/src/js/web-components.js")} />

      <script dangerouslySetInnerHTML={{ __html:`
        // window.addEventListener('appinstalled', (eve) => {
        //   gtag('event', 'app_installed');
        // });

        window.addEventListener('load', () => {
          // document.querySelector('#search').addEventListener('submit', (eve) => {
          //   gtag('event', 'search', {
          //     search_term: eve.target.elements[0].value,
          //   });
          // });

          const io = new IntersectionObserver(
            async (entries) => {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  requestIdleCallback(() => {
                    document.head.insertAdjacentHTML('beforeend', '<link rel="prefetch" href="'+ entry.target.href +'" />');
                    io.unobserve(entry.target);
                  });
                }
              });
            }
          );
          Array.from(document.querySelectorAll('.link'))
            .forEach(link => io.observe(link));
        });
      `}} />
    </AppContext.Provider>
  );
}
