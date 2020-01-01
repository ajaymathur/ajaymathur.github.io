import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const codeStyle = {
  'backgroundColor': '#dddddd',
  'padding': '2px 5px',
  'color': '#565656',
  'borderRadius': '5px',
}

const components = {
  pre: props => <pre {...props} />,
  code: props => <code {...props} style={codeStyle} />,
  inlineCode: props => <code {...props} style={codeStyle} />
}
export default ({ children }) => <MDXProvider components={components}>
  {children}
</MDXProvider>;