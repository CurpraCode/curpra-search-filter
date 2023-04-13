import * as React from 'react';
interface SearchFilterProps {
    data: any[];
    searchKeys: string[];
    placeholder?: string;
    render: (filteredData: any[]) => React.ReactElement;
}
export declare const SearchFilter: React.FC<SearchFilterProps>;
export {};
