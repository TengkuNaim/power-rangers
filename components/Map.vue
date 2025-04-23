<template>
     <div class="map-container">
        <div style="color: #f18d1e; text-shadow: 1px 0px 0px #483f39;" class="space-y-10 ">Our Base</div>
        <div class="map-wrapper">
          <div id="map" style="height: 100%; width: 100%;">
          </div>
          <button @click="resetMap" class="reset-button flex items-center">Reset Map</button>
        </div>
        <div class="asset-count">
          <ul>
            <li v-for="(count, country) in assetCount" :key="country">
              {{ country }}:<strong>{{ count }}</strong>
            </li>
          </ul>
        </div>
      </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import maplibregl from 'maplibre-gl';
import maplibreNavControl from 'maplibre-gl/dist/maplibre-gl.css?inline'
import customMarker from '../src/custom_marker.png'


let map = ref(null);

const geojsonData = {
  "type": "FeatureCollection",
  "features": [

    {
      "type": "Feature",
      "properties": { "name": "Chicago", "region": "Illinois", "country": "USA", "factory_type": "Oleochemical Plant" },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.23539688836804, 44.225744964857256]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Madrid Trading Office", "region": "Madrid", "country": "Spain", "factory_type": "Trading Office" },
      "geometry": {
        "type": "Point",
        "coordinates": [-3.5029584806815084, 40.53131891605338]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Paris Trading Office", "region": "Ile-de-France", "country": "France", "factory_type": "Trading Office" },
      "geometry": {
        "type": "Point",
        "coordinates": [2.352222, 48.856613]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Istanbul Vegetable Oil Refinery", "region": "Istanbul", "country": "Turkey", "factory_type": "Vegetable Oil Refinery" },
      "geometry": {
        "type": "Point",
        "coordinates": [28.974029, 41.008237]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Lahore Oil Palm Refinery", "region": "Punjab", "country": "Pakistan", "factory_type": "Oil Palm Refinery" },
      "geometry": {
        "type": "Point",
        "coordinates": [74.358747, 31.520369]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Karachi Oil Liquid Terminal", "region": "Sindh", "country": "Pakistan", "factory_type": "Oil Liquid Terminal" },
      "geometry": {
        "type": "Point",
        "coordinates": [67.028704, 24.848565]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Gwadar Oil Jetty Operation", "region": "Balochistan", "country": "Pakistan", "factory_type": "Oil Jetty Operation" },
      "geometry": {
        "type": "Point",
        "coordinates": [62.324663, 25.135315]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Siem Reap Rubber Processing Facility", "region": "Siem Reap Province", "country": "Cambodia", "factory_type": "Rubber Processing Facility" },
      "geometry": {
        "type": "Point",
        "coordinates": [103.864301, 13.361785]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bangkok Rubber Processing Facility", "region": "Bangkok", "country": "Thailand", "factory_type": "Rubber Processing Facility" },
      "geometry": {
        "type": "Point",
        "coordinates": [100.497070, 13.756331]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Jakarta Rubber Processing Facility", "region": "Jakarta", "country": "Indonesia", "factory_type": "Rubber Processing Facility" },
      "geometry": {
        "type": "Point",
        "coordinates": [106.827182, -6.175394]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bali Rubber Liquid Terminal", "region": "Bali", "country": "Indonesia", "factory_type": "Rubber Liquid Terminal" },
      "geometry": {
        "type": "Point",
        "coordinates": [115.217918, -8.409518]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Jakarta Rubber Trading Office", "region": "Jakarta", "country": "Indonesia", "factory_type": "Trading Office" },
      "geometry": {
        "type": "Point",
        "coordinates": [106.823294, -6.208763]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bandar Melaka", "region": "Melaka", "country": "Malaysia", "factory_type": "Estate" },
      "geometry": {
        "type": "Point",
        "coordinates": [44.225744964857256, -87.23539688836804]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bandar Melaka", "region": "Melaka", "country": "Malaysia", "factory_type": "Mills" },
      "geometry": {
        "type": "Point",
        "coordinates": [102.2515, 2.1876]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bandar Melaka", "region": "Melaka", "country": "Malaysia", "factory_type": "Refineries" },
      "geometry": {
        "type": "Point",
        "coordinates": [102.2435, 2.1916]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6869, 3.1390]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6919, 3.1370]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6859, 3.1410]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6909, 3.1400]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6879, 3.1380]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6929, 3.1360]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6889, 3.1420]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6939, 3.1350]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6899, 3.1430]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.6949, 3.1340]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shah Alam", "region": "Selangor", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.5300, 3.0851]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shah Alam", "region": "Selangor", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.5350, 3.0831]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shah Alam", "region": "Selangor", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.5250, 3.0871]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Klang", "region": "Selangor", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.4501, 3.0436]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Klang", "region": "Selangor", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.4551, 3.0416]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Klang", "region": "Selangor", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.4451, 3.0476]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kota Kinabalu", "region": "Sabah", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [116.0724, 5.9788]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kota Kinabalu", "region": "Sabah", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [116.0774, 5.9768]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Tawau", "region": "Sabah", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [118.5898, 4.2490]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuching", "region": "Sarawak", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.3348, 1.5495]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuching", "region": "Sarawak", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.3398, 1.5475]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuching", "region": "Sarawak", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.3298, 1.5515]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuching", "region": "Sarawak", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.3358, 1.5485]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuching", "region": "Sarawak", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.3308, 1.5525]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kota Samarahan", "region": "Sarawak", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [110.4288, 1.4916]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Pengkalan Chepa", "region": "Kelantan", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [102.2931, 6.1627]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Perlis", "region": "Perlis", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [100.2494, 6.4431]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kedah", "region": "Kedah", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [100.5289, 6.1241]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kedah", "region": "Kedah", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [100.5339, 6.1221]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Ipoh", "region": "Perak", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.0848, 4.5975]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Ipoh", "region": "Perak", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.0898, 4.5955]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Ipoh", "region": "Perak", "country": "Malaysia", "factory_type": "R&D center" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.0798, 4.5995]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Teluk Intan", "region": "Perak", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.0216, 4.0222]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Teluk Intan", "region": "Perak", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [101.0266, 4.0202]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kota Bharu", "region": "Kelantan", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [102.2396, 6.1254]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kota Bharu", "region": "Kelantan", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [102.2446, 6.1234]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Terengganu", "region": "Terengganu", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [103.1372, 5.3147]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuala Terengganu", "region": "Terengganu", "country": "Malaysia", "factory_type": "Logistic" },
      "geometry": {
        "type": "Point",
        "coordinates": [103.1422, 5.3127]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kuantan", "region": "Pahang", "country": "Malaysia", "factory_type": "Factories" },
      "geometry": {
        "type": "Point",
        "coordinates": [103.3360, 3.8077]
      }
    },

  ]
}


