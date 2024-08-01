import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from '../styles/Mtavari.module.scss'

const TextWithMore = ({ text, id }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = text.split(" ");
  const shouldTruncate = words.length > 80;
  const displayedText =
    showMore || !shouldTruncate ? text : words.slice(0, 80).join(" ") + "...";

  return (
    <div className={styles.TextWithMore}>
      <h4>{displayedText}</h4>
      {shouldTruncate && (
        <Link
          className={styles.metisNaxvda}
          to={`/post-review/${id}`}
        >
          სრულად ნახვა...
        </Link>
      )}
    </div>
  );
};

TextWithMore.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextWithMore;
