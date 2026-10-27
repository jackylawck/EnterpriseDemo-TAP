/**
 * EnterpriseDemo-TAP (Enterprise Demo Training Attendance Portal)
 * 現場簽到投影中樞 - 運行時核心配置 (開源展示版)
 */
const APP_CONFIG = {
  // 1. 公司與合規基底設定
  companyName: "通用企業展示 (Enterprise Demo Corp)",
  department: "人力資源組 (HRD)",
  hrAuditEmail: "hrd@enterprise-demo.local",
  emailDomain: "@enterprise-demo.local",
  documentCode: "Demo-Form-043",

  // 2. Microsoft Forms 學員簽到表 (Demo-Form-043 簽到表)
  formsBaseUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=demo_attendance_form_id_1234567890abcdef",
  sessionFieldKey: "demo_field_session_id", // 第 4 題：場次編號
  fields: {
    trainingTitle: "demo_field_training_title", // 第 5 題：課程名稱
    trainerName: "demo_field_trainer_name"      // 第 6 題：主講者姓名
  },

  // 3. Microsoft Forms 免費即時發信觸發表單 (TAP_發送電郵觸發表單)
  triggerFormsUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=demo_trigger_form_id_0987654321fedcba",
  triggerFields: {
    sessionId: "demo_trigger_session_id",               // 1. SessionID
    trainingTitle: "demo_trigger_training_title",       // 2. TrainingTitle
    trainerName: "demo_trigger_trainer_name",           // 3. TrainerName
    trainerEmail: "demo_trigger_trainer_email",         // 4. TrainerEmail
    trainingLocation: "demo_trigger_training_location", // 5. TrainingLocation
    trainingDate: "demo_trigger_training_date",         // 6. TrainingDate
    trainingTime: "demo_trigger_training_time"          // 7. TrainingTime
  },

  // 4. Plan B 備用通道設定
  fallbackFormsUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=demo_attendance_form_id_1234567890abcdef",

  // 5. 現場控場配額
  sessionRules: {
    maxAttendees: 100,
    sessionTimeoutHours: 8,
    allowPlanBFallback: true,
    autoFullscreenFallback: true
  }
};

// 保持與舊版/外部模組相容
const CONFIG = {
  ORG_INFO: {
    COMPANY_NAME: APP_CONFIG.companyName,
    DEPARTMENT: APP_CONFIG.department,
    HR_AUDIT_EMAIL: APP_CONFIG.hrAuditEmail,
    DOCUMENT_CODE: APP_CONFIG.documentCode
  },
  FORMS: {
    BASE_URL: APP_CONFIG.formsBaseUrl,
    TRIGGER_URL: APP_CONFIG.triggerFormsUrl,
    SESSION_FIELD_KEY: APP_CONFIG.sessionFieldKey,
    FIELDS: APP_CONFIG.fields
  },
  TRIGGER_FIELDS: APP_CONFIG.triggerFields
};

// 避免全局污染與物件意外篡改
Object.freeze(APP_CONFIG);
Object.freeze(APP_CONFIG.fields);
Object.freeze(APP_CONFIG.triggerFields);
Object.freeze(APP_CONFIG.sessionRules);
Object.freeze(CONFIG.ORG_INFO);
Object.freeze(CONFIG.FORMS);
Object.freeze(CONFIG.TRIGGER_FIELDS);
