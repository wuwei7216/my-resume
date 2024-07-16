import React from "react";
import styles from "./index.module.scss";
import { cn } from "@/app/utils";

const workList = [
  {
    name: "精准学",
    time: "2024/01 - 2024/05",
    title: "高级前端工程师",
    department: "AI 创新部 • 前端组",
    responsibilities: [
      "负责 AI agent 实验室项目的开发和建设，结合业务痛点，梳理了 2024 规划文档和 RoadMap，并落地规划",
      "开发 AI agent 编排工具，包含了 TTS、数学动画生成、知识库解析、NPC 对话字幕辅助生成、注意力检测等模块",
      "探索 AI agent 与前端的融合为业务带来的赋能，推动前端业务侧使用 AI agent 搭建学习机运营活动页",
      "完成原创全量项目迁移，全流程流水线，实现开发、测试、部署流水线的合并，工程质量和研发效率显著提升",
    ],
  },
  {
    name: "袋鼠云",
    time: "2021/11 - 2023/09",
    title: "高级前端工程师",
    department: "易知微 • 平台技术部 • 前端组",
    responsibilities: [
      "负责组内低代码应用协作平台 DTable（LowCode + aPaaS 方向）的开发和建设工作",
      "负责组内数据流重构工作，负责多人协同文档的相关需求，抽离并扩展相关功能组件和方法",
      "负责组内 React Hook 仓库建设，目前已实现 100+ 个基于 ahooks 的功能 hook 和业务专用 hook",
      "负责组内实习生的面试 & CodeReview 工作",
    ],
  },
  {
    name: "杭州彩连科技",
    time: "2019/11 - 2021/11",
    title: "前端工程师",
    department: "研发中心 • 大前端组",
    responsibilities: [
      "主要负责 yoycol 官网相关业务需求、移动端响应式UI改造、bops 后台相关业务需求",
      "次要负责 yoycol 基础组件的维护，以及设计器部分功能的重构和迭代",
      "完成了分销体系、品牌定制、设计器等三大主要模块的开发以及后续迭代和维护工作",
      "在空余时间使用 tailwind css 重构了运营后台、以及 yoycol 部分通用组件",
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
