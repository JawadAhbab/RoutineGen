import { PlotTask } from './core/Plot/PlotTask'

export const task = {
  sleep() {
    return new PlotTask('Sleep').color('#777')
  },
  salah() {
    return new PlotTask('Salah').color('#005f46')
  },
}
