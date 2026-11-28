import fs from 'fs'
import path from 'path'
import type { MDXComponents } from 'mdx/types'

// Local SVG diagrams carry width/height on their root; copying them onto <img> reserves
// the space up front so the page doesn't jump when the image loads.
function svgSize(src: unknown): { width?: number; height?: number } {
  if (typeof src !== 'string' || !src.startsWith('/') || !src.endsWith('.svg')) return {}
  const head = fs.readFileSync(path.join(process.cwd(), 'public', src), 'utf8').slice(0, 300)
  const m = head.match(/width="(\d+)" height="(\d+)"/)
  return m ? { width: Number(m[1]), height: Number(m[2]) } : {}
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Code blocks scroll sideways on narrow screens; tabIndex lets keyboard users scroll them too.
    pre: props => <pre tabIndex={0} {...props} />,
    // alt comes from the markdown image syntax. Diagrams shrink a lot on phones, so each one
    // links to its full-size file for pinch-zooming.
    img: props => {
      const img = <img decoding="async" {...svgSize(props.src)} {...props} />
      return typeof props.src === 'string' && props.src.startsWith('/') ? <a href={props.src}>{img}</a> : img
    },
    ...components,
  }
}
