import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    KeyValueDiffer,
    KeyValueDiffers,
    OnInit,
    ViewChild,
} from '@angular/core';
import { COUNTRY_COORDINATES } from '../../_constants/content.constants';
import { IOrganisation } from '../../_interfaces/common-viewmodel.interfaces';
import { ICountryEnum } from '../../_interfaces/geography.enums';

@Component({
    selector: 'gee-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef | undefined;

    map: google.maps.Map | undefined;
    lat = COUNTRY_COORDINATES[ICountryEnum.AU].lat;
    lng = COUNTRY_COORDINATES[ICountryEnum.AU].lng;

    marker: google.maps.Marker | undefined;

    differ: KeyValueDiffer<string, any>;
    constructor(private differs: KeyValueDiffers) {
        this.differ = this.differs.find({}).create();
    }

    mapStyles: any | undefined;

    @Input()
    country: ICountryEnum | undefined;

    @Input()
    countryCoordinates: any | undefined;

    @Input()
    items: IOrganisation[] | undefined;

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.mapStyles = [
            {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#444444',
                    },
                ],
            },
            {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                    {
                        color: '#f2f2f2',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'all',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'all',
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: 45,
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'all',
                stylers: [
                    {
                        visibility: 'simplified',
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'all',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'all',
                stylers: [
                    {
                        color: '#46bcec',
                    },
                    {
                        visibility: 'on',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#2196f3',
                    },
                ],
            },
        ];
        this.mapInitializer(this.lat, this.lng);
    }

    mapInitializer(lat: any, lng: any) {
        if (google) {
            const coordinates = new google.maps.LatLng(lat, lng);

            const mapOptions: google.maps.MapOptions = {
                center: coordinates,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: this.mapStyles,
            };

            this.map = new google.maps.Map(
                this.gmap?.nativeElement,
                mapOptions
            );

            // this.marker = new google.maps.Marker({
            //     position: coordinates,
            //     map: this.map,
            // });
            // this.marker.setMap(this.map);

            const markers = [];

            if (this.items && this.items.length) {
                for (const [i, item] of this.items.entries()) {
                    const markerCenter = new google.maps.LatLng(
                        item.lat,
                        item.lon
                    );

                    let verified = '';
                    let thumbnail = '';

                    if (item.thumbnail) {
                        thumbnail = item.thumbnail;
                    }

                    if (item.verified) {
                        verified =
                            '<div class="marker-verified"><i class="fa fa-check"></i></div>';
                    }

                    const markerContent =
                        '<div id="marker-' +
                        item.id +
                        '" data-id="' +
                        item.id +
                        '" class="flip-container">' +
                        verified +
                        '<div class="flipper">' +
                        '<div class="front">' +
                        '<img src="' +
                        thumbnail +
                        '">' +
                        '</div>' +
                        '<div class="back">' +
                        '<i class="fa fa-eye"></i>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    // var marker = new RichMarker(google, {
                    //     id: item.id,
                    //     data: item,
                    //     flat: true,
                    //     position: markerCenter,
                    //     map: this.map,
                    //     shadow: 0,
                    //     content: markerContent,
                    //     title: 'Marker Title',
                    // });

                    // Create an array of alphabetical characters used to label the markers.
                    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

                    // Add some markers to the map.
                    // Note: The code uses the JavaScript Array.prototype.map() method to
                    // create an array of markers based on a given "locations" array.
                    // The map() method here has nothing to do with the Google Maps API.
                    const marker = new google.maps.Marker({
                        position: { lat: item.lat, lng: item.lon },
                        label: labels[i % labels.length],
                    });

                    markers.push(marker);
                }

                //  Add a marker clusterer to manage the markers.
                // @ts-ignore MarkerClusterer defined via script
                // new MarkerClusterer(map, markers, {
                //     imagePath:
                //         'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                // });

                // @ts-ignore MarkerClusterer defined via script
                let markerCluster = new MarkerClusterer(this.map, markers, {
                    imagePath:
                        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                    gridSize: 60,
                    maxZoom: 16,
                });
            }
        }
    }

    ngDoCheck() {
        const change = this.differ.diff(this);
        if (change) {
            change.forEachChangedItem((item) => {
                if (item.key === 'country') {
                    console.log(item);

                    const lat = this.countryCoordinates[item.currentValue].lat;
                    const lng = this.countryCoordinates[item.currentValue].lng;

                    this.mapInitializer(lat, lng);
                }
            });
        }
    }
}
