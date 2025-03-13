import styles from "./index.module.scss";
import { ANTD_DESIGN, YEAR } from "@/app/data/dataset";
import { cn } from "@/app/utils";

const Introduction = () => {
  return (
    <div className={cn(styles.introduction)}>
      {YEAR}年前端经验，拥有 2B 多个项目经验，拥有丰富的 Vue + TS
      实践经验，拥有多个项目从0到1的架构及开发经验；乐于分享、对业界新技术保持高度敏感，喜欢钻研前沿技术和边缘设施，
      喜欢研究一些优秀框架的源码，有较强的技术判断力和业务敏锐度。
    </div>
  );
};

export default Introduction;
