import React, { Component } from 'react';
import Shape from './Shape';
import ShapeForm from './ShapeForm';
import './ShapeApp.css';

export class ShapeApp extends Component {

    constructor(props) {
        const shapes = [
            {
                "id": 1,
                "name": "Rectangle",
                "dimensions": {
                    "height": 100,
                    "width": 50
                }
            },
            {
                "id": 2,
                "name": "Circle",
                "dimensions": {
                    "height": 100,
                    "width": 50
                }
            },
            {
                "id": 3,
                "name": "Square",
                "dimensions": {
                    "height": 100,
                    "width": 50
                }
            }
        ]
        const colors = [
            "blue",
            "red",
            "black",
            "pink",
            "purple"
        ]
        super(props);
        this.state = {
            shapes: shapes,
            colors: colors, 
            selectedShape: "Rectangle",
            startColor: "",
            moveColor: "",
            edgeColor: ""
        };
        //this.handleChange = this.handleChange.bind(this);
        //fetch('api/SampleData/WeatherForecasts')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ forecasts: data, loading: false });
        //    });
    }

    handleChange = (event) => {
        debugger;
        switch (event.target.id) {
            case "shapeSelect":
                // code block
                this.setState({ selectedShape: event.target.value })
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
        return (
            <div>
                <ShapeForm shapes={this.state.shapes} colors={this.state.colors} selectedColors={this.state.selectedColors} onChange={this.handleChange} />
                <Shape startColor={this.state.startColor} moveColor={this.state.moveColor} edgeColor={this.state.edgeColor} shape={this.state.selectedShape} />
            </div>
        );
    }
}
