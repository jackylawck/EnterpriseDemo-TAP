# EnterpriseDemo-TAP: Enterprise Demo Training Attendance Portal
### 企業示範培訓簽到平台（現場投影中樞與全端自動化架構）

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://jackylawck.github.io/EnterpriseDemo-TAP/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Compliance](https://img.shields.io/badge/Compliance-ISO%209001%20%7C%20ISO%2045001-green.svg)](COMPLIANCE.md)
[![Architecture](https://img.shields.io/badge/Architecture-Governance--as--Code-purple.svg)](schemas/tap_sharepoint_schemas.json)

[English](#english) | [繁體中文](#繁體中文)

---

## 繁體中文

### 項目簡介
**EnterpriseDemo-TAP (Enterprise Demo Training Attendance Portal)** 是一套專為現代企業設計的無伺服器（Serverless）培訓出勤與合規存證解決方案。前端透過純靜態網頁（支援 GitHub Pages 或企業內網部署）提供現場課堂投影與動態 QR Code 生成；後端深度整合 Microsoft 365 生態系（Microsoft Forms、SharePoint Online 與 Power Automate），實現「零人手干預、秒級出勤入庫、即時報表派發」，並透過標準化 JSON 藍圖落實 **治理即代碼（Governance-as-Code）**。

### 核心合規與架構特色
1. **多維度合規防禦架構**：
   * **ISO 9001 (Clause 7.2 / 7.5)**：落實人員勝任能力（Competence）培訓紀錄與成文資訊控制。
   * **ISO 45001 (Demo-Form-043)**：建立可追溯的職業健康與安全專項培訓核簽審計鏈。
   * **香港個人資料（私隱）條例 (PDPO)**：貫徹資料最小化收集原則（Data Minimization）、端點本機零殘留（Local Storage Hygiene）及即時收集聲明（PICS）。
   * **確定性規則工作流**：明確界定系統為非 AI 演算法之確定性自動化架構，排除不必要的模型合規審計負擔。
2. **零進階授權成本（Zero Premium License）**：
   * 透過微軟 Forms 動態參數預填（URL Prefill）搭配雙向事件觸發，無需購買昂貴的 Power Automate Premium HTTP 連接器授權即可實現端到端自動化。
3. **高彈性現場控場與雙軌備援（Plan B）**：
   * 支援企業電郵網域鎖定（`@enterprise-demo.local`）、自訂培訓日期與 12 小時制時段選擇器。
   * 內建全螢幕抗干擾投影模式、防彈窗攔截機制，以及針對個別裝置異常或斷網情境的「現場手動補簽（Plan B）」與紙本應急指引。
4. **精準本地時區與字串清洗**：
   * 後端工作流自動將系統 UTC 時間戳記轉換為香港標準時間（`China Standard Time` / `yyyy-MM-dd HH:mm:ss`），並自動清洗 URL 編碼加號字元。

### 端到端自動化架構圖
```text
[ 講師投影大螢幕 (GitHub Pages / Intranet) ]
      │
      ├─► 1. 學員手機掃描動態 QR Code
      │         └─► Microsoft Forms (預填 SessionID) ──► SharePoint (Demo_Training_Attendance)
      │
      └─► 2. 講師點擊「✉️ 立即發信」
                └─► Microsoft Forms (完課觸發表單) ───► SharePoint (Demo_Training_Sessions)
                                                                │
                                                                ▼ (事件觸發)
                                                Power Automate 完課彙整流程
                                                (OData 篩選 Title + HKT 時區轉換)
                                                                │
                                                                ▼
                                                Outlook 自動派發 HTML 出席總表
                                                (同步寄送至主講者與 HRD 存檔信箱)

```

### 系統檔案結構

```text
EnterpriseDemo-TAP/
├── index.html                                # 現場投影大螢幕主要前端介面
├── app.js                                    # 動態 QR Code 渲染、正向計時器、參數編碼與觸發邏輯
├── config.js                                 # 組織設定檔（Forms 佔位 ID、欄位對應與電郵網域）
├── i18n.js                                   # 繁體中文／英文雙語介面字典
├── style.css                                 # 響應式投影與全螢幕高對比樣式表
├── flows/
│   └── Flow_AttendanceSummaryDispatch.json   # Power Automate 完課彙整與發信工作流定義藍圖
├── schemas/
│   └── tap_sharepoint_schemas.json           # SharePoint 清單欄位架構、內部名稱與權限規範
├── COMPLIANCE.md                             # 法律適用性裁量與資安防禦性架構說明
├── PRIVACY_POLICY.md                         # 個人資料收集聲明（PICS）與數據保存方針範例
└── LICENSE                                   # MIT 開源授權條款

```

### 快速部署與配置指引

1. **建立後端清單與表單**：參照 `schemas/tap_sharepoint_schemas.json` 於 SharePoint 建立對應清單，並建立兩份 Microsoft Forms（學員簽到表與完課觸發表單）。
2. **匯入自動化流程**：參照 `flows/Flow_AttendanceSummaryDispatch.json` 於 Power Automate 設定清單建立觸發器與 OData 篩選條件（`Title eq '@{triggerOutputs()?['body/Title']}'`）。
3. **更新前端設定**：於 `config.js` 填入實際的 Forms 網址、問題欄位 GUID 與企業電郵後綴，即可透過 GitHub Pages 或企業內網直接開啟 `index.html` 投入使用。

---

## English

### Project Overview

**EnterpriseDemo-TAP (Enterprise Demo Training Attendance Portal)** is a lightweight, serverless training attendance and compliance archival solution designed for modern enterprises. The frontend runs as a pure static web application (deployable via GitHub Pages or corporate Intranet) to power live classroom projections and dynamic QR code generation. The backend integrates seamlessly with the Microsoft 365 ecosystem (Microsoft Forms, SharePoint Online, and Power Automate) to automate data ingestion and instant attendance reporting with zero manual friction, backed by **Governance-as-Code** JSON blueprints.

### Key Highlights & Compliance

1. **Multi-Standard Compliance Architecture**:
* **ISO 9001 (Clause 7.2 / 7.5)**: Establishes verifiable employee competence tracking and documented information control.
* **ISO 45001 (Demo-Form-043)**: Maintains auditable occupational health and safety training attendance logs.
* **HK PDPO**: Enforces data minimization, endpoint `localStorage` hygiene upon load, and transparent Personal Information Collection Statements (PICS).
* **Deterministic Rule-Based Automation**: Explicitly scoped as non-AI deterministic workflow automation, eliminating unnecessary algorithmic audit overhead.


2. **Zero Premium License Cost**:
* Leverages Microsoft Forms URL prefilling and dual-list event triggers to achieve end-to-end automation without requiring expensive Power Automate Premium HTTP connectors.


3. **Classroom-Resilient UX & Dual-Track Continuity (Plan B)**:
* Features locked corporate email suffixes (`@enterprise-demo.local`), custom training date selection, and 12-hour time pickers.
* Includes distraction-free fullscreen projection, popup-blocker fallback handling, and an on-site manual check-in modal (Plan B) alongside offline paper backup notices.


4. **Accurate Timezone & String Sanitization**:
* Converts cloud UTC timestamps into Hong Kong Local Time (`China Standard Time` / `yyyy-MM-dd HH:mm:ss`) and sanitizes URL-encoded characters automatically.



### Architecture Data Flow

```text
[ Projector Display (GitHub Pages / Intranet) ]
      │
      ├─► 1. Trainee Scans Dynamic QR Code
      │         └─► Microsoft Forms (Prefilled SessionID) ──► SharePoint (Demo_Training_Attendance)
      │
      └─► 2. Trainer Clicks "Send Report Now"
                └─► Microsoft Forms (Completion Trigger) ───► SharePoint (Demo_Training_Sessions)
                                                                      │
                                                                      ▼ (Event Trigger)
                                                      Power Automate Summary Flow
                                                      (OData Filter 'Title' + HKT Conversion)
                                                                      │
                                                                      ▼
                                                      Outlook Instant HTML Summary Email
                                                      (Dispatched to Trainer & HRD Archive)

```

### Repository Structure

```text
EnterpriseDemo-TAP/
├── index.html                                # Primary live projection kiosk frontend interface
├── app.js                                    # Dynamic QR rendering, session timer, URL encoding & triggers
├── config.js                                 # Organization config (sanitized Forms IDs, field keys & domain)
├── i18n.js                                   # Traditional Chinese / English bilingual dictionary
├── style.css                                 # Responsive kiosk & high-contrast fullscreen stylesheet
├── flows/
│   └── Flow_AttendanceSummaryDispatch.json   # Sanitized Power Automate workflow definition blueprint
├── schemas/
│   └── tap_sharepoint_schemas.json           # SharePoint list schemas, internal field names & RBAC specs
├── COMPLIANCE.md                             # Statutory scoping & information security architecture statement
├── PRIVACY_POLICY.md                         # Personal Information Collection Statement (PICS) template
└── LICENSE                                   # MIT License

```

### Quick Setup & Deployment

1. **Provision Lists & Forms**: Create the two SharePoint lists defined in `schemas/tap_sharepoint_schemas.json` along with the corresponding Microsoft Forms (Attendee Check-in & Completion Trigger).
2. **Configure Automation Flow**: Replicate the workflow logic in `flows/Flow_AttendanceSummaryDispatch.json` within Power Automate, ensuring the OData filter queries the underlying `Title` column.
3. **Update Frontend Config**: Populate `config.js` with your tenant's Forms URLs, field GUIDs, and corporate email domain, then host via GitHub Pages or open `index.html` directly on a local Intranet machine.

---

### 授權與免責聲明 / License & Disclaimer

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE). All tenant URLs, form identifiers, and corporate domains included in this repository are sanitized placeholders provided solely for enterprise architecture demonstration purposes.




