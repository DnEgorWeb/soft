import React, { Component } from 'react';
// const mapState = { center: [55.77597281001395, 37.55341700066372], zoom: 16 };
import {
	MapContainer
} from './styled-components';

import { MAP_CENTER } from '../../constants';

class Map extends Component {
	constructor(props) {
		super(props);

		window.ymaps.ready(this.initMap);
	}

	state = {
		map: null,
		center: MAP_CENTER,
		zoom: 17,
	}

	initMap = () => {
		const map = new window.ymaps.Map(
			'map',
			{
				center: this.state.center,
				zoom: this.state.zoom,
				controls: []
			}
		);

		const Placemark = new window.ymaps.Placemark(map.getCenter(), {
			      hintContent   : '',
			      balloonContent: ''
		      }, {
			iconLayout     : 'default#image',
			iconImageHref  : 'images/contacts/icon/Path_546.png',
			iconImageSize  : [ 30, 42 ],
			iconImageOffset: [ -5, -38 ]
		});

		map.geoObjects.add(Placemark);

		this.setState({
			placemark : Placemark,
			map
		});
	}

	render() {
		return (
			<MapContainer id='map' />
		)
	}
}

export default Map;