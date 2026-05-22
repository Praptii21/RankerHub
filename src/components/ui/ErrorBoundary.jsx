import React, { Component } from "react";
import { useLottie } from "lottie-react";
import errorAnimation from "../../assets/animations/404_error.json";

const LottieWrapper = ({ animation }) => {
  const { View } = useLottie({ animationData: animation, loop: true });
  return <div className="w-full h-full">{View}</div>;
};

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-slate-800 dark:text-slate-100 transition-colors duration-300">
          <div className="max-w-md w-full backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="w-64 h-64 mb-6">
              <LottieWrapper animation={errorAnimation} />
            </div>
            <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
              Something went wrong.
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              The application encountered an unexpected error. Don't worry, your data is safe.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
