export default function () {
    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 6;

    canvas.onmousedown = (e) => {
        console.log(e.offsetX, " ", e.offsetY);
        ctx.fillRect(e.offsetX, e.offsetY, 10, 10);
    };
}
