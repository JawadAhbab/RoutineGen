import { timeRangeIdx } from './accessories/TimeRangeIdx'
import { TimeString } from './accessories/TimeString'
import { Plot } from './Plot'
import { PlotTask } from './PlotTask'

export class PlotTasks {
  private $plot: Plot
  constructor($plot: Plot) {
    this.$plot = $plot
  }

  public range(start: TimeString, end: TimeString, task: PlotTask) {
    this.$plot.register.push(timeRangeIdx(start, end), task)
  }
}
