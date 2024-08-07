import {
    hopeTheme
} from "vuepress-theme-hope";
import {
    zhNavbar
} from "./navbar/index.js";
import {
    zhSidebar
} from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://docs.moyanjdc.top",

    author: {
        name: "莫颜"
    },

    iconAssets: "iconfont",

    logo: "/logo.png",

    repo: "SparkYan-org/Spark-Yan",

    docsDir: "src",
    fullscreen: true,
    locales: {
        "/": {
            // navbar
            navbar: zhNavbar,
            // sidebar
            sidebar: zhSidebar,
            displayFooter: true,
        }
    },
    plugins: {

        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            alert: true,
            card: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            hint: true,
            playground: {
                presets: ["ts", "vue"],
            },
            revealjs: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
            components: {
                // 你想使用的组件
                components: [
                    "ArtPlayer",
                    "AudioPlayer",
                    "Badge",
                    "BiliBili",
                    "CodePen",
                    "PDF",
                    "Replit",
                    "Share",
                    "SiteInfo",
                    "StackBlitz",
                    "VidStack",
                    "VideoPlayer",
                    "XiGua",
                    "YouTube",
                ],
            },
        },
    },
});