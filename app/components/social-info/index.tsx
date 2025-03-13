import styles from "./index.module.scss";
import GitHubOutlined from "@/app/images/GitHubOutlined";
import JuejinOutlined from "@/app/images/JuejinOutlined";
import LinkedinOutlined from "@/app/images/LinkedinOutlined";
import { cn } from "@/app/utils";

const SocialInfo = () => {
  return (
    <div className={cn(styles.socialInfo)}>
      <div className={styles.title}>社交信息</div>
      <div className={styles.socialItem} key={"GitHub"}>
        <GitHubOutlined />
        <span className={styles.name}>GitHub：</span>
        <a className={styles.link} href="https://github.com/wuwei7216" target="_blank">
          https://github.com/wuwei7216
        </a>
      </div>
      {/* <div className={styles.socialItem} key={"Linkedin"}>
        <LinkedinOutlined />
        <span className={styles.name}>Linkedin：</span>
        <a className={styles.link} href="https://www.linkedin.com/in/li-jia-nan" target="_blank">
          https://www.linkedin.com/in/li-jia-nan
        </a>
      </div> */}
      <div className={styles.socialItem} key={"Juejin"}>
        <JuejinOutlined />
        <span className={styles.name}>掘 金：</span>
        <a
          className={styles.link}
          href="https://juejin.cn/user/3527653074407005/posts"
          target="_blank"
        >
          https://juejin.cn/user/3527653074407005/posts
        </a>
      </div>
    </div>
  );
};

export default SocialInfo;
