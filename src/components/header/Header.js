import {ExcelComponent} from '@core/ExelComponent';

export class Header extends ExcelComponent {
  static className = 'excell__header'

  toHTML() {
    return `
    <input type="text" class="input" value="New table">

    <div>

      <div class="button">
        <span class="material-icons">
          exit_to_app
        </span>
      </div>

      <div class="button">
        <span class="material-icons">
          delete
        </span>
      </div>

    </div>
    `
  }
}