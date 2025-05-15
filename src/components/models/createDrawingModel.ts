import { modelStore } from "../../settings";
import { CreateCircle } from "./circle/сircle";
import { CreateRect } from "./rect/rect";

export default function (
    id: string,
    startX: number,
    startY: number,
    currentX: number,
    currentY: number
) {
    switch (modelStore.selected) {
        case "circle":
            return CreateCircle(
                id,
                startX,
                startY,
                currentX - startX,
                currentY - startY,
                currentY - startY
            );
        case "rect":
            return CreateRect(
                id,
                startX,
                startY,
                currentX - startX,
                currentY - startY
            );
        default:
            return null;
    }
}
