import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <img className={styles.emoji + ' ' + 'flex-ctr-ctr'} src={menuItem.emoji} alt="Part Thumbnail" />
      <div className={styles.brand}>{menuItem.brand}</div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}