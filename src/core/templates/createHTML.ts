import { readFileSync } from 'fs'
import { join } from 'path'
type Template = 'gen' | 'row' | 'section'

export const createHTML = (template: Template, data: string | string[]) => {
  const path = join(process.cwd(), `src/core/templates/HTML/${template}.html`)
  const tempstr = readFileSync(path).toString()
  return tempstr.replace('{$}', [data].flat().join(''))
}
