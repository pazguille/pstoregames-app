import { Head } from '$fresh/runtime.ts';
import { getPsURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import CollectionList from '@/islands/CollectionList.jsx';
import { titles } from '@/utils.js';

export const handler = {
  async GET(req, ctx) {
    const { collection } = ctx.params;
    const games = await fetch(getPsURL(collection, 0)).then(res => res.json());
    const lcp = games[0].images.master.url + '?w=330';
    return ctx.render({ collection, games, lcp });
  },
};

export default function Collection({ data }) {
  const { collection, games, lcp } = data;

  return (
    <Layout>
      <Head>
        <title>{`${titles[collection]} | PStore`}</title>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />
      </Head>
      <div class="collection list page page-on">
        <div class="collection-content page-content">
          <h2>{titles[collection]}</h2>
          <CollectionList type={collection} games={games} />
        </div>
      </div>
    </Layout>
  )
}
