# `useAutocomplete`

React hook that gives you better search suggestions for your addresses with fewer keystrokes.

It internally uses the [HERE Geocoder Autocomplete API](<https://developer.here.com/documentation/geocoder-autocomplete/dev_guide/topics/what-is.html>)

## Usage Example

### Autocompletion

Receive suggested address results whilst typing

This example adds geocoding autocompletion to an HTML text box. Start typing in the text-box below to see the responses returned.

```tsx
import React from 'react';
import { configureAuthentication, useAutocomplete } from '@cloudpower97/use-here-api';

const Demo = () => {

  configureAuthentication({
    app_id: '...',
    app_code: '...',
  });

  const [{ data, loading, error }, fetchSuggestions] = useAutocomplete();

  return (
    <>
      <div>
        <input
          onChange={({ currentTarget: { value } }) =>
            value.length > 1 &&
            fetchSuggestions({
              query: value,
            })
          }
        />
      </div>
      {loading && !error && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {data && !loading && (
        <ul>
          {data.suggestions?.map(suggestion => (
            <li key={suggestion.locationId}>
              {suggestion.label} - {suggestion.matchLevel}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
```
