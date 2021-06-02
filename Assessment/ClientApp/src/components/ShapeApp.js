import React, { Component } from 'react';
import Shape from './Shape';
import ShapeForm from './ShapeForm';
import './ShapeApp.css';

export class ShapeApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shapes: [],
            colors: [], 
            selectedShape: {
                Id: 0, shape: {}
            },
            startColor: "",
            moveColor: "",
            edgeColor: "",
            isLoading: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        fetch('api/shapes')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    shapes: data.shapes,
                    selectedShape: data.shapes[0],
                    colors: data.colors,
                    startColor: data.colors[0],
                    moveColor: data.colors[0],
                    edgeColor: data.colors[0],
                    isLoading: false
                });
            });
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "shapeSelect":
                debugger;
                let currentShape = this.state.shapes.find(s => s.id == event.target.value);
                debugger;
                this.setState({ selectedShape: currentShape })
                break;
            case "startColorSelect":
                this.setState({ startColor: event.target.value }) 
                break;
            case "moveColorSelect":
                this.setState({ moveColor: event.target.value }) 
                break;
            case "edgeColorSelect":
                this.setState({ edgeColor: event.target.value }) 
                break;
            default:
                break;
        }
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <ShapeForm shapes={this.state.shapes} colors={this.state.colors} selectedColors={this.state.selectedColors} onChange={this.handleChange} />
                    <Shape startColor={this.state.startColor} moveColor={this.state.moveColor} edgeColor={this.state.edgeColor} shape={this.state.selectedShape} />
                </div>

            );
        }
    }
}
