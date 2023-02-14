import { SetStateAction, useState } from "react";

const useFilter = <T extends {}>(list: Array<T>):[string, {
  filter: () => T[],
  setList:(array: Array<T>) => void,
  setFilter: (filter: string) => void
}] => {
  
  const [currentFilter, setCurrentFilter] = useState('All');
  const [currentList, setCurrentList] = useState(list);

  const filter = () => {
    if (currentFilter == 'All') return currentList;
    let filteredList = new Array<T>;
    for(let i = 0; i < currentList.length; i++){
      const pair = new Map(Object.entries(currentList[i]));
      if (pair.get('type') == currentFilter){
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

  return [currentFilter, {filter, setList, setFilter}]
}

export default useFilter