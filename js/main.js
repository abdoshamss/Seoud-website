/* ==========================================================================
   ALUMINIUM PRO — Shomoul Construction Contracting Co.
   Comprehensive Web Platform Logic & API Synchronization
   ========================================================================== */

const PHONE = '966593653396';
const API_BASE = 'https://aluminumpro.net/api/v1/';

/* ==========================================================================
   i18n (Bilingual Arabic / English Dictionary)
   ========================================================================== */
const I18N = {
  ar: {
    tagline: 'ألمنيوم باحترافية… من القياس حتى التركيب',
    company: 'شمول التشييد للمقاولات',
    nav_home: 'الرئيسية',
    nav_showcase: 'السلايدر',
    nav_about: 'من نحن',
    nav_services: 'خدماتنا',
    nav_maint: 'الصيانة',
    nav_works: 'أعمالنا',
    nav_about_app: 'عن التطبيق والضمانات',
    nav_coverage: 'مناطق الخدمة',
    nav_contact: 'تواصل معنا',
    call_now: 'اتصل الآن',
    hero_kicker: 'حلول ألمنيوم متكاملة في الرياض',
    cr: 'سجل تجاري',
    hero_t1: 'ألمنيوم باحترافية',
    hero_t2: 'من القياس حتى التركيب',
    hero_sub: 'سواء كنت تبني بيت جديد أو تطور مساحتك الحالية، نوفر لك حلول ألمنيوم وزجاج متكاملة — شبابيك وأبواب، واجهات وكلادينج، وحديد ومشغولات — بأعلى معايير الجودة والدقة.',
    cta_inspect: 'اطلب معاينة مجانية',
    cta_whatsapp: 'واتساب',
    cta_works: 'شاهد أعمالنا',
    m_districts: 'حي مخدوم في الرياض',
    m_services: 'خدمات تصنيع وتركيب',
    m_support: 'خدمة عملاء',
    ov_tag: 'تنفيذ احترافي',
    ov_title: 'تنفيذ احترافي يليق بتوقعاتك',
    ov_sub: 'نتيجة تعكس ذوقك وتفوق توقعاتك',
    f1_t: 'معاينة مجانية',
    f1_s: 'فني يرفع المقاسات لديك',
    f2_t: 'ضمان الجودة',
    f2_s: 'خامات ومعايير عالمية',

    slider_kicker: 'معرض المشاريع والابتكارات',
    slider_title_a: 'جولة في عالم',
    slider_title_b: 'الألمنيوم والواجهات',
    slider_desc: 'تصفح أحدث مشاريعنا وواجهاتنا المنفذة وفق أرقى المعايير العالمية والأنظمة الذكية',

    about_kicker: 'عن الشركة',
    about_title_a: 'نبني الثقة',
    about_title_b: 'بالألمنيوم والزجاج',
    about_desc: 'فريق متخصص في تصنيع وتركيب الألمنيوم والواجهات الزجاجية، يرافقك من أول قياس حتى آخر لمسة.',
    who_title: 'من نحن',
    who_desc: 'ألمنيوم برو (ALUMINUM PRO) تابع لشركة شمول التشييد للمقاولات في المملكة العربية السعودية، ونقدم حلول ألمنيوم وزجاج متكاملة للمباني السكنية والتجارية.',
    vision_title: 'رؤيتنا',
    vision_desc: 'أن نكون الخيار الأول لعملائنا في تقديم منتجات الألمنيوم والزجاج بأعلى معايير الجودة والابتكار.',
    vision_quote: 'نسعى لتحقيق التميز في كل مشروع نقوم به',
    cs_title: 'خدمة العملاء',
    cs_desc: 'فريقنا جاهز لخدمتك على مدار الساعة للإجابة على استفساراتك ومساعدتك في اختيار الحل الأمثل.',
    cs_action: 'تواصل معنا الآن',
    v_quality: 'الجودة', v_quality_d: 'خامات معتمدة وتشطيب دقيق',
    v_speed: 'السرعة', v_speed_d: 'التزام بالمواعيد من الطلب للتركيب',
    v_trust: 'الثقة', v_trust_d: 'وضوح في السعر والتفاصيل',
    v_innov: 'الابتكار', v_innov_d: 'تصاميم وتقنيات عالمية حديثة',

    srv_kicker: 'خدماتنا',
    srv_title_a: 'حلول تليق',
    srv_title_b: 'بمشروعك',
    srv_desc: 'من الشبابيك والأبواب إلى الواجهات الكاملة — اختر الخدمة وخلي فريقنا يتابع معك خطوة بخطوة.',
    order_now: 'إطلب الآن',

    steps_kicker: 'كيف نعمل',
    steps_title_a: 'ثلاث خطوات',
    steps_title_b: 'وبس',
    s1_t: 'تحتاج حلول ألمنيوم؟',
    s1_d: 'سواء كنت تبني بيت جديد أو تطور مساحتك الحالية نوفر لك حلول ألمنيوم متكاملة تناسب احتياجك بكل سهولة.',
    s2_t: 'اطلب خدمتك بخطوات بسيطة',
    s2_d: 'اختر الخدمة المناسبة، ارفع صور المكان وحدد التفاصيل وخلي فريقنا يتابع معك خطوة بخطوة بكل وضوح.',
    s3_t: 'تنفيذ احترافي يليق بتوقعاتك',
    s3_d: 'نحرص على تنفيذ كل مشروع بأعلى معايير الجودة والدقة لتستلم نتيجة تعكس ذوقك وتفوق توقعاتك.',

    mt_kicker: 'خدمات الصيانة',
    mt_title_a: 'صيانة سريعة',
    mt_title_b: 'بأيدي محترفين',
    mt_desc: 'أعطال الشبابيك والأبواب والواجهات؟ فنيّنا يوصلك ويصلحها بقطع غيار أصلية وضمان معتمد.',
    mt_default: 'فحص وإصلاح الأعطال واستبدال القطع التالفة للحفاظ على الأمان وكفاءة التشغيل.',

    gl_kicker: 'معرض أعمالنا',
    gl_title_a: 'لقطات حقيقية',
    gl_title_b: 'من مشاريعنا',
    gl_desc: 'نماذج من مشاريع نفذناها لعملائنا تعكس دقة التشطيب وفخامة الألمنيوم والزجاج',
    gl_all: 'الكل',
    gl_photos: 'الصور',
    gl_videos: 'الفيديوهات',
    gl_video: 'فيديو',
    gl_photo: 'صورة',

    app_faq_kicker: 'عن التطبيق والضمانات',
    app_faq_t1: 'شفافية، ضمان،',
    app_faq_t2: 'وجودة معتمدة',
    app_faq_sub: 'تعرف على تطبيق ALUMINIUM PRO ومؤسسة شمول التشييد، والضمانات الشاملة الممنوحة لمشروعك.',
    about_app_label: 'عن تطبيق ALUMINIUM PRO وشمول التشييد',

    cv_kicker: 'مناطق الخدمة',
    cv_title: 'الخدمة متاحة حالياً في شمال وشرق الرياض',
    cv_desc: 'ابحث عن حيّك وتأكد إن الخدمة متاحة عندك.',
    cv_search: 'ابحث عن الحي...',
    cv_count: 'حي مخدوم',
    cv_city: 'الرياض، المملكة العربية السعودية',
    cv_pick: 'اختر حيّك من القائمة',
    cv_ok: '✓ الخدمة متاحة في حي {}',
    cv_none: 'لا يوجد نتائج — تواصل معنا وسنساعدك',

    ct_kicker: 'تواصل معنا',
    ct_title_a: 'ابدأ طلبك',
    ct_title_b: 'الآن',
    ct_desc: 'اطلب معاينة مجانية لمنزلك أو مكتبك لتحديد أفضل الحلول لاحتياجاتك.',
    ct_call: 'اتصال مباشر',
    ct_wa: 'واتساب',
    ct_wa_s: 'رد سريع على استفساراتك',
    ct_loc: 'موقعنا',
    form_title: 'طلب معاينة مجانية',
    form_name: 'الاسم',
    form_name_ph: 'أدخل الاسم',
    form_phone: 'رقم الجوال',
    form_service: 'الخدمة',
    form_district: 'الحي',
    form_details: 'تفاصيل الطلب',
    form_details_ph: 'اكتب المقاسات أو وصف المطلوب...',
    form_submit: 'إرسال الطلب عبر واتساب',
    form_err: 'من فضلك أدخل الاسم ورقم الجوال بشكل صحيح',
    form_other: 'أخرى',
    wa_hello: 'مرحباً Aluminium Pro، أرغب في طلب معاينة مجانية',

    app_kicker: 'حمّل التطبيق',
    app_title: 'اطلب خدمتك وتابع طلبك من جوالك',
    app_desc: 'حدد موقعك، ارفع صور المكان، اختر الموعد المناسب، وتابع حالة طلبك لحظة بلحظة.',
    footer_about: 'تصنيع وتركيب الألمنيوم والزجاج والواجهات بأعلى معايير الجودة في الرياض.',
    footer_links: 'روابط سريعة',
    rights: 'جميع الحقوق محفوظة',
  },
  en: {
    tagline: 'Aluminium, done right — from measure to install',
    company: 'Shomoul Construction Contracting',
    nav_home: 'Home',
    nav_showcase: 'Slider',
    nav_about: 'About',
    nav_services: 'Services',
    nav_maint: 'Maintenance',
    nav_works: 'Our Work',
    nav_about_app: 'About App & Guarantees',
    nav_coverage: 'Service Areas',
    nav_contact: 'Contact',
    call_now: 'Call Now',
    hero_kicker: 'Integrated aluminium solutions in Riyadh',
    cr: 'C.R.',
    hero_t1: 'Aluminium, done right',
    hero_t2: 'from measure to install',
    hero_sub: "Whether you're building a new home or upgrading your space, we deliver complete aluminium & glass solutions — windows & doors, facades & cladding, iron & metal works — to the highest standards of quality and precision.",
    cta_inspect: 'Request a free inspection',
    cta_whatsapp: 'WhatsApp',
    cta_works: 'See our work',
    m_districts: 'Neighborhoods served',
    m_services: 'Manufacturing & install services',
    m_support: 'Customer service',
    ov_tag: 'Pro execution',
    ov_title: 'Professional work for your expectations',
    ov_sub: 'Results that reflect your taste',
    f1_t: 'Free inspection',
    f1_s: 'A technician takes measurements',
    f2_t: 'Quality guaranteed',
    f2_s: 'Global materials & standards',

    slider_kicker: 'Projects & Innovations Showcase',
    slider_title_a: 'Explore the World of',
    slider_title_b: 'Aluminium & Facades',
    slider_desc: 'Browse our latest projects and architectural facades built to world-class standards and smart systems.',

    about_kicker: 'About Company',
    about_title_a: 'Building trust',
    about_title_b: 'with aluminium & glass',
    about_desc: 'A specialised team for aluminium and glass facades — with you from the first measure to the final touch.',
    who_title: 'Who we are',
    who_desc: 'ALUMINUM PRO is affiliated with Shomoul Construction Contracting Company in the Kingdom of Saudi Arabia, providing complete aluminium & glass solutions for residential and commercial buildings.',
    vision_title: 'Our Vision',
    vision_desc: 'To be the first choice for our customers in providing aluminum and glass products with the highest standards of quality and innovation.',
    vision_quote: 'We strive for excellence in every project we undertake',
    cs_title: 'Customer Service',
    cs_desc: 'Our team is ready to serve you around the clock to answer your inquiries and help you choose the best solution.',
    cs_action: 'Contact Us Now',
    v_quality: 'Quality', v_quality_d: 'Certified materials, precise finish',
    v_speed: 'Speed', v_speed_d: 'On time from order to install',
    v_trust: 'Trust', v_trust_d: 'Clear pricing & details',
    v_innov: 'Innovation', v_innov_d: 'Modern global designs & tech',

    srv_kicker: 'Our Services',
    srv_title_a: 'Solutions worthy',
    srv_title_b: 'of your project',
    srv_desc: 'From windows and doors to full facades — pick a service and our team follows up step by step.',
    order_now: 'Order Now',

    steps_kicker: 'How it works',
    steps_title_a: 'Three simple',
    steps_title_b: 'steps',
    s1_t: 'Need aluminium solutions?',
    s1_d: "Whether you're building a new home or developing your current space, we provide integrated aluminum solutions that fit your needs with ease.",
    s2_t: 'Order in simple steps',
    s2_d: 'Choose the right service, upload photos of the place and specify details, and let our team follow up with you step by step.',
    s3_t: 'Professional implementation',
    s3_d: 'Every project is implemented to the highest standards of quality and accuracy to deliver a result that exceeds your expectations.',

    mt_kicker: 'Maintenance',
    mt_title_a: 'Fast maintenance',
    mt_title_b: 'by professionals',
    mt_desc: 'Window, door or facade issues? Our technician comes to you and fixes it with original parts.',
    mt_default: 'Inspection, repair and replacement of damaged parts to keep things safe and running smoothly.',

    gl_kicker: 'Our Work Gallery',
    gl_title_a: 'Real shots',
    gl_title_b: 'from our projects',
    gl_desc: "Samples from projects we've done",
    gl_all: 'All',
    gl_photos: 'Photos',
    gl_videos: 'Videos',
    gl_video: 'Video',
    gl_photo: 'Photo',

    app_faq_kicker: 'About App & Guarantees',
    app_faq_t1: 'Transparency, Warranty,',
    app_faq_t2: '& Certified Quality',
    app_faq_sub: 'Learn about ALUMINIUM PRO and Shomoul Construction Contracting, and the comprehensive warranties provided for your project.',
    about_app_label: 'About ALUMINIUM PRO App & Shomoul Construction',

    cv_kicker: 'Service Areas',
    cv_title: 'Now serving north & east Riyadh',
    cv_desc: 'Search for your neighborhood to check availability.',
    cv_search: 'Search neighborhood...',
    cv_count: 'neighborhoods',
    cv_city: 'Riyadh, Saudi Arabia',
    cv_pick: 'Pick your neighborhood',
    cv_ok: '✓ Service is available in {}',
    cv_none: 'No results — contact us and we will help',

    ct_kicker: 'Contact Us',
    ct_title_a: 'Start your order',
    ct_title_b: 'now',
    ct_desc: 'Request a free inspection for your home or office to identify the best solutions for your needs.',
    ct_call: 'Direct call',
    ct_wa: 'WhatsApp',
    ct_wa_s: 'Quick replies to your questions',
    ct_loc: 'Location',
    form_title: 'Free inspection request',
    form_name: 'Name',
    form_name_ph: 'Enter your name',
    form_phone: 'Mobile number',
    form_service: 'Service',
    form_district: 'Neighborhood',
    form_details: 'Order details',
    form_details_ph: 'Write measurements or describe what you need...',
    form_submit: 'Send request via WhatsApp',
    form_err: 'Please enter your name and mobile number',
    form_other: 'Other',
    wa_hello: 'Hello Aluminium Pro, I would like to request a free inspection',

    app_kicker: 'Get the app',
    app_title: 'Order and track from your phone',
    app_desc: 'Set your location, upload photos, pick a time that suits you, and track your order live.',
    footer_about: 'Manufacturing and installation of aluminium, glass and facades to the highest standards in Riyadh.',
    footer_links: 'Quick links',
    rights: 'All rights reserved',
  },
};

