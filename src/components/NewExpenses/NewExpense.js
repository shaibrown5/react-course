import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = () => {

  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4().toString(),
    };

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  );
};

export default NewExpense;
