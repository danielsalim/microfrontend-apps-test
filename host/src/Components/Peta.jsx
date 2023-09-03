import React, { useRef, useEffect, useState} from "react";
import 'ol/ol.css';
import { Feature, Map, View } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import DragBox from 'ol/interaction/DragBox';
import Select from 'ol/interaction/Select.js';
import Draw from 'ol/interaction/Draw';
import LineString from 'ol/geom/LineString';
import GeoJson from 'ol/format/GeoJSON';
import { Fill, Stroke, Style } from 'ol/style';
import Bandung from '../Assets/Bandung.json';
import './Peta.css'

const UserTable = React.lazy(() => import("userManager/Table"));
function Peta() {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    const [source] = useState(new VectorSource());
    const [isZooming, setIsZooming] = useState(false);
    const [draw, setDraw] = useState(null);

    const [showUserTable, setShowUserTable] = useState(false);

    useEffect(() => {
        const olMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: source
                })
            ],
            view: new View({
                center: fromLonLat([118.8186111, -1.15]),
                zoom: 5.6
            }),
        });

        setMap(olMap);

        const bandungStyle = new Style({
            fill: new Fill({
                color: 'rgba(0, 0, 255, 0.5)',
            }),
            stroke: new Stroke({
                color: 'blue',
                width: 2
            })
        });
        const bandungLayer = new VectorLayer({
            source: new VectorSource({
                features: new GeoJson().readFeatures(Bandung, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                }),
            }),
            style: bandungStyle,
        });

        const select = new Select({
            layers: [source],
        })


        olMap.addLayer(bandungLayer);

        return () => olMap.setTarget(undefined);
    }, [source]);

    const startZoomArea = () => {
        setIsZooming(!isZooming);
        if (!isZooming) {
        const dragBox = new DragBox();
        map.addInteraction(dragBox);
        dragBox.on('boxend', () => {
            const extent = dragBox.getGeometry().getExtent();
            map.getView().fit(extent, {
                size: map.getSize(),
                duration: 250,
                Zoom: 7.5,
            });
            setIsZooming(false);
        });
    } else {
        map.removeInteraction(
            map
            .getInteractions()
            .getArray()
            .find((interaction) => interaction instanceof DragBox),
        );
    }
    };

    const startDrawing = (type) => {
        if (draw) {
            map.removeInteraction(draw);
        }
        const newDraw = new Draw({
            source: source,
            type: type,
        });
        newDraw.on('drawend', (event) => {
            const coords = event.feature.getGeometry().getCoordinates();
            localStorage.setItem('  ', JSON.stringify(coords));
        });
        map.addInteraction(newDraw);
        setDraw(newDraw);
    };

    const stopDrawing = () => {
        if (draw) {
            map.removeInteraction(draw);
            setDraw(null);
        }
    };

    const undoDrawing = () => {
        const feature = source.getFeatures();
        if (feature.length >= 0) {
            source.removeFeature(feature[feature.length - 1]);
            localStorage.removeItem('drawnPolyline');
            console.log(feature.length);
        }
    };

    const storedPolyLine = localStorage.getItem('drawnPolyline');
    if (storedPolyLine) {
        const coords = JSON.parse(storedPolyLine);
        const feature = new Feature({
            geometry: new LineString(coords)

        });
        source.addFeature(feature);
    }
    
    const openUserTable = () => {
        console.log("clicked")
        if (showUserTable) {
            setShowUserTable(false)
        }
        else {
            setShowUserTable(true)
        }
    }

    return (
        <div className="w-full h-full">
            {!showUserTable ? (
                <div>
                    <div ref={mapRef} className="absolute top-0 left-0 right-0 bottom-0" /> 
                    <div className="absolute right-0 top-0 mt-5 mr-5 space-y-2">
                        <button onClick={openUserTable} className="bg-blue-800 text-white p-2 rounded m-1 mr-1">User Table</button>
                    </div>
                    <div className="absolute right-0 bottom-0 mb-5 mr-5 space-y-2">
                        <button onClick={() => startDrawing("Point")} className="bg-blue-500 text-white p-2 rounded m-1 mr-1">Draw Point</button>
                        <button onClick={() => startDrawing("LineString")} className="bg-blue-500 text-white p-2 rounded m-1">Draw Line</button>
                        <button onClick={() => startDrawing("Polygon")} className="bg-blue-500 text-white p-2 rounded m-1 mr-5">Draw Polygon</button>
                        <button onClick={stopDrawing} className="bg-red-500 text-white p-2 rounded m-1">Undraw</button>
                        <button onClick={undoDrawing} className="bg-gray-500 text-white p-2 rounded m-1">Undo Draw</button>
                        <button onClick={startZoomArea} className="bg-green-500 text-white p-2 rounded m-1">Zoom Area</button>
                    </div>
                </div>
            ) : (
                <div>
                    <React.Suspense fallback="Loading...">
                        <UserTable />
                    </React.Suspense>
                </div>
            )}
        </div>
        
    );
}

export default Peta;