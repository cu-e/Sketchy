import { modelStore } from "../../../settings";
import createDrawingModel from "../../models/createDrawingModel";
import { AnyModel } from "../../models/modelsProps";
import drawingAllModels from "../../utiles/drawingAllModels";
import { saveModelToLocalStorage } from "../../utiles/storageUtils";

export default function (canvasCtx : CanvasRenderingContext2D) {
    const $canvas = document.getElementById(
        "object-selector-layer"
    ) as HTMLCanvasElement;

    const ctx = $canvas.getContext("2d");

    if (!ctx) return;

    $canvas.width = window.innerWidth;
    $canvas.height = window.innerHeight + 6;
    if (window.devicePixelRatio > 1) {
        var canvasWidth = $canvas.width;
        var canvasHeight = $canvas.height;
        $canvas.width = canvasWidth * window.devicePixelRatio;
        $canvas.height = canvasHeight * window.devicePixelRatio;
        $canvas.style.width = canvasWidth + "px";
        $canvas.style.height = canvasHeight + "px";
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    let currentModel: AnyModel | null = null;

    $canvas.onmousedown = (eDown) => {
        const startX = eDown.offsetX;
        const startY = eDown.offsetY;
        currentModel = createDrawingModel(
            String(crypto.randomUUID()),
            startX,
            startY,
            startX,
            startY
        );

        $canvas.onmousemove = (e) => {
            ctx.beginPath();

            if (!currentModel) return;

            currentModel.erase(ctx);
            ctx.beginPath();

            ctx.closePath();

            currentModel = createDrawingModel(
                String(crypto.randomUUID()),
                startX,
                startY,
                e.offsetX,
                e.offsetY
            );

            if (currentModel) {
                currentModel.drawing(ctx);
            }
        };
        switch (modelStore.selected) {
        }
    };
    $canvas.onmouseup = () => {
        $canvas.onmousemove = () => {
            return null;
        };
        if (currentModel) {
            saveModelToLocalStorage(currentModel);
            drawingAllModels(canvasCtx);
            currentModel.erase(ctx);
        }
    };
}
