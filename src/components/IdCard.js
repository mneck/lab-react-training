function IdCard(props) {
  return (
    <div className="border-id">
      <div className="image-id">
        <img src={props.picture} />
      </div>
      <div className="text-id">
        <p>
          <b>First name:</b> {props.firstName}
        </p>
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}m
        </p>
        <p>
          <b>Birthdate:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
