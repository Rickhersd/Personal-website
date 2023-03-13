'use client'

import React from 'react'
import { DraftEditorCommand, RichUtils} from 'draft-js';
import Editor, { EditorPlugin} from '@draft-js-plugins/editor';
import createHighlightPlugin from '@root/components/textEditorPlugins/highlightPlugin'
import 'draft-js/dist/Draft.css';
import '@root/styles/Editor.css';
import useEditor from '@root/hooks/useEditor';
import BlockStyleDropdownOption from './editor/BLockStyleDropdownOption';
import InlineStyleButto from './editor/InlineStyleButton';
import BlockStyleButton from './editor/blockStyles/BlockStyleButton';
import HeaderStyleDropdown from './editor/blockStyles/BlockStyleDropdown';

export default function TextEditor({
  className
}:{
  className?:string
}) {

  const {editorState, setEditorState, getBlockStyle} = useEditor() 

  const BLOCK_TYPES = [
    {label: "", blocktType: "blockquote"},
    {label: "UL", blocktType: "unordered-list-item"},
    {label: "OL", blocktType: "ordered-list-item"},
    {label: "<>", blocktType: "code-block"}
  ]

  const BLOCK_TYPE_HEADINGS = [
    {label: "H1", blockType: "header-one"},
    {label: "H2", blockType: "header-two"},
    {label: "H3", blockType: "header-three"},
    {label: "H4", blockType: "header-four"},
    {label: "H5", blockType: "header-five"},
    {label: "H6", blockType: "header-six"},
   ]

  function toggleBlockType(blockType: string){
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
 
  const highlightPlugin = createHighlightPlugin(setEditorState); 
  const plugins:EditorPlugin[] = [highlightPlugin];

  function handleKeyCommand(command:DraftEditorCommand) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  return <>
    <div className={`w-full shadow-lg rounded-xl border border-gray-300 overflow-hidden ${className}`}>
      <div className='w-full flex border-b border-b-gray-300'>
        <HeaderStyleDropdown>
          <BlockStyleDropdownOption value={''}>Current Header</BlockStyleDropdownOption>
          {BLOCK_TYPE_HEADINGS.map(type => <BlockStyleDropdownOption value={type.blockType} key={type.blockType}>{type.label}</BlockStyleDropdownOption>)}
        </HeaderStyleDropdown>
        <InlineStyleButto style='BOLD' ><b>B</b></InlineStyleButto>
        <InlineStyleButto style='UNDERLINE'>U</InlineStyleButto>
        <InlineStyleButto style='ITALIC'><em>I</em></InlineStyleButto> 
        <InlineStyleButto style='HIGHLIGHT'><span style={{ background: "yellow" }}>H</span></InlineStyleButto> 
        {BLOCK_TYPES.map(type => <BlockStyleButton blockType={type.blocktType} key={type.blocktType}>{type.label}</BlockStyleButton>)}
      </div>
      <div className='px-3 sm:p-4 bg-white min-h-[20rem]'>
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={editorState} 
          onChange={setEditorState} 
          handleKeyCommand={handleKeyCommand}
          placeholder={'Enter some Text'}
          plugins={plugins}
        />
      </div>
    </div>
  </>
 
}
