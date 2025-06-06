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
    return `<div class="section" style="flex-grow: ${portion}; background-color: ${this.$color}"><div>${this.$title}</div></div>`
  }

  private styles: string[] = []
  private pushStyle(prop: string, value: string | number) {
    this.styles.push(`${prop}: ${value};`)
  }
}
