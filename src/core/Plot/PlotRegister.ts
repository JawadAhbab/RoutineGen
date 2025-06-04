import { PlotTask } from './PlotTask'
type Frag = { task: PlotTask; portion: number }

export class PlotRegister {
  private timeline: (PlotTask | null)[] = Array.from<null>({ length: 1440 }).fill(null)

  public push(idxs: number[], task: PlotTask) {
    idxs.forEach((idx) => (this.timeline[idx] = task))
  }

  public createHTML() {
    const blank = new PlotTask('')
    const timeline = this.timeline.map((i) => (i ? i : blank))
    const frags: Frag[][] = []
    timeline.forEach((task, idx) => {
      const fragidx = Math.floor(idx / 120)
      if (!frags[fragidx]) frags[fragidx] = []
      const lastTask = frags[fragidx][frags[fragidx].length - 1]
      if (!lastTask) return (frags[fragidx] = [{ task, portion: 1 }])
      if (lastTask.task.ID === task.ID) return (lastTask.portion += 1)
      frags[fragidx].push({ task, portion: 1 })
    })
    console.log(frags)
    return frags
      .map(
        (frag) =>
          `<div class="hour">\n${frag.map((i) => i.task.getHTML(i.portion)).join('\n')}\n</div>`
      )
      .join('\n')
  }
}
