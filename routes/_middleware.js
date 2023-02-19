import { getDollar, dollar } from '../utils.js';

export async function handler(req, ctx) {
  const accept = req.headers.get('accept');
  const res = await ctx.next();
  if (accept) {
    if (accept.includes('image/*') || req.url.includes('.woff2')) {
      res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    } else if (accept.includes('text/html')) {
      getDollar();
      res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
    }
  }
  return res;
};
