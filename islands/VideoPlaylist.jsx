import { videosSignal } from '@/utils.js';

export default function GameListIsland() {
  const video = videosSignal.value;
  return (
    <div style={{ display: 'inline-flex' }}>
      {video && video.playlist && video.playlist.length > 0 && video.playlist.map((id) => <lite-youtube key={id} videoid={id}></lite-youtube>)}
    </div>
  );
}