/* ==========================================================================
   Solutions Data (from Flutter app home_screen.dart bannerData)
   ========================================================================== */
const SOLUTIONS = [
  { img: 'home_banner1.png', ar: ['شبابيك وأبواب ألمنيوم دبل جلاس', 'سحاب - مفصلي - قلاب - فولدنج'], en: ['Aluminum Windows & Doors — Double Glass', 'Sliding - Hinged - Tilt - Folding'], icon: 'fa-border-all', tags: { ar: ['سحاب', 'مفصلي', 'قلاب', 'فولدنج'], en: ['Sliding', 'Hinged', 'Tilt', 'Folding'] } },
  { img: 'home_banner2.png', ar: ['واجهات وتكسيات', 'استركشر - كلادينج - كارتن وول - زجاج سيكوريت'], en: ['Facades & Cladding', 'Structural - Cladding - Curtain Wall - Securit Glass'], icon: 'fa-building', tags: { ar: ['استركشر', 'كلادينج', 'كارتن وول'], en: ['Structural', 'Cladding', 'Curtain Wall'] } },
  { img: 'home_banner3.png', ar: ['حديد ومشغولات', 'أبواب ليزر - أبواب مدخل فيلا - درابزين - مظلات'], en: ['Iron & Metal Works', 'Laser Doors - Villa Entrances - Handrails - Canopies'], icon: 'fa-hammer', tags: { ar: ['أبواب ليزر', 'درابزين', 'مظلات'], en: ['Laser doors', 'Handrails', 'Canopies'] } },
  { img: 'home_banner4.png', ar: ['واجهات تعكس الفخامة', 'احترافية للمباني السكنية والتجارية'], en: ['Facades Reflecting Luxury', 'For residential and commercial buildings'], icon: 'fa-city', tags: { ar: ['سكني', 'تجاري'], en: ['Residential', 'Commercial'] } },
  { img: 'home_banner5.png', ar: ['شبابيك بتصاميم مختلفة', 'متوفرة بألوان وأشكال متنوعة'], en: ['Windows in Various Designs', 'Available in diverse colors and shapes'], icon: 'fa-window-maximize', tags: { ar: ['ألوان متعددة', 'تصاميم حديثة'], en: ['Many colors', 'Modern designs'] } },
  { img: 'home_banner6.png', ar: ['أبواب متينة راقية', 'أمان وأناقة في نفس الوقت'], en: ['High-end Durable Doors', 'Security and elegance at the same time'], icon: 'fa-door-closed', tags: { ar: ['أمان', 'أناقة'], en: ['Security', 'Elegance'] } },
];

