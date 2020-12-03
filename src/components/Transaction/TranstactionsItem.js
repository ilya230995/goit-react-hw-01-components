import s from './Transaction.module.css';
import PropTypes from 'prop-types';

function TranstactionsItem({ item }) {
  return (
    <tbody className={s.transaction}>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
  );
}

TranstactionsItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TranstactionsItem;
