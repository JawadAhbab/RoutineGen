import { PlotTask } from './PlotTask'

export class PlotRegister {
  private timeline: (PlotTask | null)[] = []

  public push(idxs: number[], task: PlotTask) {
    idxs.forEach((idx) => (this.timeline[idx] = task))
  }
}