/* ==========================================================================
   Core 8 Services (from Flutter app about_company_screen.dart)
   ========================================================================== */
const CORE_SERVICES = {
  ar: [
    'تصنيع وتركيب الألمنيوم بجميع أنواعه',
    'تصميم وتنفيذ الواجهات الزجاجية استراكشر الكرتن وول',
    'أبواب ونوافذ ذكية بتقنيات عالمية',
    'توريد وتركيب شترات الألمنيوم والفوم لتوفير الحماية وعزل الصوت بالخارج',
    'توريد وتركيب أبواب الألمنيوم والأبواب الزجاجية',
    'تصنيع وتركيب مداخل المنشآت التجارية',
    'توريد وتركيب كلادينج للواجهات والمباني',
    'تصنيع وتركيب الدرابزين الحديد والإستيل والزجاج'
  ],
  en: [
    'Manufacturing and installation of all types of aluminum',
    'Design and execution of glass facades, structural glazing, and curtain walls',
    'Smart doors and windows with global technologies',
    'Supply and installation of aluminum & foam shutters for exterior protection & sound insulation',
    'Supply and installation of aluminum and glass doors',
    'Manufacturing and installation of commercial facility entrances',
    'Supply and installation of cladding for facades and buildings',
    'Manufacturing and installation of iron, stainless steel, and glass handrails'
  ],
};

/* ==========================================================================
   Sliders Data (Local Fallback + Upgraded from API GET /home -> data.sliders)
   ========================================================================== */
let sliderItems = [
  {
    image: 'assets/images/slider1.png',
    kicker: { ar: 'تصنيع محلي بمعايير عالمية', en: 'Local Manufacturing Excellence' },
    title: { ar: 'أحدث قطاعات الألمنيوم المزدوجة العازلة', en: 'State-of-the-Art Insulated Aluminum Profiles' },
    desc: { ar: 'عزل فائق للحرارة والأتربة والصوت مصمم خصيصاً لمناخ المملكة العربية السعودية.', en: 'Superior thermal, dust, and acoustic insulation tailored for the Saudi climate.' },
    cta: { ar: 'اطلب فني رفع مقاسات', en: 'Book Measurements' }
  },
  {
    image: 'assets/images/slider2.png',
    kicker: { ar: 'أبواب ذكية ومداخل فخمة', en: 'Smart Entrances & Luxury Doors' },
    title: { ar: 'مداخل فلل ومنشآت تجارية بتصاميم ليزر راقية', en: 'Villa Entrances & Commercial Facades with Laser Precision' },
    desc: { ar: 'تشكيلة متكاملة من الأبواب المقاومة للعوامل الجوية مع أحدث أنظمة الأقفال الذكية.', en: 'Weather-resistant doors with cutting-edge smart security and automated locking.' },
    cta: { ar: 'تصفح التصاميم', en: 'Explore Designs' }
  },
  {
    image: 'assets/images/slider3.png',
    kicker: { ar: 'واجهات استركشر وكارتن وول', en: 'Structural Glazing & Curtain Wall' },
    title: { ar: 'تصميم وتنفيذ واجهات زجاجية تعكس الفخامة', en: 'Architectural Glass Facades Reflecting Prestige' },
    desc: { ar: 'زجاج سيكوريت عالي السماكة وإطارات ألمنيوم هيكلية متينة للأبراج والمباني السكنية.', en: 'High-thickness tempered securit glass and structural aluminum frameworks.' },
    cta: { ar: 'اطلب معاينة مجانية', en: 'Request Free Inspection' }
  },
  {
    image: 'assets/images/slider4.png',
    kicker: { ar: 'شترات حماية وأنظمة تحكم ذكية', en: 'Rolling Shutters & Smart Automation' },
    title: { ar: 'شترات ألمنيوم وفوم بأعلى درجات الأمان والخصوصية', en: 'Foam & Aluminum Shutters for Maximum Privacy' },
    desc: { ar: 'تحكم كهربائي سلس وريموت كنترول لعزل الصوت والضوء وتوفير استهلاك الطاقة.', en: 'Smooth motorized control with remote operation for noise dampening & energy savings.' },
    cta: { ar: 'تواصل معنا الآن', en: 'Contact Us Now' }
  }
];

/* ==========================================================================
   Maintenance Packages (Fallback + API GET /home -> data.maintenances)
   ========================================================================== */
const MAINT_ICONS = ['fa-droplet', 'fa-up-down-left-right', 'fa-ruler-horizontal', 'fa-circle-notch', 'fa-lock', 'fa-square', 'fa-gears', 'fa-table-cells'];

const MAINT_FALLBACK = [
  { name: 'معالجة تسريب الماء والغبار', en: 'Water & dust leak treatment', final_price: 80, icon: 'fa-droplet' },
  { name: 'صعوبة حركة شباك', en: 'Stiff window movement', final_price: 70, icon: 'fa-up-down-left-right' },
  { name: 'ميزانية الدرف', en: 'Sash alignment', final_price: 1400, icon: 'fa-ruler-horizontal' },
  { name: 'تغيير كفرات', en: 'Roller replacement', final_price: 1500, icon: 'fa-circle-notch', image: 'assets/images/gallery/maint_curtain_wall.jpg', content: 'خدمة صيانة واجهات الكارتن وول تشمل فحص الزجاج والإطارات ومعالجة أي تسريب أو تلف.' },
  { name: 'تغيير قفل', en: 'Lock replacement', final_price: 110, icon: 'fa-lock', content: 'خدمة صيانة واجهات الاستركشر تشمل فحص وإصلاح الزجاج والهياكل لضمان الأمان.' },
  { name: 'تغيير زجاج', en: 'Glass replacement', final_price: 180, icon: 'fa-square', image: 'assets/images/slider3.png', content: 'صيانة أبواب الألمنيوم والزجاج تشمل إصلاح الأعطال وضبط المفصلات والأقفال.' },
  { name: 'تغيير مفصلات', en: 'Hinge replacement', final_price: 9, icon: 'fa-gears', content: 'صيانة نوافذ الشتر تشمل إصلاح الأعطال وضبط حركة الفتح والغلق لضمان سلاستها.' },
  { name: 'تغيير الشبك', en: 'Mesh replacement', final_price: 12, icon: 'fa-table-cells', image: 'assets/images/gallery/maint_mesh.jpg', content: 'صيانة شباك السحاب تشمل إصلاح الأعطال وتغيير الإكسسوارات التالفة ليعمل بسلاسة.' }
];

/* ==========================================================================
   Gallery Items (Fallback + API GET /gallery)
   ========================================================================== */
const GALLERY_FALLBACK = [
  { type: 'image', url: 'assets/images/gallery/maint_curtain_wall.jpg', ar: 'واجهات كارتن وول ومباني زجاجية', en: 'Curtain wall facade & glass buildings' },
  { type: 'image', url: 'assets/images/slider3.png', ar: 'واجهات استركشر وأبراج', en: 'Structural glazing & towers' },
  { type: 'image', url: 'assets/images/gallery/maint_mesh.jpg', ar: 'أبواب ألمنيوم سحاب وشترات فوم', en: 'Sliding aluminum doors & foam shutters' },
  { type: 'image', url: 'assets/images/slider2.png', ar: 'أبواب مداخل فلل ليزر حديثة', en: 'Modern laser villa entrances' },
  { type: 'image', url: 'assets/images/slider1.png', ar: 'مراحل التصنيع في المصنع', en: 'Manufacturing process at the factory' },
  { type: 'image', url: 'assets/images/slider4.png', ar: 'مشاريع سكنية وتجارية راقية', en: 'High-end residential & commercial projects' },
  { type: 'video', url: 'https://aluminumpro.net/storage/83/01M5QC42WC5PN5V3EEHQWCKNW7.mov', ar: 'فيديو توثيقي من الموقع أثناء التركيب', en: 'On-site video during installation' },
];

/* ==========================================================================
   Riyadh 49 Districts (From Flutter App riyadh_service_area_data.dart)
   ========================================================================== */
const DISTRICTS = [
  ['الملقا', 'Al Malqa'], ['حطين', 'Hittin'], ['العقيق', 'Al Aqiq'], ['الصحافة', 'Al Sahafah'], ['الياسمين', 'Al Yasmin'],
  ['النرجس', 'Al Narjis'], ['العارض', 'Al Arid'], ['القيروان', 'Al Qirawan'], ['الربيع', 'Al Rabi'], ['الغدير', 'Al Ghadir'],
  ['النفل', 'Al Nafal'], ['الندى', 'Al Nada'], ['الوادي', 'Al Wadi'], ['الفلاح', 'Al Falah'], ['بنبان', 'Banban'],
  ['الخير', 'Al Khair'], ['النخيل', 'Al Nakheel'], ['الرحمانية', 'Al Rahmaniyah'], ['المعذر الشمالي', 'North Al Mathar'],
  ['الخزامى', 'Al Khuzama'], ['الرائد', 'Al Raed'], ['الملك فهد', 'King Fahd'], ['التعاون', 'Al Taawun'], ['المصيف', 'Al Masif'],
  ['المروج', 'Al Muruj'], ['الورود', 'Al Wurud'], ['المحمدية', 'Al Muhammadiyah'], ['الواحة', 'Al Wahah'], ['المغرزات', 'Al Mughrizat'],
  ['الملك عبدالعزيز', 'King Abdulaziz'], ['الملك عبدالله', 'King Abdullah'], ['الإزدهار', 'Al Izdihar'], ['المرسلات', 'Al Mursalat'],
  ['صلاح الدين', 'Salahuddin'], ['المونسية', 'Al Munisiyah'], ['قرطبة', 'Qurtubah'], ['غرناطة', 'Ghirnatah'], ['القادسية', 'Al Qadisiyah'],
  ['اليرموك', 'Al Yarmuk'], ['اشبيلية', 'Ishbiliyah'], ['الحمراء', 'Al Hamra'], ['النهضة', 'Al Nahdah'], ['الخليج', 'Al Khaleej'],
  ['القدس', 'Al Quds'], ['النسيم الشرقي', 'East Naseem'], ['النسيم الغربي', 'West Naseem'], ['الروابي', 'Al Rawabi'],
  ['الربوة', 'Ar Rabwah'], ['السعادة', 'Al Saadah'],
];

/* ==========================================================================
   FAQ & Company Guarantees (From API settings/about-app-conditions)
   ========================================================================== */
let faqItems = [
  {
    q: { ar: 'ما هي شركة شمول التشييد وتطبيق ALUMINIUM PRO؟', en: 'What is Shomoul Construction & ALUMINIUM PRO?' },
    a: {
      ar: 'شركة شمول التشييد هي صرح وطني متخصص في قطاع المقاولات العامة وأعمال الألمنيوم والواجهات بالمملكة العربية السعودية (سجل تجاري 7052589707). نجمع بين الخبرة الهندسية والكوادر الفنية المؤهلة لنقدم لعملائنا حلولاً متكاملة بأعلى معايير الجودة العالمية.',
      en: 'Shomoul Construction is a leading Saudi national entity specializing in general contracting and aluminum/facade works (C.R. 7052589707), pairing engineering expertise with certified craftsmen.'
    }
  },
  {
    q: { ar: 'لماذا تختار شركة شمول التشييد لمشروعك؟', en: 'Why choose Shomoul Construction for your project?' },
    a: {
      ar: 'لأننا نؤمن بالشمولية في التنفيذ؛ نوفر عليك عناء البحث عن مقاولين متعددين. نلتزم بأعلى معايير الجودة (ISO)، ونستخدم مواد خام معتمدة، مع تقديم جداول زمنية دقيقة للتنفيذ وأسعار تنافسية تضمن لك أفضل قيمة مقابل الاستثمار.',
      en: 'We provide end-to-end execution so you do not need multiple subcontractors. We adhere to ISO quality standards, certified materials, exact timetables, and competitive pricing.'
    }
  },
  {
    q: { ar: 'كيف تضمن شركة شمول التشييد جودة التنفيذ؟', en: 'How do we guarantee execution quality?' },
    a: {
      ar: 'تخضع جميع مشاريعنا لرقابة صارمة من مهندسين مختصين في الموقع، مع نظام تقييم داخلي للأداء الفني، ولا نقبل بتسليم أي مرحلة إلا بعد مطابقتها للمواصفات الهندسية المعتمدة.',
      en: 'All projects undergo strict supervision by on-site specialized engineers with internal technical evaluation benchmarks before stage handover.'
    }
  },
  {
    q: { ar: 'هل توجد ضمانات شاملة على أعمال الألمنيوم والمقاولات؟', en: 'Are there comprehensive warranties on works?' },
    a: {
      ar: 'بكل تأكيد! تقدم شركة شمول التشييد ضمانات شاملة ومعتمدة على جودة التصنيع والتركيب ومقاومة العزل والتسريب، لضمان راحة بالك واستدامة استثمارك لسنوات طويلة.',
      en: 'Absolutely. Shomoul Construction provides certified comprehensive warranties on manufacturing, installation, thermal insulation, and leak prevention.'
    }
  },
  {
    q: { ar: 'كيف يمكنني متابعة سير العمل وطلب المعاينة في الرياض؟', en: 'How can I track project progress and request inspection?' },
    a: {
      ar: 'نخصص لكل مشروع مشرفاً مسؤولاً يكون هو نقطة التواصل المباشرة مع العميل، مع إمكانية طلب فني لرفع المقاسات ومعاينة الموقع مجاناً في أحياء شمال وشرق الرياض عبر التطبيق أو الموقع.',
      en: 'Every project is assigned a dedicated supervisor, and you can request a free on-site measurement inspection across north and east Riyadh directly through the app or website.'
    }
  }
];

