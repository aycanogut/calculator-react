const Button = ({ children }) => {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    padding: '10px'
  };
  return <button style={style}>{children}</button>;
};

export default Button;
