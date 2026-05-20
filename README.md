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

- **プロジェクト**: `lib/projects.ts` を編集。`thumb` と `media` 配列の URL を実物に差し替える。
- **About / Contact 本文**: `app/about/page.tsx` / `app/contact/page.tsx` を編集。
- **SNS ハンドル**: `app/contact/page.tsx` 内の `<a>` を編集。

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
