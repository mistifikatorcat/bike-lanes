## Bike Lanes Demo

This is a small experiment based on Next.JS + TS that displays data from OpenStreetMap over a Leaflet map.
The project meant as a quick prototype to explore integrating Overpass API with React-Leaflet in a modern Next.js app

## Features

-Fetches cycleway, highway=cycleway, and cycleway=track data for a given bounding box or named area via the Overpass API

-Converts OSM JSON to GeoJSON using osmtogeojson

-Renders the result on a Leaflet map using react-leaflet

-Uses Next.js 13 App Router and client components

##Tech Stack

-Next.js 13 (App Router)

-TypeScript

-React

-Leaflet & react-leaflet

-osmtogeojson

##Getting Started

###Prerequisites

-Node.js (v16+ recommended)

-npm or yarn

###Installation

Clone the repository:

```
git clone https://github.com/your-username/bike-lanes.git
cd bike-lanes
```

Install dependencies:
```
npm install
# or
yarn
```
Running the App

Start the development server:

```
npm run dev
# or
yarn dev
```
Open http://localhost:3000/bike-lanes in your browser to see the bike lanes overlay for the configured area.


##Configuration

-Bounding Box: Edit the bbox array in BikeLaneMap.tsx to change the geographic area.

-Overpass Query: Tweak the Overpass API query in BikeLaneMap.tsx to fetch different OSM tags or use an area-based query.

##Notes

-This is an experimental prototype—expect rough edges around performance, error handling, and loading states.

-For larger areas (e.g. entire countries), consider splitting requests or using server-side caching to avoid timeouts.
