'use client'

import React, { forwardRef } from 'react'
import AsyncSelect from 'react-select/async';
import FetchDoc from '@root/hooks/FetchDoc';
import Tag from '@root/models/tag';
import { GroupBase, LoadingIndicatorProps, SelectInstance } from 'react-select';

interface Ioptions{
  value: string,
  label: string
}

const TagsSelecter = forwardRef(({}:{},ref:React.ForwardedRef<SelectInstance<Ioptions, false, GroupBase<Ioptions>> | null>) => {

  const filterTags = (inputValue: string, tags:Tag[]) => {
    const options = tagsToOptions(tags)
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const tagsToOptions = (tags:Tag[]):Ioptions[] => {
    const options:Ioptions[] = [];
    tags.forEach(tag => {
      const label = tag.tag.replace('#', '');
      options.push({value:tag.tag, label:label})
    });
    console.log(options)
    return options;
  }

  const promiseOptions = async (inputValue: string) => {
    const res = await FetchDoc('tags', Tag);
    return filterTags(inputValue, res);
  }

  const LoadingIndicator = (props: LoadingIndicatorProps<Ioptions>) => {
    return <>
        <div>LL</div>
      </>;
  };

  return (
    <AsyncSelect
      isMulti
      className='z-10 w-full'
      cacheOptions
      noOptionsMessage={inputValue => <div>{inputValue.inputValue + " no diponible"}</div>}
      loadingMessage={ _ => <div>cargando...</div>}
      defaultOptions
      components={{LoadingIndicator}}
      loadOptions={promiseOptions}
      ref={ref}
  />
  );
})
 
export default TagsSelecter