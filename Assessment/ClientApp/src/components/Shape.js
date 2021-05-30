import React, { useRef, useEffect } from 'react';

//function InitCanvas() {
//    const canvas = useRef();
//    let ctx = null;
//    useEffect(() => {
//        // dynamically assign the width and height to canvas
//        const canvasEle = canvas.current;
//        canvasEle.width = canvasEle.clientWidth;
//        canvasEle.height = canvasEle.clientHeight;

//        // get context of the canvas
//        ctx = canvasEle.getContext("2d");
//    }, []);

//    return (
//        <div className="App">
//            <h3>Draw a rectangle on Canvas - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
//            <canvas ref={canvas}></canvas>
//        </div>
//    );
//}
function Shape() {
    const canvas = useRef(null);
    let ctx = null;  
    let shapeDimensions = null;
    let shapeStyle = { borderColor: 'red', borderWidth: 10 };
    let updatedStyle = { borderColor: 'blue', borderWidth: 10 };
    let dragTarget = null;
    let holdClick = false;
    let clickX = null;
    let clickY = null;

    //init the canvas
    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        let shapeWidth = 100;
        let shapeHeight = 50
        //set the shapeDimensions at the center of the canvas to start
        let canvasCenterX = (canvas.current.clientWidth / 2) - shapeWidth / 2;
        let canvasCenterY = (canvas.current.clientHeight / 2) - shapeHeight / 2;
        shapeDimensions = { x: canvasCenterX, y: canvasCenterY, w: shapeWidth, h: shapeHeight };
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, []);

    //Draw the Rectangle after the canvas has been initialized
    useEffect(() => {
        drawRect(shapeDimensions, shapeStyle);
    }, []);

    //Function to draw the Rectangle using the provided dimensions and styles.
    const drawRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { borderColor = 'black', borderWidth = 1 } = style;
        console.log(info);
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
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
        drawShape();
    }

    //Draws the shape, if the shape is on the edge of the canvas then the shape will change color
    const drawShape = () => {
        ctx.clearRect(0, 0, canvas.current.clientWidth, canvas.current.clientHeight);
        if (shapeDimensions.x > 0 && shapeDimensions.y > 0 && shapeDimensions.x + shapeDimensions.w < canvas.current.width && shapeDimensions.y + shapeDimensions.h < canvas.current.height) {
            drawRect(shapeDimensions)
        }
        else {
            drawRect(shapeDimensions, updatedStyle)
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
            <h3>Draw a rectangle on Canvas - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
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
