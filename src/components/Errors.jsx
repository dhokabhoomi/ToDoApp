import React from "react";

class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger mt-3">
          <h4>Something went wrong.</h4>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Errors;
