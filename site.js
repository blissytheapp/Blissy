(() => {
  const STORAGE_KEY = "blissy-language";
  const locales = ["zh-Hant", "zh-Hans", "en"];

  const translations = {
    "zh-Hant": {
      languageSelector: "語言",
      navSupport: "支援",
      navPrivacy: "隱私權政策",
      homeLead: "Blissy 的支援與隱私資訊。",
      homeSupportTitle: "支援",
      homeSupportBody: "取得協助、回報問題或聯絡 Blissy 團隊。",
      homePrivacyTitle: "隱私權政策",
      homePrivacyBody: "了解 Blissy 如何處理 App 資料與選用服務。",
      contactLabel: "聯絡信箱",
      supportPageTitle: "Blissy 支援",
      supportLead: "Blissy 是為 Apple TV 打造的影音與彈幕播放器。",
      supportContactTitle: "聯絡我們",
      supportEmailLabel: "Email",
      supportHelpTitle: "需要協助？",
      supportHelpBody: "回報問題時，建議附上 Apple TV 型號、tvOS 版本、Blissy 版本、內容名稱與可重現步驟。若問題與播放相關，也請描述畫質、直播或影片類型，以及問題發生前的操作。",
      privacyPageTitle: "Blissy 隱私權政策",
      privacyEffectiveDate: "生效日期：2026-09-24",
      privacyIntro: "Blissy 重視使用者隱私。本政策說明 Blissy 在 Apple TV 上為提供功能而處理的資料。",
      privacyDeviceTitle: "裝置上的資料",
      privacyDeviceBody: "Blissy 會在裝置本機保存必要的 App 設定、播放狀態、歷史紀錄、快取資訊與登入工作階段資料。部分敏感憑證與使用者提供的 API Key 會使用 Apple Keychain 儲存。",
      privacyThirdPartyTitle: "第三方內容服務",
      privacyThirdPartyBody: "當使用者瀏覽、登入或操作第三方內容服務時，Blissy 會依使用者要求直接與該服務通訊，以取得內容或帳號資料並執行相關操作。第三方服務可能依其自身的隱私權政策處理帳號資訊、裝置或網路資訊、搜尋、觀看或互動紀錄。",
      privacyTranslateTitle: "即時翻譯",
      privacyTranslateBody: "即時翻譯為選用功能。使用者需自行提供 Gemini API Key，該 Key 儲存在裝置的 Apple Keychain。只有在使用者主動啟用即時翻譯時，產生翻譯所需的音訊資料才會傳送至 Google Gemini。",
      privacyNetworkTitle: "區域網路",
      privacyNetworkBody: "Blissy 可能要求區域網路權限，用於 Blissy Remote、本機同步及相關媒體或控制功能。區域網路權限不會用於廣告追蹤。",
      privacyAnalyticsTitle: "分析、廣告與追蹤",
      privacyAnalyticsBody: "目前 Blissy 未整合第三方廣告 SDK 或跨 App／網站追蹤 SDK。Blissy 開發者不會出售使用者個人資料，也不會使用 App 資料進行跨服務廣告追蹤。",
      privacyRetentionTitle: "保存與刪除",
      privacyRetentionBody: "本機資料會保存在 Apple TV 上，直到使用者清除相關紀錄、移除帳號、重設資料或刪除 App。由第三方內容服務保存的資料，依該服務的帳號設定與隱私政策處理。",
      privacyContactTitle: "聯絡方式"
    },
    "zh-Hans": {
      languageSelector: "语言",
      navSupport: "支持",
      navPrivacy: "隐私政策",
      homeLead: "Blissy 的支持与隐私信息。",
      homeSupportTitle: "支持",
      homeSupportBody: "获取帮助、反馈问题或联系 Blissy 团队。",
      homePrivacyTitle: "隐私政策",
      homePrivacyBody: "了解 Blissy 如何处理 App 数据与可选服务。",
      contactLabel: "联系邮箱",
      supportPageTitle: "Blissy 支持",
      supportLead: "Blissy 是为 Apple TV 打造的影音与弹幕播放器。",
      supportContactTitle: "联系我们",
      supportEmailLabel: "Email",
      supportHelpTitle: "需要帮助？",
      supportHelpBody: "反馈问题时，建议附上 Apple TV 型号、tvOS 版本、Blissy 版本、内容名称和可复现步骤。如果问题与播放有关，也请说明画质、直播或视频类型，以及问题发生前的操作。",
      privacyPageTitle: "Blissy 隐私政策",
      privacyEffectiveDate: "生效日期：2026-09-24",
      privacyIntro: "Blissy 重视用户隐私。本政策说明 Blissy 在 Apple TV 上为提供功能而处理的数据。",
      privacyDeviceTitle: "设备上的数据",
      privacyDeviceBody: "Blissy 会在设备本地保存必要的 App 设置、播放状态、历史记录、缓存信息与登录会话数据。部分敏感凭证与用户提供的 API Key 会使用 Apple Keychain 保存。",
      privacyThirdPartyTitle: "第三方内容服务",
      privacyThirdPartyBody: "当用户浏览、登录或操作第三方内容服务时，Blissy 会根据用户要求直接与该服务通信，以获取内容或账号数据并执行相关操作。第三方服务可能根据其自身隐私政策处理账号信息、设备或网络信息、搜索、观看或互动记录。",
      privacyTranslateTitle: "实时翻译",
      privacyTranslateBody: "实时翻译为可选功能。用户需自行提供 Gemini API Key，该 Key 保存在设备的 Apple Keychain 中。只有在用户主动开启实时翻译时，生成翻译所需的音频数据才会发送至 Google Gemini。",
      privacyNetworkTitle: "局域网",
      privacyNetworkBody: "Blissy 可能请求局域网权限，用于 Blissy Remote、本地同步及相关媒体或控制功能。局域网权限不会用于广告跟踪。",
      privacyAnalyticsTitle: "分析、广告与跟踪",
      privacyAnalyticsBody: "目前 Blissy 未集成第三方广告 SDK 或跨 App／网站跟踪 SDK。Blissy 开发者不会出售用户个人数据，也不会使用 App 数据进行跨服务广告跟踪。",
      privacyRetentionTitle: "保存与删除",
      privacyRetentionBody: "本地数据会保存在 Apple TV 上，直到用户清除相关记录、移除账号、重置数据或删除 App。由第三方内容服务保存的数据，按照该服务的账号设置与隐私政策处理。",
      privacyContactTitle: "联系方式"
    },
    "en": {
      languageSelector: "Language",
      navSupport: "Support",
      navPrivacy: "Privacy Policy",
      homeLead: "Support and privacy information for Blissy.",
      homeSupportTitle: "Support",
      homeSupportBody: "Get help, report a problem, or contact the Blissy team.",
      homePrivacyTitle: "Privacy Policy",
      homePrivacyBody: "Learn how Blissy handles app data and optional services.",
      contactLabel: "Contact",
      supportPageTitle: "Blissy Support",
      supportLead: "Blissy is a video and danmaku player designed for Apple TV.",
      supportContactTitle: "Contact",
      supportEmailLabel: "Email",
      supportHelpTitle: "Need help?",
      supportHelpBody: "When reporting an issue, please include your Apple TV model, tvOS version, Blissy version, content title, and steps to reproduce it. For playback issues, also describe the quality setting, whether the content is live or on demand, and what you were doing immediately before the issue occurred.",
      privacyPageTitle: "Blissy Privacy Policy",
      privacyEffectiveDate: "Effective date: September 24, 2026",
      privacyIntro: "Blissy respects user privacy. This policy explains the data Blissy processes on Apple TV to provide its features.",
      privacyDeviceTitle: "Data stored on your device",
      privacyDeviceBody: "Blissy stores necessary app preferences, playback state, history, cache information, and sign-in session data locally on the device. Some sensitive credentials and user-provided API keys are stored using Apple Keychain.",
      privacyThirdPartyTitle: "Third-party content services",
      privacyThirdPartyBody: "When a user browses, signs in to, or interacts with a third-party content service, Blissy communicates directly with that service as requested by the user to retrieve content or account data and perform related actions. Those services may process account information, device or network information, search activity, viewing activity, or interaction records under their own privacy policies.",
      privacyTranslateTitle: "Live Translate",
      privacyTranslateBody: "Live Translate is optional. The user provides a Gemini API key, which is stored in Apple Keychain on the device. Audio required to generate a translation is sent to Google Gemini only while the user actively enables Live Translate.",
      privacyNetworkTitle: "Local network",
      privacyNetworkBody: "Blissy may request local-network access for Blissy Remote, local synchronization, and related media or control features. Local-network access is not used for advertising tracking.",
      privacyAnalyticsTitle: "Analytics, advertising, and tracking",
      privacyAnalyticsBody: "The current Blissy app does not integrate third-party advertising SDKs or cross-app/cross-site tracking SDKs. The Blissy developer does not sell users' personal data or use app data for cross-service advertising tracking.",
      privacyRetentionTitle: "Retention and deletion",
      privacyRetentionBody: "Local data remains on Apple TV until the user clears relevant records, removes an account, resets app data, or deletes the app. Data retained by third-party content services is handled according to those services' account settings and privacy policies.",
      privacyContactTitle: "Contact"
    }
  };

  const referenceKeys = Object.keys(translations["zh-Hant"]).sort();
  for (const locale of locales) {
    const localeKeys = Object.keys(translations[locale]).sort();
    if (localeKeys.length !== referenceKeys.length || localeKeys.some((key, index) => key !== referenceKeys[index])) {
      throw new Error(`Blissy localization keys are inconsistent for ${locale}`);
    }
  }

  function normalize(value) {
    const v = (value || "").toLowerCase();
    if (v.startsWith("zh-hant") || v.startsWith("zh-tw") || v.startsWith("zh-hk") || v.startsWith("zh-mo")) return "zh-Hant";
    if (v.startsWith("zh-hans") || v.startsWith("zh-cn") || v.startsWith("zh-sg") || v === "zh") return "zh-Hans";
    if (v.startsWith("zh")) return "zh-Hans";
    return "en";
  }

  function detectLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (locales.includes(saved)) return saved;
    } catch (_) {}
    const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const candidate of candidates) {
      const normalized = normalize(candidate);
      if (normalized) return normalized;
    }
    return "en";
  }

  function applyLanguage(locale, persist = false) {
    const chosen = locales.includes(locale) ? locale : "en";
    const dict = translations[chosen];

    document.documentElement.lang = chosen;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (!Object.prototype.hasOwnProperty.call(dict, key)) throw new Error(`Missing localization key: ${key}`);
      node.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      if (!Object.prototype.hasOwnProperty.call(dict, key)) throw new Error(`Missing localization key: ${key}`);
      node.setAttribute("aria-label", dict[key]);
    });
    const selector = document.getElementById("language-selector");
    if (selector) selector.value = chosen;

    const page = document.body.dataset.page;
    if (page === "support") document.title = dict.supportPageTitle;
    else if (page === "privacy") document.title = dict.privacyPageTitle;
    else document.title = "Blissy";

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, chosen); } catch (_) {}
    }
  }

  const initial = detectLanguage();
  applyLanguage(initial, false);

  const selector = document.getElementById("language-selector");
  if (selector) selector.addEventListener("change", () => applyLanguage(selector.value, true));
})();
