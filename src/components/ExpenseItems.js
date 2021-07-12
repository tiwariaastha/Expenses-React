import  './ExpenseItem.css';
function expenseItem (){
    const expenseDate= new date(2021, 12,27);
    const expenseTitle= 'Car Insurance';
    const expenseAmount='2000';
    return (
    <div className ='expense-item'>
        <div> 27 dec 2020</div>
    <div className="expense-item_description">
        <h2>car insurance</h2>
    <div className ="expense-item_price>"> 2000</div>
    </div>
    </div>
    );
}
export default expenseItem;

