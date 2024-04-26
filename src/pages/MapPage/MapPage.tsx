import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import Overlay from 'ol/Overlay';

import { useEffect, useRef } from 'react';
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { useGetAllCarsQuery } from '../../store/api/apiSlice';

import 'ol/ol.css';
import './MapPage.css';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

interface CoordsPoint {
    latitude: number;
    longitude: number;
}

const MapPage = () => {
    const { isLoading } = useGetAllCarsQuery()
    const { cars } = useSelector((state: RootState) => state.cars)

    const overlayRef = useRef<HTMLDivElement>(null)

    const GetAvgCoords = (points: CoordsPoint[]): { latitude: number, longitude: number } => {
        if (points.length === 0) {
            return { latitude: 0, longitude: 0 };
        }

        const totalLat = points.reduce((acc, point) => acc + point.latitude, 0);
        const totalLong = points.reduce((acc, point) => acc + point.longitude, 0);
        const avgLat = totalLat / points.length;
        const avgLong = totalLong / points.length;

        return { latitude: avgLat, longitude: avgLong };
    }


    useEffect(() => {
        if (isLoading) { return }

        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });

        const carFeatures = cars.map(car =>
            new Feature({
                geometry: new Point(fromLonLat([car.longitude, car.latitude]))
            })
        );

        const pointsLayer = new VectorLayer({
            source: new VectorSource({
                features: [
                    ...carFeatures
                ]
            }),
            style: new Style({
                image: new Circle({
                    radius: 5, 
                    fill: new Fill({
                        color: '#D9B8C4' 
                    }),
                    stroke: new Stroke({
                        color: '#241715', 
                        width: 1 
                    })
                })
            })
        });

        const points: CoordsPoint[] = cars.map(car => ({
            latitude: car.latitude,
            longitude: car.longitude
        }));

        const avgCoords = GetAvgCoords(points);

        const overlay = new Overlay({
            element: overlayRef.current!, 
            positioning: 'bottom-center', 
            stopEvent: true, 
            offset: [0, -10], 
        });

        if (cars.length > 0) {
            const firstCarCoords = fromLonLat([cars[0].longitude, cars[0].latitude]);
            overlay.setPosition(firstCarCoords);
        }

        const newMap = new Map({
            target: "map",
            layers: [osmLayer, pointsLayer],
            view: new View({
                center: fromLonLat([avgCoords.longitude, avgCoords.latitude]),
                zoom: 10,
            }),
        });

        newMap.addOverlay(overlay);


        // Cleanup function
        return () => {
            if (newMap) {
                newMap.setTarget(undefined);
            }
        };
    }, [isLoading, cars]);



    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div id="map" className="map-container" />
                    <div ref={overlayRef} className="">
                        <p>Overlay Content</p>
                    </div>
                </>


            )}

        </div>
    );
}

export default MapPage;
