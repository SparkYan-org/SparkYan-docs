import {
    defineUserConfig
} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "SparkYan",
            description: "个专为Galgame（文字冒险游戏）设计的轻量级游戏引擎。",
        }
    },

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});