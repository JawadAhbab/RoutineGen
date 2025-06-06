import { readFileSync } from 'fs'
import { join } from 'path'
type Template = 'gen' | 'row' | 'section'
type Data = string | string[]

export const createHTML = (template: Template, ...data: Data[]) => {
  const path = join(process.cwd(), `src/core/templates/HTML/${template}.html`)
  const tempstr = readFileSync(path).toString()
  let html = tempstr
  data.forEach((i, idx) => (html = html.replace(`{$${idx + 1}}`, [i].flat().join(''))))
  return html
}
