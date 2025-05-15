import drawingAllModels from "../utiles/drawingAllModels";
import drawing from "./layers/drawing";

export default function () {
    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 6;
    if (window.devicePixelRatio > 1) {
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        canvas.width = canvasWidth * window.devicePixelRatio;
        canvas.height = canvasHeight * window.devicePixelRatio;
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    window.addEventListener("DOMContentLoaded", () => {
        drawingAllModels(ctx);
        
        drawing(ctx);
    });
}
