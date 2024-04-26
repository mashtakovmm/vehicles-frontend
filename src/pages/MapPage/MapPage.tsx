import { useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import './MapPage.css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';

const MapPage = () => {
    const [map, setMap] = useState<Map | null>(null);

    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });
        
        const additionalPointsCoordinates = [
            [13, 13], // Example point 1
            [14, 14], // Example point 2
            [15, 15], // Example point 3
        ];

        const additionalPointsFeatures = additionalPointsCoordinates.map(coords =>
            new Feature({
                geometry: new Point(fromLonLat(coords))
            })
        );

        const pointsLayer = new VectorLayer({
            source: new VectorSource({
                features: [
                    ...additionalPointsFeatures 
                ]
            })
        });

        const newMap = new Map({
            target: "map",
            layers: [osmLayer, pointsLayer],
            view: new View({
                center: fromLonLat([12, 12]), 
                zoom: 7,
            }),
        });

        setMap(newMap);

        // Cleanup function
        return () => {
            if (newMap) {
                newMap.setTarget(undefined);
            }
        };
    }, []);

    return (
        <div id="map" className="map-container" />
    );
}

export default MapPage;
