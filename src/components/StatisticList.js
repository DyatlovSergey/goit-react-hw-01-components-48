import Statistics from "./Statistics";
import propTypes from "prop-types";

export default function StatisticList({ items, title }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {items.map((item) => (
          <Statistics
            key={item.id}
            label={item.label}
            percent={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
StatisticList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired })
  ),
};
