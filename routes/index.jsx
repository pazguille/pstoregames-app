import { getPsURL, titles } from '@/utils.js';
import { Head, asset } from '$fresh/runtime.ts';
import Layout from '@/components/Layout.jsx';
import GameImportant from '@/components/GameImportant.jsx';
import Section from '@/components/Section.jsx';
import SectionWithIsland from '@/components/SectionWithIsland.jsx';

export const handler = {
  async GET(req, ctx) {
    const aboveTheFold = [
      {
        type: 'new',
        title: titles['new'],
        icon: '',
        list: [],
      },
      {
        type: 'deals',
        title: titles['deals'],
        icon: <img src="/src/assets/icons/tag.svg" width="24" height="24" />,
        list: [],
      },

      {
        type: 'coming',
        title: titles['coming'],
        icon: '',
        list: [],
      },
    ];

    const belowTheFold = [
      {
        type: 'best',
        title: titles['best'],
        icon: <img src="/src/assets/icons/chart.svg" width="24" height="24" />,
        list: [],
      },
      {
        type: 'indies',
        title: titles['indies'],
        icon: '',
        list: [],
      },
      {
        type: 'free',
        title: titles['free'],
        icon: '',
        list: [],
      },
      {
        type: 'vr',
        title: titles['vr'],
        icon: '',
        list: [],
      },
      {
        type: 'ps5',
        title: titles['ps5'],
        icon: '',
        list: [],
      },
      {
        type: 'ps4',
        title: titles['ps4'],
        icon: '',
        list: [],
      },
      {
        type: 'demos',
        title: titles['demos'],
        icon: '',
        list: [],
      },
    ];

    await Promise.all(aboveTheFold.map(async ({ type }) => {
      const games = await fetch(getPsURL(type)).then(res => res.json());
      const section = aboveTheFold.find(section => section.type === type);
      section.list.push(...games);
    }));

    const hotsale = aboveTheFold[1].list.reduce(function (p, v) {
      return ( p.price.off > v.price.off ? p : v );
    });

    const lcp = hotsale.images.master.url;

    return ctx.render({ aboveTheFold, belowTheFold, hotsale, lcp: lcp + '?w=720' });
  },
};

export default function Home(ctx) {
  const { lcp, hotsale, aboveTheFold, belowTheFold } = ctx.data;

  return (
    <Layout section="">
      <Head>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />

        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=best&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=indies&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=free&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=vr&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=ps5&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=ps4&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://ps-games-api.fly.dev/api/games?list=demos&skipitems=0" crossorigin="anonymous" />
      </Head>
      <div className="home">
        <notification-prompt hidden></notification-prompt>

        <GameImportant game={hotsale} />
        {aboveTheFold.map((section) =>
          <Section section={section} key={section.type} />
        )}

        {
          belowTheFold.map((section, index) =>
            <SectionWithIsland section={section} key={section.type} />
          )
        }
      </div>

      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
          import('${asset('/src/js/swipes.js')}');
          document.body.addEventListener('click', (eve) => {
            if (eve.target.classList.contains('next')) {
              eve.target.parentNode.scrollBy(660, 0);
            }
            if (eve.target.classList.contains('prev')) {
              eve.target.parentNode.scrollBy(-660, 0);
            }
          });
        });
      `}} />
    </Layout>
  );
};
