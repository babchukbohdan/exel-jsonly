import {ExcelComponent} from '@core/ExelComponent';
import {createTable} from './table.template';
import {tableResizeHandler} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends ExcelComponent {
  static className = 'excell__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable()
  }

  // onClick() {
  //   console.log('onClick')
  // }

  onMousedown(event) {
    if (shouldResize(event)) {
      tableResizeHandler(this.$root, event)
    }
  }
  // onMousemove() {
  //   console.log('onMousemove')
  // }

  // onMouseup() {
  //   console.log('onMouseup')
  // }
}
