import styles from "./index.module.scss";
import { ANTD_DESIGN, NEW_COUNT, PR_COUNT, PR_ORDER } from "@/app/data/dataset";
import { cn } from "@/app/utils";

const Projects = () => {
  return (
    <div className={cn(styles.projectsWrap)}>
      <div className={cn(styles.title)}>项目经历</div>
      <div className={styles.project}>
        <div className={styles.level1}>mom制造运营管理系统</div>
        <div className={styles.level2}>背景</div>
        <div className={styles.level3}>
          由原项目山东mom智能制造管理系统产品化而来，主要是对整个制造流程数字化、智能化，提高制造、管理效率，为企业提供聚焦交付精准、效率提升、品质改善
          由aps、mes、质量管理、模具管理、设备管理等这些生产相关的管理系统组合而成，完整把控整个制造流程
        </div>
        <div className={styles.level2}>角色</div>
        <div className={styles.level3}>
          mom产品的<span className="mx-1">前端技术负责人</span>
        </div>
        <div className={styles.level3}>
          mom产品质量管理模块的<span className="ml-1">owner</span>，独立开发
        </div>
        <div className={styles.level2}>行动</div>
        <div className={styles.level3}>
          完成 mom产品的前期<span className="mx-1">技术调研</span>和后期
          <span className="ml-1">体验评估</span>、完成<span className="mx-1">技术选型</span>和
          <span className="ml-1">架构设计</span>
        </div>
        <div className={styles.level3}>
          采用<span className="ml-1">monorepo架构</span>，用<span>pnpm-workspace</span>管理子模块
        </div>
        <div className={styles.level3}>
          完成mom产品中<span className="ml-1">框架搭建</span>、<span>layout设计</span>、
          <span>工作流配置</span>、<span>公共组件库设计</span>等前期核心模块的设计与开发工作
        </div>
        <div className={styles.level3}>
          根据业务需求与ui图完成各子模块的<span className="mx-1">基本结构</span>
          提供vue、vue-router、icon和公共组件的<span className="mx-1">自动导入</span>功能
        </div>
        <div className={styles.level3}>
          给各自模块提供代码保存时<span className="mx-1">eslint代码校验</span>、
          <span className="mx-1">prettier代码美化</span>、<span className="mx-1">用户信息处理</span>
          、<span className="mx-1">菜单路由管理</span>等功能
        </div>
        <div className={styles.level3}>
          通过<span className="mx-1">web-vitals</span>库，收集用户体验指标，上传到
          <span className="mx-1">项目性能监视平台</span>，创建出数据可视化图表，对产品持续优化
        </div>
        <div className={styles.level2}>遇到的挑战</div>
        <div className={styles.level3}>
          产品开发一年后遇到<span className="mx-1">部分页面加载慢</span>
          的问题，通过查看network资源请求，发现是很多依赖如element-plus全局加载，和部分配置(css.preprocessorOptions)不合理配置，导致很多无用资源引入导致的，
          二是，不分页面存储数据过多，内存泄漏导致性能问题（通过查看堆快照发现的），处理完后fcp指标由
          <span className="mx-1">3.5s</span>下降到<span className="mx-1">1.0s</span>
        </div>
        <div className={styles.level2}>结果</div>
        <div className={styles.level3}>
          出售给多家制造公司<span className="mx-1">营收超千万</span>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.level1}>
          bot 智能服务机器人
          <a href="https://zhuiyi.ai/product/bot" target="_blank">
            https://zhuiyi.ai/product/bot
          </a>
        </div>
        <div className={styles.level2}>背景</div>
        <div className={styles.level3}>
          基于自然语言处理 (NLP)
          和大语言模型，提供机器人文本对话能力，解决大部分咨询问题和业务办理，实现用户自助服务。帮助企业升级服务体验，提高服务效率，降低人力成本。
        </div>
        <div className={styles.level2}>角色</div>
        <div className={styles.level3}>bot管理平台前后端开发人员</div>
        <div className={styles.level2}>行动</div>
        <div className={styles.level3}>bot2.0版本开发，技术用vue+ts+node，负责前后端开发任务</div>
        <div className={styles.level3}>负责bot产品重构，由vue由2.x到3.x版本</div>
        <div className={styles.level3}>处理web部分接入流水线，自动构建，自动部署</div>
        <div className={styles.level2}>遇到的挑战</div>
        <div className={styles.level3}>
          大excel下载问题：50w+条数据离线下载，通过并发请求以及流式写入的方式解决
        </div>
        <div className={styles.level2}>结果</div>
        <div className={styles.level3}>
          公司主要盈利产品
        </div>
      </div>
    </div>
  );
};

export default Projects;
