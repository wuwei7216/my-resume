import React from "react";
import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const universityList = [
  {
    name: "湖北大学",
    major: "信息与计算科学",
    time: "2014/09 - 2018/06",
  }
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
