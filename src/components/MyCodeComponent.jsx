import { CopyBlock } from "react-code-blocks";
import React from 'react'

function MyCodeComponent(props) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      theme={props.theme}
    />
  )
}

export default MyCodeComponent