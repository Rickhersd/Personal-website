'use client'

import { ContentBlock, ContentState, convertFromRaw, EditorState, RichUtils } from 'draft-js';
import React, {
  useState, 
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'

interface indexI {
  editorState: EditorState;
  contextBlockType: string;
  setEditorState: Dispatch<SetStateAction<EditorState>>
  handleGetContent: () => ContentState,
  setInlineStyle: (style:string) => void,
  setBlockType: (blockType:string) => void,
  getBlockStyle: (block:ContentBlock) => string
 
}

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    //@ts-expect-error
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
    },
  ],
});

//context with
const EditorContext = createContext<indexI | undefined>(undefined)
const defaultContext: indexI = {
  editorState: new EditorState(),
  contextBlockType: '', 
  setEditorState: _ => {},
  handleGetContent: () => new ContentState,
  setInlineStyle: _ => {},
  setBlockType: _ => {},
  getBlockStyle: _ => ''
}

//context provider
const EditorProvider = ({
  children
}:{
  children:ReactNode
}):JSX.Element => {
  if (checkPrevContextInstance()) return <>{children}</>

  function getBlockStyle(block:ContentBlock):string {
    switch (block.getType()) {
     case "blockquote":
      return "Editor-blockquote";
    case "header-one":
      return "Editor-header-one";
    case "header-two":
      return "Editor-header-two";
    case "header-three":
      return "Editor-header-three"
     default:
      return '';
    }
   }

  function checkPrevContextInstance():boolean{
    return useContext(EditorContext)? true: false;
  }

  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(emptyContentState),
  );

  const selection = editorState.getSelection();
  const contextBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  
  const handleGetContent = useCallback(()=>{
    return editorState.getCurrentContent()
  },[editorState])

  const setInlineStyle = (style:string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  const setBlockType = (blockType:string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  const providervalue = useMemo(() => ({
    editorState,
    contextBlockType,
    setEditorState,
    handleGetContent,
    setInlineStyle,
    setBlockType,
    getBlockStyle
  }), [editorState, contextBlockType, setEditorState, handleGetContent, setInlineStyle]);

  return (
    <EditorContext.Provider value={providervalue}>
      {children}
    </EditorContext.Provider>
  )
}

//hook
const useEditor = () => ({...useContext(EditorContext) ?? defaultContext , EditorProvider}) 
export default useEditor