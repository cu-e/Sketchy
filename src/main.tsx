import canvas from "./components/canvas/canvas";
import tab from "./components/gui/tab";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <canvas id = "object-selector-layer">test-2</canvas>
    <canvas id = "main-canvas">test</canvas>
    <div class="panel">
        <button id="circle-model"  ><svg width="18" height="18"><circle cx="50%" cy="50%" r="8" stroke="#fff" fill="none" /></svg></button>
        <button id="rect-model"><svg width="18" height="18"><rect x="1" y="1" width="16" height="16" rx="4" stroke="#fff" fill="none" /></svg></button>
        <button id="color-picker"><input type="color"/></button>

    </div>
`;

canvas();
tab();
