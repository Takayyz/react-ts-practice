const Hello = () => {
  const onClick = () => {
    alert('Hello');
  };

  const text = 'Hello, hello!!!';

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
}

export default Hello;
