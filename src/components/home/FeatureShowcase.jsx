import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Smartphone, Search, Palette, Download, Code, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureShowcase() {
  const features = [
    {
      icon: Zap,
      title: "יצירה במהירות הברק",
      description: "הבינה המלאכותית יוצרת את האתר השלם שלכם תוך פחות מ-2 דקות עם תוכן ועיצוב מקצועי.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "מותאם לקידום",
      description: "שיטות עבודה מובנות לקידום באינטרנט מבטיחות שהעסק שלכם יימצא על ידי לקוחות פוטנציאליים.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "רספונסיבי למובייל",
      description: "כל אתר עובד בצורה מושלמת בטלפונים, טאבלטים ומחשבים עם אופטימיזציה אוטומטית.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "מיתוג מותאם אישית",
      description: "הבינה המלאכותית יוצרת ערכות צבעים וטקסטוליגים עיצובים ייחודיים התואמים לאישיות העסק שלכם.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "קוד נקי",
      description: "HTML, CSS ו-JavaScript מוכנים לייצור העוקבים אחר סטנדרטים מודרניים של האינטרנט.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Download,
      title: "הורדה קלה",
      description: "הורידו את קבצי האתר השלמים שלכם ואחסנו בכל מקום - אין נעילה לספק.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Search,
      title: "מוכן לחיפוש מקומי",
      description: "מותאם לחיפושים מקומיים כדי לעזור ללקוחות באזור שלכם למצוא את העסק שלכם.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "אבטחה בראש",
      description: "נבנה עם שיטות עבודה לאבטחה וקוד נקי, ללא פרצות אבטחה.",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            כל מה שהעסק שלכם צריך
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הבינה המלאכותית שלנו לא רק יוצרת אתרים - היא בונה פתרונות עסקיים שלמים שמביאים תוצאות.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-effect shadow-lg border-0 hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}