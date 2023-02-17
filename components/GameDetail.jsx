import GamePrice from '@/components/GamePrice.jsx';
import ShareButton from '@/components/ShareButton.jsx';
import WishToggle from '@/islands/WishToggle.jsx';
import Video from '@/islands/Video.jsx';
import VideoPlaylist from '@/islands/VideoPlaylist.jsx';

export default function GameDetail({ game }) {
  const img = game.images.gamehub_cover_art.url;
  const until = Math.ceil((Date.parse(new Date(game.price.ends)) - Date.parse(new Date())) / (24 * 3600 * 1000));

  return (
    <article class="game-preview" style={{'--game-preview-url': `url(${img}?w=1160)`}}>
      <Video title={game.title} />

      <div>
        <div class="game-preview-info">
          <h3 class="game-title">{game.title}</h3>

          {game.platforms ? <p class="game-by">{game.platforms.join(' | ')}</p> : null}
          {game.developer || game.publisher ? <p class="game-by">by {game.developer || game.publisher}</p> : null}

          <WishToggle id={game.id} title={game.title} amount={game.price.amount} />
          <ShareButton title={game.title} />

          <GamePrice game={game} />

          <a href={`https://store.playstation.com/es-ar/product/${game.id}`} class="game-buy-now btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px" fill="#ffffff" aria-hidden="true">
              <path d="M5.8 32.1c-1.5 1-1 2.9 2.2 3.8 3.3 1.1 6.9 1.4 10.4.8l.5-.1v-3.4l-3.4 1.1c-1.3.4-2.6.5-3.9.2-1-.3-.8-.9.4-1.4l6.9-2.4V27l-9.6 3.3a13 13 0 0 0-3.5 1.8zm23.2-15v9.7c4.1 2 7.3 0 7.3-5.2 0-5.3-1.9-7.7-7.4-9.6C26 11 23 10.1 20 9.5v28.9l7 2.1V16.2c0-1.1 0-1.9.8-1.6 1.1.3 1.2 1.4 1.2 2.5zm13 12.7a21.3 21.3 0 0 0-13.5-.1l-.3.1v3.9l6.5-2.4c1.3-.4 2.6-.5 3.9-.2 1 .3.8.9-.4 1.4l-10 3.7V40L42 34.9c1-.4 1.9-.9 2.7-1.7.7-1 .4-2.4-2.7-3.4z" fill="#ffffff"/>
            </svg>
            {new Date(game.release_date) > new Date() ? 'Precompar' : game.price.amount > 0 ? 'Comprar' : 'Descargar'}
          </a>

          {until ? <div class="game-deal-ends"><small>La oferta termina en {until} días.</small></div> : null}

          {game.release_date ? (
            <>
              <h4>Fecha de lanzamiento:</h4>
              <time datetime={`${new Date(game.release_date).toLocaleString('es-AR')}`}> {new Date(game.release_date).toLocaleString('es-AR', { day: '2-digit' , month: '2-digit', year: 'numeric',  })}</time>
            </>
          ) : null}
        </div>

        {Array.isArray(game.images.screenshot) ?
          <>
            <h4 class="visually-hidden">Imágenes</h4>
            <div class="carousel game-preview-images">
              <img alt="" width="345" height="194" loading="lazy" decoding="async" src={`${img}?w=1160`} />
              {game.images.screenshot.map((img) => <img alt="" width="345" height="194" loading="lazy" decoding="async" src={`${img.url}?w=1160`} />)}
            </div>
          </>
        : null}

        <h4 class="visually-hidden">Videos</h4>
        <div class="carousel game-preview-playlist">
          <a href={`https://www.youtube.com/results?search_query=${game.title}+playstation+trailer`} target="_blank" rel="noreferrer noopener" class="game-preview-video" aria-label="Ver trailers en YouTube">
            <img width="25" height="32" loading="lazy" decoding="async" src="/src/assets/icons/play.svg" alt="" />
          </a>
          <VideoPlaylist title={game.title} />
        </div>

        {game.description ? (
          <>
            <h4 class="visually-hidden">Descripción</h4>
            <p class="game-description">{game.description}</p>
          </>
        ) : null}

      </div>
    </article>
  );
}
