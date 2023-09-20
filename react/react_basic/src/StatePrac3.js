import { Component } from 'react';

let tb = [];
class StatePrac3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      name: [],
      title: [],
    };

    this.submit = this.submit.bind(this);
    this.search = this.search.bind(this);
  }

  submit() {
    this.setState({ number: this.state.number + 1 });
    // this.setState((prevState)=>{name: {...name}})
    console.log(this.state);
    tb.push({ name: this.state.name, number: this.state.number, title: this.state.title });
    console.log(tb);
  }

  search() {
    const se = tb.filter((i) => i.name == this.state.name);
    tb = [];
    console.log('sdfasdasfdfasd', se[0].name);
    tb.push({ name: se[0].name, number: se[0].number, title: se[0].title });
    // this.submit();
    console.log('dd', tb);
  }

  render() {
    return (
      <div>
        <div>
          작성자 :{' '}
          <input
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          ></input>
          제목:{' '}
          <input
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          ></input>
          <button onClick={this.submit}>작성</button>
        </div>
        <div>
          <select onChange={(e) => this.setState({ name: e.target.value })}>
            {tb.map((n, index) => {
              return <option key={index}>{n.name}</option>;
            })}
            <option>작성자</option>
          </select>
          <input placeholder="검색어">{}</input>
          <button onClick={this.search}>검색</button>
        </div>
        <table border={1}>
          <th>번호</th>
          <th>작성자</th>
          <th>제목</th>
          {tb.map((n, index) => {
            console.log('sdf', n);
            return (
              <tr>
                <td>{n.number}</td>
                <td>{n.name}</td>
                <td>{n.title}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default StatePrac3;
