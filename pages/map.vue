<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Swiper :navigation="true" :pagination="true" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
        :loop="true" :effect="'creative'" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
        <SwiperSlide style="height:90vh; width:100vw">
            <img class="bg-auto" style="height:90vh; width:100vw; z-index: -1;"
                src="https://image.cnbcfm.com/api/v1/image/104514667-GettyImages-476596875.jpg?v=1532563827&w=1920&h=1080"
                alt="FGV-farm" />
        </SwiperSlide>
        <SwiperSlide style="height:90vh; width:100vw">
            <img class="bg-auto" style="height:90vh; width:100vw; z-index: -1;"
                src="https://careta.my/sites/default/files/2021-12/Part%20of%20the%2044%20units%20of%20MAN%20TGS%20Trucks%20handed%20over%20to%20FGV_7.jpg"
                alt="FGV-farm" />
        </SwiperSlide>
    </Swiper>
    <div class="map-container">
        <div style="color: #f18d1e;" class="space-y-10 text-xl sm:text-sm md:text-md lg:text-lg xl:text-xl">Our Assets</div>
        <div class="map-wrapper">
            <div id="map" style="height: 100%; width: 100%;">
            </div>
            <button @click="resetMap" class="reset-button flex items-center">Reset Map</button>
        </div>

        <div class="asset-count">




            <ul>
                <li v-for="(count, region) in assetCount" :key="region">
                    {{ region }}:<strong>{{ count }}</strong>
                </li>
            </ul>

        </div>

        

    </div>
</template>
<script setup>
import { onMounted, ref, computed, onBeforeMount } from 'vue';
import maplibregl from 'maplibre-gl';
// import maplibreNavControl from 'maplibre-gl/dist/maplibre-gl.css?inline'
import customMarker from '../public/custom_marker.png'


let map = ref(null);
let currentPopup = ref(null); // Add this line at the beginning of your script

const isMobile = ref(false);

onBeforeMount(() => {
    // Check if the viewport width is less than a certain breakpoint (e.g., 768px)
    const viewportWidth = document.documentElement.clientWidth;
    isMobile.value = viewportWidth < 1280;
});

const isDesktop = ref(true);

let minZoom = ref(getInitialMinZoom());

function getInitialMinZoom() {
    // Detect the user's device and set the initial minZoom
    if (isMobile) {
        return 1; // Set a lower minZoom for smaller screens
    } else {
        return 5.825; // Set the default minZoom
    }
}

const geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Bandar Melaka", "region": "Melaka", "factory_type": "Estate" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2465, 2.1896]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Bandar Melaka", "region": "Melaka", "factory_type": "Mills" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2515, 2.1876]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Bandar Melaka", "region": "Melaka", "factory_type": "Refineries" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2435, 2.1916]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6869, 3.1390]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6919, 3.1370]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6859, 3.1410]
            }
        },
        // Continue adding the factory type to the remaining features
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6909, 3.1400]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6879, 3.1380]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6929, 3.1360]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6889, 3.1420]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6939, 3.1350]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6899, 3.1430]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Lumpur", "region": "Kuala Lumpur", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.6949, 3.1340]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Shah Alam", "region": "Selangor", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.5300, 3.0851]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Shah Alam", "region": "Selangor", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.5350, 3.0831]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Shah Alam", "region": "Selangor", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.5250, 3.0871]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Klang", "region": "Selangor", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.4501, 3.0436]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Klang", "region": "Selangor", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.4551, 3.0416]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Klang", "region": "Selangor", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.4451, 3.0476]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kota Kinabalu", "region": "Sabah", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [116.0724, 5.9788]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kota Kinabalu", "region": "Sabah", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [116.0774, 5.9768]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Tawau", "region": "Sabah", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [118.5898, 4.2490]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuching", "region": "Sarawak", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.3348, 1.5495]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuching", "region": "Sarawak", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.3398, 1.5475]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuching", "region": "Sarawak", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.3298, 1.5515]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuching", "region": "Sarawak", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.3358, 1.5485]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuching", "region": "Sarawak", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.3308, 1.5525]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kota Samarahan", "region": "Sarawak", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [110.4288, 1.4916]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Pengkalan Chepa", "region": "Kelantan", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2931, 6.1627]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Perlis", "region": "Perlis", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [100.2494, 6.4431]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kedah", "region": "Kedah", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [100.5289, 6.1241]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kedah", "region": "Kedah", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [100.5339, 6.1221]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Ipoh", "region": "Perak", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.0848, 4.5975]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Ipoh", "region": "Perak", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.0898, 4.5955]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Ipoh", "region": "Perak", "factory_type": "R&D center" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.0798, 4.5995]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Teluk Intan", "region": "Perak", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.0216, 4.0222]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Teluk Intan", "region": "Perak", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [101.0266, 4.0202]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kota Bharu", "region": "Kelantan", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2396, 6.1254]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kota Bharu", "region": "Kelantan", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2446, 6.1234]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Terengganu", "region": "Terengganu", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [103.1372, 5.3147]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuala Terengganu", "region": "Terengganu", "factory_type": "Logistic" },
            "geometry": {
                "type": "Point",
                "coordinates": [103.1422, 5.3127]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuantan", "region": "Pahang", "factory_type": "Factories" },
            "geometry": {
                "type": "Point",
                "coordinates": [103.3360, 3.8077]
            }
        },

    ]
}



