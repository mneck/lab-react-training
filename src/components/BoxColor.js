function BoxColor({ r, g, b }) {
  let backgroundColor = `rgb(${r}, ${g}, ${b})`;

  function toHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  const hexValue = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  const divStyle = {
    color: 'white',
    backgroundColor: backgroundColor,
    width: '100%',
  };

  return (
    <div style={divStyle}>
      <p>{backgroundColor}</p>
      <p>{hexValue}</p>
    </div>
  );
}

export default BoxColor;
