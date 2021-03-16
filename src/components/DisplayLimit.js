import React from "react";
import PropTypes from "prop-types";

export const DisplayLimit = ({ setLimit, limit }) => {
  const onChange = (e) => {
    setLimit(Number(e.target.value));
  };

  return (
    <div>
      <select onChange={onChange} value={limit}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

DisplayLimit.propTypes = {
  setLimit: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};
