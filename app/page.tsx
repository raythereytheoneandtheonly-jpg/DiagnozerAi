"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Clock,
  Shield,
  DollarSign,
  Headphones,
  Car,
  Wrench,
  Zap,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  Brain,
  Target,
  Lightbulb,
} from "lucide-react"

export default function DiagnozerAILanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [whyUsVisible, setWhyUsVisible] = useState(false)
  const [pricingVisible, setPricingVisible] = useState(false)
  const [smartDiagnosticVisible, setSmartDiagnosticVisible] = useState(false)
  const whyUsRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const smartDiagnosticRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === whyUsRef.current && entry.isIntersecting) {
            setWhyUsVisible(true)
          }
          if (entry.target === pricingRef.current && entry.isIntersecting) {
            setPricingVisible(true)
          }
          if (entry.target === smartDiagnosticRef.current && entry.isIntersecting) {
            setSmartDiagnosticVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (whyUsRef.current) observer.observe(whyUsRef.current)
    if (pricingRef.current) observer.observe(pricingRef.current)
    if (smartDiagnosticRef.current) observer.observe(smartDiagnosticRef.current)

    return () => observer.disconnect()
  }, [])

  const pricingPlans = [
    {
      title: "שימוש חד פעמי",
      price: "50",
      description: "אבחון תקלה אחת במאבחן החכם",
      features: ["אבחון AI מתקדם", "תוצאות מיידיות", "דיוק מעל 90%"],
    },
    {
      title: "10 שימושים",
      price: "400",
      description: "10 אבחונים במאבחן התקלות החכם",
      features: ["10 אבחונים מלאים", "חיסכון של 100 ₪", "תמיכה טכנית"],
    },
    {
      title: "ליווי מלא חד פעמי",
      price: "500",
      description: "אבחון מלא עם ליווי אישי",
      features: ["אבחון מקיף", "ליווי אישי", "המלצות תיקון"],
    },
    {
      title: "5 אבחונים מלאים",
      price: "2000",
      description: "5 אבחונים עם ליווי מלא",
      features: ["5 אבחונים מקיפים", "ליווי אישי מלא", "עדיפות בשירות"],
    },
  ]

  const testimonials = [
    {
      name: "דוד כהן",
      role: "בעל מוסך ברמת גן",
      content: "DiagnozerAI חסך לי שעות של עבודה ואלפי שקלים. הדיוק מדהים!",
      rating: 5,
    },
    {
      name: "מיכל לוי",
      role: "נהגת מקצועית",
      content: "זיהיתי תקלה מורכבת תוך דקות. השירות פשוט מהפכני.",
      rating: 5,
    },
    {
      name: "אבי רוזן",
      role: "מנהל צי רכבים",
      content: " החיסכון עלויות אבחון עצום. מומלץ בחום לכל מי שעובד עם רכבים.",
      rating: 5,
    },
  ]

  const carBrands = [
    "אבחון טויוטה",
    "אבחון הונדה",
    "אבחון ניסאן",
    "אבחון מזדה",
    "אבחון סובארו",
    "אבחון BMW",
    "אבחון מרצדס",
    "אבחון אאודי",
    "אבחון פולקסווגן",
    "אבחון סקודה",
    "אבחון פיאט",
    "אבחון רנו",
    "אבחון פיג'ו",
    "אבחון סיטרואן",
    "אבחון אופל",
    "Toyota Diagnostics",
    "Honda Diagnostics",
    "Nissan Diagnostics",
    "Mazda Diagnostics",
    "BMW Diagnostics",
    "Mercedes Diagnostics",
    "Audi Diagnostics",
    "Volkswagen Diagnostics",
  ]

  const troubleshootingKeywords = [
    "פתרון תקלות רכב",
    "איתור תקלה ברכב",
    "בעיות מנוע",
    "תקלות חשמל ברכב",
    "בעיות בלמים",
    "תקלות תיבת הילוכים",
    "בעיות מיזוג אוויר",
    "תקלות מערכת דלק",
    "בעיות מצבר רכב",
    "תקלות מערכת קירור",
    "בעיות בהגה כוח",
    "תקלות חיישנים",
    "פתרון נורות אזהרה",
    "איתור רעשים ברכב",
    "בעיות התנעה",
    "תקלות מערכת פליטה",
    "car troubleshooting",
    "engine problems",
    "electrical issues",
    "brake problems",
    "transmission issues",
    "AC problems",
    "fuel system issues",
    "battery problems",
    "cooling system issues",
    "steering problems",
    "sensor malfunctions",
    "warning lights",
    "strange noises",
    "starting problems",
    "exhaust system issues",
  ]

  const whyChooseUsItems = [
    {
      icon: Clock,
      title: "זמין 24/7",
      description: "השירות שלנו זמין בכל שעות היממה, 7 ימים בשבוע. קבל אבחון מיידי בכל זמן שתצטרך.",
    },
    {
      icon: Shield,
      title: "מאובטח המידע והתשלום",
      description: "כל המידע מוצפן ומאובטח ברמה הגבוהה ביותר. התשלומים מבוצעים בצורה בטוחה לחלוטין.",
    },
    {
      icon: CheckCircle,
      title: "אמין",
      description: "מבוסס על 20+ שנות ניסיון ובינה מלאכותית מתקדמת עם דיוק של מעל 90%.",
    },
    {
      icon: DollarSign,
      title: "חוסך אלפי שקלים",
      description: "חסוך עלויות אבחון יקרות ומנע תיקונים מיותרים עם אבחון מדויק מהפעם הראשונה.",
    },
    {
      icon: Headphones,
      title: "שירות מלא",
      description: "אנחנו כאן לעזור בכל שאלה. צוות התמיכה שלנו זמין לסייע לך בכל עת.",
    },
    {
      icon: Wrench,
      title: "פתרון מקיף",
      description: "לא רק אבחון - גם המלצות מדויקות לתיקון והערכת עלויות צפויות.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">DiagnozerAI</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">התחל עכשיו</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
        <div
          className={`container mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <Badge className="mb-6 bg-primary text-primary-foreground border-primary font-semibold">
            דיוק מעל 90% באבחון תקלות רכב
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            אבחון תקלות רכב מתקדם עם
            <span className="text-primary"> בינה מלאכותית</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            פתרון מהפכני לאבחון תקלות רכב המבוסס על 20+ שנות ניסיון ובינה מלאכותית מתקדמת. קבל אבחון מדויק תוך דקות
            וחסוך אלפי שקלים.
          </p>

          {/* Ariel's Photo Placeholder */}
          <div className="mb-8">
            <img
              src="/professional-automotive-expert-ariel-feldman-in-wo.jpg"
              alt="אריאל פלדמן - מומחה אבחון תקלות רכב"
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary/20 shadow-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              נסה את המאבחן החכם
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              למד עוד על השירות
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">זמין 24/7</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">מאובטח לחלוטין</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">דיוק מעל 90%</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">חיסכון עצום</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ariel Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">קצת עליי - אריאל פלדמן</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                אני אריאל פלדמן, מכונאי רכב ומאבחן תקלות מנוסה עם תשוקה אמיתית למקצוע. במשך למעלה מ-20 שנה אני עובד
                בתחום הרכב, מייעץ לעסקים וחברות, ומלמד אבחון תקלות במכללת שמטוב.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                לאחר שנות ניסיון רבות בשטח, פיתחתי כלי מתקדם לאבחון תקלות באמצעות בינה מלאכותית שנותן תוצאות ברמת וודאות
                של מעל 90 אחוז. הניסיון האישי והעבודה היומיומית אפשרו לי להגיע למוצר שבאמת נותן תוצאות ברגע האמת כשצריך
                אבחון מדויק לתקלה ברכב.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>20+ שנות ניסיון</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>מרצה במכללת שמטוב</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>יועץ לעסקים</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>מפתח טכנולוגיית AI</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/automotive-workshop-with-diagnostic-equipment-and-.jpg"
                alt="בית מלאכה לאבחון רכב"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Diagnostic Section */}
      <section ref={smartDiagnosticRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">המאבחן החכם - טכנולוגיה מתקדמת</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              המאבחן החכם הוא למעשה תוצר של המון ניסויים בעבודה עם מודלי בינה מלאכותית באבחון תקלות הרכב
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              className={`text-center hover:shadow-lg transition-all duration-700 ${
                smartDiagnosticVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: smartDiagnosticVisible ? "0ms" : "0ms" }}
            >
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>בינה מלאכותית מתקדמת</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  כיום בעידן ה-AI אנשים ממהרים לשאול ולאבחן באמצעות שאלות פשוטות. הכלי שלנו פונה למודלים הנכונים בצורה
                  נכונה ומדויקת
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center hover:shadow-lg transition-all duration-700 ${
                smartDiagnosticVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: smartDiagnosticVisible ? "200ms" : "0ms" }}
            >
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>דיוק גבוה יותר</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  שתניב תוצאה בסבירות גבוהה יותר מאשר שאלות כלליות. המערכת מבוססת על 20+ שנות ניסיון מעשי בתחום
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center hover:shadow-lg transition-all duration-700 ${
                smartDiagnosticVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: smartDiagnosticVisible ? "400ms" : "0ms" }}
            >
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>פתרון מותאם</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  לא רק זיהוי התקלה - גם המלצות מדויקות לפתרון, הערכת עלויות ומניעת תיקונים מיותרים
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-primary mb-4">נסו אותנו! 😊</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              התחל אבחון חכם עכשיו
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">למה אנשים בוחרים לעבוד עם הכלי החכם שלנו?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-700 ${
                    whyUsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: whyUsVisible ? `${index * 150}ms` : "0ms",
                  }}
                >
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">אנחנו מציעים 5 מסלולים</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 overflow-x-hidden">
      {pricingPlans.map((plan, index) => (
        <Card
          key={index}
          className={`text-center hover:shadow-lg transition-all duration-700 hover:scale-105 ${
            pricingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: pricingVisible ? `${index * 200}ms` : "0ms",
          }}
        >
                <CardHeader>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">₪{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">בחר מסלול</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className={`text-center max-w-md mx-auto transition-all duration-700 ${
              pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: pricingVisible ? "800ms" : "0ms" }}
          >
            <CardHeader>
              <CardTitle className="text-xl">שירות ללא הגבלה</CardTitle>
              <CardDescription>לקבלת הצעת מחיר אישית</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                צור קשר עם נציג
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">לקוחות ממליצים</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">נתקלת בבעיית אבחון רכב ללא פתרון אמיתי?</h2>
          <p className="text-xl mb-8 opacity-90">נסה אותנו עם DiagnozerAI וקבל הכוונה כמעט וודאית לתקלת הרכב שלך</p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            התחל אבחון עכשיו
          </Button>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">אבחון תקלות לכל סוגי הרכבים</h3>
            <p className="text-muted-foreground">המערכת שלנו תומכת באבחון תקלות עבור כל יצרני הרכב הפופולריים</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-center mb-8">
            {carBrands.map((brand, index) => (
              <div key={index} className="p-2 bg-card rounded border hover:bg-accent/50 transition-colors">
                {brand}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-4">פתרון תקלות ובעיות נפוצות ברכב</h4>
            <p className="text-muted-foreground mb-6">
              המערכת שלנו מסוגלת לאבחן ולפתור מגוון רחב של תקלות ובעיות ברכב - מבעיות מנוע ועד תקלות חשמל
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-center mb-8">
            {troubleshootingKeywords.map((keyword, index) => (
              <div key={index} className="p-2 bg-card rounded border hover:bg-accent/50 transition-colors text-xs">
                {keyword}
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>
              מילות מפתח: תקלה ברכב, אבחון תקלות ברכב, תקלה, אבחון רכב, בדיקת רכב, מכונאי רכב, תיקון רכב, בעיות רכב,
              פתרון תקלות רכב, איתור תקלה ברכב, אבחון מתקדם, בינה מלאכותית לרכב, מאבחן חכם, אבחון AI, טכנולוגיית אבחון,
              פתרון בעיות רכב, מומחה אבחון רכב, אריאל פלדמן, diagnozer AI, car diagnostics, vehicle diagnostics,
              automotive troubleshooting, car repair, vehicle maintenance, AI car diagnosis, automotive AI, car problem
              solver, smart diagnostics, automotive expert
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">DiagnozerAI</span>
              </div>
              <p className="text-muted-foreground text-sm">פתרון AI מתקדם לאבחון תקלות רכב עם דיוק מעל 90%</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">שירותים</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>אבחון תקלות AI</li>
                <li>ליווי אישי</li>
                <li>ייעוץ מקצועי</li>
                <li>תמיכה טכנית</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">על החברה</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>אודות אריאל פלדמן</li>
                <li>הטכנולוגיה שלנו</li>
                <li>לקוחות ממליצים</li>
                <li>צור קשר</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">יצירת קשר</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@diagnozer.ai</li>
                <li>זמין 24/7</li>
                <li>תמיכה מקצועית</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DiagnozerAI. כל הזכויות שמורות. | פותח על ידי אריאל פלדמן</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>

          <Button
            size="lg"
            className="relative rounded-full bg-green-500 hover:bg-green-600 shadow-xl transition-all duration-300 hover:scale-110 px-6 py-3 flex items-center gap-3"
            onClick={() => window.open("https://wa.me/972501234567", "_blank")}
          >
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="text-white font-medium whitespace-nowrap">לצ'אט עם נציג</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
