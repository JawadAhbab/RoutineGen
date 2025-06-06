import { createHTML } from '../templates/createHTML'
import { PlotTask } from './PlotTask'
type Frag = { task: PlotTask; portion: number }

export class PlotRegister {
  private timeline: (PlotTask | null)[] = Array.from<null>({ length: 1440 }).fill(null)

  public push(idxs: number[], task: PlotTask) {
    idxs.forEach((idx) => (this.timeline[idx] = task))
  }

  public createHTML() {
    const frags: Frag[][] = []
    this.setFrags(frags)
    return frags.map((frag) => {
      const taskHTML = frag.map((i) => i.task.getHTML(i.portion))
      return createHTML('row', taskHTML)
    })
  }

  private setFrags(frags: Frag[][]) {
    const blank = new PlotTask('')
    const timeline = this.timeline.map((i) => (i ? i : blank))
    timeline.forEach((task, idx) => {
      const fragidx = Math.floor(idx / 60)
      if (!frags[fragidx]) frags[fragidx] = []
      const lastTask = frags[fragidx][frags[fragidx].length - 1]
      if (!lastTask) return (frags[fragidx] = [{ task, portion: 1 }])
      if (lastTask.task.ID === task.ID) return (lastTask.portion += 1)
      frags[fragidx].push({ task, portion: 1 })
    })
  }
}
