import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="border-id">
      <img src={img} alt="driver image" width="15%" />
      <h2>{name}</h2>
      <div>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
