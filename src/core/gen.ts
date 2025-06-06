import { writeFileSync } from 'fs'
import { join } from 'path'
import { routine } from '../-routine'
import { Plot } from './Plot/Plot'
import { template } from './templates/template'
const savepath = join(process.cwd(), 'src/routine.html')

console.clear()
gen()
function gen() {
  const plot = new Plot()
  routine(plot)
  writeFileSync(savepath, template('gen', plot.register.createHTML()))
}
