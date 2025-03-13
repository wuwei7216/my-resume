import { YEAR } from "@/app/data/dataset";
import styles from "./index.module.scss";
import MailOutlined from "@/app/images/MailOutlined";
import PhoneOutlined from "@/app/images/PhoneOutlined";
import WechatOutlined from "@/app/images/WechatOutlined";
import { cn } from "@/app/utils";

const PersonInfo = () => {
  return (
    <div className={cn(styles.userInfo)}>
      <div className={cn(styles.title)}>吴威</div>
      <div className={cn(styles.titleSub)}>前端开发 / {YEAR}年经验</div>
      <div className={cn(styles.contact)}>
        <div className={cn(styles.contactItem)} key={"Phone"}>
          <PhoneOutlined />
          15812767029
        </div>
        <div className={cn(styles.contactItem)} key={"Wechat"}>
          <WechatOutlined />
          15812767029
        </div>
        <div className={cn(styles.contactItem)} key={"Email"}>
          <MailOutlined />
          m13163395378@163.com
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
