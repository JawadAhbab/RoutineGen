import { PlotTask } from './core/Plot/PlotTask'

export const task = {
  sleep() {
    return new PlotTask('Sleep').color('gray')
  },
}
