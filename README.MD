# 醫療機構轉型解決方案

[![GitHub Actions Status](https://github.com/{username}/{repository}/workflows/Deploy/badge.svg)](https://github.com/{username}/{repository}/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

這是一個展示醫療機構相關程序的網站，提供傳統醫療機構轉型高端醫療機構的輕量化相關解決方案。

## 🚀 快速開始
## 網站功能

- 展示醫療機構轉型方案
- 提供解決方案介紹
- 展示成功案例
- 聯繫諮詢表單

## 技術架構

- HTML5
- CSS3
- 響應式設計
- GitHub Pages 自動部署



bash
安裝依賴
npm install
運行開發服務器
npm run dev
構建生產版本
npm run build

## 📋 功能特點

- 展示醫療機構轉型方案
- 提供解決方案介紹
- 展示成功案例
- 聯繫諮詢表單
- 自動化部署至 GitHub Pages

## 🛠 技術架構

- HTML5
- CSS3
- 響應式設計
- GitHub Pages 自動部署
- Node.js & NPM

## 📁 目錄結構
project/
│
├── src/ # 源代碼目錄
│ ├── index.html # 首頁
│ ├── css/ # 樣式文件
│ │ └── style.css
│ └── images/ # 圖片資源
│
├── dist/ # 構建輸出目錄
├── node_modules/ # NPM 依賴
├── package.json # 項目配置文件
├── package-lock.json # 依賴版本鎖定文件
└── README.md # 項目說明文檔

## 🔄 自動部署

本項目使用 GitHub Actions 進行自動化部署。工作流程配置文件位於 `.github/workflows/deploy.yml`。

當推送到 `main` 分支時,會自動執行以下步驟:

1. 檢出代碼
2. 設置 Node.js 環境 (v16)
3. 安裝項目依賴
4. 執行構建
5. 將構建結果部署到 GitHub Pages

### 配置說明

1. 確保倉庫已啟用 GitHub Pages 功能
2. 在倉庫設置中,將 GitHub Pages 的來源設置為 `gh-pages` 分支
3. 工作流程會自動創建並更新 `gh-pages` 分支

### 手動觸發部署

您也可以在 GitHub 倉庫的 Actions 頁面手動觸發部署流程。

## 自動化工作流程

本專案使用 GitHub Actions 進行自動化測試和部署。

### 自動觸發條件
- 推送到 main 分支
- 建立 Pull Request 到 main 分支

### 手動觸發
1. 前往 Actions 頁面
2. 選擇 "CI/CD Pipeline"
3. 點擊 "Run workflow"

### 發布新版本

![Deploy Status](https://github.com/{username}/{repository}/actions/workflows/deploy.yml/badge.svg)

## 部署狀態

本網站使用 GitHub Actions 自動部署至 GitHub Pages。
您可以在 [Actions 頁面](https://github.com/{username}/{repository}/actions) 查看部署狀態。

## 本地開發
