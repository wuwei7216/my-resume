import React from "react";
import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const universityList = [
  {
    name: "东北林业大学",
    major: "软件工程",
    time: "2020/12 - 2023/06",
  },
  {
    name: "甘肃建筑职业技术学院",
    major: "建筑工程技术",
    time: "2014/09 - 2017/06",
  },
];

const Educational = () => {
  return (
    <div className={cn(styles.educational)}>
      <div className={cn(styles.title)}>教育经历</div>
      {universityList.map<React.ReactNode>(item => (
        <div className={styles.universitys} key={item.name}>
          <div className={styles.info}>
            {item.name}
            <span>{item.time}</span>
          </div>
          <div className={styles.major}>{item.major}</div>
        </div>
      ))}
    </div>
  );
};

export default Educational;
