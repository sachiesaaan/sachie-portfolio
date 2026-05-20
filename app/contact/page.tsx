export default function ContactPage() {
  return (
    <div data-screen-label="contact">
      <div className="page-title">Contact</div>

      <div className="about-grid">
        <h2>Inquiry</h2>
        <div>
          <p>
            仕事のご依頼・お問い合わせは下記メールアドレス、もしくは各SNSのDMよりお願いいたします。
            初回ご連絡時に、以下の項目をお知らせいただけるとスムーズです。
          </p>
          <a
            className="mail"
            href="mailto:hello@sachie.example"
            style={{ color: "var(--music)" }}
          >
            hello@sachie.example
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
            <span>参考音源・参考映像・参考デザインがあればURL</span>
          </li>
          <li>
            <span>用途(配信 / 商用 / 個人 / イベント等)</span>
          </li>
          <li>
            <span>クレジット表記の可否</span>
          </li>
        </ul>

        <h2>Social</h2>
        <div className="sns-list">
          <a
            className="glink"
            style={{ color: "var(--music)" }}
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram <span className="handle">@sachie.works</span>
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
            href="https://x.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            X (Twitter) <span className="handle">@sachie_</span>
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
            現在、楽曲制作・Mix &amp; Mastering の新規案件を受付中です。
            劇伴・VJ・デザインは案件規模により相談の上で。
          </p>
          <p style={{ color: "var(--sub)", fontSize: 12 }}>
            返信に2〜3営業日いただく場合があります。
          </p>
        </div>
      </div>
    </div>
  );
}
