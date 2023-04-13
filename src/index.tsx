import * as React from 'react';
import { useState } from 'react';

interface SearchFilterProps {
  data: any[];
  searchKeys: string[];
  placeholder?: string;
  render: (filteredData: any[]) => React.ReactElement;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  data,
  searchKeys,
  placeholder = 'Search...',
  render,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data.filter((item) =>
    searchKeys.some((key) =>
      item[key].toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {render(filteredData)}
    </>
  );
};
