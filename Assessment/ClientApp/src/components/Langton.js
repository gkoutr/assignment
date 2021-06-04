import React, { Component } from 'react';
import Shape from './Shape';
import Grid from './Grid';
import './Langton.css';

export class Langton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shapes: []
        };
    }

    render() {
      
        return (
            <div>
                <Grid />
            </div>
        );
    }
}
