# Wedding Invitation

韓系簡約婚禮邀請網站，使用 React、Vite、Tailwind CSS、Framer Motion 與 React Router 建立。專案為純前端架構，所有婚禮內容集中在 JSON 管理，方便第二階段繼續擴充座位查詢或更多頁面。

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- GitHub Pages

## Install

```bash
npm install
npm run dev
```

本地預設開發網址通常為 `http://localhost:5173`。

## Project Structure

```text
wedding-invitation/
├─ public/
│  ├─ 404.html
│  └─ assets/
│     └─ images/
├─ src/
│  ├─ components/
│  │  ├─ common/
│  │  ├─ intro/
│  │  └─ sections/
│  ├─ data/
│  │  ├─ gallery.json
│  │  └─ site.json
│  ├─ hooks/
│  ├─ lib/
│  ├─ pages/
│  └─ router/
├─ .env.production
├─ index.html
├─ tailwind.config.js
└─ vite.config.js
```

## Data Management

所有內容都由 JSON 控制：

- `src/data/site.json`
  - couple 名稱、Hero 設定、婚禮資訊、倒數時間、聯絡方式、座位查詢文案
- `src/data/gallery.json`
  - 婚紗照片、caption、排版偏移、旋轉角度與顯示順序

更新資料時不需要修改 component 邏輯。

## Hero Variant Switching

目前首頁啟用的是方案 A 單張全版 Hero。

若要切換成方案 B 三張拼接 Hero，只要修改：

```json
"activeVariant": "triptych"
```

位置在 `src/data/site.json > hero.activeVariant`。

## GitHub Pages Deployment

### 1. 確認 base path

專案透過 `vite.config.js` 與 `.env.production` 處理 GitHub Pages 子路徑。

預設值：

```env
VITE_BASE_PATH=/wedding-invitation/
```

如果你的 GitHub repository 名稱不是 `wedding-invitation`，請改成你的 repo 名稱，例如：

```env
VITE_BASE_PATH=/my-wedding-site/
```

### 2. Build

```bash
npm run build
```

### 3. Deploy to `gh-pages`

```bash
npm run deploy
```

### 4. GitHub Pages 設定

在 GitHub repository 的 Pages 設定中：

- Source 選擇 `Deploy from a branch`
- Branch 選擇 `gh-pages`
- Folder 選擇 `/ (root)`

## Routing Notes

- 使用 `BrowserRouter`
- 已加入 `public/404.html` 與 `index.html` redirect script
- GitHub Pages 重新整理 `/seat-search` 這類子頁時，會自動導回 SPA

## Current Pages

- `/`
  - 信封開場動畫
  - Hero
  - 婚禮資訊
  - 婚紗照片 masonry
  - 倒數計時
  - 聯絡方式
  - 座位查詢入口
- `/seat-search`
  - 第二階段 placeholder 頁面

## Design Notes

- 主色：白、米白、奶油色、淺咖啡、淡金色
- 動畫策略：開場較明顯，進入內容後收斂成淡入、微位移與點擊放大
- 版型策略：手機優先，桌機延展留白與照片節奏

## Recommended Next Phase

- 接入座位查詢 JSON 或 API
- 新增出席回覆區塊
- 加入交通資訊與地圖連結
- 加入背景音樂開關或賓客留言區
