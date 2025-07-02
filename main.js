import * as maplibregl from "https://esm.sh/maplibre-gl";

const map = new maplibregl.Map({
    container: 'map', // container id
    style: './assets/style.json', // style URL
    // style: 'https://demotiles.maplibre.org/style.json', // alternative
    center: [41.65, -0.88], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);