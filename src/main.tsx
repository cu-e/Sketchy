import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import canvas from "./components/canvas/canvas";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <canvas id = "main-canvas">test</canvas>
    <div></div>
`;

canvas();
