import React from "react";
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
componentDidCatch(error, info) {
    console.log('Got error')
        this.setState({hasError: true});
    }
render() {
        return !this.state.hasError && this.props.children;
    }
}