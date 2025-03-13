import React from "react";
import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const workList = [
  {
    name: "工业富联",
    time: "2022/07 - 2025/04",
    title: "高级前端工程师",
    department: "TSG部门 • 工业智能产品处 • 前端组",
    responsibilities: [
      "负责 部门部分产品，项目前端部分的架构设计，需求评审，与开发工作",
      "负责 部门前端基础搭建，主持部门组件库搭建，目前已实现 20+ 基础组件的封装，支持部门后台管理系统模板搭建，目前部门新项目都由此模板搭建，提升前端开发 30% 时间",
      "负责 mom 产品，aps 产品的开发工作，以及部分定制化项目开发",
      "负责 产品，项目前端部分技术指导"
    ],
  },
  {
    name: "追一科技",
    time: "2020/09 - 2022/07",
    title: "中级前端工程师",
    department: "产品开发部 • 前端组",
    responsibilities: [
      "负责 bot 产品迭代升级，以及定制化项目的前后端开发工作",
      "负责 bot 产品前端部分重构工作",
    ],
  },
  {
    name: "汉克时代",
    time: "2019/09 - 2020/09",
    title: "前端工程师",
    department: "研发中心 • 前端组",
    responsibilities: [
      "负责 电子签约系统 的前端升级部分工作",
      "负责 电子钱包系统的前端开发工作"
    ],
  },
  {
    name: "远光软件",
    time: "2018/06 - 2019/09",
    title: "软件开发工程师",
    department: "大数据部门 • 产品开发组",
    responsibilities: [
      "负责 资金智能监控产品研发，对已完成的功模块能进行一定的调整，修复产品存在的一些 BUG",
      "负责 资金调控平台项目研发，基于 vue 搭建项目前端框架，完成部分项目 ui 及前后端功能模块"
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className={cn(styles.work)}>
      <div className={cn(styles.title)}>工作经历</div>
      {workList.map<React.ReactNode>(company => (
        <div className={styles.company} key={company.name}>
          <div className={styles.row1}>
            <div className={styles.name}>{company.name}</div>
            <div className={styles.time}>{company.time}</div>
          </div>
          <div className={styles.row2}>
            <div>{company.title}</div>
            <div>{company.department}</div>
          </div>
          <ul>
            {company.responsibilities.map<React.ReactNode>(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
