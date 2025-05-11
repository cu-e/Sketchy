import drawing from "./layers/drawing";

export default function () {
    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 6;

    window.addEventListener("DOMContentLoaded", () => {
        drawing();
    });
}
