import { TSettings } from "../types";

import { initTerserPlugin } from "./plugins";

import webpack from "webpack";

export const initOptimizations = (
    settings: TSettings
): Required<webpack.Configuration>["optimization"] => {
    const { isDev } = settings;

    return {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                default: false,
                assets: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "assets",
                    reuseExistingChunk: true,
                },
            },
        },
        removeAvailableModules: true,
        minimize: !isDev,
        minimizer: isDev ? [] : [initTerserPlugin()],
    };
};
