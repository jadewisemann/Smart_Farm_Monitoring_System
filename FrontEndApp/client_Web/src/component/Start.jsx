
const Star = ({rating}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={
          i < rating ? 'fa fa-star' : 'fa fa-star-o'
        }
      />
    );
  }

  return (
    <span className="rating">
      {stars}
    </span>
  );
};

export default Star;