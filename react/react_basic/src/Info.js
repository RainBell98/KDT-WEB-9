import coding from './prac.png';
function Info(props) {
  const style = {
    backgroundColor: 'beige',
  };
  const styles = {
    color: 'orange',
  };
  return (
    <div style={style}>
      <h2 style={styles}>이번주 베스트셀러</h2>
      <img src={coding}></img>
      <h3>{props.title}</h3>
      <h4>저자 : {props.author}</h4>
      <h4>판매가: {props.price}</h4>
      <h4>구분: {props.type}</h4>
    </div>
  );
}
export default Info;
