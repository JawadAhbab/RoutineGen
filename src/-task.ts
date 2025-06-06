import { PlotTask } from './core/Plot/PlotTask'

export const task = {
  sleep() {
    return new PlotTask('Sleep').bg('#777')
  },
  salah() {
    return new PlotTask('Salah').bg('#005f46').color('white')
  },
}
