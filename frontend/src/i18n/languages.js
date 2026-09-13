// NovaVarsha AI — Comprehensive 11-Language Indian Agro-Climatic Dictionary
// Lenovo Hackathon 2026 • Hyperlocal Climate-to-Crop Decision Intelligence
// Zero OSM border cuts • 100% Survey of India Sovereign Territorial Compliance
// Covers: English, Hindi, Punjabi, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, Malayalam, Odia

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
];

export const I18N_DATA = {
  en: {
    // Navigation Tabs
    tab_overview: 'Overview',
    tab_hydromap: '6-Mode Map',
    tab_agriculture: 'Smart Crops & Cultivars',
    tab_scenario: 'What-If Scenario Lab',
    tab_monsoon: 'Monsoon Phase',
    tab_xai: 'Explainable AI (SHAP)',
    tab_satellite: 'Satellite (NDVI)',
    tab_knowledge_graph: 'Knowledge Graph',
    tab_analytics: 'Analytics Lab',
    tab_alerts: 'Alerts & Early Warning',
    tab_planner: 'Action Planner',
    tab_system: 'Trust & Telemetry',

    // Header & Meta
    hackathon_badge: 'Lenovo Hackathon 2026',
    soi_badge: 'Survey of India Compliant',
    quick_search: 'Quick Search...',
    live_mode: 'Live',
    cached_mode: 'Cached',
    demo_mode: 'Demo',
    decision_brief: 'Decision Brief',
    profile: 'Profile',
    login_btn: 'Sign In / Switch Role',
    logged_in_as: 'Logged in as',
    logout_btn: 'Sign Out',

    // Telemetry & Cards
    surface_temp: 'Surface Temperature',
    temp_sub: 'Optimal vegetative range: 24°C–32°C',
    rainfall_metric: 'Rainfall (Today / 7-Day)',
    humidity_soil: 'Relative Humidity & Soil',
    soil_sub: 'Root-zone: Adequate field capacity',
    composite_risk: 'Composite Agricultural Risk',
    risk_sub: 'Rating: Low-to-Moderate',
    active_advisory: 'Active Agro Advisory',
    run_scenario: 'Run What-If Scenario',
    export_report: 'Export Report',
    synoptic_outlook: '7-Day Hyperlocal Synoptic Outlook',
    primary_cultivar: 'Primary Cultivar Recommendation',
    suitability_score: 'Suitability Score',
    explore_all: 'Explore All Cultivars & "Why Not?" Diagnostics',
    ask_ai: 'Ask AI Assistant',
    today: 'Today',
    tomorrow: 'Tomorrow',
    agro_hubs_label: 'Agro Hubs:',

    // Cultivars & Why Not
    multi_factor_eval: 'ICAR / SAU Multi-Factor Evaluation',
    smart_crops_title: 'Smart Crop & Verified Cultivar Recommendations',
    smart_crops_sub: 'Ranked using real-time soil moisture, 7-day cumulative rainfall, and thermal thresholds.',
    compare_cultivars: 'Compare Top Cultivars',
    why_not_title: '"Why Not?" Diagnostics',
    why_not_heading: '"Why Not?" Excluded Crops & Disqualification Diagnostics',
    why_not_sub: 'To prevent severe farmer financial loss, NovaVarsha AI evaluates environmental constraints and explicitly disqualifies mismatched crops:',
    water_req: 'Water Requirement',
    sowing_window: 'Sowing Window',
    multi_factor_weighting: 'Multi-Factor Agronomic Weighting:',
    thermal_fit: 'Thermal Fit',
    rain_timing: 'Rain Timing',
    simulate_lab_btn: 'Simulate in Scenario Lab',

    // Scenario Lab
    scenario_title: 'What-If Agriculture Scenario Lab',
    scenario_sub: 'Simulate weather shocks, monsoon breaks, and management decisions before sowing seeds in the field.',
    reset_baseline: 'Reset Baseline',
    save_scenario: 'Save Scenario',
    scenario_params: 'Scenario Control Parameters',
    rainfall_dev: 'Rainfall Deviation:',
    temp_shift: 'Temperature Shift:',
    sowing_shift: 'Sowing Date Shift:',
    water_source: 'Water Source & Infrastructure:',
    sim_impact: 'Before vs. After Simulation Impact',
    baseline: 'Baseline',
    agronomic_synthesis: 'Agronomic Synthesis:',
    sensitivity_ranking: 'Sensitivity Ranking (Dominant Stress Factor)',
    saved_scenarios: 'Saved Scenario Benchmarks',

    // XAI
    xai_title: 'Explainable AI (XAI) Suite & Feature Attribution',
    xai_sub: 'Inspect exact mathematical contributions behind every climate risk score and cultivar suitability prediction.',
    waterfall_title: 'SHAP Feature Attribution Waterfall',
    scientific_guardrail: 'Scientific Guardrail: Correlation vs. Causation',

    // Login & Profile
    login_title: 'NovaVarsha Identity & Role Portal',
    login_sub: 'Select your operational persona for verified access to agro-climatic intelligence.',
    farmer_role: 'Farmer / Producer',
    officer_role: 'Agriculture Extension Officer',
    admin_role: 'Disaster Admin & Developer',
    kvk_role: 'KVK Agronomic Scientist',
    quick_login_btn: 'Instant 1-Click Access',
    enter_phone: 'Enter Mobile Number / Aadhaar',
    enter_otp: 'Enter 6-Digit OTP / PIN',
    verify_signin: 'Verify & Launch Dashboard'
  },

  hi: {
    tab_overview: 'अवलोकन',
    tab_hydromap: '6-मोड मानचित्र',
    tab_agriculture: 'स्मार्ट फसलें एवं किस्में',
    tab_scenario: 'परिदृश्य प्रयोगशाला (सिमुलेशन)',
    tab_monsoon: 'मानसून चरण',
    tab_xai: 'व्याख्याय योग्य एआई (SHAP)',
    tab_satellite: 'उपग्रह (NDVI वनस्पति)',
    tab_knowledge_graph: 'ज्ञान ग्राफ (संबंध)',
    tab_analytics: 'विश्लेषण लैब',
    tab_alerts: 'चेतावनी एवं पूर्व सूचना',
    tab_planner: 'कृषि कार्य योजनाकार',
    tab_system: 'प्रणाली विश्वसनीयता',

    hackathon_badge: 'लेनोवो हैकाथॉन 2026',
    soi_badge: 'भारतीय सर्वेक्षण विभाग द्वारा प्रमाणित',
    quick_search: 'त्वरित खोज...',
    live_mode: 'लाइव',
    cached_mode: 'कैश्ड',
    demo_mode: 'डेमो',
    decision_brief: 'निर्णय रिपोर्ट',
    profile: 'प्रोफ़ाइल',
    login_btn: 'लॉगिन / भूमिका बदलें',
    logged_in_as: 'लॉग इन उपयोगकर्ता',
    logout_btn: 'लॉग आउट',

    surface_temp: 'सतह का तापमान',
    temp_sub: 'इष्टतम वानस्पतिक सीमा: 24°C–32°C',
    rainfall_metric: 'वर्षा (आज / 7-दिन)',
    humidity_soil: 'सापेक्ष आर्द्रता एवं मृदा नमी',
    soil_sub: 'जड़ क्षेत्र: पर्याप्त नमी उपलब्ध',
    composite_risk: 'समग्र कृषि जोखिम स्कोर',
    risk_sub: 'श्रेणी: न्यून से मध्यम',
    active_advisory: 'सक्रिय कृषि परामर्श',
    run_scenario: 'परिदृश्य सिमुलेशन चलाएं',
    export_report: 'रिपोर्ट निर्यात करें',
    synoptic_outlook: '7-दिवसीय स्थानीय मौसम पूर्वानुमान',
    primary_cultivar: 'प्रमुख अनुशंसित किस्म',
    suitability_score: 'उपयुक्तता स्कोर',
    explore_all: 'सभी किस्में एवं "यह क्यों नहीं?" निदान देखें',
    ask_ai: 'एआई सहायक से पूछें',
    today: 'आज',
    tomorrow: 'कल',
    agro_hubs_label: 'कृषि हब:',

    multi_factor_eval: 'आईसीएआर / कृषि विश्वविद्यालय बहु-कारक मूल्यांकन',
    smart_crops_title: 'स्मार्ट फसल एवं प्रमाणित किस्म सिफारिशें',
    smart_crops_sub: 'वास्तविक समय की मृदा नमी, 7-दिवसीय संचयी वर्षा और तापीय सीमाओं के आधार पर क्रमबद्ध।',
    compare_cultivars: 'किस्मों की तुलना करें',
    why_not_title: '"यह फसल क्यों नहीं?" निदान',
    why_not_heading: 'अस्वीकृत फसलें एवं वैज्ञानिक अयोग्यता कारण',
    why_not_sub: 'किसानों को वित्तीय नुकसान से बचाने के लिए, युवासेतु पर्यावरणीय बाधाओं का मूल्यांकन कर अनुपयुक्त फसलों को स्पष्ट रूप से अलग करती है:',
    water_req: 'जल आवश्यकता',
    sowing_window: 'बुवाई अवधि',
    multi_factor_weighting: 'बहु-घटक कृषि भारण:',
    thermal_fit: 'तापीय अनुकूलता',
    rain_timing: 'वर्षा समयबद्धता',
    simulate_lab_btn: 'परिदृश्य लैब में परखें',

    scenario_title: 'क्या-अगर (What-If) कृषि परिदृश्य प्रयोगशाला',
    scenario_sub: 'खेत में बीज बोने से पहले मौसम के झटकों, सूखे और प्रबंधन विकल्पों का सिमुलेशन करें।',
    reset_baseline: 'सामान्य स्थिति पर रीसेट करें',
    save_scenario: 'परिदृश्य सहेजें',
    scenario_params: 'परिदृश्य नियंत्रण पैरामीटर',
    rainfall_dev: 'वर्षा विचलन:',
    temp_shift: 'तापमान परिवर्तन:',
    sowing_shift: 'बुवाई तिथि बदलाव:',
    water_source: 'जल स्रोत एवं सिंचाई प्रणाली:',
    sim_impact: 'सिमुलेशन से पहले बनाम बाद का प्रभाव',
    baseline: 'मूल स्तर',
    agronomic_synthesis: 'कृषि वैज्ञानिक निष्कर्ष:',
    sensitivity_ranking: 'संवेदनशीलता रैंकिंग (प्रमुख तनाव कारक)',
    saved_scenarios: 'सहेजे गए परिदृश्य बेंचमार्क',

    xai_title: 'व्याख्याय योग्य एआई (XAI) सूट एवं विशेषता योगदान',
    xai_sub: 'प्रत्येक जलवायु जोखिम स्कोर और किस्म उपयुक्तता भविष्यवाणी के पीछे सटीक गणितीय योगदान देखें।',
    waterfall_title: 'SHAP विशेषता योगदान वॉटरफॉल चार्ट',
    scientific_guardrail: 'वैज्ञानिक सुरक्षा: सहसंबंध बनाम कारण प्रभाव',

    login_title: 'युवासेतु पहचान एवं भूमिका पोर्टल',
    login_sub: 'कृषि-जलवायु निर्णय प्रणाली में प्रमाणित प्रवेश के लिए अपनी भूमिका चुनें।',
    farmer_role: 'किसान / उत्पादक',
    officer_role: 'कृषि विस्तार अधिकारी',
    admin_role: 'आपदा प्रशासक एवं डेवलपर',
    kvk_role: 'केवीके कृषि वैज्ञानिक',
    quick_login_btn: 'त्वरित 1-क्लिक प्रवेश',
    enter_phone: 'मोबाइल नंबर / आधार दर्ज करें',
    enter_otp: '6-अंकों का ओटीपी / पिन दर्ज करें',
    verify_signin: 'सत्यापित करें और डैशबोर्ड खोलें'
  },

  mr: {
    tab_overview: 'आढावा (Overview)',
    tab_hydromap: '६-मोड नकाशा',
    tab_agriculture: 'स्मार्ट पिके आणि वाण',
    tab_scenario: 'परिस्थिती लॅब (सिम्युलेशन)',
    tab_monsoon: 'मान्सून टप्पा',
    tab_xai: 'स्पष्टीकरणात्मक AI (SHAP)',
    tab_satellite: 'उपग्रह (NDVI वनस्पती)',
    tab_knowledge_graph: 'नॉलेज आलेख',
    tab_analytics: 'अनालिटिक्स लॅब',
    tab_alerts: 'इशारे आणि पूर्वसूचना',
    tab_planner: 'कृषी कृती योजना',
    tab_system: 'प्रणाली विश्वसनीयता',

    hackathon_badge: 'लेनोव्हो हॅकाथॉन २०२६',
    soi_badge: 'सर्व्हे ऑफ इंडिया प्रमाणित',
    quick_search: 'शोध घ्या...',
    live_mode: 'थेट (Live)',
    cached_mode: 'कॅश्ड',
    demo_mode: 'डेमो',
    decision_brief: 'निर्णय अहवाल',
    profile: 'प्रोफाइल',
    login_btn: 'साइन इन / भूमिका बदला',
    logged_in_as: 'लॉगिन केलेले वापरकर्ता',
    logout_btn: 'लॉग आऊट',

    surface_temp: 'पृष्ठभागाचे तापमान',
    temp_sub: 'अनुकूल तापमान: २४°C–३२°C',
    rainfall_metric: 'पाऊस (आज / ७-दिवस)',
    humidity_soil: 'सापेक्ष आर्द्रता आणि मातीतील ओलावा',
    soil_sub: 'मूळ क्षेत्र: पुरेसा ओलावा उपलब्ध',
    composite_risk: 'एकूण कृषी जोखीम निर्देशांक',
    risk_sub: 'श्रेणी: कमी ते मध्यम',
    active_advisory: 'सक्रिय कृषी सल्ला',
    run_scenario: 'परिस्थिती तपासा',
    export_report: 'अहवाल डाउनलोड करा',
    synoptic_outlook: '७-दिवसीय स्थानिक हवामान अंदाज',
    primary_cultivar: 'प्रमुख शिफारस केलेले वाण',
    suitability_score: 'अनुकूलता गुण',
    explore_all: 'सर्व वाण आणि "हे पीक का नाही?" निदान पहा',
    ask_ai: 'AI सहाय्यकाला विचारा',
    today: 'आज',
    tomorrow: 'उद्या',
    agro_hubs_label: 'कृषी हब:',

    multi_factor_eval: 'ICAR / कृषी विद्यापीठ बहु-घटक मूल्यमापन',
    smart_crops_title: 'स्मार्ट पिके आणि प्रमाणित वाण शिफारसी',
    smart_crops_sub: 'थेट मातीतील ओलावा, ७-दिवसांचा पाऊस आणि तापमान मर्यादेनुसार क्रमवारी.',
    compare_cultivars: 'वाणांची तुलना करा',
    why_not_title: '"हे पीक का नाही?" निदान',
    why_not_heading: 'अपात्र पिके आणि वैज्ञानिक अपात्रता कारणे',
    why_not_sub: 'शेतकऱ्यांचे आर्थिक नुकसान टाळण्यासाठी, युवासेतु प्रतिकूल परिस्थितीचे विश्लेषण करून अयोग्य पिके स्पष्टपणे वगळते:',
    water_req: 'पाण्याची आवश्यकता',
    sowing_window: 'पेरणीची वेळ',
    multi_factor_weighting: 'कृषी घटक वजन:',
    thermal_fit: 'तापमान अनुकूलता',
    rain_timing: 'पावसाची वेळ',
    simulate_lab_btn: 'सिम्युलेशन लॅबमध्ये तपासा'
  },

  te: {
    tab_overview: 'అవలోకనం (Overview)',
    tab_hydromap: '6-మోడ్ మ్యాప్',
    tab_agriculture: 'స్మార్ట్ పంటలు & రకాలు',
    tab_scenario: 'పరిస్థితి ప్రయోగశాల (సిమ్యులేషన్)',
    tab_monsoon: 'రుతుపవనాల దశ',
    tab_xai: 'వివరణాత్మక AI (SHAP)',
    tab_satellite: 'ఉపగ్రహం (NDVI)',
    tab_knowledge_graph: 'నాలెడ్జ్ గ్రాఫ్',
    tab_analytics: 'అనలిటిక్స్ ల్యాబ్',
    tab_alerts: 'హెచ్చరికలు & సమాచారం',
    tab_planner: 'వ్యవసాయ కార్యాచరణ ప్రణాళిక',
    tab_system: 'వ్యవస్థ విశ్వసనీయత',

    hackathon_badge: 'లెనోవా హ్యాకథాన్ 2026',
    soi_badge: 'సర్వే ఆఫ్ ఇండియా ధృవీకరించబడింది',
    quick_search: 'శోధించండి...',
    live_mode: 'లైవ్',
    cached_mode: 'కాష్డ్',
    demo_mode: 'డెమో',
    decision_brief: 'నిర్ణయ నివేదిక',
    profile: 'ప్రొఫైల్',
    login_btn: 'సైన్ ఇన్ / పాత్ర మార్చండి',
    logged_in_as: 'లాగిన్ అయిన వినియోగదారు',
    logout_btn: 'లాగ్ అవుట్',

    surface_temp: 'ఉపరితల ఉష్ణోగ్రత',
    temp_sub: 'అనుకూల ఉష్ణోగ్రత: 24°C–32°C',
    rainfall_metric: 'వర్షపాతం (ఈరోజు / 7-రోజులు)',
    humidity_soil: 'తేమ & నేల తేమ శాతం',
    soil_sub: 'వేరు ప్రాంతం: సరిపడా తేమ అందుబాటులో ఉంది',
    composite_risk: 'సమగ్ర వ్యవసాయ ప్రమాద సూచిక',
    risk_sub: 'రేటింగ్: తక్కువ నుండి మధ్యస్థం',
    active_advisory: 'క్రియాశీల వ్యవసాయ సలహా',
    run_scenario: 'సిమ్యులేషన్ పరీక్షించండి',
    export_report: 'నివేదిక డౌన్‌లోడ్',
    synoptic_outlook: '7-రోజుల స్థానిక వాతావరణ సూచన',
    primary_cultivar: 'ప్రధాన సిఫార్సు పంట రకం',
    suitability_score: 'అనుకూలత స్కోరు',
    explore_all: 'అన్ని రకాలు మరియు "ఈ పంట ఎందుకు కాదు?" విశ్లేషణ',
    ask_ai: 'AI సహాయకుడిని అడగండి',
    today: 'ఈరోజు',
    tomorrow: 'రేపు',
    agro_hubs_label: 'వ్యవసాయ కేంద్రాలు:',

    multi_factor_eval: 'ICAR బహుళ-కారకాల అంచనా',
    smart_crops_title: 'స్మార్ట్ పంటలు & ధృవీకరించబడిన రకాల సిఫార్సులు',
    smart_crops_sub: 'నేల తేమ, 7 రోజుల వర్షపాతం మరియు ఉష్ణోగ్రత పరిమితుల ఆధారంగా ర్యాంకింగ్.',
    compare_cultivars: 'రకాలను సరిపోల్చండి',
    why_not_title: '"ఈ పంట ఎందుకు కాదు?" విశ్లేషణ',
    why_not_heading: 'తిరస్కరించబడిన పంటలు & శాస్త్రీయ కారణాలు',
    why_not_sub: 'రైతులకు ఆర్థిక నష్టం జరగకుండా, యువాసేతు సరిపోలని పంటలను స్పష్టంగా వేరు చేస్తుంది:',
    water_req: 'నీటి అవసరం',
    sowing_window: 'విత్తే సమయం',
    multi_factor_weighting: 'వ్యవసాయ వెయిటేజ్:',
    thermal_fit: 'ఉష్ణోగ్రత సరిపోలిక',
    rain_timing: 'వర్ష సమయం',
    simulate_lab_btn: 'ల్యాబ్‌లో పరీక్షించండి'
  },

  ta: {
    tab_overview: 'கண்ணோட்டம் (Overview)',
    tab_hydromap: '6-முறை வரைபடம்',
    tab_agriculture: 'ஸ்மார்ட் பயிர்கள் & ரகங்கள்',
    tab_scenario: 'சூழ்நிலை ஆய்வகம் (சிமுலேஷன்)',
    tab_monsoon: 'பருவமழை நிலை',
    tab_xai: 'விளக்கக்கூடிய AI (SHAP)',
    tab_satellite: 'செயற்கைக்கோள் (NDVI)',
    tab_knowledge_graph: 'அறிவு வரைபடம்',
    tab_analytics: 'பகுப்பாய்வு கூடம்',
    tab_alerts: 'எச்சரிக்கைகள் & தகவல்கள்',
    tab_planner: 'விவசாய செயல் திட்டம்',
    tab_system: 'கணினி நம்பகத்தன்மை',

    hackathon_badge: 'லெனோவா ஹேக்கத்தான் 2026',
    soi_badge: 'சர்வே ஆஃப் இந்தியா சான்றளிக்கப்பட்டது',
    quick_search: 'தேடுக...',
    live_mode: 'நேரலை',
    cached_mode: 'சேமிக்கப்பட்டவை',
    demo_mode: 'டெமோ',
    decision_brief: 'முடிவு அறிக்கை',
    profile: 'சுயவிவரம்',
    login_btn: 'உள்நுழைக / பங்கு மாற்றம்',
    logged_in_as: 'உள்நுழைந்துள்ள பயனர்',
    logout_btn: 'வெளியேறுக',

    surface_temp: 'மேற்பரப்பு வெப்பநிலை',
    temp_sub: 'உகந்த வெப்பநிலை: 24°C–32°C',
    rainfall_metric: 'மழைப்பொழிவு (இன்று / 7-நாட்கள்)',
    humidity_soil: 'ஈரப்பதம் மற்றும் மண் வளம்',
    soil_sub: 'வேர் மண்டலம்: போதுமான ஈரப்பதம்',
    composite_risk: 'ஒருங்கிணைந்த விவசாய இடர் அளவு',
    risk_sub: 'நிலை: குறைவு முதல் மிதமானது',
    active_advisory: 'செயலில் உள்ள விவசாய ஆலோசனை',
    run_scenario: 'சூழ்நிலையை சோதிக்க',
    export_report: 'அறிக்கை பதிவிறக்குக',
    synoptic_outlook: '7-நாள் உள்ளூர் வானிலை முன்னறிவிப்பு',
    primary_cultivar: 'முதன்மை பரிந்துரைக்கப்பட்ட பயிர் ரகம்',
    suitability_score: 'பொருத்தமான மதிப்பெண்',
    explore_all: 'அனைத்து பயிர்கள் மற்றும் காரணங்களை காண்க',
    ask_ai: 'ஏஐ உதவியாளரிடம் கேளுங்கள்',
    today: 'இன்று',
    tomorrow: 'நாளை',
    agro_hubs_label: 'வேளாண் மையங்கள்:',

    multi_factor_eval: 'ICAR பல காரணி மதிப்பீடு',
    smart_crops_title: 'ஸ்மார்ட் பயிர் மற்றும் சான்றளிக்கப்பட்ட ரகங்கள்',
    smart_crops_sub: 'மண் ஈரப்பதம், 7-நாள் மழை மற்றும் வெப்பநிலை அடிப்படையில் தரவரிசைப்படுத்தப்பட்டது.',
    compare_cultivars: 'ரகங்களை ஒப்பிடுக',
    why_not_title: '"இந்த பயிர் ஏன் வேண்டாம்?" பகுப்பாய்வு',
    why_not_heading: 'நிராகரிக்கப்பட்ட பயிர்கள் மற்றும் காரணங்கள்',
    why_not_sub: 'விவசாயிகளுக்கு நஷ்டம் ஏற்படுவதைத் தவிர்க்க, யுவாசேது பொருத்தமற்ற பயிர்களை அடையாளம் காட்டுகிறது:',
    water_req: 'தண்ணீர் தேவை',
    sowing_window: 'விதைப்பு காலம்',
    multi_factor_weighting: 'காரணி எடையிடல்:',
    thermal_fit: 'வெப்பநிலை பொருத்தம்',
    rain_timing: 'மழை நேரம்',
    simulate_lab_btn: 'ஆய்வகத்தில் சோதிக்க'
  },

  gu: {
    tab_overview: 'ઝાંખી (Overview)',
    tab_hydromap: '૬-મોડ નકશો',
    tab_agriculture: 'સ્માર્ટ પાક અને જાતો',
    tab_scenario: 'પરિસ્થિતિ પ્રયોગશાળા',
    tab_monsoon: 'ચોમાસાનો તબક્કો',
    tab_xai: 'સમજાવી શકાય તેવું AI (SHAP)',
    tab_satellite: 'સેટેલાઇટ (NDVI વનસ્પતિ)',
    tab_knowledge_graph: 'નોલેજ ગ્રાફ',
    tab_analytics: 'એનાલિટિક્સ લેબ',
    tab_alerts: 'ચેતવણીઓ અને આગોતરી જાણ',
    tab_planner: 'ખેતી કાર્ય યોજના',
    tab_system: 'સિસ્ટમ વિશ્વસનીયતા',

    hackathon_badge: 'લેનોવો હેકાથોન ૨૦૨૬',
    soi_badge: 'સર્વે ઓફ ઇન્ડિયા માન્ય',
    quick_search: 'ઝડપી શોધ...',
    live_mode: 'લાઇવ',
    cached_mode: 'કેશ્ડ',
    demo_mode: 'ડેમો',
    decision_brief: 'નિર્ણય અહેવાલ',
    profile: 'પ્રોફાઇલ',
    login_btn: 'લોગિન / ભૂમિકા બદલો',
    logged_in_as: 'લોગિન થયેલ વપરાશકર્તા',
    logout_btn: 'લોગઆઉટ',

    surface_temp: 'સપાટીનું તાપમાન',
    temp_sub: 'અનુકૂળ તાપમાન: ૨૪°C–૩૨°C',
    rainfall_metric: 'વરસાદ (આજે / ૭-દિવસ)',
    humidity_soil: 'ભેજ અને જમીનમાં ભેજનું પ્રમાણ',
    soil_sub: 'મૂળ વિસ્તાર: પૂરતો ભેજ ઉપલબ્ધ',
    composite_risk: 'સમગ્ર કૃષિ જોખમ સ્કોર',
    risk_sub: 'રેટિંગ: નીચું થી મધ્યમ',
    active_advisory: 'સક્રિય કૃષિ સલાહ',
    run_scenario: 'પરિસ્થિતિ તપાસો',
    export_report: 'અહેવાલ ડાઉનલોડ કરો',
    synoptic_outlook: '૭-દિવસીય સ્થાનિક હવામાન આગાહી',
    primary_cultivar: 'મુખ્ય ભલામણ કરેલ જાત',
    suitability_score: 'અનુકૂળતા સ્કોર',
    explore_all: 'બધી જાતો અને "આ પાક કેમ નહીં?" જુઓ',
    ask_ai: 'AI સહાયકને પૂછો',
    today: 'આજે',
    tomorrow: 'આવતીકાલે',
    agro_hubs_label: 'કૃષિ કેન્દ્રો:'
  },

  bn: {
    tab_overview: 'সংক্ষিপ্ত বিবরণ (Overview)',
    tab_hydromap: '৬-মোড মানচিত্র',
    tab_agriculture: 'স্মার্ট ফসল ও জাত',
    tab_scenario: 'পরিস্থিতি ল্যাব (সিমুলেশন)',
    tab_monsoon: 'বর্ষার পর্যায়',
    tab_xai: 'ব্যাখ্যাযোগ্য এআই (SHAP)',
    tab_satellite: 'উপগ্রহ (NDVI উদ্ভিদ)',
    tab_knowledge_graph: 'নলেজ গ্রাফ',
    tab_analytics: 'বিশ্লেষণ গবেষণাগার',
    tab_alerts: 'সতর্কতা ও পূর্বাভাস',
    tab_planner: 'কৃষি কর্মপরিকল্পনা',
    tab_system: 'সিস্টেম নির্ভরযোগ্যতা',

    hackathon_badge: 'লেনোভো হ্যাকাথন ২০২৬',
    soi_badge: 'সার্ভে অব ইন্ডিয়া প্রত্যয়িত',
    quick_search: 'অনুসন্ধান করুন...',
    live_mode: 'সরাসরি',
    cached_mode: 'ক্যাশড',
    demo_mode: 'ডেমো',
    decision_brief: 'সিদ্ধান্ত প্রতিবেদন',
    profile: 'প্রোফাইল',
    login_btn: 'সাইন ইন / ভূমিকা পরিবর্তন',
    logged_in_as: 'লগ ইন করা ব্যবহারকারী',
    logout_btn: 'লগ আউট',

    surface_temp: 'পৃষ্ঠের তাপমাত্রা',
    temp_sub: 'অনুকূল তাপমাত্রা: ২৪°C–৩২°C',
    rainfall_metric: 'বৃষ্টিপাত (আজ / ৭-দিন)',
    humidity_soil: 'আপেক্ষিক আর্দ্রতা ও মাটির রস',
    soil_sub: 'মূল অঞ্চল: পর্যাপ্ত রস বিদ্যমান',
    composite_risk: 'সামগ্রিক কৃষি ঝুঁকি সূচক',
    risk_sub: 'মাত্রা: কম থেকে মাঝারি',
    active_advisory: 'সক্রিয় কৃষি পরামর্শ',
    run_scenario: 'পরিস্থিতি পরীক্ষা করুন',
    export_report: 'প্রতিবেদন ডাউনলোড',
    synoptic_outlook: '৭-দিনের স্থানীয় আবহাওয়া পূর্বাভাস',
    primary_cultivar: 'প্রধান প্রস্তাবিত জাত',
    suitability_score: 'উপযুক্ততা স্কোর',
    explore_all: 'সব জাত এবং "এই ফসল কেন নয়?" দেখুন',
    ask_ai: 'এআই সহকারীর কাছে জানতে চান',
    today: 'আজ',
    tomorrow: 'আগামীকাল',
    agro_hubs_label: 'কৃষি হাবসমূহ:'
  },

  pa: {
    tab_overview: 'ਸੰਖੇਪ ਜਾਣਕਾਰੀ (Overview)',
    tab_hydromap: '6-ਮੋਡ ਨਕਸ਼ਾ',
    tab_agriculture: 'ਸਮਾਰਟ ਫਸਲਾਂ ਅਤੇ ਕਿਸਮਾਂ',
    tab_scenario: 'ਹਾਲਾਤ ਲੈਬ (ਸਿਮੂਲੇਸ਼ਨ)',
    tab_monsoon: 'ਮੌਨਸੂਨ ਪੜਾਅ',
    tab_xai: 'ਵਿਆਖਿਆਯੋਗ AI (SHAP)',
    tab_satellite: 'ਸੈਟੇਲਾਈਟ (NDVI ਬਨਸਪਤੀ)',
    tab_knowledge_graph: 'ਗਿਆਨ ਗ੍ਰਾਫ',
    tab_analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ ਲੈਬ',
    tab_alerts: 'ਚੇਤਾਵਨੀਆਂ ਅਤੇ ਅਗਾਊਂ ਸੂਚਨਾ',
    tab_planner: 'ਖੇਤੀ ਕਾਰਜ ਯੋਜਨਾਕਾਰ',
    tab_system: 'ਸਿਸਟਮ ਭਰੋਸੇਯੋਗਤਾ',

    hackathon_badge: 'ਲੈਨੋਵੋ ਹੈਕਾਥੌਨ 2026',
    soi_badge: 'ਸਰਵੇ ਆਫ਼ ਇੰਡੀਆ ਪ੍ਰਮਾਣਿਤ',
    quick_search: 'ਖੋਜ ਕਰੋ...',
    live_mode: 'ਲਾਈਵ',
    cached_mode: 'ਕੈਸ਼ ਕੀਤਾ',
    demo_mode: 'ਡੈਮੋ',
    decision_brief: 'ਫੈਸਲਾ ਰਿਪੋਰਟ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    login_btn: 'ਲਾਗਇਨ / ਭੂਮਿਕਾ ਬਦਲੋ',
    logged_in_as: 'ਲਾਗਇਨ ਉਪਭੋਗਤਾ',
    logout_btn: 'ਲਾਗ ਆਉਟ',

    surface_temp: 'ਸਤਹ ਦਾ ਤਾਪਮਾਨ',
    temp_sub: 'ਅਨੁਕੂਲ ਤਾਪਮਾਨ: 24°C–32°C',
    rainfall_metric: 'ਮੀਂਹ (ਅੱਜ / 7-ਦਿਨ)',
    humidity_soil: 'ਨਮੀ ਅਤੇ ਮਿੱਟੀ ਦੀ ਗਿੱਲ',
    soil_sub: 'ਜੜ੍ਹ ਖੇਤਰ: ਲੋੜੀਂਦੀ ਨਮੀ ਉਪਲਬਧ',
    composite_risk: 'ਸਮੁੱਚਾ ਖੇਤੀ ਜੋਖਮ ਸਕੋਰ',
    risk_sub: 'ਦਰਜਾ: ਘੱਟ ਤੋਂ ਦਰਮਿਆਨਾ',
    active_advisory: 'ਸਰਗਰਮ ਖੇਤੀ ਸਲਾਹ',
    run_scenario: 'ਹਾਲਾਤ ਪਰਖੋ',
    export_report: 'ਰਿਪੋਰਟ ਡਾਊਨਲੋਡ ਕਰੋ',
    synoptic_outlook: '7-ਦਿਨਾਂ ਦਾ ਸਥਾਨਕ ਮੌਸਮ ਅਨੁਮਾਨ',
    primary_cultivar: 'ਮੁੱਖ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਕਿਸਮ',
    suitability_score: 'ਅਨੁਕੂਲਤਾ ਸਕੋਰ',
    explore_all: 'ਸਾਰੀਆਂ ਕਿਸਮਾਂ ਅਤੇ "ਇਹ ਫਸਲ ਕਿਉਂ ਨਹੀਂ?" ਵੇਖੋ',
    ask_ai: 'AI ਸਹਾਇਕ ਨੂੰ ਪੁੱਛੋ',
    today: 'ਅੱਜ',
    tomorrow: 'ਕੱਲ੍ਹ',
    agro_hubs_label: 'ਖੇਤੀ ਹੱਬ:'
  },

  kn: {
    tab_overview: 'ಅವಲೋಕನ (Overview)',
    tab_hydromap: '6-ಮೋಡ್ ನಕ್ಷೆ',
    tab_agriculture: 'ಸ್ಮಾರ್ಟ್ ಬೆಳೆಗಳು & ತಳಿಗಳು',
    tab_scenario: 'ಪರಿಸ್ಥಿತಿ ಪ್ರಯೋಗಾಲಯ',
    tab_monsoon: 'ಮುಂಗಾರು ಹಂತ',
    tab_xai: 'ವಿವರಣಾತ್ಮಕ ಎಐ (SHAP)',
    tab_satellite: 'ಉಪಗ್ರಹ (NDVI)',
    tab_knowledge_graph: 'ಜ್ಞಾನ ನಕ್ಷೆ',
    tab_analytics: 'ವಿಶ್ಲೇಷಣಾ ಕೇಂದ್ರ',
    tab_alerts: 'ಎಚ್ಚರಿಕೆಗಳು & ಮುನ್ಸೂಚನೆ',
    tab_planner: 'ಕೃಷಿ ಕಾರ್ಯ ಯೋಜಕ',
    tab_system: 'ವ್ಯವಸ್ಥೆಯ ವಿಶ್ವಾಸಾರ್ಹತೆ',

    hackathon_badge: 'ಲೆನೊವೊ ಹ್ಯಾಕಥಾನ್ 2026',
    soi_badge: 'ಸರ್ವೇ ಆಫ್ ಇಂಡಿಯಾ ಪ್ರಮಾಣೀಕೃತ',
    quick_search: 'ತ್ವರಿತ ಹುಡುಕಾಟ...',
    live_mode: 'ಲೈವ್',
    cached_mode: 'ಕ್ಯಾಶ್ಡ್',
    demo_mode: 'ಡೆಮೊ',
    decision_brief: 'ನಿರ್ಧಾರ ವರದಿ',
    profile: 'ಪ್ರೊಫೈಲ್',
    login_btn: 'ಸೈನ್ ಇನ್ / ಪಾತ್ರ ಬದಲಾವಣೆ',
    logged_in_as: 'ಲಾಗಿನ್ ಆದ ಬಳಕೆದಾರ',
    logout_btn: 'ಸೈನ್ ಔಟ್',

    surface_temp: 'ಮೇಲ್ಮೈ ತಾಪಮಾನ',
    temp_sub: 'ಸೂಕ್ತ ತಾಪಮಾನ: 24°C–32°C',
    rainfall_metric: 'ಮಳೆ ಪ್ರಮಾಣ (ಇಂದು / 7-ದಿನ)',
    humidity_soil: 'ಆರ್ದ್ರತೆ ಮತ್ತು ಮಣ್ಣಿನ ತೇವಾಂಶ',
    soil_sub: 'ಬೇರು ವಲಯ: ಸಾಕಷ್ಟು ತೇವಾಂಶ ಲಭ್ಯವಿದೆ',
    composite_risk: 'ಒಟ್ಟಾರೆ ಕೃಷಿ ಅಪಾಯದ ಸೂಚ್ಯಂಕ',
    risk_sub: 'ಮಟ್ಟ: ಕಡಿಮೆಯಿಂದ ಮಧ್ಯಮ',
    active_advisory: 'ಸಕ್ರಿಯ ಕೃಷಿ ಸಲಹೆ',
    run_scenario: 'ಪರಿಸ್ಥಿತಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ',
    export_report: 'ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    synoptic_outlook: '7-ದಿನಗಳ ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ',
    primary_cultivar: 'ಮುಖ್ಯ ಶಿಫಾರಸು ಮಾಡಿದ ತಳಿ',
    suitability_score: 'ಹೊಂದಾಣಿಕೆ ಅಂಕ',
    explore_all: 'ಎಲ್ಲಾ ತಳಿಗಳು ಮತ್ತು "ಈ ಬೆಳೆ ಏಕೆ ಬೇಡ?" ವಿವರಗಳನ್ನು ನೋಡಿ',
    ask_ai: 'AI ಸಹಾಯಕನನ್ನು ಕೇಳಿ',
    today: 'ಇಂದು',
    tomorrow: 'ನಾಳೆ',
    agro_hubs_label: 'ಕೃಷಿ ಕೇಂದ್ರಗಳು:'
  },

  ml: {
    tab_overview: 'അവലോകനം (Overview)',
    tab_hydromap: '6-മോഡ് ഭൂപടം',
    tab_agriculture: 'സ്മാർട്ട് വിളകളും ഇനങ്ങളും',
    tab_scenario: 'സാഹചര്യ പരീക്ഷണശാല',
    tab_monsoon: 'മൺസൂൺ ഘട്ടം',
    tab_xai: 'വിശദീകരിക്കാവുന്ന എഐ (SHAP)',
    tab_satellite: 'ഉപഗ്രഹം (NDVI)',
    tab_knowledge_graph: 'നോളജ് ഗ്രാഫ്',
    tab_analytics: 'അനലിറ്റിക്സ് ലാബ്',
    tab_alerts: 'മുന്നറിയിപ്പുകൾ',
    tab_planner: 'കൃഷി കർമ്മ പദ്ധതി',
    tab_system: 'സിസ്റ്റം കാര്യക്ഷമത',

    hackathon_badge: 'ലെനോവോ ഹാക്കത്തൺ 2026',
    soi_badge: 'സർവേ ഓഫ് ഇന്ത്യ സാക്ഷ്യപ്പെടുത്തിയത്',
    quick_search: 'തിരയുക...',
    live_mode: 'തത്സമയം',
    cached_mode: 'കാഷെ ചെയ്തത്',
    demo_mode: 'ഡെമോ',
    decision_brief: 'തീരുമാന റിപ്പോർട്ട്',
    profile: 'പ്രൊഫൈൽ',
    login_btn: 'പ്രവേശിക്കുക / റോൾ മാറ്റുക',
    logged_in_as: 'ലോഗിൻ ചെയ്ത ഉപയോക്താവ്',
    logout_btn: 'പുറത്തുകടക്കുക',

    surface_temp: 'ഉപരിതല താപനില',
    temp_sub: 'അനുയോജ്യമായ താപനില: 24°C–32°C',
    rainfall_metric: 'മഴയളവ് (ഇന്ന് / 7-ദിവസം)',
    humidity_soil: 'ഈർപ്പവും മണ്ണിലെ ജലാംശവും',
    soil_sub: 'വേരുപടലം: മതിയായ ഈർപ്പം ലഭ്യമാണ്',
    composite_risk: 'കാർഷിക അപകടസാധ്യതാ നിരക്ക്',
    risk_sub: 'നില: കുറഞ്ഞത് മുതൽ മിതമായത് വരെ',
    active_advisory: 'സജീവ കാർഷിക നിർദ്ദേശം',
    run_scenario: 'സാഹചര്യം പരിശോധിക്കുക',
    export_report: 'റിപ്പോർട്ട് ഡൗൺലോഡ് ചെയ്യുക',
    synoptic_outlook: '7-ദിവസത്തെ പ്രാദേശിക കാലാവസ്ഥാ പ്രവചനം',
    primary_cultivar: 'പ്രധാന ശുപാർശ ചെയ്ത വിത്തിനകം',
    suitability_score: 'അനുയോജ്യത സ്കോർ',
    explore_all: 'എല്ലാ വിത്തിനങ്ങളും കാരണങ്ങളും കാണുക',
    ask_ai: 'AI സഹായിയോട് ചോദിക്കുക',
    today: 'ഇന്ന്',
    tomorrow: 'നാളെ',
    agro_hubs_label: 'കാർഷിക കേന്ദ്രങ്ങൾ:'
  },

  or: {
    tab_overview: 'ସମୀକ୍ଷା (Overview)',
    tab_hydromap: '୬-ମୋଡ୍ ମାନଚିତ୍ର',
    tab_agriculture: 'ସ୍ମାର୍ଟ ଫସଲ ଓ କିସମ',
    tab_scenario: 'ପରିସ୍ଥିତି ପ୍ରୟୋଗଶାଳା',
    tab_monsoon: 'ମୌସୁମୀ ପର୍ଯ୍ୟାୟ',
    tab_xai: 'ବ୍ୟାଖ୍ୟାଯୋଗ୍ୟ AI (SHAP)',
    tab_satellite: 'ଉପଗ୍ରହ (NDVI)',
    tab_knowledge_graph: 'ଜ୍ଞାନ ଗ୍ରାଫ୍',
    tab_analytics: 'ବିଶ୍ଳେଷଣ ଲ୍ୟାବ୍',
    tab_alerts: 'ଚେତାବନୀ ଓ ପୂର୍ବାନୁମାନ',
    tab_planner: 'କୃଷି କାର୍ଯ୍ୟ ଯୋଜନା',
    tab_system: 'ସିଷ୍ଟମ୍ ବିଶ୍ୱସନୀୟତା',

    hackathon_badge: 'ଲେନୋଭୋ ହ୍ୟାକାଥନ୍ ୨୦୨୬',
    soi_badge: 'ସର୍ଭେ ଅଫ୍ ଇଣ୍ଡିଆ ସ୍ୱୀକୃତ',
    quick_search: 'ସନ୍ଧାନ କରନ୍ତୁ...',
    live_mode: 'ଲାଇଭ୍',
    cached_mode: 'କ୍ୟାଶ୍ଡ୍',
    demo_mode: 'ଡେମୋ',
    decision_brief: 'ନିଷ୍ପତ୍ତି ରିପୋର୍ଟ',
    profile: 'ପ୍ରୋଫାଇଲ୍',
    login_btn: 'ଲଗଇନ୍ / ଭୂମିକା ପରିବର୍ତ୍ତନ',
    logged_in_as: 'ଲଗଇନ୍ ହୋଇଥିବା ବ୍ୟବହାରକାରୀ',
    logout_btn: 'ଲଗଆଉଟ୍',

    surface_temp: 'ପୃଷ୍ଠ ତାପମାତ୍ରା',
    temp_sub: 'ଉପଯୁକ୍ତ ତାପମାତ୍ରା: ୨୪°C–୩୨°C',
    rainfall_metric: 'ବର୍ଷା (ଆଜି / ୭-ଦିନ)',
    humidity_soil: 'ଆର୍ଦ୍ରତା ଓ ମାଟିର ଓଦା ଅଂଶ',
    soil_sub: 'ମୂଳ କ୍ଷେତ୍ର: ପର୍ଯ୍ୟାପ୍ତ ଓଦା ଉପଲବ୍ଧ',
    composite_risk: 'ସାମଗ୍ରିକ କୃଷି ବିପଦ ସୂଚକାଙ୍କ',
    risk_sub: 'ମାତ୍ରା: କମ୍ ରୁ ମଧ୍ୟମ',
    active_advisory: 'ସକ୍ରିୟ କୃଷି ପରାମର୍ଶ',
    run_scenario: 'ପରିସ୍ଥିତି ପରୀକ୍ଷା କରନ୍ତୁ',
    export_report: 'ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ କରନ୍ତୁ',
    synoptic_outlook: '୭-ଦିନିଆ ସ୍ଥାନୀୟ ପାଣିପାଗ ପୂର୍ବାନୁମାନ',
    primary_cultivar: 'ପ୍ରମୁଖ ପରାମର୍ଶିତ କିସମ',
    suitability_score: 'ଉପଯୁକ୍ତତା ସ୍କୋର',
    explore_all: 'ସମସ୍ତ କିସମ ଓ କାରଣ ଦେଖନ୍ତୁ',
    ask_ai: 'AI ସହାୟକଙ୍କୁ ପଚାରନ୍ତୁ',
    today: 'ଆଜି',
    tomorrow: 'ଆସନ୍ତାକାଲି',
    agro_hubs_label: 'କୃଷି ହବ୍:'
  }
};

// Comprehensive Vernacular Phrase Dictionary for Dynamic Contextual Translation across all 11 Indian Languages
export const VERNACULAR_DICTIONARY = {
  // Common UI & Action Phrases
  'Optimal Sowing Window': {
    hi: 'इष्टतम बुवाई खिड़की', mr: 'योग्य पेरणीची वेळ', te: 'అనుకూల విత్తే సమయం', ta: 'உகந்த விதைப்பு காலம்',
    gu: 'શ્રેષ્ઠ વાવણી સમય', bn: 'অনুকূল বপনের সময়', pa: 'ਅਨੁਕੂਲ ਬਿਜਾਈ ਸਮਾਂ', kn: 'ಸೂಕ್ತ ಬಿತ್ತನೆ ಕಾಲ',
    ml: 'അനുയോജ്യമായ വിതയ്ക്കൽ സമയം', or: 'ଉପଯୁକ୍ତ ବୁଣିବା ସମୟ'
  },
  'Furrow Drainage Required': {
    hi: 'नाली जल निकासी आवश्यक', mr: 'चर काढून निचरा आवश्यक', te: 'కాలువల ద్వారా నీటి పారుదల అవసరం', ta: 'வடிகால் வசதி தேவை',
    gu: 'પાણી નિકાલ જરૂરી', bn: 'নর্দমা নিষ্কাশন প্রয়োজন', pa: 'ਨਿਕਾਸੀ ਨਾਲੀ ਦੀ ਲੋੜ', kn: 'ಚರಂಡಿ ನೀರು ಸರಬರಾಜು ಅಗತ್ಯ',
    ml: 'ചാലുകൾ വഴിയുള്ള നീരൊഴുക്ക് ആവശ്യം', or: 'ନିଷ୍କାସନ ନାଳୀ ଆବଶ୍ୟକ'
  },
  '6-Day Dry Break Watch': {
    hi: '6-दिवसीय शुष्क दौर निगरानी', mr: '६ दिवसांचा कोरडा काळ देखरेख', te: '6-రోజుల పొడి విరామ పర్యవేక్షణ', ta: '6-நாள் வறட்சி கண்காணிப்பு',
    gu: '૬-દિવસીય સૂકા તબક્કાની નજર', bn: '৬ দিনের শুষ্ক বিরতি পর্যবেক্ষণ', pa: '6-ਦਿਨਾਂ ਦੇ ਸੁੱਕੇ ਦੌਰ ਦੀ ਨਿਗਰਾਨੀ', kn: '6-ದಿನಗಳ ಒಣ ವಿರಾಮ ವೀಕ್ಷಣೆ',
    ml: '6-ദിവസത്തെ വരണ്ട ഇടവേള നിരീക്ഷണം', or: '୬-ଦିନିଆ ଶୁଷ୍କ ବିରାମ ନିରୀକ୍ଷଣ'
  },
  'Vegetative Growth': {
    hi: 'वानस्पतिक वृद्धि चरण', mr: 'शाकीय वाढ टप्पा', te: 'శాకీయ పెరుగుదల దశ', ta: 'தாவர வளர்ச்சி நிலை',
    gu: 'વાનસ્પતિક વૃદ્ધિ તબક્કો', bn: 'উদ্ভিজ্জ বৃদ্ধির পর্যায়', pa: 'ਬਨਸਪਤੀ ਵਾਧਾ ਪੜਾਅ', kn: 'ಸಸ್ಯಕ ಬೆಳವಣಿಗೆಯ ಹಂತ',
    ml: 'സസ്യ വളർച്ചാ ഘട്ടം', or: 'ଉଦ୍ଭିଦ ବୃଦ୍ଧି ପର୍ଯ୍ୟାୟ'
  },
  'Knee-High Stage': {
    hi: 'घुटने की ऊंचाई का चरण', mr: 'गुडघाभर उंची टप्पा', te: 'మోకాలి ఎత్తు దశ', ta: 'முழங்கால் உயர நிலை',
    gu: 'ઘૂંટણ સમાન વૃદ્ધિ', bn: 'হাঁটু সমান বৃদ্ধির পর্যায়', pa: 'ਗੋਡੇ ਦੀ ਉਚਾਈ ਦਾ ਪੜਾਅ', kn: 'ಮೊಣಕಾಲು ಎತ್ತರದ ಹಂತ',
    ml: 'മുട്ടോളം ഉയരമുള്ള ഘട്ടം', or: 'ଆଣ୍ଠୁ ଉଚ୍ଚତା ପର୍ଯ୍ୟାୟ'
  },
  'Cold Arid Window': {
    hi: 'शीत शुष्क मौसम खिड़की', mr: 'थंड कोरडा काळ', te: 'శీతల శుష్క కాలం', ta: 'குளிர்ந்த வறண்ட காலம்',
    gu: 'ઠંડી શુષ્ક ઋતુ', bn: 'শীতল শুষ্ক সময়সীমা', pa: 'ਠੰਢਾ ਖੁਸ਼ਕ ਦੌਰ', kn: 'ಶೀತ ಶುಷ್ಕ ಹವಾಮಾನ',
    ml: 'തണുത്ത വരണ്ട കാലാവസ്ഥ', or: 'ଶୀତଳ ଶୁଷ୍କ ପାଣିପାଗ'
  },
  'Heavy Rain Precaution': {
    hi: 'भारी वर्षा सावधानी चेतावनी', mr: 'मुसळधार पाऊस खबरदारी', te: 'భారీ వర్షపు ముందస్తు జాగ్రత్త', ta: 'கனமழை முன்னெச்சரிக்கை',
    gu: 'ભારે વરસાદની સાવચેતી', bn: 'ভারী বৃষ্টির সতর্কতা', pa: 'ਭਾਰੀ ਮੀਂਹ ਦੀ ਚਿਤਾਵਨੀ', kn: 'ಭಾರೀ ಮಳೆಯ ಮುನ್ನೆಚ್ಚರಿಕೆ',
    ml: 'കനത്ത മഴ മുന്നറിയിപ്പ്', or: 'ପ୍ରବଳ ବର୍ଷା ସତର୍କତା'
  },
  'Dryland Moisture Watch': {
    hi: 'शुष्क भूमि नमी निगरानी', mr: 'कोरडवाहू ओलावा देखरेख', te: 'మెట్ట భూమి తేమ పర్యవేక్షణ', ta: 'மானாவாரி ஈரப்பதம் கண்காணிப்பு',
    gu: 'સૂકી જમીન ભેજ નિરીક્ષણ', bn: 'শুষ্ক জমির আর্দ্রতা পর্যবেক্ষণ', pa: 'ਖੁਸ਼ਕ ਜ਼ਮੀਨ ਨਮੀ ਨਿਗਰਾਨੀ', kn: 'ಒಣಭೂಮಿ ತೇವಾಂಶ ವೀಕ್ಷಣೆ',
    ml: 'വരണ്ട നിലങ്ങളിലെ ഈർപ്പ നിരീക്ഷണം', or: 'ଶୁଷ୍କ ଭୂମି ଆର୍ଦ୍ରତା ନିରୀକ୍ଷଣ'
  },
  // Overview Tab & Hero Banner Phrases
  'Active Soil & Vegetative Advisory': {
    hi: 'सक्रिय मृदा एवं वानस्पतिक परामर्श', mr: 'सक्रिय माती व कृषी सल्ला', te: 'క్రియాశీల నేల & పంట సలహా', ta: 'செயலில் உள்ள மண் மற்றும் தாவர ஆலோசனை',
    gu: 'સક્રિય જમીન અને પાક સલાહ', bn: 'সক্রিয় মাটি ও ফসল পরামর্শ', pa: 'ਸਰਗਰਮ ਮਿੱਟੀ ਅਤੇ ਫਸਲ ਸਲਾਹ', kn: 'ಸಕ್ರಿಯ ಮಣ್ಣು & ಸಸ್ಯಕ ಸಲಹೆ',
    ml: 'മണ്ണും സസ്യ സംരക്ഷണ നിർദ്ദേശവും', or: 'ସକ୍ରିୟ ମୃତ୍ତିକା ଓ ଫସଲ ପରାମର୍ଶ'
  },
  'Recommended sowing window open': {
    hi: 'अनुशंसित बुवाई खिड़की खुली है', mr: 'पेरणीसाठी अनुकूल कालावधी सुरू आहे', te: 'సిఫార్సు చేయబడిన విత్తే సమయం ప్రారంభమైంది', ta: 'பரிந்துரைக்கப்பட்ட விதைப்பு காலம் திறந்துள்ளது',
    gu: 'વાવણી માટે અનુકૂળ સમય ખુલ્લો છે', bn: 'প্রস্তাবিত বপনের সময় চলছে', pa: 'ਸਿਫਾਰਸ਼ ਕੀਤੀ ਬਿਜਾਈ ਦੀ ਮਿਆਦ ਸ਼ੁਰੂ ਹੈ', kn: 'ಶಿಫಾರಸು ಮಾಡಿದ ಬಿತ್ತನೆ ಸಮಯ ಆರಂಭವಾಗಿದೆ',
    ml: 'വിത്ത് വിതയ്ക്കാൻ അനുയോജ്യമായ സമയം', or: 'ପରାମର୍ଶିତ ବୁଣିବା ସମୟ ଖୋଲା ଅଛି'
  },
  'Top 3 Optimal Crops for this Region': {
    hi: 'इस क्षेत्र के लिए शीर्ष 3 इष्टतम फसलें', mr: 'या विभागासाठी अव्वल ३ शिफारस केलेली पिके', te: 'ఈ ప్రాంతానికి అత్యుత్తమ 3 పంటలు', ta: 'இந்த பகுதிக்கு மிகவும் உகந்த 3 பயிர்கள்',
    gu: 'આ પ્રદેશ માટે શ્રેષ્ઠ ૩ પાક', bn: 'এই অঞ্চলের জন্য সেরা ৩টি উপযোগী ফসল', pa: 'ਇਸ ਖੇਤਰ ਲਈ ਪ੍ਰਮੁੱਖ 3 ਢੁਕਵੀਆਂ ਫਸਲਾਂ', kn: 'ಈ ಪ್ರದೇಶಕ್ಕೆ ಅಗ್ರ 3 ಅತ್ಯುತ್ತಮ ಬೆಳೆಗಳು',
    ml: 'ഈ പ്രദേശത്തിന് അനുയോജ്യമായ പ്രധാന 3 വിളകൾ', or: 'ଏହି ଅଞ୍ଚଳ ପାଇଁ ଶ୍ରେଷ୍ଠ ୩ ଉପଯୁକ୍ତ ଫସଲ'
  },
  '7-Day vs 30-Day Precipitation & Thermal Curves': {
    hi: '7-दिवसीय बनाम 30-दिवसीय वर्षा एवं तापीय वक्र', mr: '७-दिवसीय वि. ३०-दिवसीय पाऊस व तापमान आलेख', te: '7-రోజుల vs 30-రోజుల వర్షపాతం & ఉష్ణోగ్రత గ్రాఫ్‌లు', ta: '7-நாள் மற்றும் 30-நாள் மழைப்பொழிவு & வெப்பநிலை வரைபடங்கள்',
    gu: '૭-દિવસ વિરુદ્ધ ૩૦-દિવસ વરસાદ અને તાપમાન ગ્રાફ', bn: '৭-দিন বনাম ৩০-দিনের বৃষ্টিপাত ও তাপমাত্রার লেখচিত্র', pa: '7-ਦਿਨ ਬਨਾਮ 30-ਦਿਨ ਮੀਂਹ ਅਤੇ ਤਾਪਮਾਨ ਗ੍ਰਾਫ', kn: '7-ದಿನಗಳ vs 30-ದಿನಗಳ ಮಳೆ ಮತ್ತು ತಾಪಮಾನ ರೇಖಾಚಿತ್ರ',
    ml: '7-ദിവസത്തെയും 30-ദിവസത്തെയും മഴയും താപനിലയും', or: '୭-ଦିନିଆ ବନାମ ୩୦-ଦିନିଆ ବର୍ଷା ଓ ତାପମାତ୍ରା ଗ୍ରାଫ୍'
  },
  'Precipitation (mm)': {
    hi: 'वर्षा (मिमी)', mr: 'पाऊस (मिमी)', te: 'వర్షపాతం (మి.మీ)', ta: 'மழைப்பொழிவு (மிமீ)',
    gu: 'વરસાદ (મિમી)', bn: 'বৃষ্টিপাত (মিমি)', pa: 'ਮੀਂਹ (ਮਿਲੀਮੀਟਰ)', kn: 'ಮಳೆ ಪ್ರಮಾಣ (ಮಿಮೀ)',
    ml: 'മഴയളവ് (മി.മീ)', or: 'ବର୍ଷା (ମିମି)'
  },
  'Temperature (°C)': {
    hi: 'तापमान (°C)', mr: 'तापमान (°C)', te: 'ఉష్ణోగ్రత (°C)', ta: 'வெப்பநிலை (°C)',
    gu: 'તાપમાન (°C)', bn: 'তাপমাত্রা (°C)', pa: 'ਤਾਪਮਾਨ (°C)', kn: 'ತಾಪಮಾನ (°C)',
    ml: 'താപനില (°C)', or: 'ତାପମାତ୍ରା (°C)'
  },
  'Relative Humidity': {
    hi: 'सापेक्ष आर्द्रता', mr: 'सापेक्ष आर्द्रता', te: 'సాపేక్ష తేమ', ta: 'ஒப்பீட்டு ஈரப்பதம்',
    gu: 'સાપેક્ષ ભેજ', bn: 'আপেক্ষিক আর্দ্রতা', pa: 'ਸਾਪੇਖਿਕ ਨਮੀ', kn: 'ಸಾಪೇಕ್ಷ ಆರ್ದ್ರತೆ',
    ml: 'ആപേക്ഷിക ആർദ്രത', or: 'ଆପେକ୍ଷିକ ଆର୍ଦ୍ରତା'
  },
  'Wind Speed': {
    hi: 'हवा की गति', mr: 'वाऱ्याचा वेग', te: 'గాలి వేగం', ta: 'காற்றின் வேகம்',
    gu: 'પવનની ગતિ', bn: 'বাতাসের গতিবেগ', pa: 'ਹਵਾ ਦੀ ਰਫ਼ਤਾਰ', kn: 'ಗಾಳಿಯ ವೇಗ',
    ml: 'കാറ്റിന്റെ വേഗത', or: 'ପବନର ଗତି'
  },
  'Soil Moisture': {
    hi: 'मृदा नमी', mr: 'मातीतील ओलावा', te: 'నేల తేమ', ta: 'மண் ஈரப்பதம்',
    gu: 'જમીનમાં ભેજ', bn: 'মাটির আর্দ্রতা', pa: 'ਮਿੱਟੀ ਦੀ ਨਮੀ', kn: 'ಮಣ್ಣಿನ ತೇವಾಂಶ',
    ml: 'മണ്ണിലെ ഈർപ്പം', or: 'ମାଟିର ଓଦା ଅଂଶ'
  },
  // Scenario Lab & Presets
  'Extreme Heatwave Shock (+4.2°C)': {
    hi: 'अत्यधिक लू का झटका (+4.2°C)', mr: 'तीव्र उष्णतेची लाट (+४.२°C)', te: 'తీవ్రమైన వేడి గాలులు (+4.2°C)', ta: 'கடுமையான வெப்ப அலை (+4.2°C)',
    gu: 'અતિશય હીટવેવ ઝટકો (+૪.૨°C)', bn: 'চরম তাপদাহের ধাক্কা (+৪.২°C)', pa: 'ਭਾਰੀ ਲੂ ਦਾ ਪ੍ਰਭਾਵ (+4.2°C)', kn: 'ತೀವ್ರ ಶಾಖದ ಅಲೆ (+4.2°C)',
    ml: 'തീവ്രമായ ഉഷ്ണതരംഗം (+4.2°C)', or: 'ଅତ୍ୟଧିକ ଅଂଶୁଘାତ ଝଟକା (+୪.୨°C)'
  },
  '14-Day Monsoon Break (-75% Rain)': {
    hi: '14-दिवसीय मानसून ब्रेक (-75% वर्षा)', mr: '१४ दिवसांचा मान्सून खंड (-७५% पाऊस)', te: '14-రోజుల రుతుపవనాల విరామం (-75% వర్షం)', ta: '14-நாள் பருவமழை இடைவெளி (-75% மழை)',
    gu: '૧૪-દિવસીય ચોમાસા વિરામ (-૭૫% વરસાદ)', bn: '১৪ দিনের বর্ষার বিরতি (-৭৫% বৃষ্টি)', pa: '14-ਦਿਨਾਂ ਦਾ ਮੌਨਸੂਨ ਬ੍ਰੇਕ (-75% ਮੀਂਹ)', kn: '14-ದಿನಗಳ ಮುಂಗಾರು ವಿರಾಮ (-75% ಮಳೆ)',
    ml: '14-ദിവസത്തെ മൺസൂൺ ഇടവേള (-75% മഴ)', or: '୧୪-ଦିନିଆ ମୌସୁମୀ ବିରାମ (-୭୫% ବର୍ଷା)'
  },
  'Flash Flood Deluge (+140mm)': {
    hi: 'अचानक बाढ़ / भारी जलप्लावन (+140mm)', mr: 'अचानक आलेला पूर / मुसळधार पाऊस (+१४०mm)', te: 'ఆకస్మిక వరద ప్రవాహం (+140mm)', ta: 'திடீர் வெள்ளப்பெருக்கு (+140mm)',
    gu: 'અચાનક પૂર / અતિવૃષ્ટિ (+૧૪૦mm)', bn: 'হঠাৎ বন্যা / প্রবল প্লাবন (+১৪০mm)', pa: 'ਅਚਾਨਕ ਹੜ੍ਹ / ਭਾਰੀ ਪਾਣੀ (+140mm)', kn: 'ಆಕಸ್ಮಿಕ ಪ್ರವಾಹ (+140mm)',
    ml: 'പെട്ടെന്നുണ്ടാകുന്ന പ്രളയം (+140mm)', or: 'ଆକସ୍ମିକ ବନ୍ୟା (+୧୪୦mm)'
  },
  'Aquifer Depletion Crisis': {
    hi: 'भूजल स्तर संकट (Aquifer Depletion)', mr: 'भूजल पातळी घसरण संकट', te: 'భూగర్భ జలాల కొరత సంక్షోభం', ta: 'நிலத்தடி நீர் பற்றாக்குறை நெருக்கடி',
    gu: 'ભૂગર્ભજળ સ્તર સંકટ', bn: 'ভূগর্ভস্থ জলের সংকট', pa: 'ਜ਼ਮੀਨਦੋਜ਼ ਪਾਣੀ ਦਾ ਸੰਕਟ', kn: 'ಅಂತರ್ಜಲ ಕುಸಿತದ ಬಿಕ್ಕಟ್ಟು',
    ml: 'ഭൂഗർഭജല ശോഷണ പ്രതിസന്ധി', or: 'ଭୂତଳ ଜଳସ୍ତର ସଙ୍କଟ'
  },
  // Explainable AI & ML Evaluation
  'Model Evaluation Metrics (IMD Baseline vs. NovaVarsha Hybrid)': {
    hi: 'मॉडल मूल्यांकन मेट्रिक्स (IMD बेसलाइन बनाम हाइब्रिड AI)', mr: 'मॉडेल मूल्यांकन मेट्रिक्स (IMD वि. हायब्रिड AI)', te: 'మోడల్ మూల్యాంకన కొలమానాలు (IMD vs హైబ్రిడ్ AI)', ta: 'மாதிரி மதிப்பீட்டு அளவீடுகள் (IMD vs ஹைப்ரிட் AI)',
    gu: 'મોડેલ મૂલ્યાંકન મેટ્રિક્સ (IMD વિરુદ્ધ હાઇબ્રિડ AI)', bn: 'মডেল মূল্যায়ন মেট্রিক্স (IMD বনাম হাইব্রিড AI)', pa: 'ਮਾਡਲ ਮੁਲਾਂਕਣ ਮੈਟ੍ਰਿਕਸ (IMD ਬਨਾਮ ਹਾਈਬ੍ਰਿਡ AI)', kn: 'ಮಾದರಿ ಮೌಲ್ಯಮಾಪನ ಮಾಪನಗಳು (IMD vs ಹೈಬ್ರಿಡ್ AI)',
    ml: 'മോഡൽ മൂല്യനിർണ്ണയ മെട്രിക്സ് (IMD vs ഹൈബ്രിഡ് AI)', or: 'ମଡେଲ୍ ମୂଲ୍ୟାଙ୍କନ ମେଟ୍ରିକ୍ସ (IMD ବନାମ ହାଇବ୍ରିଡ୍ AI)'
  },
  'F1 Score (Rain-Break Detection)': {
    hi: 'F1 स्कोर (वर्षा-विराम पहचान)', mr: 'F1 स्कोअर (पाऊस खंड अचूकता)', te: 'F1 స్కోరు (వర్ష విరామ గుర్తింపు)', ta: 'F1 மதிப்பெண் (மழை இடைவெளி கண்டறிதல்)',
    gu: 'F1 સ્કોર (વરસાદ વિરામ શોધ)', bn: 'F1 স্কোর (বৃষ্টি বিরতি সনাক্তকরণ)', pa: 'F1 ਸਕੋਰ (ਮੀਂਹ ਵਿਰਾਮ ਪਛਾਣ)', kn: 'F1 ಅಂಕ (ಮಳೆ ವಿರಾಮ ಪತ್ತೆ)',
    ml: 'F1 സ്കോർ (മഴ ഇടവേള തിരിച്ചറിയൽ)', or: 'F1 ସ୍କୋର (ବର୍ଷା ବିରାମ ଚିହ୍ନଟ)'
  },
  'R² Score (Precipitation Correlation)': {
    hi: 'R² स्कोर (वर्षा सहसंबंध)', mr: 'R² स्कोअर (पाऊस सहसंबंध)', te: 'R² స్కోరు (వర్షపాత సహసంబంధం)', ta: 'R² மதிப்பெண் (மழைப்பொழிவு தொடர்பு)',
    gu: 'R² સ્કોર (વરસાદ સહસંબંધ)', bn: 'R² স্কোর (বৃষ্টিপাতের পারস্পরিক সম্পর্ক)', pa: 'R² ਸਕੋਰ (ਮੀਂਹ ਦਾ ਆਪਸੀ ਸੰਬੰਧ)', kn: 'R² ಅಂಕ (ಮಳೆ ಪರಸ್ಪರ ಸಂಬಂಧ)',
    ml: 'R² സ്കോർ (മഴയളവ് പരസ്പരബന്ധം)', or: 'R² ସ୍କୋର (ବର୍ଷା ସହସମ୍ବନ୍ଧ)'
  },
  'Mean Absolute Error (MAE)': {
    hi: 'औसत निरपेक्ष त्रुटि (MAE)', mr: 'सरासरी अचूक त्रुटी (MAE)', te: 'సగటు సంపూర్ణ లోపం (MAE)', ta: 'சராசரி பிழை அளவு (MAE)',
    gu: 'સરેરાશ નિરપેક્ષ ત્રુટિ (MAE)', bn: 'গড় নিখুঁত ত্রুটি (MAE)', pa: 'ਔਸਤ ਪੂਰਨ ਗਲਤੀ (MAE)', kn: 'ಸರಾಸರಿ ಸಂಪೂರ್ಣ ದೋಷ (MAE)',
    ml: 'ശരാശരി പിശക് (MAE)', or: 'ହାରାହାରି ନିରପେକ୍ଷ ତ୍ରୁଟି (MAE)'
  },
  'Root Mean Square Error (RMSE)': {
    hi: 'रूट मीन स्क्वायर त्रुटि (RMSE)', mr: 'वर्गमूळ सरासरी त्रुटी (RMSE)', te: 'రూట్ మీన్ స్క్వేర్ లోపం (RMSE)', ta: 'வர்க்க மூல சராசரி பிழை (RMSE)',
    gu: 'રૂટ મીન સ્ક્વેર ત્રુટિ (RMSE)', bn: 'রুট মিন স্কয়ার ত্রুটি (RMSE)', pa: 'ਰੂਟ ਮੀਨ ਸਕੁਏਅਰ ਗਲਤੀ (RMSE)', kn: 'ವರ್ಗಮೂಲ ಸರಾಸರಿ ದೋಷ (RMSE)',
    ml: 'റൂട്ട് മീൻ സ്ക്വയർ പിശക് (RMSE)', or: 'ମୂଳ ହାରାହାରି ବର୍ଗ ତ୍ରୁଟି (RMSE)'
  },
  // Satellite Remote Sensing
  'Multi-Spectral Parcel Grid Inspector (Sentinel-2 10m)': {
    hi: 'मल्टी-स्पेक्ट्रल पार्सल ग्रिड विश्लेषक (सेंटिनल-2 10m)', mr: 'मल्टी-स्पेक्ट्रल पार्सल ग्रिड विश्लेषक (सेंटिनेल-२ १०मी)', te: 'మల్టీ-స్పెక్ట్రల్ పార్సెల్ గ్రిడ్ ఇన్‌స్పెక్టర్ (సెంటినెల్-2 10మీ)', ta: 'பல நிறமாலை பார்சல் கட்ட ஆய்வாளர் (சென்டினல்-2 10மீ)',
    gu: 'મલ્ટી-સ્પેક્ટ્રલ પાર્સલ ગ્રીડ નિરીક્ષક (સેન્ટિનેલ-૨ ૧૦મી)', bn: 'মাল্টি-স্পেকট্রাল পার্সেল গ্রিড পরিদর্শক (সেন্টিনেল-২ ১০মি)', pa: 'ਮਲਟੀ-ਸਪੈਕਟਰਲ ਪਾਰਸਲ ਗਰਿੱਡ ਇੰਸਪੈਕਟਰ (ਸੈਂਟੀਨਲ-2 10ਮੀਟਰ)', kn: 'ಮಲ್ಟಿ-ಸ್ಪೆಕ್ಟ್ರಲ್ ಪಾರ್ಸೆಲ್ ಗ್ರಿಡ್ ಪರಿವೀಕ್ಷಕ (ಸೆಂಟ್ನೆಲ್-2 10ಮೀ)',
    ml: 'മൾട്ടി-സ്പെക്ട്രൽ പാർസൽ ഗ്രിഡ് ഇൻസ്പെക്ടർ (സെന്റിനൽ-2 10മീ)', or: 'ମଲ୍ଟି-ସ୍ପେକ୍ଟ୍ରାଲ୍ ପାର୍ସେଲ୍ ଗ୍ରିଡ୍ ପରିଦର୍ଶକ (ସେଣ୍ଟିନେଲ୍-୨ ୧୦ମି)'
  },
  '90-Day NDVI & EVI Trajectory Curve': {
    hi: '90-दिवसीय NDVI एवं EVI वानस्पतिक वक्र', mr: '९०-दिवसीय NDVI व EVI वाढ आलेख', te: '90-రోజుల NDVI & EVI వృద్ధి వక్రరేఖ', ta: '90-நாள் NDVI & EVI தாவர வளர்ச்சி வரைபடம்',
    gu: '૯૦-દિવસીય NDVI અને EVI વનસ્પતિ ગ્રાફ', bn: '৯০-দিনের NDVI ও EVI উদ্ভিজ্জ বৃদ্ধির গ্রাফ', pa: '90-ਦਿਨਾਂ ਦਾ NDVI ਅਤੇ EVI ਵਾਧਾ ਗ੍ਰਾਫ', kn: '90-ದಿನಗಳ NDVI ಮತ್ತು EVI ಬೆಳವಣಿಗೆ ರೇಖೆ',
    ml: '90-ദിവസത്തെ NDVI, EVI വളർച്ചാ രേഖ', or: '୯୦-ଦିନିଆ NDVI ଓ EVI ଉଦ୍ଭିଦ ବୃଦ୍ଧି ଗ୍ରାଫ୍'
  },
  // Crop Analytics Suite
  'Rainfall Deficit Yield Sensitivity Curve': {
    hi: 'वर्षा कमी उपज संवेदनशीलता वक्र', mr: 'पाऊस तुटवडा उत्पन्न संवेदनशीलता आलेख', te: 'వర్షపాత లోటు దిగుబడి సున్నితత్వ వక్రరేఖ', ta: 'மழைப்பற்றாக்குறை மகசூல் உணர்திறன் வரைபடம்',
    gu: 'વરસાદ ઘટ ઉપજ સંવેદનશીલતા ગ્રાફ', bn: 'বৃষ্টিপাতের ঘাটতি ফলন সংবেদনশীলতা গ্রাফ', pa: 'ਮੀਂਹ ਦੀ ਘਾਟ ਝਾੜ ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਗ੍ਰਾਫ', kn: 'ಮಳೆ ಕೊರತೆ ಇಳುವರಿ ಸೂಕ್ಷ್ಮತೆ ರೇಖೆ',
    ml: 'മഴക്കുറവ് വിളവ് സംവേദനക്ഷമതാ രേഖ', or: 'ବର୍ଷା ଅଭାବ ଅମଳ ସମ୍ବେଦନଶୀଳତା ଗ୍ରାଫ୍'
  },
  'Growing Degree Days (GDD) Thermal Stages': {
    hi: 'ग्रोइंग डिग्री डेज़ (GDD) तापीय परिपक्वता चरण', mr: 'वाढ अंश दिवस (GDD) तापमान टप्पे', te: 'గ్రోయింగ్ డిగ్రీ డేస్ (GDD) ఉష్ణోగ్రత దశలు', ta: 'வளர்ச்சி டிகிரி நாட்கள் (GDD) வெப்ப நிலைகள்',
    gu: 'ગ્રોઇંગ ડિગ્રી ડેઝ (GDD) તાપમાન તબક્કા', bn: 'গ্রোয়িং ডিগ্রি ডেজ (GDD) তাপমাত্রার পর্যায়', pa: 'ਗਰੋਇੰਗ ਡਿਗਰੀ ਡੇਅਜ਼ (GDD) ਤਾਪਮਾਨ ਪੜਾਅ', kn: 'ಬೆಳವಣಿಗೆಯ ಡಿಗ್ರಿ ದಿನಗಳು (GDD) ಹಂತಗಳು',
    ml: 'ഗ്രോയിംഗ് ഡിഗ്രി ഡേയ്സ് (GDD) ഘട്ടങ്ങൾ', or: 'ଗ୍ରୋଇଂ ଡିଗ୍ରୀ ଡେଜ୍ (GDD) ତାପମାତ୍ରା ପର୍ଯ୍ୟାୟ'
  },
  '10-Year Government MSP Price Trend (₹/Quintal)': {
    hi: '10-वर्षीय सरकारी न्यूनतम समर्थन मूल्य (MSP) रुझान (₹/क्विंटल)', mr: '१०-वर्षीय हमीभाव (MSP) कल (₹/क्विंटल)', te: '10-సంవత్సరాల కనీస మద్దతు ధర (MSP) ట్రెండ్ (₹/క్వింటాల్)', ta: '10-ஆண்டு குறைந்தபட்ச ஆதரவு விலை (MSP) போக்கு (₹/குவிண்டால்)',
    gu: '૧૦-વર્ષીય લઘુત્તમ ટેકાના ભાવ (MSP) વલણ (₹/ક્વિન્ટલ)', bn: '১০-বছরের ন্যূনতম সহায়ক মূল্য (MSP) গতিধারা (₹/কুইন্টাল)', pa: '10-ਸਾਲਾਂ ਦਾ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (MSP) ਰੁਝਾਨ (₹/ਕਵਿੰਟਲ)', kn: '10-ವರ್ಷಗಳ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ (MSP) ಪ್ರವೃತ್ತಿ (₹/ಕ್ವಿಂಟಾಲ್)',
    ml: '10-വർഷത്തെ താങ്ങുവില (MSP) പ്രവണത (₹/ക്വിന്റൽ)', or: '୧୦-ବର୍ଷିଆ ସରକାରୀ ସର୍ବନିମ୍ନ ସହାୟକ ମୂଲ୍ୟ (MSP) ଟ୍ରେଣ୍ଡ (₹/କ୍ୱିଣ୍ଟାଲ)'
  },
  // Role & Warning Alerts
  'Restricted Access: District Disaster Officer & Admin Only': {
    hi: 'प्रतिबंधित पहुंच: केवल जिला आपदा अधिकारी एवं व्यवस्थापक', mr: 'प्रतिबंधित प्रवेश: केवळ जिल्हा आपत्ती अधिकारी आणि ॲडमिन', te: 'పరిమిత ప్రాప్యత: జిల్లా విపత్తు అధికారి & అడ్మిన్ మాత్రమే', ta: 'வரையறுக்கப்பட்ட அணுகல்: மாவட்ட பேரிடர் அதிகாரி மற்றும் நிர்வாகிக்கு மட்டுமே',
    gu: 'પ્રતિબંધિત ઍક્સેસ: માત્ર જિલ્લા આપત્તિ અધિકારી અને એડમિન', bn: 'নিয়ন্ত্রিত প্রবেশাধিকার: শুধুমাত্র জেলা দুর্যোগ কর্মকর্তা ও প্রশাসক', pa: 'ਸੀਮਤ ਪਹੁੰਚ: ਸਿਰਫ਼ ਜ਼ਿਲ੍ਹਾ ਆਫ਼ਤ ਅਧਿਕਾਰੀ ਅਤੇ ਪ੍ਰਸ਼ਾਸਕ', kn: 'ನಿರ್ಬಂಧಿತ ಪ್ರವೇಶ: ಜಿಲ್ಲಾ ವಿಪತ್ತು ಅಧಿಕಾರಿ ಮತ್ತು ನಿರ್ವಾಹಕರಿಗೆ ಮಾತ್ರ',
    ml: 'നിയന്ത്രിത പ്രവേശനം: ജില്ലാ ദുരന്ത നിവാരണ ഓഫീസർക്കും അഡ്മിനും മാത്രം', or: 'ପ୍ରତିବନ୍ଧିତ ପ୍ରବେଶ: କେବଳ ଜିଲ୍ଲା ବିପର୍ଯ୍ୟୟ ଅଧିକାରୀ ଓ ଆଡମିନ୍'
  },
  'Dispatch Cell-Broadcast Emergency SMS': {
    hi: 'सेल-ब्रॉडकास्ट आपातकालीन एसएमएस भेजें', mr: 'सेल-ब्रॉडकास्ट आपत्कालीन एसएमएस पाठवा', te: 'సెల్-బ్రాడ్‌కాస్ట్ అత్యవసర SMS పంపండి', ta: 'அவசர கால செல்-ஒளிபரப்பு SMS அனுப்புங்கள்',
    gu: 'સેલ-બ્રોડકાસ્ટ કટોકટી SMS મોકલો', bn: 'সেল-সম্প্রচার জরুরি এসএমএস পাঠান', pa: 'ਐਮਰਜੈਂਸੀ ਸੈੱਲ-ਬ੍ਰੌਡਕਾਸਟ SMS ਭੇਜੋ', kn: 'ತುರ್ತು ಸೆಲ್-ಪ್ರಸಾರ SMS ಕಳುಹಿಸಿ',
    ml: 'അടിയന്തര സെൽ-ബ്രോഡ്കാസ്റ്റ് SMS അയക്കുക', or: 'ସେଲ୍-ବ୍ରଡକାଷ୍ଟ ଜରୁରୀକାଳୀନ SMS ପଠାନ୍ତୁ'
  },
  'Trigger Acoustic Siren Test': {
    hi: 'ध्वनि सायरन परीक्षण सक्रिय करें', mr: 'ध्वनी सायरन चाचणी सुरू करा', te: 'శబ్ద సైరన్ పరీక్షను ప్రారంభించండి', ta: 'ஒலி எச்சரிக்கை சைரன் சோதனை தொடங்கு',
    gu: 'ધ્વનિ સાયરન પરીક્ષણ શરૂ કરો', bn: 'শব্দ সাইরেন পরীক্ষা সক্রিয় করুন', pa: 'ਧੁਨੀ ਸਾਇਰਨ ਟੈਸਟ ਚਲਾਓ', kn: 'ಶ್ರವ್ಯ ಸೈರನ್ ಪರೀಕ್ಷೆ ನಡೆಸಿ',
    ml: 'ശബ്ദ സൈറൺ പരിശോധന ആരംഭിക്കുക', or: 'ଶବ୍ଦ ସାଇରନ୍ ପରୀକ୍ଷା ସକ୍ରିୟ କରନ୍ତୁ'
  },

  // ── Precision Crop Analytics & Agro-Phenology Lab ──
  'Precision Crop Analytics': {
    hi: 'सटीक फसल विश्लेषण', mr: 'अचूक पीक विश्लेषण', te: 'ఖచ్చితమైన పంట విశ్లేషణ', ta: 'துல்லியமான பயிர் பகுப்பாய்வு',
    gu: 'ચોક્કસ પાક વિશ્લેષણ', bn: 'নির্ভুল ফসল বিশ্লেষণ', pa: 'ਸਟੀਕ ਫਸਲ ਵਿਸ਼ਲੇਸ਼ਣ', kn: 'ನಿಖರ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ',
    ml: 'കൃത്യമായ വിള വിശകലനം', or: 'ସଠିକ୍ ଫସଲ ବିଶ୍ଳେଷଣ'
  },
  '10-Year Agro-Climatic Data & Phenology': {
    hi: '10-वर्षीय कृषि-जलवायु डेटा एवं फेनोलॉजी', mr: '१०-वर्षीय हवामान डेटा व वाढ टप्पे', te: '10-సంవత్సరాల వ్యవసాయ-వాతావరణ డేటా & ఫెనాలజీ', ta: '10-ஆண்டு வேளாண்-காலநிலை தரவு & பயிர் வளர்ச்சி நிலைகள்',
    gu: '૧૦-વર્ષીય કૃષિ-આબોહવા ડેટા અને ફિનોલોજી', bn: '১০-বছরের কৃষি-জলবায়ু তথ্য ও শারীরবৃত্তীয় পর্যায়', pa: '10-ਸਾਲਾ ਖੇਤੀਬਾੜੀ-ਜਲਵਾਯੂ ਡੇਟਾ ਅਤੇ ਫਿਨੋਲੋਜੀ', kn: '10-ವರ್ಷಗಳ ಕೃಷಿ-ಹವಾಮಾನ ಡೇಟಾ & ಫೆನಾಲಜಿ',
    ml: '10-വർഷത്തെ കാർഷിക-കാലാവസ്ഥാ വിവരങ്ങളും ഫിനോളജിയും', or: '୧୦-ବର୍ଷିଆ କୃଷି-ଜଳବାୟୁ ତଥ୍ୟ ଓ ଫସଲ ବିକାଶ ପର୍ଯ୍ୟାୟ'
  },
  'Comparative Crop Analytics & Agro-Phenology Lab': {
    hi: 'तुलनात्मक फसल विश्लेषण एवं कृषि-फेनोलॉजी लैब', mr: 'तुलनात्मक पीक विश्लेषण व कृषी-फेनॉलॉजी लॅब', te: 'తులనాత్మక పంట విశ్లేషణ & ఆగ్రో-ఫెనాలజీ ల్యాబ్', ta: 'ஒப்பீட்டு பயிர் பகுப்பாய்வு மற்றும் வேளாண்-வளர்ச்சி ஆய்வகம்',
    gu: 'તુલનાત્મક પાક વિશ્લેષણ અને કૃષિ-ફિનોલોજી લેબ', bn: 'তুলনামূলক ফসল বিশ্লেষণ ও কৃষি-শারীরবৃত্তীয় ল্যাব', pa: 'ਤੁਲਨਾਤਮਕ ਫਸਲ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਖੇਤੀਬਾੜੀ-ਫੀਨੋਲੋਜੀ ਲੈਬ', kn: 'ತೌಲನಿಕ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ & ಕೃಷಿ-ಫೆನಾಲಜಿ ಲ್ಯಾಬ್',
    ml: 'താരതമ്യ വിള വിശകലനവും അഗ്രോ-ഫിനോളജി ലാബും', or: 'ତୁଳନାତ୍ମକ ଫସଲ ବିଶ୍ଳେଷଣ ଓ କୃଷି-ଫେନୋଲୋଜି ଲ୍ୟାବ୍'
  },
  'Select any crop to analyze yield curves, thermal GDD accumulation, soil drawdown, MSP progression, and pest risks.': {
    hi: 'उपज वक्र, तापीय GDD संचय, मृदा जल निकासी, MSP वृद्धि और कीट जोखिमों का विश्लेषण करने के लिए किसी भी फसल का चयन करें।',
    mr: 'उत्पन्न वक्र, उष्णता GDD संचय, मातीतील ओलावा, हमीभाव प्रगती आणि कीड धोके तपासण्यासाठी कोणतेही पीक निवडा.',
    te: 'దిగుబడి వక్రతలు, ఉష్ణోగ్రత GDD సంచయం, నేల తేమ క్షీణత, MSP పురోగతి మరియు తెగులు ప్రమాదాలను విశ్లేషించడానికి ఏదైనా పంటను ఎంచుకోండి.',
    ta: 'மகசூல் வளைவுகள், வெப்ப GDD சேமிப்பு, மண் ஈரப்பதம், MSP வளர்ச்சி மற்றும் பூச்சி அபாயங்களை பகுப்பாய்வு செய்ய ஏதேனும் பயிரைத் தேர்ந்தெடுக்கவும்.',
    gu: 'ઉપજ ગ્રાફ, તાપમાન GDD સંચય, જમીન ભેજ ઘટાડો, MSP પ્રગતિ અને જીવાત જોખમોનું વિશ્લેષણ કરવા કોઈપણ પાક પસંદ કરો.',
    bn: 'ফলন বক্ররেখা, তাপীয় GDD সঞ্চয়, মাটির আর্দ্রতা হ্রাস, MSP বৃদ্ধি এবং কীটপতঙ্গের ঝুঁকি বিশ্লেষণ করতে যেকোনো ফসল নির্বাচন করুন।',
    pa: 'ਝਾੜ ਦੇ ਗ੍ਰਾਫ, ਥਰਮਲ GDD ਸੰਚਵ, ਮਿੱਟੀ ਦੀ ਨਮੀ ਵਿੱਚ ਕਮੀ, MSP ਵਾਧੇ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਜੋਖਮ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਕੋਈ ਵੀ ਫਸਲ ਚੁਣੋ।',
    kn: 'ಇಳುವರಿ ವಕ್ರರೇಖೆಗಳು, ಉಷ್ಣ GDD ಶೇಖರಣೆ, ಮಣ್ಣಿನ ತೇವಾಂಶ ಇಳಿಕೆ, MSP ಪ್ರಗತಿ ಮತ್ತು ಕೀಟ ಬಾಧೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಯಾವುದೇ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    ml: 'വിളവ് വക്രങ്ങൾ, താപ GDD ശേഖരണം, മണ്ണിലെ ഈർപ്പക്കുറവ്, MSP പുരോഗതി, കീട സാധ്യതകൾ എന്നിവ വിശകലനം ചെയ്യാൻ ഏതെങ്കിലും വിള തിരഞ്ഞെടുക്കുക.',
    or: 'ଅମଳ ଗ୍ରାଫ୍, ତାପଜ GDD ସଞ୍ଚୟ, ମାଟି ଓଦା ହ୍ରାସ, MSP ବୃଦ୍ଧି ଏବଂ କୀଟ ବିପଦ ବିଶ୍ଳେଷଣ କରିବାକୁ ଯେକୌଣସି ଫସଲ ଚୟନ କରନ୍ତୁ।'
  },
  'Select Active Crop for Multi-Graph Analysis:': {
    hi: 'मल्टी-ग्राफ विश्लेषण के लिए सक्रिय फसल चुनें:', mr: 'मल्टी-ग्राफ विश्लेषणासाठी सक्रिय पीक निवडा:', te: 'బహుళ-గ్రాఫ్ విశ్లేషణ కోసం క్రియాశీల పంటను ఎంచుకోండి:', ta: 'பல வரைபட பகுப்பாய்விற்கு செயலில் உள்ள பயிரைத் தேர்ந்தெடுக்கவும்:',
    gu: 'મલ્ટી-ગ્રાફ વિશ્લેષણ માટે સક્રિય પાક પસંદ કરો:', bn: 'মাল্টি-গ্রাফ বিশ্লেষণের জন্য সক্রিয় ফসল বেছে নিন:', pa: 'ਮਲਟੀ-ਗ੍ਰਾਫ ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਸਰਗਰਮ ਫਸਲ ਚੁਣੋ:', kn: 'ಬಹು-ರೇಖಾಚಿತ್ರ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಸಕ್ರಿಯ ಬೆಳೆಯನ್ನು ಆರಿಸಿ:',
    ml: 'മൾട്ടി-ഗ്രാഫ് വിശകലനത്തിനായി വിള തിരഞ്ഞെടുക്കുക:', or: 'ମଲ୍ଟି-ଗ୍ରାଫ୍ ବିଶ୍ଳେଷଣ ପାଇଁ ସକ୍ରିୟ ଫସଲ ବାଛନ୍ତୁ:'
  },
  'Scientific Taxonomy': {
    hi: 'वैज्ञानिक वर्गीकरण', mr: 'वैज्ञानिक वर्गीकरण', te: 'శాస్త్రీಯ వర్గీకరణ', ta: 'அறிவியல் வகைப்பாடு',
    gu: 'વૈજ્ઞાનિક વર્ગીકરણ', bn: 'বৈজ্ঞানিক শ্রেণিবিন্যাস', pa: 'ਵਿਗਿਆਨਕ ਵਰਗੀਕਰਨ', kn: 'ವೈಜ್ಞಾನಿಕ ವರ್ಗೀಕರಣ',
    ml: 'ശാസ്ത്രീയ വർഗ്ഗീകരണം', or: 'ବୈଜ୍ଞାନିକ ବର୍ଗୀକରଣ'
  },
  'Graph 1: Yield vs. Rainfall Sensitivity Response': {
    hi: 'ग्राफ 1: वर्षा बनाम उपज संवेदनशीलता प्रतिक्रिया', mr: 'आलेख १: पाऊस वि. उत्पन्न संवेदनशीलता प्रतिसाद', te: 'గ్రాఫ్ 1: వర్షపాతం vs దిగుబడి సున్నితత్వ ప్రతిస్పందన', ta: 'வரைபடம் 1: மழைப்பொழிவு vs மகசூல் உணர்திறன் எதிர்வினை',
    gu: 'ગ્રાફ ૧: વરસાદ વિરુદ્ધ ઉપજ સંવેદનશીલતા પ્રતિભાવ', bn: 'গ্রাফ ১: বৃষ্টিপাত বনাম ফলন সংবেদনশীলতা প্রতিক্রিয়া', pa: 'ਗ੍ਰਾਫ 1: ਮੀਂਹ ਬਨਾਮ ਝਾੜ ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਪ੍ਰਤੀਕਿਰਿਆ', kn: 'ರೇಖಾಚಿತ್ರ 1: ಮಳೆ vs ಇಳುವರಿ ಸೂಕ್ಷ್ಮತೆ ಪ್ರತಿಕ್ರಿಯೆ',
    ml: 'ഗ്രാഫ് 1: മഴയും വിളവ് സംവേദനക്ഷമതാ പ്രതികരണവും', or: 'ଗ୍ରାଫ୍ ୧: ବର୍ଷା ବନାମ ଅମଳ ସମ୍ବେଦନଶୀଳତା ପ୍ରତିକ୍ରିୟା'
  },
  'Graph 2: Thermal Heat Units (GDD) Accumulation': {
    hi: 'ग्राफ 2: तापीय ताप इकाइयाँ (GDD) संचय', mr: 'आलेख २: उष्णता अंश दिवस (GDD) संचय', te: 'గ్రాఫ్ 2: ఉష్ణ యూనిట్లు (GDD) సంచయం', ta: 'வரைபடம் 2: வெப்ப அலகுகள் (GDD) சேமிப்பு',
    gu: 'ગ્રાફ ૨: થર્મલ હીટ યુનિટ્સ (GDD) સંચય', bn: 'গ্রাফ ২: তাপীয় একক (GDD) সঞ্চয়', pa: 'ਗ੍ਰਾਫ 2: ਥਰਮਲ ਹੀਟ ਯੂਨਿਟਸ (GDD) ਸੰਚਵ', kn: 'ರೇಖಾಚಿತ್ರ 2: ಉಷ್ಣ ಶಾಖ ಘಟಕಗಳ (GDD) ಶೇಖರಣೆ',
    ml: 'ഗ്രാഫ് 2: താപ യൂണിറ്റുകളുടെ (GDD) ശേഖരണം', or: 'ଗ୍ରାଫ୍ ୨: ତାପଜ ୟୁନିଟ୍ (GDD) ସଞ୍ଚୟ'
  },
  'Graph 3: Crop Evapotranspiration (ETc) & Soil Moisture Drawdown': {
    hi: 'ग्राफ 3: फसल वाष्पोत्सर्जन (ETc) एवं मृदा नमी निकासी', mr: 'आलेख ३: पीक बाष्पीभवन (ETc) व मातीतील ओलावा घट', te: 'గ్రాఫ్ 3: పంట బాష్పోత్సేకం (ETc) & నేల తేమ క్షీణత', ta: 'வரைபடம் 3: பயிர் ஆவியாதல் (ETc) மற்றும் மண் ஈரப்பதம் குறைவு',
    gu: 'ગ્રાફ ૩: પાક બાષ્પીભવન (ETc) અને જમીન ભેજ ઘટાડો', bn: 'গ্রাফ ৩: ফসলের বাষ্পীভবন (ETc) ও মাটির আর্দ্রতা হ্রাস', pa: 'ਗ੍ਰਾਫ 3: ਫਸਲੀ ਵਾਸ਼ਪੀਕਰਨ (ETc) ਅਤੇ ਮਿੱਟੀ ਦੀ ਨਮੀ ਵਿੱਚ ਕਮੀ', kn: 'ರೇಖಾಚಿತ್ರ 3: ಬೆಳೆ ಬಾಷ್ಪೀಕರಣ (ETc) & ಮಣ್ಣಿನ ತೇವಾಂಶ ಇಳಿಕೆ',
    ml: 'ഗ്രാഫ് 3: വിള ബാഷ്പീകരണവും (ETc) മണ്ണിലെ ഈർപ്പക്കുറവും', or: 'ଗ୍ରାଫ୍ ୩: ଫସଲ ବାଷ୍ପୀଭବନ (ETc) ଓ ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ହ୍ରାସ'
  },
  'Graph 4: 10-Year Historical MSP Price vs Yield Trend': {
    hi: 'ग्राफ 4: 10-वर्षीय ऐतिहासिक न्यूनतम समर्थन मूल्य (MSP) बनाम उपज रुझान', mr: 'आलेख ४: १०-वर्षीय हमीभाव (MSP) वि. उत्पन्न कल', te: 'గ్రాఫ్ 4: 10-సంవత్సరాల చారిత్రక MSP ధర vs దిగుబడి ట్రెండ్', ta: 'வரைபடம் 4: 10-ஆண்டு குறைந்தபட்ச ஆதரவு விலை (MSP) vs மகசூல் போக்கு',
    gu: 'ગ્રાફ ૪: ૧૦-વર્ષીય ઐતિહાસિક ટેકાના ભાવ (MSP) વિરુદ્ધ ઉપજ વલણ', bn: 'গ্রাফ ৪: ১০-বছরের ঐতিহাসিক MSP মূল্য বনাম ফলন গতিধারা', pa: 'ਗ੍ਰਾਫ 4: 10-ਸਾਲਾ ਇਤਿਹਾਸਕ MSP ਮੁੱਲ ਬਨਾਮ ਝਾੜ ਰੁਝਾਨ', kn: 'ರೇಖಾಚಿತ್ರ 4: 10-ವರ್ಷಗಳ ಐತಿಹಾಸಿಕ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ (MSP) vs ಇಳುವರಿ ಪ್ರವೃತ್ತಿ',
    ml: 'ഗ്രാഫ് 4: 10-വർഷത്തെ താങ്ങുവിലയും (MSP) വിളവ് പ്രവണതയും', or: 'ଗ୍ରାଫ୍ ୪: ୧୦-ବର୍ଷିଆ ଐତିହାସିକ MSP ମୂଲ୍ୟ ବନାମ ଅମଳ ଧାରା'
  },
  'Graph 5: Pest & Pathogen Risk Threshold vs Micro-climate': {
    hi: 'ग्राफ 5: कीट एवं रोगजनक जोखिम सीमा बनाम सूक्ष्म-जलवायु', mr: 'आलेख ५: कीड व रोग धोका मर्यादा वि. सूक्ष्म-हवामान', te: 'గ్రాఫ్ 5: తెగులు & వ్యాధికారక ప్రమాద పరిమితి vs సూక్ష్మ-వాతావరణం', ta: 'வரைபடம் 5: பூச்சி மற்றும் நோய்க்கிருமி ஆபத்து வரம்பு vs நுண்-காலநிலை',
    gu: 'ગ્રાફ ૫: જીવાત અને રોગકારક જોખમ મર્યાદા વિરુદ્ધ સૂક્ષ્મ-આબોહવા', bn: 'গ্রাফ ৫: কীটপতঙ্গ ও জীবাণু ঝুঁকি সীমা বনাম ক্ষুদ্র-জলবায়ু', pa: 'ਗ੍ਰਾਫ 5: ਕੀੜੇ ਅਤੇ ਰੋਗ-ਜਨਕ ਜੋਖਮ ਸੀਮਾ ਬਨਾਮ ਸੂਖਮ-ਜਲਵਾਯੂ', kn: 'ರೇಖಾಚಿತ್ರ 5: ಕೀಟ ಮತ್ತು ರೋಗಾಣು ಅಪಾಯದ ಮಿತಿ vs ಸೂಕ್ಷ್ಮ-ಹವಾಮಾನ',
    ml: 'ഗ്രാഫ് 5: കീട-രോഗാണു സാധ്യതയും സൂക്ഷ്മ-കാലാവസ്ഥയും', or: 'ଗ୍ରାଫ୍ ୫: କୀଟ ଓ ରୋଗ ବିପଦ ସୀମା ବନାମ ସୂକ୍ଷ୍ମ-ଜଳବାୟୁ'
  },
  'Historical Precipitation Anomaly (10-Yr Climatology vs Current)': {
    hi: 'ऐतिहासिक वर्षा विसंगति (10-वर्षीय जलवायु बनाम वर्तमान)', mr: 'ऐतिहासिक पाऊस विसंगती (१०-वर्षीय हवामान वि. चालू)', te: 'చారిత్రక వర్షపాత అసమానత (10-సంవత్సరాల వాతావరణం vs ప్రస్తుత)', ta: 'வரலாற்று மழைப்பொழிவு மாறுபாடு (10-ஆண்டு சராசரி vs தற்போதைய)',
    gu: 'ઐતિહાસિક વરસાદ વિસંગતતા (૧૦-વર્ષીય આબોહવા વિરુદ્ધ વર્તમાન)', bn: 'ঐতিহাসিক বৃষ্টিপাতের অসঙ্গতি (১০-বছরের গড় বনাম বর্তমান)', pa: 'ਇਤਿਹਾਸਕ ਮੀਂਹ ਦਾ ਪਾੜਾ (10-ਸਾਲਾ ਜਲਵਾਯੂ ਬਨਾਮ ਮੌਜੂਦਾ)', kn: 'ಐತಿಹಾಸಿಕ ಮಳೆ ವ್ಯತ್ಯಾಸ (10-ವರ್ಷಗಳ ಹವಾಮಾನ vs ಪ್ರಸ್ತುತ)',
    ml: 'ചരിത്രപരമായ മഴ വ്യതിയാനം (10-വർഷത്തെ ശരാശരി vs നിലവിലെ)', or: 'ଐତିହାସିକ ବର୍ଷା ଅସଙ୍ଗତି (୧୦-ବର୍ଷିଆ ଜଳବାୟୁ ବନାମ ବର୍ତ୍ତମାନ)'
  },

  // ── Indian Crop Names ──
  'Paddy (Rice)': { hi: 'धान (चावल)', mr: 'भात (तांदूळ)', te: 'వరి (బియ్యం)', ta: 'நெல் (அரிசி)', gu: 'ડાંગર (ચોખા)', bn: 'ধান (চাল)', pa: 'ਝੋਨਾ (ਚਾਵਲ)', kn: 'ಭತ್ತ (ಅಕ್ಕಿ)', ml: 'നെല്ല് (അരി)', or: 'ଧାନ (ଚାଉଳ)' },
  'Paddy (Rice - Drought Hardy)': { hi: 'धान (सूखा-सहनशील)', mr: 'भात (दुष्काळ-सहनशील)', te: 'వరి (కరువు తట్టుకునేది)', ta: 'நெல் (வறட்சி தாங்கும்)', gu: 'ડાંગર (દુષ્કાળ-પ્રતિરોધક)', bn: 'ধান (খরা-সহনশীল)', pa: 'ਝੋਨਾ (ਸੋਕਾ-ਸਹਿਣਸ਼ੀਲ)', kn: 'ಭತ್ತ (ಬರ-ನಿರೋಧಕ)', ml: 'നെല്ല് (വരൾച്ചയെ അതിജീവിക്കുന്നത്)', or: 'ଧାନ (ମରୁଡ଼ି-ସହନଶୀଳ)' },
  'Wheat': { hi: 'गेहूं', mr: 'गहू', te: 'గోధుమలు', ta: 'கோதுமை', gu: 'ઘઉં', bn: 'গম', pa: 'ਕਣਕ', kn: 'ಗೋಧಿ', ml: 'ഗോതമ്പ്', or: 'ଗହମ' },
  'Wheat (Biofortified)': { hi: 'गेहूं (जैव-संवर्धित)', mr: 'गहू (जैव-समृद्ध)', te: 'గోధుమలు (బయోఫోర్టిఫైడ్)', ta: 'கோதுமை (ஊட்டச்சத்து செறிவூட்டப்பட்டது)', gu: 'ઘઉં (બાયોફોર્ટિફાઇડ)', bn: 'গম (পুষ্টিসমৃদ্ধ)', pa: 'ਕਣਕ (ਬਾਇਓਫੋਰਟੀਫਾਈਡ)', kn: 'ಗೋಧಿ (ಪೌಷ್ಟಿಕಾಂಶ ಯುಕ್ತ)', ml: 'ഗോതമ്പ് (പോഷകസമൃദ്ധം)', or: 'ଗହମ (ପୁଷ୍ଟିକର)' },
  'Maize (Hybrid Corn)': { hi: 'मक्का (संकर भुट्टा)', mr: 'मका (हायब्रिड)', te: 'మొక్కజొన్న (హైబ్రిడ్)', ta: 'மக்காச்சோளம் (வீரிய ரகம்)', gu: 'મકાઈ (હાઇબ્રિડ)', bn: 'ভুট্টা (হাইব্রিড)', pa: 'ਮੱਕੀ (ਹਾਈਬ੍ਰਿਡ)', kn: 'ಮೆಕ್ಕೆಜೋಳ (ಹೈಬ್ರಿಡ್)', ml: 'മക്കച്ചോളം (ഹൈബ്രിഡ്)', or: 'ମକା (ହାଇବ୍ରିଡ୍)' },
  'Pearl Millet (Bajra)': { hi: 'बाजरा', mr: 'बाजरी', te: 'సజ్జలు', ta: 'கம்பு', gu: 'બાજરી', bn: 'বাজরা', pa: 'ਬਾਜਰਾ', kn: 'ಸಜ್ಜೆ', ml: 'കമ്പം', or: 'ବାଜରା' },
  'Soybean': { hi: 'सोयाबीन', mr: 'सोयाबीन', te: 'సోయాబీన్', ta: 'சோயாபீன்', gu: 'સોયાબીન', bn: 'সয়াবিন', pa: 'ਸੋਇਆਬੀਨ', kn: 'ಸೋಯಾಬೀನ್', ml: 'സോയാബീൻ', or: 'ସୋୟାବିନ୍' },
  'Cotton (Bt)': { hi: 'कपास (बीटी)', mr: 'कापूस (बीटी)', te: 'పత్తి (బీటీ)', ta: 'பருத்தி (Bt)', gu: 'કપાસ (બીટી)', bn: 'তুলা (বিটি)', pa: 'ਨਰਮਾ/ਕਪਾਹ (ਬੀਟੀ)', kn: 'ಹತ್ತಿ (ಬಿಟಿ)', ml: 'പരുത്തി (ബിടി)', or: 'କପା (ବିଟି)' },
  'Chickpea (Bengal Gram)': { hi: 'चना', mr: 'हरभरा (चना)', te: 'శనగలు', ta: 'கொண்டைக்கடலை', gu: 'ચણા', bn: 'ছোলা', pa: 'ਛੋਲੇ', kn: 'ಕಡಲೆ', ml: 'കടല', or: 'ବୁଟ/ଚଣା' },
  'Mustard / Rapeseed': { hi: 'सरसों / राई', mr: 'मोहरी', te: 'ఆవాలు', ta: 'கடுகு', gu: 'રાયડો / સરસવ', bn: 'সরিষা', pa: 'ਸਰ੍ਹੋਂ / ਰਾਈ', kn: 'ಸಾಸಿವೆ', ml: 'കടുക്', or: 'ସୋରିଷ' },
  'Groundnut (Peanut)': { hi: 'मूंगफली', mr: 'भुईमूग', te: 'వేరుశనగ', ta: 'வேர்க்கடலை', gu: 'મગફળી', bn: 'চীনাবাদাম', pa: 'ਮੂੰਗਫਲੀ', kn: 'ಕಡಲೆಕಾಯಿ', ml: 'നിലക്കടല', or: 'ଚିନାବାଦାମ' },
  'Sugarcane': { hi: 'गन्ना', mr: 'ऊस', te: 'చెరకు', ta: 'கரும்பு', gu: 'શેરડી', bn: 'আখ', pa: 'ਗੰਨਾ', kn: 'ಕಬ್ಬು', ml: 'കരിമ്പ്', or: 'ଆଖୁ' },

  // ── Phenological Stages & Agronomic Labels ──
  'Germination (Day 1–10)': { hi: 'अंकुरण (दिन 1–10)', mr: 'उगवण (दिवस १–१०)', te: 'మొలకెత్తడం (రోజు 1–10)', ta: 'முளைப்பு (நாள் 1–10)', gu: 'અંકુરણ (દિવસ ૧–૧૦)', bn: 'অঙ্কুরোদগম (দিন ১–১০)', pa: 'ਪੁੰਗਰਨਾ (ਦਿਨ 1–10)', kn: 'ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ (ದಿನ 1–10)', ml: 'മുളയ്ക്കൽ (ദിവസം 1–10)', or: 'ଗଜା ହେବା (ଦିନ ୧–୧୦)' },
  'Tillering / Branching (Day 11–40)': { hi: 'कल्ले फूटना / शाखाएं (दिन 11–40)', mr: 'फु फुटणे / फांद्या (दिवस ११–४०)', te: 'పిలకలు వేయడం (రోజు 11–40)', ta: 'தூர்கட்டுதல் (நாள் 11–40)', gu: 'પીલા ફૂટવા (દિવસ ૧૧–૪૦)', bn: 'কুশি গজানো (দিন ১১–৪০)', pa: 'ਫੁਟਾਰਾ (ਦਿਨ 11–40)', kn: 'ಕವಲೊಡೆಯುವಿಕೆ (ದಿನ 11–40)', ml: 'കൂമ്പ് വിരിയൽ (ദിവസം 11–40)', or: 'ପିଲ ବାହାରିବା (ଦିନ ୧୧–୪୦)' },
  'Stem Elongation (Day 41–65)': { hi: 'तना वृद्धि (दिन 41–65)', mr: 'कांडी वाढ (दिवस ४१–६५)', te: 'కాండం పొడవు పెరగడం (రోజు 41–65)', ta: 'தண்டு நீட்சி (நாள் 41–65)', gu: 'દાંડી લંબાવવી (દિવસ ૪૧–૬૫)', bn: 'কাণ্ড বৃদ্ধি (দিন ৪১–৬৫)', pa: 'ਤਣੇ ਦਾ ਵਾਧਾ (ਦਿਨ 41–65)', kn: 'ಕಾಂಡ ವಿಸ್ತರಣೆ (ದಿನ 41–65)', ml: 'തണ്ട് വളർച്ച (ദിവസം 41–65)', or: 'କାଣ୍ଡ ବୃଦ୍ଧି (ଦିନ ୪୧–୬୫)' },
  'Anthesis / Flowering (Day 66–85)': { hi: 'फूल आना / परागण (दिन 66–85)', mr: 'फुलोरा / परागीभवन (दिवस ६६–८५)', te: 'పూత దశ (రోజు 66–85)', ta: 'பூக்கும் நிலை (நாள் 66–85)', gu: 'ફૂલ આવવા (દિવસ ૬૬–૮૫)', bn: 'ফুল ফোটার পর্যায় (দিন ৬৬–৮৫)', pa: 'ਫੁੱਲ ਪੈਣਾ (ਦਿਨ 66–85)', kn: 'ಹೂಬಿಡುವ ಹಂತ (ದಿನ 66–85)', ml: 'പൂവിടൽ ഘട്ടം (ദിവസം 66–85)', or: 'ଫୁଲ ଫୁଟିବା (ଦିନ ୬୬–୮୫)' },
  'Grain / Pod Filling (Day 86–115)': { hi: 'दाना / फली भराव (दिन 86–115)', mr: 'दाणे भरणे / शेंगा भरणे (दिवस ८६–११५)', te: 'గింజ పాలుపోసుకునే దశ (రోజు 86–115)', ta: 'மணி பால் பிடிக்கும் நிலை (நாள் 86–115)', gu: 'દાણા ભરાવા (દિવસ ૮૬–૧૧૫)', bn: 'দানা ভরাটের পর্যায় (দিন ৮৬–১১৫)', pa: 'ਦਾਣਾ ਭਰਨਾ (ਦਿਨ 86–115)', kn: 'ಕಾಳು ತುಂಬುವ ಹಂತ (ದಿನ 86–115)', ml: 'ധാന്യം നിറയുന്ന ഘട്ടം (ദിവസം 86–115)', or: 'ଦାନା ଭରିବା (ଦିନ ୮୬–୧୧୫)' },
  'Maturity & Senescence (Day 116–140)': { hi: 'परिपक्वता एवं कटाई (दिन 116–140)', mr: 'परिपक्वता व कापणी (दिवस ११६–१४०)', te: 'పక్వత & కోత దశ (రోజు 116–140)', ta: 'முதிர்ச்சி மற்றும் அறுவடை (நாள் 116–140)', gu: 'પરિપક્વતા અને લણણી (દિવસ ૧૧૬–૧૪૦)', bn: 'পরিপক্কতা ও ফসল কাটা (দিন ১১৬–১৪০)', pa: 'ਪੱਕਣਾ ਅਤੇ ਕਟਾਈ (ਦਿਨ 116–140)', kn: 'ಪಕ್ವತೆ ಮತ್ತು ಕೊಯ್ಲು (ದಿನ 116–140)', ml: 'വിളവെടുപ്പ് ഘട്ടം (ദിവസം 116–140)', or: 'ପରିପକ୍ୱତା ଓ ଅମଳ (ଦିନ ୧୧୬–୧୪୦)' },

  // ── Status & Zones ──
  'On Track': { hi: 'समय पर', mr: 'वेळेवर', te: 'సమయానికి', ta: 'சரியான நேரத்தில்', gu: 'સમયસર', bn: 'ঠিক সময়ে', pa: 'ਸਹੀ ਸਮੇਂ', kn: 'ಸರಿಯಾದ ಹಂತದಲ್ಲಿ', ml: 'കൃത്യസമയത്ത്', or: 'ସମୟାନୁସାରେ' },
  'Accelerated': { hi: 'त्वरित गति', mr: 'जलद गती', te: 'వేగవంతమైనది', ta: 'துரிதப்படுத்தப்பட்டது', gu: 'ઝડપી', bn: 'দ্রুততর', pa: 'ਤੇਜ਼ ਰਫ਼ਤਾਰ', kn: 'ವೇಗವರ್ಧಿತ', ml: 'വേഗത്തിലാക്കിയത്', or: 'ଦ୍ରୁତ ଗତି' },
  'Optimal': { hi: 'इष्टतम', mr: 'सर्वोत्तम', te: 'అనుకూలమైనది', ta: 'மிகவும் உகந்தது', gu: 'શ્રેષ્ઠ', bn: 'অনুকূল', pa: 'ਸਭ ਤੋਂ ਵਧੀਆ', kn: 'ಅತ್ಯುತ್ತಮ', ml: 'ഏറ്റവും അനുയോജ്യം', or: 'ସର୍ବୋତ୍ତମ' },
  'Favorable': { hi: 'अनुकूल', mr: 'अनुकूल', te: 'అనుకూలం', ta: 'சாதகமானது', gu: 'અનુકૂળ', bn: 'অনুকূল', pa: 'ਅਨੁਕੂਲ', kn: 'ಅನುಕೂಲಕರ', ml: 'അനുകൂലം', or: 'ଅନୁକୂଳ' },
  'Ready': { hi: 'तैयार', mr: 'तयार', te: 'సిద్ధంగా ఉంది', ta: 'தயார்', gu: 'તૈયાર', bn: 'প্রস্তুত', pa: 'ਤਿਆਰ', kn: 'ಸಿದ್ಧವಾಗಿದೆ', ml: 'തയ്യാർ', or: 'ପ୍ରସ୍ତୁତ' },
  'Severe Stress': { hi: 'गंभीर तनाव (सूखा)', mr: 'गंभीर ताण (दुष्काळ)', te: 'తీవ్రమైన ఒత్తిడి', ta: 'கடுமையான வறட்சி பாதிப்பு', gu: 'ગંભીર તણાવ', bn: 'তীব্র চাপ', pa: 'ਗੰਭੀਰ ਤਣਾਅ', kn: 'ತೀವ್ರ ಒತ್ತಡ', ml: 'കടുത്ത പ്രതിസന്ധി', or: 'ଗମ୍ଭୀର ଚାପ' },
  'Optimal Yield': { hi: 'अधिकतम उपज', mr: 'कमाल उत्पन्न', te: 'గరిష్ట దిగుబడి', ta: 'அதிகபட்ச மகசூல்', gu: 'મહત્તમ ઉપજ', bn: 'সর্বোচ্চ ফলন', pa: 'ਵੱਧ ਤੋਂ ਵੱਧ ਝਾੜ', kn: 'ಗರಿಷ್ಠ ಇಳುವರಿ', ml: 'പരമാവധി വിളവ്', or: 'ସର୍ବାଧିକ ଅମଳ' },
  'Waterlogging Hazard': { hi: 'जलभराव का खतरा', mr: 'पाणी साचण्याचा धोका', te: 'నీరు నిలిచే ప్రమాదం', ta: 'நீர் தேங்கும் அபாயம்', gu: 'જળબંબાકારનો ખતરો', bn: 'জলাবদ্ধতার ঝুঁকি', pa: 'ਜਲ-ਜਮਾਓ ਦਾ ਖ਼ਤਰਾ', kn: 'ನೀರು ನಿಲ್ಲುವ ಅಪಾಯ', ml: 'വെള്ളക്കെട്ട് ഭീഷണി', or: 'ଜଳବନ୍ଦୀ ବିପଦ' },
  'High Precaution': { hi: 'उच्च सावधानी', mr: 'उच्च सतर्कता', te: 'అధిక ముందస్తు జాగ్రత్త', ta: 'அதிக முன்னெச்சரிக்கை', gu: 'ઉચ્ચ સાવચેતી', bn: 'উচ্চ সতর্কতা', pa: 'ਉੱਚ ਸਾਵਧਾਨੀ', kn: 'ಹೆಚ್ಚಿನ ಮುನ್ನೆಚ್ಚರಿಕೆ', ml: 'ഉയർന്ന ജാഗ്രത', or: 'ଉଚ୍ଚ ସତର୍କତା' },
  'Moderate Scout': { hi: 'नियमित निगरानी आवश्यक', mr: 'नियमित देखरेख आवश्यक', te: 'సాధారణ పర్యవేక్షణ అవసరం', ta: 'மிதமான கண்காணிப்பு தேவை', gu: 'નિયમિત નજર જરૂરી', bn: 'নিয়মিত তদারকি প্রয়োজন', pa: 'ਨਿਯਮਿਤ ਨਿਗਰਾਨੀ ਜ਼ਰੂਰੀ', kn: 'ಮಧ್ಯಮ ಕಣ್ಗಾವಲು ಅಗತ್ಯ', ml: 'സാധാരണ നിരീക്ഷണം ആവശ്യം', or: 'ନିୟମିତ ନିରୀକ୍ଷଣ ଆବଶ୍ୟକ' },

  // ── Months of the Year ──
  'Jan': { hi: 'जनवरी', mr: 'जानेवारी', te: 'జనవరి', ta: 'ஜனவரி', gu: 'જાન્યુઆરી', bn: 'জানুয়ারি', pa: 'ਜਨਵਰੀ', kn: 'ಜನವರಿ', ml: 'ജനുവരി', or: 'ଜାନୁଆରୀ' },
  'Feb': { hi: 'फरवरी', mr: 'फेब्रुवारी', te: 'ఫిబ్రవరి', ta: 'பிப்ரவரி', gu: 'ફેબ્રુઆરી', bn: 'ফেব্রুয়ারি', pa: 'ਫ਼ਰਵਰੀ', kn: 'ಫೆಬ್ರವರಿ', ml: 'ഫെബ്രുവരി', or: 'ଫେବୃଆରୀ' },
  'Mar': { hi: 'मार्च', mr: 'मार्च', te: 'మార్చి', ta: 'மார்ச்', gu: 'માર્ચ', bn: 'মার্চ', pa: 'ਮਾਰਚ', kn: 'ಮಾರ್ಚ್', ml: 'മാർച്ച്', or: 'ମାର୍ଚ୍ଚ' },
  'Apr': { hi: 'अप्रैल', mr: 'एप्रिल', te: 'ఏప్రిల్', ta: 'ஏப்ரல்', gu: 'એપ્રિલ', bn: 'এপ্রিল', pa: 'ਅਪ੍ਰੈਲ', kn: 'ಏಪ್ರಿಲ್', ml: 'ഏപ്രിൽ', or: 'ଏପ୍ରିଲ୍' },
  'May': { hi: 'मई', mr: 'मे', te: 'మే', ta: 'மே', gu: 'મે', bn: 'মে', pa: 'ਮਈ', kn: 'ಮೇ', ml: 'മേയ്', or: 'ମେ' },
  'Jun': { hi: 'जून', mr: 'जून', te: 'జూన్', ta: 'ஜூன்', gu: 'જૂન', bn: 'জুন', pa: 'ਜੂਨ', kn: 'ಜೂನ್', ml: 'ജൂൺ', or: 'ଜୁନ୍' },
  'Jul': { hi: 'जुलाई', mr: 'जुलै', te: 'జూలై', ta: 'ஜூலை', gu: 'જુલાઈ', bn: 'জুলাই', pa: 'ਜੁਲਾਈ', kn: 'ಜುಲೈ', ml: 'ജൂലൈ', or: 'ଜୁଲାଇ' },
  'Aug': { hi: 'अगस्त', mr: 'ऑगस्ट', te: 'ఆగస్టు', ta: 'ஆகஸ்ட்', gu: 'ઓગસ્ટ', bn: 'আগস্ট', pa: 'ਅਗਸਤ', kn: 'ಆಗಸ್ಟ್', ml: 'ഓഗസ്റ്റ്', or: 'ଅଗଷ୍ଟ' },
  'Sep': { hi: 'सितंबर', mr: 'सप्टेंबर', te: 'సెప్టెంబర్', ta: 'செப்டம்பர்', gu: 'સપ્ટેમ્બર', bn: 'সেপ্টেম্বর', pa: 'ਸਤੰਬਰ', kn: 'ಸೆಪ್ಟೆಂಬರ್', ml: 'സെപ്റ്റംബർ', or: 'ସେପ୍ଟେମ୍ବର' },
  'Oct': { hi: 'अक्टूबर', mr: 'ऑक्टोबर', te: 'అక్టోబర్', ta: 'அக்டோபர்', gu: 'ઓક્ટોબર', bn: 'অক্টোবর', pa: 'ਅਕਤੂਬਰ', kn: 'ಅಕ್ಟೋಬರ್', ml: 'ഒക്ടോബർ', or: 'ଅକ୍ଟୋବର' },
  'Nov': { hi: 'नवंबर', mr: 'नोव्हेंबर', te: 'నవంబర్', ta: 'நவம்பர்', gu: 'નવેમ્બર', bn: 'নভেম্বর', pa: 'ਨਵੰਬਰ', kn: 'ನವೆಂಬರ್', ml: 'നവംബർ', or: 'ନଭେମ୍ବର' },
  'Dec': { hi: 'दिसंबर', mr: 'डिसेंबर', te: 'డిసెంబర్', ta: 'டிசம்பர்', gu: 'ડિસેમ્બર', bn: 'ডিসেম্বর', pa: 'ਦਸੰਬਰ', kn: 'ಡಿಸೆಂಬರ್', ml: 'ഡിസംബർ', or: 'ଡିସେମ୍ବର' },

  // ── Top 2 & 3 Crop Explanations ──
  '#1 Ranked Best Match': {
    hi: '#1 सर्वोच्च अनुशंसित फसल', mr: '#१ सर्वोच्च शिफारस केलेले पीक', te: '#1 అగ్రశ్రేణి సిఫార్సు పంట', ta: '#1 முதன்மை பரிந்துரைக்கப்பட்ட பயிர்',
    gu: '#૧ શ્રેષ્ઠ ભલામણ કરેલ પાક', bn: '#১ শীর্ষ প্রস্তাবিত ফসল', pa: '#1 ਸਿਖਰਲੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਫਸਲ', kn: '#1 ಅಗ್ರ ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆ',
    ml: '#1 ഏറ്റവും അനുയോജ്യമായ വിള', or: '#୧ ସର୍ବୋତ୍ତମ ପରାମର୍ଶିତ ଫସଲ'
  },
  '#2 Strong Runner-Up': {
    hi: '#2 मजबूत द्वितीय विकल्प', mr: '#२ सक्षम दुसरा पर्याय', te: '#2 బలమైన రెండవ ఎంపిక', ta: '#2 சிறந்த மாற்று பயிர்',
    gu: '#૨ મજબૂત બીજો વિકલ્પ', bn: '#২ শক্তিশালী দ্বিতীয় বিকল্প', pa: '#2 ਮਜ਼ਬੂਤ ਦੂਜਾ ਵਿਕਲਪ', kn: '#2 ಪ್ರಬಲ ಎರಡನೇ ಆಯ್ಕೆ',
    ml: '#2 മികച്ച രണ്ടാമത്തെ ചോയ്‌സ്', or: '#୨ ଦ୍ୱିତୀୟ ସର୍ବୋତ୍ତମ ବିକଳ୍ପ'
  },
  '#3 High-Resilience Alternative': {
    hi: '#3 उच्च जलवायु-सहनशील विकल्प', mr: '#३ हवामान-सहनशील पर्याय', te: '#3 అధిక-స్థితిస్థాపకత కలిగిన ప్రత్యామ్నాయం', ta: '#3 அதிக தாக்குப்பிடிக்கும் மாற்றுப் பயிர்',
    gu: '#૩ ઉચ્ચ આબોહવા-પ્રતિરોધક વિકલ્પ', bn: '#৩ উচ্চ জলবায়ু-সহনশীল বিকল্প', pa: '#3 ਉੱਚ ਜਲਵਾਯੂ-ਸਹਿਣਸ਼ੀਲ ਬਦਲ', kn: '#3 ಹೆಚ್ಚು ಪರಿಸರ-ನಿರೋಧಕ ಪರ್ಯಾಯ ಬೆಳೆ',
    ml: '#3 പ്രതികൂല കാലാവസ്ഥയെ അതിജീവിക്കുന്ന വിള', or: '#୩ ଉଚ୍ଚ ଜଳବାୟୁ-ସହନଶୀଳ ବିକଳ୍ପ'
  },
  'Why Recommended': {
    hi: 'सिफारिश का वैज्ञानिक कारण', mr: 'शिफारस करण्याचे शास्त्रीय कारण', te: 'సిఫార్సు చేయడానికి శాస్త్రీయ కారణం', ta: 'பரிந்துரைக்கான அறிவியல் காரணம்',
    gu: 'ભલામણનું વૈજ્ઞાનિક કારણ', bn: 'সুপারিশের বৈজ্ঞানিক কারণ', pa: 'ਸਿਫਾਰਸ਼ ਦਾ ਵਿਗਿਆਨਕ ਕਾਰਨ', kn: 'ಶಿಫಾರಸಿಗೆ ವೈಜ್ಞಾನಿಕ ಕಾರಣ',
    ml: 'ശുപാർശയ്ക്കുള്ള ശാസ്ത്രീയ കാരണം', or: 'ପରାମର୍ଶର ବୈଜ୍ଞାନିକ କାରଣ'
  },
  'Why Recommended: Top suitability score based on current soil moisture and optimum temperature. Highest economic return under normal to surplus rainfall.': {
    hi: 'सिफारिश का कारण: वर्तमान मृदा नमी और अनुकूल तापमान पर आधारित 96% उच्चतम उपयुक्तता स्कोर। सामान्य से अधिशेष वर्षा में अधिकतम शुद्ध लाभ और उच्च बाजार समर्थन मूल्य।',
    mr: 'शिफारसीचे कारण: सध्याचा मातीतील ओलावा आणि अनुकूल तापमानावर आधारित ९६% सर्वोच्च पात्रता गुण. सरासरी ते मुबलक पावसात जास्तीत जास्त आर्थिक नफा.',
    te: 'సిఫార్సు కారణం: ప్రస్తుత నేల తేమ మరియు అనుకూల ఉష్ణోగ్రత ఆధారంగా 96% అత్యధిక అనుకూలత స్కోరు. సాధారణం నుండి అధిక వర్షపాతంలో గరిష్ట ఆర్థిక రాబడి.',
    ta: 'பரிந்துரைக்கான காரணம்: தற்போதைய மண் ஈரப்பதம் மற்றும் உகந்த வெப்பநிலையின் அடிப்படையில் 96% அதிகபட்ச பொருத்தம். இயல்பான மழையில் அதிகபட்ச லாபம்.',
    gu: 'ભલામણનું કારણ: વર્તમાન જમીન ભેજ અને શ્રેષ્ઠ તાપમાન આધારિત ૯૬% ઉચ્ચ સ્કોર. સામાન્યથી વધુ વરસાદમાં મહત્તમ આર્થિક વળતર.',
    bn: 'সুপারিশের কারণ: বর্তমান মাটির আর্দ্রতা এবং অনুকূল তাপমাত্রার উপর ভিত্তি করে ৯৬% সর্বোচ্চ উপযুক্ততা। স্বাভাবিক বৃষ্টিপাতে সর্বোচ্চ লাভজনক ফলন।',
    pa: 'ਸਿਫਾਰਸ਼ ਦਾ ਕਾਰਨ: ਮੌਜੂਦਾ ਮਿੱਟੀ ਦੀ ਨਮੀ ਅਤੇ ਤਾਪਮਾਨ ਦੇ ਆਧਾਰ ਤੇ 96% ਸਿਖਰਲਾ ਸਕੋਰ। ਆਮ ਤੋਂ ਵੱਧ ਮੀਂਹ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਮੁਨਾਫ਼ਾ।',
    kn: 'ಶಿಫಾರಸು ಕಾರಣ: ಪ್ರಸ್ತುತ ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ತಾಪಮಾನದ ಆಧಾರದ ಮೇಲೆ 96% ಅತ್ಯಧಿಕ ಅಂಕ. ಸಾಮಾನ್ಯದಿಂದ ಹೆಚ್ಚಿನ ಮಳೆಯಲ್ಲಿ ಗರಿಷ್ಠ ಲಾಭದಾಯಕ ಇಳುವರಿ.',
    ml: 'ശുപാർശയ്ക്കുള്ള കാരണം: നിലവിലെ മണ്ണിലെ ഈർപ്പവും താപനിലയും അടിസ്ഥാനമാക്കി 96% ഉയർന്ന സ്കോർ. സാധാരണ മഴയിൽ മികച്ച ലാഭം.',
    or: 'ପରାମର୍ଶର କାରଣ: ବର୍ତ୍ତମାନର ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ଓ ଅନୁକୂଳ ତାପମାତ୍ରା ଉପରେ ଆଧାରିତ ୯୬% ସର୍ବୋଚ୍ଚ ସ୍କୋର। ସ୍ୱାଭାବିକ ବର୍ଷାରେ ସର୍ବାଧିକ ଲାଭ।'
  },
  'Why Recommended: Certified drought & moisture resilience. Shorter duration cultivar that hedges against dry spells or false monsoon onset with 35% lower water demand.': {
    hi: 'सिफारिश का कारण: प्रमाणित सूखा-सहनशील किस्म। 35% कम पानी की खपत और 105 दिनों की छोटी अवधि, जो मानसून में सूखे दौर या अनियमितता से पूर्ण फसल सुरक्षा देती है।',
    mr: 'शिफारसीचे कारण: प्रमाणित दुष्काळ-सहनशील वाण. ३५% कमी पाण्याची गरज आणि १०५ दिवसांचा कमी कालावधी, ज्यामुळे पावसातील खंड पडल्यास पीक सुरक्षित राहते.',
    te: 'సిఫార్సు కారణం: ధృవీకరించబడిన కరువు-తట్టుకునే రకం. 35% తక్కువ నీటి అవసరం మరియు 105 రోజుల స్వల్ప కాలవ్యవధి, వర్షాభావ పరిస్థితుల్లో పూర్తి రక్షణ ఇస్తుంది.',
    ta: 'பரிந்துரைக்கான காரணம்: சான்றளிக்கப்பட்ட வறட்சி தாங்கும் ரகம். 35% குறைவான நீர் தேவை மற்றும் 105 நாள் குறுகிய காலம், மழை இடைவெளியில் பயிரைப் பாதுகாக்கிறது.',
    gu: 'ભલામણનું કારણ: પ્રમાણિત દુષ્કાળ-પ્રતિરોધક જાત. ૩૫% ઓછું પાણી અને ૧૦૫ દિવસનો ટૂંકો સમયગાળો, જે અનિયમિત વરસાદ સામે રક્ષણ આપે છે.',
    bn: 'সুপারিশের কারণ: প্রত্যয়িত খরা-সহনশীল জাত। ৩৫% কম জলের প্রয়োজন এবং ১০৫ দিনের স্বল্প মেয়াদ, যা অনাবৃষ্টির সময়ে ফসল রক্ষা করে।',
    pa: 'ਸਿਫਾਰਸ਼ ਦਾ ਕਾਰਨ: ਪ੍ਰਮਾਣਿਤ ਸੋਕਾ-ਸਹਿਣਸ਼ੀਲ ਕਿਸਮ। 35% ਘੱਟ ਪਾਣੀ ਦੀ ਲੋੜ ਅਤੇ 105 ਦਿਨਾਂ ਦਾ ਛੋਟਾ ਸਮਾਂ, ਜੋ ਮੀਂਹ ਦੇ ਖੜੋਤ ਦੌਰਾਨ ਫਸਲ ਬਚਾਉਂਦਾ ਹੈ।',
    kn: 'ಶಿಫಾರಸು ಕಾರಣ: ಪ್ರಮಾಣೀಕೃತ ಬರ-ನಿರೋಧಕ ತಳಿ. 35% ಕಡಿಮೆ ನೀರಿನ ಬಳಕೆ ಮತ್ತು 105 ದಿನಗಳ ಅಲ್ಪಾವಧಿ, ಮಳೆ ಕೊರತೆಯ ಸಮಯದಲ್ಲಿ ಬೆಳೆಗೆ ಭದ್ರತೆ ನೀಡುತ್ತದೆ.',
    ml: 'ശുപാർശയ്ക്കുള്ള കാരണം: വരൾച്ചയെ അതിജീവിക്കുന്ന വിത്തിനകം. 35% കുറഞ്ഞ ജല ഉപയോഗവും 105 ദിവസത്തെ ചുരുങ്ങിയ കാലയളവും മഴക്കുറവിൽ സംരക്ഷണം നൽകുന്നു.',
    or: 'ପରାମର୍ଶର କାରଣ: ପ୍ରମାଣିତ ମରୁଡ଼ି-ସହନଶୀଳ କିସମ। ୩୫% କମ୍ ପାଣି ଆବଶ୍ୟକ ଓ ୧୦୫ ଦିନର କମ୍ ଅବଧି, ଯାହା ଅନିୟମିତ ବର୍ଷାରେ ଫସଲକୁ ସୁରକ୍ଷିତ ରଖେ।'
  },
  'Why Recommended: High-climate tolerance alternative cultivar. Thrives in sub-optimal soil with minimal pesticide requirement, providing dependable minimum assured income under severe climate shocks.': {
    hi: 'सिफारिश का कारण: उच्च जलवायु सहनशीलता वाला संकर विकल्प। कम उर्वरता वाली भूमि में भी सक्षम, न्यूनतम कीटनाशक लागत और ₹2,225 सरकारी एमएसपी के साथ सुनिश्चित आय की गारंटी।',
    mr: 'शिफारसीचे कारण: उच्च हवामान सहनशीलता असलेला संकरित पर्याय. कमी सुपीक जमिनीतही उत्तम वाढ, कमी कीटकनाशक खर्च आणि खात्रीशीर हमीभाव उत्पन्न.',
    te: 'సిఫార్సు కారణం: తీవ్రమైన వాతావరణ మార్పులను తట్టుకునే హైబ్రిడ్ ఎంపిక. తక్కువ క్రిమిసంహారక ఖర్చు మరియు ప్రభుత్వం నిర్దేశించిన కనీస మద్దతు ధరతో సురక్షిత ఆదాయం.',
    ta: 'பரிந்துரைக்கான காரணம்: கடுமையான தட்பவெப்ப நிலைகளைத் தாங்கும் மாற்றுப் பயிர். குறைந்த பூச்சிக்கொல்லி செலவு மற்றும் உத்தரவாதமான குறைந்தபட்ச ஆதரவு விலை வருமானம்.',
    gu: 'ભલામણનું કારણ: ઉચ્ચ આબોહવા સહિષ્ણુતા ધરાવતો હાઇબ્રિડ પાક. ઓછા જંતુનાશક ખર્ચ અને સરકારી ટેકાના ભાવ સાથે ખાતરીપૂર્વકની આવક.',
    bn: 'সুপারিশের কারণ: বিরূপ আবহাওয়া প্রতিরোধী হাইব্রিড ফসল। কম কীটনাশক খরচ এবং সরকারি সহায়ক মূল্যের সাথে নির্ভরযোগ্য আয়ের নিশ্চয়তা।',
    pa: 'ਸਿਫਾਰਸ਼ ਦਾ ਕਾਰਨ: ਉੱਚ ਜਲਵਾਯੂ ਸਹਿਣਸ਼ੀਲਤਾ ਵਾਲੀ ਹਾਈਬ੍ਰਿਡ ਫਸਲ। ਘੱਟ ਕੀਟਨਾਸ਼ਕ ਖਰਚਾ ਅਤੇ ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ ਨਾਲ ਪੱਕੀ ਆਮਦਨ।',
    kn: 'ಶಿಫಾರಸು ಕಾರಣ: ತೀವ್ರ ಹವಾಮಾನ ವೈಪರೀತ್ಯಗಳನ್ನು ತಡೆದುಕೊಳ್ಳುವ ಹೈಬ್ರಿಡ್ ಬೆಳೆ. ಕನಿಷ್ಠ ಕೀಟನಾಶಕ ವೆಚ್ಚ ಮತ್ತು ಖಾತರಿಯ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ ಆದಾಯ.',
    ml: 'ശുപാർശയ്ക്കുള്ള കാരണം: കഠിനമായ കാലാവസ്ഥയെ ചെറുക്കുന്ന ഹൈബ്രിഡ് വിള. കുറഞ്ഞ കീടനാശിനി ചെലവും ഉറപ്പായ താങ്ങുവില വരുമാനവും നൽകുന്നു.',
    or: 'ପରାମର୍ଶର କାରଣ: ପ୍ରତିକୂଳ ଜଳବାୟୁ ସହନଶୀଳ ହାଇବ୍ରିଡ୍ ବିକଳ୍ପ। କମ୍ କୀଟନାଶକ ଖର୍ଚ୍ଚ ଓ ନିଶ୍ଚିତ ସରକାରୀ MSP ଆୟ ପ୍ରଦାନ କରେ।'
  },

  // ── Audio Voice Broadcast / Radio Bulletin ──
  'National Agro-Weather Voice Bulletin': {
    hi: 'राष्ट्रीय कृषि-मौसम ध्वनि बुलेटिन', mr: 'राष्ट्रीय कृषी-हवामान ध्वनी बुलेटीन', te: 'జాతీయ వ్యవసాయ-వాతావరణ శ్రవ్య బులెటిన్', ta: 'தேசிய வேளாண்-வானிலை குரல் புलेटின்',
    gu: 'રાષ્ટ્રીય કૃષિ-હવામાન ધ્વનિ બુલેટિન', bn: 'জাতীয় কৃষি-আবহাওয়া ভয়েস বুলেটিন', pa: 'ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ-ਮੌਸਮ ਵੌਇਸ ਬੁਲੇਟਿਨ', kn: 'ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ-ಹವಾಮಾನ ಧ್ವನಿ ಬುಲೆಟಿನ್',
    ml: 'ദേശീയ കാർഷിക-കാലാവസ്ഥാ വോയ്‌സ് ബുള്ളറ്റിൻ', or: 'ଜାତୀୟ କୃଷି-ପାଣିପାଗ ଧ୍ୱନି ବୁଲେଟିନ୍'
  },
  'Daily Voice Audio Bulletin': {
    hi: 'दैनिक ध्वनि बुलेटिन', mr: 'दैनिक ध्वनी बुलेटीन', te: 'రోజువారీ శ్రవ్య బులెటిన్', ta: 'தினசரி குரல் புलेटின்',
    gu: 'દૈનિક ધ્વનિ બુલેટિન', bn: 'দৈনিক ভয়েস বুলেটিন', pa: 'ਰੋਜ਼ਾਨਾ ਵੌਇਸ ਬੁਲੇਟਿਨ', kn: 'ದೈನಂದಿನ ಧ್ವನಿ ಬುಲೆಟಿನ್',
    ml: 'പ്രതിദിന വോയ്‌സ് ബുള്ളറ്റിൻ', or: 'ଦୈନିକ ଧ୍ୱନି ବୁଲେଟିନ୍'
  },
  'Listen to Weather, Rain & Crop Summary': {
    hi: 'मौसम, वर्षा एवं फसल सलाह सुनें', mr: 'हवामान, पाऊस आणि पीक सल्ला ऐका', te: 'వాతావరణం, వర్షం & పంట సారాంశం వినండి', ta: 'வானிலை, மழை மற்றும் பயிர் சுருக்கத்தைக் கேளுங்கள்',
    gu: 'હવામાન, વરસાદ અને પાક સલાહ સાંભળો', bn: 'আবহাওয়া, বৃষ্টি ও ফসল পরামর্শ শুনুন', pa: 'ਮੌਸਮ, ਮੀਂਹ ਅਤੇ ਫਸਲ ਸਲਾਹ ਸੁਣੋ', kn: 'ಹವಾಮಾನ, ಮಳೆ ಮತ್ತು ಬೆಳೆ ಸಾರಾಂಶವನ್ನು ಆಲಿಸಿ',
    ml: 'കാലാവസ്ഥ, മഴ, വിള നിർദ്ദേശങ്ങൾ കേൾക്കുക', or: 'ପାଣିପାଗ, ବର୍ଷା ଓ ଫସଲ ପରାମର୍ଶ ଶୁଣନ୍ତୁ'
  },
  'Live Audio Bulletin (Voice Synthesizer)': {
    hi: 'लाइव ध्वनि बुलेटिन (वाणी संश्लेषक)', mr: 'थेट ध्वनी बुलेटीन (आवाज संश्लेषक)', te: 'ప్రత్యక్ష శ్రవ్య బులెటిన్ (వాయిస్ సింథసైజర్)', ta: 'நேரடி குரல் அறிவிப்பு (குரல் தொகுப்பி)',
    gu: 'લાઈવ ઓડિયો બુલેટિન (વોઈસ સિન્થેસાઈઝર)', bn: 'লাইভ অডিও বুলেটিন (ভয়েস সিন্থেসাইজার)', pa: 'ਲਾਈਵ ਵੌਇਸ ਬੁਲੇਟਿਨ (ਆਵਾਜ਼ ਸਿੰਥੇਸਾਈਜ਼ਰ)', kn: 'ಲೈವ್ ಆಡಿಯೋ ಬುಲೆಟಿನ್ (ಧ್ವನಿ ಸಂಶ್ಲೇಷಕ)',
    ml: 'തത്സമയ ഓഡിയോ ബുള്ളറ്റിൻ (വോയ്‌സ് സിന്തസൈസർ)', or: 'ଲାଇଭ୍ ଅଡିଓ ବୁଲେଟିନ୍ (ଭଏସ୍ ସିନ୍ଥେସାଇଜର୍)'
  },
  'Play Voice Bulletin': {
    hi: 'ध्वनि बुलेटिन सुनें', mr: 'ध्वनी बुलेटीन ऐका', te: 'శ్రవ్య బులెటిన్ వినండి', ta: 'குரல் புलेटினை இயக்கு',
    gu: 'ઓડિયો બુલેટિન સાંભળો', bn: 'ভয়েস বুলেটিন শুনুন', pa: 'ਆਵਾਜ਼ ਬੁਲੇਟਿਨ ਚਲਾਓ', kn: 'ಧ್ವನಿ ಬುಲೆಟಿನ್ ಪ್ಲೇ ಮಾಡಿ',
    ml: 'വോയ്‌സ് ബുള്ളറ്റിൻ പ്ലേ ചെയ്യുക', or: 'ଧ୍ୱନି ବୁଲେଟିନ୍ ପ୍ଲେ କରନ୍ତୁ'
  },
  'Pause Audio': {
    hi: 'ऑडियो रोकें', mr: 'ऑडिओ थांबवा', te: 'ఆడియోను నిలిపివేయండి', ta: 'ஆடியோவை இடைநிறுத்து',
    gu: 'ઓડિયો થોભાવો', bn: 'অডিও থামান', pa: 'ਆਡੀਓ ਰੋਕੋ', kn: 'ಆಡಿಯೋ ವಿರಾಮಗೊಳಿಸಿ',
    ml: 'ഓഡിയോ താൽക്കാലികമായി നിർത്തുക', or: 'ଅଡିଓ ବିରାମ କରନ୍ତୁ'
  },
  'Stop Broadcast': {
    hi: 'प्रसारण बंद करें', mr: 'प्रसारण बंद करा', te: 'ప్రసారాన్ని ఆపివేయండి', ta: 'ஒளிபரப்பை நிறுத்து',
    gu: 'પ્રસારણ બંધ કરો', bn: 'সম্প্রচার বন্ধ করুন', pa: 'ਪ੍ਰਸਾਰਣ ਬੰਦ ਕਰੋ', kn: 'ಪ್ರಸಾರವನ್ನು ನಿಲ್ಲಿಸಿ',
    ml: 'പ്രക്ഷേപണം നിർത്തുക', or: 'ପ୍ରସାରଣ ବନ୍ଦ କରନ୍ତୁ'
  },
  'Replay Audio': {
    hi: 'पुनः सुनें', mr: 'पुन्हा ऐका', te: 'మళ్లీ వినండి', ta: 'மீண்டும் இயக்கு',
    gu: 'ફરીથી સાંભળો', bn: 'পুনরায় শুনুন', pa: 'ਮੁੜ ਚਲਾਓ', kn: 'ಮತ್ತೆ ಆಲಿಸಿ',
    ml: 'വീണ്ടും പ്ലേ ചെയ്യുക', or: 'ପୁନଃ ଶୁଣନ୍ତୁ'
  },
  // ── Top 3 Recommended Crops & Rationales ──
  'Top 3 Optimal Crops for this Region': {
    hi: 'इस क्षेत्र के लिए शीर्ष 3 सर्वोत्तम फसलें', mr: 'या क्षेत्रासाठी अव्वल 3 सर्वोत्तम पिके', te: 'ఈ ప్రాంతానికి అగ్రశ్రేణి 3 ఉత్తమ పంటలు', ta: 'இப்பகுதிக்கான சிறந்த 3 பயிர்கள்',
    gu: 'આ વિસ્તાર માટે ટોચના 3 શ્રેષ્ઠ પાક', bn: 'এই অঞ্চলের জন্য সেরা ৩টি উপযুক্ত ফসল', pa: 'ਇਸ ਖੇਤਰ ਲਈ ਪ੍ਰਮੁੱਖ 3 ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲਾਂ', kn: 'ಈ ಪ್ರದೇಶಕ್ಕೆ ಟಾಪ್ 3 ಅತ್ಯುತ್ತಮ ಬೆಳೆಗಳು',
    ml: 'ഈ പ്രദേശത്തിനായുള്ള മികച്ച 3 വിളകൾ', or: 'ଏହି ଅଞ୍ଚଳ ପାଇଁ ଶୀର୍ଷ ୩ ସର୍ବୋତ୍ତମ ଫସଲ'
  },
  '#1 Ranked Best Match': {
    hi: '#1 प्रथम सर्वोच्च उपयुक्त फसल', mr: '#1 प्रथम सर्वोत्तम जुळणी', te: '#1 మొదటి అత్యుత్తమ ఎంపిక', ta: '#1 முதல் சிறந்த தேர்வு',
    gu: '#1 પ્રથમ શ્રેષ્ઠ મેળ', bn: '#১ প্রথম সেরা উপযুক্ত ফসল', pa: '#1 ਪਹਿਲੀ ਸਭ ਤੋਂ ਵਧੀਆ ਚੋਣ', kn: '#1 ಮೊದಲ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ',
    ml: '#1 ഒന്നാം സ്ഥാനം മികച്ച വിള', or: '#୧ ପ୍ରଥମ ସର୍ବୋତ୍ତମ ମେଳ'
  },
  '#2 Strong Runner-Up': {
    hi: '#2 द्वितीय उत्कृष्ट विकल्प', mr: '#2 दुसरा उत्कृष्ट पर्याय', te: '#2 రెండవ ఉత్తమ ఎంపిక', ta: '#2 இரண்டாவது சிறந்த தேர்வு',
    gu: '#2 બીજો ઉત્કૃષ્ટ વિકલ્પ', bn: '#২ দ্বিতীয় চমৎকার বিকল্প', pa: '#2 ਦੂਜਾ ਵਧੀਆ ਵਿਕਲਪ', kn: '#2 ಎರಡನೇ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ',
    ml: '#2 രണ്ടാം മികച്ച ബദൽ', or: '#୨ ଦ୍ୱିତୀୟ ଉତ୍କୃଷ୍ଟ ବିକଳ୍ପ'
  },
  '#3 High-Resilience Alternative': {
    hi: '#3 तृतीय उच्च-सहनशील वैकल्पिक फसल', mr: '#3 तिसरा हवामान-सहनशील पर्याय', te: '#3 మూడవ అధిక-తట్టుకునే ప్రత్యామ్ନాయం', ta: '#3 மூன்றாவது அதிக தாங்கும் திறன் கொண்ட பயிர்',
    gu: '#3 ત્રીજો સહનશીલ વિકલ્પ', bn: '#৩ তৃতীয় উচ্চ-সহনশীল বিকল্প', pa: '#3 ਤੀਜਾ ਸੋਕਾ-ਸਹਿਣਸ਼ੀਲ ਬਦਲ', kn: '#3 ಮೂರನೇ ಹೆಚ್ಚಿನ ಸಹಿಷ್ಣುತೆ ಪರ್ಯಾಯ',
    ml: '#3 മൂന്നാമത്തെ ഉയർന്ന പ്രതിരോധ ബദൽ', or: '#୩ ତୃତୀୟ ଉଚ୍ଚ-ସହନଶୀଳ ବିକଳ୍ପ'
  },
  'Why Recommended for this Location': {
    hi: 'इस स्थान के लिए क्यों अनुशंसित', mr: 'या ठिकाणासाठी का शिफारस केली', te: 'ఈ ప్రాంతానికి ఎందుకు సిఫార్సు చేయబడింది', ta: 'இந்த இடத்திற்கு ஏன் பரிந்துரைக்கப்படுகிறது',
    gu: 'આ સ્થળ માટે શા માટે ભલામણ કરેલ', bn: 'এই অবস্থানের জন্য কেন প্রস্তাবিত', pa: 'ਇਸ ਸਥਾਨ ਲਈ ਕਿਉਂ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ', kn: 'ಈ ಸ್ಥಳಕ್ಕೆ ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
    ml: 'ഈ സ്ഥലത്തിന് എന്തുകൊണ്ട് ശുപാർശ ചെയ്യുന്നു', or: 'ଏହି ସ୍ଥାନ ପାଇଁ କାହିଁକି ପରାମର୍ଶିତ'
  },
  '10-Year Agro-Climatic Data & Phenology': {
    hi: '10-वर्षीय कृषि-जलवायु आंकड़े एवं ऋतु-विज्ञान', mr: '१०-वर्षीय कृषी-हवामान डेटा आणि फेनोलॉजी', te: '10-సంవత్సరాల వ్యవసాయ-వాతావరణ డేటా & ఫెనాలజీ', ta: '10-ஆண்டு வேளாண்-காலநிலை தரவு மற்றும் பயிர் சுழற்சி',
    gu: '10-વર્ષીય કૃષિ-આબોહવા ડેટા અને ફેનોલોજી', bn: '১০-বছরের কৃষি-আবহাওয়া উপাত্ত ও ফেনোলজি', pa: '10-ਸਾਲਾ ਖੇਤੀਬਾੜੀ-ਮੌਸਮ ਡੇਟਾ ਅਤੇ ਫੀਨੋਲੋਜੀ', kn: '10-ವರ್ಷಗಳ ಕೃಷಿ-ಹವಾಮಾನ ಡೇಟಾ & ಫೆನಾಲಜಿ',
    ml: '10-വർഷത്തെ കാർഷിക-കാലാവസ്ഥാ ഡാറ്റയും ഫിനോളജിയും', or: '୧୦-ବର୍ଷର କୃଷି-ଜଳବାୟୁ ତଥ୍ୟ ଓ ଫେନୋଲୋଜି'
  },
  '10-Year Government MSP Price Trend (₹/Quintal)': {
    hi: '10-वर्षीय सरकारी एमएसपी मूल्य रुझान (₹/क्विंटल)', mr: '१०-वर्षीय सरकारी हमीभाव दर कल (₹/क्विंटल)', te: '10-సంవత్సరాల ప్రభుత్వ మద్దతు ధరల సరళి (₹/క్వింటాల్)', ta: '10-ஆண்டு குறைந்தபட்ச ஆதரவு விலை போக்கு (₹/குவிண்டால்)',
    gu: '10-વર્ષીય સરકારી ટેકાના ભાવનો ટ્રેન્ડ (₹/ક્વિન્ટલ)', bn: '১০-বছরের সরকারি সহায়ক মূল্য ধারা (₹/কুইন্টাল)', pa: '10-ਸਾਲਾ ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ ਰੁਝਾਨ (₹/ਕੁਇੰਟਲ)', kn: '10-ವರ್ಷಗಳ ಸರ್ಕಾರಿ ಬೆಂಬಲ ಬೆಲೆ ಪ್ರವೃತ್ತಿ (₹/ಕ್ವಿಂಟಾಲ್)',
    ml: '10-വർഷത്തെ സർക്കാർ താങ്ങുവില പ്രവണത (₹/ക്വിന്റൽ)', or: '୧୦-ବର୍ଷର ସରକାରୀ MSP ଦର ଧାରା (₹/କ୍ୱିଣ୍ଟାଲ)'
  },
  'Graph 4: 10-Year Historical MSP vs Yield Trend': {
    hi: 'ग्राफ़ 4: 10-वर्षीय ऐतिहासिक एमएसपी बनाम उपज रुझान', mr: 'आलेख ४: १०-वर्षीय ऐतिहासिक हमीभाव विरुद्ध उत्पादन कल', te: 'గ్రాఫ్ 4: 10-సంవత్సరాల చారిత్రక మద్దతు ధర మరియు దిగుబడి సరళి', ta: 'வரைபடம் 4: 10-ஆண்டு வரலாற்று ஆதரவு விலை மற்றும் மகசூல் போக்கு',
    gu: 'ગ્રાફ 4: 10-વર્ષીય ઐતિહાસિક ટેકાના ભાવ વિરુદ્ધ ઉત્પાદન વલણ', bn: 'গ্রাফ ৪: ১০-বছরের ঐতিহাসিক সহায়ক মূল্য বনাম ফলন ধারা', pa: 'ਗ੍ਰਾਫ਼ 4: 10-ਸਾਲਾ ਇਤਿਹਾਸਕ ਐਮਐਸਪੀ ਬਨਾਮ ਝਾੜ ਰੁਝਾਨ', kn: 'ಗ್ರಾಫ್ 4: 10-ವರ್ಷಗಳ ಐತಿಹಾಸಿಕ ಬೆಂಬಲ ಬೆಲೆ ಮತ್ತು ಇಳುವರಿ ಪ್ರವೃತ್ತಿ',
    ml: 'ഗ്രാഫ് 4: 10-വർഷത്തെ ചരിത്രപരമായ താങ്ങുവിലയും വിളവ് പ്രവണതയും', or: 'ଗ୍ରାଫ୍ ୪: ୧୦-ବର୍ଷର ଐତିହାସିକ MSP ବନାମ ଅମଳ ଧାରା'
  },
  'Precision Crop Analytics': {
    hi: 'सटीक फसल विश्लेषण', mr: 'अचूक पीक विश्लेषण', te: 'ఖచ్చితమైన పంట విశ్లేషణ', ta: 'துல்லிய பயிர் பகுப்பாய்வு',
    gu: 'ચોક્કસ પાક વિશ્લેષણ', bn: 'সুনির্দিষ্ট ফসল বিশ্লেষণ', pa: 'ਸਟੀਕ ਫਸਲ ਵਿਸ਼ਲੇਸ਼ਣ', kn: 'ನಿಖರ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ',
    ml: 'കൃത്യമായ വിള വിശകലനം', or: 'ସଠିକ୍ ଫସଲ ବିଶ୍ଳେଷଣ'
  },
  'Comparative Crop Analytics & Agro-Phenology Lab': {
    hi: 'तुलनात्मक फसल विश्लेषण एवं कृषि-ऋतुविज्ञान प्रयोगशाला', mr: 'तुलनात्मक पीक विश्लेषण आणि कृषी-वाढ प्रयोगशाळा', te: 'తులనాత్మక పంట విశ్లేషణ & వ్యవసాయ-ఫెనాలజీ ల్యాబ్', ta: 'ஒப்பீட்டு பயிர் பகுப்பாய்வு மற்றும் வேளாண் ஆய்வகம்',
    gu: 'તુલનાત્મક પાક વિશ્લેષણ અને કૃષિ-ફેનોલોજી લેબ', bn: 'তুলনামূলক ফসল বিশ্লেষণ ও কৃষি-ফেনোলজি ল্যাব', pa: 'ਤੁਲਨਾਤਮਕ ਫਸਲ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਖੇਤੀਬਾੜੀ-ਫੀਨੋਲੋਜੀ ਲੈਬ', kn: 'ತುಲನಾತ್ಮಕ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಕೃಷಿ-ಫೆನಾಲಜಿ ಲ್ಯಾಬ್',
    ml: 'താരതമ്യ വിള വിശകലനവും അഗ്രോ-ഫിനോളജി ലാബും', or: 'ତୁଳନାତ୍ମକ ଫସଲ ବିଶ୍ଳେଷଣ ଓ କୃଷି-ଫେନୋଲୋଜି ଲ୍ୟାବ୍'
  },
  'Select any crop to analyze yield curves, thermal GDD accumulation, soil drawdown, MSP progression, and pest risks.': {
    hi: 'उपज वक्र, तापीय GDD संचय, मिट्टी में नमी कमी, MSP प्रगति और कीट जोखिम का विश्लेषण करने के लिए कोई भी फसल चुनें।', mr: 'उत्पादन वक्र, उष्णता GDD संचय, मातीतील ओलावा, हमीभाव प्रगती आणि कीटक धोक्यांचे विश्लेषण करण्यासाठी कोणतेही पीक निवडा.', te: 'దిగుబడి వక్రరేఖలు, థర్మల్ GDD సంచితం, నేల తేమ, MSP పురోగతి మరియు తెగులు ప్రమాదాలను విశ్లేషించడానికి ఏదైనా పంటను ఎంచుకోండి.', ta: 'மகசூல் வளைவுகள், வெப்ப GDD சேகரிப்பு, மண் ஈரப்பதம், MSP முன்னேற்றம் மற்றும் பூச்சி அபாயங்களை பகுப்பாய்வு செய்ய ஏதேனும் பயிரைத் தேர்ந்தெடுக்கவும்.',
    gu: 'ઉત્પાદન વળાંક, થર્મલ GDD સંચય, જમીન ભેજ, ટેકાના ભાવ અને જીવાત જોખમોનું વિશ્લેષણ કરવા માટે કોઈપણ પાક પસંદ કરો.', bn: 'ফলন বক্ররেখা, তাপীয় GDD সঞ্চয়ন, মাটির আর্দ্রতা হ্রাস, MSP অগ্রগতি এবং কীটপতঙ্গের ঝুঁকি বিশ্লেষণ করতে যেকোনো ফসল নির্বাচন করুন।', pa: 'ਝਾੜ ਦੇ ਕਰਵ, ਥਰਮਲ GDD ਇਕੱਠ, ਮਿੱਟੀ ਦੀ ਨਮੀ, ਐਮਐਸਪੀ ਵਾਧਾ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਜੋਖਮਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਕੋਈ ਵੀ ਫਸਲ ਚੁਣੋ।', kn: 'ಇಳುವರಿ ವಕ್ರರೇಖೆಗಳು, ಉಷ್ಣ GDD ಸಂಗ್ರಹಣೆ, ಮಣ್ಣಿನ ತೇವಾಂಶ, ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ ಪ್ರಗತಿ ಮತ್ತು ಕೀಟ ಅಪಾಯಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಯಾವುದೇ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    ml: 'വിളവ് കർവുകൾ, താപ GDD ശേഖരണം, മണ്ണിലെ ഈർപ്പം, താങ്ങുവില പുരോഗതി, കീടസാധ്യതകൾ എന്നിവ വിശകലനം ചെയ്യാൻ ഏതെങ്കിലും വിള തിരഞ്ഞെടുക്കുക.', or: 'ଅମଳ ବକ୍ରରେଖା, ତାପଜ GDD ସଞ୍ଚୟ, ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ହ୍ରାସ, MSP ପ୍ରଗତି ଓ କୀଟ ବିପଦ ବିଶ୍ଳେଷଣ ପାଇଁ ଯେକୌଣସି ଫସଲ ବାଛନ୍ତୁ।'
  },
  'Select Active Crop for Multi-Graph Analysis:': {
    hi: 'बहु-ग्राफ़ विश्लेषण के लिए सक्रिय फसल चुनें:', mr: 'मल्टी-ग्राफ विश्लेषणासाठी सक्रिय पीक निवडा:', te: 'బహుళ-గ్రాఫ్ విశ్లేషణ కోసం క్రియాశీల పంటను ఎంచుకోండి:', ta: 'பல வரைபட பகுப்பாய்விற்கு செயலில் உள்ள பயிரைத் தேர்ந்தெடுக்கவும்:',
    gu: 'મલ્ટી-ગ્રાફ વિશ્લેષણ માટે સક્રિય પાક પસંદ કરો:', bn: 'বহু-গ্রাফ বিশ্লেষণের জন্য সক্রিয় ফসল নির্বাচন করুন:', pa: 'ਮਲਟੀ-ਗ੍ਰਾਫ ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਸਰਗਰਮ ਫਸਲ ਚੁਣੋ:', kn: 'ಬಹು-ಗ್ರಾಫ್ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಸಕ್ರಿಯ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
    ml: 'മൾട്ടി-ഗ്രാഫ് വിശകലനത്തിനായി സജീവ വിള തിരഞ്ഞെടുക്കുക:', or: 'ବହୁ-ଗ୍ରାଫ୍ ବିଶ୍ଳେଷଣ ପାଇଁ ସକ୍ରିୟ ଫସଲ ବାଛନ୍ତୁ:'
  },
  'Scientific Taxonomy': {
    hi: 'वैज्ञानिक वर्गीकरण', mr: 'वैज्ञानिक वर्गीकरण', te: 'శాస్త్రీయ వర్గీకరణ', ta: 'அறிவியல் வகைப்பாடு',
    gu: 'વૈજ્ઞાનિક વર્ગીકરણ', bn: 'বৈজ্ঞানিক শ্রেণিবিন্যাস', pa: 'ਵਿਗਿਆਨਕ ਵਰਗੀਕਰਨ', kn: 'ವೈಜ್ಞಾನಿಕ ವರ್ಗೀಕರಣ',
    ml: 'ശാസ്ത്രീയ വർഗ്ഗീകരണം', or: 'ବୈଜ୍ଞାନିକ ବର୍ଗୀକରଣ'
  },
  'Graph 1: Yield vs. Rainfall Sensitivity Response': {
    hi: 'ग्राफ़ 1: वर्षा संवेदनशीलता प्रतिक्रिया बनाम उपज', mr: 'आलेख १: पाऊस संवेदनशीलता प्रतिसाद विरुद्ध उत्पादन', te: 'గ్రాఫ్ 1: వర్షపాత సున్నితత్వ ప్రతిస్పందన మరియు దిగుబడి', ta: 'வரைபடம் 1: மழை உணர்திறன் பதில் மற்றும் மகசூல்',
    gu: 'ગ્રાફ 1: વરસાદ સંવેદનશીલતા પ્રતિભાવ વિરુદ્ધ ઉત્પાદન', bn: 'গ্রাফ ১: বৃষ্টিপাতের সংবেদনশীলতা প্রতিক্রিয়া বনাম ফলন', pa: 'ਗ੍ਰਾਫ਼ 1: ਮੀਂਹ ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਪ੍ਰਤੀਕਿਰਿਆ ਬਨਾਮ ਝਾੜ', kn: 'ಗ್ರಾಫ್ 1: ಮಳೆ ಸೂಕ್ಷ್ಮತೆಯ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಇಳುವರಿ',
    ml: 'ഗ്രാഫ് 1: മഴയുടെ പ്രതികരണവും വിളവും', or: 'ଗ୍ରାଫ୍ ୧: ବର୍ଷା ସମ୍ବେଦନଶୀଳତା ପ୍ରତିକ୍ରିୟା ବନାମ ଅମଳ'
  },
  'Graph 2: Thermal Heat Units (GDD) Accumulation': {
    hi: 'ग्राफ़ 2: तापीय ऊष्मा इकाइयां (GDD) संचय', mr: 'आलेख २: औष्णिक उष्णता एकके (GDD) संचय', te: 'గ్రాఫ్ 2: ఉష్ణ యూనిట్లు (GDD) సంచితం', ta: 'வரைபடம் 2: வெப்ப அலகுகள் (GDD) சேகரிப்பு',
    gu: 'ગ્રાફ 2: થર્મલ હીટ યુનિટ્સ (GDD) સંચય', bn: 'গ্রাফ ২: তাপীয় তাপ একক (GDD) সঞ্চয়ন', pa: 'ਗ੍ਰਾਫ਼ 2: ਥਰਮਲ ਤਾਪ ਇਕਾਈਆਂ (GDD) ਦਾ ਸੰਚਨ', kn: 'ಗ್ರಾಫ್ 2: ಉಷ್ಣ ಶಾಖ ಘಟಕಗಳು (GDD) ಸಂಗ್ರಹ',
    ml: 'ഗ്രാഫ് 2: തെർമൽ ഹീറ്റ് യൂണിറ്റുകൾ (GDD) ശേഖരണം', or: 'ଗ୍ରାଫ୍ ୨: ତାପଜ ଉତ୍ତାପ ଏକକ (GDD) ସଞ୍ଚୟ'
  },
  'Graph 3: Crop Evapotranspiration (ETc & Soil Drawdown)': {
    hi: 'ग्राफ़ 3: फसल वाष्पोत्सर्जन (ETc एवं मृदा जल अवशोषण)', mr: 'आलेख ३: पीक बाष्पीभवन (ETc आणि मातीतील ओलावा वापर)', te: 'గ్రాఫ్ 3: పంట బాష్పీభవనం (ETc & నేల తేమ క్షీణత)', ta: 'வரைபடம் 3: பயிர் ஆவியாதல் (ETc மற்றும் மண் நீர் பயன்பாடு)',
    gu: 'ગ્રાફ 3: પાક બાષ્પીભવન (ETc અને જમીન ભેજ વપરાશ)', bn: 'গ্রাফ ৩: ফসলের বাষ্পীভবন (ETc এবং মাটির আর্দ্রতা ক্ষয়)', pa: 'ਗ੍ਰਾਫ਼ 3: ਫਸਲ ਵਾਸ਼ਪੀਕਰਨ (ETc ਅਤੇ ਮਿੱਟੀ ਦੀ ਨਮੀ ਵਰਤੋਂ)', kn: 'ಗ್ರಾಫ್ 3: ಬೆಳೆ ಆವಿಯಾಗುವಿಕೆ (ETc ಮತ್ತು ಮಣ್ಣಿನ ತೇವಾಂಶ ಇಳಿಕೆ)',
    ml: 'ഗ്രാഫ് 3: വിള ബാഷ്പീകരണവും മണ്ണിലെ ഈർപ്പവും (ETc)', or: 'ଗ୍ରାଫ୍ ୩: ଫସଲ ବାଷ୍ପୀକରଣ (ETc ଓ ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ହ୍ରାସ)'
  },
  'Growing Degree Days (GDD) Thermal Stages': {
    hi: 'ग्रोइंग डिग्री डेज़ (GDD) तापीय अवस्थाएं', mr: 'वाढ दिवस (GDD) औष्णिक टप्पे', te: 'గ్రోయింగ్ డిగ్రీ డేస్ (GDD) ఉష్ణ దశలు', ta: 'வளர்ச்சி வெப்ப நிலைகள் (GDD)',
    gu: 'ગ્રોઇંગ ડિગ્રી ડેઝ (GDD) થર્મલ તબક્કાઓ', bn: 'গ্রোয়িং ডিগ্রি ডেজ (GDD) তাপীয় পর্যায়', pa: 'ਗ੍ਰੋਇੰਗ ਡਿਗਰੀ ਡੇਅਜ਼ (GDD) ਥਰਮਲ ਪੜਾਅ', kn: 'ಬೆಳವಣಿಗೆಯ ಡಿಗ್ರಿ ದಿನಗಳು (GDD) ಉಷ್ಣ ಹಂತಗಳು',
    ml: 'വളർച്ചാ ഡിഗ്രി ദിനങ്ങൾ (GDD) താപ ഘട്ടങ്ങൾ', or: 'ଗ୍ରୋଇଂ ଡିଗ୍ରୀ ଡେଜ୍ (GDD) ତାପଜ ପର୍ଯ୍ୟାୟ'
  },
  'Daily crop water demand (ETc = Kc × ETo) and root-zone moisture drawdown.': {
    hi: 'दैनिक फसल जल मांग (ETc = Kc × ETo) एवं जड़-क्षेत्र नमी अवशोषण।', mr: 'दैनिक पीक पाणी मागणी (ETc = Kc × ETo) आणि मुळांच्या क्षेत्रातील ओलावा वापर.', te: 'రోజువారీ పంట నీటి డిమాండ్ (ETc = Kc × ETo) మరియు వేరు-మండల తేమ క్షీణత.', ta: 'தினசரி பயிர் நீர் தேவை (ETc = Kc × ETo) மற்றும் வேர் மண்டல ஈரப்பதம்.',
    gu: 'દૈનિક પાક પાણીની માંગ (ETc = Kc × ETo) અને મૂળ-વિસ્તાર ભેજ વપરાશ.', bn: 'দৈনিক ফসলের জলের চাহিদা (ETc = Kc × ETo) এবং শিকড় অঞ্চলের আর্দ্রতা হ্রাস।', pa: 'ਰੋਜ਼ਾਨਾ ਫਸਲ ਪਾਣੀ ਦੀ ਮੰਗ (ETc = Kc × ETo) ਅਤੇ ਜੜ੍ਹ ਖੇਤਰ ਵਿੱਚ ਨਮੀ ਦਾ ਪੱਧਰ।', kn: 'ದೈನಂದಿನ ಬೆಳೆ ನೀರಿನ ಬೇಡಿಕೆ (ETc = Kc × ETo) ಮತ್ತು ಬೇರು ವಲಯದ ತೇವಾಂಶ ಬಳಕೆ.',
    ml: 'പ്രതിദിന വിള ജല ആവശ്യം (ETc = Kc × ETo), വേരിലെ ഈർപ്പത്തിന്റെ അളവ്.', or: 'ଦୈନିକ ଫସଲ ଜଳ ଆବଶ୍ୟକତା (ETc = Kc × ETo) ଏବଂ ଚେର ଅଞ୍ଚଳ ଆର୍ଦ୍ରତା ହ୍ରାସ।'
  },
  'Peak Demand': {
    hi: 'चरम जल मांग', mr: 'कमाल पाणी गरज', te: 'గరిష్ట నీటి డిమాండ్', ta: 'அதிகபட்ச நீர் தேவை',
    gu: 'મહત્તમ પાણીની માંગ', bn: 'সর্বোচ্চ জলের চাহিদা', pa: 'ਸਭ ਤੋਂ ਵੱਧ ਪਾਣੀ ਦੀ ਲੋੜ', kn: 'ಗರಿಷ್ಠ ನೀರಿನ ಬೇಡಿಕೆ',
    ml: 'പരമാവധി ജല ആവശ്യം', or: 'ସର୍ବୋଚ୍ଚ ଜଳ ଚାହିଦା'
  },
  'Harvest yield potential (%) across rainfall spectrum for': {
    hi: 'वर्षा चक्र के अनुसार संभावित फसल उपज (%)', mr: 'पावसाच्या प्रमाणानुसार संभाव्य पीक उत्पादन (%)', te: 'వర్షపాత విస్తృతి ప్రకారం దిగుబడి సంభావ్యత (%)', ta: 'மழைப்பொழிவின் அடிப்படையில் மகசூல் சாத்தியம் (%)',
    gu: 'વરસાદના પ્રમાણ અનુસાર સંભવિત ઉત્પાદન (%)', bn: 'বৃষ্টিপাতের মাত্রা অনুযায়ী সম্ভাব্য ফলন (%)', pa: 'ਮੀਂਹ ਦੇ ਪੱਧਰ ਅਨੁਸਾਰ ਸੰਭਾਵਿਤ ਝਾੜ (%)', kn: 'ಮಳೆಯ ಪ್ರಮಾಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಂಭಾವ್ಯ ಇಳುವರಿ (%)',
    ml: 'മഴയുടെ ലഭ്യതയനുസരിച്ചുള്ള വിളവ് സാധ്യത (%)', or: 'ବର୍ଷା ପରିମାଣ ଅନୁଯାୟୀ ସମ୍ଭାବ୍ୟ ଅମଳ (%)'
  },
  '7-Day Synoptic Weather & Precipitation Trajectory': {
    hi: '7-दिवसीय मौसम एवं वर्षा प्रक्षेपण प्रक्षेपवक्र', mr: '७-दिवसीय हवामान आणि पाऊस अंदाज मार्ग', te: '7-రోజుల వాతావరణ మరియు వర్షపాత గమనం', ta: '7-நாள் வானிலை மற்றும் மழைப்பொழிவுப் பாதை',
    gu: '7-દિવસીય હવામાન અને વરસાદ અનુમાન વલણ', bn: '৭-দিনের আবহাওয়া ও বৃষ্টিপাতের গতিপথ', pa: '7-ਦਿਨਾ ਮੌਸਮ ਅਤੇ ਮੀਂਹ ਦਾ ਰੁਖ਼', kn: '7-ದಿನಗಳ ಹವಾಮಾನ ಮತ್ತು ಮಳೆಯ ಪಥ',
    ml: '7-ദിവസത്തെ കാലാവസ്ഥയും മഴയുടെ പാതയും', or: '୭-ଦିନର ପାଣିପାଗ ଓ ବର୍ଷା ପୂର୍ବାନୁମାନ ଗତିପଥ'
  },
  '30-Day Climatological Monsoon Accumulation Curve': {
    hi: '30-दिवसीय जलवायु मानसूनी संचय वक्र', mr: '३०-दिवसीय मान्सून पाऊस संचय वक्र', te: '30-రోజుల నైరుతి రుతుపవనాల సంచిత వక్రరేఖ', ta: '30-நாள் பருவமழை சேகரிப்பு வளைவு',
    gu: '30-દિવસીય ચોમાસુ વરસાદ સંચય વળાંક', bn: '৩০-দিনের বর্ষা বৃষ্টিপাত সঞ্চয়ন বক্ররেখা', pa: '30-ਦਿਨਾ ਮਾਨਸੂਨ ਮੀਂਹ ਇਕੱਠ ਕਰਵ', kn: '30-ದಿನಗಳ ಮಾನ್ಸೂನ್ ಮಳೆ ಸಂಗ್ರಹ ವಕ್ರರೇಖೆ',
    ml: '30-ദിവസത്തെ മൺസൂൺ മഴ ശേഖരണ വക്രം', or: '୩୦-ଦିନର ମୌସୁମୀ ବର୍ଷା ସଞ୍ଚୟ ବକ୍ରରେଖା'
  },
  'Daily forecast rain vs 30-year IMD climatological normal': {
    hi: 'दैनिक अनुमानित वर्षा बनाम 30-वर्षीय मौसम विभाग सामान्य मानक', mr: 'दैनिक पाऊस अंदाज विरुद्ध ३०-वर्षीय हवामान विभाग सरासरी', te: 'రోజువారీ అంచనా వర్షం వర్సెస్ 30-సంవత్సరాల IMD సాధారణ ప్రమాణం', ta: 'தினசரி கணிக்கப்பட்ட மழை vs 30-ஆண்டு வானிலை ஆய்வு மைய சராசரி',
    gu: 'દૈનિક અંદાજિત વરસાદ વિરુદ્ધ 30-વર્ષીય હવામાન વિભાગ સામાન્ય સરખામણી', bn: 'দৈনিক পূর্বাভাস বৃষ্টি বনাম ৩০-বছরের আবহাওয়া অধিদপ্তর স্বাভাবিক মান', pa: 'ਰੋਜ਼ਾਨਾ ਅਨੁਮਾਨਿਤ ਮੀਂਹ ਬਨਾਮ 30-ਸਾਲਾ ਮੌਸਮ ਵਿਭਾਗ ਆਮ ਔਸਤ', kn: 'ದೈನಂದಿನ ಮುನ್ಸೂಚನೆ ಮಳೆ vs 30-ವರ್ಷಗಳ ಹವಾಮಾನ ಇಲಾಖೆ ಸಾಮಾನ್ಯ ಮಾನದಂಡ',
    ml: 'പ്രതിദിന പ്രവചന മഴയും 30-വർഷത്തെ ശരാശരിയും തമ്മിലുള്ള താരതമ്യം', or: 'ଦୈନିକ ପୂର୍ବାନୁମାନ ବର୍ଷା ବନାମ ୩୦-ବର୍ଷର ପାଣିପାଗ ବିଭାଗ ସାଧାରଣ ମାନକ'
  },
  'Weekly historical progression vs IMD normal curve': {
    hi: 'साप्ताहिक ऐतिहासिक प्रगति बनाम मौसम विभाग सामान्य वक्र', mr: 'साप्ताहिक ऐतिहासिक प्रगती विरुद्ध सरासरी वक्र', te: 'వారపు చారిత్రక పురోగతి వర్సెస్ సాధారణ వక్రరేఖ', ta: 'வாராந்திர வரலாற்று முன்னேற்றம் vs சாதாரண வளைவு',
    gu: 'સાપ્તાહિક ઐતિહાસિક પ્રગતિ વિરુદ્ધ સામાન્ય વળાંક', bn: 'সাপ্তাহিক ঐতিহাসিক অগ্রগতি বনাম স্বাভাবিক বক্ররেখা', pa: 'ਹਫ਼ਤਾਵਾਰੀ ਇਤਿਹਾਸਕ ਪ੍ਰਗਤੀ ਬਨਾਮ ਆਮ ਕਰਵ', kn: 'ಸಾಪ್ತಾಹಿಕ ಐತಿಹಾಸಿಕ ಪ್ರಗತಿ vs ಸಾಮಾನ್ಯ ವಕ್ರರೇಖೆ',
    ml: 'പ്രതിവാര ചരിത്ര പുരോഗതിയും സാധാരണ വക്രവും', or: 'ସାପ୍ତାହିକ ଐତିହାସିକ ପ୍ରଗତି ବନାମ ସାଧାରଣ ବକ୍ରରେଖା'
  },
  '7-Day Forecast Graph': {
    hi: '📅 7-दिवसीय पूर्वानुमान ग्राफ़', mr: '📅 ७-दिवसीय अंदाज आलेख', te: '📅 7-రోజుల మున్సూచన గ్రాఫ్', ta: '📅 7-நாள் முன்னறிவிப்பு வரைபடம்',
    gu: '📅 7-દિવસીય આગાહી ગ્રાફ', bn: '📅 ৭-দিনের পূর্বাভাস গ্রাফ', pa: '📅 7-ਦਿਨਾ ਭਵਿੱਖਬਾਣੀ ਗ੍ਰਾਫ਼', kn: '📅 7-ದಿನಗಳ ಮುನ್ಸೂಚನೆ ಗ್ರಾಫ್',
    ml: '📅 7-ദിവസത്തെ പ്രവചന ഗ്രാഫ്', or: '📅 ୭-ଦିନର ପୂର୍ବାନୁମାନ ଗ୍ରାଫ୍'
  },
  '30-Day Seasonal Graph': {
    hi: '📊 30-दिवसीय मौसमी ग्राफ़', mr: '📊 ३०-दिवसीय हंगामी आलेख', te: '📊 30-రోజుల కాలానుగుణ గ్రాఫ్', ta: '📊 30-நாள் பருவகால வரைபடம்',
    gu: '📊 30-દિવસીય મોસમી ગ્રાફ', bn: '📊 ৩০-দিনের মৌসুমী গ্রাফ', pa: '📊 30-ਦਿਨਾ ਮੌਸਮੀ ਗ੍ਰਾਫ਼', kn: '📊 30-ದಿನಗಳ ಋತುಮಾನ ಗ್ರಾಫ್',
    ml: '📊 30-ദിവസത്തെ സീസണൽ ഗ്രാഫ്', or: '📊 ୩୦-ଦିନର ମୌସୁମୀ ଗ୍ରାଫ୍'
  },
  'Forecast Precipitation (mm)': {
    hi: 'अनुमानित वर्षा (मिमी)', mr: 'अंदाज पाऊस (मिमी)', te: 'అంచనా వర్షపాతం (మి.మీ)', ta: 'கணிக்கப்பட்ட மழைப்பொழிவு (மிமீ)',
    gu: 'અંદાજિત વરસાદ (મીમી)', bn: 'পূর্বাভাস বৃষ্টিপাত (মিমি)', pa: 'ਅਨੁਮਾਨਿਤ ਮੀਂਹ (ਮਿਮੀ)', kn: 'ಮುನ್ಸೂಚನೆ ಮಳೆ (ಮಿ.ಮೀ)',
    ml: 'പ്രവചിച്ച മഴ (മില്ലീമീറ്റർ)', or: 'ପୂର୍ବାନୁମାନ ବର୍ଷା (ମିମି)'
  },
  '30-Year IMD Normal Baseline': {
    hi: '30-वर्षीय मौसम विभाग सामान्य आधार रेखा', mr: '३०-वर्षीय हवामान विभाग सरासरी बेसलाइन', te: '30-సంవత్సరాల IMD సాధారణ బేస్‌లైన్', ta: '30-ஆண்டு வானிலை ஆய்வு மைய சராசரி அடிப்படை',
    gu: '30-વર્ષીય હવામાન વિભાગ સામાન્ય બેઝલાઇન', bn: '৩০-বছরের আবহাওয়া অধিদপ্তর স্বাভাবিক বেসলাইন', pa: '30-ਸਾਲਾ ਮੌਸਮ ਵਿਭਾਗ ਆਮ ਬੇਸਲਾਈਨ', kn: '30-ವರ್ಷಗಳ ಹವಾಮಾನ ಇಲಾಖೆ ಸಾಮಾನ್ಯ ಬೇಸ್‌ಲೈನ್',
    ml: '30-വർഷത്തെ സാധാരണ ശരാശരി അടിസ്ഥാനരേഖ', or: '୩୦-ବର୍ଷର ପାଣିପାଗ ବିଭାଗ ସାଧାରଣ ବେସଲାଇନ୍'
  },
  'Max/Min Temp (°C)': {
    hi: 'अधिकतम/न्यूनतम तापमान (°C)', mr: 'कमाल/किमान तापमान (°C)', te: 'గరిష్ట/కనిష్ట ఉష్ణోగ్రత (°C)', ta: 'அதிகபட்ச/குறைந்தபட்ச வெப்பநிலை (°C)',
    gu: 'મહત્તમ/ન્યૂનતમ તાપમાન (°C)', bn: 'সর্বোচ্চ/সর্বনিম্ন তাপমাত্রা (°C)', pa: 'ਵੱਧ ਤੋਂ ਵੱਧ/ਘੱਟ ਤੋਂ ਘੱਟ ਤਾਪਮਾਨ (°C)', kn: 'ಗರಿಷ್ಠ/ಕನಿಷ್ಠ ತಾಪಮಾನ (°C)',
    ml: 'പരമാവധി/കുറഞ്ഞ താപനില (°C)', or: 'ସର୍ବୋଚ୍ଚ/ସର୍ବନିମ୍ନ ତାପମାତ୍ରା (°C)'
  },
  'Recorded Surplus (mm)': {
    hi: 'दर्ज अधिशेष वर्षा (मिमी)', mr: 'नोंदवलेला अतिरिक्त पाऊस (मिमी)', te: 'నమోదైన అదనపు వర్షం (మి.మీ)', ta: 'பதிவுசெய்யப்பட்ட உபரி மழை (மிமீ)',
    gu: 'નોંધાયેલ વધારે વરસાદ (મીમી)', bn: 'নথিভুক্ত অতিরিক্ত বৃষ্টি (মিমি)', pa: 'ਦਰਜ ਕੀਤਾ ਵਾਧੂ ਮੀਂਹ (ਮਿਮੀ)', kn: 'ದಾಖಲಾದ ಹೆಚ್ಚುವರಿ ಮಳೆ (ಮಿ.ಮೀ)',
    ml: 'രേഖപ്പെടുത്തിയ അധിക മഴ (മില്ലീമീറ്റർ)', or: 'ରେକର୍ଡ ହୋଇଥିବା ଅତିରିକ୍ତ ବର୍ଷା (ମିମି)'
  },
  'Climatological Normal': {
    hi: 'जलवायु सामान्य मानक', mr: 'हवामान सरासरी प्रमाण', te: 'వాతావరణ సాధారణ ప్రమాణం', ta: 'காலநிலை இயல்பான அளவு',
    gu: 'આબોહવા સામાન્ય ધોરણ', bn: 'জলবায়ু স্বাভাবিক মান', pa: 'ਜਲਵਾਯੂ ਆਮ ਪੱਧਰ', kn: 'ಹವಾಮಾನ ಸಾಮಾನ್ಯ ಮಟ್ಟ',
    ml: 'കാലാവസ്ഥാ സാധാരണ നിരക്ക്', or: 'ଜଳବାୟୁ ସାଧାରଣ ମାନକ'
  },
  'Deficit Window': {
    hi: 'वर्षा कमी की अवधि', mr: 'पाऊस तुटवडा काळ', te: 'వర్ష లోటు సమయం', ta: 'மழைப் பற்றாக்குறை காலம்',
    gu: 'વરસાદની ઘટનો ગાળો', bn: 'বৃষ্টির ঘাটতির সময়সীমা', pa: 'ਮੀਂਹ ਦੀ ਘਾਟ ਦਾ ਸਮਾਂ', kn: 'ಮಳೆ ಕೊರತೆಯ ಅವಧಿ',
    ml: 'മഴക്കുറവ് കാലഘട്ടം', or: 'ବର୍ଷା ଅଭାବ ଅବଧି'
  },
  'Live Geospatial Field View': {
    hi: 'लाइव भू-स्थानिक खेत दृश्य', mr: 'थेट भू-स्थानिक शेत दृश्य', te: 'ప్రత్యక్ష జియోస్పేషియల్ ఫీల్డ్ వీక్షణ', ta: 'நேரடி புவிசார் நிலப் பார்வை',
    gu: 'લાઈવ ભૂ-સ્થાનિક ખેતર દ્રશ્ય', bn: 'লাইভ ভৌগোলিক মাঠ দৃশ্য', pa: 'ਲਾਈਵ ਭੂਗੋਲਿਕ ਖੇਤ ਦ੍ਰਿਸ਼', kn: 'ಲೈವ್ ಭೂ-ಪ್ರಾದೇಶಿಕ ಕ್ಷೇತ್ರ ನೋಟ',
    ml: 'തത്സമയ ജിയോസ്പേഷ്യൽ ഫീൽഡ് കാഴ്‌ച', or: 'ଲାଇଭ୍ ଭୂ-ସ୍ଥାନିକ କ୍ଷେତ୍ର ଦୃଶ୍ୟ'
  },
  'Color Street': {
    hi: 'सड़क मानचित्र', mr: 'रस्ता नकाशा', te: 'వీధి పటం', ta: 'தெரு வரைபடம்',
    gu: 'શેરી નકશો', bn: 'রাস্তার মানচিত্র', pa: 'ਸੜਕ ਨਕਸ਼ਾ', kn: 'ರಸ್ತೆ ನಕ್ಷೆ',
    ml: 'തെരുവ് ഭൂപടം', or: 'ରାସ୍ତା ମାନଚିତ୍ର'
  },
  'Satellite': {
    hi: 'उपग्रह (सैटेलाइट)', mr: 'उपग्रह दृश्य', te: 'ఉపగ్రహం', ta: 'செயற்கைக்கோள்',
    gu: 'ઉપગ્રહ દ્રશ્ય', bn: 'স্যাটেলাইট', pa: 'ਸੈਟੇਲਾਈਟ', kn: 'ಉಪಗ್ರಹ',
    ml: 'ഉപഗ്രഹം', or: 'ଉପଗ୍ରହ'
  },
  'Topo': {
    hi: 'स्थलाकृतिक (टोपो)', mr: 'भूप्रदेश नकाशा', te: 'భూభాగం (టోపో)', ta: 'நிலப்பரப்பு (டோபோ)',
    gu: 'ટોપોગ્રાફિક', bn: 'ভূপ্রકৃতি (টোপো)', pa: 'ਟੋਪੋਗ੍ਰਾਫਿਕ', kn: 'ಸ್ಥಳಾಕೃತಿ',
    ml: 'സ്ഥലരൂപം (ടോപ്പോ)', or: 'ଭୂପ୍ରକୃତି (ଟୋପୋ)'
  },
  'Inspect GIS Overlays': {
    hi: 'जीआईएस परतें देखें', mr: 'जीआयएस स्तर तपासा', te: 'జీఐఎస్ పొరలను పరిశీలించండి', ta: 'ஜிஐஎஸ் அடுக்குகளை ஆராய்க',
    gu: 'જીઆઈએસ સ્તરો જુઓ', bn: 'জিআইএস স্তর পরীক্ষা করুন', pa: 'ਜੀਆਈਐਸ ਪਰਤਾਂ ਦੇਖੋ', kn: 'ಜಿಐಎಸ್ ಪದರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    ml: 'ജിഐഎസ് ലെയറുകൾ പരിശോധിക്കുക', or: 'GIS ସ୍ତରଗୁଡ଼ିକ ଯାଞ୍ଚ କରନ୍ତୁ'
  },
  'Survey of India Sovereign Certified': {
    hi: '🇮🇳 भारतीय सर्वेक्षण विभाग द्वारा प्रमाणित', mr: '🇮🇳 भारतीय सर्वेक्षण विभाग प्रमाणित', te: '🇮🇳 సర్వే ఆఫ్ ఇండియా అధికారిక ధృవీకృతం', ta: '🇮🇳 இந்திய நில அளவைத் துறை சான்றளிக்கப்பட்டது',
    gu: '🇮🇳 સર્વે ઓફ ઇન્ડિયા પ્રમાણિત', bn: '🇮🇳 সার্ভে অফ ইন্ডিয়া প্রত্যয়িত', pa: '🇮🇳 ਸਰਵੇ ਆਫ਼ ਇੰਡੀਆ ਪ੍ਰਮਾਣਿਤ', kn: '🇮🇳 ಸರ್ವೆ ಆಫ್ ಇಂಡಿಯಾ ಪ್ರಮಾಣೀಕೃತ',
    ml: '🇮🇳 സർവേ ഓഫ് ഇന്ത്യ സാക്ഷ്യപ്പെടുത്തിയത്', or: '🇮🇳 ସର୍ଭେ ଅଫ୍ ଇଣ୍ଡିଆ ଦ୍ୱାରା ପ୍ରମାଣିତ'
  },
  'Refresh Telemetry': {
    hi: 'आंकड़े ताज़ा करें', mr: 'माहिती रिफ्रेश करा', te: 'డేటాను తాజాకరించండి', ta: 'தரவைப் புதுப்பி',
    gu: 'ડેટા તાજો કરો', bn: 'তথ্য রিফ্রেশ করুন', pa: 'ਡੇਟਾ ਤਾਜ਼ਾ ਕਰੋ', kn: 'ಡೇಟಾ ರಿಫ್ರೆಶ್ ಮಾಡಿ',
    ml: 'ഡാറ്റ പുതുക്കുക', or: 'ତଥ୍ୟ ରିଫ୍ରେଶ୍ କରନ୍ତୁ'
  },
  'Open Full 6-Mode Map': {
    hi: 'पूर्ण 6-मोड मानचित्र खोलें', mr: 'संपूर्ण ६-मोड नकाशा उघडा', te: 'పూర్తి 6-మోడ్ మ్యాప్‌ను తెరవండి', ta: 'முழு 6-முறை வரைபடத்தைத் திற',
    gu: 'સંપૂર્ણ 6-મોડ નકશો ખોલો', bn: 'সম্পূর্ণ ৬-মোড মানচিত্র খুলুন', pa: 'ਪੂਰਾ 6-ਮੋਡ ਨਕਸ਼ਾ ਖੋਲ੍ਹੋ', kn: 'ಸಂಪೂರ್ಣ 6-ಮೋಡ್ ನಕ್ಷೆ ತೆರೆಯಿರಿ',
    ml: 'പൂർണ്ണ 6-മോഡ് മാപ്പ് തുറക്കുക', or: 'ସମ୍ପୂର୍ଣ୍ଣ ୬-ମୋଡ୍ ମାନଚିତ୍ର ଖୋଲନ୍ତୁ'
  },
  'Active Soil & Vegetative Advisory': {
    hi: 'सक्रिय मृदा एवं वानस्पतिक कृषि परामर्श', mr: 'सक्रिय माती व वनस्पती कृषी सल्ला', te: 'క్రియాశీల నేల & వృక్షసంపద వ్యవసాయ సలహా', ta: 'செயலில் உள்ள மண் மற்றும் தாவர வேளாண் ஆலோசனை',
    gu: 'સક્રિય જમીન અને વનસ્પતિ કૃષિ સલાહ', bn: 'সক্রিয় মাটি ও উদ্ভিজ্জ কৃষি পরামর্শ', pa: 'ਸਰਗਰਮ ਮਿੱਟੀ ਅਤੇ ਬਨਸਪਤੀ ਖੇਤੀਬਾੜੀ ਸਲਾਹ', kn: 'ಸಕ್ರಿಯ ಮಣ್ಣು & ಸಸ್ಯ ಕೃಷಿ ಸಲಹೆ',
    ml: 'സജീവ മണ്ണും സസ്യ കാർഷിക നിർദ്ദേശവും', or: 'ସକ୍ରିୟ ମୃତ୍ତିକା ଓ ଉଦ୍ଭିଦ କୃଷି ପରାମର୍ଶ'
  },
  'Recommended sowing window open': {
    hi: 'अनुशंसित बुवाई खिड़की खुली है', mr: 'शिफारस केलेली पेरणी वेळ सुरू आहे', te: 'సిఫార్సు చేయబడిన విత్తే సమయం అనుకూలంగా ఉంది', ta: 'பரிந்துரைக்கப்பட்ட விதைப்பு காலம் திறக்கப்பட்டுள்ளது',
    gu: 'ભલામણ કરેલ વાવણીનો સમય ખુલ્લો છે', bn: 'অনুমোদিত বীজ বপনের সময় উন্মুক্ত', pa: 'ਸਿਫਾਰਸ਼ ਕੀਤੀ ਬਿਜਾਈ ਦਾ ਸਮਾਂ ਸ਼ੁਰੂ ਹੈ', kn: 'ಶಿಫಾರಸು ಮಾಡಿದ ಬಿತ್ತನೆ ಸಮಯ ತೆರೆದಿದೆ',
    ml: 'ശുപാർശ ചെയ്ത വിതയ്ക്കൽ സമയം ആരംഭിച്ചു', or: 'ପରାମର୍ଶିତ ବୁଣିବା ସମୟ ଖୋଲା ଅଛି'
  },
  'Rain Probability': {
    hi: 'वर्षा की संभावना', mr: 'पावसाची शक्यता', te: 'వర్ష సంభావ్యత', ta: 'மழைக்கான வாய்ப்பு',
    gu: 'વરસાદની સંભાવના', bn: 'বৃষ্টির সম্ভাবনা', pa: 'ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ', kn: 'ಮಳೆಯ ಸಂಭವನೀಯತೆ',
    ml: 'മഴ സാധ്യത', or: 'ବର୍ଷା ସମ୍ଭାବନା'
  },
  'Simulate Stress': {
    hi: 'तनाव सिमुलेशन करें', mr: 'तणाव सिम्युलेट करा', te: 'ఒత్తిడిని అనుకరించండి', ta: 'அழுத்தத்தை உருவகப்படுத்துங்கள்',
    gu: 'તાણ સિમ્યુલેટ કરો', bn: 'চাপ সিমুলেট করুন', pa: 'ਤਣਾਅ ਸਿਮੂਲੇਟ ਕਰੋ', kn: 'ಒತ್ತಡವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ',
    ml: 'സമ്മർദ്ദം സിമുലേറ്റ് ചെയ്യുക', or: 'ଚାପ ସିମ୍ୟୁଲେଟ୍ କରନ୍ତୁ'
  },
  'View Guidelines': {
    hi: 'दिशानिर्देश देखें', mr: 'मार्गदर्शक तत्त्वे पहा', te: 'మార్గదర్శకాలను చూడండి', ta: 'வழிகாட்டுதல்களைப் பார்',
    gu: 'માર્ગદર્શિકા જુઓ', bn: 'নির্দেশিকা দেখুন', pa: 'ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ ਦੇਖੋ', kn: 'ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    ml: 'മാർഗ്ഗനിർദ്ദേശങ്ങൾ കാണുക', or: 'ମାର୍ଗଦର୍ଶିକା ଦେଖନ୍ତୁ'
  },
  'Govt. MSP Rate': {
    hi: 'सरकारी एमएसपी दर', mr: 'सरकारी हमीभाव दर', te: 'ప్రభుత్వ కనీస మద్దతు ధర', ta: 'அரசு குறைந்தபட்ச ஆதரவு விலை',
    gu: 'સરકારી ટેકાના ભાવ', bn: 'সরকারি সহায়ক মূল্য', pa: 'ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ', kn: 'ಸರ್ಕಾರಿ ಬೆಂಬಲ ಬೆಲೆ',
    ml: 'സർക്കാർ താങ്ങുവില', or: 'ସରକାରୀ MSP ଦର'
  },
  'Suitability Score': {
    hi: 'उपयुक्तता स्कोर', mr: 'पात्रता गुण', te: 'అనుకూలత స్కోరు', ta: 'பொருத்த மதிப்பெண்',
    gu: 'અનુકૂળતા સ્કોર', bn: 'উপযুক্ততা স্কোর', pa: 'ਢੁਕਵਾਂਪਣ ਸਕੋਰ', kn: 'ಹೊಂದಾಣಿಕೆ ಸ್ಕೋರ್',
    ml: 'അനുയോജ്യത സ്കോർ', or: 'ଉପଯୁକ୍ତତା ସ୍କୋର'
  },
  'Agronomic Fit': {
    hi: 'कृषि-वैज्ञानिक उपयुक्तता', mr: 'कृषी-वैज्ञानिक सुसंगतता', te: 'వ్యవసాయ అనుకూలత', ta: 'வேளாண் பொருத்தம்',
    gu: 'કૃષિ યોગ્યતા', bn: 'কৃষিগত সামঞ্জস্য', pa: 'ਖੇਤੀਬਾੜੀ ਅਨੁਕੂਲਤਾ', kn: 'ಕೃಷಿ ಹೊಂದಾಣಿಕೆ',
    ml: 'കാർഷിക അനുയോജ്യത', or: 'କୃଷି-ବୈଜ୍ଞାନିକ ଉପଯୁକ୍ତତା'
  },
  'Explore All 42+ Crops': {
    hi: 'सभी 42+ फसलें देखें', mr: 'सर्व ४२+ पिके एक्सप्लोर करा', te: 'అన్ని 42+ పంటలను అన్వేషించండి', ta: 'அனைத்து 42+ பயிர்களையும் காண்க',
    gu: 'બધા 42+ પાક જુઓ', bn: 'সমস্ত ৪২+ ফসল অন্বেষণ করুন', pa: 'ਸਾਰੀਆਂ 42+ ਫਸਲਾਂ ਦੇਖੋ', kn: 'ಎಲ್ಲಾ 42+ ಬೆಳೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    ml: 'എല്ലാ 42+ വിളകളും കാണുക', or: 'ସମସ୍ତ ୪୨+ ଫସଲ ଦେଖନ୍ତୁ'
  },
  'NovaVarsha AI HUD Engine': {
    hi: 'नोवावर्षा एआई एचयूडी इंजन', mr: 'नोवावर्षा एआय एचयूडी इंजिन', te: 'నోవావర్ష ఏఐ హెచ్‌యుడి ఇంజిన్', ta: 'நோவாவர்ஷா ஏஐ எச்.யு.டி இயந்திரம்',
    gu: 'નોવાવર્ષા એઆઈ એચયુડી એન્જિન', bn: 'নোভাবার্ষা এআই এইচইউডি ইঞ্জিন', pa: 'ਨੋਵਾਵਰਸ਼ਾ ਏਆਈ ਐਚਯੂਡੀ ਇੰਜਣ', kn: 'ನೋವಾವರ್ಷ ಎಐ ಎಚ್‌ಯುಡಿ ಎಂಜಿನ್',
    ml: 'നോവാവർഷ എഐ എച്ച്‌യുഡി എഞ്ചിൻ', or: 'ନୋଭାବର୍ଷା ଏଆଇ HUD ଇଞ୍ଜିନ୍'
  },
  'Lenovo Hackathon 2026': {
    hi: 'लेनोवो हैकथॉन 2026', mr: 'लेनोवो हॅकॅथॉन २०२६', te: 'లెనోవో హ్యాకథాన్ 2026', ta: 'லெனோவா ஹேக்கத்தான் 2026',
    gu: 'લેનોવો હેકાથોન 2026', bn: 'লেনোভো হ্যাকাথন ২০২৬', pa: 'ਲੈਨੋਵੋ ਹੈਕਾਥਨ 2026', kn: 'ಲೆನೋವೋ ಹ್ಯಾಕಥಾನ್ 2026',
    ml: 'ലെനോവോ ഹാക്കത്തോൺ 2026', or: 'ଲେନୋଭୋ ହ୍ୟାକାଥନ୍ ୨୦୨୬'
  },
  'Viksit Bharat @2047': {
    hi: 'विकसित भारत @2047', mr: 'विकसित भारत @२०४७', te: 'వికసిత్ భారత్ @2047', ta: 'வளர்ந்த பாரதம் @2047',
    gu: 'વિકસિત ભારત @2047', bn: 'বিকশিত ভারত @২০৪৭', pa: 'ਵਿਕਸਤ ਭਾਰਤ @2047', kn: 'ವಿಕಸಿತ ಭಾರತ @2047',
    ml: 'വികസിത് ഭാരതം @2047', or: 'ବିକଶିତ ଭାରତ @୨୦୪୭'
  },
  'AWS Station Sync:': {
    hi: 'मौसम केंद्र समन्वय:', mr: 'हवामान केंद्र समन्वय:', te: 'వాతావరణ కేంద్ర సమకాలీకరణ:', ta: 'வானிலை நிலைய இணைப்பு:',
    gu: 'હવામાન સ્ટેશન સિંક:', bn: 'આબોહવા স্টেশন সিঙ্ক:', pa: 'ਮੌਸਮ ਕੇਂਦਰ ਸਿੰਕ:', kn: 'ಹವಾಮಾನ ನಿಲ್ದಾಣ ಸಿಂಕ್:',
    ml: 'കാലാവസ്ഥാ സ്റ്റേഷൻ സിങ്ക്:', or: 'ପାଣିପାଗ କେନ୍ଦ୍ର ସିଙ୍କ୍:'
  },
  'Coordinates:': {
    hi: 'निर्देशांक:', mr: 'अक्षांश-रेखांश:', te: 'కోఆర్డినేట్లు:', ta: 'ஆயத்தொலைவுகள்:',
    gu: 'અક્ષાંશ-રેખાંશ:', bn: 'স্থানাঙ্ক:', pa: 'ਨਿਰਦੇਸ਼ ਅੰਕ:', kn: 'ನಿರ್ದೇಶಾಂಕಗಳು:',
    ml: 'കോർഡിനേറ്റുകൾ:', or: 'ସ୍ଥାନାଙ୍କ:'
  },
  'Feels like': {
    hi: 'अनुभूत तापमान', mr: 'भासमान तापमान', te: 'అనిపించే ఉష్ణోగ్రత', ta: 'உணரும் வெப்பநிலை',
    gu: 'અનુભવાતું તાપમાન', bn: 'অনুভূত তাপমাত্রা', pa: 'ਮਹਿਸੂਸ ਹੁੰਦਾ ਤਾਪਮਾਨ', kn: 'ಅನಿಸುವ ತಾಪಮಾನ',
    ml: 'അനുഭവപ്പെടുന്ന താപനില', or: 'ଅନୁଭୂତ ତାପମାତ୍ରା'
  },
  'Wind Speed': {
    hi: 'हवा की गति', mr: 'वाऱ्याचा वेग', te: 'గాలి వేగం', ta: 'காற்றின் வேகம்',
    gu: 'પવનની ગતિ', bn: 'বাতাসের गति', pa: 'ਹਵਾ ਦੀ ਗਤੀ', kn: 'ಗಾಳಿಯ ವೇಗ',
    ml: 'കാറ്റിന്റെ വേഗത', or: 'ପବନର ଗତି'
  },
  'Rain Anomaly': {
    hi: 'वर्षा विसंगति', mr: 'पाऊस विसंगती', te: 'వర్షపాత అసమానత', ta: 'மழை மாறுபாடு',
    gu: 'વરસાદ વિસંગતતા', bn: 'বৃষ্টিপাতের অসঙ্গति', pa: 'ਮੀਂਹ ਦਾ ਪਾੜਾ', kn: 'ಮಳೆ ವ್ಯತ್ಯಾಸ',
    ml: 'മഴ വ്യതിയാനം', or: 'ବର୍ଷା ଅସଙ୍ଗତି'
  },

  // ── 28 OFFICIALLY CATALOGED CROPS COMPLETE MULTILINGUAL DICTIONARY ──
  'Barley (Trans-Himalayan / Malting)': {
    hi: 'जौ (हिमालयी / माल्टिंग)', mr: 'सातू (बार्ली)', te: 'జావ బియ్యం (బార్లీ)', ta: 'பார்லி',
    gu: 'જવ (બાર્લી)', bn: 'যব (বার্লি)', pa: 'ਜੌਂ (ਬਾਰਲੇ)', kn: 'ಬಾರ್ಲಿ (ಜವೆಗೋಧಿ)',
    ml: 'ബാർലി', or: 'ଯଅ (ବାର୍ଲି)'
  },
  'Sorghum (Jowar)': {
    hi: 'ज्वार (सोरघम)', mr: 'ज्वारी', te: 'జొన్నలు', ta: 'சோளம்',
    gu: 'જુવાર', bn: 'জোয়ার', pa: 'ਜੁਆਰ', kn: 'ಜೋಳ',
    ml: 'ചോളം (ജോവർ)', or: 'ଜୁଆର'
  },
  'Finger Millet (Ragi)': {
    hi: 'रागी (मडुआ)', mr: 'नाचणी (रागी)', te: 'రాగులు', ta: 'கேழ்வரகு (ராகி)',
    gu: 'નાગલી (રાગી)', bn: 'মারুয়া (রাগি)', pa: 'ਕੋਧਰਾ (ਰਾਗੀ)', kn: 'ರಾಗಿ',
    ml: 'കൂവരക് (റാഗി)', or: 'ମାଣ୍ଡିଆ (ରାଗି)'
  },
  'Kodo Millet': {
    hi: 'कोदो बाजरा', mr: 'कोदरा', te: 'అరికెలు', ta: 'வரகு',
    gu: 'કોદરા', bn: 'কোদা বাজরা', pa: 'ਕੋਦੋ ਮਿਲਟ', kn: 'ಹಾರಕ',
    ml: 'വരക്', or: 'କୋଦୋ ମିଲେଟ୍'
  },
  'Pigeonpea (Arhar / Tur)': {
    hi: 'अरहर / तूर (दाल)', mr: 'तूर डाळ', te: 'కందులు', ta: 'துவரம் பருப்பு',
    gu: 'તુવેર', bn: 'অড়হর ডাল', pa: 'ਅਰਹਰ (ਤੂਰ)', kn: 'ತೊಗರಿ ಬೇಳೆ',
    ml: 'തുവരപ്പരിപ്പ്', or: 'ହରଡ଼ ଡାଲି'
  },
  'Lentil (Masoor)': {
    hi: 'मसूर दाल', mr: 'मसूर', te: 'మైసూర్ పప్పు', ta: 'மைசூர் பருப்பு',
    gu: 'મસૂર દાળ', bn: 'মসুর ডাল', pa: 'ਮਸਰਾਂ ਦੀ ਦਾਲ', kn: 'ಮಸೂರ ಬೇಳೆ',
    ml: 'ചുവന്ന പരിപ്പ് (മസൂർ)', or: 'ମସୁର ଡାଲି'
  },
  'Sunflower': {
    hi: 'सूरजमुखी', mr: 'सूर्यफूल', te: 'పొద్దుతిరుగుడు', ta: 'சூரியகாந்தி',
    gu: 'સૂર્યમુખી', bn: 'সূর্যমুখী', pa: 'ਸੂਰਜਮੁਖੀ', kn: 'ಸೂರ್ಯಕಾಂತಿ',
    ml: 'സൂര്യകാന്തി', or: 'ସୂର୍ଯ୍ୟମୁଖୀ'
  },
  'Sesame (Til)': {
    hi: 'तिल', mr: 'तीळ', te: 'నువ్వులు', ta: 'எள்ளு',
    gu: 'તલ', bn: 'તિલ', pa: 'ਤਿਲ', kn: 'ಎಳ್ಳು',
    ml: 'എള്ള്', or: 'ରାଶି (ତିଳ)'
  },
  'Jute (Golden Fibre)': {
    hi: 'जूट (पटसन)', mr: 'ताग (ज्यूट)', te: 'జనపనార', ta: 'சணல்',
    gu: 'શણ (જૂટ)', bn: 'পাট (সোনালী আঁশ)', pa: 'ਪਟਸਨ (ਜੂਟ)', kn: 'ಸೆಣಬು',
    ml: 'ചണം (ജൂട്ട്)', or: 'ଝୋଟ (ପାଟ)'
  },
  'Tobacco (FCV)': {
    hi: 'तंबाकू (एफसीवी)', mr: 'तंबाखू', te: 'పొగాకు', ta: 'புகையிலை',
    gu: 'તમાકુ', bn: 'তামাক', pa: 'ਤੰਬਾਕੂ', kn: 'ತಂಬಾಕು',
    ml: 'പുകയില', or: 'ଧୁଆଁପତ୍ର (ତମାଖୁ)'
  },
  'Turmeric (Haldi)': {
    hi: 'हल्दी', mr: 'हळद', te: 'పసుపు', ta: 'மஞ்சள்',
    gu: 'હળદર', bn: 'হলুদ', pa: 'ਹਲਦੀ', kn: 'ಅರಿಶಿನ',
    ml: 'മഞ്ഞൾ', or: 'ହଳଦୀ'
  },
  'Red Chilli (Mirch)': {
    hi: 'लाल मिर्च', mr: 'लाल मिरची', te: 'ఎర్ర మిరపకాయలు', ta: 'சிகப்பு மிளகாய்',
    gu: 'લાલ મરચું', bn: 'লাল মরিচ', pa: 'ਲਾਲ ਮਿਰਚ', kn: 'ಒಣಮೆಣಸಿನಕಾಯಿ',
    ml: 'വറ്റൽ മുളക്', or: 'ନାଲି ଲଙ୍କା'
  },
  'Cumin (Jeera)': {
    hi: 'जीरा', mr: 'जिरे', te: 'జీలకర్ర', ta: 'சீரகம்',
    gu: 'જીરું', bn: 'জিরে', pa: 'ਜੀਰਾ', kn: 'ಜೀರಿಗೆ',
    ml: 'ജീരകം', or: 'ଜିରା'
  },
  'Coriander (Dhaniya)': {
    hi: 'धनिया', mr: 'धने', te: 'ధనియాలు', ta: 'கொத்தமல்லி',
    gu: 'ધાણા', bn: 'ধনে', pa: 'ਧਨੀਆ', kn: 'ಕೊತ್ತಂಬರಿ',
    ml: 'മല്ലി', or: 'ଧନିଆ'
  },
  'Ginger (Adrak)': {
    hi: 'अदरक', mr: 'आले', te: 'అల్లం', ta: 'இஞ்சி',
    gu: 'આદુ', bn: 'আদা', pa: 'ਅਦਰਕ', kn: 'ಶುಂಠಿ',
    ml: 'ഇഞ്ചി', or: 'ଅଦା'
  },
  'Potato (Aloo)': {
    hi: 'आलू', mr: 'बटाटा', te: 'బంగాళాదుంప', ta: 'உருளைக்கிழங்கு',
    gu: 'બટાકા', bn: 'আলু', pa: 'ਆਲੂ', kn: 'ಆಲೂಗಡ್ಡೆ',
    ml: 'ഉരുളക്കിഴങ്ങ്', or: 'ଆଳୁ'
  },
  'Onion (Pyaz)': {
    hi: 'प्याज', mr: 'कांदा', te: 'ఉల్లిపాయ', ta: 'வெங்காயம்',
    gu: 'ડુંગળી (કાંદા)', bn: 'পেঁয়াজ', pa: 'ਗੰਢਾ (ਪਿਆਜ਼)', kn: 'ಈರುಳ್ಳಿ',
    ml: 'സവാള (ഉള്ളി)', or: 'ପିଆଜ'
  },
  'Tomato (Tamatar)': {
    hi: 'टमाटर', mr: 'टोमॅटो', te: 'టమోటా', ta: 'தக்காளி',
    gu: 'ટામેટા', bn: 'টমেটো', pa: 'ਟਮਾਟਰ', kn: 'ಟೊಮೆಟೊ',
    ml: 'തക്കാളി', or: 'ବିଲାତି ବାଇଗଣ (ଟମାଟୋ)'
  },
  'Cauliflower (Phoolgobhi)': {
    hi: 'फूलगोभी', mr: 'फ्लॉवर (फुलकोबी)', te: 'క్యాలీఫ్లవర్', ta: 'காலிஃபிளவர்',
    gu: 'ફૂલકોબી', bn: 'ফুলকপি', pa: 'ਫੁੱਲਗੋਭੀ', kn: 'ಹೂಕೋಸು',
    ml: 'കോളിഫ്ലവർ', or: 'ଫୁଲକୋବି'
  },
  'Garlic (Lahsun)': {
    hi: 'लहसुन', mr: 'लसूण', te: 'వెల్లుల్లి', ta: 'பூண்டு',
    gu: 'લસણ', bn: 'রসুন', pa: 'ਲਸਣ', kn: 'ಬೆಳ್ಳುಳ್ಳಿ',
    ml: 'വെളുത്തുള്ളി', or: 'ରସୁଣ'
  },
  'Banana (Kela)': {
    hi: 'केला', mr: 'केळी', te: 'అరటిపండు', ta: 'வாழைப்பழம்',
    gu: 'કેળાં', bn: 'কলা', pa: 'ਕੇਲਾ', kn: 'ಬಾಳೆಹಣ್ಣು',
    ml: 'വാഴപ്പഴം', or: 'କଦଳୀ'
  },
  'Guava (Amrood)': {
    hi: 'अमरूद', mr: 'पेरू', te: 'జామపండు', ta: 'கொய்யாப்பழம்',
    gu: 'જામફળ', bn: 'পেয়ারা', pa: 'ਅਮਰੂਦ', kn: 'ಸೀಬೆಹಣ್ಣು',
    ml: 'പേരയ്ക്ക', or: 'ପିଜୁଳି'
  },
  'Mango (Aam)': {
    hi: 'आम', mr: 'आंबा', te: 'మామిడిపండు', ta: 'மாம்பழம்',
    gu: 'કેરી', bn: 'আম', pa: 'ਅੰਬ', kn: 'ಮಾವಿನಹಣ್ಣು',
    ml: 'മാമ്പഴം', or: 'ଆମ୍ବ'
  },
  'Papaya (Papita)': {
    hi: 'पपीता', mr: 'पपई', te: 'బొప్పాయి', ta: 'பப்பாளி',
    gu: 'પપૈયું', bn: 'পেঁপে', pa: 'ਪਪੀਤਾ', kn: 'ಪಪ್ಪಾಯಿ',
    ml: 'പപ്പായ', or: 'ଅମୃତଭଣ୍ଡା (ପପିତା)'
  },
  'Apple (Seb)': {
    hi: 'सेब', mr: 'सफरचंद', te: 'యాపిల్', ta: 'ஆப்பிள்',
    gu: 'સફરજન', bn: 'আপেল', pa: 'ਸੇਬ', kn: 'ಸೇಬು',
    ml: 'ആപ്പിൾ', or: 'ସେଓ'
  },
  'Ashwagandha (Indian Ginseng)': {
    hi: 'अश्वगंधा', mr: 'अश्वगंधा', te: 'అశ్వగంధ', ta: 'அமுக்கிரா (அஸ்வகந்தா)',
    gu: 'અશ્વગંધા', bn: 'অশ্বগন্ধা', pa: 'ਅਸ਼ਵਗੰਧਾ', kn: 'ಅಶ್ವಗಂಧ',
    ml: 'അമുക്കുരം (അശ്വഗന്ധ)', or: 'ଅଶ୍ୱଗନ୍ଧା'
  },
  'Mentha (Japanese Mint)': {
    hi: 'मेंथा (पुदीना)', mr: 'मेंथा (पुदिना)', te: 'మెంత (పుదీనా)', ta: 'புதினா (மெந்தா)',
    gu: 'મેન્થા (ફુદીનો)', bn: 'মেন্থা (পুদিনা)', pa: 'ਮੈਂਥਾ (ਪੁਦੀਨਾ)', kn: 'ಮೆಂತೆ (ಪುದೀನಾ)',
    ml: 'പുതിന (മെന്ത)', or: 'ମେନ୍ଥା (ପୋଦିନା)'
  },
  'Psyllium (Isabgol)': {
    hi: 'ईसबगोल', mr: 'इसबगोल', te: 'ఇసబ్‌గోల్', ta: 'இசப்கோல்',
    gu: 'ઇસબગુલ', bn: 'ইসবগুল', pa: 'ਈਸਬਗੋਲ', kn: 'ಇಸಬ್‌ಗೋಲ್',
    ml: 'ഐസ്ബാഗോൾ', or: 'ଇସବଗୁଲ'
  },

  // ── XAI & MODEL EXPLANATION COMPLETE TRANSLATIONS ──
  'Transparent Machine Learning': {
    hi: 'पारदर्शी मशीन लर्निंग', mr: 'पारदर्शक मशीन लर्निंग', te: 'పారదర్శక మెషిన్ లెర్నింగ్', ta: 'வெளிப்படையான இயந்திர கற்றல்',
    gu: 'પારદર્શક મશીન લર્નિંગ', bn: 'স্বচ্ছ মেশিন লার্নিং', pa: 'ਪਾਰਦਰਸ਼ੀ ਮਸ਼ੀਨ ਲਰਨਿੰਗ', kn: 'ಪಾರದರ್ಶಕ ಯಂತ್ರ ಕಲಿಕೆ',
    ml: 'സുതാര്യമായ മെഷീൻ ലേണിംഗ്', or: 'ସ୍ୱଚ୍ଛ ମେସିନ୍ ଲର୍ଣ୍ଣିଂ'
  },
  'TreeSHAP Cooperative Game Formulation': {
    hi: 'ट्री-शॅप सहकारी गेम फॉर्मूलेशन', mr: 'TreeSHAP सहकारी गेम सिद्धांत', te: 'TreeSHAP సహకార గేమ్ ఫార్ములేషన్', ta: 'TreeSHAP கூட்டு விளையாட்டு உருவாக்கம்',
    gu: 'TreeSHAP સહકારી ગેમ ફોર્મ્યુલેશન', bn: 'TreeSHAP সমবায় খেলা প্রণয়ন', pa: 'TreeSHAP ਸਹਿਕਾਰੀ ਖੇਡ ਨਿਯਮ', kn: 'TreeSHAP ಸಹಕಾರಿ ಆಟದ ನಿಯಮ',
    ml: 'TreeSHAP സഹകരണ ഗെയിം ഫോർമുലേഷൻ', or: 'TreeSHAP ସହଯୋଗୀ ଖେଳ ସୂତ୍ର'
  },
  'Monsoon Active/Break F1': {
    hi: 'मानसून सक्रिय/विराम F1-स्कोर', mr: 'पाऊस सक्रिय/विश्रांती F1-स्कोर', te: 'వర్షాకాలం క్రియాశీలత/విరామం F1 స్కోర్', ta: 'பருவமழை செயல்/இடைவெளி F1-மதிப்பெண்',
    gu: 'ચોમાસુ સક્રિય/વિરામ F1-સ્કોર', bn: 'বর্ষা সক্রিয়/বিরতি F1-স্কোর', pa: 'ਮਾਨਸੂਨ ਸਰਗਰਮ/ਵਿਰਾਮ F1-ਸਕੋਰ', kn: 'ಮುಂಗಾರು ಸಕ್ರಿಯ/ವಿರಾಮ F1-ಸ್ಕೋರ್',
    ml: 'മൺസൂൺ സജീവം/ഇടവേള F1-സ്കോർ', or: 'ମୌସୁମୀ ସକ୍ରିୟ/ବିରାମ F1-ସ୍କୋର'
  },
  'Tested on 100% unseen 2024 test data': {
    hi: '100% अनदेखे 2024 टेस्ट डेटा पर सत्यापित', mr: '१००% नवीन २०२४ चाचणी डेटावर तपासलेले', te: '100% కనిపించని 2024 పరీక్ష డేటాపై పరీక్షించబడింది', ta: '100% புதிய 2024 களத் தரவுகளில் சோதிக்கப்பட்டது',
    gu: '૧૦૦% અદ્રશ્ય ૨૦૨૪ ટેસ્ટ ડેટા પર ચકાસાયેલ', bn: '১০০% নতুন ২০২৪ টেস্ট তথ্যে যাচাইকৃত', pa: '100% ਅਣਵੇਖੇ 2024 ਟੈਸਟ ਡੇਟਾ ਤੇ ਪਰਖਿਆ', kn: '100% ಹೊಸ 2024 ಪರೀಕ್ಷಾ ದತ್ತಾಂಶದಲ್ಲಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ',
    ml: '100% പുതിയ 2024 ടെസ്റ്റ് ഡാറ്റയിൽ പരിശോധിച്ചത്', or: '୧୦୦% ଅଦୃଶ୍ୟ ୨୦୨୪ ପରୀକ୍ଷା ତଥ୍ୟରେ ପ୍ରମାଣିତ'
  },
  'Precipitation MAE': {
    hi: 'वर्षा औसत त्रुटि (MAE)', mr: 'पाऊस सरासरी त्रुटी (MAE)', te: 'వర్షపాతం సగటు లోపం (MAE)', ta: 'மழை சராசரி பிழை (MAE)',
    gu: 'વરસાદ સરેરાશ ભૂલ (MAE)', bn: 'বৃষ্টিপাতের গড় ত্রুটি (MAE)', pa: 'ਮੀਂਹ ਔਸਤ ਗਲਤੀ (MAE)', kn: 'ಮಳೆ ಸರಾಸರಿ ದೋಷ (MAE)',
    ml: 'മഴയുടെ ശരാശരി പിശക് (MAE)', or: 'ବର୍ଷା ହାରାହାରି ତ୍ରୁଟି (MAE)'
  },
  '-36.2% error reduction vs baseline': {
    hi: 'मानक की तुलना में -36.2% त्रुटि कमी', mr: 'मूळ आधारापेक्षा -३६.२% त्रुटी घट', te: 'బేస్‌లైన్ కంటే -36.2% లోపం తగ్గింపు', ta: 'அடிப்படை அளவை விட -36.2% பிழை குறைப்பு',
    gu: 'બેઝલાઇન કરતાં -૩૬.૨% ભૂલ ઘટાડો', bn: 'বেসলাইনের চেয়ে -৩৬.২% ত্রুটি হ্রাস', pa: 'ਬੇਸਲਾਈਨ ਨਾਲੋਂ -36.2% ਗਲਤੀ ਘਟੀ', kn: 'ಮೂಲ ಮಾದರಿಗಿಂತ -36.2% ದೋಷ ಕಡಿತ',
    ml: 'സാധാരണ മോഡലിനേക്കാൾ -36.2% കുറഞ്ഞ പിശക്', or: 'ମୂଳ ତୁଳନାରେ -୩୬.୨% ତ୍ରୁଟି ହ୍ରାସ'
  },
  'Brier Uncertainty Score': {
    hi: 'ब्रायर अनिश्चितता स्कोर', mr: 'ब्रायर अनिश्चितता गुण', te: 'బ్రైయర్ అనిశ్చితి స్కోరు', ta: 'பிரையர் நிச்சயமற்ற மதிப்பெண்',
    gu: 'બ્રાયર અનિશ્ચિતતા સ્કોર', bn: 'ব্রায়ার অনিশ্চয়তা স্কোর', pa: 'ਬ੍ਰਾਇਰ ਅਨਿਸ਼ਚਿਤਤਾ ਸਕੋਰ', kn: 'ಬ್ರೈಯರ್ ಅನಿಶ್ಚಿತತೆ ಸ್ಕೋರ್',
    ml: 'ബ്രയർ അനിശ്ചിതത്വ സ്കോർ', or: 'ବ୍ରାୟର୍ ଅନିଶ୍ଚିତତା ସ୍କୋର'
  },
  'Sharp calibration; low false-onset rate': {
    hi: 'सटीक अंशांकन; गलत शुरुआत की न्यूनतम दर', mr: 'अचूक कॅलिब्रेशन; कमी चुकीचा अंदाज दर', te: 'ఖచ్చితమైన అమరిక; తక్కువ తప్పుడు ప్రారంభ రేటు', ta: 'துல்லியமான கணக்கீடு; குறைவான தவறான தொடக்க விகிதம்',
    gu: 'ચોક્કસ માપાંકન; ઓછો ખોટો પ્રારંભ દર', bn: 'নির্ভুল ক্রমাঙ্কন; কম ভুল পূর্বাভাস হার', pa: 'ਸਟੀਕ ਕੈਲੀਬ੍ਰੇਸ਼ਨ; ਘੱਟ ਗਲਤ ਅਨੁਮਾਨ ਦਰ', kn: 'ನಿಖರ ಮಾಪನಾಂಕ ನಿರ್ಣಯ; ಕಡಿಮೆ ತಪ್ಪು ದರ',
    ml: 'കൃത്യമായ കാലിബ്രേഷൻ; തെറ്റായ തുടക്ക നിരക്ക് കുറവ്', or: 'ସଠିକ୍ କାଲିବ୍ରେସନ୍; କମ୍ ଭୁଲ୍ ଆରମ୍ଭ ହାର'
  },
  'Attribution Methodology': {
    hi: 'योगदान निर्धारण पद्धति', mr: 'घटक योगदान पद्धती', te: 'లక్షణ నిర్ధారణ పద్ధతి', ta: 'பண்புக்கூறு ஒதுக்கீட்டு முறை',
    gu: 'યોગદાન નિર્ધારણ પદ્ધતિ', bn: 'বৈশিষ্ট্য নির্ধারণ পদ্ধতি', pa: 'ਵਿਸ਼ੇਸ਼ਤਾ ਨਿਰਧਾਰਨ ਵਿਧੀ', kn: 'ಗುಣಲಕ್ಷಣ ನಿರ್ಧರಣೆ ವಿಧಾನ',
    ml: 'സവിശേഷത നിർണ്ണയ രീതി', or: 'ବିଶେଷତା ନିର୍ଦ୍ଧାରଣ ପ୍ରଣାଳୀ'
  },
  'Cooperative Shapley marginal values': {
    hi: 'सहकारी शेपली सीमांत मूल्य', mr: 'सहकारी शेपली सीमांत मूल्ये', te: 'సహకార షాప్లీ మార్జినల్ విలువలు', ta: 'கூட்டு ஷாப்லி விளிம்பு மதிப்புகள்',
    gu: 'સહકારી શેપલી સીમાંત મૂલ્યો', bn: 'সমবায় শ্যাপলে প্রান্তিক মান', pa: 'ਸਹਿਕਾਰੀ ਸ਼ੈਪਲੇ ਸੀਮਾਂਤ ਮੁੱਲ', kn: 'ಸಹಕಾರಿ ಶ್ಯಾಪ್ಲಿ ಅಂಚಿನ ಮೌಲ್ಯಗಳು',
    ml: 'സഹകരണ ഷാപ്ലി മാർജിനൽ മൂല്യങ്ങൾ', or: 'ସହଯୋଗୀ ଶାପଲି ସୀମାନ୍ତ ମୂଲ୍ୟ'
  },
  'SHAP Feature Attribution Waterfall': {
    hi: 'शॅप (SHAP) विशेषता योगदान वॉटरफॉल', mr: 'SHAP घटक योगदान वॉटरफॉल चार्ट', te: 'SHAP ఫీచర్ అట్రిబ్యూషన్ వాటర్‌ఫాల్', ta: 'SHAP பண்புக்கூறு நீர்வீழ்ச்சி வரைபடம்',
    gu: 'SHAP વિશેષતા યોગદાન વોટરફોલ', bn: 'SHAP বৈশিষ্ট্য অবদান জলপ্রপাত গ্রাফ', pa: 'SHAP ਵਿਸ਼ੇਸ਼ਤਾ ਯੋਗਦਾਨ ਵਾਟਰਫਾਲ', kn: 'SHAP ವೈಶಿಷ್ಟ್ಯ ಕೊಡುಗೆ ಜಲಪಾತ ಚಾರ್ಟ್',
    ml: 'SHAP സവിശേഷത നിർണ്ണയ വാട്ടർഫാൾ ചാർട്ട്', or: 'SHAP ବିଶେଷତା ଯୋଗଦାନ ୱାଟରଫଲ୍'
  },
  '7-Day Cumulative Rain (64mm)': {
    hi: '7-दिवसीय संचयी वर्षा (64 मिमी)', mr: '७-दिवसीय एकूण पाऊस (६४ मिमी)', te: '7-రోజుల సంచిత వర్షపాతం (64 మి.మీ)', ta: '7-நாள் மொத்த மழை (64 மிமீ)',
    gu: '૭-દિવસીય સંચિત વરસાદ (૬૪ મિમી)', bn: '৭-দিনের সঞ্চিত বৃষ্টি (৬৪ মিমি)', pa: '7-ਦਿਨਾਂ ਦਾ ਕੁੱਲ ਮੀਂਹ (64 ਮਿਲੀਮੀਟਰ)', kn: '7-ದಿನಗಳ ಒಟ್ಟು ಮಳೆ (64 ಮಿಮೀ)',
    ml: '7-ദിവസത്തെ ആകെ മഴ (64 മി.മീ)', or: '୭-ଦିନିଆ ସଞ୍ଚିତ ବର୍ଷା (୬୪ ମିମି)'
  },
  'Current rainfall matches optimal tillering intake (55–75mm)': {
    hi: 'वर्तमान वर्षा कल्ले फूटने के लिए इष्टतम आवश्यकता (55-75 मिमी) से मेल खाती है', mr: 'सध्याचा पाऊस फुटवे फुटण्याच्या अवस्थेसाठी आवश्यक (५५-७५ मिमी) पाण्याशी जुळतो', te: 'ప్రస్తుత వర్షపాతం పిలకల దశకు అవసరమైన (55-75 మి.మీ) నీటికి సరిపోతుంది', ta: 'தற்போதைய மழை தூர்கட்டும் நிலைக்கு உகந்த (55-75 மிமீ) தேவைக்கு பொருந்துகிறது',
    gu: 'વર્તમાન વરસાદ ફૂટવાની અવસ્થા માટે શ્રેષ્ઠ (૫૫-૭૫ મિમી) સાથે મેળ ખાય છે', bn: 'বর্তমান বৃষ্টিপাত কুশি গজানোর জন্য অনুকূল (৫৫-৭৫ মিমি) চাহিদার সাথে মিলে যায়', pa: 'ਮੌਜੂਦਾ ਮੀਂਹ ਫੋਟ ਪੈਣ ਦੇ ਪੜਾਅ ਲਈ ਲੋੜੀਂਦੇ (55-75 ਮਿਲੀਮੀਟਰ) ਅਨੁਕੂਲ ਹੈ', kn: 'ಪ್ರಸ್ತುತ ಮಳೆ ಕವಲೊಡೆಯುವ ಹಂತಕ್ಕೆ ಸೂಕ್ತವಾದ (55-75 ಮಿಮೀ) ಅಗತ್ಯಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
    ml: 'നിലവിലെ മഴ പൊട്ടിമുളയ്ക്കുന്ന ഘട്ടത്തിന് ആവശ്യമായ (55-75 മി.മീ) അളവിനോട് യോജിക്കുന്നു', or: 'ବର୍ତ୍ତମାନର ବର୍ଷା ପିଲ ଦେବା ପାଇଁ ଉପଯୁକ୍ତ (୫୫-୭୫ ମିମି) ସହିତ ମେଳ ଖାଉଛି'
  },
  'Thermal Window (28.4°C)': {
    hi: 'तापीय स्तर (28.4°C)', mr: 'तापमान पातळी (२८.४°C)', te: 'ఉష్ణోగ్రత పరిధి (28.4°C)', ta: 'வெப்பநிலை நிலை (28.4°C)',
    gu: 'તાપમાન સ્તર (૨૮.૪°C)', bn: 'તાપમાન સ્તર (২৮.৪°C)', pa: 'ਤਾਪਮਾਨ ਪੱਧਰ (28.4°C)', kn: 'ತಾಪಮಾನ ಮಟ್ಟ (28.4°C)',
    ml: 'താപനില തലം (28.4°C)', or: 'ତାପଜ ସ୍ତର (୨୮.୪°C)'
  },
  'Within optimal photosynthetic band (24°C–32°C)': {
    hi: 'अनुकूल प्रकाश संश्लेषण सीमा (24°C–32°C) के भीतर', mr: 'अनुकूल प्रकाशसंश्लेषण मर्यादेत (२४°C–३२°C)', te: 'అనుకూల కిరణజన్య సంయోగక్రియ పరిధిలో (24°C–32°C)', ta: 'உகந்த ஒளிச்சேர்க்கை வரம்பிற்குள் (24°C–32°C)',
    gu: 'શ્રેષ્ઠ પ્રકાશસંશ્લેષણ મર્યાદા (૨૪°C–૩૨°C) ની અંદર', bn: 'অনুকূল সালোকসংশ্লেষণ সীমার (২৪°C–৩২°C) মধ্যে', pa: 'ਅਨੁਕੂਲ ਪ੍ਰਕਾਸ਼ ਸੰਸਲੇਸ਼ਣ ਸੀਮਾ (24°C–32°C) ਦੇ ਅੰਦਰ', kn: 'ಸೂಕ್ತ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ (24°C–32°C)',
    ml: 'അനുയോജ്യമായ പ്രകാശസംശ്ലේෂണ പരിധിക്കുള്ളിൽ (24°C–32°C)', or: 'ଉପଯୁକ୍ତ ଆଲୋକସଂଶ୍ଳେଷଣ ସୀମା (୨୪°C–୩୨°C) ମଧ୍ୟରେ'
  },
  'Positive IOD Phase (DMI +0.42)': {
    hi: 'सकारात्मक हिंद महासागर द्विध्रुव (IOD DMI +0.42)', mr: 'सकारात्मक हिंदी महासागर द्विध्रुव (IOD DMI +०.४२)', te: 'సానుకూల హిందూ మహాసముద్ర ద్విధ్రువం (IOD DMI +0.42)', ta: 'நேர்மறை இந்தியப் பெருங்கடல் இருமுனை (IOD DMI +0.42)',
    gu: 'ધન હિંદ મહાસાગર દ્વિધ્રુવ (IOD DMI +૦.૪૨)', bn: 'ইতিবাচক ভারত মহাসাগরীয় ডাইপোল (IOD DMI +০.৪২)', pa: 'ਸਕਾਰਾਤਮਕ ਹਿੰਦ ਮਹਾਸਾਗਰ ਡਾਈਪੋਲ (IOD DMI +0.42)', kn: 'ಧನಾತ್ಮಕ ಹಿಂದೂ ಮಹಾಸಾಗರ ದ್ವಿಧ್ರುವ (IOD DMI +0.42)',
    ml: 'പോസിറ്റീവ് ഇന്ത്യൻ മഹാസമുദ്ര ഡൈപോൾ (IOD DMI +0.42)', or: 'ସକାରାତ୍ମକ ଭାରତ ମହାସାଗର ଦ୍ୱିଧ୍ରୁବ (IOD DMI +୦.୪୨)'
  },
  'Sustains equatorial monsoon moisture flux into central/north India': {
    hi: 'मध्य और उत्तर भारत में मानसूनी नमी के प्रवाह को निरंतर बनाए रखता है', mr: 'मध्य आणि उत्तर भारतात मान्सूनच्या ओलाव्याचा ओघ कायम ठेवतो', te: 'మధ్య మరియు ఉత్తర భారతదేశంలోకి వర్షాకాల తేమ ప్రవాహాన్ని స్థిరంగా ఉంచుతుంది', ta: 'மத்திய மற்றும் வட இந்தியாவில் பருவமழை ஈரப்பத ஓட்டத்தைத் தக்கவைக்கிறது',
    gu: 'મધ્ય અને ઉત્તર ભારતમાં ચોમાસાના ભેજનો પ્રવાહ જાળવી રાખે છે', bn: 'মধ্য ও উত্তর ভারতে মৌসুমি আর্দ্রতার প্রবাহ বজায় রাখে', pa: 'ਮੱਧ ਅਤੇ ਉੱਤਰੀ ਭਾਰਤ ਵਿੱਚ ਮਾਨਸੂਨ ਨਮੀ ਦੇ ਵਹਾਅ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ', kn: 'ಮಧ್ಯ ಮತ್ತು ಉತ್ತರ ಭಾರತಕ್ಕೆ ಮುಂಗಾರು ತೇವಾಂಶದ ಹರಿವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುತ್ತದೆ',
    ml: 'മധ്യ, ഉത്തരേന്ത്യൻ കാർഷിക മേഖലകളിലേക്ക് മൺസൂൺ ഈർപ്പ പ്രവാഹം നിലനിർത്തുന്നു', or: 'ମଧ୍ୟ ଓ ଉତ୍ତର ଭାରତକୁ ମୌସୁମୀ ଜଳୀୟବାଷ୍ପ ପ୍ରବାହକୁ ବଜାୟ ରଖେ'
  },
  'Soil Field Moisture (32%)': {
    hi: 'मृदा क्षेत्र नमी (32%)', mr: 'मातीतील ओलावा (३२%)', te: 'నేల తేమ పరిమాణం (32%)', ta: 'மண் ஈரப்பதம் (32%)',
    gu: 'જમીન ભેજ ક્ષમતા (૩૨%)', bn: 'মাটির আর্দ্রতা (৩২%)', pa: 'ਮਿੱਟੀ ਦੀ ਨਮੀ (32%)', kn: 'ಮಣ್ಣಿನ ತೇವಾಂಶ (32%)',
    ml: 'മണ്ണിലെ ഈർപ്പം (32%)', or: 'ମାଟିର ଓଦା ଅଂଶ (୩୨%)'
  },
  'Adequate saturation in top 30cm root depth': {
    hi: 'शीर्ष 30 सेमी जड़ क्षेत्र में पर्याप्त नमी संतृप्ति', mr: 'वरच्या ३० सेमी मुळांच्या थरात पुरेसा ओलावा', te: 'పై 30 సెం.మీ వేరు లోతులో తగినంత తేమ సంతృప్తత', ta: 'மேல் 30 செ.மீ வேர் ஆழத்தில் போதுமான ஈரப்பதம்',
    gu: 'ટોચના ૩૦ સેમી મૂળ વિસ્તારમાં પૂરતો ભેજ', bn: 'উপরের ৩০ সেমি শিকড়ের স্তরে পর্যাপ্ত আর্দ্রতা', pa: 'ਉਪਰਲੇ 30 ਸੈਂਟੀਮੀਟਰ ਜੜ੍ਹ ਖੇਤਰ ਵਿੱਚ ਲੋੜੀਂਦੀ ਨਮੀ', kn: 'ಮೇಲಿನ 30 ಸೆಂ.ಮೀ ಬೇರಿನ ಆಳದಲ್ಲಿ ಸಾಕಷ್ಟು ತೇವಾಂಶ',
    ml: 'മുകളിലെ 30 സെ.മീ വേരുപടലത്തിൽ മതിയായ ഈർപ്പ സാന്നിധ്യം', or: 'ଉପର ୩୦ ସେମି ଚେର ଅଞ୍ଚଳରେ ଯଥେଷ୍ଟ ଆର୍ଦ୍ରତା'
  },
  '10-Day Dry Break Risk Probability': {
    hi: '10-दिवसीय शुष्क दौर जोखिम संभावना', mr: '१० दिवसांचा कोरडा काळ धोका संभाव्यता', te: '10-రోజుల పొడి విరామ ప్రమాద సంభావ్యత', ta: '10-நாள் வறட்சி இடைவெளி அபாய நிகழ்தகவு',
    gu: '૧૦-દિવસીય સૂકા તબક્કાની જોખમ સંભાવના', bn: '১০ দিনের শুষ্ক বিরতির ঝুঁকি সম্ভাবনা', pa: '10-ਦਿਨਾਂ ਦੇ ਸੁੱਕੇ ਦੌਰ ਦੇ ਜੋਖਮ ਦੀ ਸੰਭਾਵਨਾ', kn: '10-ದಿನಗಳ ಒಣ ವಿರಾಮದ ಅಪಾಯ ಸಂಭವನೀಯತೆ',
    ml: '10-ദിവസത്തെ വരണ്ട ഇടവേള അപകടസാധ്യത', or: '୧୦-ଦିନିଆ ଶୁଷ୍କ ବିରାମ ବିପଦ ସମ୍ଭାବନା'
  },
  '38% probability of dry break >7 days during panicle initiation': {
    hi: 'बाली निकलने के दौरान 7 दिनों से अधिक सूखे दौर की 38% संभावना', mr: 'लोंब्या भरण्याच्या काळात ७ दिवसांपेक्षा जास्त कोरड्या काळाची ३८% शक्यता', te: 'కంకి ఏర్పడే దశలో 7 రోజుల కంటే ఎక్కువ పొడి విరామం వచ్చే అవకాశం 38%', ta: 'கதிர் உருவாகும் தருணத்தில் 7 நாட்களுக்கு மேல் வறட்சி ஏற்பட 38% வாய்ப்பு',
    gu: 'કણસું બેસવાના સમયે ૭ દિવસથી વધુ સૂકા તબક્કાની ૩૮% સંભાવના', bn: 'শীষ বেরোনোর সময় ৭ দিনের বেশি অনাবৃষ্টির ৩৮% সম্ভাবনা', pa: 'ਸਿੱਟਾ ਨਿਕਲਣ ਸਮੇਂ 7 ਦਿਨਾਂ ਤੋਂ ਵੱਧ ਸੁੱਕੇ ਦੌਰ ਦੀ 38% ਸੰਭਾਵਨਾ', kn: 'ತೆನೆ ಮೂಡುವ ಸಮಯದಲ್ಲಿ 7 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಒಣ ಹವೆಗೆ 38% ಸಂಭವನೀಯತೆ',
    ml: 'കതിരുകൾ രൂപപ്പെടുന്ന ഘട്ടത്തിൽ 7 ദിവസത്തിൽ കൂടുതൽ മഴക്കുറവിന് 38% സാധ്യത', or: 'କେଣ୍ଡା ବାହାରିବା ସମୟରେ ୭ ଦିନରୁ ଅଧିକ ଶୁଷ୍କତାର ୩୮% ସମ୍ଭାବନା'
  },
  'ENSO ONI Index (-0.3)': {
    hi: 'एनसो ओएनआई सूचकांक (-0.3)', mr: 'ENSO ONI निर्देशांक (-०.३)', te: 'ENSO ONI సూచిక (-0.3)', ta: 'ENSO ONI குறியீடு (-0.3)',
    gu: 'ENSO ONI સૂચકાંક (-૦.૩)', bn: 'ENSO ONI সূচক (-০.৩)', pa: 'ENSO ONI ਸੂਚਕਾਂਕ (-0.3)', kn: 'ENSO ONI ಸೂಚ್ಯಂಕ (-0.3)',
    ml: 'ENSO ONI സൂചിക (-0.3)', or: 'ENSO ONI ସୂଚକାଙ୍କ (-୦.୩)'
  },
  'Neutral-La Niña transition creates erratic withdrawal timing': {
    hi: 'तटस्थ-ला नीना संक्रमण से मानसून वापसी के समय में अनिश्चितता संभव', mr: 'तटस्थ ते ला निना संक्रमणामुळे परतीच्या पावसाची वेळ अनिश्चित', te: 'న్యూట్రల్-లా నినా పరివర్తన కారణంగా తిరోగమన సమయంలో అనిశ్చితి', ta: 'நியூட்ரல்-லா நினா மாற்றத்தால் பருவமழை விடைபெறும் நேரத்தில் மாறுபாடு',
    gu: 'તટસ્થ-લા નીના સંક્રમણથી ચોમાસાની વિદાય અનિયમિત બની શકે છે', bn: 'নিরপেক্ষ-লা নিনা পরিবর্তনের ফলে বর্ষা প্রত্যাহারের সময়ে অনিশ্চয়তা', pa: 'ਨਿਰਪੱਖ-ਲਾ ਨੀਨਾ ਬਦਲਾਅ ਕਾਰਨ ਮਾਨਸੂਨ ਵਾਪਸੀ ਸਮੇਂ ਵਿੱਚ ਅਨਿਸ਼ਚਿਤਤਾ', kn: 'ತಟಸ್ಥ-ಲಾ ನಿನಾ ಪರಿವರ್ತನೆಯಿಂದ ಮುಂಗಾರು ನಿರ್ಗಮನ ಸಮಯದಲ್ಲಿ ಅನಿಶ್ಚಿತತೆ',
    ml: 'ന്യൂട്രൽ-ലാ നിന സംക്രമണം മൺസൂൺ പിൻവാങ്ങൽ സമയത്ത് അനിശ്ചിതത്വം ഉണ്ടാക്കുന്നു', or: 'ତଟସ୍ଥ-ଲା ନିନା ପରିବର୍ତ୍ତନ ଯୋଗୁଁ ମୌସୁମୀ ପ୍ରତ୍ୟାହାର ସମୟରେ ଅନିଶ୍ଚିତତା'
  },

  // ── SCENARIO LAB COMPLETE PHRASES ──
  'Quick-Load Situational Stress Presets:': {
    hi: 'त्वरित लोड परिस्थितिजन्य तनाव प्रीसेट:', mr: 'परिस्थितीजन्य ताण प्रीसेट्स द्रुत-लोड करा:', te: 'సత్వర పరిస్థితుల ఒత్తిడి ప్రీసెట్లు:', ta: 'விரைவு அவசரகால அழுத்த முன்னமைவுகள்:',
    gu: 'ઝડપી પરિસ્થિતિગત તણાવ પ્રીસેટ્સ:', bn: 'দ্রুত পরিস্থিতিগত চাপ প্রিসেট:', pa: 'ਸਥਿਤੀ ਤਣਾਅ ਪ੍ਰੀਸੈਟਸ ਤੁਰੰਤ ਲੋਡ ਕਰੋ:', kn: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಒತ್ತಡ ಪೂರ್ವನಿಗದಿಗಳು:',
    ml: 'അടിയന്തര പ്രതിസന്ധി പ്രീസെറ്റുകൾ:', or: 'ପରିସ୍ଥିତିଜନିତ ଚାପ ପ୍ରିସେଟ୍ ତୁରନ୍ତ ଲୋଡ୍ କରନ୍ତୁ:'
  },
  'Severe Heatwave Spike (+4.5°C)': {
    hi: 'तीव्र लू का झटका (+4.5°C)', mr: 'तीव्र उष्णतेची लाट (+४.५°C)', te: 'తీవ్రమైన వేడి గాలులు (+4.5°C)', ta: 'கடுமையான வெப்ப அலை (+4.5°C)',
    gu: 'અતિશય હીટવેવ ઝટકો (+૪.૫°C)', bn: 'চরম তাপদাহের ধাক্কা (+৪.৫°C)', pa: 'ਭਾਰੀ ਲੂ ਦਾ ਪ੍ਰਭਾਵ (+4.5°C)', kn: 'ತೀವ್ರ ಬಿಸಿಗಾಳಿ (+4.5°C)',
    ml: 'തീവ്രമായ ഉഷ്ണതരംഗം (+4.5°C)', or: 'ପ୍ରଚଣ୍ଡ ଗ୍ରୀଷ୍ମ ପ୍ରବାହ (+୪.୫°C)'
  },
  'Extended 14-Day Dry Break (-45% Rain)': {
    hi: '14-दिवसीय लंबा सूखा दौर (-45% वर्षा)', mr: '१४ दिवसांचा लांबलेला कोरडा काळ (-४५% पाऊस)', te: 'పొడిగించిన 14-రోజుల పొడి విరామం (-45% వర్షం)', ta: 'நீட்டிக்கப்பட்ட 14-நாள் வறட்சி (-45% மழை)',
    gu: '૧૪-દિવસીય લાંબો સૂકો તબક્કો (-૪૫% વરસાદ)', bn: '১৪ দিনের দীর্ঘ অনাবৃষ্টি (-৪৫% বৃষ্টি)', pa: '14 ਦਿਨਾਂ ਦਾ ਲੰਮਾ ਸੁੱਕਾ ਦੌਰ (-45% ਮੀਂਹ)', kn: '14 ದಿನಗಳ ದೀರ್ಘ ಒಣ ಹವೆ (-45% ಮಳೆ)',
    ml: 'നീണ്ട 14-ദിവസത്തെ വരൾച്ച (-45% മഴ)', or: '୧୪-ଦିନିଆ ଦୀର୍ଘ ଶୁଷ୍କତା (-୪୫% ବର୍ଷା)'
  },
  'Sudden Monsoon Deluge (+75% Rain)': {
    hi: 'अचानक मानसूनी मूसलाधार वर्षा (+75% वर्षा)', mr: 'अचानक मुसळधार पाऊस (+७५% पाऊस)', te: 'ఆకస్మిక భారీ వర్షపాతం (+75% వర్షం)', ta: 'திடீர் கனமழை வெள்ளம் (+75% மழை)',
    gu: 'અચાનક ભારે વરસાદી પૂર (+૭૫% વરસાદ)', bn: 'হঠাৎ ভারী বর্ষণ প্লাবন (+৭৫% বৃষ্টি)', pa: 'ਅਚਾਨਕ ਭਾਰੀ ਮੀਂਹ ਦਾ ਹੜ੍ਹ (+75% ਮੀਂਹ)', kn: 'ಧಿಡೀರ್ ಭಾರೀ ಮಳೆ ಪ್ರವಾಹ (+75% ಮಳೆ)',
    ml: 'പെട്ടെന്നുള്ള അതിതീവ്ര മഴ (+75% മഴ)', or: 'ହଠାତ୍ ପ୍ରବଳ ମୌସୁମୀ ବର୍ଷା (+୭୫% ବର୍ଷା)'
  },
  'Aquifer Depletion (Tube-well Failure)': {
    hi: 'भूजल स्तर में गिरावट (नलकूप विफलता)', mr: 'भूजल पातळीत तीव्र घट (बोअरवेल अपयश)', te: 'భూగర్భ జలాల క్షీణత (బోర్‌వెల్ వైఫల్యం)', ta: 'நிலத்தடி நீர் பற்றாக்குறை (குழாய் கிணறு தோல்வி)',
    gu: 'ભૂગર્ભ જળ સ્તરમાં ઘટાડો (બોરવેલ નિષ્ફળતા)', bn: 'ভূগর্ভস্থ জলের তীব্র হ্রাস (নলকূপ ব্যর্থতা)', pa: 'ਧਰਤੀ ਹੇਠਲੇ ਪਾਣੀ ਦਾ ਘਟਣਾ (ਟਿਊਬਵੈੱਲ ਫੇਲ੍ਹ)', kn: 'ಅಂತರ್ಜಲ ಕುಸಿತ (ಕೊಳವೆಬಾವಿ ವೈಫಲ್ಯ)',
    ml: 'ഭൂഗർഭജല ശോഷണം (കുഴൽക്കിണർ തകരാർ)', or: 'ଭୂତଳ ଜଳସ୍ତର ହ୍ରାସ (ନଳକୂପ ବିଫଳତା)'
  },
  'Adjust Environmental Parameters': {
    hi: 'पर्यावरणीय मापदंड समायोजित करें', mr: 'पर्यावरणीय निकष समायोजित करा', te: 'పర్యావరణ పారామితులను సర్దుబాటు చేయండి', ta: 'சுற்றுச்சூழல் அளவீடுகளை மாற்றியமைக்கவும்',
    gu: 'પર્યાવરણીય પરિમાણો સમાયોજિત કરો', bn: 'পরিবেশগত প্যারামিটার সমন্বয় করুন', pa: 'ਵਾਤਾਵਰਣ ਮਾਪਦੰਡ ਵਿਵਸਥਿਤ ਕਰੋ', kn: 'ಪರಿಸರ ನಿಯತಾಂಕಗಳನ್ನು ಹೊಂದಿಸಿ',
    ml: 'പാരിസ്ഥിതിക ഘടകങ്ങൾ ക്രമീകരിക്കുക', or: 'ପରିବେଶ ମାନଦଣ୍ଡ ସଜାଡ଼ନ୍ତୁ'
  },
  'Monsoon Rainfall Deviation:': {
    hi: 'मानसून वर्षा विचलन:', mr: 'मान्सून पाऊस तफावत:', te: 'వర్షాకాల వర్షపాత వ్యత్యాసం:', ta: 'பருவமழை விலகல்:',
    gu: 'ચોમાસુ વરસાદ વિચલન:', bn: 'মৌসুমি বৃষ্টিপাতের বিচ্যুতি:', pa: 'ਮਾਨਸੂਨ ਮੀਂਹ ਦਾ ਪਾੜਾ:', kn: 'ಮುಂಗಾರು ಮಳೆ ವ್ಯತ್ಯಾಸ:',
    ml: 'മൺസൂൺ മഴ വ്യതിയാനം:', or: 'ମୌସୁମୀ ବର୍ଷା ବିଚ୍ୟୁତି:'
  },
  'Ambient Temperature Offset:': {
    hi: 'परिवेश तापमान परिवर्तन:', mr: 'वातावरणीय तापमान बदल:', te: 'పరిసర ఉష్ణోగ్రత మార్పు:', ta: 'சுற்றுப்புற வெப்பநிலை மாற்றம்:',
    gu: 'વાતાવરણ તાપમાન ફેરફાર:', bn: 'পরিবেষ্টিত তাপমাত্রা পরিবর্তন:', pa: 'ਤਾਪਮਾਨ ਵਿੱਚ ਬਦਲਾਅ:', kn: 'ಸುತ್ತಮುತ್ತಲಿನ ತಾಪಮಾನ ಬದಲಾವಣೆ:',
    ml: 'അന്തരീക്ഷ താപനില വ്യതിയാനം:', or: 'ବାୟୁମଣ୍ଡଳୀୟ ତାପମାତ୍ରା ପରିବର୍ତ୍ତନ:'
  },
  'Planned Sowing Window Shift:': {
    hi: 'नियोजित बुवाई खिड़की में बदलाव:', mr: 'नियोजित पेरणी वेळेत बदल:', te: 'ప్రణాళికాబద్ధమైన విత్తే సమయ మార్పు:', ta: 'திட்டமிட்ட விதைப்பு கால மாற்றம்:',
    gu: 'આયોજિત વાવણી સમયમાં ફેરફાર:', bn: 'পরিকল্পিত বপনের সময় পরিবর্তন:', pa: 'ਯੋਜਨਾਬੱਧ ਬਿਜਾਈ ਸਮੇਂ ਵਿੱਚ ਤਬਦੀਲੀ:', kn: 'ಯೋಜಿತ ಬಿತ್ತನೆ ಅವಧಿ ಬದಲಾವಣೆ:',
    ml: 'ആസൂത്രിത വിതയ്ക്കൽ സമയ മാറ്റം:', or: 'ଯୋଜିତ ବୁଣିବା ସମୟରେ ପରିବର୍ତ୍ତନ:'
  },
  'Irrigation & Water Management:': {
    hi: 'सिंचाई एवं जल प्रबंधन:', mr: 'सिंचन व पाणी व्यवस्थापन:', te: 'నీటిపారుదల & నీటి నిర్వహణ:', ta: 'பாசனம் மற்றும் நீர் மேலாண்மை:',
    gu: 'સિંચાઈ અને જળ વ્યવસ્થાપન:', bn: 'সেચ ও জল ব্যবস্থাপনা:', pa: 'ਸਿੰਚਾਈ ਅਤੇ ਪਾਣੀ ਪ੍ਰਬੰਧਨ:', kn: 'ನೀರಾವರಿ & ಜಲ ನಿರ್ವಹಣೆ:',
    ml: 'ജലസേചനവും ജല പരിപാലനവും:', or: 'ଜଳସେଚନ ଓ ଜଳ ପରିଚାଳନା:'
  },
  'Canal Irrigation': {
    hi: 'नहरी सिंचाई', mr: 'कालवा सिंचन', te: 'కాలువ నీటిపారుదల', ta: 'கால்வாய் பாசனம்',
    gu: 'નહેર સિંચાઈ', bn: 'খাল সেচ', pa: 'ਨਹਿਰੀ ਸਿੰਚਾਈ', kn: 'ಕಾಲುವೆ ನೀರಾವರಿ',
    ml: 'കനാൽ ജലസേചനം', or: 'କେନାଲ ଜଳସେଚନ'
  },
  'Drip Irrigation': {
    hi: 'ड्रिप (टपक) सिंचाई', mr: 'ठिबक सिंचन', te: 'బిందు సేద్యం', ta: 'சொட்டு நீர் பாசனம்',
    gu: 'ટપક સિંચાઈ (ડ્રિપ)', bn: 'ড্রিপ (বিন্দু) সেচ', pa: 'ਤੁਪਕਾ ਸਿੰਚਾਈ', kn: 'ಹನಿ ನೀರಾವರಿ',
    ml: 'തുള്ളിനന (ഡ്രിപ്പ്)', or: 'ବିନ୍ଦୁ ଜଳସେଚନ (ଡ୍ରିପ୍)'
  },
  'Tube-well / Borewell': {
    hi: 'नलकूप / बोरवेल', mr: 'कूपनलिका / बोअरवेल', te: 'గొట్టపు బావి / బోర్‌వెల్', ta: 'ஆழ்துளை கிணறு',
    gu: 'બોરવેલ / ટ્યુબવેલ', bn: 'নলকূপ / বোরওয়েল', pa: 'ਟਿਊਬਵੈੱਲ / ਬੋਰਵੈੱਲ', kn: 'ಕೊಳವೆಬಾವಿ (ಬೋರ್‌ವೆಲ್)',
    ml: 'ട്യൂബ് വെൽ / ബോർവെൽ', or: 'ନଳକୂପ / ବୋରୱେଲ୍'
  },
  'Rainfed / Natural Only': {
    hi: 'वर्षा आधारित / केवल प्राकृतिक', mr: 'कोरडवाहू / केवळ पावसावर', te: 'వర్షాధారిత / సహజమైనది మాత్రమే', ta: 'மானாவாரி / இயற்கை மழை மட்டும்',
    gu: 'વરસાદ આધારિત / માત્ર કુદરતી', bn: 'বৃষ্টি নির্ভর / কেবল প্রাকৃতিক', pa: 'ਮੀਂਹ ਆਧਾਰਿਤ / ਸਿਰਫ਼ ਕੁਦਰਤੀ', kn: 'ಮಳೆ ಆಶ್ರಿತ / ನೈಸರ್ಗಿಕ ಮಾತ್ರ',
    ml: 'മഴയെ ആശ്രയിച്ച് / സ്വാഭാവികം മാത്രം', or: 'ବର୍ଷା ନିର୍ଭରଶୀଳ / କେବଳ ପ୍ରାକୃତିକ'
  },
  'Simulated Impact Analysis': {
    hi: 'सिम्युलेटेड प्रभाव विश्लेषण', mr: 'सिम्युलेटेड परिणाम विश्लेषण', te: 'సిమ్యులేటెడ్ ప్రభావ విశ్లేషణ', ta: 'உருவகப்படுத்தப்பட்ட தாக்க பகுப்பாய்வு',
    gu: 'સિમ્યુલેટેડ અસર વિશ્લેષણ', bn: 'সিমুলেটেড প্রভাব বিশ্লেষণ', pa: 'ਸਿਮੂਲੇਟਿਡ ਪ੍ਰਭਾਵ ਵਿਸ਼ਲੇਸ਼ਣ', kn: 'ಸಿಮ್ಯುಲೇಶನ್ ಪರಿಣಾಮ ವಿಶ್ಲೇಷಣೆ',
    ml: 'സിമുലേറ്റഡ് ആഘാത വിശകലനം', or: 'ସିମ୍ୟୁଲେଟେଡ୍ ପ୍ରଭାବ ବିଶ୍ଳେଷଣ'
  },
  'Yield Potential Projection': {
    hi: 'उपज क्षमता अनुमान', mr: 'अपेक्षित उत्पादन अंदाज', te: 'దిగుబడి సామర్థ్య అంచనా', ta: 'மகசூல் திறன் மதிப்பீடு',
    gu: 'સંભવિત ઉપજ અંદાજ', bn: 'সম্ভাব্য ফলন পূর্বাভাস', pa: 'ਸੰਭਾਵੀ ਝਾੜ ਦਾ ਅਨੁਮਾਨ', kn: 'ಇಳುವರಿ ಸಾಮರ್ಥ್ಯದ ಅಂದಾಜು',
    ml: 'പ്രതീക്ഷിത വിളവ് കണക്കുകൂട്ടൽ', or: 'ଅମଳ କ୍ଷମତା ଆକଳନ'
  },
  'Estimated Financial Impact (₹/Acre)': {
    hi: 'अनुमानित वित्तीय प्रभाव (₹/एकड़)', mr: 'अंदाजे आर्थिक परिणाम (₹/एकर)', te: 'అంచనా వేసిన ఆర్థిక ప్రభావం (₹/ఎకరా)', ta: 'மதிப்பிடப்பட்ட நிதி தாக்கம் (₹/ஏக்கர்)',
    gu: 'અંદાજિત નાણાકીય અસર (₹/એકર)', bn: 'আনুমানিক আর্থিক প্রভাব (₹/একর)', pa: 'ਅੰਦਾਜ਼ਨ ਵਿੱਤੀ ਪ੍ਰਭਾਵ (₹/ਏਕੜ)', kn: 'ಅಂದಾಜು ಆರ್ಥಿಕ ಪರಿಣಾಮ (₹/ಎಕರೆ)',
    ml: 'കണക്കാക്കിയ സാമ്പത്തിക ആഘാതം (₹/ഏക്കർ)', or: 'ଆକଳିତ ଆର୍ଥିକ ପ୍ରଭାବ (₹/ଏକର)'
  },
  'Multi-Factor Stress Breakdown': {
    hi: 'बहु-घटक तनाव विवरण', mr: 'विविध ताण घटकांचे वर्गीकरण', te: 'బహుళ-కారకాల ఒత్తిడి విభజన', ta: 'பல காரணி அழுத்த விவரம்',
    gu: 'બહુ-પરિબળ તણાવ વિગતો', bn: 'বহু-মাত্রিক চাপ বিশ্লেষণ', pa: 'ਬਹੁ-ਕਾਰਕ ਤਣਾਅ ਵੇਰਵਾ', kn: 'ಬಹು-ಅಂಶಗಳ ಒತ್ತಡ ವಿಶ್ಲೇಷಣೆ',
    ml: 'വിവിധ സമ്മർദ്ദ ഘടകങ്ങളുടെ വിവരങ്ങൾ', or: 'ବହୁ-କାରକ ଚାପ ବିବରଣୀ'
  },
  'Water Stress': {
    hi: 'जल तनाव', mr: 'पाण्याचा ताण', te: 'నీటి ఒత్తిడి', ta: 'நீர் பற்றாக்குறை அழுத்தம்',
    gu: 'જળ તણાવ', bn: 'জলের ঘাটতি চাপ', pa: 'ਪਾਣੀ ਦਾ ਤਣਾਅ', kn: 'ನೀರಿನ ಕೊರತೆ ಒತ್ತಡ',
    ml: 'ജലക്ഷാമ സമ്മർദ്ദം', or: 'ଜଳାଭାବ ଚାପ'
  },
  'Thermal Stress': {
    hi: 'तापीय तनाव', mr: 'उष्णतेचा ताण', te: 'ఉష్ణ ఒత్తిడి', ta: 'வெப்ப அழுத்தம்',
    gu: 'તાપમાન તણાવ', bn: 'তাপীয় চাপ', pa: 'ਤਾਪਮਾਨ ਤਣਾਅ', kn: 'ಶಾಖದ ಒತ್ತಡ',
    ml: 'താപ സമ്മർദ്ദം', or: 'ତାପଜ ଚାପ'
  },
  'Monsoon Deviation': {
    hi: 'मानसून विचलन', mr: 'पाऊस तफावत', te: 'వర్షాకాల వ్యత్యాసం', ta: 'பருவமழை மாறுபாடு',
    gu: 'ચોમાસુ વિચલન', bn: 'মৌসুমি বিচ্যুতি', pa: 'ਮੀਂਹ ਦਾ ਪਾੜਾ', kn: 'ಮುಂಗಾರು ವ್ಯತ್ಯಾಸ',
    ml: 'മൺസൂൺ വ്യതിയാനം', or: 'ମୌସୁମୀ ବିଚ୍ୟୁତି'
  },
  'Flood Submergence Risk': {
    hi: 'बाढ़ जलभराव जोखिम', mr: 'पूर व पाणी साचण्याचा धोका', te: 'వరద ముంపు ప్రమాదం', ta: 'வெள்ள நீர் மூழ்கும் அபாயம்',
    gu: 'પૂર જળબંબાકાર જોખમ', bn: 'বন্যা প্লাবন ঝুঁকি', pa: 'ਹੜ੍ਹ ਅਤੇ ਪਾਣੀ ਭਰਨ ਦਾ ਖ਼ਤਰਾ', kn: 'ಪ್ರವಾಹ ಮುಳುಗಡೆ ಅಪಾಯ',
    ml: 'വെള്ളപ്പൊക്കത്തിൽ മുങ്ങാനുള്ള സാധ്യത', or: 'ବନ୍ୟା ଜଳବନ୍ଦୀ ବିପଦ'
  },

  // ── SATELLITE & REMOTE SENSING COMPLETE TRANSLATIONS ──
  'Copernicus Sentinel-2 & ISRO MOSDAC': {
    hi: 'कोपरनिकस सेंटिनल-2 एवं इसरो मोसडैक (MOSDAC)', mr: 'कोपरनिकस सेंटिनेल-२ व इस्रो MOSDAC', te: 'కోపర్నికస్ సెంటినెల్-2 & ఇస్రో MOSDAC', ta: 'கோப்பர்நிகஸ் சென்டினல்-2 & இஸ்ரோ MOSDAC',
    gu: 'કોપરનિકસ સેન્ટિનેલ-૨ અને ઇસરો MOSDAC', bn: 'কোপার্নিকাস সেন্টিনেল-২ ও ইসরো MOSDAC', pa: 'ਕੋਪਰਨਿਕਸ ਸੈਂਟੀਨਲ-2 ਅਤੇ ਇਸਰੋ MOSDAC', kn: 'ಕೋಪರ್ನಿಕಸ್ ಸೆಂಟ್ನೆಲ್-2 & ಇಸ್ರೋ MOSDAC',
    ml: 'കോപ്പർനിക്കസ് സെന്റിനൽ-2, ഐഎസ്ആർഒ MOSDAC', or: 'କୋପରନିକସ୍ ସେଣ୍ଟିନେଲ୍-୨ ଓ ଇସ୍ରୋ MOSDAC'
  },
  '10m Multispectral Spatial Resolution': {
    hi: '10 मीटर मल्टी-स्पेक्ट्रल स्थानिक रिज़ॉल्यूशन', mr: '१० मीटर मल्टी-स्पेक्ट्रल रिझोल्यूशन', te: '10మీ మల్టీ-స్పెక్ట్రల్ స్పేషియల్ రిజల్యూషన్', ta: '10மீ பல நிறமாலை இடஞ்சார்ந்த தெளிவுத்திறன்',
    gu: '૧૦ મીટર મલ્ટી-સ્પેક્ટ્રલ રિઝોલ્યુશન', bn: '১০ মিটার মাল্টি-স্পেকট্রাল রেজোলিউশন', pa: '10 ਮੀਟਰ ਮਲਟੀ-ਸਪੈਕਟਰਲ ਰੈਜ਼ੋਲਿਊਸ਼ਨ', kn: '10 ಮೀಟರ್ ಮಲ್ಟಿ-ಸ್ಪೆಕ್ಟ್ರಲ್ ರೆಸಲ್ಯೂಶನ್',
    ml: '10 മീറ്റർ മൾട്ടി-സ്പെക്ട്രൽ റെസല്യൂഷൻ', or: '୧୦ ମିଟର ମଲ୍ଟି-ସ୍ପେକ୍ଟ୍ରାଲ୍ ରେଜୋଲ୍ୟୁସନ୍'
  },
  'Normalized Difference Vegetation Index (NDVI)': {
    hi: 'सामान्यीकृत अंतर वनस्पति सूचकांक (NDVI)', mr: 'सामान्यीकृत वनस्पती निर्देशांक (NDVI)', te: 'సాధారణీకరించిన వృక్షసంపద సూచిక (NDVI)', ta: 'தாவர குறியீடு (NDVI)',
    gu: 'વનસ્પતિ સૂચકાંક (NDVI)', bn: 'উদ্ভিজ্জ সূচক (NDVI)', pa: 'ਵਨਸਪਤੀ ਸੂਚਕਾਂਕ (NDVI)', kn: 'ಸಸ್ಯವರ್ಗ ಸೂಚ್ಯಂಕ (NDVI)',
    ml: 'സസ്യ സൂചിക (NDVI)', or: 'ଉଦ୍ଭିଦ ସୂଚକାଙ୍କ (NDVI)'
  },
  'Normalized Difference Water Index (NDWI)': {
    hi: 'सामान्यीकृत अंतर जल सूचकांक (NDWI)', mr: 'पाणी निर्देशांक (NDWI)', te: 'నీటి సూచిక (NDWI)', ta: 'நீர் குறியீடு (NDWI)',
    gu: 'જળ સૂચકાંક (NDWI)', bn: 'জল সূচক (NDWI)', pa: 'ਪਾਣੀ ਸੂਚਕਾਂਕ (NDWI)', kn: 'ಜಲ ಸೂಚ್ಯಂಕ (NDWI)',
    ml: 'ജല സൂചിക (NDWI)', or: 'ଜଳ ସୂଚକାଙ୍କ (NDWI)'
  },
  'Enhanced Vegetation Index (EVI)': {
    hi: 'संवर्धित वनस्पति सूचकांक (EVI)', mr: 'प्रगत वनस्पती निर्देशांक (EVI)', te: 'మెరుగైన వృక్షసంపద సూచిక (EVI)', ta: 'மேம்படுத்தப்பட்ட தாவர குறியீடு (EVI)',
    gu: 'ઉન્નત વનસ્પતિ સૂચકાંક (EVI)', bn: 'উন্নত উদ্ভিজ্জ সূচক (EVI)', pa: 'ਉੱਨਤ ਵਨਸਪਤੀ ਸੂਚਕਾਂਕ (EVI)', kn: 'ಸುಧಾರಿತ ಸಸ್ಯವರ್ಗ ಸೂಚ್ಯಂಕ (EVI)',
    ml: 'വിപുലീകരിച്ച സസ്യ സൂചിക (EVI)', or: 'ଉନ୍ନତ ଉଦ୍ଭିଦ ସୂଚକାଙ୍କ (EVI)'
  },
  'High Canopy Biomass': {
    hi: 'उच्च फसल बायोमास घनत्व', mr: 'दाट पीक बायोमास घनता', te: 'అధిక పంట బయోమాస్', ta: 'அதிக பயிர் வளர்ச்சி அடர்த்தி',
    gu: 'ઉચ્ચ પાક બાયોમાસ ઘનતા', bn: 'উচ্চ ফসল বায়োমাস', pa: 'ਸੰਘਣੀ ਫਸਲ ਬਾਇਓਮਾਸ', kn: 'ಹೆಚ್ಚಿನ ಬೆಳೆ ಜೈವಿಕ ರಾಶಿ',
    ml: 'ഉയർന്ന സസ്യ സാന്ദ്രത', or: 'ଉଚ୍ଚ ଫସଲ ବାୟୋମାସ୍ ଘନତା'
  },
  'Soil/Vegetation Contrast': {
    hi: 'मृदा/वनस्पति विषमता', mr: 'माती/वनस्पती फरक', te: 'నేల/వృక్ష వ్యత్యాసం', ta: 'மண்/தாவர வேறுபாடு',
    gu: 'જમીન/વનસ્પતિ ભેદ', bn: 'মাটি/উদ্ভিদ বৈপরীত্য', pa: 'ਮਿੱਟੀ/ਵਨਸਪਤੀ ਅੰਤਰ', kn: 'ಮಣ್ಣು/ಸಸ್ಯ ವ್ಯತ್ಯಾಸ',
    ml: 'മണ്ണ്/സസ്യ വ്യത്യാസം', or: 'ମାଟି/ଉଦ୍ଭିଦ ପାର୍ଥକ୍ୟ'
  },
  'Chlorophyll Peak': {
    hi: 'क्लोरोफिल उच्चतम स्तर', mr: 'हरितद्रव्य कमाल पातळी', te: 'హరితరేణువు గరిష్ట స్థాయి', ta: 'பச்சைய உச்ச நிலை',
    gu: 'હરિતદ્રવ્ય ટોચ સ્તર', bn: 'ক্লোরোফিল শীর্ষ মাত্রা', pa: 'ਕਲੋਰੋਫਿਲ ਸਿਖਰ ਪੱਧਰ', kn: 'ಹರಿತ್ತು ಗರಿಷ್ಠ ಮಟ್ಟ',
    ml: 'ഹരിതകം ഉയർന്ന അളവ്', or: 'କ୍ଲୋରୋଫିଲ୍ ଶୀର୍ଷ ସ୍ତର'
  },
  'Chlorophyll Absorption': {
    hi: 'क्लोरोफिल अवशोषण', mr: 'हरितद्रव्य शोषण', te: 'హరితరేణువు శోషణ', ta: 'பச்சைய உறிஞ்சுதல்',
    gu: 'હરિતદ્રવ્ય શોષણ', bn: 'ক্লোরোফিল শোষণ', pa: 'ਕਲੋਰੋਫਿਲ ਸੋਖਣਾ', kn: 'ಹರಿತ್ತು ಹೀರಿಕೊಳ್ಳುವಿಕೆ',
    ml: 'ഹരിതകം ആഗിരണം', or: 'କ୍ଲୋରୋଫିଲ୍ ଅବଶୋଷଣ'
  },
  'Cellular Structure Reflectance': {
    hi: 'कोशिकीय संरचना परावर्तन', mr: 'पेशी रचना परावर्तन', te: 'కణ నిర్మాణం ప్రతిబింబం', ta: 'செல்லுலார் கட்டமைப்பு பிரதிபலிப்பு',
    gu: 'કોષીય રચના પરાવર્તન', bn: 'কোষীয় গঠন প্রতিফলন', pa: 'ਸੈੱਲ ਬਣਤਰ ਪ੍ਰਤੀਬਿੰਬ', kn: 'ಕೋಶ ರಚನೆ ಪ್ರತಿಫಲನ',
    ml: 'കോശ ഘടന പ്രതിഫലനം', or: 'କୋଷିକା ସଂରଚନା ପ୍ରତିଫଳନ'
  },
  'Leaf Canopy Water Stress': {
    hi: 'पत्ती चंदवा जल तनाव', mr: 'पानांमधील पाण्याचा ताण', te: 'ఆకుల పందిరి నీటి ఒత్తిడి', ta: 'இலைக்கூரை நீர் அழுத்தம்',
    gu: 'પાંદડા છત્ર જળ તણાવ', bn: 'পাতার ছাউনি জলের চাপ', pa: 'ਪੱਤਿਆਂ ਵਿੱਚ ਪਾਣੀ ਦਾ ਤਣਾਅ', kn: 'ಎಲೆಗಳ ಮೇಲ್ಮೈ ನೀರಿನ ಕೊರತೆ',
    ml: 'ഇലകളിലെ ജലക്ഷാമ സമ്മർദ്ദം', or: 'ପତ୍ର ଛାତ ଜଳାଭାବ ଚାପ'
  },

  // ── KNOWLEDGE GRAPH & RELATIONSHIPS ──
  'Agronomic Knowledge Graph': {
    hi: 'कृषि ज्ञान नेटवर्क (नॉलेज ग्राफ)', mr: 'कृषी ज्ञान आलेख (नॉलेज ग्राफ)', te: 'వ్యవసాయ విజ్ఞాన గ్రాఫ్', ta: 'வேளாண் அறிவு வரைபடம்',
    gu: 'કૃષિ જ્ઞાન આલેખ (નોલેજ ગ્રાફ)', bn: 'কৃষি জ্ঞান গ্রাফ', pa: 'ਖੇਤੀਬਾੜੀ ਗਿਆਨ ਗ੍ਰਾਫ', kn: 'ಕೃಷಿ ಜ್ಞಾನ ನಕ್ಷೆ',
    ml: 'കാർഷിക വിജ്ഞാന ശൃംഖല', or: 'କୃଷି ଜ୍ଞାନ ନେଟୱାର୍କ (ନଲେଜ୍ ଗ୍ରାଫ୍)'
  },
  'Explicit Relationship Reasoning': {
    hi: 'प्रत्यक्ष संबंध एवं वैज्ञानिक तर्क', mr: 'स्पष्ट संबंध व शास्त्रीय कारणमीमांसा', te: 'స్పష్టమైన సంబంధాల కారణాలు', ta: 'வெளிப்படையான உறவு முறை அறிவியல் காரணம்',
    gu: 'સ્પષ્ટ સંબંધ અને વૈજ્ઞાનિક તર્ક', bn: 'সুস্পষ্ট সম্পর্ক ও বৈজ্ঞানিক যুক্তি', pa: 'ਸਪੱਸ਼ਟ ਸਬੰਧ ਅਤੇ ਵਿਗਿਆਨਕ ਤਰਕ', kn: 'ಸ್ಪಷ್ಟ ಸಂಬಂಧ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ತರ್ಕ',
    ml: 'വ്യക്തമായ ബന്ധങ്ങളും ശാസ്ത്രീയ ന്യായങ്ങളും', or: 'ପ୍ରତ୍ୟକ୍ଷ ସମ୍ପର୍କ ଓ ବୈଜ୍ଞାନିକ ଯୁକ୍ତି'
  },
  'Agricultural Relationship Trail & Decision Network': {
    hi: 'कृषि संबंध श्रृंखला एवं निर्णय नेटवर्क', mr: 'कृषी संबंध साखळी व निर्णय नेटवर्क', te: 'వ్యవసాయ సంబంధాల గొలుసు & నిర్ణయ నెట్‌వర్క్', ta: 'வேளாண் தொடர்பு சங்கிலி மற்றும் முடிவெடுக்கும் கட்டமைப்பு',
    gu: 'કૃષિ સંબંધ શૃંખલા અને નિર્ણય નેટવર્ક', bn: 'কৃষি সম্পর্ক শৃঙ্খল ও সিদ্ধান্ত নেটওয়ার্ক', pa: 'ਖੇਤੀਬਾੜੀ ਸਬੰਧ ਲੜੀ ਅਤੇ ਫੈਸਲਾ ਨੈੱਟਵਰਕ', kn: 'ಕೃಷಿ ಸಂಬಂಧ ಸರಪಳಿ & ನಿರ್ಧಾರ ಜಾಲ',
    ml: 'കാർഷിക ബന്ധ ശൃംഖലയും തീരുമാന ശൃംഖലയും', or: 'କୃଷି ସମ୍ପର୍କ ଶୃଙ୍ଖଳା ଓ ନିଷ୍ପତ୍ତି ନେଟୱାର୍କ'
  },
  'Interactive "Why This Recommendation?" Relationship Trail': {
    hi: 'इंटरैक्टिव "यह सिफारिश क्यों?" संबंध श्रृंखला', mr: 'परस्परसंवादी "ही शिफारस का?" संबंध साखळी', te: 'ఇంటరాక్టివ్ "ఈ సిఫార్సు ఎందుకు?" సంబంధాల గొలుసు', ta: '"இந்த பரிந்துரை ஏன்?" ஊடாடும் தொடர்பு பாதை',
    gu: 'ઇન્ટરેક્ટિવ "આ ભલામણ કેમ?" સંબંધ શૃંખલા', bn: 'ইন্টারেক্টিভ "কেন এই সুপারিশ?" সম্পর্ক শৃঙ্খল', pa: 'ਇੰਟਰਐਕਟਿਵ "ਇਹ ਸਿਫਾਰਸ਼ ਕਿਉਂ?" ਸਬੰਧ ਲੜੀ', kn: 'ಸಂವಾದಾತ್ಮಕ "ಈ ಶಿಫಾರಸು ಏಕೆ?" ಸಂಬಂಧ ಸರಪಳಿ',
    ml: 'സംവേദനാത്മക "എന്തുകൊണ്ട് ഈ ശുപാർശ?" ബന്ധ ശൃംഖല', or: 'ଇଣ୍ଟରାକ୍ଟିଭ୍ "ଏହି ପରାମର୍ଶ କାହିଁକି?" ସମ୍ପର୍କ ଶୃଙ୍ଖଳା'
  },
  'Transparent node-link chain establishing why a specific cultivar is recommended for this location and weather regime.': {
    hi: 'पारदर्शी नोड-लिंक श्रृंखला जो यह प्रमाणित करती है कि इस स्थान और मौसम के लिए एक विशिष्ट किस्म की सिफारिश क्यों की गई है।',
    mr: 'पारदर्शक नोड-लिंक साखळी जी हे सिद्ध करते की या स्थानासाठी आणि हवामानासाठी विशिष्ट वाणाची शिफारस का केली आहे.',
    te: 'ఈ ప్రాంతం మరియు వాతావరణానికి నిర్దిష్ట వంగడం ఎందుకు సిఫార్సు చేయబడిందో నిరూపించే పారదర్శక నోడ్-లింక్ గొలుసు.',
    ta: 'இந்த இடம் மற்றும் தட்பவெப்ப நிலைக்கு குறிப்பிட்ட ரகம் ஏன் பரிந்துரைக்கப்படுகிறது என்பதை விளக்கும் வெளிப்படையான தொடர்பு சங்கிலி.',
    gu: 'પારદર્શક નોડ-લિંક શૃંખલા જે સાબિત કરે છે કે આ સ્થાન અને હવામાન માટે ચોક્કસ જાતની ભલામણ કેમ કરવામાં આવી છે.',
    bn: 'স্বচ্ছ নোড-লিঙ্ক শৃঙ্খল যা প্রমাণ করে যে এই স্থান ও আবহাওয়ার জন্য কেন একটি নির্দিষ্ট জাত সুপারিশ করা হয়েছে।',
    pa: 'ਪਾਰਦਰਸ਼ੀ ਨੋਡ-ਲਿੰਕ ਲੜੀ ਜੋ ਇਹ ਸਾਬਤ ਕਰਦੀ ਹੈ ਕਿ ਇਸ ਸਥਾਨ ਅਤੇ ਮੌਸਮ ਲਈ ਕਿਸੇ ਖਾਸ ਕਿਸਮ ਦੀ ਸਿਫਾਰਸ਼ ਕਿਉਂ ਕੀਤੀ ਗਈ ਹੈ।',
    kn: 'ಈ ಸ್ಥಳ ಮತ್ತು ಹವಾಮಾನಕ್ಕೆ ನಿರ್ದಿಷ್ಟ ತಳಿಯನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ ಎಂಬುದನ್ನು ಸಾಬೀತುಪಡಿಸುವ ಪಾರದರ್ಶಕ ಸಂಬಂಧ ಸರಪಳಿ.',
    ml: 'ഈ പ്രദേശത്തിനും കാലാവസ്ഥയ്ക്കും നിർദ്ദിഷ്ട വിത്തിനകം എന്തുകൊണ്ട് ശുപാർശ ചെയ്യപ്പെട്ടു എന്ന് തെളിയിക്കുന്ന സുതാര്യമായ ശൃംഖല.',
    or: 'ସ୍ୱଚ୍ଛ ନୋଡ୍-ଲିଙ୍କ୍ ଶୃଙ୍ଖଳା ଯାହା ପ୍ରମାଣ କରେ ଯେ ଏହି ସ୍ଥାନ ଓ ପାଣିପାଗ ପାଇଁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କିସମ କାହିଁକି ପରାମର୍ଶ ଦିଆଯାଇଛି।'
  },
  'Location': { hi: 'स्थान', mr: 'स्थान', te: 'ప్రాంతం', ta: 'இடம்', gu: 'સ્થાન', bn: 'স্থান', pa: 'ਸਥਾਨ', kn: 'ಸ್ಥಳ', ml: 'സ്ഥലം', or: 'ସ୍ଥାନ' },
  'AgroZone': { hi: 'कृषि-जलवायु क्षेत्र', mr: 'कृषी-हवामान विभाग', te: 'వ్యవసాయ-వాతావరణ మండలం', ta: 'வேளாண் காலநிலை மண்டலம்', gu: 'કૃષિ-આબોહવા ઝોન', bn: 'কৃষি-আবহাওয়া অঞ্চল', pa: 'ਖੇਤੀਬਾੜੀ-ਜਲਵਾਯੂ ਜ਼ੋਨ', kn: 'ಕೃಷಿ-ಹವಾಮಾನ ವಲಯ', ml: 'കാർഷിക കാലാവസ്ഥാ മേഖല', or: 'କୃଷି-ଜଳବାୟୁ କ୍ଷେତ୍ର' },
  'SoilType': { hi: 'मृदा का प्रकार', mr: 'मातीचा प्रकार', te: 'నేల రకం', ta: 'மண் வகை', gu: 'જમીનનો પ્રકાર', bn: 'মাটির ধরন', pa: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ', kn: 'ಮಣ್ಣಿನ ವಿಧ', ml: 'മണ്ണിന്റെ തരം', or: 'ମୃତ୍ତିକା ପ୍ରକାର' },
  'Crop': { hi: 'फसल', mr: 'पीक', te: 'పంట', ta: 'பயிர்', gu: 'પાક', bn: 'ফসল', pa: 'ਫਸਲ', kn: 'ಬೆಳೆ', ml: 'വിള', or: 'ଫସଲ' },
  'Cultivar': { hi: 'प्रमाणित किस्म', mr: 'प्रमाणित वाण', te: 'ధృవీకరించబడిన రకం', ta: 'சான்றளிக்கப்பட்ட ரகம்', gu: 'પ્રમાણિત જાત', bn: 'প্রত্যয়িত জাত', pa: 'ਪ੍ਰਮਾਣਿਤ ਕਿਸਮ', kn: 'ಪ್ರಮಾಣೀಕೃತ ತಳಿ', ml: 'വിത്തിനകം', or: 'ପ୍ରମାଣିତ କିସମ' },
  'RiskConstraint': { hi: 'जोखिम बाधा', mr: 'धोका अडथळा', te: 'ప్రమాద పరిమితి', ta: 'அபாய வரம்பு', gu: 'જોખમ મર્યાદા', bn: 'ঝুঁকি বাধা', pa: 'ਜੋਖਮ ਰੁਕਾਵਟ', kn: 'ಅಪಾಯ ನಿರ್ಬಂಧ', ml: 'അപകടസാധ്യത', or: 'ବିପଦ ପ୍ରତିବନ୍ଧକ' },
  'Recommendation': { hi: 'वैज्ञानिक सिफारिश', mr: 'शास्त्रीय शिफारस', te: 'శాస్త్రీయ సిఫార్సు', ta: 'அறிவியல் பரிந்துரை', gu: 'વૈજ્ઞાનિક ભલામણ', bn: 'বৈজ্ঞানিক সুপারিশ', pa: 'ਵਿਗਿਆਨਕ ਸਿਫਾਰਸ਼', kn: 'ವೈಜ್ಞಾನಿಕ ಶಿಫಾರಸು', ml: 'ശാസ്ത്രീയ ശുപാർശ', or: 'ବୈଜ୍ଞାନିକ ପରାମର୍ଶ' },
  'Node Attributes & Agro-Scientific Logic': {
    hi: 'नोड विशेषताएँ एवं कृषि-वैज्ञानिक तर्क', mr: 'नोड वैशिष्ट्ये व कृषी-शास्त्रीय तर्क', te: 'నోడ్ లక్షణాలు & వ్యవసాయ-శాస్త్రీయ తర్కం', ta: 'அம்சங்கள் மற்றும் வேளாண்-அறிவியல் தர்க்கம்',
    gu: 'નોડ વિશેષતાઓ અને કૃષિ-વૈજ્ઞાનિક તર્ક', bn: 'নোড বৈশিষ্ট্য ও কৃষি-বৈজ্ঞানিক যুক্তি', pa: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਖੇਤੀਬਾੜੀ-ਵਿਗਿਆਨਕ ਤਰਕ', kn: 'ಗುಣಲಕ್ಷಣಗಳು & ಕೃಷಿ-ವೈಜ್ಞಾನಿಕ ತರ್ಕ',
    ml: 'സവിശേഷതകളും കാർഷിക-ശാസ്ത്രീയ യുക്തിയും', or: 'ବିଶେଷତା ଓ କୃଷି-ବୈଜ୍ଞାନିକ ଯୁକ୍ତି'
  },
  'Close Details': {
    hi: 'विवरण बंद करें', mr: 'तपशील बंद करा', te: 'వివరాలు మూసివేయండి', ta: 'விவரங்களை மூடு',
    gu: 'વિગતો બંધ કરો', bn: 'বিবরণ বন্ধ করুন', pa: 'ਵੇਰਵੇ ਬੰਦ ਕਰੋ', kn: 'ವಿವರಗಳನ್ನು ಮುಚ್ಚಿ',
    ml: 'വിവരങ്ങൾ അടയ്ക്കുക', or: 'ବିବରଣୀ ବନ୍ଦ କରନ୍ତୁ'
  },
  'Click on any node in the chain to inspect exact parameters, scientific citations, and environmental thresholds.': {
    hi: 'सटीक मापदंडों, वैज्ञानिक संदर्भों और पर्यावरणीय सीमाओं का निरीक्षण करने के लिए श्रृंखला के किसी भी नोड पर क्लिक करें।',
    mr: 'अचूक निकष, शास्त्रीय संदर्भ आणि पर्यावरणीय मर्यादा तपासण्यासाठी साखळीतील कोणत्याही घटकावर क्लिक करा.',
    te: 'ఖచ్చితమైన పారామితులు, శాస్త్రీయ ఆధారాలు మరియు పర్యావరణ పరిమితులను పరిశీలించడానికి గొలుసులోని ఏదైనా నోడ్‌పై క్లిక్ చేయండి.',
    ta: 'துல்லியமான அளவீடுகள், அறிவியல் குறிப்புகள் மற்றும் சுற்றுச்சூழல் வரம்புகளைக் காண சங்கிலியில் உள்ள ஏதேனும் ஒரு பகுதியை கிளிக் செய்யவும்.',
    gu: 'ચોક્કસ પરિમાણો, વૈજ્ઞાનિક સંદર્ભો અને પર્યાવરણીય સીમાઓ તપાસવા માટે શૃંખલાના કોઈપણ નોડ પર ક્લિક કરો.',
    bn: 'সঠিক প্যারামিটার, বৈজ্ঞানিক উদ্ধৃতি এবং পরিবেশগত থ্রেশহোল্ড পরীক্ষা করতে শৃঙ্খলের যেকোনো নোডে ক্লিক করুন।',
    pa: 'ਸਟੀਕ ਮਾਪਦੰਡਾਂ, ਵਿਗਿਆਨਕ ਹਵਾਲਿਆਂ ਅਤੇ ਵਾਤਾਵਰਣ ਸੀਮਾਵਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ ਲੜੀ ਦੇ ਕਿਸੇ ਵੀ ਨੋਡ ਤੇ ਕਲਿੱਕ ਕਰੋ।',
    kn: 'ನಿಖರ ನಿಯತಾಂಕಗಳು, ವೈಜ್ಞಾನಿಕ ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಪರಿಸರ ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಸರಪಳಿಯಲ್ಲಿನ ಯಾವುದೇ ನೋಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    ml: 'കൃത്യമായ മാനദണ്ഡങ്ങൾ, ശാസ്ത്രീയ തെളിവുകൾ, പാരിസ്ഥിതിക പരിധികൾ എന്നിവ പരിശോധിക്കാൻ ശൃംഖലയിലെ ഏതെങ്കിലും ഘടകത്തിൽ ക്ലിക്ക് ചെയ്യുക.',
    or: 'ସଠିକ୍ ମାନଦଣ୍ଡ, ବୈଜ୍ଞାନିକ ପ୍ରମାଣ ଏବଂ ପରିବେଶ ସୀମା ପରୀକ୍ଷା କରିବାକୁ ଶୃଙ୍ଖଳାର ଯେକୌଣସି ନୋଡ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।'
  },

  // ── Action Planner Tab Multilingual Dictionary (All 11 Languages) ──
  "6-Stage Practical Field Guide": {
    hi: "6-चरणीय व्यावहारिक क्षेत्रीय मार्गदर्शिका",
    mr: "६-टप्प्यांची व्यावहारिक शेती मार्गदर्शिका",
    te: "6-దశల ఆచరణాత్మక క్షేత్ర మార్గదర్శి",
    ta: "6-நிலை நடைமுறை கள வழிகாட்டி",
    gu: "6-તબક્કાની વ્યવહારુ ક્ષેત્ર માર્ગદર્શિકા",
    bn: "৬-ধাপের ব্যবহারিক ক্ষেত্র নির্দেশিকা",
    pa: "6-ਪੜਾਵੀ ਵਿਵਹਾਰਕ ਖੇਤਰੀ ਗਾਈਡ",
    kn: "6-ಹಂತದ ಪ್ರಾಯೋಗಿಕ ಕ್ಷೇತ್ರ ಮಾರ್ಗದರ್ಶಿ",
    ml: "6-ഘട്ട പ്രായോഗിക ഫീൽഡ് ഗൈഡ്",
    or: "୬-ପର୍ଯ୍ୟାୟ ବ୍ୟବହାରିକ କ୍ଷେତ୍ର ମାର୍ଗଦର୍ଶିକା"
  },
  "Evidence-Linked Agronomic Actions": {
    hi: "प्रमाण-आधारित कृषि क्रियाएं",
    mr: "पुरावा-आधारित कृषी कृती",
    te: "సాక్ష్యాధారిత వ్యవసాయ చర్యలు",
    ta: "ஆதார அடிப்படையிலான விவசாய நடவடிக்கைகள்",
    gu: "પુરાવા-આધારિત કૃષિ પગલાં",
    bn: "প্রমাণ-ভিত্তিক কৃষি পদক্ষেপ",
    pa: "ਸਬੂਤ-ਅਧਾਰਿਤ ਖੇਤੀਬਾੜੀ ਕਾਰਵਾਈਆਂ",
    kn: "ಸಾಕ್ಷ್ಯಾಧಾರಿತ ಕೃಷಿ ಕ್ರಮಗಳು",
    ml: "തെളിവ് അടിസ്ഥാനമാക്കിയുള്ള കാർഷിക പ്രവർത്തനങ്ങൾ",
    or: "ପ୍ରମାଣ-ଆଧାରିତ କୃଷି କାର୍ଯ୍ୟାନୁଷ୍ଠାନ"
  },
  "Farm Action Planner & Seasonal Checklist": {
    hi: "खेत कार्य योजनाकार एवं मौसमी चेकलिस्ट",
    mr: "शेती कृती नियोजक आणि हंगामी चेकलिस्ट",
    te: "వ్యవసాయ కార్యాచరణ ప్రణాళిక & సీజనల్ చెక్‌లిస్ట్",
    ta: "பண்ணை செயல் திட்டமிடுபவர் & பருவகால சரிபார்ப்பு பட்டியல்",
    gu: "ખેત કાર્ય આયોજક અને મોસમી ચેકલિસ્ટ",
    bn: "খামার কর্ম পরিকল্পনাকারী এবং মৌসুমী চেকলিস্ট",
    pa: "ਖੇਤ ਕਾਰਜ ਯੋਜਨਾਕਾਰ ਅਤੇ ਮੌਸਮੀ ਚੈੱਕਲਿਸਟ",
    kn: "ಕೃಷಿ ಕ್ರಿಯಾ ಯೋಜಕ ಮತ್ತು ಋತುವಿನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    ml: "ഫാം ആക്ഷൻ പ്ലാനറും സീസണൽ ചെക്ക്‌ലിസ്റ്റും",
    or: "କ୍ଷେତ୍ର କାର୍ଯ୍ୟ ଯୋଜନାକାରୀ ଓ ଋତୁକାଳୀନ ଚେକଲିଷ୍ଟ୍"
  },
  "Converts complex meteorological predictions into concise, step-by-step field operations.": {
    hi: "जटिल मौसम संबंधी पूर्वानुमानों को संक्षिप्त, चरणबद्ध कृषि कार्यों में परिवर्तित करता है।",
    mr: "गुंतागुंतीच्या हवामान अंदाजांचे संक्षिप्त, टप्प्याटप्प्याने शेती कामात रूपांतर करते.",
    te: "సంక్లిష్ట వాతావరణ అంచనాలను సంక్షిప్త, దశలవారీ క్షేత్ర కార్యకలాపాలుగా మారుస్తుంది.",
    ta: "சிக்கலான வானிலை முன்னறிவிப்புகளை சுருக்கமான, படிப்படியான கள நடவடிக்கைகளாக மாற்றுகிறது.",
    gu: "જટિલ હવામાન આગાહીઓને સંક્ષિપ્ત, તબક્કાવાર ખેત કાર્યોમાં રૂપાંતરિત કરે છે.",
    bn: "জটিল আবহাওয়া পূর্বাভাসকে সংক্ষিপ্ত, ধাপে ধাপে মাঠ পর্যায়ে রূপান্তরিত করে।",
    pa: "ਗੁੰਝਲਦਾਰ ਮੌਸਮੀ ਭਵਿੱਖਬਾਣੀਆਂ ਨੂੰ ਸੰਖੇਪ, ਕਦਮ-ਦਰ-ਕਦਮ ਖੇਤ ਕਾਰਜਾਂ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।",
    kn: "ಸಂಕೀರ್ಣ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತ, ಹಂತ-ಹಂತದ ಕ್ಷೇತ್ರ ಕಾರ್ಯಾಚರಣೆಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.",
    ml: "സങ്കീർണ്ണമായ കാലാവസ്ഥാ പ്രവചനങ്ങളെ ഘട്ടം ഘട്ടമായുള്ള ഫീൽഡ് പ്രവർത്തനങ്ങളാക്കി മാറ്റുന്നു.",
    or: "ଜଟିଳ ପାଣିପାଗ ପୂର୍ବାନୁମାନକୁ ସଂକ୍ଷିପ୍ତ, ପର୍ଯ୍ୟାୟକ୍ରମିକ କ୍ଷେତ୍ର କାର୍ଯ୍ୟରେ ପରିଣତ କରେ।"
  },
  "Checklist Completion": {
    hi: "चेकलिस्ट पूर्णता",
    mr: "चेकलिस्ट पूर्णता",
    te: "చెక్‌లిస్ట్ పూర్తి",
    ta: "சரிபார்ப்பு பட்டியல் நிறைவு",
    gu: "ચેકલિસ્ટ પૂર્ણતા",
    bn: "চেকলিস্ট সম্পূর্ণতা",
    pa: "ਚੈੱਕਲਿਸਟ ਸੰਪੂਰਨਤਾ",
    kn: "ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಪೂರ್ಣಗೊಂಡಿದೆ",
    ml: "ചെക്ക്‌ലിസ്റ്റ് പൂർത്തീകരണം",
    or: "ଚେକଲିଷ୍ଟ୍ ସମ୍ପୂର୍ଣ୍ଣତା"
  },
  "Evidence Confidence:": {
    hi: "प्रमाण विश्वसनीयता:",
    mr: "पुरावा विश्वासार्हता:",
    te: "సాక్ష్య విశ్వసనీయత:",
    ta: "ஆதார நம்பகத்தன்மை:",
    gu: "પુરાવા વિશ્વસનીયતા:",
    bn: "প্রমাণ নির্ভরযোগ্যতা:",
    pa: "ਸਬੂਤ ਭਰੋਸੇਯੋਗਤਾ:",
    kn: "ಸಾಕ್ಷ್ಯ ವಿಶ್ವಾಸಾರ್ಹತೆ:",
    ml: "തെളിവ് വിശ്വാസ്യത:",
    or: "ପ୍ରମାଣ ବିଶ୍ୱସନୀୟତା:"
  },
  "Scientific Grounding:": {
    hi: "वैज्ञानिक आधार:",
    mr: "वैज्ञानिक आधार:",
    te: "శాస్త్రీయ ఆధారం:",
    ta: "அறிவியல் அடிப்படை:",
    gu: "વૈજ્ઞાનિક આધાર:",
    bn: "বৈজ্ঞানিক ভিত্তি:",
    pa: "ਵਿਗਿਆਨਕ ਆਧਾਰ:",
    kn: "ವೈಜ್ಞಾನಿಕ ಆಧಾರ:",
    ml: "ശാസ്ത്രീയ അടിത്തറ:",
    or: "ବୈଜ୍ଞାନିକ ଆଧାର:"
  },
  "1. OBSERVE & TEST": {
    hi: "1. निरीक्षण एवं परीक्षण",
    mr: "१. निरीक्षण आणि चाचणी",
    te: "1. పరిశీలన & పరీక్ష",
    ta: "1. கவனித்து சோதிக்கவும்",
    gu: "1. નિરીક્ષણ અને પરીક્ષણ",
    bn: "১. পর্যবেক্ষণ ও পরীক্ষা",
    pa: "1. ਨਿਰੀਖਣ ਅਤੇ ਪਰਖ",
    kn: "1. ವೀಕ್ಷಿಸಿ ಮತ್ತು ಪರೀಕ್ಷಿಸಿ",
    ml: "1. നിരീക്ഷിക്കുകയും പരിശോധിക്കുകയും ചെയ്യുക",
    or: "୧. ନିରୀକ୍ଷଣ ଓ ପରୀକ୍ଷଣ"
  },
  "Soil Moisture & Field Assessment": {
    hi: "मृदा नमी एवं खेत मूल्यांकन",
    mr: "मातीतील ओलावा आणि शेत मूल्यमापन",
    te: "నేల తేమ & క్షేత్ర అంచనా",
    ta: "மண் ஈரப்பதம் & கள மதிப்பீடு",
    gu: "જમીન ભેજ અને ક્ષેત્ર મૂલ્યાંકન",
    bn: "মাটির আর্দ্রতা এবং ক্ষেত্র মূল্যায়ন",
    pa: "ਮਿੱਟੀ ਦੀ ਨਮੀ ਅਤੇ ਖੇਤ ਮੁਲਾਂਕਣ",
    kn: "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ಕ್ಷೇತ್ರ ಮೌಲ್ಯಮಾಪನ",
    ml: "മണ്ണിലെ ഈർപ്പവും ഫീൽഡ് വിലയിരുത്തലും",
    or: "ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ଓ କ୍ଷେତ୍ର ମୂଲ୍ୟାୟନ"
  },
  "Current 32% soil moisture meets field capacity; IMD indicates 85% rain probability.": {
    hi: "वर्तमान 32% मृदा नमी क्षेत्रीय क्षमता के अनुरूप है; मौसम विभाग 85% वर्षा की संभावना दर्शाता है।",
    mr: "सध्याचा ३२% मातीतील ओलावा शेत क्षमतेनुसार आहे; हवामान विभाग ८५% पावसाची शक्यता दर्शवतो.",
    te: "ప్రస్తుత 32% నేల తేమ ఫీల్డ్ సామర్థ్యానికి అనుగుణంగా ఉంది; వాతావరణ శాఖ 85% వర్ష సూచనను ఇస్తుంది.",
    ta: "தற்போதைய 32% மண் ஈரப்பதம் போதுமானது; வானிலை மையம் 85% மழை வாய்ப்பைக் குறிக்கிறது.",
    gu: "હાલનો 32% જમીન ભેજ ક્ષેત્ર ક્ષમતાને અનુરૂપ છે; હવામાન વિભાગ 85% વરસાદની શક્યતા દર્શાવે છે.",
    bn: "বর্তমান ৩২% মাটির আর্দ্রতা ক্ষেতের ক্ষমতার সাথে সঙ্গতিপূর্ণ; আবহাওয়া বিভাগ ৮৫% বৃষ্টির সম্ভাবনা নির্দেশ করে।",
    pa: "ਮੌਜੂਦਾ 32% ਮਿੱਟੀ ਦੀ ਨਮੀ ਖੇਤ ਸਮਰੱਥਾ ਅਨੁਸਾਰ ਹੈ; ਮੌਸਮ ਵਿਭਾਗ 85% ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ਦਰਸਾਉਂਦਾ ਹੈ।",
    kn: "ಪ್ರಸ್ತುತ 32% ಮಣ್ಣಿನ ತೇವಾಂಶವು ಕ್ಷೇತ್ರ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ; ಹವಾಮಾನ ಇಲಾಖೆ 85% ಮಳೆಯ ಸಂಭವನೀಯತೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    ml: "നിലവിലെ 32% മണ്ണിലെ ഈർപ്പം ഫീൽഡ് കപ്പാസിറ്റിക്ക് അനുയോജ്യമാണ്; കാലാവസ്ഥാ വകുപ്പ് 85% മഴ സാധ്യത കാണിക്കുന്നു.",
    or: "ବର୍ତ୍ତମାନର ୩୨% ମୃତ୍ତିକା ଆର୍ଦ୍ରତା କ୍ଷେତ୍ର କ୍ଷମତା ଅନୁଯାୟୀ ଅଛି; ପାଣିପାଗ ବିଭାଗ ୮୫% ବର୍ଷା ସମ୍ଭାବନା ଦର୍ଶାଉଛି।"
  },
  "Confirm top 15cm soil friability before heavy tractor operation": {
    hi: "भारी ट्रैक्टर चलाने से पहले ऊपरी 15 सेमी मिट्टी की भुरभुरी अवस्था की पुष्टि करें",
    mr: "जड ट्रॅक्टर चालवण्यापूर्वी वरच्या १५ सेमी मातीची मशागत स्थिती तपासा",
    te: "భారీ ట్రాక్టర్ పనులకు ముందు పై 15 సెం.మీ నేల వదులుతనాన్ని నిర్ధారించుకోండి",
    ta: "கனரக டிராக்டர் இயக்கத்திற்கு முன் மேல் 15 செ.மீ மண்ணின் தன்மையை உறுதிப்படுத்தவும்",
    gu: "ભારે ટ્રેક્ટર ચલાવતા પહેલા ઉપરની 15 સેમી માટીની સ્થિતિ ચકાસો",
    bn: "ভারী ট্র্যাক্টর চালানোর আগে উপরের ১৫ সেমি মাটির ঝুরঝুরে অবস্থা নিশ্চিত করুন",
    pa: "ਭਾਰੀ ਟਰੈਕਟਰ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਉੱਪਰਲੀ 15 ਸੈਂਟੀਮੀਟਰ ਮਿੱਟੀ ਦੀ ਭੁਰਭੁਰੀ ਹਾਲਤ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    kn: "ಭಾರೀ ಟ್ರ್ಯಾಕ್ಟರ್ ಕಾರ್ಯಾಚರಣೆಗೆ ಮುನ್ನ ಮೇಲಿನ 15 ಸೆಂ.ಮೀ ಮಣ್ಣಿನ ಹದವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
    ml: "ഹെവി ട്രാക്ടർ പ്രവർത്തിപ്പിക്കുന്നതിന് മുമ്പ് മുകളിലെ 15 സെ.മീ മണ്ണിന്റെ സ്ഥിതി ഉറപ്പാക്കുക",
    or: "ଭାରୀ ଟ୍ରାକ୍ଟର ଚଳାଇବା ପୂର୍ବରୁ ଉପର ୧୫ ସେମି ମାଟିର ଭଙ୍ଗୁରତା ଯାଞ୍ଚ କରନ୍ତୁ"
  },
  "Collect composite soil sample for KVK Soil Health Card testing": {
    hi: "केवीके मृदा स्वास्थ्य कार्ड परीक्षण हेतु संयुक्त मिट्टी का नमूना एकत्र करें",
    mr: "केव्हीके मृदा आरोग्य पत्रिका चाचणीसाठी संयुक्त मातीचा नमुना गोळा करा",
    te: "KVK నేల ఆరోగ్య కార్డు పరీక్ష కోసం మిశ్రమ నేల నమూనాను సేకరించండి",
    ta: "கேவிகே மண் நல அட்டை பரிசோதனைக்காக கூட்டு மண் மாதிரியை சேகரிக்கவும்",
    gu: "કેવીકે સોઇલ હેલ્થ કાર્ડ પરીક્ષણ માટે સંયુક્ત માટીનો નમૂનો એકત્ર કરો",
    bn: "কেভিকে মৃত্তিকা স্বাস্থ্য কার্ড পরীক্ষার জন্য মিশ্র মাটির নমুনা সংগ্রহ করুন",
    pa: "ਕੇਵੀਕੇ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਟੈਸਟਿੰਗ ਲਈ ਮਿਸ਼ਰਤ ਮਿੱਟੀ ਦਾ ਨਮੂਨਾ ਇਕੱਠਾ ਕਰੋ",
    kn: "ಕೆವಿಕೆ ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಪರೀಕ್ಷೆಗಾಗಿ ಸಂಯೋಜಿತ ಮಣ್ಣಿನ ಮಾದರಿಯನ್ನು ಸಂಗ್ರಹಿಸಿ",
    ml: "കെവികെ സോയിൽ ഹെൽത്ത് കാർഡ് പരിശോധനയ്ക്കായി സംയോജിത മണ്ണ് സാമ്പിൾ ശേഖരിക്കുക",
    or: "କେଭିକେ ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଡ ପରୀକ୍ଷା ପାଇଁ ମିଶ୍ରିତ ମାଟି ନମୁନା ସଂଗ୍ରହ କରନ୍ତୁ"
  },
  "2. PREPARE & TREAT": {
    hi: "2. तैयारी एवं उपचार",
    mr: "२. तयारी आणि प्रक्रिया",
    te: "2. సిద్ధం చేయడం & విత్తన శుద్ధి",
    ta: "2. தயார் செய்து நேர்த்தி செய்யவும்",
    gu: "2. તૈયારી અને માવજત",
    bn: "২. প্রস্তুতি ও শোধন",
    pa: "2. ਤਿਆਰੀ ਅਤੇ ਸੋਧ",
    kn: "2. ಸಿದ್ಧತೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ",
    ml: "2. തയ്യാറാക്കലും പരിചരണവും",
    or: "୨. ପ୍ରସ୍ତୁତି ଓ ଉପଚାର"
  },
  "Seed Treatment & Furrow Layout": {
    hi: "बीज उपचार एवं कूंड़ विन्यास",
    mr: "बियाणे प्रक्रिया आणि सऱ्यांची आखणी",
    te: "విత్తన శుద్ధి & సాళ్ల లేఅవుట్",
    ta: "விதை நேர்த்தி & சால் வடிவமைப்பு",
    gu: "બીજ માવજત અને ચાસનું આયોજન",
    bn: "বীজ শোধন ও নালা বিন্যাস",
    pa: "ਬੀਜ ਸੋਧ ਅਤੇ ਸਿਆੜ ਲੇਆਉਟ",
    kn: "ಬೀಜೋಪಚಾರ ಮತ್ತು ಸಾಲು ವಿನ್ಯಾಸ",
    ml: "വിത്ത് പരിചരണവും ചാൽ ലേഔട്ടും",
    or: "ବିହନ ଉପଚାର ଓ ସିଆର ବିନ୍ୟାସ"
  },
  "ICAR-NRRI protocols recommend bio-priming against fungal damping-off.": {
    hi: "आईसीएआर-एनआरआरआई दिशानिर्देश फफूंद जनित गलन रोग से बचाव हेतु बायो-प्राइमिंग की सलाह देते हैं।",
    mr: "आयसीएआर-एनआरआरआय मार्गदर्शक तत्त्वे बुरशीजन्य रोगांपासून बचावासाठी बायो-प्रायमिंगची शिफारस करतात.",
    te: "ICAR-NRRI మార్గదర్శకాలు శిలీంధ్ర తెగుళ్ల నివారణకు బయో-ప్రైమింగ్‌ను సిఫార్సు చేస్తున్నాయి.",
    ta: "பூஞ்சை அழுகல் நோய்க்கு எதிராக பயோ-பிரைமிங் செய்ய ஐசிஏஆர்-என்ஆர்ஆர்ஐ பரிந்துரைக்கிறது.",
    gu: "ICAR-NRRI માર્ગદર્શિકા ફૂગજન્ય રોગો સામે બાયો-પ્રાઈમિંગની ભલામણ કરે છે.",
    bn: "আইসিএআর-এনআরআরআই প্রোটোকল ছত্রাকজনিত ড্যাম্পিং-অফ প্রতিরোধে বায়ো-প্রাইমিংয়ের পরামর্শ দেয়।",
    pa: "ਆਈਸੀਏਆਰ-ਐਨਆਰਆਰਆਈ ਨਿਯਮ ਉੱਲੀ ਰੋਗਾਂ ਤੋਂ ਬਚਾਅ ਲਈ ਬਾਇਓ-ਪ੍ਰਾਈਮਿੰਗ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਨ।",
    kn: "ಶಿಲೀಂಧ್ರ ಕೊಳೆತ ರೋಗದ ವಿರುದ್ಧ ಜೈವಿಕ-ಪ್ರೈಮಿಂಗ್ ಅನ್ನು ICAR-NRRI ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.",
    ml: "കുമിൾ രോഗങ്ങൾക്കെതിരെ ബയോ-പ്രൈമിംഗ് നടത്താൻ ICAR-NRRI ശുപാർശ ചെയ്യുന്നു.",
    or: "କବକ ଜନିତ ରୋଗରୁ ରକ୍ଷା ପାଇଁ ICAR-NRRI ବାୟୋ-ପ୍ରାଇମିଂ ସୁପାରିଶ କରେ।"
  },
  "Pre-treat paddy seeds with Trichoderma viride @ 5g/kg seed": {
    hi: "धान के बीजों को ट्राइकोडर्मा विरिडी 5 ग्राम/किग्रा बीज की दर से उपचारित करें",
    mr: "भाताच्या बियाणांवर ५ ग्रॅम/किलो ट्रायकोडर्मा व्हिरिडीची बीजप्रक्रिया करा",
    te: "వరి విత్తనాలను 5 గ్రా/కిలో చొప్పున ట్రైకోడెర్మా విరిడేతో శుద్ధి చేయండి",
    ta: "நெல் விதைகளை கிலோவுக்கு 5 கிராம் ட்ரைகோடெர்மா விரிடி கொண்டு விதை நேர்த்தி செய்யவும்",
    gu: "ડાંગરના બીજને ટ્રાઇકોડર્મા વિરિડી 5 ગ્રામ/કિલો બીજ મુજબ માવજત આપો",
    bn: "ধানের বীজ ট্রাইকোডার্মা ভিরিডি ৫ গ্রাম/কেজি বীজ হারে শোধন করুন",
    pa: "ਝੋਨੇ ਦੇ ਬੀਜਾਂ ਨੂੰ ਟ੍ਰਾਈਕੋਡਰਮਾ ਵਿਰੀਡੀ 5 ਗ੍ਰਾਮ/ਕਿਲੋ ਬੀਜ ਦੇ ਹਿਸਾਬ ਨਾਲ ਸੋਧੋ",
    kn: "ಭತ್ತದ ಬೀಜಗಳನ್ನು ಪ್ರತಿ ಕೆಜಿ ಬೀಜಕ್ಕೆ 5 ಗ್ರಾಂ ಟ್ರೈಕೋಡರ್ಮಾ ವಿರಿಡಿಯೊಂದಿಗೆ ಸಂಸ್ಕರಿಸಿ",
    ml: "നെൽവിത്ത് കിലോയ്ക്ക് 5 ഗ്രാം ട്രൈക്കോഡെർമ വിരിഡി ഉപയോഗിച്ച് പരിചരിക്കുക",
    or: "ଧାନ ବିହନକୁ ୫ ଗ୍ରାମ/କେଜି ହିସାବରେ ଟ୍ରାଇକୋଡର୍ମା ଭିରିଡି ଦ୍ୱାରା ଉପଚାର କରନ୍ତୁ"
  },
  "Prepare raised nursery beds or direct seeded furrow lines (20cm spacing)": {
    hi: "उठी हुई नर्सरी क्यारियां या सीधी बुवाई हेतु कूंड़ तैयार करें (20 सेमी दूरी)",
    mr: "गादी वाफे तयार करा किंवा थेट पेरणीसाठी सऱ्या काढा (२० सेमी अंतर)",
    te: "ఎత్తైన నర్సరీ మడులు లేదా ప్రత్యక్ష విత్తన సాళ్లను సిద్ధం చేయండి (20 సెం.మీ దూరం)",
    ta: "உயர்த்தப்பட்ட நாற்றங்கால் பாத்திகள் அல்லது நேரடி விதைப்பு சால்களை தயார் செய்யவும் (20 செ.மீ இடைவெளி)",
    gu: "ઉંચા નર્સરી ક્યારા અથવા સીધી વાવણી માટે ચાસ તૈયાર કરો (20 સેમી અંતર)",
    bn: "উঁচু বীজতলা বা সরাসরি বপনের জন্য নালা তৈরি করুন (২০ সেমি দূরত্ব)",
    pa: "ਉੱਚੀਆਂ ਨਰਸਰੀ ਕਿਆਰੀਆਂ ਜਾਂ ਸਿੱਧੀ ਬਿਜਾਈ ਲਈ ਸਿਆੜ ਤਿਆਰ ਕਰੋ (20 ਸੈਂਟੀਮੀਟਰ ਵਿੱਥ)",
    kn: "ಎತ್ತರಿಸಿದ ನರ್ಸರಿ ಮಡಿಗಳು ಅಥವಾ ನೇರ ಬಿತ್ತನೆ ಸಾಲುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ (20 ಸೆಂ.ಮೀ ಅಂತರ)",
    ml: "ഉയർത്തിയ നഴ്സറി ബെഡുകൾ അല്ലെങ്കിൽ നേരിട്ടുള്ള വിതയ്ക്കൽ ചാലുകൾ തയ്യാറാക്കുക (20 സെ.മീ അകലം)",
    or: "ଉଚ୍ଚା ତଳି ଘରା କିମ୍ବା ସିଧା ବୁଣିବା ପାଇଁ ସିଆର ପ୍ରସ୍ତୁତ କରନ୍ତୁ (୨୦ ସେମି ବ୍ୟବଧାନ)"
  },
  "3. IRRIGATE & MANAGE": {
    hi: "3. सिंचाई एवं प्रबंधन",
    mr: "३. सिंचन आणि व्यवस्थापन",
    te: "3. నీటి పారుదల & నిర్వహణ",
    ta: "3. நீர்ப்பாசனம் & மேலாண்மை",
    gu: "3. પિયત અને વ્યવસ્થાપન",
    bn: "৩. সেচ ও ব্যবস্থাপনা",
    pa: "3. ਸਿੰਚਾਈ ਅਤੇ ਪ੍ਰਬੰਧਨ",
    kn: "3. ನೀರಾವರಿ ಮತ್ತು ನಿರ್ವಹಣೆ",
    ml: "3. ജലസേചനവും പരിപാലനവും",
    or: "୩. ଜଳସେଚନ ଓ ପରିଚାଳନା"
  },
  "Water Level Control & Drainage": {
    hi: "जल स्तर नियंत्रण एवं जल निकासी",
    mr: "पाण्याची पातळी नियंत्रण आणि निचरा",
    te: "నీటి మట్టం నియంత్రణ & డ్రైనేజీ",
    ta: "நீர் மட்டக் கட்டுப்பாடு & வடிகால்",
    gu: "પાણીની સપાટી નિયંત્રણ અને નિકાલ",
    bn: "জলের স্তর নিয়ন্ত্রণ এবং নিষ্কাশন",
    pa: "ਪਾਣੀ ਦੇ ਪੱਧਰ ਦਾ ਨਿਯੰਤਰਣ ਅਤੇ ਨਿਕਾਸੀ",
    kn: "ನೀರಿನ ಮಟ್ಟ ನಿಯಂತ್ರಣ ಮತ್ತು ಒಳಚರಂಡಿ",
    ml: "ജലനിരപ്പ് നിയന്ത്രണവും നീരൊഴുക്കും",
    or: "ଜଳ ସ୍ତର ନିୟନ୍ତ୍ରଣ ଓ ନିଷ୍କାସନ"
  },
  "Heavy rain surge (+22mm) anticipated tomorrow evening.": {
    hi: "कल शाम भारी वर्षा (+22 मिमी) होने का अनुमान है।",
    mr: "उद्या संध्याकाळी जोरदार पावसाची (+२२ मिमी) शक्यता आहे.",
    te: "రేపు సాయంత్రం భారీ వర్షం (+22 మి.మీ) కురిసే అవకాశం ఉంది.",
    ta: "நாளை மாலை கனமழை (+22 மிமீ) எதிர்பார்க்கப்படுகிறது.",
    gu: "આવતીકાલે સાંજે ભારે વરસાદ (+22 મીમી) થવાની સંભાવના છે.",
    bn: "আগামীকাল সন্ধ্যায় ভারী বৃষ্টিপাতের (+২২ মিমি) সম্ভাবনা রয়েছে।",
    pa: "ਕੱਲ੍ਹ ਸ਼ਾਮ ਭਾਰੀ ਮੀਂਹ (+22 ਮਿਲੀਮੀਟਰ) ਪੈਣ ਦੀ ਸੰਭਾਵਨਾ ਹੈ।",
    kn: "ನಾಳೆ ಸಂಜೆ ಭಾರಿ ಮಳೆಯಾಗುವ (+22 ಮಿಮೀ) ನಿರೀಕ್ಷೆಯಿದೆ.",
    ml: "നാളെ വൈകുന്നേരം കനത്ത മഴ (+22 മിമി) പ്രതീക്ഷിക്കുന്നു.",
    or: "ଆସନ୍ତାକାଲି ସନ୍ଧ୍ୟାରେ ପ୍ରବଳ ବର୍ଷା (+୨୨ ମିମି) ହେବାର ସମ୍ଭାବନା ଅଛି।"
  },
  "Clear exit drainage bunds to avoid submersion exceeding 48 hours": {
    hi: "48 घंटे से अधिक जलभराव से बचने हेतु निकास नालियों की मेड़ साफ करें",
    mr: "४८ तासांपेक्षा जास्त पाणी साचू नये म्हणून निचरा बांध मोकळे करा",
    te: "48 గంటలకు మించి నీరు నిల్వ ఉండకుండా నిష్క్రమణ డ్రైనేజీ కట్టలను శుభ్రం చేయండి",
    ta: "48 மணி நேரத்திற்கு மேல் நீர் தேங்குவதைத் தவிர்க்க வடிகால் வரப்புகளைச் சரிசெய்யவும்",
    gu: "48 કલાકથી વધુ પાણી ભરાઈ ન રહે તે માટે નિકાલ પાળાઓ સાફ કરો",
    bn: "৪৮ ঘণ্টার বেশি জলমগ্নতা এড়াতে নিকাশী বাঁধ পরিষ্কার করুন",
    pa: "48 ਘੰਟਿਆਂ ਤੋਂ ਵੱਧ ਪਾਣੀ ਖੜ੍ਹਾ ਰਹਿਣ ਤੋਂ ਰੋਕਣ ਲਈ ਨਿਕਾਸੀ ਬੰਨ੍ਹ ਸਾਫ਼ ਕਰੋ",
    kn: "48 ಗಂಟೆಗಳಿಗಿಂತ ಹೆಚ್ಚು ನೀರು ನಿಲ್ಲುವುದನ್ನು ತಪ್ಪಿಸಲು ಒಳಚರಂಡಿ ಕಟ್ಟೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ",
    ml: "48 മണിക്കൂറിൽ കൂടുതൽ വെള്ളക്കെട്ട് ഒഴിവാക്കാൻ നീരൊഴുക്ക് ചാലുകൾ വൃത്തിയാക്കുക",
    or: "୪୮ ଘଣ୍ଟାରୁ ଅଧିକ ଜଳବନ୍ଦୀ ନହେବା ପାଇଁ ନିଷ୍କାସନ ବନ୍ଧ ସଫା କରନ୍ତୁ"
  },
  "Check farm pond inlet sluice to capture surplus surface runoff": {
    hi: "अतिरिक्त सतही जल संचयन हेतु खेत तालाब के इनलेट गेट की जांच करें",
    mr: "अतिरिक्त वाहून जाणारे पाणी साठवण्यासाठी शेततळ्याचा मार्ग तपासा",
    te: "అదనపు ఉపరితల నీటిని నిల్వ చేయడానికి ఫామ్ పాండ్ ఇన్లెట్ గేట్‌ను తనిఖీ చేయండి",
    ta: "மேற்பரப்பு நீரைச் சேமிக்க பண்ணைக் குட்டை நுழைவு மதகைச் சரிபார்க்கவும்",
    gu: "વધારાનું પાણી સંગ્રહવા માટે ખેત તલાવડીના ઇનલેટની તપાસ કરો",
    bn: "উদ্বৃত্ত জল সংরক্ষণের জন্য খামার পুকুরের ইনলেট গেট পরীক্ষা করুন",
    pa: "ਵਾਧੂ ਪਾਣੀ ਨੂੰ ਇਕੱਠਾ ਕਰਨ ਲਈ ਖੇਤ ਛੱਪੜ ਦੇ ਇਨਲੇਟ ਗੇਟ ਦੀ ਜਾਂਚ ਕਰੋ",
    kn: "ಹೆಚ್ಚುವರಿ ನೀರನ್ನು ಸಂಗ್ರಹಿಸಲು ಕೃಷಿ ಹೊಂಡದ ಒಳಹರಿವಿನ ದ್ವಾರವನ್ನು ಪರಿಶೀಲಿಸಿ",
    ml: "ഉപരിതല ജലം സംഭരിക്കുന്നതിനായി ഫാം പോണ്ട് ഇൻലെറ്റ് സ്ലൂയിസ് പരിശോധിക്കുക",
    or: "ଅତିରିକ୍ତ ଜଳ ସଂରକ୍ଷଣ ପାଇଁ କୃଷି ପୋଖରୀର ପ୍ରବେଶ ପଥ ଯାଞ୍ଚ କରନ୍ତୁ"
  },
  "4. SOW / TRANSPLANT": {
    hi: "4. बुवाई / रोपाई",
    mr: "४. पेरणी / पुनर्लागवड",
    te: "4. విత్తడం / నాటడం",
    ta: "4. விதைப்பு / நடுதல்",
    gu: "4. વાવણી / ફેરરોપણી",
    bn: "৪. বপন / রোপণ",
    pa: "4. ਬਿਜਾਈ / ਲੁਆਈ",
    kn: "4. ಬಿತ್ತನೆ / ನಾಟಿ",
    ml: "4. വിതയ്ക്കൽ / നടീൽ",
    or: "୪. ବୁଣିବା / ରୋପଣ"
  },
  "Optimal Sowing Window Execution": {
    hi: "इष्टतम बुवाई अवधि का क्रियान्वयन",
    mr: "योग्य पेरणी वेळेचे नियोजन",
    te: "సరైన విత్తే సమయ అమలు",
    ta: "உகந்த விதைப்பு கால செயல்முறை",
    gu: "શ્રેષ્ઠ વાવણી સમયનું પાલન",
    bn: "অনুকূল বপন সময় বাস্তবায়ন",
    pa: "ਸਹੀ ਬਿਜਾਈ ਸਮੇਂ ਦੀ ਪਾਲਣਾ",
    kn: "ಅತ್ಯುತ್ತಮ ಬಿತ್ತನೆ ಸಮಯ ಅನುಷ್ಠಾನ",
    ml: "അനുയോജ്യമായ വിതയ്ക്കൽ സമയം",
    or: "ସର୍ବୋତ୍ତମ ବୁଣିବା ସମୟ କାର୍ଯ୍ୟକାରୀ"
  },
  "Medium-Late duration cultivars (Swarna MTU-7029) enter peak vegetative window.": {
    hi: "मध्यम-देर से पकने वाली किस्में (स्वर्ण MTU-7029) शीर्ष वानस्पतिक अवस्था में प्रवेश करती हैं।",
    mr: "मध्यम-उशिरा पक्व होणारे वाण (सुवर्ण MTU-7029) वाढीच्या टप्प्यात प्रवेश करतात.",
    te: "మధ్యస్థ-ఆలస్య రకాలు (స్వర్ణ MTU-7029) గరిష్ట వృద్ధి దశలోకి ప్రవేశిస్తాయి.",
    ta: "மத்திய-நீண்ட கால ரகங்கள் (ஸ்வர்ணா MTU-7029) உச்ச வளர்ச்சி நிலையை அடைகின்றன.",
    gu: "મધ્યમ-મોડી પાકતી જાતો (સ્વર્ણ MTU-7029) મુખ્ય વૃદ્ધિના તબક્કામાં પ્રવેશે છે.",
    bn: "মাঝারি-দেরিতে পাকা জাত (স্বর্ণ MTU-7029) সর্বোচ্চ বৃদ্ধি পর্যায়ে প্রবেশ করে।",
    pa: "ਦਰਮਿਆਨੀ-ਪਛੇਤੀਆਂ ਕਿਸਮਾਂ (ਸਵਰਨ MTU-7029) ਸਿਖਰਲੇ ਵਾਧੇ ਦੇ ਪੜਾਅ ਵਿੱਚ ਦਾਖਲ ਹੁੰਦੀਆਂ ਹਨ।",
    kn: "ಮಧ್ಯಮ-ತಡವಾದ ತಳಿಗಳು (ಸ್ವರ್ಣ MTU-7029) ಗರಿಷ್ಠ ಬೆಳವಣಿಗೆಯ ಹಂತವನ್ನು ಪ್ರವೇಶಿಸುತ್ತವೆ.",
    ml: "ഇടത്തരം-വൈകി വിളവെടുക്കുന്ന ഇനങ്ങൾ (സ്വർണ്ണ MTU-7029) വളർച്ചാ ഘട്ടത്തിലേക്ക് കടക്കുന്നു.",
    or: "ମଧ୍ୟମ-ବିଳମ୍ବିତ କିସମ (ସ୍ୱର୍ଣ୍ଣ MTU-7029) ସର୍ବୋଚ୍ଚ ବୃଦ୍ଧି ପର୍ଯ୍ୟାୟରେ ପ୍ରବେଶ କରେ।"
  },
  "Transplant 21-day seedlings at 2-3 seedlings per hill": {
    hi: "21 दिन की पौध को प्रति थान 2-3 पौध की दर से रोपें",
    mr: "२१ दिवसांची रोपे प्रति चूड २-३ रोपे याप्रमाणे पुनर्लागवड करा",
    te: "21 రోజుల నారును ప్రతి కుదురుకు 2-3 మొక్కల చొప్పున నాటండి",
    ta: "21 நாள் நாற்றுகளை ஒரு குத்துக்கு 2-3 நாற்றுகள் வீதம் நடவும்",
    gu: "21 દિવસના ધરૂને પ્રતિ ખાડા દીઠ 2-3 રોપા મુજબ રોપો",
    bn: "২১ দিনের চারা প্রতি গোছায় ২-৩টি করে রোপণ করুন",
    pa: "21 ਦਿਨਾਂ ਦੀ ਪਨੀਰੀ ਨੂੰ ਪ੍ਰਤੀ ਬੂਟਾ 2-3 ਪੌਦੇ ਦੇ ਹਿਸਾਬ ਨਾਲ ਲਗਾਓ",
    kn: "21 ದಿನಗಳ ಸಸಿಗಳನ್ನು ಪ್ರತಿ ಗುಂಪಿಗೆ 2-3 ಸಸಿಗಳಂತೆ ನಾಟಿ ಮಾಡಿ",
    ml: "21 ദിവസം പ്രായമായ ഞാറ്റടികൾ 2-3 എണ്ണം വീതം നടുക",
    or: "୨୧ ଦିନର ତଳିକୁ ଗାତ ପ୍ରତି ୨-୩ଟି ଚାରା ହିସାବରେ ରୋପଣ କରନ୍ତୁ"
  },
  "Apply basal dose of DAP and Potash; delay urea until rooting": {
    hi: "डीएपी एवं पोटाश की आधार खुराक डालें; जड़ पकड़ने तक यूरिया रोकें",
    mr: "डीएपी आणि पोटॅशची मूळ मात्रा द्या; मुळे फुटण्यापर्यंत युरिया देऊ नका",
    te: "DAP మరియు పొటాష్ ప్రాథమిక మోతాదును వేయండి; వేర్లు వచ్చే వరకు యూరియాను ఆలస్యం చేయండి",
    ta: "டிஏபி மற்றும் பொட்டாஷ் அடியுரமாக இடவும்; வேர் பிடிக்கும் வரை யூரியாவை தாமதப்படுத்தவும்",
    gu: "ડીએપી અને પોટાશનો પાયાનો ડોઝ આપો; મૂળ મજબૂત થાય ત્યાં સુધી યુરિયા ન આપો",
    bn: "ডিএপি এবং পটাশের মূল মাত্রা প্রয়োগ করুন; শিকড় গজানো পর্যন্ত ইউরিয়া স্থগিত রাখুন",
    pa: "ਡੀਏਪੀ ਅਤੇ ਪੋਟਾਸ਼ ਦੀ ਮੁੱਢਲੀ ਖੁਰਾਕ ਪਾਓ; ਜੜ੍ਹਾਂ ਲੱਗਣ ਤੱਕ ਯੂਰੀਆ ਰੋਕੋ",
    kn: "ಡಿಎಪಿ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಮೂಲ ಪ್ರಮಾಣವನ್ನು ನೀಡಿ; ಬೇರು ಬಿಡುವವರೆಗೆ ಯೂರಿಯಾವನ್ನು ಮುಂದೂಡಿ",
    ml: "ഡിഎപി, പൊട്ടാഷ് എന്നിവ അടിവളമായി നൽകുക; വേരുപിടിക്കുന്നത് വരെ യൂറിയ നൽകരുത്",
    or: "DAP ଏବଂ ପଟାସର ପ୍ରାଥମିକ ମାତ୍ରା ପ୍ରୟୋଗ କରନ୍ତୁ; ଚେର ଧରିବା ପର୍ଯ୍ୟନ୍ତ ୟୁରିଆ ସ୍ଥଗିତ ରଖନ୍ତୁ"
  },
  "5. MONITOR & REVIEW": {
    hi: "5. निगरानी एवं समीक्षा",
    mr: "५. देखरेख आणि आढावा",
    te: "5. పర్యవేక్షణ & సమీక్ష",
    ta: "5. கண்காணிப்பு & மதிப்பாய்வு",
    gu: "5. દેખરેખ અને સમીક્ષા",
    bn: "৫. পর্যবেক্ষণ ও পর্যালোচনা",
    pa: "5. ਨਿਗਰਾਨੀ ਅਤੇ ਸਮੀਖਿਆ",
    kn: "5. ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ಪರಿಶೀಲನೆ",
    ml: "5. നിരീക്ഷണവും അവലോകനവും",
    or: "୫. ତଦାରଖ ଓ ସମୀକ୍ଷା"
  },
  "Post-Establishment Canopy Health": {
    hi: "फसल स्थापना उपरांत छत्रक स्वास्थ्य",
    mr: "रोप लागवडीनंतर पिकाचे आरोग्य",
    te: "మొక్కల స్థాపన తదుపరి పైరు ఆరోగ్యం",
    ta: "பயிர் நிலைநிறுத்தலுக்குப் பின் விதான ஆரோக்கியம்",
    gu: "પાક સ્થાપના પછી છોડનું સ્વાસ્થ્ય",
    bn: "চারা প্রতিষ্ঠার পরবর্তী ক্যানোপি স্বাস্থ্য",
    pa: "ਫਸਲ ਸਥਾਪਨਾ ਤੋਂ ਬਾਅਦ ਬੂਟਿਆਂ ਦੀ ਸਿਹਤ",
    kn: "ಬೆಳೆ ಸ್ಥಾಪನೆಯ ನಂತರದ ಮೇಲ್ಚಾವಣಿ ಆರೋಗ್ಯ",
    ml: "വിള സ്ഥാപനത്തിന് ശേഷമുള്ള സസ്യ ആരോഗ്യം",
    or: "ଚାରା ସ୍ଥାପନ ପରବର୍ତ୍ତୀ ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ"
  },
  "Relative humidity >80% warrants leaf folder & blast vigilance.": {
    hi: "सापेक्ष आर्द्रता >80% होने पर पत्ती लपेटक एवं झुलसा रोग हेतु सतर्कता आवश्यक है।",
    mr: "हवेतील आर्द्रता >८०% असल्यास पाने गुंडाळणारी अळी व करपा रोगाबाबत दक्षता बाळगा.",
    te: "సాపేక్ష తేమ >80% ఉన్నప్పుడు ఆకు ముడుత & అగ్గి తెగులుపై నిఘా అవసరం.",
    ta: "ஒப்பீட்டு ஈரப்பதம் >80% இலை சுருட்டு புழு மற்றும் இலைக்கருகல் விழிப்புணர்வை கோருகிறது.",
    gu: "સાપેક્ષ ભેજ >80% હોય ત્યારે પાન વાળનાર ઈયળ અને કરપો રોગ સામે સતર્ક રહો.",
    bn: "আপেক্ষিক আর্দ্রতা >৮০% হলে পাতা মোড়ানো পোকা এবং ব্লাস্ট রোগের জন্য সতর্ক থাকুন।",
    pa: "ਸਾਪੇਖਿਕ ਨਮੀ >80% ਹੋਣ 'ਤੇ ਪੱਤਾ ਲਪੇਟ ਸੁੰਡੀ ਅਤੇ ਝੁਲਸ ਰੋਗ ਲਈ ਚੌਕਸੀ ਜ਼ਰੂਰੀ ਹੈ।",
    kn: "ಸಾಪೇಕ್ಷ ಆರ್ದ್ರತೆ >80% ಇದ್ದಾಗ ಎಲೆ ಮಡಚುವ ಹುಳು ಮತ್ತು ಬ್ಲಾಸ್ಟ್ ರೋಗದ ಬಗ್ಗೆ ಜಾಗರೂಕರಾಗಿರಿ.",
    ml: "ആപേക്ഷിക ഈർപ്പം >80% ആകുമ്പോൾ ഇല ചുരുട്ടി പുഴു, ബ്ലാസ്റ്റ് രോഗം എന്നിവയ്ക്കെതിരെ ജಾಗ്രത പാലിക്കുക.",
    or: "ଆପେକ୍ଷିକ ଆର୍ଦ୍ରତା >୮୦% ହେଲେ ପତ୍ର ମୋଡ଼ା ପୋକ ଓ ବ୍ଲାଷ୍ଟ ରୋଗ ପାଇଁ ସତର୍କତା ଆବଶ୍ୟକ।"
  },
  "Install 5 pheromone traps per hectare for yellow stem borer": {
    hi: "पीला तना छेदक हेतु प्रति हेक्टेयर 5 फेरोमोन ट्रैप लगाएं",
    mr: "पिवळ्या खोडकिडीसाठी प्रति हेक्टरी ५ फेरोमोन सापळे लावा",
    te: "పసుపు కాండం తొలిచే పురుగు కోసం హెక్టారుకు 5 ఫెరమోన్ ఉచ్చులు అమర్చండి",
    ta: "மஞ்சள் தண்டு துளைப்பானுக்கு ஹெக்டேருக்கு 5 இனக்கவர்ச்சி பொறிகளை நிறுவவும்",
    gu: "પીળી ડૂંખની ઈયળ માટે હેક્ટર દીઠ 5 ફેરોમોન ટ્રેપ લગાવો",
    bn: "হলুদ মাজরা পোকার জন্য হেক্টর প্রতি ৫টি ফেরোমন ফাঁদ স্থাপন করুন",
    pa: "ਪੀਲੀ ਤਣਾ ਛੇਦਕ ਸੁੰਡੀ ਲਈ ਪ੍ਰਤੀ ਹੈਕਟੇਅਰ 5 ਫੇਰੋਮੋਨ ਟਰੈਪ ਲਗਾਓ",
    kn: "ಹಳದಿ ಕಾಂಡ ಕೊರೆಯುವ ಹುಳುವಿಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ 5 ಫೆರೋಮೋನ್ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ",
    ml: "മഞ്ഞ തണ്ട് തുരപ്പൻ പുഴുവിനായി ഹെക്ടറിന് 5 ഫെറോമോൺ കെണികൾ സ്ഥാപിക്കുക",
    or: "ହଳଦିଆ କାଣ୍ଡ ବିନ୍ଧା ପୋକ ପାଇଁ ହେକ୍ଟର ପ୍ରତି ୫ଟି ଫେରୋମୋନ୍ ଫାନ୍ଦ ଲଗାନ୍ତୁ"
  },
  "Review 14-day dry spell forecast in NovaVarsha Scenario Lab": {
    hi: "युवासेतु सिनेरियो लैब में 14-दिवसीय शुष्क दौर पूर्वानुमान की समीक्षा करें",
    mr: "युवासेतू सिनेरिओ लॅबमध्ये १४ दिवसांच्या कोरड्या कालखंडाच्या अंदाजाचा आढावा घ्या",
    te: "యువసేతు సినారియో ల్యాబ్‌లో 14 రోజుల పొడి వాతావరణ అంచనాను సమీక్షించండి",
    ta: "யுவசேது ஆய்வகத்தில் 14-நாள் வறண்ட கால முன்னறிவிப்பை மதிப்பாய்வு செய்யவும்",
    gu: "યુવાસેતુ સિનેરિયો લેબમાં 14-દિવસીય સૂકા ગાળાની આગાહીની સમીક્ષા કરો",
    bn: "যুবসেতু সিনারিও ল্যাবে ১৪ দিনের শুষ্ক আবহাওয়ার পূর্বাভাস পর্যালোচনা করুন",
    pa: "ਯੁਵਾਸੇਤੂ ਸਿਨੇਰੀਓ ਲੈਬ ਵਿੱਚ 14-ਦਿਨਾ ਖੁਸ਼ਕ ਦੌਰ ਦੀ ਭਵਿੱਖਬਾਣੀ ਦੀ ਸਮੀਖਿਆ ਕਰੋ",
    kn: "ಯುವಸೇತು ಸಿನಾರಿಯೊ ಲ್ಯಾಬ್‌ನಲ್ಲಿ 14 ದಿನಗಳ ಒಣ ಹವೆಯ ಮುನ್ಸೂಚನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
    ml: "യുവസേതു സിനാരിയോ ലാബിൽ 14 ദിവസത്തെ വരണ്ട കാലാവസ്ഥാ പ്രവചനം അവലോകനം ചെയ്യുക",
    or: "ଯୁବସେତୁ ସିନେରିଓ ଲ୍ୟାବ୍‌ରେ ୧୪-ଦିନର ଶୁଷ୍କ ପାଣିପାଗ ପୂର୍ବାନୁମାନ ସମୀକ୍ଷା କରନ୍ତୁ"
  },
};

/**
 * Universal Contextual Vernacular Translator
 * Translates any UI phrase into the target language across all 11 supported Indian languages
 */
export function translateVernacular(englishText, lang) {
  if (!englishText || lang === 'en') return englishText;

  const trimmed = typeof englishText === 'string' ? englishText.trim() : String(englishText);

  // 1. Exact phrase lookup
  if (VERNACULAR_DICTIONARY[trimmed]) {
    if (VERNACULAR_DICTIONARY[trimmed][lang]) return VERNACULAR_DICTIONARY[trimmed][lang];
    if (VERNACULAR_DICTIONARY[trimmed]['hi']) return VERNACULAR_DICTIONARY[trimmed]['hi'];
  }

  // 2. Case-insensitive lookup in VERNACULAR_DICTIONARY
  const lowerTrimmed = trimmed.toLowerCase();
  for (const [key, val] of Object.entries(VERNACULAR_DICTIONARY)) {
    if (key.toLowerCase() === lowerTrimmed) {
      if (val[lang]) return val[lang];
      if (val['hi']) return val['hi'];
    }
  }

  // 3. Check I18N_DATA keys
  if (I18N_DATA[lang] && I18N_DATA[lang][trimmed]) {
    return I18N_DATA[lang][trimmed];
  }
  if (I18N_DATA['hi'] && I18N_DATA['hi'][trimmed]) {
    return I18N_DATA['hi'][trimmed];
  }

  // 4. Token & Word-Level Replacement Fallback
  let translatedSentence = trimmed;
  let hasReplaced = false;

  const tokenMap = [
    ['10-Year', { hi: '10-वर्षीय', mr: '१०-वर्षीय', te: '10-సంవత్సరాల', ta: '10-ஆண்டு', gu: '10-વર્ષીય', bn: '১০-বছরের', pa: '10-ਸਾਲਾ', kn: '10-ವರ್ಷಗಳ', ml: '10-വർഷത്തെ', or: '୧୦-ବର୍ଷର' }],
    ['30-Year', { hi: '30-वर्षीय', mr: '३०-वर्षीय', te: '30-సంవత్సరాల', ta: '30-ஆண்டு', gu: '30-વર્ષીય', bn: '৩০-বছরের', pa: '30-ਸਾਲਾ', kn: '30-ವರ್ಷಗಳ', ml: '30-വർഷത്തെ', or: '୩୦-ବର୍ଷର' }],
    ['7-Day', { hi: '7-दिवसीय', mr: '७-दिवसीय', te: '7-రోజుల', ta: '7-நாள்', gu: '7-દિવસીય', bn: '৭-দিনের', pa: '7-ਦਿਨਾ', kn: '7-ದಿನಗಳ', ml: '7-ദിവസത്തെ', or: '୭-ଦିନର' }],
    ['30-Day', { hi: '30-दिवसीय', mr: '३०-दिवसीय', te: '30-రోజుల', ta: '30-நாள்', gu: '30-દિવસીય', bn: '৩০-দিনের', pa: '30-ਦਿਨਾ', kn: '30-ದಿನಗಳ', ml: '30-ദിവസത്തെ', or: '୩୦-ଦିନର' }],
    ['Graph 1:', { hi: 'ग्राफ़ 1:', mr: 'आलेख १:', te: 'గ్రాఫ్ 1:', ta: 'வரைபடம் 1:', gu: 'ગ્રાફ 1:', bn: 'গ্রাফ ১:', pa: 'ਗ੍ਰਾਫ਼ 1:', kn: 'ಗ್ರಾಫ್ 1:', ml: 'ഗ്രാഫ് 1:', or: 'ଗ୍ରାଫ୍ ୧:' }],
    ['Graph 2:', { hi: 'ग्राफ़ 2:', mr: 'आलेख २:', te: 'గ్రాఫ్ 2:', ta: 'வரைபடம் 2:', gu: 'ગ્રાફ 2:', bn: 'গ্রাফ ২:', pa: 'ਗ੍ਰਾਫ਼ 2:', kn: 'ಗ್ರಾಫ್ 2:', ml: 'ഗ്രാഫ് 2:', or: 'ଗ୍ରାଫ୍ ୨:' }],
    ['Graph 3:', { hi: 'ग्राफ़ 3:', mr: 'आलेख ३:', te: 'గ్రాఫ్ 3:', ta: 'வரைபடம் 3:', gu: 'ગ્રાફ 3:', bn: 'গ্রাফ ৩:', pa: 'ਗ੍ਰਾਫ਼ 3:', kn: 'ಗ್ರಾಫ್ 3:', ml: 'ഗ്രാഫ് 3:', or: 'ଗ୍ରାଫ୍ ୩:' }],
    ['Graph 4:', { hi: 'ग्राफ़ 4:', mr: 'आलेख ४:', te: 'గ్రాఫ్ 4:', ta: 'வரைபடம் 4:', gu: 'ગ્રાફ 4:', bn: 'গ্রাফ ৪:', pa: 'ਗ੍ਰਾਫ਼ 4:', kn: 'ਗ್ರಾਫ 4:', ml: 'ഗ്രാഫ് 4:', or: 'ଗ୍ରାଫ୍ ୪:' }],
    ['Graph 5:', { hi: 'ग्राफ़ 5:', mr: 'आलेख ५:', te: 'గ్రాఫ్ 5:', ta: 'வரைபடம் 5:', gu: 'ગ્રાફ 5:', bn: 'গ্রাফ ৫:', pa: 'ਗ੍ਰਾਫ਼ 5:', kn: 'ಗ್ರಾಫ್ 5:', ml: 'ഗ്രാഫ് 5:', or: 'ଗ୍ରାଫ୍ ୫:' }],
    ['Paddy (Rice)', { hi: 'धान (चावल)', mr: 'भात', te: 'వరి', ta: 'நெல்', gu: 'ડાંગર', bn: 'ধান', pa: 'ਝੋਨਾ', kn: 'ಭತ್ತ', ml: 'നെല്ല്', or: 'ଧାନ' }],
    ['Wheat', { hi: 'गेहूं', mr: 'गहू', te: 'గోధుమలు', ta: 'கோதுமை', gu: 'ઘઉં', bn: 'গম', pa: 'ਕਣਕ', kn: 'ಗೋಧಿ', ml: 'ഗോതമ്പ്', or: 'ଗହମ' }],
    ['Maize', { hi: 'मक्का', mr: 'मका', te: 'మొక్కజొన్న', ta: 'மக்காச்சோளம்', gu: 'મકાઈ', bn: 'ভুট্টা', pa: 'ਮੱਕੀ', kn: 'ಮೆಕ್ಕೆಜೋಳ', ml: 'മക്കച്ചോളം', or: 'ମକା' }],
    ['Cotton', { hi: 'कपास', mr: 'कापूस', te: 'పత్తి', ta: 'பருத்தி', gu: 'કપાસ', bn: 'তুলা', pa: 'ਨਰਮਾ', kn: 'ಹತ್ತಿ', ml: 'പരുത്തി', or: 'କପା' }],
    ['Soybean', { hi: 'सोयाबीन', mr: 'सोयाबीन', te: 'సోయాబీన్', ta: 'சோயாபீன்', gu: 'સોયાબીન', bn: 'সয়াবিন', pa: 'ਸੋਇਆਬੀਨ', kn: 'ਸੋಯಾಬೀನ್', ml: 'സോയാബീൻ', or: 'ସୋୟାବିନ୍' }],
    ['Mustard', { hi: 'सरसों', mr: 'मोहरी', te: 'ఆవాలు', ta: 'கடுகு', gu: 'રાયડો', bn: 'সরিষা', pa: 'ਸਰ੍ਹੋਂ', kn: 'ಸಾಸಿವೆ', ml: 'കടുക്', or: 'ସୋରିଷ' }],
    ['Bajra', { hi: 'बाजरा', mr: 'बाजरी', te: 'సజ్జలు', ta: 'கம்பு', gu: 'બાજરી', bn: 'বাজরা', pa: 'ਬਾਜਰਾ', kn: 'ಸಜ್ಜೆ', ml: 'കമ്പം', or: 'ବାଜਰਾ' }],
    ['Gram', { hi: 'चना', mr: 'हरभरा', te: 'శనగలు', ta: 'கடலை', gu: 'ચણા', bn: 'ছোলা', pa: 'ਛੋਲੇ', kn: 'ಕಡಲೆ', ml: 'കടല', or: 'ବୁଟ' }],
    ['Rainfall', { hi: 'वर्षा', mr: 'पाऊस', te: 'వర్షపాతం', ta: 'மழைப்பொழிவு', gu: 'વરસાદ', bn: 'বৃষ্টিপাত', pa: 'ਮੀਂਹ', kn: 'ಮಳೆ', ml: 'മഴ', or: 'ବର୍ଷା' }],
    ['Temperature', { hi: 'तापमान', mr: 'तापमान', te: 'ఉష్ణోగ్రత', ta: 'வெப்பநிலை', gu: 'તાપમાન', bn: 'তাপমাত্রা', pa: 'ਤਾਪਮਾਨ', kn: 'ತಾಪಮಾನ', ml: 'താപനില', or: 'ତାପମାତ୍ରା' }],
    ['Soil Moisture', { hi: 'मृदा नमी', mr: 'मातीतील ओलावा', te: 'నేల తేమ', ta: 'மண் ஈரப்பதம்', gu: 'જમીન ભેજ', bn: 'মাটির আর্দ্রতা', pa: 'ਮਿੱਟੀ ਦੀ ਨਮੀ', kn: 'ಮಣ್ಣಿನ ತೇವಾಂಶ', ml: 'മണ്ണിലെ ഈർപ്പം', or: 'ମୃତ୍ତିକା ଆର୍ଦ୍ରତା' }],
    ['Humidity', { hi: 'आर्द्रता', mr: 'आर्द्रता', te: 'తేమ', ta: 'ஈரப்பதம்', gu: 'ભેજ', bn: 'আর্দ্রতা', pa: 'ਨਮੀ', kn: 'ಆರ್ದ್ರತೆ', ml: 'ഈർപ്പം', or: 'ଆର୍ଦ୍ରତା' }],
    ['Days', { hi: 'दिन', mr: 'दिवस', te: 'రోజులు', ta: 'நாட்கள்', gu: 'દિવસો', bn: 'দিন', pa: 'ਦਿਨ', kn: 'ದಿನಗಳು', ml: 'ദിവസങ്ങൾ', or: 'ଦିନ' }],
    ['Duration', { hi: 'अवधि', mr: 'कालावधी', te: 'కాలవ్యవధి', ta: 'கால அளவு', gu: 'સમયગાળો', bn: 'সময়সীমা', pa: 'ਮਿਆਦ', kn: 'ಅವಧಿ', ml: 'കാലയളവ്', or: 'ଅବଧି' }],
    ['Water Need', { hi: 'जल आवश्यकता', mr: 'पाण्याची गरज', te: 'నీటి అవసరం', ta: 'நீர் தேவை', gu: 'પાણીની જરૂરિયાત', bn: 'जলের প্রয়োজন', pa: 'ਪਾਣੀ ਦੀ ਲੋੜ', kn: 'ನೀರಿನ ಅಗತ್ಯ', ml: 'ജല ആവശ്യകത', or: 'ଜଳ ଆବଶ୍ୟକତା' }],
    ['Suitability', { hi: 'उपयुक्तता', mr: 'उपयुक्तता', te: 'అనుకూలత', ta: 'பொருத்தம்', gu: 'અનુકૂળતા', bn: 'উপযুক্ততা', pa: 'ਢੁਕਵਾਂਪਣ', kn: 'ಹೊಂದಾಣಿಕೆ', ml: 'അനുയോജ്യത', or: 'ଉପଯୁକ୍ତତା' }],
    ['Season', { hi: 'मौसम/ऋतु', mr: 'हंगाम', te: 'సీజన్', ta: 'பருவம்', gu: 'ઋતુ', bn: 'মৌসুম', pa: 'ਸੀਜ਼ਨ', kn: 'ಋತು', ml: 'സീസൺ', or: 'ଋତୁ' }],
    ['Optimal', { hi: 'इष्टतम', mr: 'सर्वोत्तम', te: 'అనుకూలమైనది', ta: 'உகந்த', gu: 'શ્રેષ્ઠ', bn: 'অনুকূল', pa: 'ਸਭ ਤੋਂ ਵਧੀਆ', kn: 'ಅತ್ಯುತ್ತಮ', ml: 'അനുയോജ്യം', or: 'ସର୍ବୋତ୍ತମ' }],
    ['Deficit', { hi: 'कमी/घाटा', mr: 'तुटवडा', te: 'లోటు', ta: 'பற்றாக்குறை', gu: 'ઘટ', bn: 'ঘাটতি', pa: 'ਘਾਟ', kn: 'ಕೊರತೆ', ml: 'കുറവ്', or: 'ଅଭାବ' }],
    ['Excess', { hi: 'अधिशेष', mr: 'जास्त', te: 'అధికం', ta: 'அதிகப்படியான', gu: 'વધારે', bn: 'অতিরিক্ত', pa: 'ਵਾਧੂ', kn: 'ಹೆಚ್ಚುವರಿ', ml: 'കൂടുതൽ', or: 'ଅଧିକ' }],
    ['Anomaly', { hi: 'विसंगति', mr: 'विसंगती', te: 'అసమానత', ta: 'மாறுபாடு', gu: 'વિસંગતતા', bn: 'অসঙ্গতি', pa: 'ਪਾੜਾ', kn: 'ವ್ಯತ್ಯಾಸ', ml: 'വ്യതിയാനം', or: 'ଅସଙ୍ଗତି' }],
    ['Forecast', { hi: 'पूर्वानुमान', mr: 'अंदाज', te: 'మున్సూచన', ta: 'முன்னறிவிப்பு', gu: 'આગાહી', bn: 'পূর্বাভাস', pa: 'ਭਵਿੱਖਬਾਣੀ', kn: 'ಮುನ್ಸೂಚನೆ', ml: 'പ്രവചനം', or: 'ପୂର୍ବାନୁମାନ' }],
    ['Overview', { hi: 'अवलोकन', mr: 'आढावा', te: 'అవలోకనం', ta: 'கண்ணோட்டம்', gu: 'વિહંગાવલોકન', bn: 'সারসংক্ষেপ', pa: 'ਸੰਖੇਪ', kn: 'ಅವಲೋಕನ', ml: 'അವലോകനം', or: 'ସମୀକ୍ଷା' }],
    ['Active', { hi: 'सक्रिय', mr: 'सक्रिय', te: 'క్రియాశీలం', ta: 'செயலில்', gu: 'સક્રિય', bn: 'সক্রিয়', pa: 'ਸਰਗਰਮ', kn: 'ਸಕ್ರಿಯ', ml: 'സജീവം', or: 'ସକ୍ରିୟ' }],
    ['Yield', { hi: 'उपज', mr: 'उत्पादन', te: 'దిగుబడి', ta: 'மகசூல்', gu: 'ઉત્પાદન', bn: 'ফলন', pa: 'ਝਾੜ', kn: 'ಇಳುವರಿ', ml: 'വിളവ്', or: 'ଅମଳ' }]
  ];

  for (const [enToken, trDict] of tokenMap) {
    if (translatedSentence.includes(enToken)) {
      const rep = trDict[lang] || trDict['hi'];
      if (rep) {
        translatedSentence = translatedSentence.replaceAll(enToken, rep);
        hasReplaced = true;
      }
    }
  }

  // 5. Word-by-word token fallback
  if (!hasReplaced && translatedSentence.length > 0) {
    const words = translatedSentence.split(/(\s+|[,.:;()!?/+-])/);
    let changed = false;
    const translatedWords = words.map(w => {
      const wTrim = w.trim();
      if (!wTrim) return w;
      if (VERNACULAR_DICTIONARY[wTrim]) {
        changed = true;
        return VERNACULAR_DICTIONARY[wTrim][lang] || VERNACULAR_DICTIONARY[wTrim]['hi'] || w;
      }
      return w;
    });
    if (changed) {
      return translatedWords.join('');
    }
  }

  if (hasReplaced) return translatedSentence;

  return englishText;
}

export default I18N_DATA;
