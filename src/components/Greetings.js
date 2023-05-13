function Greetings(props) {
  let greeting = 'Hello';
  if (props.lang === 'de') {
    greeting = 'Hallo';
  }
  if (props.lang === 'en') {
    greeting = 'Hello';
  }
  if (props.lang === 'es') {
    greeting = 'Hola';
  }
  if (props.lang === 'fr') {
    greeting = 'Bonjour';
  }

  return (
    <h4>
      {greeting} {props.children}
    </h4>
  );
}

export default Greetings;
