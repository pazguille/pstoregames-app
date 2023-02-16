import { useEffect } from 'preact/hooks';
import { useSignal, effect } from '@preact/signals';
import { gamePsURL } from '@/utils.js';
import GameCard from '@/components/GameCard.jsx';

function EmptyWishlist() {
  return (<p class="empty-list">Aún no tienes favoritos.</p>);
}

function List({ games }) {
  return (
    <ul>
      {games.map((g, i) => <li key={i}><GameCard game={g} /></li>)}
    </ul>
  );
}

export default function Wishlist() {
  const loading = useSignal(true);
  const wishCollection = useSignal([]);

  useEffect(async () => {
    const wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
    if (wishlist && wishlist.length > 0) {
      const map = new Map();
      const games = wishlist.reverse();

      await Promise.all(games.map((gameId) => {
        return fetch(gamePsURL(gameId))
          .then(res => res.json())
          .then(res => map.set(gameId, res));
      }));

      const data = wishlist.map((id) => map.get(id));
      if (data) {
        wishCollection.value = data;
      }
    }
  }, []);

  effect(() => {
    if (wishCollection.value.length > 0) {
      loading.value = false;
    }
  });

  return (
    <div>
      { loading.value ? <x-loader></x-loader> : null}
      { wishCollection.value.length > 0 && <List games={wishCollection.value} /> }
      { !loading.value && wishCollection.value.length === 0 && <EmptyWishlist /> }
    </div>
  );
}
