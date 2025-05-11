export default function () {
    const canvas = document.getElementById(
        "object-selector-layer"
    ) as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 6;
    canvas.onmousedown = (eDown) => {
        console.log(eDown.offsetX, " ", eDown.offsetY);

        //     switch (modelStore.selected) {
        //         case "circle":
        //             canvas.onmousemove = (e) => {
        //                 console.log(e.offsetX, " ", e.offsetY);
        //                 ctx.fillRect(e.offsetX, e.offsetY, 5, 5);
        //             };

        //             break;

        //         case "rect":
        //             canvas.onmousemove = (e) => {
        //                 ctx.clearRect(0, 0, canvas.width, canvas.height); // очистка
        //                 ctx.beginPath();
        //                 ctx.rect(
        //                     e.offsetX,
        //                     e.offsetY,
        //                     eDown.offsetX - e.offsetX,
        //                     eDown.offsetY - e.offsetY
        //                 );
        //                 ctx.fill();
        //             };
        //             break;
        //     }
        // };
        // canvas.onmouseup = () => {
        //     canvas.onmousemove = () => {};
    };
}
