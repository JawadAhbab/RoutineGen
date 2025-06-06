import { createHTML } from '../templates/createHTML'

export class PlotTask {
  public ID = Math.random().toString()
  private $color: string = 'transparent'
  private $title: string
  constructor(title: string = '') {
    this.$title = title
  }

  public color(color: string) {
    this.$color = color
    return this
  }

  public genHTML(portion: number) {
    this.styles = []
    this.pushStyle('flex-grow', portion)
    this.pushStyle('background-color', this.$color)
    return createHTML('section', this.$title, this.styles)
  }

  private styles: string[] = []
  private pushStyle(prop: string, value: string | number) {
    this.styles.push(`${prop}:${value};`)
  }
}
