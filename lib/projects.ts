import type { GenreKey } from "./genres";

export type MediaItem =
  | { kind: "image"; url: string }
  | { kind: "video"; url: string; poster?: string }
  | { kind: "youtube"; id: string; title?: string };

export type Project = {
  id: string;
  title: string;
  date: string;
  genre: GenreKey;
  software: string[];
  about: string;
  thumb: string;
  media: MediaItem[];
};

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;
const sampleVideo = (name: string) => `https://media.w3.org/2010/05/${name}`;

const img = (id: string): MediaItem => ({ kind: "image", url: unsplash(id, 1600) });
const vid = (name: string, posterId: string): MediaItem => ({
  kind: "video",
  url: sampleVideo(name),
  poster: unsplash(posterId, 1600),
});
const yt = (id: string, opts: { title?: string } = {}): MediaItem => ({
  kind: "youtube",
  id,
  title: opts.title || "YouTube video",
});

export const PROJECTS: Project[] = [
  {
    id: "anemone-ep",
    title: "Anemone EP",
    date: "2025",
    genre: "music",
    software: ["Ableton Live", "Serum", "iZotope Ozone"],
    about:
      "4曲入りオリジナルEP。アンビエントとブレイクビーツを行き来する構成で、自身のレーベルからリリース。サウンドデザインからミックス・マスタリングまで一人で完結させた。",
    thumb: unsplash("1514525253161-7a46d19cd819", 900),
    media: [
      img("1514525253161-7a46d19cd819"),
      img("1493612276216-ee3925520721"),
      img("1518972559570-7cc1309f3229"),
    ],
  },
  {
    id: "vj-warp-night",
    title: "VJ Set — WARP NIGHT",
    date: "2025",
    genre: "vj",
    software: ["TouchDesigner", "Resolume", "MIDI Controller"],
    about:
      "渋谷のクラブでのレギュラーパーティーでVJを担当。リアルタイム生成のパーティクル映像とBPM同期したジオメトリで、フロアの体感温度を視覚化する試み。",
    thumb: unsplash("1545128485-c400e7702796", 900),
    media: [
      yt("dQw4w9WgXcQ", { title: "WARP NIGHT live capture" }),
      vid("sintel/trailer.mp4", "1545128485-c400e7702796"),
      img("1545128485-c400e7702796"),
      img("1559827260-dc66d52bef19"),
    ],
  },
  {
    id: "short-film-aono",
    title: "短編映画『青の残響』劇伴",
    date: "2024",
    genre: "movie",
    software: ["Logic Pro", "Kontakt", "Native Instruments"],
    about:
      "新人監督の短編映画(28分)の劇伴・サウンドデザイン担当。弦楽四重奏とシンセサイザーを重ねた11曲を書き下ろし、台詞のない長尺シーンで音楽が物語を駆動する設計。",
    thumb: unsplash("1485846234645-a62644f84728", 900),
    media: [
      yt("jNQXAC9IVRw", { title: "青の残響 トレーラー" }),
      vid("bunny/movie.mp4", "1485846234645-a62644f84728"),
      img("1485846234645-a62644f84728"),
      img("1478720568477-152d9b164e26"),
    ],
  },
  {
    id: "spring-sessions-flyer",
    title: "SPRING SESSIONS Flyer",
    date: "2025",
    genre: "design",
    software: ["Illustrator", "Photoshop"],
    about:
      "都内のレコードショップ主催のイベントフライヤー。タイポグラフィを主役に、出演者ごとのジャンルを色とリズムで対比させた構成。A5両面・印刷500部。",
    thumb: unsplash("1626785774573-4b799315345d", 900),
    media: [img("1626785774573-4b799315345d"), img("1550684376-efcbd6e3f031")],
  },
  {
    id: "live-at-float",
    title: "Live at FLOAT",
    date: "2024",
    genre: "dj",
    software: ["Pioneer CDJ-3000", "DJM-900NXS2"],
    about:
      "ハウスとブレイクビーツを中心とした90分のDJセット。前半はアンビエントから入り、後半はテクノに展開する起承転結のあるミックス。録音はSoundCloudにて公開中。",
    thumb: unsplash("1493676304819-0d7a8d026dcf", 900),
    media: [img("1493676304819-0d7a8d026dcf"), img("1470225620780-dba8ba36b745")],
  },
  {
    id: "particle-studies",
    title: "TD Visuals — Particle Studies",
    date: "2025",
    genre: "vj",
    software: ["TouchDesigner", "GLSL"],
    about:
      "TouchDesignerでのパーティクルシステム研究。GPUインスタンシングで100万パーティクルを動かしながら、音に反応する流体的なビヘイビアを設計。一部は商業案件のVJ素材として展開。",
    thumb: unsplash("1559827260-dc66d52bef19", 900),
    media: [
      yt("M7lc1UVf-VE", { title: "Particle Studies reel" }),
      vid("bunny/trailer.mp4", "1559827260-dc66d52bef19"),
      img("1559827260-dc66d52bef19"),
    ],
  },
  {
    id: "static-drift-art",
    title: "Album Art — Static Drift",
    date: "2024",
    genre: "design",
    software: ["Photoshop", "TouchDesigner"],
    about:
      "他アーティストのフルアルバム『Static Drift』のジャケット・トレイ・ブックレットをデザイン。TouchDesignerで生成したノイズフィールドを下絵に、グリッドタイポで構造化した。",
    thumb: unsplash("1550684376-efcbd6e3f031", 900),
    media: [img("1550684376-efcbd6e3f031"), img("1626785774573-4b799315345d")],
  },
  {
    id: "cm-sound-logo",
    title: "CM Sound Logo Package",
    date: "2025",
    genre: "movie",
    software: ["Logic Pro", "Spectrasonics"],
    about:
      "アパレルブランドのCM用サウンドロゴと、3秒/6秒/15秒の派生バージョンをパッケージで制作。クライアントのリブランディングに合わせて、低域中心の落ち着いた音像を提案。",
    thumb: unsplash("1493612276216-ee3925520721", 900),
    media: [img("1493612276216-ee3925520721"), img("1598488035139-bdbb2231ce04")],
  },
  {
    id: "selected-ambient-mix",
    title: "DJ Mix — Selected Ambient",
    date: "2024",
    genre: "dj",
    software: ["rekordbox", "Pro Tools"],
    about:
      "アンビエント/ドローン縛りの2時間のロングミックス。ライブ録音ではなくスタジオで丁寧に編集したもので、Mixcloudで月間ピックに選出された。",
    thumb: unsplash("1470225620780-dba8ba36b745", 900),
    media: [img("1470225620780-dba8ba36b745"), img("1493676304819-0d7a8d026dcf")],
  },
  {
    id: "doc-sound-design",
    title: "Documentary Sound Design",
    date: "2023",
    genre: "movie",
    software: ["Pro Tools", "FabFilter", "iZotope RX"],
    about:
      "ドキュメンタリー作品(60分)のサウンドデザイン・ダイアログ整音・ミックスを担当。現場録音のノイズ処理から、環境音の再構築までトータルで音を設計。",
    thumb: unsplash("1478720568477-152d9b164e26", 900),
    media: [
      vid("video/movie_300.mp4", "1478720568477-152d9b164e26"),
      img("1478720568477-152d9b164e26"),
    ],
  },
  {
    id: "mastering-vol3",
    title: "Mastering Session vol.3",
    date: "2024",
    genre: "music",
    software: ["Pro Tools", "iZotope Ozone", "Pro-L 2"],
    about:
      "12組のアーティストから預かった楽曲を1日でマスタリングする企画の第3回。SoundCloudとSpotify、配信プラットフォームごとのターゲットラウドネスに合わせて納品。",
    thumb: unsplash("1598488035139-bdbb2231ce04", 900),
    media: [img("1598488035139-bdbb2231ce04"), img("1518972559570-7cc1309f3229")],
  },
  {
    id: "gig-rsvp",
    title: "Live Gig — R.S.V.P.",
    date: "2025",
    genre: "music",
    software: ["Ableton Live", "Push 3", "Modular Synth"],
    about:
      "オリジナル曲を中心としたソロライブ。Push 3とモジュラーシンセを組み合わせたインプロビゼーション主体のセットで、毎回違う展開で40分演奏する。",
    thumb: unsplash("1501386761578-eac5c94b800a", 900),
    media: [img("1501386761578-eac5c94b800a"), img("1514525253161-7a46d19cd819")],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
