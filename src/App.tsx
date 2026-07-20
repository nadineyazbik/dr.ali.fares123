import { useState, useEffect, FormEvent } from 'react';
import { 
  Activity, 
  Award, 
  ShieldAlert, 
  Workflow, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Check, 
  CheckCircle, 
  TrendingUp, 
  User, 
  Mail, 
  FileText, 
  AlertTriangle, 
  Languages, 
  X,
  Printer,
  ChevronRight,
  PhoneCall,
  MapPin,
  ClipboardList,
  ChevronDown,
  Info,
  Smartphone,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Send,
  Bot,
  Sparkles,
  QrCode,
  Share2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { SPECIALTIES, DOCTORS, DIAGNOSTIC_CASES, SPORTS_REHAB_MILESTONES, EDUCATIONAL_ARTICLES } from './data';
import { uiTranslations } from './translations';
import { Doctor, Specialty } from './types';
import logoImg from './assets/images/logo.jpg';
import ali123Img from './assets/images/ali123.jpg';
import kneeImg from './assets/images/knee_3d_render_1782757910401.jpg';
import shoulderImg from './assets/images/shoulder_3d_render_1782757925835.jpg';
import sportsImg from './assets/images/sports_3d_render_1782757941846.jpg';
import traumaImg from './assets/images/trauma_3d_render_1782757956462.jpg';
import hipImg from './assets/images/hip_3d_render_1782762422421.jpg';
import spineImg from './assets/images/spine_3d_render_1782762434545.jpg';
import wristImg from './assets/images/wrist_3d_render_1782762449989.jpg';
import ankleImg from './assets/images/ankle_3d_render_1782762461936.jpg';
import heroOrthoImg from './assets/images/hero_3d_ortho_1782757894499.jpg';

// Website brand identity image resource (medium size)
const LOGO_SRC = logoImg;

const GALLERY_IMAGES = [
  {
    id: 'knee',
    image: kneeImg,
    title: {
      en: 'Knee Joint Reconstruction',
      ar: 'إعادة بناء مفصل الركبة',
      fr: 'Reconstruction du Genou'
    },
    desc: {
      en: 'Advanced 3D anatomical modeling of cruciate ligaments (ACL/PCL) and meniscal structures.',
      ar: 'نمذجة ثلاثية الأبعاد متقدمة للرباط الصليبي والغضروف الهلالي للركبة.',
      fr: 'Modélisation 3D avancée des ligaments croisés et des ménisques.'
    }
  },
  {
    id: 'shoulder',
    image: shoulderImg,
    title: {
      en: 'Shoulder Arthroscopy & Rotator Cuff',
      ar: 'منظار الكتف وإصلاح الأوتار',
      fr: 'Arthroscopie de l\'Épaule'
    },
    desc: {
      en: 'High-definition 3D rendering of the glenohumeral joint and rotator cuff biomechanics.',
      ar: 'تصوير ثلاثي الأبعاد عالي الدقة لمفصل الكتف والأوتار الدوارة.',
      fr: 'Rendu 3D de l\'articulation scapulo-humérale et de la coiffe des rotateurs.'
    }
  },
  {
    id: 'sports',
    image: sportsImg,
    title: {
      en: 'Sports Ligamentous Bio-Engineering',
      ar: 'الهندسة الحيوية للأربطة الرياضية',
      fr: 'Bio-Ingénierie des Ligaments Sportifs'
    },
    desc: {
      en: 'Biomechanical stress simulation on sports ligaments under extreme pivot motion.',
      ar: 'محاكاة الإجهاد الميكانيكي الحيوي على الأربطة الرياضية تحت ضغط الحركة الدائرية.',
      fr: 'Simulation du stress biomécanique sur les ligaments sportifs.'
    }
  },
  {
    id: 'trauma',
    image: traumaImg,
    title: {
      en: 'Complex Trauma & Internal Fixation',
      ar: 'الكسور المعقدة والتثبيت الداخلي',
      fr: 'Traumatologie Complexe'
    },
    desc: {
      en: '3D modeling of osteosynthesis plates, titanium nails, and anatomical lock reduction.',
      ar: 'نمذجة ثلاثية الأبعاد لصفائح التثبيت ومسامير التيتانيوم لعلاج الكسور.',
      fr: 'Modélisation 3D des plaques d\'ostéosynthèse et clous en titane.'
    }
  },
  {
    id: 'hip',
    image: hipImg,
    title: {
      en: 'Total Hip Arthroplasty (Replacement)',
      ar: 'استبدال كامل لمفصل الورك',
      fr: 'Arthroplastie Totale de Hanche'
    },
    desc: {
      en: 'High-precision titanium prosthetic alignment and bone integration mapping.',
      ar: 'تصوير دقيق لمحاذاة بدائل مفصل الورك وتكاملها مع العظام.',
      fr: 'Alignement de prothèse de hanche en titane haute précision.'
    }
  },
  {
    id: 'spine',
    image: spineImg,
    title: {
      en: 'Precision Spine & Lumbar Alignment',
      ar: 'محاذاة العمود الفقري والفقرات القطنية',
      fr: 'Alignement de la Colonne Vertébrale'
    },
    desc: {
      en: 'Detailed architectural 3D view of cervical and lumbar disc compression zones.',
      ar: 'عرض تفصيلي ثلاثي الأبعاد لمناطق ضغط الأقراص بين الفقرات القطنية والعنقية.',
      fr: 'Vue architecturale 3D détaillée des zones de compression discale.'
    }
  },
  {
    id: 'wrist',
    image: wristImg,
    title: {
      en: 'Micro-Surgical Wrist & Hand Anatomy',
      ar: 'جراحة وميكانيكا مفصل اليد والمعصم',
      fr: 'Micro-Chirurgie du Poignet et de la Main'
    },
    desc: {
      en: 'Microscopic ligaments reconstruction and bone carpal alignment pathways.',
      ar: 'إعادة بناء الأربطة المجهرية ومسارات محاذاة عظام الرسغ.',
      fr: 'Reconstruction microscopique des ligaments et des os du carpe.'
    }
  },
  {
    id: 'ankle',
    image: ankleImg,
    title: {
      en: 'Ankle Biomechanics & Tendon Repair',
      ar: 'الميكانيكا الحيوية للكاحل وترميم الأوتار',
      fr: 'Biomécanique de la Cheville'
    },
    desc: {
      en: 'Advanced digital modeling of lateral collateral ligaments and Achilles tendon complex.',
      ar: 'نمذجة رقمية متقدمة للأربطة الجانبية ومجمع وتر أخيل لكاحل القدم.',
      fr: 'Modélisation numérique avancée des ligaments latéraux et du tendon d\'Achille.'
    }
  }
];

export default function App() {
  // Default to Arabic as requested: العربية (Default)
  const [lang, setLang] = useState<'ar' | 'en' | 'fr'>('ar');
  const [activeNav, setActiveNav] = useState<string>('home');
  
  // Specialties selection
  const [selectedSpecId, setSelectedSpecId] = useState<string>('knee');
  const [activeSpecPhase, setActiveSpecPhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');

  // Symptom Triage states
  const [selectedTriageId, setSelectedTriageId] = useState<string>('knee-triage');
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('pop-twist');

  // Recovery Tracker states
  const [trackerProtocol, setTrackerProtocol] = useState<string>('knee'); // 'knee', 'shoulder', 'trauma'
  const [selectedMilestoneDay, setSelectedMilestoneDay] = useState<number>(15);
  const [checkedTasks, setCheckedTasks] = useState<{ [key: string]: boolean }>({
    'knee-15-0': true,
    'knee-15-1': false,
    'knee-15-2': false,
  });

  // Patient Education anatomical hotspot
  const [selectedAnatomyPart, setSelectedAnatomyPart] = useState<string>('acl');

  // Educational article details pop-up
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // FAQ accordion state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Booking Modal & Pass state
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [bookingLocation, setBookingLocation] = useState<string>('beirut');
  const [bookingCategory, setBookingCategory] = useState<string>('knee');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('2026-07-20');
  const [bookingTime, setBookingTime] = useState<string>('10:00 - 11:00');
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);

  // System dynamic values (live clinical clock)
  const [currentTime, setCurrentTime] = useState<string>('');

  // Professional AI Assistant states
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<any>(null);
  
  // Share QR code state
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize/reset AI Assistant welcome message when language changes
  useEffect(() => {
    setChatMessages([
      {
        role: 'assistant',
        content: lang === 'ar'
          ? 'مرحباً! أنا المساعد السريري الذكي المعتمد لعيادة الدكتور علي فارس. كيف يمكنني مساعدتك اليوم في الاستفسار عن آلام الركبة، الكتف، المفاصل، أو حجز موعد؟'
          : lang === 'fr'
            ? 'Bonjour! Je suis l\'assistant clinique intelligent de la clinique du Dr Ali Fares. Comment puis-je vous aider aujourd\'hui concernant des douleurs au genou, à l\'épaule, des chirurgies ou planifier un rendez-vous ?'
            : 'Hello! I am the certified clinical AI Assistant for Dr. Ali Fares\' practice. How can I assist you today regarding knee pain, shoulder arthroscopy, joint preservation, or scheduling an appointment?'
      }
    ]);
  }, [lang]);

  const handleSendChatMessage = async (textToSend?: string) => {
    const msgText = textToSend || chatInput;
    if (!msgText.trim()) return;

    const newUserMessage = { role: 'user', content: msgText };
    const updatedMessages = [...chatMessages, newUserMessage];
    
    setChatMessages(updatedMessages);
    if (!textToSend) setChatInput('');
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setChatMessages([...updatedMessages, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages([
        ...updatedMessages,
        { 
          role: 'assistant', 
          content: lang === 'ar' 
            ? 'عذراً، حدث خطأ أثناء الاتصال بالمساعد الذكي للعيادة. يرجى إعادة إرسال رسالتك أو التواصل معنا مباشرة عبر الواتساب على الرقم 96181931988+' 
            : lang === 'fr'
              ? 'Désolé, une erreur s\'est produite avec l\'assistant IA. Veuillez réessayer ou nous contacter sur WhatsApp au +961 81 931 988.'
              : 'Sorry, an error occurred with the AI Assistant. Please try resending your message or contact our clinical team on WhatsApp at +961 81 931 988.' 
        }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Preload all critical images to ensure they load instantly in parallel
  useEffect(() => {
    const imagesToPreload = [
      logoImg,
      kneeImg,
      shoulderImg,
      sportsImg,
      traumaImg,
      hipImg,
      spineImg,
      wristImg,
      ankleImg,
      heroOrthoImg,
    ];
    
    // Also add doctor image from DOCTORS if available
    if (DOCTORS && DOCTORS.length > 0) {
      DOCTORS.forEach(doc => {
        if (doc.image) imagesToPreload.push(doc.image);
      });
    }

    imagesToPreload.forEach(src => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  // Translation helper
  const getTranslation = (item: { en: string; ar: string; fr?: string }) => {
    if (lang === 'fr' && item.fr) return item.fr;
    if (lang === 'en') return item.en;
    return item.ar;
  };

  // Dynamic share URL generator
  const getShareUrl = () => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1')) {
      return window.location.origin + window.location.pathname;
    }
    return 'https://ais-pre-qiv7tegrtmylzk32wjt6b2-968881509884.europe-west2.run.app';
  };

  // Pre-fill booking category and notes from triage tool
  const handleBookFromTriage = (category: string, symptomText: string) => {
    setBookingCategory(category);
    setBookingNotes(`${getTranslation(uiTranslations.navTriage)}: ${symptomText}`);
    setShowBookingModal(true);
  };

  // Form Submission
  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientEmail || !patientPhone) return;

    const caseId = `AF-FRACT-${Math.floor(1000 + Math.random() * 9000)}-${bookingLocation.toUpperCase().slice(0, 3)}`;
    
    setConfirmedBooking({
      id: caseId,
      name: patientName,
      email: patientEmail,
      phone: patientPhone,
      location: bookingLocation,
      category: bookingCategory,
      notes: bookingNotes,
      date: preferredDateFormatted(bookingDate),
      time: bookingTime
    });
  };

  const closeBookingFlow = () => {
    setShowBookingModal(false);
    setConfirmedBooking(null);
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setBookingNotes('');
  };

  const preferredDateFormatted = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(lang === 'ar' ? 'ar-LB' : lang === 'fr' ? 'fr-FR' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Find routing assessment metrics
  const activeTriageCase = DIAGNOSTIC_CASES.find(c => c.id === selectedTriageId) || DIAGNOSTIC_CASES[0];
  const activeSymptomOption = activeTriageCase.symptoms[0].options.find(o => o.id === selectedSymptomId) || activeTriageCase.symptoms[0].options[0];

  // Exercises corresponding to active milestone and protocol
  const getMilestoneExercises = () => {
    const protocolMilestone = SPORTS_REHAB_MILESTONES.find(m => m.day === selectedMilestoneDay);
    return protocolMilestone?.exercises || [];
  };

  // Toggle checklist tasks
  const handleToggleTask = (taskIndex: number) => {
    const key = `${trackerProtocol}-${selectedMilestoneDay}-${taskIndex}`;
    setCheckedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate task progress for active protocol + milestone
  const getProgressPercentage = () => {
    const exercises = getMilestoneExercises();
    if (exercises.length === 0) return 0;
    let checkedCount = 0;
    exercises.forEach((_, idx) => {
      if (checkedTasks[`${trackerProtocol}-${selectedMilestoneDay}-${idx}`]) {
        checkedCount++;
      }
    });
    return Math.round((checkedCount / exercises.length) * 100);
  };

  // Joint Anatomy Data
  const ANATOMY_HOTSPOTS: { [key: string]: { name: { en: string; ar: string; fr: string }; desc: { en: string; ar: string; fr: string }; surgical: { en: string; ar: string; fr: string } } } = {
    acl: {
      name: { en: "Anterior Cruciate Ligament (ACL)", ar: "الرباط الصليبي الأمامي (ACL)", fr: "Ligament Croisé Antérieur (LCA)" },
      desc: { en: "The primary stabilizing ligament of the knee, preventing excessive forward translation of the tibia.", ar: "الرباط التثبيتي الأساسي للركبة، ويمنع الانزلاق الأمامي المفرط لعظمة الساق (الظنبوب).", fr: "Le principal ligament de stabilisation du genou, empêchant la translation antérieure excessive du tibia." },
      surgical: { en: "Arthroscopic reconstruction using robust autografts (hamstring or patellar tendon) for high-performance sports stability.", ar: "إعادة البناء بالمنظار باستخدام الطعوم الذاتية المتينة (أوتار الركبة أو وتر الداغصة) لاستعادة ثبات المفصل حركيًا.", fr: "Reconstruction arthroscopique par autogreffe (tendon rotulien ou ischio-jambiers) pour le sport de haut niveau." }
    },
    meniscus: {
      name: { en: "Lateral & Medial Menisci", ar: "الغضاريف الهلالية (الوحشية والإنسية)", fr: "Ménisques Interne & Externe" },
      desc: { en: "Crescent-shaped fibrocartilage structures acting as shock absorbers and distributing load across the femur and tibia.", ar: "هياكل غضروفية ليفية هلالية الشكل تعمل كممتص للصدمات وتوزع الوزن بالتساوي بين عظمة الفخذ والساق.", fr: "Structures fibrocartilagineuses en croissant agissant comme amortisseurs et répartissant les charges du fémur." },
      surgical: { en: "Specialized arthroscopic micro-suturing with zero-cutting approaches to preserve biological shock-absorbing function.", ar: "خياطة دقيقة بالمنظار باستخدام تقنيات خالية من الاستئصال للحفاظ على وظيفة امتصاص الصدمات الطبيعية للمفصل.", fr: "Micro-sutures arthroscopiques spécialisées pour préserver la fonction biologique d'amortissement." }
    },
    cuff: {
      name: { en: "Rotator Cuff Tendons", ar: "أوتار الكفة الدوارة للكتف", fr: "Tendons de la Coiffe des Rotateurs" },
      desc: { en: "A group of four muscles and tendons enveloping the shoulder joint, ensuring deep active compression and rotation.", ar: "مجموعة من أربعة أوتار عضلية تحيط بمفصل الكتف لتأمين الحركة النشطة والضغط التثبيتي للمفصل.", fr: "Groupe de quatre muscles et tendons enveloppant l'épaule, assurant la rotation et la compression active." },
      surgical: { en: "Double-row arthroscopic anchor suture repair to firmly re-attach torn tendons flat against the anatomical bone footprint.", ar: "إعادة التثبيت بالمنظار بتقنية الصف المزدوج لإعادة ربط الأوتار الممزقة بشكل مسطح وثابت في مكانها التشريحي.", fr: "Suture double-rangée par ancres arthroscopiques pour réinsérer solidement les tendons contre l'os." }
    },
    labrum: {
      name: { en: "Glenoid Labrum", ar: "الشفة المفصلية للكتف", fr: "Bourrelet Glénoïdal (Labrum)" },
      desc: { en: "A fibrous ring surrounding the shallow shoulder socket to deepen it, maintaining stability against dislocation.", ar: "حلقة غضروفية ليفية تحيط بتجويف الكتف لزيادة عمقه وتوفير ثبات قوي يمنع خلع المفصل.", fr: "Anneau fibreux augmentant la profondeur de la glène de l'épaule pour éviter les luxations." },
      surgical: { en: "Arthroscopic Bankart repair utilizing dynamic biological suture anchors to restore absolute structural integrity.", ar: "ترميم وإصلاح 'بانكارت' بالمنظار باستخدام مثبتات خيطية بيولوجية ديناميكية لاستعادة السلامة الهيكلية.", fr: "Réparation de Bankart sous arthroscopie avec ancres de suture pour restaurer l'intégrité de l'épaule." }
    }
  };

  // FAQ Data
  const FAQ_ITEMS = [
    {
      q: { 
        en: "What is the typical recovery timeline to return to contact sports after ACL reconstruction?", 
        ar: "ما هو الجدول الزمني المعتاد للعودة إلى الرياضات الاحتكاكية بعد عملية الرباط الصليبي؟", 
        fr: "Quel est le délai habituel pour reprendre les sports de contact après une reconstruction du LCA ?" 
      },
      a: {
        en: "Return to contact sports typically ranges from 6 to 9 months. This timeline is strictly criterion-based rather than time-based. Before clearance, patients must pass comprehensive functional testing, demonstrating at least 90% limb symmetry, dynamic core control, and completed biomechanical agility drills supervised by Dr. Ali Fares.",
        ar: "تتراوح فترة العودة للرياضات الاحتكاكية بين ٦ إلى ٩ أشهر. هذا الجدول الزمني يعتمد بشكل صارم على معايير الأداء الوظيفي السريري وليس فقط على مرور الوقت. قبل الترخيص باللعب، يجب على المريض اجتياز اختبارات حركية متكاملة تظهر تماثلًا عضليًا بنسبة ٩٠٪ على الأقل وتوازنًا حركيًا ممتازًا.",
        fr: "Le retour aux sports de contact prend généralement entre 6 et 9 mois. Ce délai dépend de critères fonctionnels stricts plutôt que du temps écoulé. Le patient doit réussir des tests de symétrie musculaire à 90% et de contrôle dynamique supervisés par le Dr Ali Fares."
      }
    },
    {
      q: { 
        en: "How does minimally invasive arthroscopic surgery differ from open joint surgery?", 
        ar: "ما الذي يميز جراحة المناظير طفيفة التوغل عن الجراحة المفتوحة للمفاصل؟", 
        fr: "Quelle est la différence entre l'arthroscopie mini-invasive et la chirurgie ouverte ?" 
      },
      a: {
        en: "Arthroscopy utilizes specialized high-definition fiberoptic cameras and micro-instruments inserted through millimeter-sized portals. This avoids cutting key muscles or joint capsules, resulting in significantly less post-operative pain, drastically lower infection rates, minimal scarring, and an accelerated rehabilitation path.",
        ar: "تعتمد جراحة المنظار على كاميرات ألياف بصرية دقيقة عالية الدقة وأدوات مجهرية يتم إدخالها عبر فتحات صغيرة للغاية (بالميليمتر). يجنب هذا الإجراء قص العضلات أو كبسولة المفصل، مما يقلل الألم بشكل كبير بعد العملية، ويخفض نسب الالتهاب، ويسرع التعافي بشكل لافت.",
        fr: "L'arthroscopie utilise des caméras à fibres optiques haute définition et des micro-instruments insérés par de mini-incisions. Cela évite de sectionner les muscles et capsules articulaires, réduisant considérablement la douleur post-opératoire et accélérant la rééducation."
      }
    },
    {
      q: { 
        en: "Do all rotator cuff tears require immediate surgical intervention?", 
        ar: "هل تستدعي جميع تمزقات أوتار الكتف الدوارة تدخلاً جراحيًا فوريًا؟", 
        fr: "Toutes les ruptures de la coiffe des rotateurs nécessitent-elles une chirurgie immédiate ?" 
      },
      a: {
        en: "No. Partial or degenerative rotator cuff tears in lower-demand patients are often managed conservatively with targeted physical therapy, postural correction, and biological injections. However, acute traumatic tears, full-thickness tears, or tears in active individuals are highly recommended for early arthroscopic repair to prevent muscle retraction and irreversible fatty degeneration.",
        ar: "لا. التمزقات الجزئية أو الناتجة عن التقدم في السن لدى المرضى قليلّي الحركة يتم علاجها غالبًا تحفظيًا بالعلاج الفيزيائي المكثف والحقن البيولوجية. أما التمزقات الكلية الحادة الناتجة عن الإصابات أو الرياضة فيُنصح بإصلاحها بالمنظار مبكرًا لمنع انكماش الوتر وتلف العضلات.",
        fr: "Non. Les ruptures partielles ou dégénératives chez les patients moins actifs sont souvent traitées par kinésithérapie et injections. En revanche, les ruptures traumatiques aiguës ou complètes chez les sujets actifs justifient une réparation arthroscopique précoce."
      }
    },
    {
      q: { 
        en: "How are Dr. Ali Fares' clinics structured across Lebanon (Beirut, Riyaq, Baalbek)?", 
        ar: "كيف تتوزع عيادات الدكتور علي فارس في لبنان بين بيروت ورياق وبعلبك ومواعيد العمل بها؟", 
        fr: "Comment s'organisent les consultations du Dr Ali Fares à Beyrouth, Riyaq et Baalbek ?" 
      },
      a: {
        en: "Dr. Ali Fares provides high-end clinical services at three major locations: Beirut (Main Academic Outpatient Clinic), Riyaq Regional Hospital (serving Beqaa sports injuries), and Baalbek Medical Complex. Surgical procedures (arthroscopy and arthroplasty) are performed in premier accredited operating theaters equipped with high-definition medical systems. You can request a priority consultation slot at any location using this portal.",
        ar: "يقدم الدكتور علي فارس خدمات جراحية وسريرية عالية المستوى في ثلاثة مواقع رئيسية: بيروت (المركز الطبي الأكاديمي الرئيسي)، مستشفى رياق الإقليمي (لخدمة الإصابات الرياضية في البقاع)، ومجمع بعلبك الطبي. تُجرى العمليات الجراحية في مستشفيات مجهزة بأحدث كبائن العمليات المعقمة والمنظار المتطور.",
        fr: "Le Dr Ali Fares consulte dans trois sites clés : Beyrouth (centre académique), Riyaq (traumatologie du sport de la Beqaa) et Baalbek. Les chirurgies (arthroscopies et prothèses) sont réalisées dans des blocs opératoires accrédités dotés de technologies de pointe."
      }
    }
  ];

  return (
    <div 
      className={`min-h-screen bg-[#F8F9FA] selection:bg-[#C5A880] selection:text-[#0A192F] ${lang === 'ar' ? 'font-arabic-clinical' : 'font-sans'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      id="app-container"
    >
      {/* Clinically Rigid Top Banner - Time, Location, Security Status */}
      <div className="bg-[#0A192F] text-white text-[10px] tracking-widest px-4 py-2.5 border-b border-[#C5A880]/20 flex flex-col sm:flex-row justify-between items-center gap-2" id="top-security-bar">
        <div className="flex items-center gap-4">
          <span className="text-[#C5A880] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {lang === 'ar' ? 'الاتصال السريري آمن ومباشر' : lang === 'fr' ? 'CONNEXION CLINIQUE SÉCURISÉE' : 'SECURE CLINICAL UPLINK'}
          </span>
          <span className="text-gray-500 font-mono">|</span>
          <span className="text-gray-400 font-mono">LBN-PORTAL: {getTranslation(uiTranslations.clinicLocations)}</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-gray-300">
          <span className="flex items-center gap-1.5">
            <Clock size={11} className="text-[#C5A880]" />
            {currentTime || "14:00:00 UTC"}
          </span>
          <span className="text-gray-500 font-mono">|</span>
          <span className="text-gray-300">{getTranslation(uiTranslations.workingHours)}</span>
        </div>
      </div>

      {/* Main Header & Nav Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs" id="main-navigation-header">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <img 
              src={LOGO_SRC} 
              alt="Dr. Ali Fares Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-sm border border-[#C5A880] shadow-sm flex-shrink-0" 
              id="brand-logo-mark"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-serif-clinical text-base font-extrabold text-[#0A192F] tracking-tight leading-none">
                  {getTranslation(uiTranslations.logoTitle)}
                </h1>
                <span className="text-[9px] px-1.5 py-0.5 bg-[#0A192F]/5 text-[#0A192F] font-bold rounded-xs uppercase tracking-wider font-serif">
                  UGA France
                </span>
              </div>
              <span className="text-[9px] text-[#C5A880] font-bold block mt-0.5 tracking-wider uppercase">
                {getTranslation(uiTranslations.logoSub)}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-semibold text-gray-600">
            <a 
              href="#hero-section" 
              onClick={() => setActiveNav('home')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'home' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navHome)}
            </a>
            <a 
              href="#about-section" 
              onClick={() => setActiveNav('about')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'about' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navAbout)}
            </a>
            <a 
              href="#specialties-section" 
              onClick={() => setActiveNav('specialties')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'specialties' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navExcellence)}
            </a>
            <a 
              href="#triage-section" 
              onClick={() => setActiveNav('triage')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'triage' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navTriage)}
            </a>
            <a 
              href="#tracker-section" 
              onClick={() => setActiveNav('tracker')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'tracker' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navTracker)}
            </a>
            <a 
              href="#education-section" 
              onClick={() => setActiveNav('education')} 
              className={`hover:text-[#0A192F] transition-colors py-1 ${activeNav === 'education' ? 'text-[#0A192F] border-b-2 border-[#C5A880]' : ''}`}
            >
              {getTranslation(uiTranslations.navEducation)}
            </a>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="flex items-center gap-3.5 self-end md:self-auto">
            {/* Share QR Button */}
            <button 
              onClick={() => setShowShareModal(true)}
              className="bg-white hover:bg-gray-50 text-[#0A192F] border border-gray-200 text-xs font-bold p-2 px-3 rounded-sm transition duration-200 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
              id="header-share-qr-btn"
              title={lang === 'ar' ? 'رمز QR ومشاركة الموقع' : lang === 'fr' ? 'Partager via code QR' : 'Share via QR Code'}
            >
              <QrCode size={14} className="text-[#C5A880]" />
              <span className="hidden sm:inline">
                {lang === 'ar' ? 'شارك الموقع' : lang === 'fr' ? 'Partager' : 'Share'}
              </span>
            </button>

            {/* Language Selection */}
            <div className="flex items-center bg-gray-100 p-1 rounded-sm gap-1" id="language-toggle-frame">
              <button 
                onClick={() => setLang('ar')} 
                className={`text-[10px] px-2 py-1 rounded-xs font-bold transition-all ${lang === 'ar' ? 'bg-[#0A192F] text-white' : 'text-gray-500 hover:text-black'}`}
              >
                العربية
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`text-[10px] px-2 py-1 rounded-xs font-bold transition-all ${lang === 'en' ? 'bg-[#0A192F] text-white' : 'text-gray-500 hover:text-black'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('fr')} 
                className={`text-[10px] px-2 py-1 rounded-xs font-bold transition-all ${lang === 'fr' ? 'bg-[#0A192F] text-white' : 'text-gray-500 hover:text-black'}`}
              >
                FR
              </button>
            </div>

            {/* CTA Book Button */}
            <button 
              onClick={() => setShowBookingModal(true)}
              className="bg-[#0A192F] hover:bg-[#122A4E] text-[#C5A880] border border-[#C5A880] text-xs font-bold px-4 py-2 rounded-sm transition duration-200 tracking-wider uppercase shadow-xs"
              id="header-cta-booking"
            >
              {getTranslation(uiTranslations.bookNow)}
            </button>
          </div>
        </div>
      </header>

      {/* Emergency Disclaimer Ribbon */}
      <div className="bg-[#FFF9E6] border-y border-[#FFEBB3] px-4 py-2.5 text-center text-xs text-[#805B00] font-medium flex justify-center items-center gap-2" id="emergency-ribbon">
        <ShieldAlert size={14} className="text-[#B38000] flex-shrink-0 animate-pulse" />
        <p className="leading-tight text-[11px] sm:text-xs">
          {getTranslation(uiTranslations.disclaimer)}
        </p>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-[#0A192F] text-white py-12 md:py-20 relative overflow-hidden" id="hero-section">
        {/* Abstract Orthopedic Mesh Background SVG Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A880" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            {/* Skeletal geometric rays */}
            <circle cx="80%" cy="30%" r="200" fill="none" stroke="#C5A880" strokeWidth="1" strokeDasharray="5,10" />
            <circle cx="80%" cy="30%" r="350" fill="none" stroke="#C5A880" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text section (Left or Right depending on RTL) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] rounded-xs text-[10px] uppercase tracking-widest font-bold">
              <Award size={12} />
              {lang === 'ar' ? 'أستاذ جراحة العظام وتأهيل الرياضيين بمستشفيات فرنسا سابقا' : lang === 'fr' ? 'ANCIEN INTERNE DES HÔPITAUX DE FRANCE' : 'FORMER SURGEON IN FRENCH ACADEMIC HOSPITALS'}
            </div>

            <h2 className="font-serif-clinical text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {getTranslation(uiTranslations.heroTagline)}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {getTranslation(uiTranslations.heroSub)}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                onClick={() => setShowBookingModal(true)}
                className="bg-[#C5A880] text-[#0A192F] hover:bg-[#D4AF37] text-xs font-bold px-6 py-3 rounded-sm transition duration-200 tracking-wider uppercase text-center"
              >
                {getTranslation(uiTranslations.heroCtaPrimary)}
              </button>
              <a 
                href="#specialties-section"
                className="border border-white/20 hover:border-[#C5A880] text-white hover:text-[#C5A880] text-xs font-bold px-6 py-3 rounded-sm transition duration-200 tracking-wider uppercase text-center"
              >
                {getTranslation(uiTranslations.heroCtaSecondary)}
              </a>
            </div>

            {/* Floating Info Boxes / WhatsApp Connections */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 max-w-md">
              {/* Doctor's WhatsApp direct connection */}
              <a 
                href="https://wa.me/96170359274?text=Hello%20Dr.%20Ali%20Fares" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-amber-500/5 hover:bg-amber-500/10 rounded-sm border border-amber-500/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[8px] text-amber-400 font-bold uppercase tracking-widest block leading-none">
                    {lang === 'ar' ? 'د. علي فارس (مباشر)' : lang === 'fr' ? 'Dr. Ali Fares (Direct)' : 'Dr. Ali Fares (Direct)'}
                  </span>
                  <span className="text-[11px] font-bold text-white block mt-1">
                    {lang === 'ar' ? 'واتساب الطبيب المباشر' : lang === 'fr' ? 'WhatsApp Direct' : 'Direct Doctor Chat'}
                  </span>
                </div>
              </a>

              {/* Assistant's WhatsApp connection */}
              <a 
                href="https://wa.me/96181931988" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-sm border border-emerald-500/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-widest block leading-none">
                    {lang === 'ar' ? 'مساعد العيادة (مواعيد)' : lang === 'fr' ? 'Secrétariat (RDV)' : 'Clinical Assistant'}
                  </span>
                  <span className="text-[11px] font-bold text-white block mt-1">
                    {lang === 'ar' ? 'واتساب المساعد للتنسيق' : lang === 'fr' ? 'WhatsApp Secrétariat' : 'Liaison Booking'}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Main Page Hero Athlete Image */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-lg lg:w-full rounded-sm overflow-hidden border border-[#C5A880]/30 shadow-2xl bg-[#122A4E]" id="hero-main-image-container">
              <img 
                src={heroOrthoImg} 
                alt="Restoring Mobility. Elevating Performance. 3D Model" 
                className="w-full h-auto object-cover rounded-sm hover:scale-102 transition duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent p-5 text-[11px] text-gray-300">
                <span className="text-[#C5A880] font-bold uppercase tracking-wider block text-xs">
                  {lang === 'ar' ? 'التعافي والطب الرياضي ثلاثي الأبعاد' : lang === 'fr' ? 'RÉHABILITATION 3D DE POINTE' : 'ADVANCED 3D SPORTS RECOVERY'}
                </span>
                <p className="mt-1 font-light leading-snug text-gray-200">
                  {lang === 'ar' ? 'الحفاظ على المفاصل وتأهيل ميكانيكا الحركة للرياضيين بنموذج ثلاثي الأبعاد احترافي.' : 'Joint preservation and athletic kinetic recovery protocols with high-precision 3D modeling.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES & PARTNERSHIPS */}
      <section className="bg-white border-b border-gray-150 py-7" id="trust-badges-banner">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[9px] text-[#0A192F]/60 tracking-widest font-extrabold uppercase mb-4">
            {getTranslation(uiTranslations.accreditationTitle)}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 opacity-80">
            {/* Université Grenoble Alpes */}
            <div className="flex items-center gap-2 text-[#0A192F]">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs border border-gray-200">
                UGA
              </div>
              <div>
                <span className="text-[10px] font-serif-clinical font-extrabold block tracking-tight">UNIVERSITÉ GRENOBLE ALPES</span>
                <span className="text-[7.5px] text-[#C5A880] font-bold uppercase tracking-wider block">Specialist Orthopedic Diploma</span>
              </div>
            </div>

            {/* CHU Grenoble Alpes */}
            <div className="flex items-center gap-2 text-[#0A192F]">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#C5A880] font-bold text-[9px] border border-gray-200">
                CHU
              </div>
              <div>
                <span className="text-[10px] font-serif-clinical font-extrabold block tracking-tight">CHU GRENOBLE ALPES, FRANCE</span>
                <span className="text-[7.5px] text-[#C5A880] font-bold uppercase tracking-wider block">Former Resident Surgeon</span>
              </div>
            </div>

            {/* Clinique du Sport de Paris */}
            <div className="flex items-center gap-2 text-[#0A192F]">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs border border-gray-200">
                CSP
              </div>
              <div>
                <span className="text-[10px] font-serif-clinical font-extrabold block tracking-tight">CLINIQUE DU SPORT DE PARIS</span>
                <span className="text-[7.5px] text-[#C5A880] font-bold uppercase tracking-wider block">Sports Arthroscopy Fellowship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CENTERS OF EXCELLENCE (SPECIALTIES GRID) */}
      <section className="py-16 bg-[#F8F9FA]" id="specialties-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
              {lang === 'ar' ? 'الخدمات الجراحية المتقدمة' : lang === 'fr' ? 'CENTRES DE COMPÉTENCE CLINIQUE' : 'ADVANCED CLINICAL DEPARTMENTS'}
            </span>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {getTranslation(uiTranslations.navExcellence)}
            </h3>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3"></div>
          </div>

          {/* Specialties Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left specialty selector column */}
            <div className="lg:col-span-4 space-y-2.5">
              {SPECIALTIES.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => {
                    setSelectedSpecId(spec.id);
                    setActiveSpecPhase('phase1');
                  }}
                  className={`w-full text-right p-4 rounded-sm border transition duration-200 text-left flex justify-between items-center ${selectedSpecId === spec.id ? 'bg-[#0A192F] border-[#C5A880] text-white shadow-md' : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-sm ${selectedSpecId === spec.id ? 'bg-white/10 text-[#C5A880]' : 'bg-[#0A192F]/5 text-[#0A192F]'}`}>
                      {spec.iconName === 'Activity' ? <Activity size={16} /> : spec.iconName === 'Workflow' ? <Workflow size={16} /> : spec.iconName === 'Award' ? <Award size={16} /> : <ShieldAlert size={16} />}
                    </div>
                    <div>
                      <span className="font-serif-clinical text-xs font-bold block">{getTranslation(spec.title)}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className={`transform transition-transform ${selectedSpecId === spec.id ? 'rotate-90 text-[#C5A880]' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Right specialty detailed dossier container */}
            {(() => {
              const spec = SPECIALTIES.find(s => s.id === selectedSpecId) || SPECIALTIES[0];
              return (
                <div className="lg:col-span-8 bg-white border border-gray-150 p-6 rounded-sm shadow-xs animate-fade-in">
                  <div className="border-b border-gray-100 pb-4 mb-4">
                    <span className="text-[#C5A880] text-[9px] font-bold tracking-widest uppercase block mb-1">DÉPARTEMENT DE CHIRURGIE</span>
                    <h4 className="font-serif-clinical text-lg sm:text-xl font-extrabold text-[#0A192F]">{getTranslation(spec.title)}</h4>
                    <p className="text-gray-500 text-xs mt-1 italic">{getTranslation(spec.subtitle)}</p>
                  </div>

                  {spec.image && (
                    <div className="mb-6 rounded-sm overflow-hidden border border-gray-100 h-64 sm:h-80 md:h-[380px] relative shadow-3xs" id={`spec-image-${spec.id}`}>
                      <img 
                        src={spec.image} 
                        alt={getTranslation(spec.title)}
                        className="w-full h-full object-cover opacity-95 hover:scale-101 transition duration-500"
                        referrerPolicy="no-referrer"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent"></div>
                    </div>
                  )}

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {getTranslation(spec.description)}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Key Procedures */}
                    <div>
                      <h5 className="text-[11px] font-extrabold text-[#0A192F] tracking-wider uppercase mb-3 flex items-center gap-1.5 border-b border-gray-50 pb-1.5">
                        <CheckCircle size={12} className="text-[#C5A880]" />
                        {getTranslation(uiTranslations.proceduresHeader)}
                      </h5>
                      <ul className="space-y-2.5">
                        {spec.procedures.map((proc, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 flex-shrink-0"></span>
                            <span>{getTranslation(proc)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Standardized Recovery Staging */}
                    <div>
                      <h5 className="text-[11px] font-extrabold text-[#0A192F] tracking-wider uppercase mb-3 flex items-center gap-1.5 border-b border-gray-50 pb-1.5">
                        <Clock size={12} className="text-[#C5A880]" />
                        {getTranslation(uiTranslations.recoveryProtocolHeader)}
                      </h5>

                      {/* Staging Tab System */}
                      <div className="flex gap-1.5 bg-gray-50 p-1 rounded-sm mb-3">
                        <button 
                          onClick={() => setActiveSpecPhase('phase1')}
                          className={`flex-1 text-[9px] font-bold py-1 px-1.5 rounded-xs transition-all ${activeSpecPhase === 'phase1' ? 'bg-[#0A192F] text-white shadow-xs' : 'text-gray-500 hover:text-[#0A192F]'}`}
                        >
                          Phase I
                        </button>
                        <button 
                          onClick={() => setActiveSpecPhase('phase2')}
                          className={`flex-1 text-[9px] font-bold py-1 px-1.5 rounded-xs transition-all ${activeSpecPhase === 'phase2' ? 'bg-[#0A192F] text-white shadow-xs' : 'text-gray-500 hover:text-[#0A192F]'}`}
                        >
                          Phase II
                        </button>
                        <button 
                          onClick={() => setActiveSpecPhase('phase3')}
                          className={`flex-1 text-[9px] font-bold py-1 px-1.5 rounded-xs transition-all ${activeSpecPhase === 'phase3' ? 'bg-[#0A192F] text-white shadow-xs' : 'text-gray-500 hover:text-[#0A192F]'}`}
                        >
                          Phase III
                        </button>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-sm border border-gray-100 min-h-[70px] flex items-center">
                        <p className="text-[11px] text-gray-600 leading-normal">
                          {getTranslation(spec.recoveryProtocol[activeSpecPhase])}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Booking Link block */}
                  <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => {
                        handleBookFromTriage(spec.id, getTranslation(spec.title));
                      }}
                      className="border border-[#C5A880] text-[#0A192F] hover:bg-[#C5A880] hover:text-white font-serif-clinical text-[11px] font-bold tracking-wider px-4 py-2 rounded-sm transition duration-200 flex items-center gap-2 uppercase"
                    >
                      <Calendar size={12} />
                      {lang === 'ar' ? 'حجز استشارة لهذا التخصص' : lang === 'fr' ? 'Réserver pour cette spécialité' : 'Book Consultation for this Specialty'}
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE DOCTOR SECTION */}
      <section className="py-16 bg-white border-y border-gray-100" id="about-section">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Biographical details & Stat counters */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
                {lang === 'ar' ? 'الجراح الإخصائي المشرف' : lang === 'fr' ? 'LE CHIRURGIEN PRINCIPAL' : 'CHIEF MEDICAL DIRECTOR'}
              </span>
              <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                {getTranslation(uiTranslations.aboutHeading)}
              </h3>
              <div className="w-12 h-0.5 bg-[#C5A880] mt-3"></div>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-light">
              {getTranslation(uiTranslations.aboutBiography)}
            </p>

            {/* French Credentials Dossier Accordion */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm">
              <h4 className="text-[11px] font-bold text-[#0A192F] uppercase tracking-widest mb-3 border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                <Award size={13} className="text-[#C5A880]" />
                {lang === 'ar' ? 'الملف الأكاديمي والزمالات:' : lang === 'fr' ? 'DOSSIER ACADÉMIQUE ET CERTIFICATS :' : 'ACADEMIC DOSSIER & FELLOWSHIPS:'}
              </h4>
              <ul className="space-y-2.5">
                {DOCTORS[0].credentials.map((cred, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-gray-700">
                    <Check size={12} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                    <span className="font-light">{getTranslation(cred)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100" id="stats-grid">
              <div className="text-center p-3.5 bg-gray-50 rounded-sm border border-gray-100 shadow-3xs">
                <div className="font-serif-clinical text-xl sm:text-2xl font-extrabold text-[#0A192F]">15+</div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">
                  {getTranslation(uiTranslations.statYears)}
                </div>
              </div>

              <div className="text-center p-3.5 bg-gray-50 rounded-sm border border-gray-100 shadow-3xs">
                <div className="font-serif-clinical text-xl sm:text-2xl font-extrabold text-[#0A192F]">3</div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">
                  {getTranslation(uiTranslations.statClinics)}
                </div>
              </div>

              <div className="text-center p-3.5 bg-gray-50 rounded-sm border border-gray-100 shadow-3xs">
                <div className="font-serif-clinical text-xl sm:text-2xl font-extrabold text-[#0A192F]">1000+</div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">
                  {getTranslation(uiTranslations.statSurgeries)}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Sophisticated Professional Headshot with gallery framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm p-2 bg-white border border-[#C5A880]/40 rounded-sm shadow-md" id="doctor-portrait-frame">
              {/* Main image container */}
              <div className="relative bg-[#0A192F] overflow-hidden rounded-sm border border-gray-100 z-10">
                <img 
                  src={ali123Img}
                  alt="Dr. Ali Fares"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-top opacity-95 hover:scale-103 transition duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A192F] to-transparent p-4">
                  <span className="text-[#C5A880] text-[8px] font-mono tracking-widest uppercase block mb-0.5">MEMBER OF SOFCOT & LOA</span>
                  <span className="font-serif-clinical text-xs font-bold text-white block">Dr. Ali Fares • Paris Trained Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINICAL SYMPTOM TRIAGE & DIAGNOSTIC SIMULATION */}
      <section className="py-16 bg-gray-50" id="triage-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
              {lang === 'ar' ? 'التشخيص الذاتي السريع' : lang === 'fr' ? 'SIMULATION DE DIAGNOSTIC' : 'CLINICAL INTAKE SCREENING'}
            </span>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {getTranslation(uiTranslations.triageTitle)}
            </h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              {getTranslation(uiTranslations.triageSub)}
            </p>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Selection forms */}
            <div className="lg:col-span-5 bg-white border border-gray-150 p-6 rounded-sm shadow-xs flex flex-col justify-between">
              <div className="space-y-5">
                {/* Joint Category Select */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {getTranslation(uiTranslations.selectJoint)}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {DIAGNOSTIC_CASES.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSelectedTriageId(item.id);
                          // Select first option as fallback
                          const firstOpt = item.symptoms[0].options[0];
                          setSelectedSymptomId(firstOpt.id);
                        }}
                        className={`py-2.5 px-2 rounded-sm border text-[11px] font-bold transition duration-200 text-center ${selectedTriageId === item.id ? 'bg-[#0A192F] border-[#C5A880] text-white shadow-xs' : 'bg-[#F8F9FA] border-gray-200 text-gray-700 hover:bg-gray-100'}`}
                      >
                        {getTranslation(item.jointName)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specific Symptom Select */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {getTranslation(uiTranslations.selectSymptom)}
                  </label>
                  <div className="space-y-2">
                    {activeTriageCase.symptoms[0].options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedSymptomId(opt.id)}
                        className={`w-full text-right py-3 px-3.5 rounded-sm border text-xs transition duration-200 flex items-start gap-2.5 ${selectedSymptomId === opt.id ? 'bg-[#C5A880]/10 border-[#C5A880] text-[#0A192F] font-bold shadow-2xs' : 'bg-[#F8F9FA] border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${selectedSymptomId === opt.id ? 'bg-[#0A192F]' : 'bg-gray-400'}`}></span>
                        <span className="leading-snug text-left">{getTranslation(opt.text)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Informative advice */}
              <div className="mt-6 p-3 bg-[#0A192F]/5 border border-[#0A192F]/10 rounded-sm flex items-start gap-2 text-[10px] text-gray-500">
                <Info size={14} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                <p className="leading-normal">
                  {lang === 'ar' 
                    ? 'هذا الفرز يعتمد على بروتوكولات الأكاديمية الأوروبية لإصابات الملاعب للتحقق الأولي ولا يغني عن الفحص السريري المباشر.' 
                    : 'This initial diagnostic sorting relies on European sports trauma standards and does not substitute a proper, direct clinical consult.'}
                </p>
              </div>
            </div>

            {/* Right Box: Triage Diagnosis Results Screen */}
            <div className="lg:col-span-7 bg-[#0A192F] text-white border border-[#C5A880]/30 p-6 rounded-sm shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-12 translate-y-12">
                <Activity size={320} className="text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[#C5A880] text-[9px] font-mono tracking-widest uppercase block">CLINICAL TRIAGE ASSESSMENT</span>
                    <h4 className="font-serif-clinical text-base font-bold mt-1">
                      {getTranslation(activeTriageCase.jointName)} - {getTranslation(uiTranslations.logoTitle)}
                    </h4>
                  </div>
                  {/* Severity level badge */}
                  <div className="text-right">
                    <span className="text-[9.5px] text-gray-400 block uppercase font-mono">{getTranslation(uiTranslations.severityLevel)}</span>
                    <span className={`inline-block text-[10px] font-bold font-mono uppercase px-2.5 py-0.5 rounded-xs mt-1 ${activeSymptomOption.severity === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : activeSymptomOption.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
                      {activeSymptomOption.severity === 'high' ? (lang === 'ar' ? 'أولوية عاجلة (حمراء)' : 'URGENT PRIORITY (RED)') : activeSymptomOption.severity === 'medium' ? (lang === 'ar' ? 'متوسط (صفراء)' : 'INTERMEDIATE (YELLOW)') : (lang === 'ar' ? 'استشاري (خضراء)' : 'ROUTINE CONSULT (GREEN)')}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Recommendation block */}
                  <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-light">
                      {getTranslation(activeSymptomOption.recommendation)}
                    </p>
                  </div>

                  {/* Imaging & Tests Required */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="bg-[#122A4E] p-3 rounded-sm border border-white/5">
                      <span className="text-[#C5A880] text-[9px] block uppercase font-bold tracking-wider mb-1">
                        {getTranslation(uiTranslations.recommendedImaging)}
                      </span>
                      <span className="text-gray-200 text-[11px] font-light leading-normal block">
                        {getTranslation(activeSymptomOption.imagingRequired)}
                      </span>
                    </div>

                    <div className="bg-[#122A4E] p-3 rounded-sm border border-white/5">
                      <span className="text-[#C5A880] text-[9px] block uppercase font-bold tracking-wider mb-1">
                        {getTranslation(uiTranslations.estRecoveryTime)}
                      </span>
                      <span className="text-gray-200 text-[11px] font-light leading-normal block">
                        {getTranslation(activeSymptomOption.estimatedRecovery)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action priority CTA */}
              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 relative z-10">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] text-gray-400 block">{lang === 'ar' ? 'الجراح المسؤول:' : 'SUPERVISING SURGEON:'}</span>
                  <span className="font-serif-clinical text-xs font-bold text-[#C5A880]">{getTranslation(DOCTORS[0].name)}</span>
                </div>

                <button
                  onClick={() => handleBookFromTriage(activeTriageCase.id, getTranslation(activeSymptomOption.text))}
                  className="bg-[#C5A880] text-[#0A192F] hover:bg-[#D4AF37] text-xs font-bold px-5 py-2.5 rounded-sm transition duration-200 tracking-wider uppercase shadow-sm flex items-center gap-1.5"
                >
                  {getTranslation(uiTranslations.bookWithFares)}
                  <ArrowRight size={13} className="rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ATHLETE RECOVERY TRACKER SECTION */}
      <section className="py-16 bg-white border-b border-gray-100" id="tracker-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
              {lang === 'ar' ? 'التأهيل والتعافي الرياضي' : lang === 'fr' ? 'SUIVI DE COMPATIBILITÉ' : 'REHABILITATION GATEWAY'}
            </span>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {getTranslation(uiTranslations.trackerTitle)}
            </h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              {getTranslation(uiTranslations.trackerSub)}
            </p>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left box: Milestone navigation & dynamic charting */}
            <div className="lg:col-span-7 bg-[#0A192F] text-white border border-[#C5A880]/30 p-6 rounded-sm shadow-md flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4 mb-4">
                  {/* Select rehabilitation path */}
                  <div>
                    <span className="text-[#C5A880] text-[9px] font-mono tracking-widest uppercase block">REHABILITATION PATHWAY</span>
                    <div className="flex gap-1.5 mt-1.5" id="rehab-protocol-tabs">
                      <button
                        onClick={() => {
                          setTrackerProtocol('knee');
                          setSelectedMilestoneDay(15);
                        }}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-xs transition duration-200 border ${trackerProtocol === 'knee' ? 'bg-[#C5A880] text-[#0A192F] border-[#C5A880]' : 'bg-transparent border-white/10 text-white hover:bg-white/5'}`}
                      >
                        {lang === 'ar' ? 'رباط صليبي / ركبة' : 'ACL / Knee'}
                      </button>
                      <button
                        onClick={() => {
                          setTrackerProtocol('shoulder');
                          setSelectedMilestoneDay(15);
                        }}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-xs transition duration-200 border ${trackerProtocol === 'shoulder' ? 'bg-[#C5A880] text-[#0A192F] border-[#C5A880]' : 'bg-transparent border-white/10 text-white hover:bg-white/5'}`}
                      >
                        {lang === 'ar' ? 'أوتار / كتف' : 'Cuff / Shoulder'}
                      </button>
                      <button
                        onClick={() => {
                          setTrackerProtocol('trauma');
                          setSelectedMilestoneDay(15);
                        }}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-xs transition duration-200 border ${trackerProtocol === 'trauma' ? 'bg-[#C5A880] text-[#0A192F] border-[#C5A880]' : 'bg-transparent border-white/10 text-white hover:bg-white/5'}`}
                      >
                        {lang === 'ar' ? 'عظام / كسور' : 'Fracture / Trauma'}
                      </button>
                    </div>
                  </div>

                  {/* Task compliance gauge */}
                  <div className="text-center sm:text-right">
                    <span className="text-[10px] text-gray-400 block uppercase font-mono">{getTranslation(uiTranslations.currentProgress)}</span>
                    <span className="font-serif-clinical text-xl sm:text-2xl font-extrabold text-[#C5A880] mt-1 block">
                      {getProgressPercentage()}%
                    </span>
                  </div>
                </div>

                {/* Plot Line: Progress curves over milestones */}
                <div className="bg-white/5 border border-white/5 p-4 rounded-sm mt-4">
                  <div className="flex justify-between items-center pb-2.5 border-b border-white/5 mb-3">
                    <h4 className="font-serif-clinical text-xs font-bold text-[#C5A880]">
                      {getTranslation(uiTranslations.romTitle)}
                    </h4>
                    <span className="font-mono text-[9px] text-gray-400">
                      {lang === 'en' ? 'TARGET COMFORT: 100%' : 'القدرة التشغيلية المستهدفة: ١٠٠٪'}
                    </span>
                  </div>

                  <div className="h-28 w-full mt-2 relative">
                    {/* SVG Progress Curve Chart */}
                    <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#C5A880" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Background lines */}
                      <line x1="40" y1="20" x2="580" y2="20" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
                      <line x1="40" y1="70" x2="580" y2="70" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
                      <line x1="40" y1="120" x2="580" y2="120" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
                      <line x1="40" y1="170" x2="580" y2="170" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />

                      {/* Axis Labels */}
                      <text x="10" y="24" className="text-[10px] font-mono fill-gray-400">100%</text>
                      <text x="10" y="74" className="text-[10px] font-mono fill-gray-400">80%</text>
                      <text x="10" y="124" className="text-[10px] font-mono fill-gray-400">60%</text>
                      <text x="10" y="174" className="text-[10px] font-mono fill-gray-400">40%</text>

                      {/* Dynamic calculations for path curve based on checklist state */}
                      {(() => {
                        const score = Math.max(40, 40 + getProgressPercentage() * 0.6); // dynamically shifts node 2 based on checked exercises!
                        const y1 = 170; // Day 1
                        const y15 = 200 - (score) * 1.8; // Day 15 (dynamic)
                        const y45 = 85; // Day 45
                        const y90 = 25; // Day 90

                        const pathD = `M 40 ${y1} L 180 ${y15} L 360 ${y45} L 580 ${y90}`;
                        const areaD = `M 40 ${y1} L 180 ${y15} L 360 ${y45} L 580 ${y90} L 580 200 L 40 200 Z`;

                        return (
                          <>
                            <path d={areaD} fill="url(#curveGrad)" />
                            <path d={pathD} fill="none" stroke="#C5A880" strokeWidth="2.5" />
                            
                            {/* Day 1 Node */}
                            <circle cx="40" cy={y1} r="4" fill="#0A192F" stroke="#C5A880" strokeWidth="1.5" />
                            {/* Day 15 active/dynamic Node */}
                            <circle cx="180" cy={y15} r="6.5" fill="#C5A880" stroke="#0A192F" strokeWidth="2.5" className="animate-pulse" />
                            <text x="180" y={y15 - 12} textAnchor="middle" className="text-[10px] font-mono fill-white font-bold">{Math.round(score)}%</text>

                            {/* Day 45 Node */}
                            <circle cx="360" cy={y45} r="4.5" fill="#0A192F" stroke="#C5A880" strokeWidth="1.5" />
                            <text x="360" y={y45 - 10} textAnchor="middle" className="text-[9px] font-mono fill-gray-400 font-semibold">80%</text>

                            {/* Day 90 Node */}
                            <circle cx="580" cy={y90} r="4.5" fill="#0A192F" stroke="#C5A880" strokeWidth="1.5" />
                            <text x="560" y={y90 - 10} textAnchor="middle" className="text-[9px] font-mono fill-gray-400 font-semibold">100%</text>
                          </>
                        );
                      })()}
                    </svg>
                  </div>

                  {/* X Axis labels */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-400 px-1 pt-2 border-t border-white/5">
                    <span>{lang === 'ar' ? 'اليوم ١ (الالتهاب)' : 'Day 1 (Acute)'}</span>
                    <span className="text-[#C5A880] font-bold">{lang === 'ar' ? 'اليوم ١٥ (تفعيل)' : 'Day 15 (Active)'}</span>
                    <span>{lang === 'ar' ? 'اليوم ٤٥ (تقوية)' : 'Day 45 (Strength)'}</span>
                    <span>{lang === 'ar' ? 'اليوم ٩٠ (الملاعب)' : 'Day 90 (Return)'}</span>
                  </div>
                </div>
              </div>

              {/* Authority reference */}
              <div className="text-[9px] text-gray-400 leading-normal border-t border-white/10 pt-4 mt-4 flex justify-between items-center">
                <span>{lang === 'ar' ? 'بروتوكول جراحي فرنسي معتمد' : 'Standardized French Rehabilitation Pathway'}</span>
                <span className="font-mono text-[9px] text-[#C5A880]">REG-UGA: #F-9811</span>
              </div>
            </div>

            {/* Right box: Dynamic milestone detail & exercises checklist */}
            <div className="lg:col-span-5 bg-white border border-gray-150 p-6 rounded-sm shadow-xs flex flex-col justify-between">
              <div>
                {/* Milestone Day Tabs */}
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    {getTranslation(uiTranslations.milestoneDays)}
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 15, 45, 90].map((day) => {
                      const mil = SPORTS_REHAB_MILESTONES.find(m => m.day === day)!;
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedMilestoneDay(day)}
                          className={`py-2 px-1 text-center rounded-sm border text-[11px] font-bold transition duration-200 ${selectedMilestoneDay === day ? 'bg-[#0A192F] border-[#C5A880] text-white shadow-xs' : 'bg-[#F8F9FA] border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                        >
                          {lang === 'ar' ? `يوم ${day}` : `Day ${day}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Milestone detail text */}
                {(() => {
                  const mil = SPORTS_REHAB_MILESTONES.find(m => m.day === selectedMilestoneDay)!;
                  return (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <span className="inline-block text-[9px] font-mono font-bold bg-[#C5A880]/15 text-[#0A192F] px-2 py-0.5 rounded-xs uppercase">
                          {selectedMilestoneDay === 1 ? getTranslation(uiTranslations.completedLabel) : selectedMilestoneDay === 15 ? getTranslation(uiTranslations.activeLabel) : getTranslation(uiTranslations.pendingLabel)}
                        </span>
                        <h4 className="font-serif-clinical text-sm font-extrabold text-[#0A192F] mt-1.5 leading-snug">
                          {getTranslation(mil.title)}
                        </h4>
                        <p className="text-gray-500 text-[11px] mt-1.5 leading-relaxed font-light">
                          {getTranslation(mil.description)}
                        </p>
                      </div>

                      {/* Exercises checklist */}
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <span className="text-[10px] font-extrabold text-[#0A192F] uppercase tracking-wider block mb-1">
                          {getTranslation(uiTranslations.dailyTasks)}
                        </span>
                        
                        {mil.exercises.map((ex, idx) => {
                          const taskKey = `${trackerProtocol}-${selectedMilestoneDay}-${idx}`;
                          const isChecked = !!checkedTasks[taskKey];
                          return (
                            <div 
                              key={idx}
                              onClick={() => handleToggleTask(idx)}
                              className={`p-3 rounded-sm border transition duration-150 cursor-pointer flex items-start gap-3 ${isChecked ? 'bg-emerald-50/40 border-emerald-200 text-[#0F5132]' : 'bg-[#F8F9FA] border-gray-100 text-gray-700 hover:border-gray-200'}`}
                            >
                              <div className={`w-4 h-4 rounded-xs border flex items-center justify-center mt-0.5 flex-shrink-0 ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-300 bg-white'}`}>
                                {isChecked && <Check size={11} strokeWidth={3} />}
                              </div>
                              <div className="flex-1">
                                <span className={`text-[11.5px] font-medium leading-snug block ${isChecked ? 'line-through text-gray-500' : ''}`}>
                                  {getTranslation(ex.name)}
                                </span>
                                <div className="flex items-center gap-2 mt-1 text-[9.5px] text-gray-500 font-mono">
                                  <span className="flex items-center gap-0.5"><Clock size={9} /> {getTranslation(ex.duration)}</span>
                                  <span>•</span>
                                  <span>{ex.reps}</span>
                                  <span>•</span>
                                  <span className={`px-1 rounded-xs font-bold ${ex.intensity === 'Precise' ? 'bg-[#0A192F]/5 text-[#0A192F]' : ex.intensity === 'Moderate' ? 'bg-[#C5A880]/10 text-[#0A192F]' : 'bg-gray-100 text-gray-600'}`}>{ex.intensity}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Progress Bar overall status */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-[10px] text-gray-500 mb-1.5 font-mono">
                  <span>{lang === 'ar' ? 'الالتزام الكلي للمرحلة' : 'Adherence Ratio'}</span>
                  <span className="font-bold text-[#0A192F]">{getProgressPercentage()}%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#C5A880] h-full rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE PATIENT CLINICAL LIBRARY (HOTSPOT ACCENTS) */}
      <section className="py-16 bg-gray-50 border-b border-gray-100" id="education-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
              {lang === 'ar' ? 'المكتبة السريرية والأطلس الطبي' : lang === 'fr' ? 'ÉDUCATION ET ANATOMIE INTERACTIVE' : 'PATIENT EDUCATION PORTAL'}
            </span>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {getTranslation(uiTranslations.eduTitle)}
            </h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              {getTranslation(uiTranslations.eduSub)}
            </p>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Col: Interactive hotspot diagram */}
            <div className="lg:col-span-5 bg-[#0A192F] text-white p-6 rounded-sm border border-[#C5A880]/20 flex flex-col justify-between">
              <div>
                <span className="text-[#C5A880] text-[9.5px] font-mono tracking-widest uppercase block mb-1">INTERACTIVE SKELETAL ATLAS</span>
                <h4 className="font-serif-clinical text-sm font-bold text-white border-b border-white/5 pb-2 mb-4">
                  {lang === 'ar' ? 'انقر على الجزء التشريحي لمعرفة آلياته العلاجية' : lang === 'fr' ? 'Sélectionnez un élément pour voir son anatomie' : 'Select anatomical component to load diagnostic focus'}
                </h4>

                {/* Hotspot buttons list */}
                <div className="space-y-2 mb-6">
                  {Object.keys(ANATOMY_HOTSPOTS).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedAnatomyPart(key)}
                      className={`w-full text-right py-2.5 px-3 rounded-sm border text-xs font-semibold transition-all flex justify-between items-center ${selectedAnatomyPart === key ? 'bg-[#C5A880] border-[#C5A880] text-[#0A192F] font-extrabold shadow-sm' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${selectedAnatomyPart === key ? 'bg-[#0A192F]' : 'bg-[#C5A880]'}`}></span>
                        <span className="text-left">{getTranslation(ANATOMY_HOTSPOTS[key].name)}</span>
                      </div>
                      <ChevronRight size={12} className={`rtl:rotate-180 ${selectedAnatomyPart === key ? 'text-[#0A192F]' : 'text-[#C5A880]'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Miniature vector rendering */}
              <div className="h-44 bg-white/5 rounded-sm border border-white/5 flex items-center justify-center p-4">
                <svg viewBox="0 0 100 100" className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor">
                  {/* Bone vectors */}
                  <rect x="42" y="5" width="16" height="40" rx="3" fill="#0A192F" stroke="#C5A880" strokeWidth="1" />
                  <rect x="42" y="55" width="16" height="40" rx="3" fill="#0A192F" stroke="#C5A880" strokeWidth="1" />
                  <circle cx="50" cy="50" r="10" fill="#122A4E" stroke="#C5A880" strokeWidth="1.5" />
                  
                  {/* Selected component indicator lines */}
                  {selectedAnatomyPart === 'acl' && (
                    <>
                      <line x1="47" y1="45" x2="53" y2="55" stroke="#FF4D4D" strokeWidth="2.5" className="animate-pulse" />
                      <circle cx="50" cy="50" r="13" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="2,2" />
                    </>
                  )}
                  {selectedAnatomyPart === 'meniscus' && (
                    <>
                      <path d="M 37,50 A 13,13 0 0,1 63,50" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                      <circle cx="50" cy="50" r="15" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="2,2" />
                    </>
                  )}
                  {selectedAnatomyPart === 'cuff' && (
                    <>
                      <path d="M 35,25 Q 50,15 65,25" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                      <circle cx="50" cy="22" r="8" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="2,2" />
                    </>
                  )}
                  {selectedAnatomyPart === 'labrum' && (
                    <>
                      <circle cx="50" cy="50" r="6" stroke="#FF4D4D" strokeWidth="2" className="animate-pulse" />
                      <circle cx="50" cy="50" r="10" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="2,2" />
                    </>
                  )}
                </svg>
              </div>
            </div>

            {/* Right Col: Details block & Article Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* Highlight details card */}
              <div className="bg-white border border-gray-150 p-5 rounded-sm shadow-2xs">
                <span className="text-[#C5A880] text-[9px] font-mono tracking-widest uppercase block mb-1">ANATOMICAL PROFILE & FOCUS</span>
                <h4 className="font-serif-clinical text-sm font-extrabold text-[#0A192F] mb-2">
                  {getTranslation(ANATOMY_HOTSPOTS[selectedAnatomyPart].name)}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {getTranslation(ANATOMY_HOTSPOTS[selectedAnatomyPart].desc)}
                </p>

                <div className="p-3.5 bg-gray-50 border border-gray-150 rounded-sm">
                  <span className="text-[#0A192F] text-[9.5px] font-extrabold uppercase tracking-wider block mb-1">
                    {lang === 'ar' ? 'التصحيح الجراحي بالمنظار:' : lang === 'fr' ? 'CORRECTION ARTHROSCOPIQUE MÉNAGÉE :' : 'ARTHROSCOPIC CORRECTION METHOD:'}
                  </span>
                  <p className="text-gray-700 text-xs font-light leading-normal">
                    {getTranslation(ANATOMY_HOTSPOTS[selectedAnatomyPart].surgical)}
                  </p>
                </div>
              </div>

              {/* Three card patient education library */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="educational-library-grid">
                {/* Card 1 */}
                <div 
                  onClick={() => setSelectedArticleId('acl')}
                  className="bg-white border border-gray-150 p-4 rounded-sm shadow-3xs flex flex-col justify-between cursor-pointer hover:border-[#C5A880] transition duration-200 hover:shadow-2xs group"
                >
                  <div>
                    <div className="p-2 w-8 h-8 rounded-sm bg-[#0A192F]/5 text-[#0A192F] mb-3 group-hover:bg-[#C5A880]/10 group-hover:text-[#C5A880] transition-colors">
                      <BookOpen size={15} />
                    </div>
                    <h5 className="font-serif-clinical text-xs font-bold text-[#0A192F] leading-snug group-hover:text-[#C5A880] transition-colors">
                      {lang === 'ar' ? 'فهم تمزق الرباط الصليبي وعلاجه بالمنظار' : 'Understanding ACL Tears & Reconstructions'}
                    </h5>
                    <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed font-light">
                      {lang === 'ar' ? 'دليل طبي شامل يشرح كيفية عودة الاستقرار للمفصل بعد الإصابة.' : 'A comprehensive medical guide explaining stability recovery pathways.'}
                    </p>
                  </div>
                  <span className="text-[9px] text-[#C5A880] font-bold block mt-3 uppercase tracking-wider group-hover:underline">
                    {lang === 'ar' ? 'قراءة المقال ←' : 'Read Article ←'}
                  </span>
                </div>

                {/* Card 2 */}
                <div 
                  onClick={() => setSelectedArticleId('rotator')}
                  className="bg-white border border-gray-150 p-4 rounded-sm shadow-3xs flex flex-col justify-between cursor-pointer hover:border-[#C5A880] transition duration-200 hover:shadow-2xs group"
                >
                  <div>
                    <div className="p-2 w-8 h-8 rounded-sm bg-[#0A192F]/5 text-[#0A192F] mb-3 group-hover:bg-[#C5A880]/10 group-hover:text-[#C5A880] transition-colors">
                      <Workflow size={15} />
                    </div>
                    <h5 className="font-serif-clinical text-xs font-bold text-[#0A192F] leading-snug group-hover:text-[#C5A880] transition-colors">
                      {lang === 'ar' ? 'ترميم أوتار الكتف: متى نقرر الجراحة بالمنظار؟' : 'Rotator Cuff Repair: Surgical Indications'}
                    </h5>
                    <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed font-light">
                      {lang === 'ar' ? 'تفاصيل علمية لخيارات علاج آلام الكتف الأكاديمية والسريرية.' : 'Academic criteria used to evaluate shoulder tendon preservation surgical timing.'}
                    </p>
                  </div>
                  <span className="text-[9px] text-[#C5A880] font-bold block mt-3 uppercase tracking-wider group-hover:underline">
                    {lang === 'ar' ? 'قراءة المقال ←' : 'Read Article ←'}
                  </span>
                </div>

                {/* Card 3 */}
                <div 
                  onClick={() => setSelectedArticleId('joint')}
                  className="bg-white border border-gray-150 p-4 rounded-sm shadow-3xs flex flex-col justify-between cursor-pointer hover:border-[#C5A880] transition duration-200 hover:shadow-2xs group"
                >
                  <div>
                    <div className="p-2 w-8 h-8 rounded-sm bg-[#0A192F]/5 text-[#0A192F] mb-3 group-hover:bg-[#C5A880]/10 group-hover:text-[#C5A880] transition-colors">
                      <Activity size={15} />
                    </div>
                    <h5 className="font-serif-clinical text-xs font-bold text-[#0A192F] leading-snug group-hover:text-[#C5A880] transition-colors">
                      {lang === 'ar' ? 'التعافي السريع بعد جراحات استبدال المفاصل' : 'Fast-Track Protocols in Joint Replacements'}
                    </h5>
                    <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed font-light">
                      {lang === 'ar' ? 'بروتوكولات حديثة لتجنب تصلب المفصل والنهوض المبكر بأمان.' : 'Modern French guidelines to avoid stiffness and promote immediate load-bearing.'}
                    </p>
                  </div>
                  <span className="text-[9px] text-[#C5A880] font-bold block mt-3 uppercase tracking-wider group-hover:underline">
                    {lang === 'ar' ? 'قراءة المقال ←' : 'Read Article ←'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (ACCORDIONS) */}
      <section className="py-16 bg-white border-b border-gray-100" id="faq-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
              {getTranslation(uiTranslations.faqTitle)}
            </span>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {lang === 'ar' ? 'الأسئلة السريرية الأكثر شيوعًا' : 'Frequently Answered Clinical Queries'}
            </h3>
            <p className="text-gray-500 text-xs mt-2">
              {getTranslation(uiTranslations.faqSub)}
            </p>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3"></div>
          </div>

          <div className="space-y-3" id="faq-accordion-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isExpanded = expandedFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-gray-50 border border-gray-200 rounded-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                    className="w-full text-right py-4 px-5 flex justify-between items-center gap-4 text-xs sm:text-sm font-semibold text-[#0A192F] hover:bg-gray-100 transition-colors"
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <span className="text-left leading-snug">{getTranslation(item.q)}</span>
                    <ChevronDown size={14} className={`transform transition-transform duration-200 text-[#C5A880] ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-4 pt-1 border-t border-gray-100 animate-fade-in bg-white">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light font-sans">
                        {getTranslation(item.a)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. 3D INTERACTIVE CLINICAL GALLERY */}
      <section className="py-20 bg-gray-50 border-b border-gray-150 overflow-hidden relative" id="clinical-gallery-section">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A192F]/3 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 mb-12 relative z-10 text-center">
          <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest block mb-1">
            {lang === 'ar' ? 'معرض الميكانيكا الحيوية ثلاثي الأبعاد' : lang === 'fr' ? 'GALERIE BIOMÉCANIQUE 3D' : '3D BIOMECHANICAL GALLERY'}
          </span>
          <h3 className="font-serif-clinical text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            {lang === 'ar' ? 'النمذجة والتشخيص ثلاثي الأبعاد المتقدم' : lang === 'fr' ? 'Modélisation & Diagnostic Clinique 3D' : 'Advanced 3D Biomechanical & Anatomy Modeling'}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-2.5 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'ar' 
              ? 'مجموعة من الأبحاث والنماذج ثلاثية الأبعاد التوضيحية التي يستخدمها الدكتور علي فارس لتشخيص الإصابات الدقيقة ومحاكاة عمليات المفاصل والأوتار.'
              : lang === 'fr'
                ? 'Une collection de modélisations biomécaniques 3D et d\'imageries de diagnostic clinique utilisées pour la simulation de chirurgie de pointe.'
                : 'A state-of-the-art interactive collection of 3D anatomical models and clinical imaging simulations used by Dr. Ali Fares for surgical planning and patient education.'}
          </p>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4.5"></div>
        </div>

        {/* Infinite marquee scrolling container from left to right */}
        <div className="relative w-full overflow-hidden py-4 select-none" dir="ltr">
          {/* Subtle overlay gradients for fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="animate-marquee-ltr hover:[animation-play-state:paused] flex gap-5 py-4 w-max cursor-grab active:cursor-grabbing" dir="ltr">
            {/* Triple the list for infinite looping with zero gaps */}
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((item, idx) => {
              // Stagger delay based on index for cute dance
              const danceDelayClass = `dance-delay-${(idx % 8) + 1}`;
              return (
                <div 
                  key={idx}
                  onClick={() => setSelectedGalleryImage(item)}
                  className={`w-64 sm:w-72 bg-white rounded-md border border-gray-150 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex-shrink-0 group dance-card ${danceDelayClass}`}
                >
                  <div className="h-44 sm:h-48 overflow-hidden relative bg-[#0A192F]">
                    <img 
                      src={item.image} 
                      alt={getTranslation(item.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-[#0A192F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-xs text-[#0A192F] text-[10px] uppercase font-bold py-1.5 px-3 rounded-full flex items-center gap-1.5 tracking-wider shadow-xs">
                        <Sparkles size={11} className="text-[#C5A880] animate-spin" />
                        <span>{lang === 'ar' ? 'عرض ثلاثي الأبعاد' : lang === 'fr' ? 'Anatomie 3D' : 'Examine 3D'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                    <h4 className="font-serif-clinical text-xs sm:text-sm font-bold text-[#0A192F] tracking-tight group-hover:text-[#C5A880] transition-colors line-clamp-1">
                      {getTranslation(item.title)}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-light leading-relaxed mt-1 line-clamp-2 h-7.5">
                      {getTranslation(item.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Suggestion */}
        <div className="text-center mt-6">
          <p className="text-[10.5px] font-mono text-gray-400">
            {lang === 'ar' 
              ? '💡 مرر مؤشر الفأرة لإيقاف الحركة مؤقتاً. انقر على أي لوحة لفحص التشخيص.' 
              : lang === 'fr'
                ? '💡 Survolez pour mettre en pause. Cliquez sur une image pour l\'examiner.'
                : '💡 Hover over cards to pause scrolling. Click on any model card to inspect full biomechanical details.'}
          </p>
        </div>

        {/* Gallery Image Full Details Modal */}
        {selectedGalleryImage && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/90 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in" 
            id="gallery-detail-backdrop"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <div 
              className="bg-white rounded-md border border-[#C5A880]/30 shadow-2xl max-w-xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col my-8" 
              id="gallery-detail-window"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="bg-[#0A192F] text-white p-5 pb-6 border-b border-[#C5A880]/20 relative flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div className="pe-12 pl-12 text-center sm:text-left">
                  <span className="text-[#C5A880] text-[8px] font-mono tracking-widest uppercase block mb-1">
                    {lang === 'ar' ? 'فحص التشخيص ثلاثي الأبعاد' : lang === 'fr' ? 'INSPECTION DIAGNOSTIQUE 3D' : '3D BIOMECHANICAL INSPECTION'}
                  </span>
                  <h3 className="font-serif-clinical text-base sm:text-xl font-bold text-white leading-snug">
                    {getTranslation(selectedGalleryImage.title)}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedGalleryImage(null)}
                  className={`absolute top-5 text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all ${lang === 'ar' ? 'left-5' : 'right-5'}`}
                  id="close-gallery-modal"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 space-y-4 overflow-y-auto flex-1">
                <div className="rounded-sm overflow-hidden border border-gray-100 h-64 sm:h-80 relative bg-[#0A192F]">
                  <img 
                    src={selectedGalleryImage.image} 
                    alt={getTranslation(selectedGalleryImage.title)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Direct close button floating on image */}
                  <button
                    onClick={() => setSelectedGalleryImage(null)}
                    className={`absolute top-3 ${lang === 'ar' ? 'left-3' : 'right-3'} bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all shadow-md backdrop-blur-xs flex items-center justify-center`}
                    title={lang === 'ar' ? 'إغلاق' : lang === 'fr' ? 'Fermer' : 'Close'}
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-[#0A192F]/80 backdrop-blur-xs border border-[#C5A880]/30 px-2.5 py-1 rounded-xs font-mono text-[8px] text-[#C5A880] uppercase tracking-widest">
                    Orthopedic Anatomy Scan: Verified
                  </div>
                </div>

                <div className="space-y-2.5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider block">
                    {lang === 'ar' ? 'الوصف الطبي والتحليل الميكانيكي الحيوي' : lang === 'fr' ? 'Analyse Médicale & Biomécanique' : 'Clinical Significance & Biomechanical Analysis'}
                  </h4>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {getTranslation(selectedGalleryImage.desc)}
                  </p>
                  
                  {/* Additional Clinical Details */}
                  <div className="grid grid-cols-2 gap-3.5 pt-3.5 border-t border-gray-100 font-mono text-[9px] text-gray-500">
                    <div className="bg-gray-50 p-2.5 rounded-sm border border-gray-150">
                      <span className="text-[#C5A880] font-bold block mb-0.5">MODALITY</span>
                      <span className="text-[#0A192F] font-semibold">3D Reconstruction / CAD Sim</span>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-sm border border-gray-150">
                      <span className="text-[#C5A880] font-bold block mb-0.5">CLINICAL FOCUS</span>
                      <span className="text-[#0A192F] font-semibold">Dr. Ali Fares Surgical Suite</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Double action buttons (Close + CTA) inside the modal footer */}
              <div className="p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5 text-xs flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <button
                  onClick={() => setSelectedGalleryImage(null)}
                  className="w-full sm:w-1/3 bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-sm transition duration-150 font-bold uppercase tracking-wider text-center border border-gray-200"
                >
                  {lang === 'ar' ? 'إغلاق' : lang === 'fr' ? 'Fermer' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    setSelectedGalleryImage(null);
                    setShowBookingModal(true);
                  }}
                  className="w-full sm:w-2/3 bg-[#0A192F] hover:bg-[#122A4E] text-white py-2.5 px-4 rounded-sm transition duration-150 font-bold uppercase tracking-wider text-center"
                >
                  {lang === 'ar' ? 'حجز استشارة مخصصة لهذا التشخيص' : lang === 'fr' ? 'Réserver pour ce diagnostic' : 'Schedule Consultation for this anatomy'}
                </button>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* EDUCATIONAL ARTICLE VIEWER MODAL */}
      {selectedArticleId && (() => {
        const activeArticle = EDUCATIONAL_ARTICLES.find(a => a.id === selectedArticleId);
        if (!activeArticle) return null;
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/85 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in" id="article-modal-backdrop">
            <div className="bg-white rounded-sm border border-[#C5A880]/30 shadow-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col my-8" id="article-modal-window">
              
              {/* Modal Header */}
              <div className="bg-[#0A192F] text-white p-5 pb-6 border-b border-[#C5A880]/20 relative flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div className="pe-12 pl-12 text-center sm:text-left">
                  <span className="text-[#C5A880] text-[8px] font-mono tracking-widest uppercase block mb-1">
                    {lang === 'ar' ? 'المكتبة الطبية التعليمية للشرق الأوسط' : lang === 'fr' ? 'BIBLIOTHÈQUE MÉDICALE ACADÉMIQUE' : 'ACADEMIC CLINICAL LIBRARY'}
                  </span>
                  <h3 className="font-serif-clinical text-base sm:text-xl font-bold text-white leading-snug">
                    {getTranslation(activeArticle.title)}
                  </h3>
                  
                  <div className="flex items-center gap-4 mt-2.5 text-gray-400 text-[10px] font-mono justify-center sm:justify-start">
                    <span>{getTranslation(activeArticle.author)}</span>
                    <span className="w-1 h-1 bg-[#C5A880] rounded-full"></span>
                    <span>{getTranslation(activeArticle.readTime)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedArticleId(null)}
                  className={`absolute top-5 text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all ${lang === 'ar' ? 'left-5' : 'right-5'}`}
                  id="close-article-modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6 text-[#0A192F] bg-white scrollbar-thin">
                {activeArticle.sections.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-serif-clinical text-sm font-extrabold text-[#0A192F] border-b border-gray-100 pb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#C5A880] inline-block rounded-xs"></span>
                      {getTranslation(section.heading)}
                    </h4>
                    <p className="text-gray-700 text-xs font-light leading-relaxed text-justify whitespace-pre-line">
                      {getTranslation(section.content)}
                    </p>
                  </div>
                ))}

                {/* Consultation recommendation banner */}
                <div className="p-4 bg-gray-50 border border-gray-150 rounded-sm mt-8 space-y-2.5">
                  <span className="text-xs font-bold text-[#0A192F] block">
                    {lang === 'ar' ? 'هل تعاني من أعراض مشابهة؟' : lang === 'fr' ? 'Souffrez-vous de symptômes similaires ?' : 'Experiencing Similar Symptoms?'}
                  </span>
                  <p className="text-[10px] text-gray-500 font-light leading-normal">
                    {lang === 'ar' 
                      ? 'هذا المحتوى للأغراض التعليمية والأكاديمية فقط ولا يغني عن الاستشارة الطبية المباشرة. للحصول على تشخيص دقيق وخطة علاج مخصصة، يمكنك جدولة موعد سريري مع الدكتور علي فارس.' 
                      : lang === 'fr' 
                        ? 'Ce contenu est purement éducatif et ne remplace pas une consultation médicale. Pour un diagnostic précis, planifiez une consultation avec le Dr Ali Fares.' 
                        : 'This educational material is for academic awareness and does not replace medical advice. For a tailored diagnosis, schedule an intake with Dr. Ali Fares.'}
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2.5">
                    <button
                      onClick={() => {
                        setSelectedArticleId(null);
                        setShowBookingModal(true);
                      }}
                      className="bg-[#0A192F] text-white hover:bg-[#C5A880] hover:text-[#0A192F] text-[9px] font-bold px-4 py-2 rounded-sm transition duration-200 tracking-wider uppercase"
                    >
                      {getTranslation(uiTranslations.heroCtaPrimary)}
                    </button>
                    <button
                      onClick={() => setSelectedArticleId(null)}
                      className="border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-[#0A192F] text-[9px] font-bold px-4 py-2 rounded-sm transition duration-200 uppercase"
                    >
                      {lang === 'ar' ? 'إغلاق المقال' : lang === 'fr' ? 'Fermer l\'article' : 'Close Article'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 9. BOOKING MODAL AND CLINICAL PASS SYSTEM */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in" id="booking-modal-backdrop">
          <div className="bg-white rounded-sm border border-[#C5A880]/30 shadow-2xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col my-8" id="booking-modal-window">
            
            {/* Modal Heading */}
            <div className="bg-[#0A192F] text-white p-4 pb-5 border-b border-[#C5A880]/20 relative flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div className="pe-10 pl-10 text-center sm:text-left">
                <span className="text-[#C5A880] text-[8px] font-mono tracking-widest uppercase block mb-0.5">
                  {getTranslation(uiTranslations.secureUplink)}
                </span>
                <h3 className="font-serif-clinical text-base sm:text-lg font-bold">
                  {getTranslation(uiTranslations.bookingModalTitle)}
                </h3>
              </div>
              
              <button 
                onClick={closeBookingFlow}
                className={`absolute top-4 text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all ${lang === 'ar' ? 'left-4' : 'right-4'}`}
                id="close-modal-button"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content area: switches between input form and printable confirmed pass */}
            {!confirmedBooking ? (
              <form onSubmit={handleBookingSubmit} className="p-5 space-y-4 text-xs text-gray-800 overflow-y-auto flex-1" id="booking-form">
                
                {/* Direct Doctor Contact Info Banner */}
                <div className="bg-slate-50 border border-slate-200/60 p-3 rounded-sm flex items-center gap-3 text-slate-800 text-[11px] leading-relaxed mb-1">
                  <div className="bg-[#0A192F] text-[#C5A880] p-1.5 rounded-sm">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="font-serif-clinical font-bold block text-[#0A192F]">
                      {lang === 'ar' ? 'عيادة الدكتور علي فارس المباشرة' : lang === 'fr' ? 'Email Clinique Direct du Dr Fares' : 'Dr. Ali Fares Direct Clinical Mail'}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {lang === 'ar' ? 'يتم إرسال الطلبات إلى: ' : lang === 'fr' ? 'Demandes transmises à: ' : 'Booking inquiries routed directly to: '}
                      <a href="mailto:md.alifares@gmail.com" className="font-mono text-[#C5A880] hover:underline font-bold">
                        md.alifares@gmail.com
                      </a>
                    </span>
                  </div>
                </div>

                {/* Step 1: Patient details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingName)} *
                    </label>
                    <div className="relative">
                      <User size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
                      <input 
                        type="text" 
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Jean-Pierre"
                        className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F] focus:border-[#C5A880]"
                        id="booking-name-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingEmail)} *
                    </label>
                    <div className="relative">
                      <Mail size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
                      <input 
                        type="email" 
                        required
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="patient@gmail.com"
                        className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F] focus:border-[#C5A880]"
                        id="booking-email-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Location Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingPhone)} *
                    </label>
                    <div className="relative">
                      <PhoneCall size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
                      <input 
                        type="text" 
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="+961 81 931 988"
                        className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F] focus:border-[#C5A880]"
                        id="booking-phone-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingLocation)}
                    </label>
                    <select
                      value={bookingLocation}
                      onChange={(e) => setBookingLocation(e.target.value)}
                      className="w-full p-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F]"
                    >
                      <option value="beirut">{getTranslation(uiTranslations.locBeirut)}</option>
                      <option value="riyaq">{getTranslation(uiTranslations.locRiyaq)}</option>
                      <option value="baalbek">{getTranslation(uiTranslations.locBaalbek)}</option>
                    </select>
                  </div>
                </div>

                {/* Specialty category selection */}
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                    {getTranslation(uiTranslations.bookingCategory)}
                  </label>
                  <select
                    value={bookingCategory}
                    onChange={(e) => setBookingCategory(e.target.value)}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F]"
                  >
                    <option value="knee">{getTranslation(uiTranslations.catKnee)}</option>
                    <option value="shoulder">{getTranslation(uiTranslations.catShoulder)}</option>
                    <option value="sports">{getTranslation(uiTranslations.catSports)}</option>
                    <option value="fracture">{getTranslation(uiTranslations.catFracture)}</option>
                  </select>
                </div>

                {/* Symptoms / Notes Input */}
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                    {getTranslation(uiTranslations.bookingNotes)}
                  </label>
                  <textarea 
                    rows={3}
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: ألم شديد في الركبة مع التواء وطقطقة بعد السقوط' : 'e.g., severe knee pain with popping sensation after fall'}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F]"
                    id="booking-notes-input"
                  ></textarea>
                </div>

                {/* Preferred Date & Time slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingDate)}
                    </label>
                    <input 
                      type="date" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full p-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F]"
                      id="booking-date-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-1">
                      {getTranslation(uiTranslations.bookingTime)}
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full p-2 bg-gray-50 border border-gray-200 rounded-sm outline-none text-[#0A192F]"
                    >
                      <option value="09:00 - 10:00">09:00 - 10:00 AM</option>
                      <option value="10:00 - 11:00">10:00 - 11:00 AM</option>
                      <option value="11:00 - 12:00">11:00 AM - 12:00 PM</option>
                      <option value="14:00 - 15:00">14:00 - 15:00 PM</option>
                      <option value="15:00 - 16:00">15:00 - 16:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#0A192F] text-white hover:bg-[#122A4E] text-xs font-bold py-3 px-4 rounded-sm tracking-widest uppercase transition duration-200 border border-[#C5A880]/30 shadow-xs mt-3 block"
                  id="submit-booking-button"
                >
                  {getTranslation(uiTranslations.bookingSubmit)}
                </button>
              </form>
            ) : (
              /* CONFIRMED CLINICAL INTRAKE PASS VIEW */
              <div className="p-5 space-y-4 animate-fade-in overflow-y-auto flex-1" id="booking-success-dossier">
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-sm flex items-center gap-3 text-emerald-800 text-[11px] font-medium leading-relaxed">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-emerald-950">{getTranslation(uiTranslations.bookingSuccess)}</span>
                    <span>{lang === 'ar' ? 'تم توجيه ملفك الطبي تلقائيًا لخط عيادات الدكتور علي فارس لتقييم الموعد وحجز الملف.' : 'Your clinic docket has been auto-queued to Dr. Ali Fares clinical operations.'}</span>
                  </div>
                </div>

                {/* Academic Docket Layout */}
                <div className="border border-gray-200 p-4 rounded-sm space-y-3 relative bg-[#fcfdfd]" id="clinical-pass-print-area">
                  {/* Institutional Header */}
                  <div className="flex justify-between items-start border-b border-gray-150 pb-2.5 text-[10px]">
                    <div>
                      <h4 className="font-serif-clinical font-extrabold text-[#0A192F] text-xs">DR. ALI FARES CLINICS</h4>
                      <p className="text-[8px] text-[#C5A880] tracking-widest uppercase font-extrabold">UGA TRAUMA & SPORTS RECOVERY</p>
                    </div>
                    <div className="text-right font-mono text-[8px] text-gray-500">
                      <span>{getTranslation(uiTranslations.bookingBar)}</span>
                      <span className="block mt-0.5 text-[#0A192F] font-bold">{confirmedBooking.id}</span>
                    </div>
                  </div>

                  {/* Patient Dossier Details */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-xs">
                    <div>
                      <span className="text-[8px] text-gray-400 block uppercase font-bold">PATIENT NAME:</span>
                      <span className="font-semibold text-[#0A192F]">{confirmedBooking.name}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-gray-400 block uppercase font-bold">CONTACT PHONE:</span>
                      <span className="font-mono text-gray-700">{confirmedBooking.phone}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[8px] text-gray-400 block uppercase font-bold">CLINIC LOCATION:</span>
                      <span className="font-semibold text-[#0A192F]">
                        {confirmedBooking.location === 'beirut' ? getTranslation(uiTranslations.locBeirut) : confirmedBooking.location === 'riyaq' ? getTranslation(uiTranslations.locRiyaq) : getTranslation(uiTranslations.locBaalbek)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] text-gray-400 block uppercase font-bold">DATE:</span>
                      <span className="font-medium text-gray-700 text-[11px]">{confirmedBooking.date}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-gray-400 block uppercase font-bold">TIME WINDOW:</span>
                      <span className="font-mono text-gray-700">{confirmedBooking.time} EET</span>
                    </div>
                    <div className="col-span-2 border-t border-gray-100 pt-2.5 flex justify-between items-end">
                      <div>
                        <span className="text-[8px] text-gray-400 block uppercase font-bold">ROUTING EXPERT:</span>
                        <span className="font-serif-clinical font-bold text-[#0A192F] block">
                          {getTranslation(DOCTORS[0].name)}
                        </span>
                        <span className="text-[9px] text-gray-500 leading-none block">
                          {getTranslation(DOCTORS[0].title)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-gray-400 block uppercase font-bold">CLINICAL MAIL:</span>
                        <span className="text-[10px] font-mono text-[#C5A880] font-bold block">
                          md.alifares@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic barcode */}
                  <div className="pt-3.5 border-t border-gray-150 flex flex-col items-center">
                    <div className="bg-white px-3 py-1.5 border border-gray-100 flex items-center justify-center">
                      <div className="w-48 h-6 flex gap-[1.5px]" title="Barcode representation">
                        {/* Barcode vector lines */}
                        {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 1, 2, 3, 1, 4, 2, 1, 3, 1, 4, 2, 1].map((width, idx) => (
                          <div 
                            key={idx} 
                            className={`h-full ${idx % 2 === 0 ? 'bg-black' : 'bg-transparent'}`}
                            style={{ width: `${width}px` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono text-gray-400 mt-1 uppercase tracking-widest">AUBMC-UGA DECRYPTION ENABLED</span>
                  </div>

                  {/* Preparation instruction advice */}
                  <div className="text-[9.5px] text-gray-500 leading-normal bg-gray-50 p-2.5 border border-gray-150 rounded-sm">
                    {lang === 'ar' 
                      ? 'يرجى تقديم هذه البطاقة الرقمية مع أي صور أشعة تاريخية (رنين مغناطيسي / أشعة مقطعية) عند الحضور. يرجى الوصول قبل الموعد بـ ١٥ دقيقة.'
                      : lang === 'fr'
                        ? 'Veuillez présenter ce Pass clinique ainsi que vos examens d\'imagerie (IRM, radio, scanner) lors de votre arrivée. Présentez-vous 15 minutes en avance.'
                        : 'Please present this digital clinical pass along with any prior radiologic imaging (MRI/CT scans or X-rays) upon arrival. Arrive 15 minutes prior to scheduled slot.'}
                  </div>
                </div>

                {/* Print button / Close row */}
                <div className="pt-2 flex flex-col sm:flex-row justify-end gap-2 text-xs">
                  <button
                    onClick={() => window.print()}
                    className="border border-gray-300 hover:border-[#0A192F] text-gray-700 hover:text-[#0A192F] py-2 px-4 rounded-sm transition duration-150 font-bold flex items-center justify-center gap-1.5 uppercase"
                  >
                    <Printer size={13} />
                    {getTranslation(uiTranslations.printBtn)}
                  </button>
                  <button
                    onClick={closeBookingFlow}
                    className="bg-[#0A192F] hover:bg-[#122A4E] text-white py-2 px-5 rounded-sm transition duration-150 font-bold flex items-center justify-center uppercase"
                  >
                    {getTranslation(uiTranslations.closeBtn)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SHARE PORTAL QR CODE MODAL */}
      {showShareModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/85 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in" 
          id="share-qr-modal-backdrop"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="bg-white rounded-md border border-[#C5A880]/30 shadow-2xl max-w-md w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col my-8" 
            id="share-qr-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0A192F] text-white p-5 pb-6 border-b border-[#C5A880]/20 relative flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div className="pe-12 pl-12 text-center sm:text-left">
                <span className="text-[#C5A880] text-[8px] font-mono tracking-widest uppercase block mb-1">
                  {lang === 'ar' ? 'مشاركة بوابة العيادة' : lang === 'fr' ? 'PARTAGER LE PORTAIL' : 'SHARE CLINICAL PORTAL'}
                </span>
                <h3 className="font-serif-clinical text-base sm:text-lg font-bold text-white leading-snug">
                  {lang === 'ar' ? 'رمز الاستجابة السريعة لمشاركة الموقع' : lang === 'fr' ? 'Code QR de Partage de Site' : 'Clinical Portal Sharing QR Code'}
                </h3>
              </div>
              <button 
                onClick={() => setShowShareModal(false)}
                className={`absolute top-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer ${lang === 'ar' ? 'left-5' : 'right-5'}`}
                id="close-share-modal"
                aria-label="Close"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex flex-col items-center text-center overflow-y-auto flex-1">
              
              {/* QR Container Frame with elegant clinical style */}
              <div className="p-4 bg-white rounded-lg border border-[#C5A880]/30 shadow-md relative group">
                {/* Micro branding top badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0A192F] text-[#C5A880] text-[7px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border border-[#C5A880]/40 shadow-xs">
                  Dr. Ali Fares
                </div>
                
                {/* SVG QR Code */}
                <div className="bg-white p-1 rounded-sm mt-1">
                  <QRCodeSVG 
                    value={getShareUrl()} 
                    size={200}
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: LOGO_SRC,
                      x: undefined,
                      y: undefined,
                      height: 38,
                      width: 38,
                      excavate: true,
                    }}
                  />
                </div>
              </div>

              {/* Patient Scan Instructions */}
              <div className="space-y-2">
                <p className="font-serif-clinical text-sm font-bold text-[#0A192F]">
                  {lang === 'ar' ? 'وجه كاميرا هاتفك لمسح الرمز' : lang === 'fr' ? 'Scannez avec votre appareil photo' : 'Scan with Your Smartphone'}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                  {lang === 'ar' 
                    ? 'امسح هذا الرمز لفتح البوابة السريرية مباشرة على جهازك المحمول، أو شاركه مع العائلة والأصدقاء لحجز المواعيد واستخدام المساعد الطبي الذكي.' 
                    : lang === 'fr' 
                      ? 'Scannez ce code QR pour ouvrir le portail clinique sur votre appareil mobile ou partagez-le avec vos proches pour prendre rendez-vous.' 
                      : 'Scan this QR code to open the clinical portal directly on your mobile device, or share it with family and friends to schedule appointments easily.'}
                </p>
              </div>

              {/* Direct Link Input with Copy Action */}
              <div className="w-full space-y-2">
                <span className="text-[9px] text-gray-400 font-mono block uppercase tracking-wider text-left" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  {lang === 'ar' ? 'رابط المشاركة المباشر' : lang === 'fr' ? 'LIEN DE PARTAGE DIRECT' : 'DIRECT SHARE LINK'}
                </span>
                <div className="flex rounded-sm border border-gray-200 overflow-hidden text-xs" dir="ltr">
                  <input 
                    type="text" 
                    readOnly 
                    value={getShareUrl()} 
                    className="flex-1 bg-gray-50 p-2.5 text-gray-600 font-mono outline-none border-none select-all text-center sm:text-left" 
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(getShareUrl());
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`px-4 py-2.5 font-bold transition-all uppercase flex items-center gap-1.5 cursor-pointer ${copied ? 'bg-emerald-600 text-white' : 'bg-[#0A192F] text-white hover:bg-[#122A4E]'}`}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied 
                      ? (lang === 'ar' ? 'تم النسخ' : lang === 'fr' ? 'Copié' : 'Copied') 
                      : (lang === 'ar' ? 'نسخ' : lang === 'fr' ? 'Copier' : 'Copy')}
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-gray-50 border-t border-gray-100 flex gap-2.5 text-xs flex-shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-sm transition duration-150 font-bold uppercase tracking-wider text-center border border-gray-200 cursor-pointer"
              >
                {lang === 'ar' ? 'إغلاق' : lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. FOOTER & LOCATIONS */}
      <footer className="bg-[#0A192F] text-white pt-14 pb-8" id="footer-section">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-10">
          
          {/* Brand block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_SRC} 
                alt="Dr. Ali Fares Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-sm border border-[#C5A880]/30 flex-shrink-0" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div>
                <h4 className="font-serif-clinical text-sm font-extrabold text-white tracking-wide leading-none">
                  {getTranslation(uiTranslations.logoTitle)}
                </h4>
                <span className="text-[8px] text-[#C5A880] font-bold block mt-1 tracking-wider uppercase">
                  {getTranslation(uiTranslations.logoSub)}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light max-w-sm">
              {lang === 'ar' 
                ? 'مركز تخصصي أكاديمي متطور مكرس لصحة الجهاز العظمي والحفاظ على المفاصل بالمنظار واستعادة الأداء الرياضي العالي بمعايير فرنسية وأوروبية متميزة.'
                : lang === 'fr'
                  ? 'Institut académique de haute performance dédié à la santé musculo-squelettique, préservation articulaire arthroscopique et réathlétisation selon les standards d\'accréditation français.'
                  : 'An accredited specialized center for orthopedic surgery, advanced arthroscopy, and high-performance return-to-play rehabilitation in Lebanon, practicing premium French clinical protocols.'}
            </p>
          </div>

          {/* Clinics Locations */}
          <div className="md:col-span-3 space-y-4.5">
            <h5 className="font-serif-clinical text-[11px] font-bold text-[#C5A880] tracking-widest uppercase pb-1 border-b border-white/5">
              {lang === 'ar' ? 'عياداتنا في لبنان' : lang === 'fr' ? 'NOS CLINIQUES AU LIBAN' : 'OUR CLINICS IN LEBANON'}
            </h5>
            
            <div className="space-y-4 font-mono text-[11px] text-gray-300">
              {/* Clinic 1 */}
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/P9URou2abWFVwEh69?g_st=iw" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-bold text-white hover:text-[#C5A880] transition-colors block leading-tight group"
                  >
                    {getTranslation(uiTranslations.locBeirut)}{" "}
                    <span className="text-[9px] text-[#C5A880] font-normal underline opacity-80 group-hover:opacity-100 transition-opacity">
                      {lang === 'ar' ? '(خرائط جوجل ↗)' : lang === 'fr' ? '(Google Maps ↗)' : '(Google Maps ↗)'}
                    </span>
                  </a>
                  <span className="text-gray-400 block mt-0.5">
                    {lang === 'ar' 
                      ? 'الطيونة، أول شارع سامي الصلح، مقابل سنتر كالوت (أيام الاثنين والثلاثاء والأربعاء)، مبنى مسرح دوار الشمس، الطابق الثالث، بيروت' 
                      : lang === 'fr' 
                        ? 'Tayouneh, début de la rue Sami El Solh, en face du Centre Kalout (Lundi, Mardi et Mercredi), Immeuble du Théâtre Sunflower, 3ème Étage, Beyrouth' 
                        : 'Tayouneh, beginning of Sami El Solh Street, opposite Kalout Center (Mondays, Tuesdays & Wednesdays), Sunflower Theater Building, 3rd Floor, Beirut'}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    {lang === 'ar' ? 'مساعد العيادة: ' : 'Assistant: '}
                    <span dir="ltr" className="inline-block text-gray-400 font-mono">+961 81 931 988</span>
                    <span className="mx-2 text-gray-600">|</span>
                    {lang === 'ar' ? 'د. علي فارس: ' : 'Dr. Ali Fares: '}
                    <span dir="ltr" className="inline-block text-gray-400 font-mono">+961 70 359 274</span>
                  </span>
                </div>
              </div>

              {/* Clinic 2 */}
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white block leading-tight">{getTranslation(uiTranslations.locRiyaq)}</span>
                  <span className="text-gray-400 block mt-0.5">
                    {lang === 'ar' 
                      ? 'طريق رياق العام، مبنى المستشفى، جناح الطب الرياضي، البقاع' 
                      : lang === 'fr' 
                        ? 'Autoroute de Riyaq, Bâtiment de l\'Hôpital, Aile de Médecine du Sport, Beqaa' 
                        : 'Riyaq Main Highway, Hospital Building, Sports Medicine Wing, Bekaa'}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    {lang === 'ar' ? 'مساعد العيادة: ' : 'Assistant: '}
                    <span dir="ltr" className="inline-block text-gray-400 font-mono">+961 81 931 988</span>
                  </span>
                </div>
              </div>

              {/* Clinic 3 */}
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white block leading-tight">{getTranslation(uiTranslations.locBaalbek)}</span>
                  <div className="mt-1.5 space-y-1">
                    <a 
                      href="https://maps.app.goo.gl/XQBqPHfk1N1ae8UE6?g_st=ac" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-300 hover:text-[#C5A880] transition-colors block text-[11px] font-medium group"
                    >
                      {lang === 'ar' ? '• مستشفى المرتضى ' : lang === 'fr' ? '• Hôpital Al-Murtada ' : '• Al-Murtada Hospital '}
                      <span className="text-[9px] text-[#C5A880] font-normal underline opacity-80 group-hover:opacity-100 transition-opacity">
                        {lang === 'ar' ? '(خرائط جوجل ↗)' : '(Google Maps ↗)'}
                      </span>
                    </a>
                    
                    <a 
                      href="https://maps.app.goo.gl/kr8Fcp152xA3jHz16?g_st=ac" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-300 hover:text-[#C5A880] transition-colors block text-[11px] font-medium group"
                    >
                      {lang === 'ar' ? '• مستشفى دار الأمل الجامعي ' : lang === 'fr' ? '• Hôpital Dar Al-Amal ' : '• Dar Al-Amal University Hospital '}
                      <span className="text-[9px] text-[#C5A880] font-normal underline opacity-80 group-hover:opacity-100 transition-opacity">
                        {lang === 'ar' ? '(خرائط جوجل ↗)' : '(Google Maps ↗)'}
                      </span>
                    </a>
                  </div>
                  <span className="text-gray-400 block mt-1 text-[11px]">
                    {lang === 'ar' 
                      ? 'نهار الجمعة' 
                      : lang === 'fr' 
                        ? 'Chaque Vendredi' 
                        : 'Every Friday'}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    {lang === 'ar' ? 'مساعد العيادة: ' : 'Assistant: '}
                    <span dir="ltr" className="inline-block text-gray-400 font-mono">+961 81 931 988</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Liaison info */}
          <div className="md:col-span-3 space-y-4.5">
            <h5 className="font-serif-clinical text-[11px] font-bold text-[#C5A880] tracking-widest uppercase pb-1 border-b border-white/5">
              {lang === 'ar' ? 'الاتصال والمواعيد' : lang === 'fr' ? 'CONTACT & LIAISON' : 'CONTACT & INTAKE'}
            </h5>
            <div className="space-y-4 font-mono text-[11px] text-gray-300">
              {/* Doctor's direct contact */}
              <div className="border-l-2 border-amber-500/40 pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pr-2.5">
                <span className="text-amber-400 text-[10px] font-bold block uppercase tracking-wider">
                  {lang === 'ar' ? 'الدكتور علي فارس مباشرة:' : 'Dr. Ali Fares Direct:'}
                </span>
                <a 
                  href="https://wa.me/96170359274?text=Hello%20Dr.%20Ali%20Fares" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-amber-400 transition-colors font-bold mt-1 inline-flex items-center gap-1.5"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-400 flex-shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
                  </svg>
                  <span dir="ltr" className="inline-block font-mono">+961 70 359 274</span>
                </a>
              </div>
              
              {/* Assistant contact */}
              <div className="border-l-2 border-emerald-500/40 pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pr-2.5">
                <span className="text-emerald-400 text-[10px] font-bold block uppercase tracking-wider">
                  {lang === 'ar' ? 'المساعد للتنسيق والعيادات:' : 'Clinical Assistant & Booking:'}
                </span>
                <a 
                  href="https://wa.me/96181931988" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-emerald-400 transition-colors font-bold mt-1 inline-flex items-center gap-1.5"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-400 flex-shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
                  </svg>
                  <span dir="ltr" className="inline-block font-mono">+961 81 931 988</span>
                </a>
              </div>

              <div>
                <span className="text-[#C5A880] text-[10px] block uppercase tracking-wider">EMAIL:</span>
                <span className="text-white block mt-0.5">md.alifares@gmail.com</span>
              </div>
              <p className="text-[9px] text-gray-500 leading-normal pt-1">
                {lang === 'ar' ? 'أعضاء الجمعية الفرنسية لجراحة العظام SOFCOT والمجلس الوطني لأطباء لبنان.' : 'Member of SOFCOT (France) and Lebanese Order of Physicians (ID: #Y-8120).'}
              </p>
            </div>
          </div>

          {/* QR Code & Share Column */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            <h5 className="font-serif-clinical text-[11px] font-bold text-[#C5A880] tracking-widest uppercase pb-1 border-b border-white/5 w-full text-center md:text-left">
              {lang === 'ar' ? 'مسح ومشاركة' : lang === 'fr' ? 'SCANNER & PARTAGER' : 'SCAN & SHARE'}
            </h5>
            <div 
              className="bg-white p-2 rounded-md border border-[#C5A880]/30 shadow-md inline-block hover:scale-105 transition-transform duration-300 cursor-pointer" 
              onClick={() => setShowShareModal(true)} 
              title={lang === 'ar' ? 'اضغط لتكبير الرمز والنسخ' : 'Click to enlarge and copy link'}
            >
              <QRCodeSVG 
                value={getShareUrl()} 
                size={95}
                level="M"
                includeMargin={true}
              />
            </div>
            <p className="text-[9.5px] text-gray-400 leading-tight text-center md:text-left max-w-[150px]">
              {lang === 'ar' 
                ? 'امسح الرمز بجوالك لفتح البوابة أو مشاركتها فوراً مع أصدقائك.' 
                : lang === 'fr' 
                  ? 'Scannez avec votre mobile pour ouvrir ou partager immédiatement.' 
                  : 'Scan with your phone to open or share instantly.'}
            </p>
          </div>

        </div>

        {/* Legal credentials and copyright */}
        <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[9.5px] text-gray-400">
            © {new Date().getFullYear()} Dr. Ali Fares - Orthopedic, Trauma & Sports Surgery. {lang === 'ar' ? 'جميع الحقوق السريرية والأكاديمية محفوظة.' : 'All clinical and academic rights reserved.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[9px] text-gray-500 font-mono">
            <span className="hover:text-white cursor-pointer">LB-MOH LIC: #Y-8120</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">SOFCOT Registered Surgeon</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">UGA Alumnus Accreditations</span>
          </div>
        </div>
      </footer>

      {/* ======================================================= */}
      {/* FLOATING ACTION INTERFACES: WHATSAPP & AI CLINICAL LIAISON */}
      {/* ======================================================= */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end pointer-events-none" 
        id="floating-actions-container" 
        dir="ltr"
        style={{ right: '1.5rem', left: 'auto' }}
      >
        
        {/* 1. PROFESSIONAL AI ASSISTANT CHAT DRAWER */}
        {isChatOpen && (
          <div 
            className="w-[92vw] sm:w-[400px] h-[500px] bg-white rounded-md border border-gray-150 shadow-2xl flex flex-col overflow-hidden pointer-events-auto animate-fade-in text-[#0A192F]"
            id="ai-liaison-chat-drawer"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Top Close Bar */}
            <div className="bg-[#050D18] text-[#C5A880] text-[10px] px-4 py-2 flex justify-between items-center border-b border-[#C5A880]/10 font-sans tracking-wide">
              <span className="font-semibold uppercase tracking-wider">{lang === 'ar' ? 'المساعد الطبي الذكي' : lang === 'fr' ? 'Assistant Médical IA' : 'Medical AI Assistant'}</span>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="flex items-center gap-1 hover:text-white text-gray-300 transition-colors uppercase font-bold text-[9px] bg-red-950/40 hover:bg-red-900/60 px-2 py-0.5 rounded-sm border border-red-900/30"
                id="top-close-chat-btn"
              >
                <span>{lang === 'ar' ? 'إغلاق' : lang === 'fr' ? 'Fermer' : 'Close'}</span>
                <X size={10} />
              </button>
            </div>

            {/* Header */}
            <div className="bg-[#0A192F] text-white p-4 flex justify-between items-center border-b border-[#C5A880]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
                  <Bot size={18} className="animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-clinical text-xs font-extrabold tracking-wide">Dr. Ali Fares AI Liaison</span>
                    <span className="text-[7.5px] px-1 py-0.2 bg-[#C5A880]/25 text-[#C5A880] font-bold uppercase rounded-2xs font-mono">
                      Gemini 3.5
                    </span>
                  </div>
                  <span className="text-[8.5px] text-gray-300 font-mono block mt-0.5 leading-none">
                    {lang === 'ar' ? 'مساعد التنسيق السريري الذكي' : lang === 'fr' ? 'Liaison Clinique IA' : 'Orthopedic Clinical AI Liaison'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                id="close-chat-btn"
              >
                <X size={16} />
              </button>
            </div>

            {/* Disclaimer Banner */}
            <div className="bg-amber-50/70 border-b border-amber-100 p-2 text-center text-[9px] text-[#805B00] font-medium leading-normal flex items-center justify-center gap-1">
              <ShieldAlert size={11} className="text-[#B38000]" />
              <span>
                {lang === 'ar' 
                  ? 'مساعد تعليمي سريري. لا يستبدل الفحص الطبي المباشر.' 
                  : lang === 'fr' 
                    ? 'Assistant éducatif. Ne remplace pas une consultation médicale.' 
                    : 'Educational assistant. Does not replace professional medical advice.'}
              </span>
            </div>

            {/* Chat Body Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gray-50/50" id="chat-messages-container">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-xs shadow-3xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#0A192F] text-white rounded-tr-none font-light' 
                      : 'bg-white border border-gray-150 text-gray-800 rounded-tl-none font-normal'
                  }`}>
                    {/* Preserve line breaks */}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
              
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-150 rounded-md rounded-tl-none px-4 py-3 shadow-3xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Pre-filled Suggestion Chips */}
            {chatMessages.length === 1 && (
              <div className="px-4 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-1.5 justify-start">
                {(lang === 'ar' 
                  ? ['عملية الرباط الصليبي؟', 'أين تقع عياداتكم؟', 'ألم في الكتف'] 
                  : lang === 'fr'
                    ? ['Opération du LCA ?', 'Où sont vos cliniques ?', 'Douleur à l\'épaule']
                    : ['Do I need ACL surgery?', 'Where are your clinics?', 'Shoulder joint pain']
                ).map((chipText, chipIdx) => (
                  <button
                    key={chipIdx}
                    onClick={() => handleSendChatMessage(chipText)}
                    className="text-[10px] text-gray-600 hover:text-[#0A192F] bg-gray-100 hover:bg-[#C5A880]/20 px-2.5 py-1 rounded-sm border border-gray-200 transition duration-150 font-light font-sans"
                  >
                    {chipText}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input Area */}
            <div className="p-3 bg-white border-t border-gray-150 flex gap-2">
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendChatMessage();
                }}
                placeholder={
                  lang === 'ar' 
                    ? 'اكتب سؤالك هنا...' 
                    : lang === 'fr' 
                      ? 'Tapez votre message ici...' 
                      : 'Type your message here...'
                }
                className="flex-1 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-[#C5A880] text-gray-800 font-light font-sans"
                disabled={isChatLoading}
              />
              <button 
                onClick={() => handleSendChatMessage()}
                className="bg-[#0A192F] hover:bg-[#122A4E] text-white p-2.5 rounded-sm flex items-center justify-center transition-colors shadow-3xs"
                disabled={isChatLoading || !chatInput.trim()}
                id="send-message-btn"
              >
                <Send size={14} className="text-[#C5A880]" />
              </button>
            </div>
          </div>
        )}

        {/* 2. CHATBOT GLOWING TOGGLE BUTTON */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white border transition-all duration-300 pointer-events-auto hover:scale-105 shadow-xl ${
            isChatOpen 
              ? 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200' 
              : 'bg-[#0A192F] hover:bg-[#122A4E] border-[#C5A880]/30 animate-pulse'
          }`}
          title={lang === 'ar' ? 'تحدث مع المساعد السريري الذكي' : 'Chat with Orthopedic AI Liaison'}
          id="ai-liaison-toggle-button"
        >
          {isChatOpen ? (
            <X size={20} className="text-[#C5A880]" />
          ) : (
            <div className="relative">
              <Bot size={22} className="text-[#C5A880]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C5A880] rounded-full animate-ping"></div>
            </div>
          )}
        </button>

        {/* 3. DUAL FLOATING WHATSAPP BUTTONS (DISTINGUISHED) */}
        <div className="flex flex-col gap-3 items-end pointer-events-auto" id="floating-whatsapp-group">
          {/* Dr. Ali Fares (Direct) */}
          <div className="flex items-center gap-2 group">
            <span className="bg-[#0A192F] text-[#C5A880] border border-[#C5A880]/40 text-[9px] font-bold px-2 py-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {lang === 'ar' ? 'الدكتور علي فارس مباشرة' : lang === 'fr' ? 'Dr. Ali Fares (Direct)' : 'Dr. Ali Fares (Direct)'}
            </span>
            <a 
              href="https://wa.me/96170359274?text=Hello%20Dr.%20Ali%20Fares,%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation."
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center text-white shadow-xl hover:scale-110 transition duration-200 relative border-2 border-[#C5A880]"
              title={lang === 'ar' ? 'واتساب الدكتور علي فارس مباشرة' : 'Dr. Ali Fares WhatsApp Direct'}
              id="floating-whatsapp-doctor"
            >
              {/* Glowing Halo */}
              <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping"></div>
              {/* WhatsApp Logo */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current relative z-10">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
              </svg>
              <div className="absolute -top-1 -right-1 bg-[#C5A880] text-[#0A192F] text-[7px] font-extrabold px-1 rounded-full border border-white">DR</div>
            </a>
          </div>

          {/* Assistant (Appointments) */}
          <div className="flex items-center gap-2 group">
            <span className="bg-[#0A192F] text-emerald-400 border border-emerald-500/30 text-[9px] font-bold px-2 py-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {lang === 'ar' ? 'مساعد العيادة وحجز المواعيد' : lang === 'fr' ? 'Secrétariat & RDV' : 'Clinical Assistant (RDV)'}
            </span>
            <a 
              href="https://wa.me/96181931988?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Ali%20Fares."
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center text-white shadow-xl hover:scale-110 transition duration-200 relative border-2 border-emerald-300"
              title={lang === 'ar' ? 'واتساب المساعد للحجز' : 'Assistant WhatsApp Booking'}
              id="floating-whatsapp-assistant"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current relative z-10">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 1.966 13.91 1.93 11.28 1.93c-5.442 0-9.866 4.372-9.87 9.802 0 1.745.474 3.447 1.373 4.966l-.969 3.537 3.633-.941c1.513.819 3.033 1.238 4.604 1.238zm10.224-7.514c-.279-.139-1.647-.804-1.902-.897-.255-.093-.44-.139-.626.139-.186.279-.72.897-.882 1.082-.162.186-.325.21-.604.07-.279-.139-1.18-.435-2.247-1.378-.83-.733-1.39-1.64-1.553-1.92-.163-.279-.017-.43.123-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.465.093-.186.046-.349-.023-.487-.069-.139-.626-1.493-.857-2.051-.225-.544-.452-.47-.626-.478-.162-.008-.349-.009-.535-.009-.186 0-.488.07-.743.349-.255.279-.974.953-.974 2.324 0 1.371.998 2.697 1.138 2.883.14.186 1.962 2.972 4.752 4.167.663.284 1.181.454 1.585.581.666.21 1.272.181 1.752.11.535-.079 1.647-.667 1.881-1.313.233-.647.233-1.201.163-1.313-.07-.11-.256-.208-.53-.347z" />
              </svg>
              <div className="absolute -top-1 -right-1 bg-emerald-100 text-[#0A192F] text-[7px] font-extrabold px-1 rounded-full border border-white">SEC</div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
