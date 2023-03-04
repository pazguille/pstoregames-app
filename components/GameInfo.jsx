import { slugify } from '@/utils.js';
import GamePrice from '@/components/GamePrice.jsx';

export default function GameInfo({ game }) {
  return (
    <div>
      <h3 class="game-title">
        <a
          id={`detail-${game.id}`}
          href={game.concept ?
            `https://store.playstation.com/es-ar/concept/${game.id}`
            :
            `/game/${slugify(game.title)}_${game.id}`}
          class="link">
            {game.title}
        </a>
      </h3>
      {game.platforms ? <p class="game-by">{game.platforms.join(' | ')}</p> : null}
      <GamePrice game={game} />
    </div>
  );
}
