export const dynamic = 'force-dynamic';
import MapCanvas from '@/components/map';
import { centroid } from '@turf/turf';

export default async function Home() {
  const grids = await (
    await fetch(
      'https://storage.googleapis.com/gee-ramiqcom-bucket/flood_map/roi/jabodetabek_grids.geojson',
    )
  ).json();

  const center = centroid(grids).geometry.coordinates;

  return (
    <>
      <MapCanvas center={center} />
    </>
  );
}
