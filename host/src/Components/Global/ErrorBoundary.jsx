import React from 'react';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error reporting service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);

    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message here
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;