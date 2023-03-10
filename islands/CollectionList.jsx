import { getPsURL } from '@/utils.js';
import { useEffect, useRef } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import GameCard from '@/components/GameCard.jsx';

export default function CollectionList({ type, games }) {
  const LIMIT = 10;
  const $collection = useRef(null);
  const gamesCollection = useSignal(games);
  const skip = useSignal(LIMIT);

  if (typeof window.document !== 'undefined') {
    const io = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        io.unobserve(io.current);
        const response = await fetch(getPsURL(type, skip.value)).then(res => res.json());
        if (response.length > 0) {
          const all = new Set([...gamesCollection.value, ...response]);
          gamesCollection.value = [...all];
          skip.value = skip.value + LIMIT;
        }
      }
    });

    useEffect(() => {
      io.current = $collection.current.lastElementChild.previousElementSibling.previousElementSibling;
      io.observe(io.current);
    }, [gamesCollection.value]);
  }

  return (
    <ul ref={$collection}>
      {gamesCollection.value.map((game, index) => (
        <li key={index}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
}
