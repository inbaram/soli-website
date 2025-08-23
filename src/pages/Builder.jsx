import React, { useState } from "react";
import { WebsiteProject } from "@/api/entities";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import BusinessForm from "../components/home/BusinessForm";
import TemplateGallery from "../components/home/TemplateGallery";
import AIModelSelector from "../components/home/AIModelSelector";

export default function Builder() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("single_page");
  const [selectedModel, setSelectedModel] = useState("anthropic/claude-3.5-sonnet");
  const [formData, setFormData] = useState({
    business_name: "",
    business_type: "",
    description: "",
    location: "",
    contact_phone: "",
    contact_email: "",
    website_url: ""
  });

  const handleFormSubmit = async (data) => {
    setIsGenerating(true);
    try {
      const projectData = {
        ...data,
        template_type: selectedTemplate,
        ai_model: selectedModel,
        status: "draft"
      };

      const project = await WebsiteProject.create(projectData);
      navigate(createPageUrl("Editor") + `?project=${project.id}`);
    } catch (error) {
      console.error("Error creating project:", error);
    }
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              onClick={() => navigate(createPageUrl("Home"))}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזרה לבית
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              בנו את האתר שלכם עם בינה מלאכותית
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              ספרו לנו על העסק שלכם והבינה המלאכותית שלנו תיצור אתר שלם ומקצועי המותאם במיוחד עבורכם.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Builder Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <Card className="glass-effect shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ספרו לנו על העסק שלכם</h3>
                  <p className="text-indigo-100">מלאו את הפרטים וצפו איך האתר שלכם מתעורר לחיים</p>
                </div>
                <CardContent className="p-6 space-y-8" id="business-form">
                  <BusinessForm 
                    onSubmit={handleFormSubmit}
                    isGenerating={isGenerating}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  
                  <div className="border-t border-gray-200 pt-8">
                    <TemplateGallery 
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                    />
                  </div>
                  
                  <div className="border-t border-gray-200 pt-8">
                    <AIModelSelector 
                      selectedModel={selectedModel}
                      setSelectedModel={setSelectedModel}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="glass-effect shadow-xl border-0">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    איך זה עובד
                  </h4>
                  <div className="space-y-6">
                    {[
                      { step: 1, title: "פרטי העסק", desc: "ספרו לנו על השירותים שלכם", active: true },
                      { step: 2, title: "בחירת תבנית", desc: "בחרו את הפריסה המועדפת עליכם", active: false },
                      { step: 3, title: "יצירת AI", desc: "צפו איך האתר שלכם נבנה", active: false },
                      { step: 4, title: "התאמה והורדה", desc: "השלימו את העיצוב", active: false }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.active 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <span className="text-sm font-bold">{item.step}</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">מוכן לייצור</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    כל אתר כולל תכונות מקצועיות שעובדות מהקופסא.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-emerald-100 text-emerald-800">מותאם לקידום</Badge>
                    <Badge className="bg-emerald-100 text-emerald-800">מוכן למובייל</Badge>
                    <Badge className="bg-emerald-100 text-emerald-800">טעינה מהירה</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}