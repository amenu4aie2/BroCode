// AppContext.js
import React, { createContext, useState, useRef } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [editorState, setEditorState] = useState({
    code: `function add(a, b) {\n  return a + b;\n}`,
    language: "javascript",
  });

  const editorRef = useRef();

  return (
    <AppContext.Provider value={{ editorState, setEditorState, editorRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
