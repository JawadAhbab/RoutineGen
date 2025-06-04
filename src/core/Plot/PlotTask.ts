export class PlotTask {
  private $color: string = 'gray'
  private $title: string
  constructor(title: string) {
    this.$title = title
  }

  public color(color: string) {
    this.$color = color
    return this
  }
}
