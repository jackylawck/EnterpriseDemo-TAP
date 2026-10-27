# 系統架構合規與法律適用性說明
# Compliance Architecture & Legal Applicability Statement

---

## 繁體中文 (Traditional Chinese)

### 一、 系統架構邊界與法規適用性裁量 (Statutory Scoping & Applicability)

為防止防禦過當及引入不必要的法律審查成本，專案小組對全球及本地各項法規進行了實質性排查（Substantive Assessment），結論如下：

1. **排除歐盟 AI 法案 (EU AI Act) 及 ISO/IEC 42001 (人工智能管理體系)**:
   * **事實裁決**：EnterpriseDemo-TAP（Enterprise Demo Training Attendance Portal）全系統僅利用 HTML5 投影中樞、Microsoft Forms 預填 API、SharePoint 結構化儲存清單及 Power Automate 原生工作流。
   * **法律定性**：系統不具備自主機器學習特徵，不存在模型推論、資料漂移或自適應黑箱算法，屬「確定性規則工作流」（Deterministic Rule-based Automation）。因此，**嚴格不適用 EU AI Act、網信辦演算法備案及 ISO 42001 AI 合規條款**。本文件明確排除上述標準，避免外部審計要求提供模型評估等無效負擔。
2. **排除歐盟通用數據保障條例 (EU GDPR)**:
   * **事實裁決**：EnterpriseDemo-TAP 僅收集通用企業展示 (Enterprise Demo Corp) 本地合約員工出勤數據，無歐盟公民跨境收集或行為監控行為（GDPR Article 3 領土管轄權不觸發）。
3. **切實適用與落實之體系清單**:
   * **香港法例第 486 章《個人資料（私隱）條例》(PDPO)**：落實 DPP 1 至 DPP 6 全生命週期管理。
   * **ISO 9001:2015 質量管理體系**：覆蓋 Clause 7.2（Competence 培訓資歷追蹤）及 Clause 7.5（Documented Information 成文資訊控制，Demo-Form-043）。
   * **ISO 45001:2018 職業健康安全管理體系**：覆蓋 Clause 7.2 及 7.3（安全專項訓練出席追蹤與合規審計鏈）。
   * **ISO/IEC 27001 / 27701**：依託微軟雲端租戶（Tenant-level）商用加密機制與權限最小化策略。

---

### 二、 系統資安架構與個人防禦性保障 (Information Security & Safeguards)

為保障推行主管免於任何技術越權或資安審計指控，系統實施全鏈路物理性資安隔離：

```text
[前端講者筆電 / GitHub Pages]
│
├─ 1. 僅保留 SessionID、地點、時段於暫時性本機記憶 (localStorage)
├─ 2. 徹底清空個人密碼及講者身份殘留 (零資料外洩風險)
│
▼ (HTTPS TLS 1.3 官方加密直連)
[Microsoft Forms] ──> [SharePoint: Demo_Training_Attendance] ──> [Power Automate 自動彙整]
▲                                                              │
│                                                              ▼ (系統直接派發)
(員工個人手機掃碼)                                             [HRD / 講師存檔信箱]
