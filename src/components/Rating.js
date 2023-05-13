function Rating(props) {
  let numOfStars = '';
  function starCounter(child) {
    let num = Number(child);
    if (num < 0.5) {
      numOfStars = '☆☆☆☆☆';
    } else if (num < 1.5) {
      numOfStars = '★☆☆☆☆';
    } else if (num < 2.5) {
      numOfStars = '★★☆☆☆';
    } else if (num < 3.5) {
      numOfStars = '★★★☆☆';
    } else if (num < 4.5) {
      numOfStars = '★★★★☆';
    } else {
      numOfStars = '★★★★★';
    }
    return numOfStars;
  }

  return <p>{starCounter(props.children)}</p>;
}

export default Rating;
