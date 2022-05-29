import React , {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";


function ExpenseItem(props) {
 

  const [title,setTitle]= useState(props.title);
  console.log("Expense item evaluated");

  const ClickHandler=() =>{
   setTitle('Updated');
   console.log(title);
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={ClickHandler}>{title}</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
