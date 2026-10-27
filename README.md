已經為你將這份 `README.md` 依照「合規脫殼：統一 Demo 化」的 SOP 進行了深度清洗。所有的真實企業名稱、內部表單編號、電郵網域以及資料庫名稱，皆已替換為通用且專業的示範版本。

以下是清洗後的完整 `README.md` 內容，你可以直接複製覆蓋：

```markdown
# EnterpriseDemo-TAP: Enterprise Demo Training Attendance Portal
### 企業示範培訓簽到平台 (現場投影中樞與自動化架構)

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://jackylawck.github.io/EnterpriseDemo-TAP/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Compliance](https://img.shields.io/badge/Compliance-ISO%209001%20%7C%20ISO%2045001-green.svg)](COMPLIANCE.md)

[English](#english) | [繁體中文](#繁體中文)

---

## 繁體中文

### 項目簡介
**EnterpriseDemo-TAP (Enterprise Demo Training Attendance Portal)** 是專為通用企業展示打造的輕量化培訓出勤管理系統。本系統採用無伺服器（Serverless）架構，前端透過 GitHub Pages 進行現場課堂投影與動態 QR Code 生成，後端深度整合 Microsoft 365 生態系（Microsoft Forms、SharePoint 及 Power Automate），實現「零人手干預、秒級出勤入庫、即時報表生成」。

### 核心合規與架構特色
1. **合規防禦架構**：
   - **ISO 9001 (Clause 7.2 / 7.5)**：落實能力培訓紀錄與檔案控制。
   - **ISO 45001 (Demo-Form-043)**：滿足內部安全培訓法定核簽標準。
   - **香港個人資料（私隱）條例 (PDPO)**：落實最小化收集原則與即時個資免責聲明。
2. **免購買進階授權（Zero Premium License）**：
   - 透過「微軟 Forms 預填技術（URL Prefill）」搭配雙向觸發，不依賴昂貴的 Power Automate Premium HTTP Webhook 授權即可實現端到端自動化。
3. **高彈性課堂控制**：
   - 支援講師電郵後綴鎖定（`@enterprise-demo.local`）、自選自定義培訓日期、自適應 12 小時制時段選擇器。
   - 具備全螢幕抗干擾模式、網絡異常現場手動補簽機制（Plan B）。
4. **精準時區處理**：
   - 簽到記錄精確轉換為香港時間（`China Standard Time`），呈現標準時分秒。

### 業務流程圖
```text
[ 講師投影大螢幕 ]
      │
      ├─► 1. 學員掃描 QR Code ──► MS Forms (簽到表) ──► SharePoint (Demo_Training_Attendance)
      │
      └─► 2. 點擊「✉️ 立即發信」 ──► 預填觸發表單 ──► SharePoint (Demo_Training_Sessions)
                                                              │
                                                              ▼
                                              Power Automate 完課發信流程
                                                              │
                                                              ▼
                                              Outlook 即時派發出席匯總郵件 (至 HRD 及主講者)

```

### 系統檔案結構

* `index.html` - 現場投影大螢幕主要介面
* `app.js` - 前端動態 QR Code 渲染、計時器、參數編碼與發信邏輯
* `config.js` - 組織設定檔（Forms GUID、網址對應與電郵網域）
* `i18n.js` - 繁中／英文雙語切換字典
* `style.css` - 響應式現代投影樣式
* `COMPLIANCE.md` - 法律合規與管理體系防禦性展示文件
* `PRIVACY_POLICY.md` - 員工私隱與個人資料收集聲明範例

---

## English

### Project Overview

**EnterpriseDemo-TAP (Enterprise Demo Training Attendance Portal)** is a lightweight, pragmatic attendance tracking system designed for enterprise demonstrations. Utilizing a serverless architecture, the portal serves dynamic QR codes on GitHub Pages for live classroom projection and leverages the Microsoft 365 ecosystem (Forms, SharePoint Online, and Power Automate) to automate data ingestion and immediate reporting with zero manual friction.

### Key Highlights & Compliance

1. **Standards Compliance**:
* **ISO 9001 (Clause 7.2 / 7.5)**: Verifiable competency training records and document control.
* **ISO 45001 (Demo-Form-043)**: Auditable occupational health and safety training logs.
* **HK PDPO**: Enforces data minimization and clear on-screen Personal Information Collection (PICS) notices.


2. **Cost-Effective Automation**:
* Achieves end-to-end event-driven workflow without requiring expensive Power Automate Premium licenses by using smart Forms URL prefilling.


3. **Classroom Friendly UX**:
* Locked corporate email suffix (`@enterprise-demo.local`), flexible date and 12-hour time pickers, popup-blocker resilience, and on-site manual fallback (Plan B).


4. **Accurate Timestamping**:
* Formats submission records into Hong Kong Local Time (`China Standard Time` / `HH:mm:ss`).



### Architecture Data Flow

```text
[ Projector Display ]
      │
      ├─► 1. Trainee Scans QR ──► MS Forms ──► SharePoint (Demo_Training_Attendance)
      │
      └─► 2. Click "Send Mail" ──► Prefilled Trigger Form ──► SharePoint (Demo_Training_Sessions)
                                                                    │
                                                                    ▼
                                                          Power Automate Flow
                                                                    │
                                                                    ▼
                                                          Instant Attendance Summary Email

```

---

### 授權 / License

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE).




