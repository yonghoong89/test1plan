import classNames from "classnames/bind";

import styles from "./main.module.scss";
import Loading from "@/components/Loading";
import { useState } from "react";
import { TestFriend } from "@/assets/images";

const cx = classNames.bind(styles);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  console.log(TestFriend, "!");
  return (
    <main className={cx("main-page")}>
      <div className={cx("background-box")}>
        <div className={cx("friend-box")}>
          <button type="button">
            <img src={TestFriend.src} alt="" />
          </button>
          <span className={cx("text")}>...가나다라..</span>
        </div>
        <div className={cx("dialog-box")}>
          <p>
            {`안녕 잘지내니..\n난 잘지내는데 어떻게 생각하니 빨리 어플이 나왔으면 좋겠다 ㅎ`}
          </p>
        </div>
        <div className={cx("condition-box")}>
          <button type="button">
            친구 상태 Click! <strong className={cx("badge")}>New</strong>
          </button>
          <div>흐</div>
        </div>
      </div>
      {isLoading && <Loading />}
    </main>
  );
}
