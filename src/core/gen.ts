import { routine } from '../-routine'
import { Plot } from './Plot/Plot'

console.clear()
gen()
function gen() {
  const plot = new Plot()
  routine(plot)
}
