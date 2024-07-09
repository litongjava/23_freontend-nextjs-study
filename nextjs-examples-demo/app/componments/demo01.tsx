import styles from './Demo01.module.css';

export default function Demo01() {
  return (
      <div className={styles.container}>
        <div className={styles.leftSidebar}></div>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <img src="logo.png" alt="NO"/>
              <span>实力官网NO.com</span>
            </div>
            <nav className={styles.nav}>
              <a href="#">商家登录</a>
              <a href="#">会员登录</a>
              <select>
                <option>简体中文</option>
              </select>
            </nav>
          </header>
          <main className={styles.main}>
            <h1 className={styles.title}>因为严格+较真，所以安全、干净、有保障！</h1>
            <div className={styles.buttons}>
              <button>我是站长<br/>(支付代付)</button>
              <button>数字货币商户<br/>(支付/兑换/不限客户)</button>
              <button>我是个人</button>
              <button>成为矿工</button>
              <button>招募代理</button>
            </div>
          </main>
          <footer className={styles.footer}>
            Copyright © 2016-2024. All Rights Reserved
          </footer>
        </div>
        <div className={styles.rightSidebar}></div>
      </div>
  );
}