// Define a computed property to calculate the count of assets by region
const assetCount = computed(() => {
    const countByRegion = {};

    geojsonData.features.forEach((feature) => {
        const region = feature.properties.region;

        if (!countByRegion[region]) {
            countByRegion[region] = 1;
        } else {
            countByRegion[region]++;
        }
    });

    return countByRegion;
});



onMounted(() => {

        // Update isMobile and isDesktop when the window is resized
        window.addEventListener('resize', () => {
        const viewportWidth = document.documentElement.clientWidth;
        isMobile.value = viewportWidth < 1280;
        isDesktop.value = viewportWidth >= 1280;
    });


    map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/8f39d8a5-bce3-46f7-bdc8-1c8b14aa6439/style.json?key=kpQdXkXa5sUWlEIhVRM7',
        // style: 'https://api.maptiler.com/maps/dataviz/style.json?key=kpQdXkXa5sUWlEIhVRM7',

        center: [109.3500
            , 4.3222
        ],
        zoom: 5.825,
        minZoom: minZoom.value, // Use the minZoom variable
 // Set the maxZoom here
        // maxBounds: [// Define the bounds for Malaysia
        //     [99.0, 0.0], // Southwest corner (longitude, latitude)
        //     [119.0, 7.0], // Northeast corner (longitude, latitude)
        // ],

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
                    '#b7a1a1',
                    10,
                    '#483f39'
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
                    'icon-anchor': 'bottom', // Set the anchor to 'bottom'
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

        currentPopup = new maplibregl.Popup({
            offset: 25,
            closeButton: false,

        }).setHTML('');


        map.on('mouseenter', 'unclustered-points', (e) => {
            let description = '';
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name;
            const region = e.features[0].properties.region;
            const type = e.features[0].properties.factory_type;

            // Construct the description with name and region.
            // Construct the description with name and region.
            description = `
            <strong>Area:</strong> ${name}<br>
            <strong>State:</strong> ${region}<br>
            <strong>Category:</strong> ${type}
    `;            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            const popupContent = document.createElement('div');
            popupContent.className = 'custom-popup';
            popupContent.innerHTML = description;


            popupContent.style.maxHeight = '150px'; // Adjust as needed
            popupContent.style.overflowY = 'auto';  // Enable vertical scrolling
            popupContent.style.color = '#483f39';
            popupContent.style.padding = '10px';

            popup.setLngLat(coordinates).setDOMContent(popupContent)
                .addTo(map);
            currentPopup = popup;

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
        zoom: minZoom.value,
    });
};
</script>
<style scoped>
.map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.map-wrapper {
    position: relative;
    height: 70%;
    width: 90%;
    border: 1px solid #483f39;
    border-bottom: none;
    /* Remove the bottom border */

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
    /* justify-content: center; */
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    background: linear-gradient(to left, #ff9800, #c2410c);
    border: 1px solid #483f39;
    padding: 10px;
    border-radius: 10px;
    max-height: 95px;
    width: 95vw;
    overflow-x: auto;

}

.asset-count ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

/* Base styles */
.asset-count li {
    display: flex;
    color: white;
    font-size: 1.2vw;
    /* Use viewport width for font size */
    align-items: center;
    margin: 1vw;
    /* Use viewport width for margin */
}

.asset-count strong {
    font-weight: bold;
    font-size: 1.4vw;
    /* Use viewport width for font size */
    margin: 1vw;
    /* Use viewport width for margin */
}

/* Media queries for responsiveness */
@media screen and (max-width: 768px) {
    .asset-count li {
        font-size: 1.8vw;
        /* Adjust font size for smaller screens */
        margin: 1.4vw;
        /* Adjust margin for smaller screens */
    }

    .asset-count strong {
        font-size: 2.2vw;
        /* Adjust font size for smaller screens */
        margin: 1.4vw;
        /* Adjust margin for smaller screens */
    }
}


.custom-popup {

    background-color: orange;
}

.scroll-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.left-button {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.right-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}</style>