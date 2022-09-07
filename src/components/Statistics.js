// import propTypes from "prop-types";

// export default function Statistic({ label, percent }) {
//   return (
//     <li>
//       <span className="label">{label}</span>
//       <span className="percentage">{percent}</span>
//     </li>
//   );
// }

// Statistic.poroTypes = {
//   label: propTypes.string,
//   percent: propTypes.number,
// };

import propTypes from "prop-types";
export default function Statistics({ label, percent }) {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
  );
}

Statistics.poroTypes = {
  label: propTypes.string,
  percent: propTypes.number,
};
