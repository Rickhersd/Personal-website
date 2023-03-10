import { EditorCommand, EditorPlugin, PluginFunctions } from "@draft-js-plugins/editor";
import { DraftHandleValue, EditorState, RichUtils } from "draft-js";

export default (setEditorState:React.Dispatch<React.SetStateAction<EditorState>>):EditorPlugin => {
  return {
    customStyleMap: {
      HIGHLIGHT: {
        background: "#fffe0d"
      }
    },
    keyBindingFn: (e: React.KeyboardEvent) => {
      if (e.metaKey && e.key === "h") {
        return "highlight";
      }
    },
    handleKeyCommand: (
      command:string, 
      editorState:EditorState):DraftHandleValue => {
      if (command === "highlight") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
        return 'handled';
      }
      return 'not-handled'
    }
  };
};