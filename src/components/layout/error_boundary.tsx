import React, { ErrorInfo } from "react";
// import ErrorSection from 'next/error'
import ErrorSection from "./error_section";

export class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log("{ErrorBoundary.getDerivedStateFromError} error: ", error);

    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log("{ErrorBoundary.componentDidCatch} error: ", error, errorInfo);
    // logErrorToMyService(error, errorInfo); // TODO: This
    // const message = `There some hidden error occur: ` + error.message;
    // message.error(JSON.stringify(error.stack), 100);
  }

  render() {
    // @ts-ignore
    if (this.state.error) {
      // You can render any custom fallback UI
      return <ErrorSection code="APP_EXCEPTION" message="" />;
    }
    // @ts-ignore
    return this.props.children;
  }
}
