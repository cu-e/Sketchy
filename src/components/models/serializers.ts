import { AnyModel, ModelType } from "../models/modelsProps";

export type ModelFactory = (data: any) => AnyModel;

const modelFactories: Record<Exclude<ModelType, null>, ModelFactory> = {} as any;

export function registerModelFactory(
    kind: Exclude<ModelType, null>,
    factory: ModelFactory
  ) {
    modelFactories[kind] = factory;
}

export function deserializeModels(raw: any[]): AnyModel[] {
    return raw.map(e => {
        const factory = modelFactories[(e as AnyModel).kind];
        if (!factory) {
            throw new Error("The factory for the model was not found.: " + e.kind);
        }
        return factory(e);
    })
}

  
