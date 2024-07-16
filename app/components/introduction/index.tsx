import styles from "./index.module.scss";
import { ANTD_DESIGN, YEAR } from "@/app/data/dataset";
import { cn } from "@/app/utils";

const Introduction = () => {
  return (
    <div className={cn(styles.introduction)}>
      {YEAR}年前端经验，拥有 2B/2C 多个项目经验，拥有丰富的 React + TS
      实践经验，积极参与行业内优秀前端技术框架开源共建，目前是 AntDesign 全球 {ANTD_DESIGN}{" "}
      名核心成员之一、ahooks
      核心成员之一，乐于分享、对业界新技术保持高度敏感，喜欢钻研前沿技术和边缘设施，喜欢研究一些优秀框架的源码，有较强的技术判断力和业务敏锐度。
    </div>
  );
};

export default Introduction;
