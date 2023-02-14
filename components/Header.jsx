export default function Header() {
  return (
    <header>
      <h1>
        <a href="/" aria-label="PStore Games">
          <svg aria-hidden="true" width="28" height="28" viewBox="120 13 110 110" xmlns="http://www.w3.org/2000/svg">
            <path d="M 230.93 117.642 L 225.43 40.642 C 225.22 37.762 222.818 35.534 219.93 35.542 L 197.93 35.542 C 197.93 18.606 179.597 8.022 164.93 16.49 C 158.123 20.419 153.93 27.682 153.93 35.542 L 131.93 35.542 C 129.042 35.534 126.64 37.762 126.43 40.642 L 120.93 117.642 C 120.697 120.834 123.229 123.551 126.43 123.542 L 225.43 123.542 C 228.631 123.551 231.163 120.834 230.93 117.642 Z M 175.93 19.042 C 185.03 19.042 192.43 26.442 192.43 35.542 L 159.43 35.542 C 159.43 26.442 166.83 19.042 175.93 19.042 Z M 126.43 118.042 L 131.93 41.042 L 219.93 41.042 L 225.43 118.042 L 126.43 118.042 Z" fill="#9AA495"></path>
            <path d="M 148.556 89.145 C 146.468 90.538 147.164 93.186 151.618 94.44 C 156.212 95.972 161.223 96.39 166.095 95.555 L 166.791 95.415 L 166.791 90.677 L 162.059 92.21 C 160.248 92.768 158.44 92.907 156.63 92.489 C 155.237 92.07 155.516 91.235 157.186 90.538 L 166.791 87.194 L 166.791 82.038 L 153.428 86.636 C 151.686 87.22 150.044 88.066 148.556 89.145 Z M 180.85 68.243 L 180.85 81.76 C 186.558 84.546 191.012 81.76 191.012 74.513 C 191.012 67.128 188.367 63.784 180.711 61.136 C 176.674 59.743 172.499 58.489 168.322 57.652 L 168.322 97.923 L 178.067 100.85 L 178.067 66.988 C 178.067 65.456 178.067 64.341 179.18 64.759 C 180.711 65.177 180.85 66.71 180.85 68.243 Z M 198.946 85.94 C 192.863 83.855 186.269 83.806 180.154 85.801 L 179.737 85.94 L 179.737 91.374 L 188.785 88.029 C 190.595 87.473 192.404 87.333 194.214 87.752 C 195.606 88.169 195.327 89.005 193.657 89.702 L 179.737 94.858 L 179.737 100.153 L 198.946 93.046 C 200.338 92.489 201.592 91.793 202.705 90.677 C 203.679 89.284 203.262 87.333 198.946 85.94 Z" fill="#9AA495" style=""></path>
          </svg>
        </a>
      </h1>

      <button
        is="install-button"
        id="install-btn"
        class="header-btn install-btn"
        aria-label="Instalar"
        hidden
      >
        <span>
          <svg width="16" height="16" viewBox="0 0 38 38" fill="#9AA495" aria-hidden="true"><path class="clr-i-outline clr-i-outline-path-1" d="M31 8h-4a1 1 0 0 0 0 2h4v20H5V10h4a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path class="clr-i-outline clr-i-outline-path-2" d="m10 19 7 7a1 1 0 0 0 2 0l7-7a1 1 0 0 0-2-2l-5 6V4a1 1 0 0 0-2 0v19l-5-6a1 1 0 0 0-2 2Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          Instalar
        </span>
      </button>

      <button
        is="back-button"
        id="page-back-btn"
        class="page-back-btn header-btn"
        aria-label="Volver para atrás"
        hidden
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#9AA495"/></svg>
      </button>

      <x-toggle-collapse id="search-collapse">
        <button class="search-btn header-btn" aria-label="Buscar" slot="trigger">
          <svg width="25" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".1" d="M10.5 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#9AA495"/><path d="M20.8 21.7a1 1 0 0 0 1.4-1.4l-1.4 1.4Zm-4.6-7.4a1 1 0 0 0-1.4 1.4l1.4-1.4Zm6 6-6-6-1.4 1.4 6 6 1.4-1.4ZM16.5 10a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm-6 6a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm-6-6a6 6 0 0 1 6-6V2a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Z" fill="#9AA495"/></svg>
        </button>
        <form id="search" class="search" action="/search" slot="content" hidden>
          <label for="query">Buscar</label>
          <input type="search" id="query" name="q" placeholder="Buscar juegos..." />
          <button type="submit" aria-label="Buscar">
            <svg width="25" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".1" d="M10.5 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#9AA495"/><path d="M20.8 21.7a1 1 0 0 0 1.4-1.4l-1.4 1.4Zm-4.6-7.4a1 1 0 0 0-1.4 1.4l1.4-1.4Zm6 6-6-6-1.4 1.4 6 6 1.4-1.4ZM16.5 10a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm-6 6a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm-6-6a6 6 0 0 1 6-6V2a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Z" fill="#9AA495"/></svg>
          </button>
        </form>
      </x-toggle-collapse>
    </header>
  );
}
