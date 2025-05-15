export type ModelType = "circle" | "rect" | null;

export const ALL_MODEL_TYPES: Exclude<ModelType, null>[] = ["circle", "rect"];

export type BaseModel = {
    kind: ModelType;
    id: string;
    x: number;
    y: number;
    fillStyle?: string;
    strokeStyle?: string;
    drawing(ctx: CanvasRenderingContext2D): void;
    erase: (ctx: CanvasRenderingContext2D) => void;
};
export type CircleModel = BaseModel & {
    kind: "circle";
    width: number;
    height: number;
    radius: number;
};

export type RectModel = BaseModel & {
    kind: "rect";
    width: number;
    height: number;
};

export type AnyModel = CircleModel | RectModel;
