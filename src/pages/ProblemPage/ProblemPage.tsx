import { Problem } from "../../modules/Problem";
import * as React from "react";

export const ProblemPage = () => {
  return (
    <section>
      <Problem
        {...{
          id: 1,
          poster: "名無し",
          category: "初心者",
          haiList: {
            size: "normal",
            items: [
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" },
              { hai: "1m" }
            ]
          },
          imageUrl:
            "https://toroccowars.jp/wp-content/uploads/2020/05/jyan-eyec.png",
          discription:
            "これはテスト用問題です．ここに問題の説明文を書くことができます．aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }}
      />
    </section>
  );
};
