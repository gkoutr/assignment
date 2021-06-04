import React, { useRef, useEffect } from 'react';
import Ant from './Ant';

function Grid(props) {
    const canvas = useRef(null);

    let ant = null;
    const gridColumns = 15;
    const gridRows = 15;
    let grid = [];
    let height = 400;
    let width = 400;
    let scl = width / gridColumns;
    let ctx = null;

    useEffect(() => {
        initializeCanvas();
        initializeGrid();
        drawGrid();
    }, []);

    const initializeGrid = () => {
        for (let i = 0; i < gridColumns; i++) {
            grid.push([]);
            for (let j = 0; j < gridRows; j++) {
                grid[i].push(0);
            }
        }
        let x = Math.floor(gridColumns / 2)
        let y = Math.floor(gridRows / 2)
        ant = new Ant(x, y);
    }

    const drawGrid = () => {
        const x = ant.position[0];
        const y = ant.position[1]

        for (let i = 0; i < gridColumns; i++) {
            for (let j = 0; j < gridRows; j++) {
                if (grid[i][j] > 0) {
                    ctx.fillStyle = "black";
                } else {
                    ctx.fillStyle = "white";
                }
                ctx.stroke();
                ctx.rect(i * scl, j * scl, scl - 1, scl - 1);
                ctx.fillRect(i * scl, j * scl, scl - 1, scl - 1);
            }
        }
        ctx.fillStyle = "Red"
        ctx.fillRect(x * scl, y * scl, scl, scl);

        ant.moveForward();
    }

    const initializeCanvas = () => {
        if (ctx != null) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
        ctx = canvasEle.getContext("2d");
    }

    return (
        <div className="Langton">
            <canvas
                ref={canvas}></canvas>
        </div>
    );
}
export default Grid;