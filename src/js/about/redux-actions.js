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
  if (action.type === 'INCREMENT') {
    // Прибавляем 5
    return state + action.amount;
    // Вычитаем 3
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
    // Ничего не изменяем
  } else {
    return state;
  }
}

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

/**
 * Передаём объекты вместо строк
 */
state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);
