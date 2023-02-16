const API_URI = 'https://ps-games-api.fly.dev';
// const API_URI = 'http://localhost:3031';

export const getPsURL = (list, skipitems = 0) => `${API_URI}/api/games?list=${list}&skipitems=${skipitems}`;
export const searchPsURL = (query) => `${API_URI}/api/search?q=${query}`;
export const gamePsURL = (id) => `${API_URI}/api/games?id=${id}`;
export const getPsNewsURL = () => `${API_URI}/api/news`;
export const getVideoURL = (slug) => `${API_URI}/api/videos?game=${slug}`;

export function slugify(str) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

async function updateDollar() {
  return fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(res => res.json())
  .then(data => {
    return parseFloat(data[0].casa.compra.replace(',', '.'));
  });
}

export function getDollar() {
  updateDollar().then(data => {
    dollar = data;
  });
}

const IVA = 0.21;
const IIBB = 0.02;
const AFIP = 0.45;
const PAISA = 0.08;

let dollar = await updateDollar();

export function convertDollar(oprice) {
  const price = (oprice * dollar);
  const final = toFixed(price) + toFixed(price * IVA) + toFixed(price * IIBB) + toFixed(price * AFIP) + toFixed(price * PAISA);
  return final.toFixed(2);
}

function toFixed(num) {
  var d = 2,
    m = Math.pow(10, d),
    n = +(d ? num * m : num).toFixed(8),
    i = Math.floor(n), f = n - i,
    e = 1e-8,
    r = (f > 0.5 - e && f < 0.5 + e) ?
    ((i % 2 == 0) ? i : i + 1) : Math.round(n);
  return d ? r / m : r;
}


export const titles = {
  new : 'Salidos del horno',
  deals: 'Ahorrate unos mangos',
  coming: '¡Mirá lo que se viene!',
  best: 'Deberías jugarlos',
  most: 'Los más jugados',
  free: 'Gratarola',
  'gamepass-new': 'Recién agregados a Game Pass',
  'gamepass-coming': 'Se están por sumar a Game Pass',
  'leaving': 'Se van pronto de Game Pass',
  'gamepass-all': 'Todos los juegos de Game Pass',
  'gold-new': 'Disponibles con Gold',
  'gold-deals': 'Ofertas con Gold',
  'gold-free': 'Días gratis con Gold',
};

import { signal } from '@preact/signals';
export const videosSignal = signal(null);
