import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dizi: [],
    };
  }
  onChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }
  onSubmitEvent(event) {
    event.preventDefault();

    var isHave = this.state.dizi.find((x) => x == this.state.value);

    if (isHave != undefined) {
      alert("Zaten var");
      return;
    }

    this.setState((state) => ({
      dizi: state.dizi.concat(this.state.value),
      value: "",
    }));
  }
  onClickEvent(index) {
    
    let yeniDizi = [...this.state.dizi];
    yeniDizi.splice(index, 1);
    this.setState((state) => ({
      dizi: yeniDizi,
    }));
  }
  render() {
    const sonuc = this.state.dizi.map((item,index) => (
      <div 
      key={x=>x.item}
      className="todo_panel">
        {item}
        <div
          onClick={() => this.onClickEvent(index)}
          className="img_panel"
        ></div>
      </div>
    ));
    const { visible } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitEvent.bind(this)}>
          <input
            type="text"
            onChange={this.onChangeEvent.bind(this)}
            value={this.state.value}
            placeholder="Ne Yapsam? "
            required
          />
          <button>Ekle</button>
        </form>
        <div>{sonuc}</div>
      </div>
    );
  }
}
