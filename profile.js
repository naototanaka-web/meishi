/*
 * デジタル名刺のデータ
 * Claude Code が CLAUDE.md の手順に沿ってこのファイルを書き換えます。
 * 手で直す場合も、左側の項目名は変えないでください。
 * 値が "" の項目は名刺に表示されません。改行は \n で書きます。
 */
window.PROFILE = {
  __TEMPLATE__: false, // 作成が終わると false（true の間は「サンプル表示中」の注意が出ます）

  // 1) 基本情報（title 以外は必須）
  basic: {
    name: "田中 尚人",            // 姓と名の間に空白を1つ
    company: "Repro株式会社",
    address: "東京都渋谷区代々木1-36-4 全理連ビル 4F",
    department: "Repro MA & Solutions Div. Sales Team",
    title: "Team Manager",         // 役職（任意）
    email: "naoto.tanaka@repro.io",
    phone: "070-1047-5840"
  },

  // 2) 起動時（約1秒）のロゴ: "company"（会社ロゴ）または "app"（アプリロゴ）
  splash: { logo: "company" },

  // 3) ひとこと（任意）：名前の下に大きく出る1〜2文。空欄なら「名刺を受け取っていただき、ありがとうございます。」
  welcome: "ありがとうございます！よろしくお願いいたします！",

  // 4) SNS（URLで保存。使わないものは ""）
  sns: {
    sansan: "https://ap.sansan.com/v/virtual-cards/cb49a0110d364c0db66cfdead293ff60/",
    instagram: "",
    facebook: "https://www.facebook.com/naoto.tanaka3",
    x: "",
    linkedin: "",
    whatsapp: "",           // 例: "https://wa.me/819012345678"
    others: [
      // { label: "note", url: "https://note.com/xxxx" }
    ]
  },

  // 5) 自己紹介（300文字程度）：ひとことの下に表示
  intro: "Reproの田中です！よろしくお願いいたします！",

  // 6) 付帯情報（すべて任意。空欄の項目は表示されません）
  extra: {
    age: "41",         // 数字だけなら「歳」を付けて表示
    birthday: "1985年9月8日",    // 例: "4月1日"
    hometown: "埼玉県浦和市",
    hobbies: "お酒、サッカー観戦、アメフト観戦"
  },

  // 7) 写真（assets/ に置いたファイル。"" ならイニシャルを表示）
  photo: "assets/naoto_top (1).webp",

  // 8) 背景色（#RRGGBB）。文字色は自動で読みやすい色になります
  theme: { background: "#4A2C40" }
};
