# DiagnozerAI - דף נחיתה

דף נחיתה מקצועי עבור DiagnozerAI - מערכת אבחון תקלות רכב חכמה המבוססת על בינה מלאכותית.

## תכונות

- 🚗 דף נחיתה מקצועי עבור מומחה אבחון תקלות רכב
- 🤖 הצגת טכנולוגיית AI מתקדמת לאבחון תקלות
- 📱 עיצוב רספונסיבי מלא עם תמיכה במובייל
- ✨ אנימציות חלקות ואפקטים ויזואליים
- 💬 כפתור וואטסאפ קבוע עם אפקטים מהבהבים
- 🎯 אופטימיזציה למנועי חיפוש (SEO)
- 💰 הצגת מחירון מפורט עם 5 מסלולים
- ⭐ סקציית לקוחות ממליצים
- 🔧 מילות מפתח רחבות לאבחון תקלות רכב

## דרישות מערכת

- Node.js 18.0 או גרסה חדשה יותר
- npm או yarn

## התקנה

1. **שכפול הפרויקט:**
\`\`\`bash
git clone <repository-url>
cd diagnozer-ai-landing
\`\`\`

2. **התקנת תלויות:**
\`\`\`bash
npm install
# או
yarn install
\`\`\`

3. **הרצה במצב פיתוח:**
\`\`\`bash
npm run dev
# או
yarn dev
\`\`\`

4. **פתיחת הדפדפן:**
פתח את הדפדפן וגש לכתובת: `http://localhost:3000`

## בניית הפרויקט לפרודקשן

\`\`\`bash
# בניית הפרויקט
npm run build
# או
yarn build

# הרצה במצב פרודקשן
npm start
# או
yarn start
\`\`\`

## מבנה הפרויקט

\`\`\`
diagnozer-ai-landing/
├── app/
│   ├── layout.tsx          # Layout ראשי
│   ├── page.tsx           # דף הנחיתה הראשי
│   └── globals.css        # סגנונות גלובליים
├── components/
│   └── ui/                # רכיבי UI מ-shadcn
├── public/
│   └── *.jpg             # תמונות ונכסים
├── lib/
│   └── utils.ts          # פונקציות עזר
└── README.md
\`\`\`

## טכנולוגיות

- **Next.js 14** - React framework עם App Router
- **TypeScript** - טיפוסים סטטיים
- **Tailwind CSS** - עיצוב ואנימציות
- **shadcn/ui** - רכיבי UI מוכנים
- **Framer Motion** - אנימציות מתקדמות
- **Lucide React** - אייקונים

## התאמה אישית

### שינוי תמונות
החלף את התמונות בתיקיית `public/` עם התמונות שלך:
- `professional-automotive-expert-ariel-feldman-in-wo.jpg` - תמונת אריאל פלדמן
- `automotive-workshop-with-diagnostic-equipment-and-.jpg` - תמונת רקע

### עדכון פרטי קשר
ערך את הקובץ `app/page.tsx` ועדכן:
- מספר וואטסאפ בכפתור הקבוע
- כתובת אימייל
- פרטי קשר נוספים

### התאמת צבעים
הצבעים מוגדרים בקובץ `app/globals.css` תחת משתני CSS.

## פריסה (Deployment)

### Vercel (מומלץ)
1. העלה את הקוד ל-GitHub
2. התחבר ל-Vercel ובחר את הרפוזיטורי
3. Vercel יזהה אוטומטית שזה פרויקט Next.js ויפרוס אותו

### Netlify
\`\`\`bash
npm run build
\`\`\`
העלה את תיקיית `.next` ל-Netlify.

## תמיכה

לשאלות ותמיכה, צור קשר עם המפתח או פתח issue בגיטהאב.

## רישיון

פרויקט זה מיועד לשימוש עבור DiagnozerAI.
