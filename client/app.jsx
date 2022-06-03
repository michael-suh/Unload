import React from 'react';
import Home from './pages/home';
import Catalog from './pages/catalog';
import parseRoute from './lib/parse-route';
import SellForm from './pages/sell-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    }, false);
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Catalog items={this.state.items}/>;
    }

    if (route.path === 'sell') {
      return <SellForm />;
    }
  }

  render() {
    return (
      <>
        <Home />
        {this.renderPage()}
      </>
    );
  }
}
