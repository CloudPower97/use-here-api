import axios from 'axios';

export { default as useForwardGeocoding } from './geocoding/useForwardGeocoding';
export { default as useReverseGeocoding } from './geocoding/useReverseGeocoding';

axios.defaults.params = {
  jsonattributes: 1,
};
