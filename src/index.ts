import * as React from 'react';

interface SearchFilterProps {
  data: any[];
  searchKeys: string[];
  searchValue: string;
  render: (filteredData: any[]) => React.ReactElement;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  data,
  searchKeys,
  searchValue,
  render,
}) => {
  const filteredData = data.filter((item) =>
    searchKeys.some((key) =>
      item[key].toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return render(filteredData);
};
