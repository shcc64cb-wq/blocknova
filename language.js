
(function () {
  const KEY = "blocknova-language";

  const translations = {
    "ورود": "Login",
    "ورود به حساب": "Log In",
    "ساخت حساب": "Create Account",
    "خروج از حساب": "Log Out",
    "ایمیل": "Email",
    "رمز عبور": "Password",
    "پنل کاربری": "User Dashboard",
    "پنل مدیریت": "Admin Panel",
    "مدیریت سرور": "Server Management",
    "مدیریت کاربران": "User Management",
    "مدیریت سفارش‌ها": "Order Management",
    "مدیریت سفارشها": "Order Management",
    "خرید اشتراک": "Buy Subscription",
    "سفارش‌های من": "My Orders",
    "سفارشهای من": "My Orders",
    "سرورهای من": "My Servers",
    "ساخت سرور": "Create Server",
    "ساخت سرور آزمایشی": "Create Test Server",
    "تنظیمات پنل": "Panel Settings",
    "صفحه اصلی": "Home",
    "بازگشت": "Back",
    "ذخیره": "Save",
    "حذف": "Delete",
    "ویرایش": "Edit",
    "لغو": "Cancel",
    "تأیید": "Confirm",
    "در انتظار": "Waiting",
    "فعال": "Active",
    "متوقف‌شده": "Stopped",
    "در انتظار پرداخت": "Awaiting Payment",
    "پرداخت‌شده": "Paid",
    "نام سرور": "Server Name",
    "نوع سرور": "Server Type",
    "نرم‌افزار": "Software",
    "نسخه بازی": "Game Version",
    "حافظه RAM": "RAM",
    "گیگابایت": "GB",
    "یک روزه": "1 Day",
    "سه روزه": "3 Days",
    "هفت روزه": "7 Days",
    "یک ماهه": "1 Month",
    "سه ماهه": "3 Months",
    "در حال بارگذاری...": "Loading...",
    "عملیات موفق بود": "Operation successful",
    "خطا": "Error"
  };

  const reverse = Object.fromEntries(
    Object.entries(translations).map(([fa, en]) => [en, fa])
  );

  function getLanguage() {
    return localStorage.getItem(KEY) === "en" ? "en" : "fa";
  }

  function translateText(value, language) {
    const dict = language === "en" ? translations : reverse;
    const trimmed = value.trim();

    if (!dict[trimmed]) return value;

    return value.replace(trimmed, dict[trimmed]);
  }

  function translatePage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest("script,style,textarea,code,#blocknova-language-button")) {
        continue;
      }
      node.nodeValue = translateText(node.nodeValue, language);
    }

    document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el => {
      el.placeholder = translateText(el.placeholder, language);
    });

    document.querySelectorAll("option").forEach(el => {
      el.textContent = translateText(el.textContent, language);
    });

    const button = document.getElementById("blocknova-language-button");
    if (button) {
      button.textContent = language === "fa" ? "English" : "فارسی";
    }
  }

  function addLanguageButton() {
    if (document.getElementById("blocknova-language-button")) return;

    const button = document.createElement("button");
    button.id = "blocknova-language-button";
    button.type = "button";
    button.textContent = getLanguage() === "fa" ? "English" : "فارسی";

    button.style.cssText = `
      position:fixed;
      top:12px;
      right:12px;
      z-index:99999;
      padding:10px 16px;
      border:1px solid #8b42d6;
      border-radius:10px;
      background:#302344;
      color:white;
      font-size:14px;
      font-weight:bold;
      cursor:pointer;
    `;

    button.addEventListener("click", () => {
      const next = getLanguage() === "fa" ? "en" : "fa";
      localStorage.setItem(KEY, next);
      translatePage(next);
    });

    document.body.appendChild(button);
  }

  function start() {
    addLanguageButton();
    translatePage(getLanguage());

    const observer = new MutationObserver(() => {
      translatePage(getLanguage());
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
                                                    
