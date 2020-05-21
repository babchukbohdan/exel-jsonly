import {ExcelComponent} from '@core/ExelComponent';

export class Formula extends ExcelComponent {
  static className = 'excell__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
      `
  }

  onInput(event) {
    console.log(this.$root)
    console.log('onInput Formula', event.target.textContent.trim())
  }

  onClick(event) {
    console.log(event)
  }
}
