# `useWeather`

React hook that gives insights into real-time weather forecasts, alerts, and astronomical info for any location.

It internally uses the [HERE Destination Weather API](<https://developer.here.com/documentation/weather/dev_guide/topics/overview.html>)

## Usage Example

```tsx
import React, { useState } from 'react';
import { configureAuthentication, useWeather } from '@cloudpower97/use-here-api';

const Demo = () => {
  const [name, setName] = useState<string>('');

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [{ data, loading, error, response }, fetchWeater] = useWeather();

  return (
    <>
      <input
        placeholder="Enter city name"
        onChange={({ currentTarget: { value } }) => setName(value)}
      />
      <button
        onClick={() => {
          fetchWeater({
            product: 'observation',
            name,
          });
        }}
      >
        Fetch weather conditions
      </button>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data?.observations?.location.map(location => (
            <li key={location.id}>
              {location.city}, {location.country} -{' '}
              {location.observation[0].description}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
```
