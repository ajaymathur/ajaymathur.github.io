import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Code blocks scroll sideways on narrow screens; tabIndex lets keyboard users scroll them too.
    pre: props => <pre tabIndex={0} {...props} />,
    ...components,
  }
}
