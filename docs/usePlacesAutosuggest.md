# `usePlacesAutosuggest`

React hook that gives you better search suggestions for your addresses with fewer keystrokes.

It internally uses the [HERE Places (Search) API](<https://developer.here.com/documentation/places/dev_guide/topics/what-is.html>)

## Usage Example

### Search Suggestions

Request a list of suggestions based on a partial query string

This example returns a list of suggested search terms related to a given (partial) search term and location context.

In this case the suggestions being listed are places and businesses near the center of Berlin (52.5159°N, 13.3777°E) which have the name "Berlin" somewhere in the title.

These results can then be used to autocomplete the text for a subsequent search query.

```tsx
import React, { useState, useEffect } from 'react';
import { configureAuthentication, useAutocomplete } from '@cloudpower97/use-here-api';

const Demo = () => {

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [at, setAt] = useState<string>('52.5159,13.3777');
  const [q, setQ] = useState<string>('berlin');
  const [{ data, loading, error }, fetchPlaces] = usePlacesAutosuggest();

  useEffect(() => {
    fetchPlaces({
      at,
      q,
    });
  }, []);

  return (
    <>
      <div>
        <input
          placeholder="Location of the central point for the places search"
          onChange={({ currentTarget: { value } }) => setAt(value)}
          value={at}
        />
        <input
          placeholder="Free-form text containing the search term"
          onChange={({ currentTarget: { value } }) => setQ(value)}
          value={q}
        />
        <button
          onClick={() => {
            fetchPlaces({
              at,
              q,
            });
          }}
        >
          Fetch places
        </button>
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.results?.map(suggestion => (
            <li key={suggestion.href}>
              {suggestion.title} - {suggestion.type}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
```
