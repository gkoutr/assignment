import React, { useRef, useEffect } from 'react';

function Shape(props) {
    const canvas = useRef(null);
    let ctx = null;  
    let shapeDimensions =  null;
    
    let shapeStyle = { borderColor: 'red', borderWidth: 10 };
    let updatedStyle = { borderColor: 'blue', borderWidth: 10 };
    let dragTarget = null;
    let holdClick = false;
    let clickX = null;
    let clickY = null;

    let selectedShape = props.shape;

    let startColor = props.startColor;
    let moveColor = props.moveColor;
    let edgeColor = props.edgeColor;

    let startStyle = { borderColor: startColor, borderWidth: 10, backgroundColor: startColor };
    let moveStyle = { borderColor: moveColor, borderWidth: 10, backgroundColor: moveColor };
    let edgeStyle = { borderColor: edgeColor, borderWidth: 10, backgroundColor: edgeColor };


    //init the canvas
    useEffect(() => {
        initializeCanvas();
    }, [props]);
    
    const initializeCanvas = () => {
        if (ctx != null) {canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        let shapeWidth = selectedShape.dimensions.width;
        let shapeHeight = selectedShape.dimensions.height
        //set the shapeDimensions at the center of the canvas to start
        let canvasCenterX = (canvas.current.clientWidth / 2) - shapeWidth / 2;
        let canvasCenterY = (canvas.current.clientHeight / 2) - shapeHeight / 2;
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
        if (selectedShape.name == 'Rectangle') {
            shapeDimensions = { x: canvasCenterX, y: canvasCenterY, w: shapeWidth, h: shapeHeight };
            drawShape(shapeDimensions, startStyle);
        }
        if (selectedShape.name == 'Square') {
            shapeDimensions = { x: canvasCenterX, y: canvasCenterY, w: 100, h: 100 };
            drawShape(shapeDimensions, startStyle);
        }
    } 

    //Function to draw the shape using the provided dimensions and styles.
    const drawShape = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { borderColor = 'black', borderWidth = 1, backgroundColor = "black" } = style;
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
        
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(x, y, w, h);
        ctx.stroke();
    }

    //mouse click down event
    const handleMouseDown = e => {
        clickX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
        clickY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
        if (clickX >= shapeDimensions.x && clickX <= shapeDimensions.x + shapeDimensions.w
            && clickY >= shapeDimensions.y && clickY <= shapeDimensions.y + shapeDimensions.h) {
            holdClick = true;
            dragTarget = shapeDimensions;
        }
    }

    //Moves the shape by updating the x and y of the Shape. 
    //X and Y determined by the current mouse location - where the click took place
    //Draws the shape, if the shape is on the edge of the canvas then the shape will change color
    const handleMouseMove = e => {
        if (!holdClick) return;
       
        const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
        const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
        const dx = mouseX - clickX;
        const dy = mouseY - clickY;
        clickX = mouseX;
        clickY = mouseY;
        dragTarget.x += dx;
        dragTarget.y += dy;
        ctx.clearRect(0, 0, canvas.current.clientWidth, canvas.current.clientHeight);
        if (shapeDimensions.x > 0 && shapeDimensions.y > 0 && shapeDimensions.x + shapeDimensions.w < canvas.current.width && shapeDimensions.y + shapeDimensions.h < canvas.current.height) {
            drawShape(shapeDimensions, moveStyle)
        }
        else {
            drawShape(shapeDimensions, edgeStyle)
        }
    }

    const handleMouseOut = e => {
        dragTarget = null;
        holdClick = false;
    }

    const handleMouseUp = e => {
        handleMouseOut(e);
    }

    return(
        <div className="App">
            <canvas
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
                onMouseUp={handleMouseUp}
                ref={canvas}></canvas>
        </div>
    );
}
export default Shape;
