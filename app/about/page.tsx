import GenreMark from "@/components/GenreMark";

export default function AboutPage() {
  return (
    <div data-screen-label="about">
      <div className="page-title">About</div>
      <div className="about-grid">
        <h2>Profile</h2>
        <div>
          <p>
            <strong>SACHIE</strong> — Music Producer / DJ / VJ / Programmer.
          </p>
          <p>
            東京拠点。楽曲制作・劇伴/サウンドデザイン・Mix &amp; Mastering・DJを軸にしつつ、
            TouchDesignerを用いたVJ・映像制作・フライヤーデザインまでを横断して活動。
            音と視覚を行き来する制作プロセスに関心がある。
          </p>
          <p>
            Beneath the orange, green, blue, and yellow markers below are five practices that
            inform one another. 音から映像、映像から音へと折り返すことで生まれる質感を探している。
          </p>
        </div>

        <h2>Practice</h2>
        <ul>
          <li>
            <span>
              <GenreMark genre="music" />music
            </span>
            <span>楽曲制作・劇伴・Mix &amp; Mastering・Gig</span>
          </li>
          <li>
            <span>
              <GenreMark genre="dj" />DJ
            </span>
            <span>クラブ・ラウンジ・配信</span>
          </li>
          <li>
            <span>
              <GenreMark genre="vj" />VJ
            </span>
            <span>TouchDesigner / Resolume</span>
          </li>
          <li>
            <span>
              <GenreMark genre="movie" />movie
            </span>
            <span>映像制作・劇伴・サウンドデザイン</span>
          </li>
          <li>
            <span>
              <GenreMark genre="design" />design
            </span>
            <span>フライヤー・ジャケット・ロゴ</span>
          </li>
        </ul>

        <h2>Selected History</h2>
        <ul>
          <li>
            <span className="y">2025</span>
            <span>ソロEP『Anemone』リリース / WARP NIGHTにてVJ常駐</span>
          </li>
          <li>
            <span className="y">2024</span>
            <span>短編映画『青の残響』劇伴 / マスタリング企画 vol.3</span>
          </li>
          <li>
            <span className="y">2023</span>
            <span>ドキュメンタリーサウンドデザイン / Mixcloud月間ピック</span>
          </li>
          <li>
            <span className="y">2022</span>
            <span>TouchDesigner作品の共同個展に参加</span>
          </li>
          <li>
            <span className="y">2019</span>
            <span>音楽活動を本格化</span>
          </li>
        </ul>

        <h2>Tools</h2>
        <div>
          <p>
            Ableton Live, Logic Pro, Pro Tools, iZotope Ozone, Serum, Kontakt,
            Pioneer CDJ-3000, TouchDesigner, Resolume, Illustrator, Photoshop.
          </p>
        </div>
      </div>
    </div>
  );
}
