import { CircleModel } from "../modelsProps";
import { registerModelFactory } from "../serializers";

registerModelFactory("circle", (e: any) =>
    CreateCircle(
      e.id,
      e.x,
      e.y,
      e.width,
      e.height,
      e.radius,
      e.fillStyle
    )
);
  
export const CreateCircle = (
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill = "black"
): CircleModel => ({
    kind: "circle",
    id,
    x,
    y,
    width,
    height,
    radius,
    fillStyle: fill,
    drawing(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.fillStyle || "black";
        ctx.arc(
            this.x,
            this.y,
            Math.sqrt(width ** 2 + height ** 2),
            0,
            2 * Math.PI
        );
        ctx.fill();
        ctx.closePath();
    },
    erase(ctx) {
        ctx.beginPath();
        const r = Math.sqrt(this.width ** 2 + this.height ** 2);
        const buffer = 2;
        ctx.clearRect(
            this.x - r - buffer,
            this.y - r - buffer,
            2 * (r + buffer),
            2 * (r + buffer)
        );
        ctx.closePath();
    },
});
