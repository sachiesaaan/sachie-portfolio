# SACHIE Portfolio

SACHIE (Music Producer / DJ / VJ / Programmer) のポートフォリオサイト。Next.js (App Router, TypeScript) で実装。

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## ビルド

```bash
npm run build
npm run start
```

## ディレクトリ構成

```
app/
  layout.tsx              # フォント / Header / Footer
  page.tsx                # "/" Projects 一覧
  about/page.tsx          # "/about"
  contact/page.tsx        # "/contact"
  projects/[id]/page.tsx  # "/projects/[id]" 詳細
  globals.css
components/               # Header, ThumbCard, MediaCarousel, ...
lib/
  genres.ts               # 5 ジャンル定義
  projects.ts             # プロジェクトデータ(現在はダミー)
```

## コンテンツ差し替え

- **プロジェクト**: `lib/projects.ts` を編集。`thumb` と `media` 配列の URL を実物に差し替える(下記「自分の写真・動画を使う」参照)。
- **About / Contact 本文**: `app/about/page.tsx` / `app/contact/page.tsx` を編集。
- **SNS ハンドル**: `app/contact/page.tsx` 内の `<a>` を編集。

## 自分の写真・動画を使う

### 1. 保存場所

プロジェクトルート直下の `public/` ディレクトリに置く。無ければ作成する。
中はプロジェクトごとにサブフォルダで整理するのがおすすめ。

```
public/
  projects/
    anemone-ep/
      cover.jpg        # サムネ用
      01.jpg
      02.jpg
      live.mp4
      live-poster.jpg  # 動画のポスター画像(任意)
    vj-warp-night/
      ...
```

### 2. `lib/projects.ts` からの参照方法

`public/` 以下のファイルは **`/` から始まるパス** で参照する(`/public` は書かない)。
ファイル拡張子で扱いが分かれる:

| 種類          | 書き方                                                                                  |
| ------------- | --------------------------------------------------------------------------------------- |
| 画像          | `{ kind: "image", url: "/projects/anemone-ep/01.jpg" }`                                 |
| 動画(mp4等) | `{ kind: "video", url: "/projects/anemone-ep/live.mp4", poster: "/projects/anemone-ep/live-poster.jpg" }` |
| YouTube       | `{ kind: "youtube", id: "dQw4w9WgXcQ", title: "..." }` (動画ID のみ)                  |
| サムネ        | `thumb: "/projects/anemone-ep/cover.jpg"` (Project の `thumb` フィールド)              |

書き換え例:

```ts
{
  id: "anemone-ep",
  // ...
  thumb: "/projects/anemone-ep/cover.jpg",
  media: [
    { kind: "image", url: "/projects/anemone-ep/01.jpg" },
    { kind: "image", url: "/projects/anemone-ep/02.jpg" },
    { kind: "video", url: "/projects/anemone-ep/live.mp4",
      poster: "/projects/anemone-ep/live-poster.jpg" },
  ],
},
```

ダミー時代のヘルパ(`unsplash` / `sampleVideo` / `img` / `vid`)は不要になったら削除して OK。
`yt` は YouTube を使うなら残しておくと便利。

### 3. ファイル名と推奨サイズ

- ファイル名は **半角英数とハイフン** で(日本語名/スペースは避ける)
- 画像: 横幅 1600px 程度の `.jpg` または `.webp`。サムネはアスペクト比 4:5(縦長)が見栄え良し
- 動画: `.mp4` (H.264 + AAC)、長尺なら 720p〜1080p に圧縮。poster 画像を付けると読み込み前の見た目が綺麗

### 4. 確認

`npm run dev` 中はファイルを置けば即反映される(ブラウザリロード)。
本番ビルド (`npm run build`) でも `public/` の中身はそのまま配信される。

## Favicon

Next.js App Router は **`app/` 直下に決まったファイル名で置くだけ** で自動的に `<head>` に `<link>` を注入してくれる。`app/layout.tsx` への手書きは不要。

| ファイル                   | 用途                            | 推奨サイズ                 |
| -------------------------- | ------------------------------- | -------------------------- |
| `app/favicon.ico`          | ブラウザタブ(`.ico` 限定)     | 16×16, 32×32, 48×48 を内包 |
| `app/icon.png` (or `.svg`) | モダンブラウザ用(高解像度)   | 512×512 推奨(正方形)     |
| `app/apple-icon.png`       | iOS のホーム画面追加用          | 180×180                    |
| `app/opengraph-image.png`  | OGP(SNS シェア時のサムネ)     | 1200×630                   |

最低限なら `app/favicon.ico` 1個でも OK。3 点セット (`favicon.ico` + `icon.png` + `apple-icon.png`) を入れておくとほぼ全環境で綺麗に出る。

手順:

1. 正方形・透過 PNG ベースで画像を用意(`.ico` は [favicon.io](https://favicon.io) などで変換)
2. 上記ファイル名で `app/` 直下に保存
3. `npm run dev` を再起動 → タブのアイコンに反映

## Vercel へのデプロイ

1. [vercel.com/new](https://vercel.com/new) を開く
2. GitHub リポジトリ `sachiesaaan/sachie-portfolio` を Import
3. Framework Preset が **Next.js** であることを確認(自動検出される)
4. デフォルト設定のまま **Deploy**

以降、`main` ブランチへ push する度に自動でデプロイされる。

## カラーパレット

| Genre  | Color   |
| ------ | ------- |
| Music  | #FA6800 |
| DJ     | #36AF31 |
| VJ     | #30F141 |
| Movie  | #3C97E7 |
| Design | #FBBF24 |
