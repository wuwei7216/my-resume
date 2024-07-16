import { YEAR } from "@/app/data/dataset";
import styles from "./index.module.scss";
import MailOutlined from "@/app/images/MailOutlined";
import PhoneOutlined from "@/app/images/PhoneOutlined";
import WechatOutlined from "@/app/images/WechatOutlined";
import { cn } from "@/app/utils";

const PersonInfo = () => {
  return (
    <div className={cn(styles.userInfo)}>
      <div className={cn(styles.title)}>栗嘉男</div>
      <div className={cn(styles.titleSub)}>前端开发 / 开源爱好者 / {YEAR}年经验</div>
      <div className={cn(styles.contact)}>
        <div className={styles.contactItem} key={1}>
          <PhoneOutlined />
          19941208872
        </div>
        <div className={styles.contactItem} key={2}>
          <WechatOutlined />
          19941208872
        </div>
        <div className={styles.contactItem} key={3}>
          <MailOutlined />
          574980606@qq.com
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
