import GameInfo from '@/components/GameInfo.jsx';

export default function GameCardNew({ game }) {
  const img = game.images.portrait_banner ? game.images.portrait_banner.url : game.images?.master?.url;
  return (
    <article class="game-preview-new" style={{"--game-preview-new": `url(${img}?w=630)`}}>
      <GameInfo game={game} />
      <img class="game-img" width="180" height="270" alt="" loading="lazy" decoding="async" src={`${img}?w=360`} />
    </article>
  );
}
