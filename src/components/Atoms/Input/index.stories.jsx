import { Input } from "./index";

export default  {component: Input};

export const  Default = {
    args: {
        defaultValue: "ここにテキストを入力",
        onEditComplete: (text) => {
            console.log("編集が完了しました", text);
        },
    },
};

