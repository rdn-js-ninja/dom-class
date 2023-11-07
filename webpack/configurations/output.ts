import { join } from "path";

import { TSettings } from "../types";

export const initOutput = (setting: TSettings) => {
    const { pathDist } = setting;

    return {
        path: pathDist,
        filename: join("[name].js"),
        clean: true,
        libraryTarget: "module",
        umdNamedDefine: true,
        module: true,
    };
};
