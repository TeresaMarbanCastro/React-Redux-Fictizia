import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: false };
    }
  
    componentDidCatch(error, errorInfo) {
      // También puedes registrar el error en un servicio de reporte de errores
    //   logErrorToMyService(error, errorInfo);
        this.setState({
            error: true
        })
    }
  
    render() {
      if (this.state.error) {
        // Puedes renderizar cualquier interfaz de repuesto
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary