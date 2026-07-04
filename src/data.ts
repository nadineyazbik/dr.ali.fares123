import { Doctor, Specialty, RecoveryMilestone, DiagnosticCase, EducationalArticle } from './types';
import kneeImg from './assets/images/knee_3d_render_1782757910401.jpg';
import shoulderImg from './assets/images/shoulder_3d_render_1782757925835.jpg';
import sportsImg from './assets/images/sports_3d_render_1782757941846.jpg';
import traumaImg from './assets/images/trauma_3d_render_1782757956462.jpg';
import aliFaresImg from './assets/images/ali123.jpg';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'knee',
    title: { 
      en: 'Knee Surgery & Reconstruction', 
      ar: 'جراحة وإعادة بناء الركبة', 
      fr: 'Chirurgie & Reconstruction du Genou' 
    },
    subtitle: { 
      en: 'ACL Reconstruction, Meniscal Repair & Cartilage Preservation', 
      ar: 'إعادة بناء الرباط الصليبي، ترميم الغضروف المفصلي وزراعة الغضاريف', 
      fr: 'Reconstruction LCA, Réparation Méniscale & Préservation du Cartilage' 
    },
    description: {
      en: 'State-of-the-art surgical interventions for anterior cruciate ligament (ACL) tears, complex meniscus lesions, and bio-scaffold cartilage repairs using minimally invasive techniques.',
      ar: 'أحدث التدخلات الجراحية لتمزق الرباط الصليبي الأمامي، وإصابات الغضروف الهلالي المعقدة، وترميم الغضاريف البيولوجية بتقنيات طفيفة التوغل.',
      fr: 'Interventions chirurgicales de pointe pour les ruptures du ligament croisé antérieur (LCA), lésions méniscales complexes et réparations biologiques du cartilage.'
    },
    longDescription: {
      en: 'Our knee preservation and reconstructive service is centered on restoring joint stability and longevity. Utilizing advanced arthroscopic anatomical reconstructions, we enable rapid returns to high-impact sports while delaying or preventing osteoarthritic degeneration.',
      ar: 'يتمحور قسم جراحة الركبة وإعادة بنائها حول استعادة ثبات المفصل وضمان ديمومته. باستخدام تقنيات إعادة البناء التشريحية بالمنظار المتقدم، نساعد الرياضيين على العودة السريعة للملاعب مع الحفاظ على سلامة المفصل وتجنب الاحتكاك.',
      fr: 'Notre service de préservation du genou vise à restaurer la stabilité et la longévité de l\'articulation. Grâce à des techniques d\'arthroscopie avancées, nous favorisons un retour rapide aux sports de haut niveau.'
    },
    iconName: 'Activity',
    image: kneeImg,
    procedures: [
      { en: 'Anatomical ACL & Multi-Ligament Reconstruction', ar: 'إعادة بناء الرباط الصليبي الأمامي والأربطة المتعددة', fr: 'Reconstruction Anatomique du LCA et Multi-Ligaments' },
      { en: 'Meniscal Suture & Allograft Transplantation', ar: 'خياطة وزراعة الغضروف الهلالي والطعوم المفصلية', fr: 'Suture Méniscale & Transplantation d\'Allogreffe' },
      { en: 'Autologous Chondrocyte Implantation (ACI)', ar: 'زراعة الخلايا الغضروفية الذاتية للركبة', fr: 'Implantation de Chondrocytes Autologues (ICA)' }
    ],
    recoveryProtocol: {
      phase1: { en: 'Phase I (Weeks 1-2): Swelling containment, quad activation, and locked extension gating.', ar: 'المرحلة الأولى (الأسبوع ١-٢): السيطرة على التورم، وتنشيط العضلة الرباعية، والمشي بالركبة ممدودة.', fr: 'Phase I (Semaines 1-2): Contrôle de l\'œdème, activation du quadriceps, et marche en extension contrôlée.' },
      phase2: { en: 'Phase II (Weeks 3-8): Flexion progression to 120°, proprioception training, and closed-chain loading.', ar: 'المرحلة الثانية (الأسبوع ٣-٨): زيادة ثني الركبة تدريجيًا إلى ١٢٠ درجة، وتدريبات التوازن، والتحميل العضلي المغلق.', fr: 'Phase II (Semaines 3-8): Flexion progressive à 120°, proprioception, et charge en chaîne fermée.' },
      phase3: { en: 'Phase III (Months 3+): Plyometric conditioning, linear running initiation, and sports-specific drill cycles.', ar: 'المرحلة الثالثة (الشهر ٣+): اللياقة البدنية والقفز، والبدء في الجري المستقيم، وتدريبات الركض المخصصة للرياضة.', fr: 'Phase III (Mois 3+): Renforcement pliométrique, reprise de la course linéaire, et réathlétisation.' }
    }
  },
  {
    id: 'shoulder',
    title: { 
      en: 'Shoulder Surgery & Arthroscopy', 
      ar: 'جراحة ومنظار الكتف', 
      fr: 'Chirurgie & Arthroscopie de l\'Épaule' 
    },
    subtitle: { 
      en: 'Rotator Cuff Repair, Instability Stabilization & Arthroplasty', 
      ar: 'ترميم الأوتار الدوارة، علاج عدم استقرار وخلع الكتف، والمفاصل الاصطناعية', 
      fr: 'Réparation de la Coiffe, Stabilisation de l\'Instabilité & Arthroplastie' 
    },
    description: {
      en: 'Advanced arthroscopic repair of rotator cuff tears, Bankart repair for recurrent dislocation, and anatomical/reverse total shoulder replacements.',
      ar: 'علاج أوتار الكتف الدوارة بالمنظار، وترميم الشفة المفصلية لخلع الكتف المتكرر (Bankart)، وعمليات استبدال مفصل الكتف الكلي والمعكوس.',
      fr: 'Réparation arthroscopique de la coiffe des rotateurs, traitement de l\'instabilité chronique et prothèses d\'épaule anatomiques ou inversées.'
    },
    longDescription: {
      en: 'The shoulder joint requires an exquisite balance of mobility and stability. Our specialist approach combines high-definition arthroscopic visualization with ultra-strong suture anchors to re-anchor torn tendons and labrum, restoring pain-free overhead mechanics.',
      ar: 'يتطلب مفصل الكتف توازنًا فائقًا بين الحركة والاستقرار. يجمع نهجنا التخصصي بين تقنيات المنظار ثلاثي الأبعاد عالي الدقة والمثبتات فائقة القوة لإعادة تثبيت الأوتار الممزقة واستعادة الحركة السليمة والخالية من الألم.',
      fr: 'L\'articulation de l\'épaule nécessite un équilibre parfait entre mobilité et stabilité. Notre approche combine l\'arthroscopie haute définition avec des ancres de suture ultra-résistantes.'
    },
    iconName: 'Workflow',
    image: shoulderImg,
    procedures: [
      { en: 'Arthroscopic Rotator Cuff Double-Row Repair', ar: 'خياطة أوتار الكتف الدوارة بالمنظار بتقنية الصف المزدوج', fr: 'Réparation Arthroscopique de la Coiffe en Double Rangée' },
      { en: 'Arthroscopic Bankart & Latarjet Stabilization', ar: 'تثبيت الكتف بالمنظار وعملية "لاتار جيه" للخلع المتكرر', fr: 'Stabilisation Arthroscopique Bankart & Intervention de Latarjet' },
      { en: 'Anatomical & Reverse Total Shoulder Arthroplasty', ar: 'استبدال مفصل الكتف الكلي التشريحي والمعكوس', fr: 'Prothèse Totale d\'Épaule Anatomique et Inversée' }
    ],
    recoveryProtocol: {
      phase1: { en: 'Phase I (Weeks 1-4): Absolute sling immobilization, passive-only range of motion, and scapular setting.', ar: 'المرحلة الأولى (الأسبوع ١-٤): التثبيت المطلق بحمالة الكتف، وتمارين الحركة السلبية فقط، وتثبيت اللوح الصدري.', fr: 'Phase I (Semaines 1-4): Immobilisation stricte en écharpe, mobilisation passive uniquement, et contrôle scapulaire.' },
      phase2: { en: 'Phase II (Weeks 5-8): Passive to active-assisted transition, full elevation recovery, and light isometric rotations.', ar: 'المرحلة الثانية (الأسبوع ٥-٨): الانتقال للحركة النشطة بمساعدة، واستعادة الارتفاع الكامل، والتدوير متساوي القياس الخفيف.', fr: 'Phase II (Semaines 5-8): Transition passive-active, récupération de l\'élévation complète, et rotation isométrique.' },
      phase3: { en: 'Phase III (Months 3+): Deltoid/cuff dynamic strength building, overhead athletic retraining, and dynamic control.', ar: 'المرحلة الثالثة (الشهر ٣+): تقوية العضلة الدالية والأوتار الدوارة، وإعادة التأهيل للألعاب الرياضية فوق الرأس.', fr: 'Phase III (Mois 3+): Renforcement dynamique du deltoïde et de la coiffe, réathlétisation et réhabilitation gestuelle.' }
    }
  },
  {
    id: 'sports',
    title: { 
      en: 'Sports Medicine & Joint Preservation', 
      ar: 'الطب الرياضي والحفاظ على المفاصل', 
      fr: 'Médecine du Sport & Préservation Articulaire' 
    },
    subtitle: { 
      en: 'Biological Therapies, Minimally Invasive Arthroscopy & Return to Play', 
      ar: 'العلاجات البيولوجية، مناظير المفاصل طفيفة التوغل وبروتوكولات العودة للملاعب', 
      fr: 'Thérapies Biologiques, Arthroscopie Mini-invasive & Retour au Sport' 
    },
    description: {
      en: 'Targeted care for elite and recreational athletes, combining cellular regeneration therapy, advanced joint preservation protocols, and comprehensive biomechanical analysis.',
      ar: 'رعاية مخصصة للرياضيين المحترفين والهواة، تجمع بين علاجات التجديد الخلوي، بروتوكولات الحفاظ المتقدمة على المفاصل، والتحليل الحركي الحيوي المتكامل.',
      fr: 'Prise en charge ciblée des athlètes de haut niveau, combinant thérapies régénératives, préservation articulaire et analyses biomécaniques précises.'
    },
    longDescription: {
      en: 'We don’t just repair structural damage; we restore high-performance athletic restitution. Through strict adherence to biomechanical staging, custom kinetic chain evaluation, and biological injection support, we return our athletes back to their absolute peak potential safely.',
      ar: 'نحن لا نكتفي بإصلاح الضرر الهيكلي بل نستعيد كامل الأداء الرياضي العالي. من خلال الالتزام الصارم بمراحل التأهيل الحركي، وتقييم السلسلة الحركية المخصصة، والدعم البيولوجي، نضمن عودة الرياضيين بأمان إلى قمة عطائهم.',
      fr: 'Nous ne réparons pas seulement les lésions; nous restaurons le geste sportif. Grâce à une évaluation de la chaîne cinétique et à des thérapies biologiques, nous ramenons nos athlètes à leur meilleur niveau.'
    },
    iconName: 'Award',
    image: sportsImg,
    procedures: [
      { en: 'Biomechanical Running & Gait Pattern Analysis', ar: 'تحليل نمط الجري والمشي الحركي الحيوي', fr: 'Analyse Biomécanique de la Course et de la Marche' },
      { en: 'Cellular Therapy & Viscosupplementation Injections', ar: 'العلاج الخلوي وحقن المادة الهيالورونية الزيتية للمفاصل', fr: 'Injections Régénératives & Viscosupplémentation' },
      { en: 'Post-Injury Return-to-Sport Biomechanical Validation', ar: 'التحقق الحركي المعتمد لقرار عودة الرياضي للملاعب', fr: 'Validation Biomécanique de Reprise du Sport' }
    ],
    recoveryProtocol: {
      phase1: { en: 'Phase I (Weeks 1-2): Kinetic chain unloading, localized swelling containment, and metabolic maintenance.', ar: 'المرحلة الأولى (الأسبوع ١-٢): تخفيف الحمل الحركي، واحتواء التورم الموضعي، والمحافظة على اللياقة العامة.', fr: 'Phase I (Semaines 1-2): Décharge de la chaîne cinétique, contrôle de l\'œdème et maintien cardio-vasculaire.' },
      phase2: { en: 'Phase II (Weeks 3-6): Dynamic balance restoration, multi-planar agility drills, and progressive eccentric load.', ar: 'المرحلة الثانية (الأسبوع ٣-٦): استعادة التوازن الديناميكي، تدريبات الرشاقة متعددة الاتجاهات، والتحميل العضلي التنازلي.', fr: 'Phase II (Semaines 3-6): Restauration de l\'équilibre dynamique, agilité multi-directionnelle et charge excentrique.' },
      phase3: { en: 'Phase III (Weeks 7+): Full-intensity cardiovascular sprints, sports-specific complex drills, and performance release.', ar: 'المرحلة الثالثة (الأسبوع ٧+): ركض عالي الكثافة، تدريبات معقدة مخصصة لنوع الرياضة، وترخيص العودة التامة للعب.', fr: 'Phase III (Semaines 7+): Sprints haute intensité, exercices sportifs complexes et feu vert pour la compétition.' }
    }
  },
  {
    id: 'trauma',
    title: { 
      en: 'Trauma & Complex Fracture Surgery', 
      ar: 'جراحة الإصابات والكسور المعقدة', 
      fr: 'Traumatologie & Chirurgie des Fractures Complexes' 
    },
    subtitle: { 
      en: 'Anatomical Lock-plating, Intramedullary Nailing & Joint Reconstruction', 
      ar: 'تثبيت الكسور بالصفائح المقفلة، التثبيت بنخاع العظم (الأسياخ)، وإعادة بناء المفاصل المتضررة', 
      fr: 'Ostéosynthèse par Plaque Verrouillée, Enclouage & Reconstruction Articulaire' 
    },
    description: {
      en: 'Immediate and definitive management of complex peri-articular fractures, open trauma injuries, non-unions, and post-traumatic skeletal deformities using locking technology.',
      ar: 'علاج فوري وحاسم للكسور المعقدة حول المفاصل، الإصابات المفتوحة، عدم التئام العظام، والتشوهات الهيكلية الناتجة عن الحوادث باستخدام تقنيات التثبيت الحديثة.',
      fr: 'Prise en charge immédiate et définitive des fractures péri-articulaires complexes, traumatismes ouverts, pseudarthroses et cales vicieux.'
    },
    longDescription: {
      en: 'Trauma surgery demands absolute biomechanical precision. We focus on rigid anatomical fixation of fractures to allow immediate post-operative movement. This mitigates joint stiffness, optimizes healing alignment, and ensures rapid recovery from high-energy skeletal impacts.',
      ar: 'تتطلب جراحة الإصابات دقة ميكانيكية حركية مطلقة. نحن نركز على التثبيت التشريحي الصلب للكسور للسماح بالحركة الفورية بعد العملية مباشرة. يقلل هذا من تصلب المفاصل ويضمن الالتئام المثالي والسريع.',
      fr: 'La chirurgie traumatologique exige une précision biomécanique absolue. Nous visons une fixation rigide pour permettre une mobilisation précoce, évitant ainsi l\'enraidissement.'
    },
    iconName: 'ShieldAlert',
    image: traumaImg,
    procedures: [
      { en: 'Anatomical Lock-Plates & Polyaxial Rigid Fixation', ar: 'تثبيت العظام بالصفائح التشريحية ذات البراغي المقفلة', fr: 'Ostéosynthèse par Plaques Verrouillées Polyaxiales' },
      { en: 'Closed Intramedullary Nailing for Long Bones', ar: 'التثبيت الداخلي المغلق لكسور العظام الطويلة (الأسياخ)', fr: 'Enclouage Centro-médullaire Verrouillé à Foyer Fermé' },
      { en: 'Complex Post-Traumatic Deformity Correction', ar: 'تصحيح التشوهات الهيكلية المعقدة بعد الحوادث', fr: 'Correction de Déformations Squelettiques Post-traumatiques' }
    ],
    recoveryProtocol: {
      phase1: { en: 'Phase I (Weeks 1-4): Soft-tissue healing protection, passive lymphatic drainage, and isometric joint setting.', ar: 'المرحلة الأولى (الأسبوع ١-٤): حماية الأنسجة الرخوة في مرحلة الالتئام، تنشيط الدورة اللمفاوية السلبية، وتمارين العضلات الثابتة.', fr: 'Phase I (Semaines 1-4): Protection de la cicatrisation cutanée, drainage lymphatique et contractions isométriques.' },
      phase2: { en: 'Phase II (Weeks 5-10): Progressive partial weight-bearing guided by callus formation, and active range of motion.', ar: 'المرحلة الثانية (الأسبوع ٥-١٠): تحميل الوزن الجزئي التدريجي بناءً على التئام العظم بصور الأشعة، واستعادة الحركة النشطة.', fr: 'Phase II (Semaines 5-10): Reprise progressive de l\'appui guidée par la consolidation, et travail de la mobilité active.' },
      phase3: { en: 'Phase III (Months 3+): Full axial load consolidation, closed-chain resistance training, and functional limb symmetry.', ar: 'المرحلة الثالثة (الشهر ٣+): تحميل الوزن الكامل، تمارين المقاومة المتكاملة، واستعادة القوة والتماثل العضلي للأطراف.', fr: 'Phase III (Mois 3+): Appui total consolidé, renforcement global et travail de symétrie fonctionnelle.' }
    }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-fares',
    name: { en: 'Dr. Ali Fares', ar: 'د. علي فارس', fr: 'Dr Ali Fares' },
    title: { 
      en: 'Orthopedic, Trauma & Sports Surgeon • Joint & Arthroscopy Specialist', 
      ar: 'أخصائي جراحة العظام والإصابات والطب الرياضي • جراحة المفاصل والمنظار',
      fr: 'Chirurgien Orthopédiste, Traumatologue & du Sport • Spécialiste de l\'Arthroscopie' 
    },
    specialtyId: 'knee',
    image: aliFaresImg,
    credentials: [
      { en: 'Specialist Degree in Orthopedic Surgery and Traumatology, Université Grenoble Alpes (UGA), France', ar: 'شهادة الاختصاص في جراحة العظام والإصابات من جامعة غرونوبل ألب (UGA)، فرنسا', fr: 'Diplôme de Spécialité en Chirurgie Orthopédique et Traumatologie, Université Grenoble Alpes (UGA), France' },
      { en: 'Fellowship in Advanced Arthroscopy & Knee Reconstruction, Clinique du Sport de Paris, France', ar: 'زمالة متقدمة في جراحة المنظار وإعادة بناء الركبة من عيادة باريس الرياضية، فرنسا', fr: 'Fellowship en Arthroscopie Avancée & Reconstruction du Genou, Clinique du Sport de Paris, France' },
      { en: 'Former Surgeon in the Orthopedic and Trauma Department, CHU Grenoble Alpes, France', ar: 'طبيب جراح سابق في قسم جراحة العظام والإصابات بالمستشفى الجامعي في غرونوبل، فرنسا', fr: 'Ancien Interne / Praticien au Service d\'Orthopédie et Traumatologie, CHU Grenoble Alpes, France' },
      { en: 'Member of the French Society of Orthopedic Surgery (SOFCOT) & Lebanese Orthopedic Association (LOA)', ar: 'عضو الجمعية الفرنسية لجراحة العظام (SOFCOT) والجمعية اللبنانية لجراحة العظام (LOA)', fr: 'Membre de la Société Française de Chirurgie Orthopédique (SOFCOT) et de l\'Association Libanaise d\'Orthopédie (LOA)' }
    ],
    experience: { 
      en: '15+ Years of Premier Surgical & Academic Expertise', 
      ar: 'أكثر من ١٥ عامًا من الخبرة الجراحية والأكاديمية المتميزة',
      fr: '15+ Ans d\'Expertise Chirurgicale & Académique de Premier Plan'
    },
    languages: [
      { en: 'Arabic', ar: 'العربية', fr: 'Arabe' },
      { en: 'English', ar: 'الإنجليزية', fr: 'Anglais' },
      { en: 'French', ar: 'الفرنسية', fr: 'Français' }
    ],
    availability: {
      days: { en: 'Mon, Tue, Wed, Thu, Sat', ar: 'الاثنين، الثلاثاء، الأربعاء، الخميس، السبت', fr: 'Lun, Mar, Mer, Jeu, Sam' },
      hours: '08:30 - 18:00 EET'
    },
    surgeryFocus: [
      { en: 'Minimally Invasive Knee Arthroscopy & ACL Reconstruction', ar: 'منظار الركبة طفيف التوغل وإعادة بناء الرباط الصليبي', fr: 'Arthroscopie du Genou Mini-invasive & Reconstruction LCA' },
      { en: 'Shoulder Rotator Cuff Arthroscopic Reconstruction & Latarjet', ar: 'إعادة بناء أوتار الكتف الدوارة بالمنظار وعملية لاتار جيه', fr: 'Réparation de la Coiffe des Rotateurs & Stabilisation Latarjet' },
      { en: 'Complex Fractures, Non-unions & Joint Reconstruction', ar: 'الكسور المعقدة، حالات عدم التئام العظام وإعادة بناء المفاصل تلو الإصابة', fr: 'Fractures Complexes, Pseudarthroses & Reconstruction Post-traumatique' },
      { en: 'Customized Fast-Track Hip and Knee Total Joint Replacements', ar: 'استبدال مفصل الورك والركبة الكلي ببروتوكولات التعافي السريع', fr: 'Prothèses Totales de Hanche et de Genou à Récupération Rapide' }
    ]
  }
];

export const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: 'knee-triage',
    jointName: { en: 'Knee Pathology', ar: 'إصابات وأمراض الركبة', fr: 'Pathologies du Genou' },
    symptoms: [
      {
        question: { en: 'Select your primary knee concern or injury mechanism:', ar: 'اختر الشكوى الرئيسية للركبة أو آلية الإصابة:', fr: 'Sélectionnez le symptôme principal ou le mécanisme de blessure :' },
        options: [
          {
            id: 'pop-twist',
            text: { en: 'Sudden "pop" heard during pivot with immediate swelling and instability', ar: 'سماع صوت طقطقة أو فرقعة حادة أثناء الالتفاف مع تورم فوري وعدم ثبات في الركبة', fr: 'Sensation de craquement ("pop") lors d\'un pivot avec gonflement immédiat et dérobement' },
            severity: 'high',
            recommendation: {
              en: 'High clinical suspicion of Anterior Cruciate Ligament (ACL) rupture, potentially accompanied by a meniscus tear. Avoid weight-bearing, apply ice, immobilize in extension, and consult Dr. Ali Fares immediately for clinical assessment.',
              ar: 'اشتباه سريري قوي بحدوث تمزق في الرباط الصليبي الأمامي (ACL)، متبوعًا بتمزق في الغضروف المفصلي. يرجى تجنب تحميل الوزن على الساق، ووضع الثلج، وتثبيتها ممدودة، وحجز استشارة فورية مع الدكتور علي فارس.',
              fr: 'Forte suspicion clinique de rupture du ligament croisé antérieur (LCA), potentiellement associée à une lésion méniscale. Évitez l\'appui, appliquez de la glace, et consultez le Dr Ali Fares immédiatement.'
            },
            imagingRequired: { en: 'High-Resolution Knee MRI (Magnetic Resonance Imaging) & Plain Radiographs', ar: 'صورة رنين مغناطيسي (MRI) عالية الدقة للركبة مع صور أشعة عادية', fr: 'IRM du Genou à Haute Résolution & Radiographies Standards' },
            estimatedRecovery: { en: '6 - 9 Months post-arthroscopic reconstruction back to sports', ar: '٦ - ٩ أشهر بعد إعادة البناء بالمنظار للعودة التامة للرياضة واللعب', fr: '6 - 9 Mois après reconstruction arthroscopique pour un retour au sport' }
          },
          {
            id: 'locking-pain',
            text: { en: 'Sharp pain during deep flexion with sudden knee locking or catching', ar: 'ألم حاد عند ثني الركبة العميق مع توقف مفاجئ (تعليق) للركبة أثناء الحركة', fr: 'Douleur vive en flexion profonde avec blocages épisodiques du genou' },
            severity: 'medium',
            recommendation: {
              en: 'Highly indicative of a bucket-handle meniscal tear or unstable cartilage flap. Arthroscopic suture preservation is time-sensitive to prevent tear extension and cartilage erosion.',
              ar: 'مؤشر قوي على حدوث تمزق في الغضروف الهلالي (من نوع مقبض السطل) أو ارتخاء غضروفي غير مستقر. خياطة الغضروف بالمنظار هي إجراء دقيق للحفاظ عليه ويجب القيام به مبكرًا.',
              fr: 'Indication claire d\'une lésion méniscale en anse de seau ou d\'un volet cartilagineux instable. Une réparation arthroscopique rapide est essentielle pour préserver le ménisque.'
            },
            imagingRequired: { en: 'Urgent Knee MRI scan to evaluate meniscal viability', ar: 'صورة رنين مغناطيسي عاجلة للركبة لتقييم سلامة وقابلية خياطة الغضروف', fr: 'IRM du Genou urgente pour évaluer la viabilité méniscale' },
            estimatedRecovery: { en: '3 - 4 Months of structured meniscus-healing protocol', ar: '٣ - ٤ أشهر من الالتزام ببروتوكول شفاء الغضروف الممنهج', fr: '3 - 4 Mois de protocole structuré de cicatrisation méniscale' }
          },
          {
            id: 'gradual-wear',
            text: { en: 'Gradual deep aching pain, worse with morning stiffness, bone rubbing sensations', ar: 'ألم عميق يزداد تدريجيًا، يشتد مع تيبس الركبة الصباحي، وشعور باحتكاك داخلي في العظم', fr: 'Douleur profonde et progressive, raideur matinale et sensation de frottement' },
            severity: 'low',
            recommendation: {
              en: 'Likely chronic knee osteoarthritis (joint wear) or patellofemoral cartilage degeneration. Conservative management through cellular injections, unloading brace, and muscle strengthening is indicated before arthroplasty consideration.',
              ar: 'من المرجح أن يكون احتكاكًا مزمنًا في مفصل الركبة (خشونة) أو تآكلًا في غضروف الداغصة. يوصى ببروتوكولات علاج تحفظية تشمل الحقن الزيتية والخلوية، تقوية العضلات، واستخدام الدعامة.',
              fr: 'Probable gonarthrose chronique (usure articulaire). Une prise en charge conservatrice par injections biologiques, genouillère de décharge et renforcement musculaire est préconisée.'
            },
            imagingRequired: { en: 'Standing bilateral weight-bearing Knee X-rays & Rosenberg views', ar: 'أشعة سينية للركبتين بوضعية الوقوف وتحميل الوزن ووضعيات "روزنبرغ"', fr: 'Radiographies des Genoux en charge (bilatérale) & Clichés de Rosenberg' },
            estimatedRecovery: { en: 'Ongoing maintenance, or 2 - 3 months recovery if total replacement is performed', ar: 'صيانة ومتابعة مستمرة، أو ٢ - ٣ أشهر للتعافي التام في حال إجراء استبدال المفصل الكلي', fr: 'Suivi conservateur régulier, ou 2 à 3 mois de réhabilitation en cas de prothèse totale' }
          }
        ]
      }
    ]
  },
  {
    id: 'shoulder-triage',
    jointName: { en: 'Shoulder Pathology', ar: 'إصابات وأمراض الكتف', fr: 'Pathologies de l\'Épaule' },
    symptoms: [
      {
        question: { en: 'Select your primary shoulder symptom profile:', ar: 'اختر نمط الشكوى والأعراض الأساسية في الكتف:', fr: 'Sélectionnez le symptôme principal à l\'épaule :' },
        options: [
          {
            id: 'shoulder-dislocation',
            text: { en: 'Acute dislocation, or recurrent shoulder slipping out of joint during overhead action', ar: 'خلع حاد بالكتف، أو تكرار خروج وانزلاق مفصل الكتف من مكانه أثناء رفع الذراع', fr: 'Luxation aiguë ou sensation d\'épaule instable qui glisse lors de mouvements armés' },
            severity: 'high',
            recommendation: {
              en: 'Strong evidence of labral tear (Bankart lesion) or glenoid bone loss. In young active athletes, surgical stabilization (Arthroscopic Bankart or Latarjet bone block) is highly recommended to prevent recurrent dislocations and degenerative bone damage.',
              ar: 'دليل قوي على تمزق الشفة المفصلية (إصابة بانكارت) أو تآكل عظم الحق المفصلي. ينصح بشدة بالتدخل الجراحي لتثبيت الكتف بالمنظار أو عملية "لاتار جيه" للرياضيين النشطين لحماية المفصل من التآكل.',
              fr: 'Forte suspicion de lésion du bourrelet (lésion de Bankart) ou de perte osseuse glénoïdale. Une stabilisation chirurgicale (Bankart sous arthroscopie ou butée de Latarjet) est fortement recommandée.'
            },
            imagingRequired: { en: 'Shoulder MRI-Arthrography or High-Resolution CT scan with 3D bone reconstruction', ar: 'أشعة رنين مغناطيسي للكتف مع حقن صبغة ملونة أو أشعة مقطعية عالية الدقة مع إعادة بناء ثلاثية الأبعاد', fr: 'Arthroscanner de l\'épaule ou IRM de l\'épaule & Scanner 3D de contrôle osseux' },
            estimatedRecovery: { en: '4 - 6 Months for full active athletic contact sports release', ar: '٤ - ٦ أشهر للترخيص بالعودة الكاملة للرياضات الاحتكاكية', fr: '4 - 6 Mois avant d\'autoriser la reprise complète des sports de contact' }
          },
          {
            id: 'cuff-weakness',
            text: { en: 'Severe pain with inability to actively lift arm, clicking, and persistent night pain', ar: 'ألم شديد مع عدم القدرة على رفع الذراع للأعلى بمفردك، مع سماع طقطقة وآلام ليلية مزمنة', fr: 'Douleur intense avec impossibilité de lever le bras activement, craquements et douleurs nocturnes' },
            severity: 'medium',
            recommendation: {
              en: 'Suggestive of a Rotator Cuff Tendon Tear. Tears do not heal spontaneously and are prone to muscular retraction. Early arthroscopic double-row tendon repair offers excellent outcomes.',
              ar: 'يشير إلى وجود تمزق في وتر الكفة الدوارة للكتف. تمزقات الأوتار لا تلتئم من تلقاء نفسها وتكون عرضة للانكماش العضلي. ترميم الأوتار بالمنظار مبكرًا يضمن نتائج ممتازة.',
              fr: 'Symptômes évocateurs d\'une rupture de la coiffe des rotateurs. Les déchirures ne guérissent pas seules et risquent de se rétracter. Une réparation arthroscopique précoce est recommandée.'
            },
            imagingRequired: { en: 'Shoulder MRI scan or Dynamic Musculoskeletal Ultrasound', ar: 'صورة رنين مغناطيسي (MRI) للكتف أو فحص بالموجات فوق الصوتية الحركية (السونار)', fr: 'IRM de l\'Épaule ou Échographie Dynamique de l\'appareil locomoteur' },
            estimatedRecovery: { en: '4 - 6 Months of tendon biological healing and dynamic integration', ar: '٤ - ٦ أشهر للالتئام البيولوجي الكامل للوتر واستعادة القوة العضلية', fr: '4 - 6 Mois pour obtenir une cicatrisation complète du tendon et sa rééducation' }
          }
        ]
      }
    ]
  },
  {
    id: 'fracture-triage',
    jointName: { en: 'Trauma & Fracture Concerns', ar: 'إصابات الحوادث والكسور', fr: 'Traumatologie & Fractures' },
    symptoms: [
      {
        question: { en: 'Select your acute bone trauma or fracture concern:', ar: 'اختر نوع إصابة العظام الحادة أو الكسر الحاصل لديك:', fr: 'Sélectionnez le type de fracture ou traumatisme osseux :' },
        options: [
          {
            id: 'acute-fracture',
            text: { en: 'Acute deformity, severe swelling, localized bruising and total inability to bear weight after fall', ar: 'تشوه مفاجئ في العظم، ورم شديد، كدمات موضعية، وعدم القدرة التامة على تحميل الوزن بعد السقوط', fr: 'Déformation aiguë, gonflement sévère, ecchymose locale et incapacité totale d\'appui après chute' },
            severity: 'high',
            recommendation: {
              en: 'Indicative of an unstable, displaced bone fracture. Requires immediate temporary splinting, strict non-weight-bearing, and urgent evaluation by Dr. Ali Fares for anatomical reduction and lock-plating surgical fixation.',
              ar: 'يشير إلى وجود كسر عظمي مزاح وغير مستقر. يتطلب جبيرة مؤقتة فورًا، عدم تحميل أي وزن، والتوجه لتقييم جراحي سريع من الدكتور علي فارس لإجراء الرد التشريحي والتثبيت الجراحي.',
              fr: 'Indicateur d\'une fracture osseuse déplacée instable. Nécessite une attelle temporaire immédiate, l\'absence totale d\'appui et une évaluation urgente par le Dr Ali Fares pour ostéosynthèse.'
            },
            imagingRequired: { en: 'High-definition digital skeletal X-rays (AP & Lateral views) and potential CT scans', ar: 'أشعة سينية رقمية عالية الدقة (أمامية وجانبية) مع أشعة مقطعية عند الحاجة لتفاصيل المفصل', fr: 'Radiographies numériques standard de contrôle (Face & Profil) et Scanner osseux' },
            estimatedRecovery: { en: '3 - 4 Months of solid osseous consolidation and joint mobilizations', ar: '٣ - ٤ أشهر للتحام العظام بشكل صلب متكامل والبدء في تمارين الحركة', fr: '3 - 4 Mois pour une consolidation osseuse solide et la mobilisation articulaire' }
          }
        ]
      }
    ]
  }
];

export const SPORTS_REHAB_MILESTONES: RecoveryMilestone[] = [
  {
    day: 1,
    title: { 
      en: 'Acute Joint Inflammatory Management & Decongestion', 
      ar: 'إدارة الالتهاب الحاد للمفصل وتخفيف التورم',
      fr: 'Gestion Inflammatoire Articulaire Aiguë & Décongestion' 
    },
    description: {
      en: 'Primary focus on resolving early post-operative or post-injury swelling, activating tissue lymphatic drainage, maintaining structural brace locked extension, and preventing muscle shutdown.',
      ar: 'التركيز الأساسي على تخفيف التورم والانتفاخ بعد العملية أو الإصابة مباشرة، تنشيط التصريف اللمفاوي، الحفاظ على ثبات الجبيرة بمد كامل للركبة، ومنع كسل العضلات.',
      fr: 'Objectif principal de réduction de l\'œdème post-opératoire immédiat, drainage lymphatique, maintien de l\'immobilisation prescrite, et prévention de l\'amyotrophie.'
    },
    completed: true,
    exercises: [
      { name: { en: 'Controlled Cryotherapy & Multi-angle Elevation Cycles', ar: 'العلاج بالتبريد المقنن ودورات رفع الساق بزوايا متعددة', fr: 'Cryothérapie Contrôlée & Élévation de la Jambe' }, duration: { en: '20 Mins', ar: '٢٠ دقيقة', fr: '20 Min' }, reps: '5 Cycles Daily', intensity: 'Precise' },
      { name: { en: 'Isometric Quad Setting & Patellar Mobilizations', ar: 'تمارين قبض العضلة الرباعية الثابت وتحريك الداغصة', fr: 'Contraction Isométrique du Quadriceps & Mobilisation Rotulienne' }, duration: { en: '10 Mins', ar: '١٠ دقائق', fr: '10 Min' }, reps: '100 Reps Daily', intensity: 'Precise' },
      { name: { en: 'Active Ankle Pumps to Maintain Venous Gating', ar: 'تحريك مفصل الكاحل بشكل مستمر لتنشيط الدورة الدموية', fr: 'Flexion/Extension de Cheville (Pompes Active)' }, duration: { en: '5 Mins', ar: '٥ دقائق', fr: '5 Min' }, reps: 'Every Hour', intensity: 'Mild' }
    ]
  },
  {
    day: 15,
    title: { 
      en: 'Dynamic Range of Motion Progression & Early Loading', 
      ar: 'زيادة مدى الحركة الديناميكي والبدء بالتحميل الجزئي',
      fr: 'Progression de l\'Amplitude Articulaire & Charge Précoce' 
    },
    description: {
      en: 'Gradually recovering knee flexion to 90°-110°, reclaiming proper gait patterns with crutches, stimulating early knee proprioception, and initiating light closed-chain load loops.',
      ar: 'استعادة ثني الركبة تدريجيًا إلى ٩٠ - ١١٠ درجة، استعادة حركة المشي السليمة باستخدام العكازات، تحفيز الاتزان العصبي العضلي، وبدء تمارين المقاومة الخفيفة.',
      fr: 'Récupération progressive de la flexion du genou à 90°-110°, rééducation de la marche avec béquilles, stimulation de la proprioception, et charge en chaîne fermée.'
    },
    completed: false,
    exercises: [
      { name: { en: 'Heel Slides for Safe Flexion Progression', ar: 'تمارين سحب الكعب لزيادة ثني الركبة بأمان', fr: 'Glissements de Talon pour Gain de Flexion' }, duration: { en: '15 Mins', ar: '١٥ دقيقة', fr: '15 Min' }, reps: '3 Sets of 10', intensity: 'Moderate' },
      { name: { en: 'Closed-Kinetic-Chain Leg Press (Low Load)', ar: 'جهاز ضغط الأرجل بالسلسلة المغلقة (بوزن منخفض جدًا)', fr: 'Presse à Cuisse en Chaîne Fermée (Charge Légère)' }, duration: { en: '10 Mins', ar: '١٠ دقائق', fr: '10 Min' }, reps: '3 Sets of 15', intensity: 'Precise' },
      { name: { en: 'Bilateral Proprioceptive Balance on Flat Ground', ar: 'تمارين الاتزان الثنائي على سطح مستوٍ ومستقر', fr: 'Équilibre Proprioceptif Bipodal sur Sol Plat' }, duration: { en: '10 Mins', ar: '١٠ دقائق', fr: '10 Min' }, reps: '3 Reps of 60s', intensity: 'Moderate' }
    ]
  },
  {
    day: 45,
    title: { 
      en: 'Hypertrophy Progression & Dynamic Kinematic Loading', 
      ar: 'زيادة الكتلة العضلية والتحميل الحركي الديناميكي',
      fr: 'Progression Hypertrophique & Charge Cinématique Dynamique' 
    },
    description: {
      en: 'Focusing on single-leg strength symmetry, restoring full biological range of motion, introducing lateral load shift loops, and preparing joints for impact loads.',
      ar: 'التركيز على تماثل وقوة الساق الفردية، استعادة المدى الحركي الكامل للمفصل، إدخال تمارين الانتقال الجانبي للحمل العضلي، وتحضير المفاصل لتحمل الصدمات.',
      fr: 'Concentration sur la symétrie de force unilatérale, restauration de l\'amplitude complète, introduction de mouvements latéraux, et préparation aux charges d\'impact.'
    },
    completed: false,
    exercises: [
      { name: { en: 'Single-leg Leg Press & Isometric Bulges', ar: 'تمارين ضغط الأرجل الفردي والقبض العضلي الأحادي', fr: 'Presse Unilatérale & Squat Isométrique' }, duration: { en: '15 Mins', ar: '١٥ دقيقة', fr: '15 Min' }, reps: '4 Sets of 10', intensity: 'Precise' },
      { name: { en: 'Unstable Surface Balance (Bosu Ball Loops)', ar: 'تمارين الاتزان على سطح غير مستقر (كرة البوسو اللينة)', fr: 'Équilibre sur Plan Instable (Bosu Ball)' }, duration: { en: '12 Mins', ar: '١٢ دقيقة', fr: '12 Min' }, reps: '5 Sets of 45s', intensity: 'Precise' },
      { name: { en: 'Low-impact Bilateral Box Drop to Landings', ar: 'تمارين نزول القفز الثنائي من صندوق منخفض لامتصاص الصدمات', fr: 'Réception de Saut de Boite Basse (Double Appui)' }, duration: { en: '10 Mins', ar: '١٠ دقائق', fr: '10 Min' }, reps: '3 Sets of 8', intensity: 'Moderate' }
    ]
  },
  {
    day: 90,
    title: { 
      en: 'Plyometric Acceleration & Sports-Specific Restitution', 
      ar: 'تمارين التسارع الانفجاري والتأهيل الخاص بنوع الرياضة',
      fr: 'Pliométrie Explosive & Réathlétisation Gestuelle' 
    },
    description: {
      en: 'Executing power plyometric jumps, initiating high-speed linear acceleration sprints, completing dynamic multi-planar cutting, and final biomechanical discharge testing.',
      ar: 'إجراء قفزات القوة الانفجارية، البدء في ركض التسارع المستقيم عالي السرعة، إكمال تدريبات الالتفاف السريع متعددة الاتجاهات، واختبار الأداء الحركي النهائي للعودة للملاعب.',
      fr: 'Sauts pliométriques explosifs, sprints en ligne droite à haute intensité, changements de direction rapides et tests biomécaniques de retour au sport.'
    },
    completed: false,
    exercises: [
      { name: { en: 'Explosive Single-Leg Box Jumps', ar: 'القفز الانفجاري على الصناديق بساق واحدة للارتفاع', fr: 'Sauts Explosifs Unilatéraux sur Boite' }, duration: { en: '15 Mins', ar: '٢٠ دقيقة', fr: '15 Min' }, reps: '4 Sets of 6', intensity: 'Precise' },
      { name: { en: 'Linear Acceleration and Deceleration Sprints', ar: 'تدريبات التسارع والتباطؤ المستقيم بالركض السريع', fr: 'Sprints Linéaires en Accélération-Décélération' }, duration: { en: '20 Mins', ar: '٢٠ دقيقة', fr: '20 Min' }, reps: '10 Runs of 20m', intensity: 'Precise' },
      { name: { en: 'Biomechanical Peak Stability & Symmetry Test', ar: 'الاختبار الحركي النهائي للتوازن والتماثل العضلي للكتلتين', fr: 'Test de Stabilité de Pointe & Symétrie Articulaire' }, duration: { en: '30 Mins', ar: '٣٠ دقيقة', fr: '30 Min' }, reps: 'Complete Protocol', intensity: 'Precise' }
    ]
  }
];

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'acl',
    title: {
      en: "Understanding ACL Tears & Reconstructions",
      ar: "فهم تمزق الرباط الصليبي وعلاجه بالمنظار",
      fr: "Comprendre les Ruptures du LCA & la Reconstruction"
    },
    summary: {
      en: "A comprehensive medical guide explaining stability recovery pathways, surgical techniques, and advanced sports medicine rehabilitation protocols.",
      ar: "دليل طبي شامل يشرح كيفية عودة الاستقرار للمفصل بعد الإصابة، والتقنيات الجراحية بالمنظار، ومراحل التأهيل الرياضي المتطورة.",
      fr: "Un guide médical complet expliquant les techniques de reconstruction du LCA et les protocoles de rééducation accélérée."
    },
    author: {
      en: "Dr. Ali Fares (Paris Trained Specialist)",
      ar: "الدكتور علي فارس (خريج مستشفيات فرنسا)",
      fr: "Dr Ali Fares (Ancien Interne en France)"
    },
    readTime: {
      en: "5 Mins Read",
      ar: "قراءة في ٥ دقائق",
      fr: "5 Min de lecture"
    },
    sections: [
      {
        heading: {
          en: "1. Injury Mechanism of the ACL",
          ar: "١. آلية حدوث تمزق الرباط الصليبي الأمامي",
          fr: "1. Mécanisme de Lésion du LCA"
        },
        content: {
          en: "The Anterior Cruciate Ligament (ACL) is the primary stabilizer of the knee, preventing excessive forward movement and rotational displacement of the tibia relative to the femur. Tears typically occur during high-energy pivot maneuvers—common in soccer, basketball, and skiing—where the knee is subjected to sudden decelerations, rapid direction changes, or axial twisting under weight-bearing. This sudden torque exceeds the physical strength limits of the ligament fibers, resulting in a partial or complete tear.",
          ar: "الرباط الصليبي الأمامي هو الدعامة والمثبت الأساسي لمفصل الركبة، حيث يمنع حركة عظم الساق (الظنبوب) للأمام بشكل مفرط ويمنع الالتفاف غير الطبيعي للمفصل. تحدث التمزقات عادة أثناء حركات الالتفاف أو الدوران المفاجئ—الشائعة في كرة القدم والسلة والتزلج—حيث تتعرض الركبة لتباطؤ فوري، أو تغيير سريع في الاتجاه، أو التواء حاد أثناء تحميل الوزن على الساق. يفوق هذا العزم المفاجئ القدرة المادية لألياف الرباط، مما يؤدي إلى تمزقه جزئيًا أو كليًا.",
          fr: "Le Ligament Croisé Antérieur (LCA) est le pivot stabilisateur du genou, empêchant le tiroir antérieur et les décalages rotatoires du tibia sur le fémur. La rupture survient généralement lors d'un mécanisme de pivot (décélération brusque, changement de direction, ou torsion axiale en charge) fréquent au football, basket-ball et ski. Ce couple de forces dépasse la résistance mécanique des fibres du ligament, conduisant à une déchirure partielle ou complète."
        }
      },
      {
        heading: {
          en: "2. Clinical Symptoms & Diagnostic Protocol",
          ar: "٢. الأعراض السريرية والتشخيص الدقيق للتمزق",
          fr: "2. Symptômes Cliniques & Protocole de Diagnostic"
        },
        content: {
          en: "At the moment of impact, patients often hear or feel an audible and painful 'pop' within the joint, followed immediately by severe pain and the inability to continue athletic participation. Due to bleeding inside the joint (hemarthrosis), the knee swells rapidly within 2 to 4 hours. A profound sensation of joint 'slipping' or giving way during walking or pivoting attempts is a classic sign of mechanical instability. The gold standard for confirming an ACL tear is a high-resolution knee MRI, which evaluates the exact fiber state, alongside plain radiographs to exclude fracture fragments.",
          ar: "في لحظة الإصابة، يشعر المريض أو يسمع طقطقة أو فرقعة حادة (Pop) داخل الركبة، يتبعها ألم شديد يمنعه من مواصلة اللعب. نظرًا لتدفق الدم داخل المفصل (النزف المفصلي)، تتورم الركبة بشكل كبير وسريع خلال ساعتين إلى ٤ ساعات من الإصابة. يعد الشعور بعدم الثبات أو 'انفلات' الركبة عند المشي أو محاولة الالتفاف علامة تقليدية على عدم الاستقرار الميكانيكي للمفصل. تأكيد التشخيص يتم سريريًا وبواسطة فحص الرنين المغناطيسي (MRI) عالي الدقة لتقييم الألياف والغضاريف المجاورة.",
          fr: "Au moment du traumatisme, le patient ressent ou entend souvent un 'craquement' intra-articulaire douloureux, suivi d'un gonflement rapide (hémarthrose) en 2 à 4 heures. La sensation de dérobement ou d'instabilité mécanique lors de la marche ou de pivots est le signe fonctionnel majeur. Le diagnostic de certitude est posé par un examen clinique rigoureux (Lachman, tiroir, pivot-shift) combiné à une IRM du genou à haute résolution pour caractériser la lésion ligamentaire et les lésions méniscales associées."
        }
      },
      {
        heading: {
          en: "3. Minimally Invasive Arthroscopic Reconstruction",
          ar: "٣. الجراحة بالمنظار طفيفة التوغل لإعادة البناء",
          fr: "3. Reconstruction Arthroscopique Mini-invasive"
        },
        content: {
          en: "Because complete ACL tears do not heal on their own due to joint fluid interference, surgical reconstruction is recommended for active individuals to restore stability and protect cartilage. Using state-of-the-art arthroscopic equipment, Dr. Ali Fares performs anatomical reconstruction. A small autograft is harvested from the patient's own tendons (usually hamstring tendons or patellar tendon). Through keyhole incisions, tunnels are drilled in the femur and tibia at the exact anatomical footprint, and the graft is securely anchored. This minimally invasive method reduces post-operative pain and speeds up return-to-play recovery.",
          ar: "نظرًا لأن تمزقات الرباط الصليبي الكاملة لا تلتئم تلقائيًا بسبب تداخل السائل المفصلي، يوصى بإجراء إعادة بناء جراحية للأفراد النشطين والرياضيين لاستعادة ثبات الركبة وحماية الغضاريف من التآكل المبكر. يقوم الدكتور علي فارس بإجراء العملية بالمنظار بالكامل عبر فتحات صغيرة جدًا (جراحة ثقب المفتاح). يتم أخذ طعم وتري طبيعي من المريض نفسه (أوتار عضلات المأبض الخلفية أو وتر الداغصة)، ثم يتم حفر قنوات دقيقة في عظمي الفخذ والساق لتثبيت الرباط الجديد بأحدث المثبتات البيولوجية الآمنة وقابلة الامتصاص.",
          fr: "Les ruptures complètes du LCA ne cicatrisant pas spontanément en raison du liquide synovial, la reconstruction chirurgicale est recommandée chez les sujets actifs pour stabiliser le genou. Le Dr Ali Fares réalise cette intervention par arthroscopie, garantissant une invasion tissulaire minimale. Une autogreffe est prélevée (généralement les tendons ischio-jambiers type DIDDT, ou le tendon rotulien). Des tunnels osseux fémoraux et tibiaux sont forés précisément sur l'empreinte anatomique d'origine pour y glisser le greffon, fixé solidement par des vis ou endobuttons."
        }
      },
      {
        heading: {
          en: "4. Progressive Rehabilitation Pathway",
          ar: "٤. بروتوكول التأهيل المتسارع والعودة التدريجية للملاعب",
          fr: "4. Protocole de Rééducation & Retour au Sport"
        },
        content: {
          en: "Rehabilitation is a critical component of surgical success. Modern protocols practiced by Dr. Fares focus on immediate mobilization: early weight-bearing as tolerated, active quadriceps activation, and restoring complete knee extension in the first two weeks. Gradually, knee flexion is progressive up to 120° by week 6. By month 3, jogging and straight-line running are introduced. Between months 4.5 and 6, agility and sports-specific cutting movements are integrated. Finally, full release to contact sports (at 6-9 months) is granted only after passing strict biomechanical strength and symmetry clearance tests.",
          ar: "يعد التأهيل السريري حجر الزاوية لنجاح الجراحة واستعادة وظائف الركبة. تركز بروتوكولات الدكتور علي فارس المتطورة على الحركة الفورية المبكرة: تفعيل العضلة الرباعية الأمامية لمنع ضمورها، استعادة المد الكامل للركبة في أول أسبوعين، والبدء بالمشي التدريجي. تزداد زاوية ثني الركبة لتصل لـ ١٢٠ درجة بحلول الأسبوع السادس. في الشهر الثالث يُسمح بالهرولة والجري المستقيم. بين الشهر الرابع والسادس يتم إدخال تدريبات الرشاقة وتغيير الاتجاهات، ولا يُسمح بالعودة الكاملة للعب الاحتكاكي (من ٦ إلى ٩ أشهر) إلا بعد اجتياز اختبارات القوة والتوازن الحركي.",
          fr: "La rééducation est un pilier fondamental de la réussite chirurgicale. Les protocoles modernes du Dr Fares mettent l'accent sur la mobilisation précoce : réactivation immédiate du quadriceps, verrouillage actif et récupération de l'extension complète dès les premiers jours. La flexion progresse pour atteindre 120° à la 6ème semaine. La course à pied rectiligne débute au 3ème mois. L'agilité et le travail multidirectionnel sont introduits entre le 4ème et 6ème mois. Le retour complet aux sports de pivot/contact (6-9 mois) requiert la validation de tests biomécaniques stricts (Limb Symmetry Index > 90%)."
        }
      }
    ]
  },
  {
    id: 'rotator',
    title: {
      en: "Rotator Cuff Repair: Surgical Indications",
      ar: "ترميم أوتار الكتف: متى نقرر الجراحة بالمنظار؟",
      fr: "Réparation de la Coiffe des Rotateurs : Indications"
    },
    summary: {
      en: "Learn about the shoulder's tendon anatomy, the criteria for active repair, and advanced arthroscopic suture anchor techniques.",
      ar: "دليل توضيحي مفصل يستعرض تشريح أوتار الكتف الدوارة، ومعايير اتخاذ قرار الترميم الجراحي، وتقنيات خياطة الأوتار المتطورة بالمنظار.",
      fr: "Comprendre l'anatomie de l'épaule, les critères d'intervention pour une réparation de la coiffe, et la technique de suture double rangée."
    },
    author: {
      en: "Dr. Ali Fares (Orthopedic & Trauma Expert)",
      ar: "الدكتور علي فارس (إخصائي جراحة العظام والكتف)",
      fr: "Dr Ali Fares (Spécialiste de l'Épaule)"
    },
    readTime: {
      en: "4 Mins Read",
      ar: "قراءة في ٤ دقائق",
      fr: "4 Min de lecture"
    },
    sections: [
      {
        heading: {
          en: "1. What is the Rotator Cuff?",
          ar: "١. ما هي أوتار الكفة الدوارة للكتف؟",
          fr: "1. Qu'est-ce que la Coiffe des Rotateurs ?"
        },
        content: {
          en: "The rotator cuff is a functional group of four muscles and their corresponding tendons (supraspinatus, infraspinatus, subscapularis, and teres minor) that envelope the humeral head inside the shoulder joint. These tendons cooperate to provide rotational power to the arm while actively pulling the humeral head into the shallow glenoid socket, maintaining center stability during overhead activities. Due to repetitive overhead friction, poor vascular supply, or acute trauma, these tendons can wear down and tear.",
          ar: "أوتار الكفة الدوارة هي مجموعة وظيفية تتكون من أربع عضلات وأوتارها المتطابقة (فوق الشوكة، تحت الشوكة، تحت الكتف، والعضلة المدورة الصغيرة) التي تحيط برأس عظم العضد داخل مفصل الكتف. تعمل هذه الأوتار معًا لتوفير القوة الدورانية للذراع وفي نفس الوقت الحفاظ على ثبات رأس المفصل في مكانه أثناء رفع الذراع للأعلى. نتيجة للاحتكاك المتكرر أو ضعف التروية الدموية أو السقوط المفاجئ، يمكن أن تتعرض هذه الأوتار للتآكل والتمزق.",
          fr: "La coiffe des rotateurs est un ensemble fonctionnel de quatre muscles et de leurs tendons (supra-épineux, infra-épineux, sous-scapulaire, et petit rond) qui coiffent la tête humérale. Ils assurent la rotation du bras tout en stabilisant activement la tête de l'humérus dans la cavité glénoïdale lors des mouvements d'élévation. En raison de frottements répétés, d'une vascularisation fragile, ou d'un traumatisme, ces tendons peuvent s'user ou se rompre."
        }
      },
      {
        heading: {
          en: "2. Determining Surgical vs. Conservative Therapy",
          ar: "٢. متى نلجأ للجراحة بالمنظار ومتى نكتفي بالعلاج التحفظي؟",
          fr: "2. Indications Chirurgicales vs Conservatrices"
        },
        content: {
          en: "Not all rotator cuff tears require immediate surgery. Partial-thickness tears, or tears in low-demand patients, are initially managed with structured physical therapy and biological injections to resolve pain and restore functional movement. However, surgery is strongly indicated for acute full-thickness tears (especially after a fall or lifting heavy loads), tears accompanied by profound muscular weakness, and chronic tears that fail to improve after 3 to 6 months of targeted rehabilitation. Delaying repair in active individuals can lead to tendon retraction and irreversible muscle atrophy.",
          ar: "لا تتطلب جميع تمزقات الكتف تدخلًا جراحيًا فوريًا. التمزقات الجزئية البسيطة أو التمزقات لدى كبار السن غير النشطين يمكن علاجها تحفظيًا من خلال العلاج الطبيعي المكثف وحقن المفاصل المضادة للالتهاب أو الحقن البيولوجية المرممة للوتر. لكن الجراحة تصبح ضرورية وعاجلة في حالات التمزقات الكلية الحادة (الناتجة عن سقوط أو رفع وزن ثقيل)، والتمزقات المترافقة بضعف عضلي شديد في الذراع، أو عند فشل العلاج التحفظي لمدة ٣ إلى ٦ أشهر. تأخير الجراحة قد يؤدي لانكماش الوتر وضمور العضلة بشكل دائم.",
          fr: "Toutes les ruptures de la coiffe ne relèvent pas de la chirurgie. Les ruptures partielles ou survenant chez des patients sédentaires bénéficient en première intention d'une rééducation spécialisée et d'injections ciblées. En revanche, l'indication chirurgicale est formelle en cas de rupture aiguë transfixiante (traumatique), de déficit moteur majeur (épaule pseudo-paralytique), ou d'échec d'un traitement médical bien conduit pendant 3 à 6 mois. Retarder la chirurgie chez un patient actif expose à une rétraction tendineuse et à une infiltration graisseuse musculaire irréversible."
        }
      },
      {
        heading: {
          en: "3. Arthroscopic Double-Row Suture Anchoring",
          ar: "٣. خياطة وتثبيت الأوتار بالمنظار بتقنية الصف المزدوج",
          fr: "3. Technique Arthroscopique Double Rangée"
        },
        content: {
          en: "Dr. Ali Fares performs this procedure entirely arthroscopically through 3 to 4 tiny incisions around the shoulder. He uses an advanced double-row suture anchoring technique. Instead of simply stitching the tendon in one line, sutures are crossed in a lattice-like grid to press the torn tendon flat against its anatomical bone bed. This increases the contact area for bone-to-tendon biological healing, lowers the risk of re-tearing, and provides immediate mechanical strength so the patient can start early passive movement safely.",
          ar: "يُجري الدكتور علي فارس هذه العملية بالمنظار بالكامل عبر ٣ إلى ٤ ثقوب صغيرة حول الكتف. ويستخدم تقنية تثبيت الأوتار المتقدمة ذات الصف المزدوج (Double-Row Suture). بدلاً من خياطة الوتر في خط واحد، يتم توزيع الخيوط الطبية القوية جداً عبر صفين متوازيين للضغط على الوتر الممزق وتثبيته بشكل مسطح ومتكامل على سطحه العظمي الأصلي. تزيد هذه التقنية من مساحة الالتئام البيولوجي، وتضمن قوة ميكانيكية فائقة تقلل من احتمالية تمزق الوتر مجددًا.",
          fr: "Le Dr Ali Fares réalise la réparation sous arthroscopie complète à travers 3 ou 4 micro-incisions. Il emploie la technique de référence en double rangée (Double-Row). Au lieu de suturer le tendon sur une seule ligne, les sutures sont croisées pour plaquer uniformément le tendon sur sa surface d'insertion osseuse d'origine (le footprint). Cela maximise la surface de contact biologique pour la cicatrisation tendon-os, réduit considérablement le taux de re-rupture et offre une résistance mécanique supérieure autorisant une mobilisation précoce."
        }
      },
      {
        heading: {
          en: "4. Recovery & Functional Milestones",
          ar: "٤. مراحل الشفاء والتأهيل الحركي للكتف",
          fr: "4. Récupération & Étapes Fonctionnelles"
        },
        content: {
          en: "Post-operative healing is divided into structured steps. For the first 4 to 6 weeks, the arm is protected in a specialized sling to allow the tendon to securely bind to the bone, though gentle passive movements are initiated early. Active movement starts around week 6 to recover complete range of motion. Progressive strengthening begins at month 3. Returning to heavy lifting, overhead sports, or throwing is expected around 4 to 6 months, after the tendon has achieved complete biological remodeling and muscular balance.",
          ar: "ينقسم بروتوكول التعافي بعد العملية إلى مراحل تدريجية مدروسة. في الأسابيع الأربعة إلى الستة الأولى، يتم حماية الذراع باستخدام حمالة كتف مخصصة للسماح للوتر بالالتصاق والالتحام بالعظم، مع البدء المبكر بتمارين الحركة السلبية اللطيفة لمنع التيبس. تبدأ الحركة النشطة بمجهود المريض الشخصي في الأسبوع السادس لاستعادة الحركة الكاملة للذراع، وتبدأ تمارين التقوية والمقاومة التدريجية في الشهر الثالث. تُتاح العودة للأعمال الثقيلة والرياضة الكاملة بين الشهر الرابع والسادس.",
          fr: "La récupération post-opératoire est progressive. Pendant les 4 à 6 premières semaines, le bras est protégé dans une écharpe pour permettre la cicatrisation biologique du tendon sur l'os, tout en débutant une mobilisation passive précoce. La mobilisation active débute à la 6ème semaine pour récupérer les amplitudes complètes. Le renforcement musculaire progressif commence au 3ème mois. La reprise des activités de force, des sports de lancers ou au-dessus de la tête est envisagée entre le 4ème et le 6ème mois."
        }
      }
    ]
  },
  {
    id: 'joint',
    title: {
      en: "Fast-Track Protocols in Joint Replacements",
      ar: "التعافي السريع بعد جراحات استبدال المفاصل",
      fr: "Protocoles de Récupération Rapide (Fast-Track)"
    },
    summary: {
      en: "Discover how advanced anesthesia, muscle-sparing approaches, and immediate loading within hours of hip/knee surgery accelerate healing.",
      ar: "تعرف على كيفية دمج التخدير الموضعي الحديث، والتقنيات الجراحية التي تحافظ على العضلات، والمشي المبكر خلال ساعات من استبدال الورك أو الركبة لتسريع التعافي.",
      fr: "Découvrez comment l'anesthésie moderne, les voies d'abord mini-invasives et la mise en charge immédiate accélèrent la récupération après prothèse."
    },
    author: {
      en: "Dr. Ali Fares (Joint Arthroplasty Director)",
      ar: "الدكتور علي فارس (إخصائي المفاصل الاصطناعية وزراعتها)",
      fr: "Dr Ali Fares (Chirurgie Prothétique de Pointe)"
    },
    readTime: {
      en: "4 Mins Read",
      ar: "قراءة في ٤ دقائق",
      fr: "4 Min de lecture"
    },
    sections: [
      {
        heading: {
          en: "1. The Philosophy of Fast-Track Arthroplasty",
          ar: "١. فلسفة بروتوكول التعافي السريع للمفاصل",
          fr: "1. Philosophie de la Récupération Rapide"
        },
        content: {
          en: "The Fast-Track or Rapid Recovery Pathway is a revolutionary clinical protocol pioneered in Europe that reduces the physiological stress of joint replacement surgery. Rather than treating surgery as a traumatic event requiring weeks of bed rest, Fast-Track coordinates preoperative optimization, advanced local anesthetic infiltration, and immediate post-operative rehabilitation. This team-based approach minimizes hospital stays, reduces complications, and enables patients to recover in the comfort of their homes.",
          ar: "بروتوكول التعافي السريع (Fast-Track) هو نهج طبي ثوري تم تطويره في المراكز الطبية الأوروبية لتقليل الإجهاد الفسيولوجي الناتج عن جراحة استبدال المفاصل. بدلاً من التعامل مع الجراحة كحدث يستلزم الاستلقاء لأسبوعين في السرير، يدمج البروتوكول التثقيف المسبق للمريض، وتطبيق التخدير الموضعي الموجه بدقة، مع النهوض والمشي الفوري بعد الجراحة مباشرة لضمان عودة المريض سريعا لمنزله.",
          fr: "Le concept de Récupération Rapide Après Chirurgie (RRAC) ou 'Fast-Track' est un protocole clinique innovant d'origine européenne visant à réduire le stress physiologique lié à l'arthroplastie. Plutôt que d'imposer un alitement prolongé, la RRAC coordonne l'optimisation préopératoire, l'infiltration analgésique locale péri-articulaire et une mobilisation immédiate. Cette synergie réduit la durée d'hospitalisation et les complications."
        }
      },
      {
        heading: {
          en: "2. Muscle-Sparing Surgical Approaches",
          ar: "٢. التقنيات الجراحية المحافظة على سلامة العضلات",
          fr: "2. Voies d'Abord Préservant les Muscles"
        },
        content: {
          en: "The foundation of rapid recovery is surgical precision. Dr. Ali Fares utilizes muscle-sparing techniques, such as the direct anterior approach for hip replacements and subvastus or midvastus approaches for knee replacements. Unlike traditional methods that cut key stabilizing muscles, these approaches work through natural muscular intervals, preserving the integrity of major motor groups. This results in significantly less postoperative pain, virtually eliminates the risk of joint dislocation, and maintains natural joint control from day one.",
          ar: "حجر الأساس في بروتوكول التعافي السريع هو الدقة الجراحية أثناء العملية. يستخدم الدكتور علي فارس تقنيات جراحية مبتكرة تحافظ على العضلات، مثل 'الشق الأمامي المباشر' لاستبدال مفصل الورك، وتقنية 'تحت العضلة المتسعة' لاستبدال الركبة. على عكس الطرق التقليدية التي تقطع الأوتار والعضلات الداعمة للمفصل، تمر هذه التقنيات بين الفراغات العضلية الطبيعية دون قصها، مما يقلل الألم ويحافظ على ثبات المفصل والقدرة على المشي فوراً.",
          fr: "La base de la récupération rapide repose sur une chirurgie respectueuse de l'anatomie. Le Dr Ali Fares utilise des voies d'abord mini-invasives et d'épargne musculaire, comme la voie antérieure directe pour les prothèses de hanche ou la voie subvastus pour les prothèses de genou. Contrairement aux approches classiques qui sectionnent les tendons stabilisateurs, ces techniques passent par des espaces musculaires naturels, préservant la force motrice globale et minimisant la douleur."
        }
      },
      {
        heading: {
          en: "3. Early Mobilization Within Hours of Surgery",
          ar: "٣. النهوض والمشي المبكر في يوم العملية نفسه",
          fr: "3. Mobilisation Précoce quelques heures après l'intervention"
        },
        content: {
          en: "One of the most remarkable aspects of the Fast-Track protocol is that patients stand and take their first steps within 3 to 4 hours of leaving the operating room. This early weight-bearing is made possible by intra-operative local anesthetic infiltration, which blocks surgical pain while preserving motor control. Immediate walking stimulates venous blood circulation, which significantly decreases the risk of deep vein thrombosis (DVT) and pulmonary embolism. It also prevents joint stiffness and boosts the patient's confidence.",
          ar: "من أهم ميزات بروتوكول التعافي السريع هو وقوف المريض ومشي أولى خطواته بمساعدة أخصائي العلاج الطبيعي خلال ٣ إلى ٤ ساعات فقط من خروجه من غرفة العمليات! هذا التحميل المبكر للوزن يصبح ممكنًا بفضل حقن مسكنات موضعية طويلة المدى حول المفصل أثناء الجراحة، مما يخدر ألم الجرح مع بقاء العضلات قوية ومستجيبة. المشي الفوري ينشط الدورة الدموية، مما يقلل احتمالية التجلط الدموي (DVT) ويمنع تيبس المفصل.",
          fr: "L'un des aspects les plus spectaculaires du protocole RRAC est que le patient se lève et effectue ses premiers pas seulement 3 à 4 heures après la fin de la chirurgie. Cette mise en charge immédiate est rendue possible par l'infiltration péri-articulaire d'anesthésiques locaux. La marche précoce stimule le retour veineux, réduisant drastiquement le risque de phlébite (DVT), lutte contre l'enraidissement précoce de l'articulation et restaure la confiance du patient."
        }
      },
      {
        heading: {
          en: "4. Outstanding Outcomes and Return to Independence",
          ar: "٤. النتائج المتميزة والعودة السريعة للحياة الطبيعية",
          fr: "4. Résultats Cliniques Exceptionnels & Autonomie"
        },
        content: {
          en: "By avoiding prolonged immobilization, patients bypass the muscle atrophy and severe stiffness that used to characterize joint replacements. Most Fast-Track patients are able to climb stairs, sit and stand comfortably, and return home within 1 to 2 days after surgery, requiring minimal assistance. Full return to daily activities, driving, and low-impact recreational sports (swimming, cycling) is accelerated, often occurring in weeks rather than months, ensuring a highly successful clinical outcome.",
          ar: "بتجنب الاستلقاء الطويل في السرير، يتفادى المريض ضمور العضلات والتيبس المؤلم الذي كان يعيب جراحات المفاصل سابقًا. يستطيع معظم مرضى التعافي السريع صعود الدرج، الجلوس والنهوض براحة، والمغادرة إلى منازلهم في غضون يوم أو يومين فقط من العملية بشكل مستقل وآمن. وتتسارع عودتهم للحياة اليومية وقيادة السيارة وممارسة الأنشطة الترفيهية الخفيفة كالمشي والسباحة وركوب الدراجة خلال أسابيع معدودة.",
          fr: "En évitant l'alitement, les patients contournent l'amyotrophie et l'enraidissement articulaire. La majorité des patients opérés selon ce protocole montent les escaliers et rentrent chez eux dès le 1er ou le 2ème jour post-opératoire en toute sécurité. Le retour aux activités de la vie quotidienne, à la conduite automobile et aux loisirs (vélo, natation) est grandement accéléré, s'évaluant en semaines plutôt qu'en mois."
        }
      }
    ]
  }
];

