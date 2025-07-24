import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('🚨 Error caught by ErrorBoundary:', error, info);
    // You can log to error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            ⚠️ Something went wrong.
          </h2>
          <p className="text-gray-700">
            Our engineers are working to fix the issue.
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
