import * as Fresh from '$fresh/runtime.ts';

export default function Head() {
  return (
    <Fresh.Head>
      <meta charset="utf-8" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />

      <link rel="stylesheet" href={Fresh.asset("/src/styles.css")} />

      <link rel="preconnect" href="https://ps-games-api.vercel.app" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="preload" as="font" href="/src/assets/SST-Roman-latin.woff2" crossorigin="anonymous" />
      <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v7/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2" crossorigin="anonymous" />

      <link rel="modulepreload" href={Fresh.asset("/src/js/web-components.js")} />

      <title>PStore: La tienda argenta de PlayStation</title>

      <link rel="shortcut icon" href={Fresh.asset("/src/assets/favicon.png")} />
      <link rel="apple-touch-icon" href={Fresh.asset("/src/assets/favicon.png")} />

      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="PStore" />
      <meta name="theme-color" content="#072523" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1290-2796.jpg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1179-2556.jpg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />

      <meta name="description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de PlayStation. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta name="keywords" content="PlayStation, PlayStation4, PlayStation 5, ofertas en playstation, próximos juegos de PlayStation, nuevos juegos en PlayStation, nuevos juegos, videojuegos, catálogo de juegos de PlayStation, próximos juegos de PlayStation, nuevos juegos en PlayStation, nuevos juegos, videojuegos" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fresh.xstoregames.com" />
      <meta property="og:title" content="PStore: La tienda argenta de PlayStation" />
      <meta property="og:description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de PlayStation. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta property="og:image" content="https://fresh.xstoregames.com/src/assets/xstore-og.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="fresh.xstoregames.com" />
      <meta property="twitter:url" content="https://fresh.xstoregames.com" />
      <meta name="twitter:title" content="PStore: La tienda argenta de PlayStation" />
      <meta name="twitter:description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de PlayStation. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta name="twitter:image" content="https://fresh.xstoregames.com/src/assets/xstore-og.jpg" />

      <link rel="manifest" href={Fresh.asset("/manifest.json")} />
    </Fresh.Head>
  );
}
