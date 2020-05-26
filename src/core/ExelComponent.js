import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // Настраивает компонент до init
  prepare() {}
  // Return layout component
  toHTML() {
    return ''
  }
  // Сюда приходят только изменения по тем полям на которые мы подписались
  storeChanged() {

  }
  // Инициализируем компонент
  // добавляем ДОМСлушателей
  init() {
    this.initDOMListeners()
  }
  // Уведомляем слушателя про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  // For redux
  $dispatch(action) {
    this.store.dispatch(action)
  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Удаляем компонент
  // Чистим слушатели
  destroy() {
    this.unsubscribers.forEach(fn => {
      fn()
    });
    this.removeDOMListeners()
  }
}
