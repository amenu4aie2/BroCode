// Content4.js
import React, { useContext } from "react";
import Output from "./Output";
import AppContext from "./AppContext";
import x from './testcases.json';
const Content4 = () => {
  const { editorRef, editorState } = useContext(AppContext);
  

  return <div>
    {x.map((item) => (
      <Output editorRef={editorRef} language={editorState.language} stdin={item.testcase} />
    ))
    }
    
    </div>;
};

export default Content4;
