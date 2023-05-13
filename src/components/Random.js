function Random({ min, max }) {
  return (
    <div>
      <h4>
        Random value between {min} and {max} {' => '}
        {Math.floor(Math.random() * (max - min + 1)) + min}
      </h4>
    </div>
  );
}

export default Random;
