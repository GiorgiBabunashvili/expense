import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
