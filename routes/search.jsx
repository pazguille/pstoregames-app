import { Head } from '$fresh/runtime.ts';
import { searchPsURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameCard from '@/components/GameCard.jsx';
import EmptyList from '@/components/EmptyList.jsx';

function fetchSearchGames(query) {
  return fetch(searchPsURL(query))
    .then(response => response.json())
    .catch(err => { throw { error: err }; });
};

export const handler = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q');
    const games = await fetchSearchGames(q);
    const lcp = games[0].images.master.url + '?w=330';
    return ctx.render({ q, games, lcp });
  },
};

export default function Search({ data }) {
  const { q, games, lcp } = data;

  return (
    <Layout>
      <Head>
        <title>{`${q} | PStore`}</title>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />
      </Head>
      <div class="results list page page-on">
        <div class="results-content page-content">
          <h2>Resultados para "{q}"</h2>
          {games.length ? <ul>{games.map((game, index) => (
            <li key={index} >
              <GameCard game={game} />
            </li>
          ))}</ul> : <EmptyList />}
        </div>
      </div>
    </Layout>
  )
}
