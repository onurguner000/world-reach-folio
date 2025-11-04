import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        experience: "Experience",
        pricing: "Pricing",
        contact: "Contact"
      },
      hero: {
        title: "Onur Güner",
        subtitle: "International Trade & Export Consultant",
        description: "Helping companies expand globally through smart strategies, reliable networks, and seamless trade operations.",
        viewPortfolio: "View Portfolio",
        requestConsultancy: "Request Consultancy",
        customPricing: "Custom Pricing"
      },
      workDef: {
        title: "A 360° Approach to Global Trade Management",
        description: "From supplier research to customs clearance, I manage every step of your import/export process with precision and transparency.",
        steps: {
          research: "Market Research",
          verification: "Supplier Verification",
          pricing: "Pricing Strategy",
          documentation: "Documentation",
          logistics: "Logistics",
          delivery: "Delivery",
          afterSales: "After-Sales Consultancy"
        }
      },
      profile: {
        title: "Who I Am",
        intro: "Experienced International Trade & Export Sales Manager with over 14 years of expertise in global trade, market expansion, and B2B & B2C sales.",
        points: [
          "Exported to 7 continents, managed 525+ export and 40+ import operations.",
          "Increased annual turnover from €185K to over €1M through strategic market development.",
          "Built distributor networks across Europe, Asia, South Africa, Middle East, and US.",
          "Expert in negotiation, customs compliance, and global pricing strategy."
        ],
        skills: {
          negotiation: "Negotiation",
          research: "Market Research",
          customs: "Customs Compliance",
          pricing: "Pricing Strategy",
          development: "Business Development"
        }
      },
      timeline: {
        title: "My Professional Path",
        fms: {
          company: "FMS Rock Drilling Equipments",
          position: "Foreign Trade Manager",
          points: [
            "Built entire export department from scratch",
            "Expanded to 7 new countries",
            "Participated in international fairs (2 domestic, 2 global)",
            "+1M€ turnover achieved"
          ]
        },
        gulhan: {
          company: "Gülhan Yedek Parça",
          position: "Foreign Trade Manager",
          points: [
            "Managed import/export for industry-leading manufacturer",
            "Developed 24 new B2B clients",
            "OEM supplier for major brands"
          ]
        },
        independent: {
          company: "Independent Consultant",
          position: "International Trade Consultant",
          period: "2020 – Present",
          points: [
            "Managing authorized partnership for Chinese industrial firms",
            "Import consultancy for stainless steel, dental and industrial paint equipment"
          ]
        }
      },
      services: {
        title: "How I Help",
        tagline: "Tailored strategies to connect your business with the world.",
        list: {
          import: {
            title: "Import Consultancy",
            description: "End-to-end support for sourcing, verification, and customs clearance."
          },
          export: {
            title: "Export Market Development",
            description: "Strategic expansion into new international markets with distributor networks."
          },
          supplier: {
            title: "Supplier Research & Verification",
            description: "Comprehensive supplier due diligence and quality assurance."
          },
          customs: {
            title: "HS Code & Customs Compliance",
            description: "Expert guidance on tariff classification and trade regulations."
          },
          pricing: {
            title: "International Pricing & Market Strategy",
            description: "Data-driven pricing strategies for competitive global positioning."
          },
          networking: {
            title: "Trade Fair Representation & B2B Networking",
            description: "Professional representation at international trade shows and exhibitions."
          }
        }
      },
      pricing: {
        title: "Work With Me",
        starter: {
          name: "Starter",
          price: "From €500",
          features: [
            "Initial market research",
            "Supplier identification",
            "Basic pricing analysis",
            "Email support"
          ]
        },
        business: {
          name: "Business",
          price: "From €1,500",
          popular: "Most Popular",
          features: [
            "Complete import/export management",
            "Supplier verification & negotiation",
            "Documentation & customs support",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Full trade operations management",
            "Distributor network development",
            "Trade fair representation",
            "24/7 dedicated support"
          ]
        },
        customize: "Customize Your Plan"
      },
      testimonials: {
        title: "Trusted by Professionals",
        items: [
          {
            name: "Ali Yılmaz",
            title: "CEO, TechParts Ltd.",
            text: "Onur provided outstanding import management support for our stainless steel procurement project — fast, precise, and professional."
          },
          {
            name: "Sarah Chen",
            title: "Import Director, GlobalTech",
            text: "Working with Onur transformed our supply chain. His expertise in customs compliance saved us significant time and costs."
          },
          {
            name: "Michael Schmidt",
            title: "Managing Director, Euro Industries",
            text: "Exceptional market knowledge and negotiation skills. Onur helped us establish successful partnerships across 3 continents."
          }
        ]
      },
      contact: {
        title: "Let's Connect",
        form: {
          name: "Your Name",
          email: "Email Address",
          company: "Company Name",
          message: "Your Message",
          submit: "Send Message",
          success: "Thank you! I'll get back to you soon.",
          error: "Something went wrong. Please try again."
        },
        info: {
          phone: "Phone",
          email: "Email",
          linkedin: "LinkedIn"
        }
      },
      footer: {
        copyright: "© 2025 Onur Güner — International Trade Consulting",
        poweredBy: "Powered by Next.js & Vercel"
      }
    }
  },
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        services: "Hizmetler",
        experience: "Deneyim",
        pricing: "Fiyatlandırma",
        contact: "İletişim"
      },
      hero: {
        title: "Onur Güner",
        subtitle: "Uluslararası Ticaret & İhracat Danışmanı",
        description: "Akıllı stratejiler, güvenilir ağlar ve sorunsuz ticaret operasyonları ile şirketlerin küresel ölçekte büyümesine yardımcı oluyorum.",
        viewPortfolio: "Portfolyoyu Gör",
        requestConsultancy: "Danışmanlık Talep Et",
        customPricing: "Özel Fiyat Al"
      },
      workDef: {
        title: "Küresel Ticaret Yönetimine 360° Yaklaşım",
        description: "Tedarikçi araştırmasından gümrük işlemlerine kadar, ithalat/ihracat sürecinizin her adımını hassasiyet ve şeffaflıkla yönetiyorum.",
        steps: {
          research: "Pazar Araştırması",
          verification: "Tedarikçi Doğrulama",
          pricing: "Fiyatlandırma Stratejisi",
          documentation: "Dokümantasyon",
          logistics: "Lojistik",
          delivery: "Teslimat",
          afterSales: "Satış Sonrası Danışmanlık"
        }
      },
      profile: {
        title: "Ben Kimim",
        intro: "Küresel ticaret, pazar genişletme ve B2B & B2C satışlarında 14 yılı aşkın deneyime sahip Uluslararası Ticaret ve İhracat Satış Müdürü.",
        points: [
          "7 kıtaya ihracat yaptım, 525+ ihracat ve 40+ ithalat operasyonu yönettim.",
          "Stratejik pazar geliştirme ile yıllık ciroyu 185 bin €'dan 1 milyon €'nun üzerine çıkardım.",
          "Avrupa, Asya, Güney Afrika, Orta Doğu ve ABD'de distribütör ağları kurdum.",
          "Müzakere, gümrük uyumu ve küresel fiyatlandırma stratejisinde uzmanım."
        ],
        skills: {
          negotiation: "Müzakere",
          research: "Pazar Araştırması",
          customs: "Gümrük Uyumu",
          pricing: "Fiyatlandırma Stratejisi",
          development: "İş Geliştirme"
        }
      },
      timeline: {
        title: "Profesyonel Yolculuğum",
        fms: {
          company: "FMS Rock Drilling Equipments",
          position: "Dış Ticaret Müdürü",
          points: [
            "İhracat departmanını sıfırdan kurdum",
            "7 yeni ülkeye genişleme sağladım",
            "Uluslararası fuarlara katıldım (2 yerli, 2 küresel)",
            "+1M€ ciroya ulaştım"
          ]
        },
        gulhan: {
          company: "Gülhan Yedek Parça",
          position: "Dış Ticaret Müdürü",
          points: [
            "Sektör lideri üretici için ithalat/ihracat yönettim",
            "24 yeni B2B müşteri geliştirdim",
            "Büyük markalar için OEM tedarikçisi"
          ]
        },
        independent: {
          company: "Bağımsız Danışman",
          position: "Uluslararası Ticaret Danışmanı",
          period: "2020 – Günümüz",
          points: [
            "Çinli endüstriyel firmalar için yetkili ortaklık yönetimi",
            "Paslanmaz çelik, dental ve endüstriyel boya ekipmanları ithalat danışmanlığı"
          ]
        }
      },
      services: {
        title: "Nasıl Yardımcı Oluyorum",
        tagline: "İşletmenizi dünya ile buluşturmak için özel stratejiler.",
        list: {
          import: {
            title: "İthalat Danışmanlığı",
            description: "Tedarik, doğrulama ve gümrük işlemleri için uçtan uca destek."
          },
          export: {
            title: "İhracat Pazar Geliştirme",
            description: "Distribütör ağları ile yeni uluslararası pazarlara stratejik genişleme."
          },
          supplier: {
            title: "Tedarikçi Araştırması & Doğrulama",
            description: "Kapsamlı tedarikçi durum tespiti ve kalite güvencesi."
          },
          customs: {
            title: "GTİP Kodu & Gümrük Uyumu",
            description: "Tarife sınıflandırması ve ticaret düzenlemeleri konusunda uzman rehberlik."
          },
          pricing: {
            title: "Uluslararası Fiyatlandırma & Pazar Stratejisi",
            description: "Rekabetçi küresel konumlandırma için veri odaklı fiyatlandırma stratejileri."
          },
          networking: {
            title: "Fuar Temsili & B2B Ağ Oluşturma",
            description: "Uluslararası ticaret fuarları ve sergilerde profesyonel temsil."
          }
        }
      },
      pricing: {
        title: "Benimle Çalışın",
        starter: {
          name: "Başlangıç",
          price: "500€'dan itibaren",
          features: [
            "İlk pazar araştırması",
            "Tedarikçi tanımlama",
            "Temel fiyat analizi",
            "E-posta desteği"
          ]
        },
        business: {
          name: "İşletme",
          price: "1.500€'dan itibaren",
          popular: "En Popüler",
          features: [
            "Komple ithalat/ihracat yönetimi",
            "Tedarikçi doğrulama & müzakere",
            "Dokümantasyon & gümrük desteği",
            "Öncelikli destek"
          ]
        },
        enterprise: {
          name: "Kurumsal",
          price: "Özel",
          features: [
            "Tam ticaret operasyonları yönetimi",
            "Distribütör ağı geliştirme",
            "Fuar temsili",
            "7/24 özel destek"
          ]
        },
        customize: "Planınızı Özelleştirin"
      },
      testimonials: {
        title: "Profesyoneller Tarafından Güvenilir",
        items: [
          {
            name: "Ali Yılmaz",
            title: "CEO, TechParts Ltd.",
            text: "Onur, paslanmaz çelik tedarik projemiz için olağanüstü ithalat yönetimi desteği sağladı — hızlı, hassas ve profesyonel."
          },
          {
            name: "Sarah Chen",
            title: "İthalat Direktörü, GlobalTech",
            text: "Onur ile çalışmak tedarik zincirimizi dönüştürdü. Gümrük uyumu konusundaki uzmanlığı bize önemli zaman ve maliyet tasarrufu sağladı."
          },
          {
            name: "Michael Schmidt",
            title: "Genel Müdür, Euro Industries",
            text: "Olağanüstü pazar bilgisi ve müzakere becerileri. Onur, 3 kıtada başarılı ortaklıklar kurmamıza yardımcı oldu."
          }
        ]
      },
      contact: {
        title: "İletişime Geçin",
        form: {
          name: "Adınız",
          email: "E-posta Adresiniz",
          company: "Şirket Adı",
          message: "Mesajınız",
          submit: "Mesaj Gönder",
          success: "Teşekkürler! En kısa sürede size dönüş yapacağım.",
          error: "Bir şeyler ters gitti. Lütfen tekrar deneyin."
        },
        info: {
          phone: "Telefon",
          email: "E-posta",
          linkedin: "LinkedIn"
        }
      },
      footer: {
        copyright: "© 2025 Onur Güner — Uluslararası Ticaret Danışmanlığı",
        poweredBy: "Next.js & Vercel ile güçlendirilmiştir"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        about: "关于",
        services: "服务",
        experience: "经验",
        pricing: "定价",
        contact: "联系"
      },
      hero: {
        title: "Onur Güner",
        subtitle: "国际贸易与出口顾问",
        description: "通过智能策略、可靠网络和无缝贸易运营帮助企业实现全球扩张。",
        viewPortfolio: "查看作品集",
        requestConsultancy: "咨询服务",
        customPricing: "定制报价"
      },
      workDef: {
        title: "全球贸易管理的360°方法",
        description: "从供应商研究到海关清关，我以精准和透明的方式管理您进出口流程的每一步。",
        steps: {
          research: "市场研究",
          verification: "供应商验证",
          pricing: "定价策略",
          documentation: "文件处理",
          logistics: "物流",
          delivery: "交付",
          afterSales: "售后咨询"
        }
      },
      profile: {
        title: "关于我",
        intro: "经验丰富的国际贸易和出口销售经理，在全球贸易、市场拓展和B2B及B2C销售方面拥有超过14年的专业经验。",
        points: [
          "出口至7大洲，管理525+出口和40+进口业务。",
          "通过战略性市场开发将年营业额从18.5万欧元增至超过100万欧元。",
          "在欧洲、亚洲、南非、中东和美国建立分销商网络。",
          "在谈判、海关合规和全球定价策略方面的专家。"
        ],
        skills: {
          negotiation: "谈判",
          research: "市场研究",
          customs: "海关合规",
          pricing: "定价策略",
          development: "业务发展"
        }
      },
      timeline: {
        title: "我的职业道路",
        fms: {
          company: "FMS Rock Drilling Equipments",
          position: "外贸经理",
          points: [
            "从零开始建立整个出口部门",
            "扩展到7个新国家",
            "参加国际展会（2个国内，2个全球）",
            "实现100万欧元以上营业额"
          ]
        },
        gulhan: {
          company: "Gülhan Yedek Parça",
          position: "外贸经理",
          points: [
            "管理行业领先制造商的进出口业务",
            "开发24个新B2B客户",
            "主要品牌的OEM供应商"
          ]
        },
        independent: {
          company: "独立顾问",
          position: "国际贸易顾问",
          period: "2020年 – 至今",
          points: [
            "管理中国工业公司的授权合作伙伴关系",
            "不锈钢、牙科和工业涂料设备的进口咨询"
          ]
        }
      },
      services: {
        title: "我如何帮助您",
        tagline: "量身定制的策略，将您的业务与世界连接。",
        list: {
          import: {
            title: "进口咨询",
            description: "采购、验证和海关清关的端到端支持。"
          },
          export: {
            title: "出口市场开发",
            description: "通过分销商网络战略性扩展到新的国际市场。"
          },
          supplier: {
            title: "供应商研究与验证",
            description: "全面的供应商尽职调查和质量保证。"
          },
          customs: {
            title: "HS编码与海关合规",
            description: "关税分类和贸易法规方面的专家指导。"
          },
          pricing: {
            title: "国际定价与市场策略",
            description: "数据驱动的定价策略，实现竞争性全球定位。"
          },
          networking: {
            title: "贸易展览代表与B2B网络",
            description: "在国际贸易展览和展会上的专业代表。"
          }
        }
      },
      pricing: {
        title: "与我合作",
        starter: {
          name: "入门",
          price: "€500起",
          features: [
            "初步市场研究",
            "供应商识别",
            "基本价格分析",
            "电子邮件支持"
          ]
        },
        business: {
          name: "商业",
          price: "€1,500起",
          popular: "最受欢迎",
          features: [
            "完整的进出口管理",
            "供应商验证与谈判",
            "文件和海关支持",
            "优先支持"
          ]
        },
        enterprise: {
          name: "企业",
          price: "定制",
          features: [
            "全面贸易运营管理",
            "分销商网络开发",
            "贸易展览代表",
            "全天候专属支持"
          ]
        },
        customize: "定制您的计划"
      },
      testimonials: {
        title: "专业人士的信赖",
        items: [
          {
            name: "Ali Yılmaz",
            title: "首席执行官，TechParts Ltd.",
            text: "Onur为我们的不锈钢采购项目提供了出色的进口管理支持——快速、精准且专业。"
          },
          {
            name: "Sarah Chen",
            title: "进口总监，GlobalTech",
            text: "与Onur合作改变了我们的供应链。他在海关合规方面的专业知识为我们节省了大量时间和成本。"
          },
          {
            name: "Michael Schmidt",
            title: "总经理，Euro Industries",
            text: "卓越的市场知识和谈判技巧。Onur帮助我们在3大洲建立了成功的合作伙伴关系。"
          }
        ]
      },
      contact: {
        title: "联系我们",
        form: {
          name: "您的姓名",
          email: "电子邮件地址",
          company: "公司名称",
          message: "您的留言",
          submit: "发送消息",
          success: "谢谢！我会尽快回复您。",
          error: "出了点问题。请重试。"
        },
        info: {
          phone: "电话",
          email: "电子邮件",
          linkedin: "领英"
        }
      },
      footer: {
        copyright: "© 2025 Onur Güner — 国际贸易咨询",
        poweredBy: "由 Next.js 和 Vercel 提供支持"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
