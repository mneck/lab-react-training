import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleButtonClick}>{count} Likes</button>;
}

export default LikeButton;
