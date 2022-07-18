import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Nama kamu terdata sebagai: " + this.state.nama);
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Mantab {this.state.nama}, sekarang kamu berumur {this.state.umur}</h1>
      <p>Masukan Nama mu:</p>
      <input
        type='text'
        name='nama'
        onChange={this.myChangeHandler}
      />
      <p>Berapa umur sekarang:</p>
      <input
        type='text'
        name='umur'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));