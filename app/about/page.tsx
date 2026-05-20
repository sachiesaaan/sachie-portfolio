import GenreMark from "@/components/GenreMark";

export default function AboutPage() {
  return (
    <div data-screen-label="about">
      <div className="page-title">About</div>
      <div className="about-grid">
        <h2>Profile</h2>
        <div>
          <p>
            SACHIE — Music Producer / DJ / VJ / Programmer.
          </p>
          <p>
            茨城県つくば市拠点。楽曲制作・劇伴/サウンドデザイン・Mix &amp; Mastering・DJを軸にしつつ、
            TouchDesignerを用いたVJ・映像制作・フライヤーデザインまでを横断して活動。
          </p>
          <p>
            音から映像、映像から音へと折り返すことで生まれる質感を探している。
          </p>
        </div>

        <h2>Practice</h2>
        <ul>
          <li>
            <span>
              <GenreMark genre="music" />Music
            </span>
            <span>楽曲制作・劇伴・Mix &amp; Mastering・Gig</span>
          </li>
          <li>
            <span>
              <GenreMark genre="dj" />DJ
            </span>
            <span>🎚️🎛️🎚️</span>
          </li>
          <li>
            <span>
              <GenreMark genre="vj" />VJ
            </span>
            <span>ジェネラティブ、サウンドリアクティブ</span>
          </li>
          <li>
            <span>
              <GenreMark genre="movie" />Movie
            </span>
            <span>🎬🎬🎬</span>
          </li>
          <li>
            <span>
              <GenreMark genre="design" />Design
            </span>
            <span>フライヤー・ジャケット・ロゴ</span>
          </li>
        </ul>

        <h2>Selected History</h2>
        <ul>
          <li>
            <span className="y">2026</span>
            <span>活動開始🪇</span>
          </li>
        </ul>

        <h2>Tools</h2>
        <div>
          <p>
            Ableton Live, FL Studio, TouchDesigner, Blender, Synapse Rack, Davinchi Resolve, Affinity.
          </p>
        </div>
      </div>
    </div>
  );
}
