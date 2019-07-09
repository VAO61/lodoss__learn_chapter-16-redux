/**
 * Состояние и функции, которые его изменяют - главные составляющие хранилища.
 * Проблема: примитивные данные передаются копированием значения, а объекты - копированием ссылки (т.е. будет изменяться исходное значение).
 * Для того чтобы состоянием являлось не число, а что-то более сложное (объект/массив) ...
 * Для решения проблем управления состоянием в js часто прибегают к приемам функционального программирования. 2 идеи, применяемые в Redux:
 * Чистые функции (pure functions) - функции, возвращающие значения, зависящие ТОЛЬКО от получаемых аргументов; не должны производить побочных эффектов (изменять состояние приложения)
 * Неизменность данных (immutability). Суть: нужно создавать копии объектов/массивов:
 * f name (item, array) {
 * ...return arrat.concat(item) / return [...array, item];
 * ...
 * f name (state, value) {
 * ...return Object.assign({}, state, {coount: state.count + value}) / return {...state, value} // spread для литералов объекта {"key": "value"} в ECMAScript 2018
 */

/**
 * Функция не изменяет состояние, а возвращает новое.
 * В случае если состоянием является число, то даже если изменив значение параметра state мы не изменим состояние приложения, т.к. в параметре будет содержаться копия числа.
 * Но ситуация в корне изменится если состоянием будет объект.
 */
// function updateState(state, action) {
//   if (action.type === 'INCREMENT') {
//     return state + action.amount;
//   } else if (action.type === 'DECREMENT') {
//     return state - action.amount;
//   } else {
//     return state;
//   }
// }

function updateState(state, action) {
  if (action.type === 'INCREMENT') {
    // Из функции теперь возвращаем объект
    return { count: state.count + action.amount };
  } else if (action.type === 'DECREMENT') {
    return { count: state.count - action.amount };
  } else {
    return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () =>
      (this._callbacks = this._callbacks.filter(cb => cb !== callback));
  }
}

/**
 * Объявляем новую переменную initialState
 */
const initialState = { count: 0 };

/**
 * Вместо числа указываем постоянную initialState
 */
const store = new Store(updateState, initialState);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

const unsubscribe = store.subscribe(() =>
  console.log('State changed #1:', store.state)
);

store.subscribe(() => console.log('State changed #2:', store.state));

store.update(incrementAction);

unsubscribe();

store.update(decrementAction);

store.update({});
