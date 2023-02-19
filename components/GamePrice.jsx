import { convertDollar } from '@/utils.js';

function StrikeTemplate({ amount, txt }) {
  return (
    <>
      <span class="visually-hidden">Precio anterior: {txt}</span>
      <s aria-hidden="true" class="amount">{amount}</s>
    </>
  );
}

function AmountTemplate({ amount, txt }) {
  return (
    <>
      <span class="visually-hidden">{txt}</span>
      <span aria-hidden="true" class="amount">{amount}</span>
    </>
  );
}



function Price({ amount, strike }) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const amo = amount.split('.')[0].replace(/\,|\$/gi, '');
  const fraction = amo.split('.')[1];
  const txt = `${amo} pesos con ${fraction} centavos`;
  const a = formatter.format(amo);

  return (
    <span class="price">
      {strike ? <StrikeTemplate amount={a} txt={txt} /> : <AmountTemplate amount={a} txt={txt} />}
    </span>
  );
}

export default function GamePrice({ game }) {
  if (!game.price) {
    return null;
  }

  return (
    <div class="game-price">
      {game.price.off ? <span class="game-price-off">{game.price.off}% OFF</span> : null}
      {game.price.off ? <div class="game-price-prev">
        <Price amount={convertDollar(game.price.amount)} strike />
      </div> : null}
      <span class="game-price-amount">
        {(game.price.deal || game.price.amount) ?
          <Price amount={convertDollar(game.price.deal || game.price.amount)} />
          : game.demo ? 'Demo' : 'Gratis'
        }
      </span>
      {game.price.amount > 0 ?
        <small class="game-price-taxes">*impuestos incluídos</small>
        : null
      }
    </div>
  );
}
