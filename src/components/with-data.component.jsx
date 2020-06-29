import React, { Component } from "react";

const withData = (WrapComponent) => {
  class WithData extends Component {
    state = { data: [] };

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((response) => response.json())
          .then((data) => this.setState({ data: data.slice(0, 4) }));
      }, 1500);
    }

    render() {
      const { dataSource, ...restProps } = this.props;
      const { data } = this.state;
      return data.length > 1 ? (
        <WrapComponent data={data} {...restProps} />
      ) : (
        <h2>Loading...</h2>
      );
    }
  }

  return WithData;
};

export default withData;
