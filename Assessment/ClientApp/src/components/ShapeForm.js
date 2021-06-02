import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ShapeForm(props) {
    debugger;
    function handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="shapeSelect">Choose Shape:</Label>
                    <Input type="select" name="select" id="shapeSelect" onChange={props.onChange}>
                        {props.shapes.map(shape =>
                            <option key={shape.id} value={shape.id}>{shape.name}</option>
                        )}
                    </Input>
                    <Label for="startColorSelect">Choose Starting Color:</Label>
                    <Input type="select" name="select" id="startColorSelect" onChange={props.onChange}>
                        {props.colors.map(color =>
                            <option key={color + '-1'} value={props.startColor}>{color}</option>
                        )}
                    </Input>
                    <Label for="moveColorSelect">Choose Move Color:</Label>
                    <Input type="select" name="select" id="moveColorSelect" onChange={props.onChange}>
                        {props.colors.map(color =>
                            <option key={color + '-2'} value={props.moveColor}>{color}</option>
                        )}
                    </Input>
                    <Label for="edgeColorSelect">Choose Edge Color:</Label>
                    <Input type="select" name="select" id="edgeColorSelect" onChange={props.onChange}>
                        {props.colors.map(color =>
                            <option key={color + '-3'} value={props.edgeColor}>{color}</option>
                        )}
                    </Input>
                </FormGroup>
            </Form>
        </div>
    );
}
export default ShapeForm;