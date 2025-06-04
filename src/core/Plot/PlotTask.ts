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

  public getHTML(portion: number) {
    return `<div class="section" style="flex-grow: ${portion}; background-color: ${this.$color}"><div>${this.$title}</div></div>`
  }
}
