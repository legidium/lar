import React from 'react';

export function connectModel(WrappedComponent) {
  return class BackboneModelComponent extends React.PureComponent {
    componentDidMount() {
      this.props.model.on('change', this.handleChange);
    }

    componentWillUnmount() {
      this.props.model.off('change', this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

export function connectCollection(WrappedComponent) {
  return class BackboneCollectionComponent extends React.PureComponent {
    componentDidMount() {
      this.props.collection.on('add remove reset change:completed', this.handleChange);
    }

    componentWillUnmount() {
      this.props.collection.off('add remove reset change:completed', this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}
