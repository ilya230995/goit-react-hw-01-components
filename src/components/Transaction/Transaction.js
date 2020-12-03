import TranstactionsItem from './TranstactionsItem';
import s from './Transaction.module.css';

function Transaction({ items }) {
  return (
    <table className={s.history}>
      <thead className={s.row_name}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(el => (
        <TranstactionsItem item={el} key={el.id} />
      ))}
    </table>
  );
}

export default Transaction;
