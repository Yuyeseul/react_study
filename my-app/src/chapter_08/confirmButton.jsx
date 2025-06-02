import React from 'react';

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false, // 변수 초기값 false
    };

    // this.handleConfirm = this.handleConfirm.bind(this); // bind
  }

  // handleConfirm() {
  //   // event handler
  //   this.setState((prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // }

  // class fields syntax 사용 -> 거의 사용 안함함
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? '확인됨' : '확인하기'}
      </button>
    );
  }
}

export default ConfirmButton;
