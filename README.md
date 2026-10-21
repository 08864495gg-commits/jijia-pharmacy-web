# 吉佳藥局官方網站

HTML5 + Tailwind CSS CDN（停用 preflight，避免覆蓋品牌樣式）+ 自訂 CSS + 原生 JavaScript。
無購物車、無登入、無後端，也不儲存訪客個資。Tailwind CDN 無法載入時，自訂版面仍可呈現。

## 檔案
- `index.html`：首頁、1F、2F、商品與服務分類、嚕嚕及聯絡資訊。
- `style.css`：品牌色彩、手機與桌面版型。
- `main.js`：手機選單、商品分類、嚕嚕互動。
- `assets/`：由使用者提供的招牌 PDF 擷取之商標與招牌概念。
- `.nojekyll`：以靜態網站發布。

## GitHub Pages 部署
1. 在 GitHub 帳號 `08864495gg-commits` 建立公開儲存庫 `jijia-pharmacy-web`。
2. 將本資料夾內的檔案放在 repository 根目錄，確保 `index.html` 直接位於根目錄。
3. 開啟 Settings → Pages → Build and deployment。
4. Source 選擇 **Deploy from a branch**，Branch 選 **main**，資料夾選 **/(root)**，按 Save。
5. 等候 Pages 部署完成，以設定頁面實際顯示的網址為準。

官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

若使用 Git CLI，請先建立 repository，再於此資料夾執行：

```bash
git init
git add index.html style.css main.js assets README.md .nojekyll
git commit -m "Build Jijia Pharmacy official website"
git branch -M main
git remote add origin https://github.com/08864495gg-commits/jijia-pharmacy-web.git
git push -u origin main
```

## 內容維護
已帶入使用者提供的商務電話 0972-960-069、09:00–22:00、台北市士林區中山北路六段746號，以及 IG / Threads `@jijia_pharmacy_1110`。

- LINE：尚未提供官方連結，目前顯示待開通說明。取得連結後替換 `.line-notice`。
- 商品：目前為六個類別與服務導覽，不代表確定庫存。日後可在 `.catalog` 新增實際品牌、品項、照片與規格。
- 嚕嚕：未提供可識別的實際照片，目前使用品牌圖像，不冒充貓咪照片。
- 招牌：圖片來自設計 PDF，網站已標示為設計概念、非完工實景。
- 預約：透過電話或 IG 洽詢，沒有虛假的線上送出或訂單成功流程。
- Maps：嵌入 Google 地圖並提供外部導航；需訪客網路能存取 Google。
- 上線後依門市實際開幕與服務安排更新文字及營業時間。

## 視覺規範
暖白 #FAF9F4、深森綠 #244B40、原木色 #E9D0A5、文字 #302F29。
正文採系統繁體中文字體；標題採系統明體備援。支援減少動態效果偏好與鍵盤操作。

## 網站地圖／首頁順序
首頁主視覺 → 1F 社區藥局 → 2F 自然與特寵空間 → 商品及服務導覽 → 店長嚕嚕 → 預約聯絡及地圖 → 品牌招牌故事。

## 已檢查與限制
- JavaScript 語法、內部錨點及本地素材路徑。
- 商品分類、詳細內容展開、嚕嚕互動。
- GitHub 專案尚待建立及正式部署，不代表已上線。
