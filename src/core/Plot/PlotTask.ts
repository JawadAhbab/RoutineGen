export class PlotTask {
  private $color: string = 'transparent'
  private $title: string
  constructor(title: string = '') {
    this.$title = title
  }

  public color(color: string) {
    this.$color = color
    return this
  }

  public ID = Math.random().toString()
  public portion = 1
  public getHTML() {
    return `  <div class="section" style="flex-grow: ${this.portion}; background-color: ${this.$color}"><div>${this.$title}</div></div>`
  }
}
