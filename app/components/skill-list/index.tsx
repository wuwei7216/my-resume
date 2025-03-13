import styles from "./index.module.scss";
import { cn } from "@/app/utils";

// 熟练掌握 Javascript、CSS、html 和 http 协议，熟悉 ES6 规范
//  熟练掌握 vue.js，对其响应式，模板编译，vNode 有深入理解
//  了解浏览器原理，对浏览器渲染页面，v8 引擎中执行 js 有深入理解
//  熟练掌握 docker、docker-compose、dockerfile 等，有项目接入流水线经验
//  熟练掌握 element，vuetify 组件库，工具链 git、webpack、vite 的使用
//  了解 node 和 egg、express 框架
//  了解 Java 以及 MySql 等数据库,能够熟练编写 SQL 语句
//  英语过四级，有软件设计师，数据库工程师（软考）职能证书

const SkillList = () => {
  return (
    <div className={cn(styles.socialInfo)}>
      <div className={styles.title}>相关技能</div>
      <ul>
        {/* <li>
          <span className="mr-1">antd</span>团队成员、<span className="mr-1">ahooks</span>
          团队成员，活跃于<span className="mx-1">GitHub</span>开源社区，给
          <span className="ml-1">Next.js</span>、<span className="mr-1">Vite</span>
          等众多知名开源库贡献过 PR
        </li> */}
        <li>
          熟悉<span className="mx-1">Vue</span>， 对其<span className="mx-1">响应式</span>、
          <span className="mx-1">模板编译</span>、<span className="mx-1">vNode</span> 有深入理解，
          熟悉<span className="ml-1">TypeScript</span>，拥有丰富的
          <span className="mx-1">Vue + TS</span>实践经验。
        </li>
        <li>
          熟悉前端性能优化的实现，例如<span className="ml-1">代码优化</span>、<span>打包优化</span>
          、<span>资源优化</span>，能结合实际业务场景进行优化
        </li>
        <li>
          了解浏览器原理，对<span className="mx-1">页面渲染</span>，
          <span className="mx-1">v8引擎执行js</span>有深入理解
        </li>
        <li>
          对后端有一定涉猎，了解<span className="mx-1">node</span>、
          <span className="mx-1">sql</span>，对<span className="mx-1">egg</span>、
          <span className="mx-1">express</span>框架有一定了解，能够熟练编写SQL语句
        </li>
        <li>
          熟悉<span className="mx-1">prettier / eslint</span>基本配置，有良好且严格的编码习惯，
          <span>唯客户论</span>，<span>实用主义者</span>
        </li>
        <li>
          熟悉代码开发到上线全流程，对<span className="ml-1">协同开发</span>、<span>分支管理</span>
          、<span className="mr-1">项目配置</span>等都有较深刻的最佳实践
        </li>
        <li>
          熟练掌握<span className="mx-1">docker</span>、<span className="mx-1">docker-compose</span>、<span className="mx-1">dockerfile</span>等，有项目接入流水线经验
        </li>
        <li>
          证书：<span className="mx-1">英语四级</span>、<span className="mx-1">软件设计师</span>、<span className="mx-1">数据库工程师</span>
        </li>
      </ul>
    </div>
  );
};

export default SkillList;
