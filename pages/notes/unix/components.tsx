import React from 'react';

const codeStyle = {
  'background-color': '#dddddd',
  'padding': '2px 5px',
  'color': '#565656',
  'border-radius': '5px',
}

export default {
  pre: props => <pre {...props} />,
  code: props => <code {...props} style={codeStyle} />,
  inlineCode: props => <code {...props} style={codeStyle} />
}
