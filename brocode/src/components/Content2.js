// Content2.js
import React, { useContext, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import AppContext from "./AppContext";
// import { set } from "firebase/database";

const Content2 = () => {
  const { editorState, setEditorState, editorRef } = useContext(AppContext);
  const editor = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setEditorState((prev) => ({ ...prev, language }));
    setEditorState((prev) => ({ ...prev, code: CODE_SNIPPETS[language] }));
  };

  return (
    <div style={{ height: "100%", width: "100%", theme: "vs-dark" }}>
      <LanguageSelector language={editorState.language} onSelect={onSelect} />
      <Editor
        ref={editor}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        theme="vs-dark"
        language={editorState.language}
        defaultValue={CODE_SNIPPETS[editorState.language]}
        onMount={onMount}
        value={editorState.code}
        onChange={(value) =>
          setEditorState((prev) => ({ ...prev, code: value }))
        }
      />
    </div>
  );
};

export default Content2;
