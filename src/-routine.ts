import { Plot } from './core/Plot/Plot'
import { $ } from './core/var'

export function routine(plot: Plot) {
  plot.tasks.range('0900pm', '0330am', $.task.sleep())
  plot.tasks.range('0230pm', '0300pm', $.task.sleep())

  plot.tasks.range('0800am', '0815am', $.task.salah())
  plot.tasks.range('0805am', '0835am', $.task.sleep())
}
