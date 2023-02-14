import { Head } from '$fresh/runtime.ts';
import { gamePsURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameDetail from '@/components/GameDetail.jsx';

export const handler = {
  async GET(req, ctx) {
    const gameId = ctx.params.game.split(/_(.*)/s)[1];

    if (!gameId) {
      return Response.redirect(new URL(req.url).origin, 307);
    }

    const game = await fetch(gamePsURL(gameId)).then(res => res.json())

    const lcp = game.images.master.url;

    return ctx.render({ game, lcp });
  },
};

export default function Detail({ data }) {
  const { game, lcp } = data;

  return (
    <Layout>
      <Head>
        <title>{`${game.title} | PStore`}</title>
        <meta name="description" content={`${game.title}: ${game.description?.split('.')[0].replace(/\n/gi, '')}.`} />
        <link rel="preload" as="image" href={`${lcp}?w=1160`} fetchpriority="high" />
        <link rel="preconnect" href="https://media.rawg.io/" />
      </Head>
      <div className="detail page page-on">
        <div className="detail-content page-content">
          <GameDetail game={game} />
        </div>
      </div>

      {/* <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
          document.querySelector('.detail-content').addEventListener('click', (eve) => {
            if (eve.target.classList.contains('game-buy-now')) {
              gtag('event', 'begin_checkout', {
                page_location: window.location.href,
              });
            }

            if (eve.target.classList.contains('share-btn')) {
              gtag('event', 'share', {
                page_location: window.location.href,
              });
            }

            if (eve.target.classList.contains('fav-btn')) {
              if (eve.target.active) {
                gtag('event', 'add_to_wishlist', {
                  page_location: window.location.href,
                });
              }
            }
          });
        });
      `}} /> */}
    </Layout>
  )
}
