let state = 0;

/**
 * reducer - чистая функция в Reduxб которая НЕ ОБНОВЛЯЕТ исходное состояние, а возвращает НОВОЕ.
 * Ничего вне пределов функции не меняется. НИКОГДА НЕЛЬЗЯ (!) изменять исходное состояние в редьюсере!
 * Отвечает за модификации состояний приложения. Имеет вид: (previousState, action) => newState
 *
 * @param {*} state - состояние и значение параметра
 * @param {*} action - действия, структура, передающая данные из приложения в хранилище. Должно иметь строковое поле type
 */

function updateState(state, action) {
  // увеличить (для простого числа)
  if (action === 'INCREMENT') {
    return state + 1;
    // уменьшить
  } else if (action === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);