const assetCount = computed(() => {
  const countByCountry = {};

  geojsonData.features.forEach((feature) => {
    const country = feature.properties.country;

    if (!countByCountry[country]) {
      countByCountry[country] = 1;
    } else {
      countByCountry[country]++;
    }
  });

  return countByCountry;
});



onMounted(() => {

  map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/8f39d8a5-bce3-46f7-bdc8-1c8b14aa6439/style.json?key=EUWpfHdX8QgXpX2PLqy8',

    center: [109.3500
      , 4.3222
    ],
    zoom: 5.825,
    minZoom: 2,


  });

  map.addControl(new maplibregl.NavigationControl());


  map.on('load', () => {

    map.addSource('assets', {
      type: "geojson",

      data: geojsonData,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    });

    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'assets',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#c04b2c',
          3,
          '#c04b2c',
          10,
          '#c04b2c'
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40
        ], 'circle-stroke-width': 1,
        'circle-stroke-color': '#fff',
      }
    });

    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'assets',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 18,
      },
      paint: {
        'text-color': '#ffffff',

      }


    });


    map.loadImage(customMarker, function (error, image) {
      if (error) throw error;

      map.addImage('custom-icon', image);

      map.addLayer({
        id: 'unclustered-points',
        type: 'symbol',
        source: 'assets',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': 'custom-icon',
          'icon-size': 0.075,
          'icon-anchor': 'bottom',
        },
        paint: {
          'icon-opacity': 1,
        },
      });
    });



    map.on('click', 'clusters', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      const clusterId = features[0].properties.cluster_id;
      map.getSource('assets').getClusterExpansionZoom(
        clusterId,
        (err, zoom) => {
          if (err) return;

          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom
          });
        }
      );
    });


    map.on('mouseenter', 'clusters', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', () => {
      map.getCanvas().style.cursor = '';
    });

    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,

    }).setHTML('');


    map.on('mouseenter', 'unclustered-points', (e) => {
      map.getCanvas().style.cursor = 'pointer';

      const coordinates = e.features[0].geometry.coordinates.slice();
      const name = e.features[0].properties.name;
      const country = e.features[0].properties.country;

      const region = e.features[0].properties.region;
      const type = e.features[0].properties.factory_type;

      const description = `
                    <div style="padding:10px; color: #483f39">
                    <strong>Area:</strong> ${name}<br>
                    <strong>State:</strong> ${region}<br>
                    <strong>Country:</strong> ${country}<br>
                    <strong>Category:</strong> ${type}
                    </div>
            `;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }


      popup.setLngLat(coordinates).setHTML(description)
        .addTo(map);

    });

    map.on('mouseleave', 'unclustered-points', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });


  });
});

const resetMap = () => {
  map.easeTo({
    center: [109.3500, 4.3222],
    zoom: 2,
  });
};
</script>

<style>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to left, rgba(255, 153, 0, 0.5), rgba(194, 64, 12, 0.1));
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.map-wrapper {
  position: relative;
  height: 70%;
  width: 90%;
  border: 1px solid #483f39;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}


.reset-button {
  font-weight: bold;
  height: 30px;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 7px;
  border-color: #d9d7d1;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 1;
}

.asset-count {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #ff9800, #c2410c);
  /* background: linear-gradient(to left, rgba(255, 152, 0, 0.8), rgba(194, 65, 12, 0.8)); */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  border: 1px solid #483f39;
  padding: 10px;
  border-radius: 10px;
  min-height: 2vh;
  width: 95vw;
  overflow-x: auto;
}

.asset-count ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.asset-count li {
  display: flex;
  color: white;
  font-size: 1.1vw;
  align-items: center;
  margin: 0.7vw;
}

.asset-count strong {
  font-weight: bold;
  font-size: 1.5vw;
  margin: 0.7vw;
}

@media screen and (max-width: 768px) {
  .map-wrapper {
    height: 80%;
  }

  .asset-count {
    justify-content: left;
    height: 7.5vh;
  }

  .asset-count li {
    font-size: 2.2vw;
  }

  .asset-count strong {
    font-size: 2.6vw;
  }
}

.full-height {
  height: 100vh;
  object-fit: cover;
}

.full-width-desktop {
  width: 100%;
}

@media (max-width: 767px) {
  .full-width-desktop {
    width: 100%;
  }
}
</style>