import {ExcelComponent} from '@core/ExelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'excell__table'
  toHTML() {
    return createTable()
  }
}
