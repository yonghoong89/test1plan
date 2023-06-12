import classNames from "classnames/bind";

import styles from "./main.module.scss";

const cx = classNames.bind(styles);

export default function Home() {
  return <main className={cx("main-page")}>메인페이지</main>;
}
