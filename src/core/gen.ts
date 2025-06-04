import { join } from 'path'
import { routine } from '../-routine'
import { Plot } from './Plot/Plot'
import { readFileSync, writeFileSync } from 'fs'
const savepath = join(process.cwd(), 'src/routine.html')
const temppath = join(process.cwd(), 'src/core/HTML/template.html')
const template = readFileSync(temppath).toString()

console.clear()
gen()
function gen() {
  const plot = new Plot()
  routine(plot)
  const html = template.replace('{$}', plot.register.createHTML())
  writeFileSync(savepath, html)
}
