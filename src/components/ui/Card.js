import './Card.css'

function Card(props){
    // component used will have two default items
    // 1. props.className, 2. props.children
        // console.log(props);
        // console.log(classes);

    // classes here defined: 'card' belongs to ./Card.css
    // 'expense-item' belongs to ./ExpenseItem.css
    // => className= card expense-item
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>;
}
export default Card