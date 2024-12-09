import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {Icon, type LatLngExpression} from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_POSITIONS: LatLngExpression = [23.128700132889083, -82.27046820851496]

export default function MapView() {
    return (
        <MapContainer
            center={MAP_POSITIONS}
            zoom={15}
            attributionControl={false}
            zoomControl={false}
            className="min-w-[272px] min-h-[272px] md:max-w-[300px] md:max-h-[300px] lg:min-w-[420px] rounded-xl z-0"
            style={{height: '100%', width: '100%'}}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker
                position={MAP_POSITIONS}
                title={"Pizzeton D'Guti"}
                alt={'Pizzeton Ubication'}
                icon={
                    new Icon({
                        iconUrl: "/svg/location.svg",
                        iconSize: [38, 38],
                    })
                }
            />
        </MapContainer>
    )
};

