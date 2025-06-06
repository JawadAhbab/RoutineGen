import { readFileSync } from 'fs'
import { join } from 'path'
type Template = 'gen' | 'row' | 'section'

export const template = (template: Template, data: string) => {
  const path = join(process.cwd(), `src/core/templates/HTML/${template}.html`)
  const tempstr = readFileSync(path).toString()
  return tempstr.replace('{$}', data)
}
