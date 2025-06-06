import { writeFileSync } from 'fs'
import { join } from 'path'
import { routine } from '../-routine'
import { Plot } from './Plot/Plot'
import { createHTML } from './templates/createHTML'
const savepath = join(process.cwd(), 'src/routine.html')

console.clear()
const plot = new Plot()
routine(plot)
writeFileSync(savepath, createHTML('gen', plot.register.createHTML()))
