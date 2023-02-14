import { getPsURL } from '@/utils.js';
import { Head } from '$fresh/runtime.ts';
import { asset } from '$fresh/runtime.ts';
import Layout from '@/components/Layout.jsx';
import GameImportant from '@/components/GameImportant.jsx';
import Section from '@/components/Section.jsx';

export const handler = {
  async GET(req, ctx) {

    const aboveTheFold = [
      {
        type: 'new',
        title: 'Salidos del horno',
        icon: '',
        list: [],
      },
      {
        type: 'deals',
        title: 'Ahorrate unos mangos',
        icon: <img src="/src/assets/icons/tag.svg" width="24" height="24" />,
        list: [],
      },

      {
        type: 'coming',
        title: '¡Mirá lo que se viene!',
        icon: '',
        list: [],
      },
      {
        type: 'best',
        title: 'Deberías jugarlos',
        icon: '',
        list: [],
      },
      {
        type: 'indies',
        title: 'Los mejores indies',
        icon: <img src="/src/assets/icons/chart.svg" width="24" height="24" />,
        list: [],
      },
      {
        type: 'free',
        title: 'Gratarola',
        icon: '',
        list: [],
      },
      {
        type: 'vr',
        title: 'PlayStation VR',
        icon: '',
        list: [],
      },
      {
        type: 'ps5',
        title: 'PlayStation 5',
        icon: '',
        list: [],
      },
      {
        type: 'ps4',
        title: 'PlayStation 4',
        icon: '',
        list: [],
      },
      {
        type: 'demos',
        title: 'Demos',
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

    return ctx.render({ aboveTheFold, hotsale, lcp: lcp + '?w=720' });
  },
};

export default function Home(ctx) {
  const { lcp, hotsale, aboveTheFold } = ctx.data;

  return (
    <Layout section="">
      <Head>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />

        {/* <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=free&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=most&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=best&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=coming&skipitems=0" crossorigin="anonymous" /> */}
      </Head>
      <div className="home">
        <notification-prompt hidden></notification-prompt>

        <GameImportant game={hotsale} />
        {aboveTheFold.map((section) =>
          <Section section={section} key={section.type} />
        )}

        {/* {
          belowTheFold.map((section, index) =>
            <SectionWithIsland section={section} key={section.type} />
          )
        } */}
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
