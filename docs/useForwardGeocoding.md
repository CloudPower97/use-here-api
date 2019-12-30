# `useForwardGeocoding`

React hook that  lets you submit an address to request the corresponding geocoordinates.

Addresses may use structured input or free-form search strings with complete or partial address information.

The more detailed the address you submit, the higher the potential match accuracy.

It internally uses the [HERE Geocoder API](<https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-geocode.html>)

## Usage Example

### Geocode using free-form input

Request the latitude, longitude and details of an address based on free-form text input

---

This example retrieves the latitude, longitude and complete address details of 200 S Mathilda Ave, Sunnyvale, CA based on a free-form text input.

```tsx
import React, { useState, useEffect } from 'react';
import { configureAuthentication, useForwardGeocoding } from '@cloudpower97/use-here-api';

const Demo: React.FC<any> = () => {
  const [searchtext, setSearchtext] = React.useState<string>(
    '200 S Mathilda Ave, Sunnyvale, CA'
  );

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [{ data, loading, error }, fetchLocation] = useForwardGeocoding();

  React.useEffect(() => {
    fetchLocation({
      searchtext,
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
          placeholder="Enter an address"
          onChange={({ currentTarget: { value } }) => setSearchtext(value)}
          value={searchtext}
          style={{
            flexBasis: '70vw',
          }}
        />
        <button
          onClick={() => {
            fetchLocation({
              searchtext,
              jsonattributes: 1,
            });
          }}
        >
          Request corresponding geocoordinates
        </button>
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.response.view[0]?.result.map(({ location }) => {
            const { address, navigationPosition } = location;
            return (
              <li key={location.locationId}>
                {address.label} - {navigationPosition[0].latitude},
                {navigationPosition[0].longitude}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
```

### Geocode an Address within a Bounding Box

Request the latitude, longitude and details of an address restricting results to a specific area

---

This example retrieves the latitude, longitude and complete address details of 1 Main St, Cambridge, MA based on a free-form text input of "1 main" and restricting the look-up to a known viewport.

The mapview parameter restricts the results returned to lie within a specified bounding box, in this case a region in the area of **Boston**.

```tsx
import React, { useState, useEffect } from 'react';
import { configureAuthentication, useForwardGeocoding } from '@cloudpower97/use-here-api';

const Demo: React.FC<any> = () => {
  const [{ data, loading, error }, fetchLocation] = useForwardGeocoding();
  const [searchtext, setSearchtext] = React.useState<string>('1 main');
  const [mapview, setMapview] = React.useState<string>(
    '42.3902,-71.1293;42.3312,-71.0228'
  );

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });


  useEffect(() => {
    fetchLocation({
      searchtext,
      mapview,
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
          placeholder="Enter an address"
          onChange={({ currentTarget: { value } }) => setSearchtext(value)}
          value={searchtext}
          style={{
            flexBasis: '35vw',
          }}
        />
        <input
          placeholder="Restricts results to be found within this bounding box"
          onChange={({ currentTarget: { value } }) => setMapview(value)}
          value={mapview}
          style={{
            flexBasis: '35vw',
          }}
        />
        <button
          onClick={() => {
            fetchLocation({
              searchtext,
              mapview,
              jsonattributes: 1,
            });
          }}
        >
          Request corresponding geocoordinates
        </button>
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.response.view[0]?.result.map(({ location }) => {
            const { address, navigationPosition } = location;
            return (
              <li key={location.locationId}>
                {address.label} - {navigationPosition[0].latitude},
                {navigationPosition[0].longitude}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
```

### Geocode using partial address information

Request the latitude, longitude and details of an address based on partial address information

This example retrieves the latitude, longitude and complete address details of 425 W Randolph St, Chicago, IL based on partial address information.

This example shows a structured (qualified) geocoding request using the geocode endpoint.

In this structured request the data is provided in country, city, street and housenumber parameters in the request URL.

Note that the street name misses the directional ("W") and also the street type.

The omitted directional makes the query ambiguous and the response contains therefore two results: One address on West Randolph St and one on East Randolph St.

```tsx
import React, { useState, useEffect } from 'react';
import { configureAuthentication, useForwardGeocoding } from '@cloudpower97/use-here-api';

const Demo: React.FC<any> = () => {
  const [housenumber, setHousenumber] = useState<string>('425');
  const [street, setStreet] = useState<string>('randolph');
  const [city, setCity] = useState<string>('chicago');
  const [country, setCountry] = useState<string>('usa');

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [{ data, loading, error }, fetchLocation] = useForwardGeocoding();

  useEffect(() => {
    fetchLocation({
      housenumber,
      street,
      city,
      country,
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
          onChange={({ currentTarget: { value } }) => setHousenumber(value)}
          value={housenumber}
        />
        <input
          placeholder="The street name can include suite, apt and floor information"
          onChange={({ currentTarget: { value } }) => setStreet(value)}
          value={street}
        />

        <input
          placeholder="City name"
          onChange={({ currentTarget: { value } }) => setCity(value)}
          value={city}
        />
        <input
          placeholder="Specify the country or list of countries using the country code (3 bytes, ISO 3166-1-alpha-3) or the country name"
          onChange={({ currentTarget: { value } }) => setCountry(value)}
          value={country}
        />
        <button
          onClick={() => {
            fetchLocation({
               street,
               housenumber,
               city,
               country,
              jsonattributes: 1,
            });
          }}
        >
          Request corresponding geocoordinates
        </button>
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.response.view[0]?.result.map(({ location }) => {
            const { address, navigationPosition } = location;
            return (
              <li key={location.locationId}>
                {address.label} - {navigationPosition[0].latitude},
                {navigationPosition[0].longitude}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
```
