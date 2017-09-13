import {Component} from 'react';
import OrderTable from 'components/Orders/OrderTable'

const exampleData = [
  ['En despacho', 'Willy', 65416532],
  ['Atendido', 'Paty', 65416135],
  ['Pago pendiente', 'Javier', 4585632],
].map(
  ([status, customer, date], i) => ({
    status, customer, date, id: i +1,
  })
);

import 'isomorphic-fetch';

class OrderTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    // Mocked async call
    this.timer = setTimeout(()=> this.setSate({
      data: exampleData,
    }), 1000);
    // Cuando quieras hacer peticiones
    fetch('/api/orders').then((res) => {});

    // Con funcion asyncrona
    const res = await fetch('/api/orders');

  }

  componentWillUnmount() {
    cancelTimer(this.timer);
  }

  render() {
    const { data } = this.state;
    return (
      <OrderTable  data={data} loading={this.state.loading}/>
    )
  }
}
