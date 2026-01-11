import './style.css'
import {Deck} from '@deck.gl/core';
import {BitmapLayer} from '@deck.gl/layers';
import {TileLayer} from '@deck.gl/geo-layers';

const INITIAL_VIEW_STATE = {
  latitude: 35.681,
  longitude: 139.767,
  zoom: 11
};

new Deck({
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new TileLayer({
      data: 'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png',
      minZoom: 0,
      maxZoom: 18,
      renderSubLayers: props => {
        const {boundingBox} = props.tile;
        return new BitmapLayer(props, {
          data: undefined,
          image: props.data,
          bounds: [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0], boundingBox[1][1]]
        });
      }
    })
  ]
});