# Curpra Search Filter

A simple search filter component for React TypeScript projects.

## Installation

Install the library with either yarn or npm
```bash
npm install curpra-search-filter

yarn add curpra-search-filter
```

## Usage

First, import `SearchFilter` from the component:

```typescript
import {SearchFilter} from 'curpra-search-filter';

```
Next, use the SearchFilter component in your application:

```typescript
import React from 'react';
import { SearchFilter } from 'curpra-search-filter';

interface DataItem {
  id: number;
  name: string;
  age: number;
}

const data: DataItem[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Carol', age: 28 },
];

const App: React.FC = () => {
  return (
    <div>
      <SearchFilter
        data={data}
        searchKeys={['name', 'age']}
        placeholder="Search by name or age"
        render={(filteredData) => (
          <ul>
            {filteredData.map((item: DataItem) => (
              <li key={item.id}>{`${item.name} (${item.age})`}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default App;
```
## Props

####    PropsType

| Prop         | Type                          | Default          | Description                                                                 |
| ------------ | ----------------------------- | ---------------- | --------------------------------------------------------------------------- |
| `data`       | `any[]`                       |                  | The data array to be filtered.                                              |
| `searchKeys` | `string[]`                    |                  | The keys to be used for filtering data.                                     |
| `placeholder`| `string` (optional)           | `'Search...'`    | The placeholder text for the search input.                                  |
| `render`     | `(filteredData: any[]) => React.ReactElement` | | A function that receives the filtered data and returns the JSX to render. |



## Authors

- [@curpracode](https://www.github.com/curpracode)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This README provides a brief description of the library, installation instructions, usage example, and a table of props. You can modify the contents according to your specific package requirements. Remember to commit the README file to your repository and push the changes.
