export default function ContactPage() {
  return (
    <div data-screen-label="contact">
      <div className="page-title">Contact</div>

      <div className="about-grid">
        <h2>Inquiry</h2>
        <div>
          <p>
            仕事のご依頼・お問い合わせは下記メールアドレス、もしくはInstagramのDMよりお願いいたします📬
          </p>
          <span></span>
          <a
            className="mail"
            href="mailto:sachiesaaan@gmail.com"
            style={{ color: "var(--music)" }}
          >
            sachiesaaan@gmail.com 🌐
          </a>
        </div>

        <h2>Please include</h2>
        <ul className="req">
          <li>
            <span>依頼内容(楽曲制作 / 劇伴 / Mix &amp; Mastering / DJ / VJ / 映像 / デザイン)</span>
          </li>
          <li>
            <span>ご予算とスケジュール(納期・公開日など)</span>
          </li>
          <li>
            <span>参考資料(音源・映像・デザイン等)</span>
          </li>
        </ul>

        <h2>Social</h2>
        <div className="sns-list">
          <a
            className="glink"
            style={{ color: "var(--music)" }}
            href="https://instagram.com/sachie.now"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram <span className="handle">@sachie.now</span>
          </a>
          <a
            className="glink"
            style={{ color: "var(--dj)" }}
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            YouTube <span className="handle">/@sachie</span>
          </a>
          <a
            className="glink"
            style={{ color: "var(--vj)" }}
            href="https://bandcamp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bandcamp <span className="handle">sachie.bandcamp.com</span>
          </a>
          <a
            className="glink"
            style={{ color: "var(--movie)" }}
            href="https://x.com/orangethief__"
            target="_blank"
            rel="noreferrer noopener"
          >
            X (Twitter) <span className="handle">@orangethief__
            </span>
          </a>
          <a
            className="glink"
            style={{ color: "var(--design)" }}
            href="https://linktr.ee/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Linktree <span className="handle">/sachie</span>
          </a>
        </div>

        <h2>Availability</h2>
        <div>
          <p>
            現在、新規案件を受付中です。
            ぜひ気軽にご相談くださいませ！
          </p>
          <p style={{ color: "var(--sub)", fontSize: 12 }}>
            ⋆˚☆˖°⋆｡° ✮˖ ࣪ ⊹⋆.˚
          </p>
        </div>
      </div>
    </div>
  );
}
