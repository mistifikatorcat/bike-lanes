// src/components/BikeLaneMap.tsx
'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';
import osmtogeojson from 'osmtogeojson'; // our declared module

export default function BikeLaneMap() {
  const [data, setData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    const bbox = [29.3, 34.2, 33.3, 35.8];
    const overpassQuery = `
      [out:json][timeout:25];
      (
        way["highway"="cycleway"](${bbox.join(',')});
        way["cycleway"="lane"](${bbox.join(',')});
        way["cycleway"="track"](${bbox.join(',')});
      );
      out body;
      >;
      out skel qt;
    `;

    fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: overpassQuery.trim(),
    })
      .then((r) => r.json())
      .then((osm) => {
        const geo = osmtogeojson(osm) as GeoJsonObject;
        setData(geo);
      })
      .catch(console.error);
  }, []);

  const israelBounds: [number, number][] = [
    [29.3, 34.2],  // southwest
    [33.3, 35.8],  // northeast
  ]

  return (
    <MapContainer
      bounds={israelBounds}
      style={{ height: '100vh', width: '100%' }}
      scrollWheelZoom
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors" // <— attribution text
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data && (
        <GeoJSON
          data={data}
          style={{ color: '#0074D9', weight: 4, opacity: 0.7 }} // <— line styling
        />
      )}
    </MapContainer>
  );
}
