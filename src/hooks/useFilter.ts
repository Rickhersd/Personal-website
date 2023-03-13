import { useState } from "react";

const useFilter = <T extends {}>(list: Array<T>):[string, {
  filterByField: (field:string) => T[],
  setList:(array: Array<T>) => void,
  setFilter: (filter: string) => void
}] => {
  
  const [currentFilter, setCurrentFilter] = useState('All');
  const [currentList, setCurrentList] = useState(list);

  const filterByField = (field:string) => {
    if (currentFilter == 'All') return currentList;
    let filteredList = new Array<T>;
    for(let i = 0; i < currentList.length; i++){
      const pair = new Map(Object.entries(currentList[i]));
      if (pair.get(field) == currentFilter){
        filteredList.push(currentList[i])
      }
    }
    return filteredList;
  }

  const setList = (array: Array<T>) => {
    setCurrentList(array)
  }

  const setFilter = (filter: string) => {
    setCurrentFilter(filter)
  }

  return [currentFilter, {filterByField, setList, setFilter}]
}

export default useFilter