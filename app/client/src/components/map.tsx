'use client';

import { LngLatLike, Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect } from 'react';

export default function MapCanvas({ center }: { center: number[] }) {
  const divId = 'map';

  useEffect(() => {
    const map = new Map({
      container: divId,
      center: center as LngLatLike,
      zoom: 9,
      style: {
        version: 8,
        sources: {
          basemap: {
            type: 'raster',
            url: '/basemap',
          },
        },
        layers: [{ source: 'basemap', id: 'basemap', type: 'raster' }],
      },
    });
  });

  return <div id={divId} />;
}
