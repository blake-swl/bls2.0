import React, { Component } from 'react';
import Loader from './index';
import { CSSTransitionGroup } from 'react-transition-group' 

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }
  
    componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 3500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      if (this.state.loading) return <CSSTransitionGroup transitionName="loader__mount"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={500}
      transitionLeave={true}
      >
      {/* transitionEnter={true}
      transitionEnterTimeout={500} */}

        <Loader/>
      </CSSTransitionGroup>;

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;