/* ==========================================================================
   Application State
   ========================================================================== */
let lang = localStorage.getItem('ap_lang') || 'ar';
let theme = localStorage.getItem('ap_theme') || 'dark';
let maintItems = MAINT_FALLBACK.map((m) => ({ ...m }));
let galleryItems = GALLERY_FALLBACK.slice();
let galleryFilter = 'all';
let selectedDistrict = null;
let currentSlideIndex = 0;
let sliderInterval = null;

const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ==========================================================================
   Render Functions
   ========================================================================== */
function applyTranslations() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $('#langToggle').textContent = lang === 'ar' ? 'EN' : 'ع';
}

function renderMarquee() {
  const words = SOLUTIONS.map((s) => s[lang][0]).concat(CORE_SERVICES[lang].slice(0, 4));
  const html = words.map((w) => `<span class="marquee-item"><span class="diamond">◆</span>${w}</span>`).join('');
  $('#marqueeTrack').innerHTML = html + html;
}

function renderCoreServices() {
  $('#servicesList').innerHTML = CORE_SERVICES[lang]
    .map((s, i) => `<li class="reveal is-visible" style="transition-delay:${i * 60}ms"><i class="fa-solid fa-check"></i><span>${s}</span></li>`)
    .join('');
  $('#footerServices').innerHTML = SOLUTIONS.slice(0, 4)
    .map((s) => `<li><a href="#services">${s[lang][0]}</a></li>`).join('');
}

function renderSolutions() {
  $('#servicesGrid').innerHTML = SOLUTIONS.map((s, i) => `
    <article class="service-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="service-thumb">
        <img src="assets/images/${s.img}" alt="${s[lang][0]}" loading="lazy" />
        <span class="service-badge"><i class="fa-solid ${s.icon}"></i> 0${i + 1}</span>
      </div>
      <div class="service-body">
        <h3>${s[lang][0]}</h3>
        <p>${s[lang][1]}</p>
        <div class="service-tags">${s.tags[lang].map((tag) => `<span>${tag}</span>`).join('')}</div>
        <div class="service-footer">
          <button class="service-order-link" data-order="${s[lang][0]}">${t('order_now')} <i class="fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i></button>
          <i class="fa-solid ${s.icon}" style="color: var(--text-muted); font-size: 1.3rem;"></i>
        </div>
      </div>
    </article>`).join('');
  observeReveals();
}

/* ==========================================================================
   Showcase Interactive Slider
   ========================================================================== */
function renderSlider() {
  const track = $('#appSliderTrack');
  const dots = $('#sliderDots');
  if (!track || !dots) return;

  track.innerHTML = sliderItems.map((slide, i) => `
    <div class="app-slide ${i === currentSlideIndex ? 'active' : ''}">
      <img src="${slide.image}" alt="${slide.title[lang]}" loading="lazy" />
      <div class="app-slide-overlay">
        <span class="app-slide-kicker"><i class="fa-solid fa-certificate"></i> ${slide.kicker[lang]}</span>
        <h3 class="app-slide-title">${slide.title[lang]}</h3>
        <p class="app-slide-desc">${slide.desc[lang]}</p>
        <button class="btn btn-primary" data-order="${slide.title[lang]}" style="align-self: flex-start;">
          <i class="fa-solid fa-ruler-combined"></i> ${slide.cta[lang]}
        </button>
      </div>
    </div>`).join('');

  dots.innerHTML = sliderItems.map((_, i) => `
    <button class="slider-dot ${i === currentSlideIndex ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
  `).join('');

  updateSliderPosition();
}

