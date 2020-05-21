export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch fire trigger
  // Уведомляем слушателей если они есть
  // event <string>
  // table.emit("table:select", {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach( listener => {
      listener(...args)
    })
    return true
  }

  // on listen
  // Подписываемся на уведомления
  // Добавляем нового слушателя
  // formula.subscribe("table:select", () =>{})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}
// Examle
// const emitter = new Emitter()

// const unsub = emitter.subscribe('lolita', data => console.log('sub', data))

// emitter.emit('lolita', 42)
// emitter.emit('puta', 42)

// setTimeout(() => {
//   emitter.emit('lolita', 'AFter 2 sec')
// }, 2000);

// setTimeout(() => {
//   unsub()
// }, 3000);
// setTimeout(() => {
//   emitter.emit('lolita', 'AFter 4 sec')
// }, 4000);
