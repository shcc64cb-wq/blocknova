
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
    "خطا": "Error",

    "ورود یا ساخت حساب کاربری": "Login or create an account",
    "به BlockNova خوش آمدی": "Welcome to BlockNova",
    "در حال ساخت حساب...": "Creating your account...",
    "در حال ورود...": "Logging in...",
    "حساب ساخته شد؛ در حال انتقال...": "Account created; redirecting...",
    "از حساب خارج شدی.": "You have logged out.",
    "به‌زودی": "Coming Soon",
    "Java و Bedrock": "Java and Bedrock",
    "Java": "Java",
    "Bedrock": "Bedrock",
    "Paper": "Paper",
    "Fabric": "Fabric",
    "Spigot": "Spigot",
    "Vanilla": "Vanilla",
    "در انتظار پرداخت": "Awaiting Payment",
    "تومان": "Toman",
    "روز": "Days",
    "ساعت": "Hours"
  };

  const home = {
    fa: {
      eyebrow: "هاستینگ ماینکرافت، ساده و سریع",
      heroTitle: 'دنیای ماینکرافت خودت را <span class="glow">بساز و مدیریت کن</span>',
      heroText: "با BlockNova برای دوستانت سرور بساز؛ از نسخه Java و Bedrock پشتیبانی می‌کنیم. ساده، قابل مدیریت و با پلن‌های زمانی.",
      heroCta: "مشاهده پلن‌ها",
      heroMore: "چطور کار می‌کند؟",
      loginBtn: "ورود / ثبت‌نام",
      navFeatures: "امکانات",
      navPlans: "پلن‌ها",
      navHow: "نحوه کار",
      s1: "پشتیبانی از دو نسخه",
      s2: "هدف دسترس‌پذیری سرویس",
      simpleValue: "ساده",
      s3: "مدیریت از پنل کاربری",
      featuresTitle: "امکانات BlockNova",
      featuresSub: "همه‌چیز برای شروع یک دنیای چندنفره",
      f1t: "راه‌اندازی آسان",
      f1p: "فرایند ساخت سرور از داخل پنل، بدون نیاز به دانش فنی پیچیده.",
      f2t: "Java و Bedrock",
      f2p: "امکان ارائه سرورهای سازگار با بازیکنان کامپیوتر و موبایل.",
      f3t: "مدیریت مستقل",
      f3p: "هر مشتری دنیای جداگانه و تنظیمات مخصوص سرور خودش را دارد.",
      plansTitle: "پلن‌های اشتراکی",
      plansSub: "قیمت‌های نمونه؛ تا زمان آماده شدن زیرساخت، فروش فعال نیست.",
      p1tag: "شروع",
      p2tag: "پیشنهادی",
      p3tag: "بلندمدت",
      p1name: "یک‌روزه",
      p2name: "سه‌روزه",
      p3name: "هفت‌روزه",
      price1: "۵۰٬۰۰۰",
      price2: "۱۲۰٬۰۰۰",
      price3: "۲۵۰٬۰۰۰",
      currency1: "تومان / ۲۴ ساعت",
      currency2: "تومان / ۳ روز",
      currency3: "تومان / ۷ روز",
      p1list: "<li>یک سرور مستقل</li><li>نسخه Java یا Bedrock</li><li>مدیریت از پنل</li>",
      p2list: "<li>یک سرور مستقل</li><li>نسخه Java یا Bedrock</li><li>مدت بیشتر با قیمت کمتر</li>",
      p3list: "<li>یک سرور مستقل</li><li>نسخه Java یا Bedrock</li><li>تمدید اشتراک</li>",
      p1btn: "به‌زودی",
      p2btn: "به‌زودی",
      p3btn: "به‌زودی",
      priceNote: "توجه: این قیمت‌ها فقط نمونه اولیه‌اند. قبل از فروش باید هزینه منابع، ظرفیت هر میزبان، پشتیبانی و حاشیه سود محاسبه شود. هیچ پرداختی در این نسخه انجام نمی‌شود.",
      howTitle: "چطور کار می‌کند؟",
      howSub: "مسیر ساده مشتری در BlockNova",
      h1t: "ثبت‌نام",
      h1p: "کاربر حساب می‌سازد و وارد پنل می‌شود.",
      h2t: "انتخاب پلن",
      h2p: "مدت اشتراک و نسخه Java یا Bedrock را انتخاب می‌کند.",
      h3t: "دریافت سرور",
      h3p: "پس از فعال شدن پرداخت و زیرساخت، سرور ساخته و اطلاعات اتصال نمایش داده می‌شود.",
      rights: "تمام حقوق محفوظ است.",
      status: "نسخه نمایشی — سفارش و سرور هنوز فعال نیست"
    },
    en: {
      eyebrow: "Minecraft hosting, made simple",
      heroTitle: 'Build and manage your <span class="glow">own Minecraft world</span>',
      heroText: "Create a server for your friends with BlockNova. Java and Bedrock support, simple management and time-based plans.",
      heroCta: "View plans",
      heroMore: "How it works",
      loginBtn: "Login / Sign up",
      navFeatures: "Features",
      navPlans: "Plans",
      navHow: "How it works",
      s1: "Two editions supported",
      s2: "Service availability goal",
      simpleValue: "Simple",
      s3: "Manage from your panel",
      featuresTitle: "BlockNova Features",
      featuresSub: "Everything you need to start a multiplayer world",
      f1t: "Easy Setup",
      f1p: "Create a server from your panel without complicated technical steps.",
      f2t: "Java and Bedrock",
      f2p: "Options for players on computers and mobile devices.",
      f3t: "Independent Management",
      f3p: "Each customer gets a separate world and server settings.",
      plansTitle: "Subscription Plans",
      plansSub: "Sample prices. Sales are not active until infrastructure is ready.",
      p1tag: "Starter",
      p2tag: "Popular",
      p3tag: "Longer Term",
      p1name: "1 Day",
      p2name: "3 Days",
      p3name: "7 Days",
      price1: "50,000",
      price2: "120,000",
      price3: "250,000",
      currency1: "Toman / 24 hours",
      currency2: "Toman / 3 days",
      currency3: "Toman / 7 days",
      p1list: "<li>One separate server</li><li>Java or Bedrock</li><li>Panel management</li>",
      p2list: "<li>One separate server</li><li>Java or Bedrock</li><li>More time for a lower daily price</li>",
      p3list: "<li>One separate server</li><li>Java or Bedrock</li><li>Subscription renewal</li>",
      p1btn: "Coming Soon",
      p2btn: "Coming Soon",
      p3btn: "Coming Soon",
      priceNote: "Note: These are draft prices only. Resource costs, host capacity, support and margin must be calculated before sales. No payment is processed in this demo.",
      howTitle: "How It Works",
      howSub: "A simple customer journey on BlockNova",
      h1t: "Sign Up",
      h1p: "The user creates an account and opens the panel.",
      h2t: "Choose a Plan",
      h2p: "They choose a subscription period and Java or Bedrock.",
      h3t: "Get a Server",
      h3p: "Once payments and infrastructure are ready, the server is created and connection details are shown.",
      rights: "All rights reserved.",
      status: "Demo version — orders and servers are not active"
    }
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

  function translateHome(language) {
    const dictionary = home[language];
    if (!dictionary) return;

    Object.entries(dictionary).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (!element) return;

      if (id.endsWith("list") || id === "heroTitle") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
  }

  function translatePage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

    const title = document.querySelector("title");
    if (title) {
      title.textContent = language === "en"
        ? "BlockNova | Minecraft Hosting"
        : "BlockNova | میزبانی ماینکرافت";
    }

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest(
        "script,style,textarea,code,#blocknova-language-button"
      )) continue;

      node.nodeValue = translateText(node.nodeValue, language);
    }

    document.querySelectorAll(
      "input[placeholder],textarea[placeholder]"
    ).forEach(el => {
      el.placeholder = translateText(el.placeholder, language);
    });

    document.querySelectorAll("option").forEach(el => {
      el.textContent = translateText(el.textContent, language);
    });

    translateHome(language);

    const button = document.getElementById("blocknova-language-button");
    if (button) {
      button.textContent = language === "fa" ? "English" : "فارسی";
      button.style.left = language === "en" ? "12px" : "auto";
      button.style.right = language === "fa" ? "12px" : "auto";
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
      font-family:Arial,Tahoma,sans-serif;
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
      
