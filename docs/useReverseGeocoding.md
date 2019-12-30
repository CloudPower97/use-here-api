# `useForwardGeocoding`

React hook that lets you submit a geocoordinate and an optional radius to request the corresponding address.

It internally uses the [HERE Geocoder API](<https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-reverse-geocode.html>)

## Usage Example

### Reverse Geocode an Address from a Location

Request address details for a given latitude and longitude

---

This example retrieves the first address around a specified location in Chicago (41.8839,-87.6389) using a 250 meter radius to retrieve the address. The expected address is: 425 W Randolph St, Chicago, IL 60606, United States.

Reverse geocoding requests can be made using the reversegeocode endpoint, specifying the parameter mode=retrieveAddresses, and adding the prox parameter to the request URL. The number of results returned can be restricted using the maxresults parameter.

```tsx
import React, { useState, useEffect } from 'react';
import { configureAuthentication, useWeather } from '@cloudpower97/use-here-api';

const Demo: React.FC<any> = () => {
  const [prox, setProx] = useState<string>('41.8842,-87.6388,250');
  const [maxresults, setMaxresults] = useState<number>(1);

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [{ data, loading, error }, fetchLocation] = useReverseGeocoding();

  useEffect(() => {
    fetchLocation({
      prox,
      mode: 'retrieveAddresses',
      maxresults,
      jsonattributes: 1,
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'space-around',
        }}
      >
        <input
          placeholder="The house number or house name"
          onChange={({ currentTarget: { value } }) => setProx(value)}
          value={prox}
        />
        <input
          placeholder="The street name can include suite, apt and floor information"
          onChange={({ currentTarget: { value } }) => setMaxresults(+value)}
          value={maxresults}
        />

        <button
          onClick={() => {
            fetchLocation({
              prox,
              mode: 'retrieveAddresses',
              maxresults,
              jsonattributes: 1,
            });
          }}
        >
          Retrieve address details
        </button>
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.response.view[0]?.result.map(({ location }) => {
            const { address } = location;
            return <li key={location.locationId}>{address.label}</li>;
          })}
        </ul>
      )}
    </>
  );
};
```
