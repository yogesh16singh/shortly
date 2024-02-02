import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
    presets: [
        {
            ...sharedConfig,
            content: [
                "./app/**/*.{js,ts,jsx,tsx}",
                "./ui/**/*.{js,ts,jsx,tsx}",
                // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo
                "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
            ],
            theme: {
                extend: {
                    ...sharedConfig?.theme?.extend,
                    animation: {
                        ...sharedConfig?.theme?.extend?.animation,

                    },
                    keyframes: {
                        ...sharedConfig?.theme?.extend?.keyframes,

                    },
                },
            },
        },
    ],
};

export default config;