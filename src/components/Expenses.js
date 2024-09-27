import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ item }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={item[0].title}
        date={item[0].date}
        amount={item[0].amount}
      />
      <ExpenseItem
        title={item[1].title}
        date={item[1].date}
        amount={item[1].amount}
      />
      <ExpenseItem
        title={item[2].title}
        date={item[2].date}
        amount={item[2].amount}
      />
      <ExpenseItem
        title={item[3].title}
        date={item[3].date}
        amount={item[3].amount}
      />
    </Card>
  );
};

export default Expenses;
