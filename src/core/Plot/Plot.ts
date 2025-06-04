import { PlotRegister } from './PlotRegister'
import { PlotTasks } from './PlotTasks'

export class Plot {
  public register = new PlotRegister()
  public tasks = new PlotTasks(this)
}
