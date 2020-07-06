import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 900, createdAt: 1 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 3 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 61100, createdAt: 2 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));