function updateSliderPosition() {
  const track = $('#appSliderTrack');
  if (!track) return;
  const isRtl = lang === 'ar';
  // Translate the slider track
  track.style.transform = isRtl
    ? `translateX(${currentSlideIndex * 100}%)`
    : `translateX(-${currentSlideIndex * 100}%)`;

  $$('.app-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });
  $$('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % sliderItems.length;
  updateSliderPosition();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSliderPosition();
}

function startSliderAutoPlay() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}

function pauseSliderAutoPlay() {
  clearInterval(sliderInterval);
}

/* ==========================================================================
   Maintenance Cards (Fixed Overflow & Elegant Presentation)
   ========================================================================== */
function renderMaintenance() {
  $('#maintGrid').innerHTML = maintItems.map((m, i) => {
    const title = lang === 'ar' ? m.name : (m.en || m.name);
    const desc = lang === 'ar' && m.content
      ? m.content.split('\n')[0].replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').trim()
      : t('mt_default');
    const price = m.final_price || m.price;
    const priceText = price ? `${price} ${lang === 'ar' ? 'ر.س' : 'SAR'}` : (lang === 'ar' ? 'فحص وضمان' : 'Inspect & Warranty');
    const iconClass = m.icon || MAINT_ICONS[i % MAINT_ICONS.length];

    return `
    <div class="maint-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="maint-thumb-box">
        ${m.image
          ? `<img src="${m.image}" alt="${title}" loading="lazy" />`
          : `<div class="maint-thumb-placeholder"><i class="fa-solid ${iconClass}"></i></div>`}
        <span class="maint-badge-float"><i class="fa-solid ${iconClass}"></i> 0${i + 1}</span>
        <span class="maint-price-tag">${priceText}</span>
      </div>
      <div class="maint-body">
        <div>
          <h3 class="maint-title">${title}</h3>
          <p class="maint-desc">${desc}</p>
        </div>
        <div class="maint-bottom">
          <button class="service-order-link" data-order="${title}">${t('order_now')} <i class="fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i></button>
          <i class="fa-solid fa-screwdriver-wrench card-meta-icon"></i>
        </div>
      </div>
    </div>`;
  }).join('');
  observeReveals();
}

/* ==========================================================================
   Works Gallery
   ========================================================================== */
function renderGallery() {
  const list = galleryItems.filter((g) => galleryFilter === 'all' || g.type === galleryFilter);
  $('#galleryGrid').innerHTML = list.map((g, i) => `
    <div class="gallery-item reveal reveal-delay-${(i % 3) + 1}" data-index="${galleryItems.indexOf(g)}">
      ${g.type === 'video'
        ? `<video src="${g.url}#t=0.5" muted playsinline preload="metadata"></video><span class="gallery-play-badge"><i class="fa-solid fa-play"></i></span>`
        : `<img src="${g.url}" alt="${g[lang] || ''}" loading="lazy" />`}
      <div class="gallery-overlay">
        <span class="gallery-tag">${g.type === 'video' ? t('gl_video') : t('gl_photo')}</span>
        <span class="gallery-title">${g[lang] || g.ar || ''}</span>
      </div>
    </div>`).join('');
  observeReveals();
}

/* ==========================================================================
   FAQ & Company Conditions Accordion
   ========================================================================== */
function renderFaq() {
  const container = $('#faqAccordion');
  if (!container) return;

  container.innerHTML = faqItems.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
      <div class="faq-header">
        <div class="faq-question">
          <i class="fa-solid fa-circle-question faq-q-icon"></i>
          <span>${item.q[lang]}</span>
        </div>
        <span class="faq-toggle-icon"><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div class="faq-body">
        <p>${item.a[lang]}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Coverage & Form Options
   ========================================================================== */
function renderDistricts(filter = '') {
  const q = filter.trim().toLowerCase();
  const list = DISTRICTS.filter(([ar, en]) => !q || ar.includes(q) || en.toLowerCase().includes(q));
  const wrap = $('#districtChips');
  if (!wrap) return;
  if (!list.length) {
    wrap.innerHTML = `<span style="color: var(--text-secondary);">${t('cv_none')}</span>`;
    return;
  }
  wrap.innerHTML = list.map(([ar, en]) => `
    <button class="district-chip ${selectedDistrict === ar ? 'active' : ''}" data-ar="${ar}">
      <i class="fa-solid fa-location-dot"></i>${lang === 'ar' ? ar : en}
    </button>`).join('');
}

function updateDistrictStatus() {
  const status = $('#districtStatus');
  if (!status) return;
  if (!selectedDistrict) { status.textContent = t('cv_pick'); return; }
  const d = DISTRICTS.find(([ar]) => ar === selectedDistrict);
  status.textContent = t('cv_ok').replace('{}', lang === 'ar' ? d[0] : d[1]);
}

function renderFormOptions() {
  const service = $('#fService');
  if (!service) return;
  const current = service.value;
  service.innerHTML = SOLUTIONS.map((s) => `<option>${s[lang][0]}</option>`).join('')
    + maintItems.map((m) => `<option>${lang === 'ar' ? m.name : (m.en || m.name)}</option>`).join('')
    + `<option>${t('form_other')}</option>`;
  if (current) service.value = current;

  const district = $('#fDistrict');
  if (!district) return;
  district.innerHTML = DISTRICTS.map(([ar, en]) => `<option value="${ar}">${lang === 'ar' ? ar : en}</option>`).join('')
    + `<option value="other">${t('form_other')}</option>`;
  if (selectedDistrict) district.value = selectedDistrict;
}

function renderAll() {
  applyTranslations();
  renderMarquee();
  renderSlider();
  renderCoreServices();
  renderSolutions();
  renderMaintenance();
  renderGallery();
  renderFaq();
  renderDistricts($('#districtSearch') ? $('#districtSearch').value : '');
  updateDistrictStatus();
  renderFormOptions();
}

/* ==========================================================================
   Live API Synchronization (Home, Gallery, About App & Conditions)
   ========================================================================== */
async function fetchJson(path) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 7000);
  try {
    const res = await fetch(API_BASE + path, {
      headers: { Accept: 'application/json', 'Accept-Language': 'ar' },
      signal: ctrl.signal
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (_) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function loadLiveData() {
  // 1. Fetch Home Data (Sliders & Maintenances)
  const home = await fetchJson('home');
  if (home && home.data) {
    // If sliders exist on API, update slider images
    if (Array.isArray(home.data.sliders) && home.data.sliders.length > 0) {
      home.data.sliders.forEach((s, idx) => {
        if (s.image && sliderItems[idx]) {
          sliderItems[idx].image = s.image;
        } else if (s.image) {
          sliderItems.push({
            image: s.image,
            kicker: { ar: 'مشروع متميز', en: 'Featured Project' },
            title: { ar: s.name || 'أعمال واجهات وألمنيوم متقدمة', en: s.name || 'Advanced Aluminum & Facade Works' },
            desc: { ar: s.content || 'تنفيذ احترافي يضمن الفخامة والاستدامة بأيدي مهندسين مختصين.', en: 'Professional execution ensuring luxury and durability.' },
            cta: { ar: 'اطلب معاينة مجانية', en: 'Request Free Inspection' }
          });
        }
      });
      renderSlider();
    }

    // Maintenances
    if (Array.isArray(home.data.maintenances) && home.data.maintenances.length > 0) {
      maintItems = home.data.maintenances.map((m, i) => {
        const name = (m.name || '').trim();
        const local = MAINT_FALLBACK.find((f) => f.name === name);
        return {
          name,
          content: m.content || '',
          final_price: m.final_price || (local ? local.final_price : null),
          en: local ? local.en : name,
          icon: local ? local.icon : MAINT_ICONS[i % MAINT_ICONS.length],
          image: m.base_image || (local && local.image)
        };
      });
      renderMaintenance();
      renderFormOptions();
    }
  }

  // 2. Fetch Gallery Items
  const gallery = await fetchJson('gallery');
  if (gallery && Array.isArray(gallery.data)) {
    const valid = gallery.data.filter((g) => g.url && !g.url.includes('undefined'));
    if (valid.length > 0) {
      valid.forEach((item) => {
        const isVid = (item.mime_type || '').startsWith('video/') || /\.(mp4|mov|m4v|webm)$/i.test(item.url);
        const known = galleryItems.some((g) => g.url === item.url);
        if (!known) {
          galleryItems.unshift({
            type: isVid ? 'video' : 'image',
            url: item.url,
            ar: item.title || (isVid ? 'فيديو من الموقع' : 'مشروع ألمنيوم حديث'),
            en: item.title || (isVid ? 'On-site video' : 'Modern aluminum project')
          });
        }
      });
      renderGallery();
    }
  }

  // 3. Fetch About App & Conditions (FAQ)
  const aboutData = await fetchJson('settings/about-app-conditions');
  if (aboutData && aboutData.data) {
    if (aboutData.data.about_app && $('#aboutAppText')) {
      $('#aboutAppText').textContent = aboutData.data.about_app;
    }
    if (aboutData.data.terms_conditions) {
      // Parse Q&A pairs from text
      const raw = aboutData.data.terms_conditions;
      const questions = raw.split(/\n\s*\n/).filter((block) => block.trim().length > 0);
      const parsedFaq = [];

      for (let i = 0; i < questions.length - 1; i += 2) {
        const q = questions[i].trim().replace(/^•\s*/, '');
        const a = questions[i + 1].trim();
        if (q.includes('؟') || q.length < 90) {
          parsedFaq.push({
            q: { ar: q, en: q },
            a: { ar: a, en: a }
          });
        }
      }

      if (parsedFaq.length >= 3) {
        faqItems = parsedFaq;
        renderFaq();
      }
    }
  }
}

/* ==========================================================================
   Interactions, Animations & Observers
   ========================================================================== */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  $$('.reveal:not(.is-visible)').forEach((el) => revealObserver.observe(el));
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const start = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.counter').forEach((el) => obs.observe(el));
}

function initHeader() {
  const header = $('#siteHeader');
  const links = $$('.nav-links a');
  const sections = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  const backToTop = $('#backToTop');

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 30);
    if (backToTop) backToTop.classList.toggle('is-visible', y > 600);
    let current = sections[0];
    sections.forEach((s) => {
      if (s.offsetTop - 140 <= y) current = s;
    });
    links.forEach((a) => {
      if (current) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
  $('#menuToggle').addEventListener('click', () => $('#navLinks').classList.toggle('is-open'));
  links.forEach((a) => a.addEventListener('click', () => $('#navLinks').classList.remove('is-open')));
}

function initSpotlightAndTilt() {
  const spot = $('#cursorSpotlight');
  const fine = window.matchMedia('(pointer: fine)').matches;
  if (!fine && spot) { spot.style.display = 'none'; }
  else if (spot) {
    window.addEventListener('mousemove', (e) => {
      spot.style.left = e.clientX + 'px';
      spot.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  const card = $('#tiltCard');
  if (card) {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  }
}

function initLightbox() {
  const box = $('#lightbox');
  const media = $('#lightboxMedia');
  const close = () => { box.classList.remove('is-open'); media.innerHTML = ''; };

  $('#galleryGrid').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const g = galleryItems[+item.dataset.index];
    if (!g) return;
    media.innerHTML = g.type === 'video'
      ? `<video src="${g.url}" controls autoplay playsinline></video>`
      : `<img src="${g.url}" alt="" />`;
    box.classList.add('is-open');
  });
  $('#lightboxClose').addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

function initControls() {
  // Language Toggle
  $('#langToggle').addEventListener('click', () => {
    lang = lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('ap_lang', lang);
    renderAll();
  });

  // Theme Toggle
  const themeIcon = () => {
    $('#themeToggle').innerHTML = `<i class="fa-solid fa-${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
  };
  $('#themeToggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('ap_theme', theme);
    themeIcon();
  });
  themeIcon();

  // Slider Controls
  const prevBtn = $('#sliderPrev');
  const nextBtn = $('#sliderNext');
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startSliderAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startSliderAutoPlay(); });

  const dotsContainer = $('#sliderDots');
  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.slider-dot');
      if (!dot) return;
      currentSlideIndex = +dot.dataset.index;
      updateSliderPosition();
      startSliderAutoPlay();
    });
  }

  const sliderContainer = $('.app-slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', pauseSliderAutoPlay);
    sliderContainer.addEventListener('mouseleave', startSliderAutoPlay);
  }

  // Gallery Filters
  $$('.gallery-filter-bar .tab-btn').forEach((btn) => btn.addEventListener('click', () => {
    $$('.gallery-filter-bar .tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    galleryFilter = btn.dataset.filter;
    renderGallery();
  }));

  // FAQ Accordion Toggle
  const faqAccordion = $('#faqAccordion');
  if (faqAccordion) {
    faqAccordion.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-header');
      if (!header) return;
      const item = header.parentElement;
      const wasOpen = item.classList.contains('is-open');
      $$('.faq-item', faqAccordion).forEach((it) => it.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  }

  // District Search & Chips
  const dSearch = $('#districtSearch');
  if (dSearch) dSearch.addEventListener('input', (e) => renderDistricts(e.target.value));

  const dChips = $('#districtChips');
  if (dChips) {
    dChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.district-chip');
      if (!chip) return;
      selectedDistrict = chip.dataset.ar;
      renderDistricts($('#districtSearch') ? $('#districtSearch').value : '');
      updateDistrictStatus();
      if ($('#fDistrict')) $('#fDistrict').value = selectedDistrict;
    });
  }

  // "Order Now" quick link delegation
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-order]');
    if (!btn) return;
    if ($('#fService')) $('#fService').value = btn.dataset.order;
    $('#contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if ($('#fName')) $('#fName').focus({ preventScroll: true });
    }, 700);
  });

  // Order Form Submit
  const orderForm = $('#orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#fName').value.trim();
      const phone = $('#fPhone').value.trim();
      const err = $('#formError');
      if (!name || phone.replace(/\D/g, '').length < 9) {
        if (err) err.style.display = 'block';
        return;
      }
      if (err) err.style.display = 'none';

      const districtSel = $('#fDistrict');
      const msg = [
        t('wa_hello'),
        `━━━━━━━━━━━━━━━`,
        `${t('form_name')}: ${name}`,
        `${t('form_phone')}: ${phone}`,
        `${t('form_service')}: ${$('#fService').value}`,
        `${t('form_district')}: ${districtSel.options[districtSel.selectedIndex].text}`,
        $('#fDetails').value.trim() ? `${t('form_details')}: ${$('#fDetails').value.trim()}` : '',
        `━━━━━━━━━━━━━━━`,
        `مرسل من موقع ALUMINIUM PRO الإلكتروني`
      ].filter(Boolean).join('\n');

      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });
  }
}

function hideLoader() {
  setTimeout(() => {
    const loader = $('#introLoader');
    if (loader) loader.classList.add('is-hidden');
  }, 1200);
}

/* ==========================================================================
   Initialization
   ========================================================================== */
document.documentElement.dataset.theme = theme;

document.addEventListener('DOMContentLoaded', () => {
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
  renderAll();
  initHeader();
  initSpotlightAndTilt();
  initLightbox();
  initControls();
  initCounters();
  observeReveals();
  startSliderAutoPlay();
  loadLiveData();
});

window.addEventListener('load', hideLoader);
