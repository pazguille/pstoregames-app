import GameInfo from '@/components/GameInfo.jsx';

export default function GameCardSoon({ game }) {
  const img = game.images.gamehub_cover_art.url;
  return (
    <article class="game-preview-soon">
      <GameInfo game={game} />
      <img class="game-img" width="256" height="144" alt="" loading="lazy" decoding="async" src={`${img}?w=512`} />
    </article>
  );
}
