import { RectModel } from "../modelsProps";
import { registerModelFactory } from "../serializers";

registerModelFactory("rect", (e: any) =>
    CreateRect(
      e.id,
      e.x,
      e.y,
      e.width,
      e.height,
      e.fillStyle,
    )
);
  
export const CreateRect = (
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    fill = "black"
): RectModel => ({
    kind: "rect",
    id,
    x,
    y,
    width,
    height,
    fillStyle: fill,
    drawing(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.fillStyle || "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    },
    erase(ctx) {
        ctx.beginPath();
        ctx.clearRect(this.x, this.y, this.width, this.height);
        ctx.closePath();

    },
});
