import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Room() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [roundname, setroundname] = useState("");
//   mention css for div element here
    const whole={
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        flexWrap:'wrap',
        // alignItems: 'center',
        // gap: '40px',
        // paddingTop: '150px',
        // color: 'black',
        // fontSize: '45px',
        // fontFamily: 'monospace',
        // fontWeight: 'bolder'
    };
    const header={
        display: 'flex',
        padding: '25px 70px',
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignItems: 'center',
        gap: '40px',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: 'black',
        fontSize: '45px',
        fontFamily: 'monospace',
        fontWeight: 'bolder'

    };
    
    const timer={

    };
    
    const language={

    };
    const participants={

    };
    const testcases={

    };
    const teamate={

    };
    const actions={

    };
    const sidepanel={

    };
  return (
    <div style={whole}>


    <div style={header}>CLASH OF CODE- {roundname}</div>
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        />
        </div>
  );
}