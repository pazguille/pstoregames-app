import GameListIsland from '@/islands/GameListIsland.jsx';

export default function SectionWithIsland({ section }) {
  return (
    <section>
      <h2>{section.icon}{section.title}</h2>
      <GameListIsland section={section} />
      <a class="see-all link" id={`collection-${section.type}`} href={`/collection/${section.type}`} aria-label={`Ver el listado completo de ${section.title}`}>Ver más</a>
    </section>
  );
}
