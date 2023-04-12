"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFilter = void 0;
const SearchFilter = ({ data, searchKeys, searchValue, render, }) => {
    const filteredData = data.filter((item) => searchKeys.some((key) => item[key].toString().toLowerCase().includes(searchValue.toLowerCase())));
    return render(filteredData);
};
exports.SearchFilter = SearchFilter;
