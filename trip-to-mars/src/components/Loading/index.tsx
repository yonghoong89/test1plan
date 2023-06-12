import classNames from "classnames/bind";

import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx("loading")}>
      <div className={cx("image")}></div>
    </div>
  );
}
