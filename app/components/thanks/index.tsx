import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const Thanks = () => (
  <div className={cn(styles.thanks)}>
    <div className={cn(styles.title)}>致谢</div>
    <div className={cn(styles.item)}>感谢您花时间阅读我的简历，期待有机会能和您共事。</div>
  </div>
);

export default Thanks;
