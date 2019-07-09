function updateState(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

/**
 * Для того чтобы убрать приложение из открытого доступа есть несколько способов.
 * Данный способ реализован с помощью классов.
 * Хранилище не знает что в нем будет храниться и также не знает как оно будет меняться. Тем самым является очень гибким.
 * Смысл хранилища не в том, чтобы полностью спрятать состояние, а ограничить к нему доступ через определенный интерфейс ( в данном случае метод update() )
 */
class Store {
  constructor(updateState, state) {
    // Названия личных свойств обычно начинается с нижнего подчеркивания. Даёт понять, что это свойство лучше не трогать
    // Это соглашение для JS было не замечено при выполнении задания на ООП
    this._updateState = updateState;
    // Пользователь рашает что будет представлять собой состояние (объект, строка, массив и т.д.). Просто помещаем его в хранилище
    this._state = state;
  }

  /**
   * Геттер state() существует для того чтобы пользователь имел доступ к состоянию
   */
  get state() {
    return this._state;
  }

  /**
   * Пользователи хранилища не должны вызывать метод updateState.
   * Поэтому метод определяется в классе, с помощью которого они смогут взаимодействовать с состояниями.
   * Метод update() не возвращает состояния. Вызывая его мы сообщаем хранилищу, что произошло какое-то действие и СОСТОЯНИЕ НЕОБХОДИМО ИЗМЕНИТЬ. Просто уведомление о событии.
   */
  update(action) {
    // Текущему состоянию в качестве значения вызывается метод с агрументами текущего состояния и объект действия
    this._state = this._updateState(this._state, action);
  }
}

/**
 * Переменная для обращения к хранилищу
 */
const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);
