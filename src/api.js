// src/api.js
import { db, auth } from './firebase';
import { ref, push, set } from 'firebase/database';

export const saveExpense = async (expense) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const userExpensesRef = ref(db, 'expenses/' + user.uid);
      const newExpenseRef = push(userExpensesRef);
      await set(newExpenseRef, {
        description: expense.description,
        category: expense.category,
        amount: expense.amount,
        date: expense.date
      });
      console.log('Expense saved successfully');
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  } else {
    console.log('No user is signed in');
  }
};
