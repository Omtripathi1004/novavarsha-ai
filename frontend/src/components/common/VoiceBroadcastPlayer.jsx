import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useApp } from './AppContext';
import { getTopCropsForLocation } from '../../data/cropsCatalog';
import { 
  Volume2, VolumeX, Play, Pause, Square, RotateCcw, 
  Radio, Sparkles, CheckCircle2, ChevronDown, ChevronUp, 
  CloudRain, Sprout, Wind, Droplets, Info 
} from 'lucide-react';

export default function VoiceBroadcastPlayer() {
  const { activeLocation, activeHub, telemetry, lang, t, tr } = useApp();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const utteranceRef = useRef(null);
  const progressTimerRef = useRef(null);

  // Synchronize dynamic top crops identically with Homepage top crops
  const top3Crops = useMemo(() => {
    return getTopCropsForLocation(activeLocation.state, activeHub.state);
  }, [activeLocation.state, activeHub.state]);

  const crop1 = top3Crops[0] || { name: 'Paddy (Rice)', variety: 'Swarna (MTU-7029)', suitability: 96, durationDays: 142, mspPerQuintal: '₹2,300' };
  const crop2 = top3Crops[1] || { name: 'Paddy (Rice - Drought Hardy)', variety: 'Sahbhagi Dhan', suitability: 92, durationDays: 105, mspPerQuintal: '₹2,320' };
  const crop3 = top3Crops[2] || { name: 'Maize', variety: 'Dekalb DKC-9108', suitability: 90, durationDays: 95, mspPerQuintal: '₹2,225' };

  // Map app lang code to SpeechSynthesis BCP-47 language tag
  const getSpeechLangCode = (appLang) => {
    switch (appLang) {
      case 'hi': return 'hi-IN';
      case 'pa': return 'pa-IN';
      case 'bn': return 'bn-IN';
      case 'mr': return 'mr-IN';
      case 'te': return 'te-IN';
      case 'ta': return 'ta-IN';
      case 'gu': return 'gu-IN';
      case 'kn': return 'kn-IN';
      case 'ml': return 'ml-IN';
      case 'or': return 'or-IN';
      default: return 'en-IN';
    }
  };

  const districtName = activeLocation.district || 'लखनऊ';
  const stateName = activeLocation.state || 'उत्तर प्रदेश';

  // Dynamic Spoken Scripts for all 11 Languages using live location & synchronized crops
  const scriptTemplates = {
    hi: `नमस्ते किसान भाइयों और बहनों। नोवावर्षा एआई राष्ट्रीय कृषि-मौसम ध्वनि बुलेटिन में आपका स्वागत है। 
स्थान: ${districtName}, ${stateName}। 
वर्तमान मौसम पूर्वानुमान: आज का तापमान ${telemetry.tempC || 29} डिग्री सेल्सियस और सापेक्ष आर्द्रता ${telemetry.humidity || 78} प्रतिशत है। 
वर्षा पूर्वानुमान: आज ${telemetry.rainMmToday || 14} मिलीमीटर और आगामी 7 दिनों में कुल ${telemetry.rainMm7d || 128} मिलीमीटर वर्षा का अनुमान है। वर्षा विसंगति सामान्य से ${telemetry.rainAnomaly || '+16%'} है। 
मृदा स्थिति: मिट्टी की जड़ क्षेत्र में नमी ${telemetry.soilMoisture || 72} प्रतिशत है, जो फसल बुवाई के लिए पूर्णतः पर्याप्त है। 
मानसून चरण: मानसून सक्रिय एवं अनुकूल है। यह वास्तविक मानसूनी वर्षा है, कोई असत्य शुरुआत नहीं है। 
आपके स्थान के लिए शीर्ष 3 सर्वोत्तम फसलें: 
प्रथम फसल: ${tr(crop1.name)}, किस्म ${crop1.variety}। उपयुक्तता स्कोर ${crop1.suitability} प्रतिशत। अवधि ${crop1.durationDays} दिन। 
द्वितीय फसल: ${tr(crop2.name)}, किस्म ${crop2.variety}। उपयुक्तता स्कोर ${crop2.suitability} प्रतिशत। 
तृतीय वैकल्पिक फसल: ${tr(crop3.name)}, किस्म ${crop3.variety}। सरकारी न्यूनतम समर्थन मूल्य ${crop3.mspPerQuintal}। 
कृषि परामर्श: आगामी 48 घंटों में खेत में जल निकासी नाली तैयार रखें एवं बुवाई कार्य पूर्ण करें। धन्यवाद। जय हिंद, जय किसान।`,

    mr: `नमस्कार शेतकरी बांधवांनो. नोवावर्षा एआय राष्ट्रीय कृषी-हवामान ध्वनी बुलेटीनमध्ये आपले स्वागत आहे. 
ठिकाण: ${districtName}, ${stateName}. 
हवामान अंदाज: आजचे तापमान ${telemetry.tempC || 29} अंश सेल्सिअस आणि हवेतील आर्द्रता ${telemetry.humidity || 78} टक्के आहे. 
पावसाचा अंदाज: आज ${telemetry.rainMmToday || 14} मिमी आणि पुढील ७ दिवसांत एकूण ${telemetry.rainMm7d || 128} मिमी पावसाची शक्यता आहे. 
मातीतील ओलावा: मुळांच्या कक्षेत ${telemetry.soilMoisture || 72} टक्के ओलावा उपलब्ध असून तो पेरणीसाठी अत्यंत पोषक आहे. 
मान्सून स्थिती: मान्सून पूर्णपणे सक्रिय आहे. 
आपल्या क्षेत्रासाठी अव्वल ३ शिफारस केलेली पिके: 
पहिले पीक: ${tr(crop1.name)}, वाण ${crop1.variety}. पात्रता ${crop1.suitability} टक्के, कालावधी ${crop1.durationDays} दिवस. 
दुसरे पीक: ${tr(crop2.name)}, वाण ${crop2.variety}. पात्रता ${crop2.suitability} टक्के. 
तिसरे पीक: ${tr(crop3.name)}, वाण ${crop3.variety}. हमीभाव ${crop3.mspPerQuintal}. 
सल्ला: शेतात पाण्याचा निचरा होण्यासाठी चर तयार ठेवा. धन्यवाद.`,

    pa: `ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕਿਸਾਨ ਵੀਰੋ। ਨੋਵਾਵਰਸ਼ਾ ਏਆਈ ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ-ਮੌਸਮ ਵੌਇਸ ਬੁਲੇਟਿਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। 
ਸਥਾਨ: ${districtName}, ${stateName}। 
ਮੌਸਮ ਭਵਿੱਖਬਾਣੀ: ਅੱਜ ਦਾ ਤਾਪਮਾਨ ${telemetry.tempC || 29} ਡਿਗਰੀ ਸੈਲਸੀਅਸ ਅਤੇ ਨਮੀ ${telemetry.humidity || 78} ਫ਼ੀਸਦੀ ਹੈ। 
ਮੀਂਹ ਦਾ ਅਨੁਮਾਨ: ਅੱਜ ${telemetry.rainMmToday || 14} ਮਿਲੀਮੀਟਰ ਅਤੇ ਅਗਲੇ 7 ਦਿਨਾਂ ਵਿੱਚ ਕੁੱਲ ${telemetry.rainMm7d || 128} ਮਿਲੀਮੀਟਰ ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ਹੈ। 
ਮਿੱਟੀ ਦੀ ਨਮੀ: ਮਿੱਟੀ ਵਿੱਚ ${telemetry.soilMoisture || 72} ਫ਼ੀਸਦੀ ਨਮੀ ਮੌਜੂਦ ਹੈ, ਜੋ ਬਿਜਾਈ ਲਈ ਬਹੁਤ ਢੁਕਵੀਂ ਹੈ। 
ਮਾਨਸੂਨ ਸਥਿਤੀ: ਮਾਨਸੂਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਰਗਰਮ ਹੈ। 
ਤੁਹਾਡੇ ਲਈ ਪ੍ਰਮੁੱਖ 3 ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲਾਂ: 
ਪਹਿਲੀ ਫਸਲ: ${tr(crop1.name)} (${crop1.variety}), ਢੁਕਵਾਂਪਣ ${crop1.suitability} ਫ਼ੀਸਦੀ, ਮਿਆਦ ${crop1.durationDays} ਦਿਨ। 
ਦੂਜੀ ਫਸਲ: ${tr(crop2.name)} (${crop2.variety}), ਢੁਕਵਾਂਪਣ ${crop2.suitability} ਫ਼ੀਸਦੀ। 
ਤੀਜੀ ਫਸਲ: ${tr(crop3.name)} (${crop3.variety}), ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ ${crop3.mspPerQuintal}। 
ਸਲਾਹ: ਨਿਕਾਸੀ ਨਾਲੀਆਂ ਸਾਫ਼ ਰੱਖੋ। ਧੰਨਵਾਦ।`,

    bn: `নমস্কার কৃষক ভাই ও বোনেরা। নোভাবার্ষা এআই জাতীয় কৃষি-আবহাওয়া ভয়েস বুলেটিনে আপনাকে স্বাগতম। 
স্থান: ${districtName}, ${stateName}। 
আবহাওয়ার পূর্বাভাস: আজকের তাপমাত্রা ${telemetry.tempC || 29} ডিগ্রি সেলসিয়াস এবং আর্দ্রতা ${telemetry.humidity || 78} শতাংশ। 
বৃষ্টিপাতের পূর্বাভাস: আগামী ৭ দিনে মোট ${telemetry.rainMm7d || 128} মিলিমিটার বৃষ্টিপাতের সম্ভাবনা রয়েছে। 
মাটির আর্দ্রতা: শিকড় অঞ্চলে আর্দ্রতা ${telemetry.soilMoisture || 72} শতাংশ। 
আপনার জন্য সেরা ৩টি প্রস্তাবিত ফসল: 
১ম ফসল: ${tr(crop1.name)} (${crop1.variety}), উপযুক্ততা ${crop1.suitability} শতাংশ, মেয়াদ ${crop1.durationDays} দিন। 
২য় ফসল: ${tr(crop2.name)} (${crop2.variety}), উপযুক্ততা ${crop2.suitability} শতাংশ। 
৩য় ফসল: ${tr(crop3.name)} (${crop3.variety}), সহায়ক মূল্য ${crop3.mspPerQuintal}। 
পরামর্শ: জমিতে নিষ্কাশন নালা প্রস্তুত রাখুন। ধন্যবাদ।`,

    te: `నమస్కారం రైతు సోదరులారా. నోవావర్ష ఏఐ జాతీయ వ్యవసాయ-వాతావరణ శ్రవ్య బులెటిన్‌కు స్వాగతం. 
ప్రాంతం: ${districtName}, ${stateName}. 
వాతావరణ సూచన: నేటి ఉష్ణోగ్రత ${telemetry.tempC || 29} డిగ్రీల సెల్సియస్, తేమ ${telemetry.humidity || 78} శాతం. 
వర్షపాత సూచన: రాబోయే 7 రోజుల్లో మొత్తం ${telemetry.rainMm7d || 128} మి.మీ వర్షం కురిసే అవకాశం ఉంది. 
నేల తేమ: నేలలో ${telemetry.soilMoisture || 72} శాతం తేమ అందుబాటులో ఉంది. 
మీ ప్రాంతానికి అగ్రశ్రేణి 3 ఉత్తమ పంటలు: 
మొదటి పంట: ${tr(crop1.name)} (${crop1.variety}), అనుకూలత ${crop1.suitability} శాతం, కాలపరిమితి ${crop1.durationDays} రోజులు. 
రెండవ పంట: ${tr(crop2.name)} (${crop2.variety}), అనుకూలత ${crop2.suitability} శాతం. 
మూడవ పంట: ${tr(crop3.name)} (${crop3.variety}), కనీస మద్దతు ధర ${crop3.mspPerQuintal}. 
సలహా: పొలంలో నీటి పారుదల కాలువలు సిద్ధం చేసుకోండి. ధన్యవాదాలు.`,

    ta: `வணக்கம் விவசாய தோழர்களே. நோவாவர்ஷா AI தேசிய வேளாண்-வானிலை குரல் அறிவிப்புக்கு வரவேற்கிறோம். 
இடம்: ${districtName}, ${stateName}. 
வானிலை முன்னறிவிப்பு: இன்றைய வெப்பநிலை ${telemetry.tempC || 29}°C, ஈரப்பதம் ${telemetry.humidity || 78}%. 
மழை முன்னறிவிப்பு: அடுத்த 7 நாட்களில் மொத்தம் ${telemetry.rainMm7d || 128} மிமீ மழை பெய்ய வாய்ப்புள்ளது. 
உங்கள் பகுதிக்கான சிறந்த 3 பயிர்கள்: 
1. ${tr(crop1.name)} (${crop1.variety}), பொருத்தம் ${crop1.suitability}%, காலம் ${crop1.durationDays} நாட்கள். 
2. ${tr(crop2.name)} (${crop2.variety}), பொருத்தம் ${crop2.suitability}%. 
3. ${tr(crop3.name)} (${crop3.variety}), குறைந்தபட்ச ஆதரவு விலை ${crop3.mspPerQuintal}. 
ஆலோசனை: வடிகால் வசதியை உறுதி செய்யவும். நன்றி.`,

    gu: `નમસ્તે ખેડૂત મિત્રો. નોવાવર્ષા AI રાષ્ટ્રીય કૃષિ-હવામાન ઓડિયો બુલેટિનમાં આપનું સ્વાગત છે. 
સ્થળ: ${districtName}, ${stateName}. 
હવામાન આગાહી: આજનું તાપમાન ${telemetry.tempC || 29} ડિગ્રી સેલ્સિયસ અને ભેજ ${telemetry.humidity || 78} ટકા છે. 
વરસાદની આગાહી: આગામી ૭ દિવસમાં કુલ ${telemetry.rainMm7d || 128} મીમી વરસાદની શક્યતા છે. 
તમારા વિસ્તાર માટે શ્રેષ્ઠ ૩ પાક: 
૧. ${tr(crop1.name)} (${crop1.variety}), અનુકૂળતા ${crop1.suitability} ટકા, સમયગાળો ${crop1.durationDays} દિવસ. 
૨. ${tr(crop2.name)} (${crop2.variety}), અનુકૂળતા ${crop2.suitability} ટકા. 
૩. ${tr(crop3.name)} (${crop3.variety}), ટેકાનો ભાવ ${crop3.mspPerQuintal}. 
સલાહ: પાણી નિકાલની યોગ્ય વ્યવસ્થા રાખો. આભાર.`,

    kn: `ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ. ನೋವಾವರ್ಷ AI ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ-ಹವಾಮಾನ ಧ್ವನಿ ಬುಲೆಟಿನ್‌ಗೆ ಸುಸ್ವಾಗತ. 
ಸ್ಥಳ: ${districtName}, ${stateName}. 
ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ: ಇಂದಿನ ತಾಪಮಾನ ${telemetry.tempC || 29}°C, ಆರ್ದ್ರತೆ ${telemetry.humidity || 78}%. 
ಮಳೆ ಮುನ್ಸೂಚನೆ: ಮುಂದಿನ 7 ದಿನಗಳಲ್ಲಿ ಒಟ್ಟು ${telemetry.rainMm7d || 128} ಮಿಮೀ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ. 
ನಿಮ್ಮ ಪ್ರದೇಶಕ್ಕೆ ಅಗ್ರ 3 ಬೆಳೆಗಳು: 
1. ${tr(crop1.name)} (${crop1.variety}), ಹೊಂದಾಣಿಕೆ ${crop1.suitability}%, ಅವಧಿ ${crop1.durationDays} ದಿನಗಳು. 
2. ${tr(crop2.name)} (${crop2.variety}), ಹೊಂದಾಣಿಕೆ ${crop2.suitability}%. 
3. ${tr(crop3.name)} (${crop3.variety}), ಬೆಂಬಲ ಬೆಲೆ ${crop3.mspPerQuintal}. 
ಸಲಹೆ: ಚರಂಡಿ ವ್ಯವಸ್ಥೆಯನ್ನು ಸುಸ್ಥಿತಿಯಲ್ಲಿಡಿ. ಧನ್ಯವಾದಗಳು.`,

    ml: `നമസ്കാരം കർഷക സുഹൃത്തുക്കളെ. നോവാവർഷ AI ദേശീയ കാർഷിക-കാലാവസ്ഥാ വോയ്‌സ് ബുള്ളറ്റിനിലേക്ക് സ്വാಗതം. 
സ്ഥലം: ${districtName}, ${stateName}. 
കാലാവസ്ഥാ പ്രവചനം: ഇന്നത്തെ താപനില ${telemetry.tempC || 29}°C, അന്തരീക്ഷ ഈർപ്പം ${telemetry.humidity || 78}%. 
നിങ്ങൾക്കായി ഏറ്റവും അനുയോജ്യമായ 3 വിളകൾ: 
1. ${tr(crop1.name)} (${crop1.variety}), അനുയോജ്യത ${crop1.suitability}%, കാലാവധി ${crop1.durationDays} ദിവസം. 
2. ${tr(crop2.name)} (${crop2.variety}), അനുയോജ്യത ${crop2.suitability}%. 
3. ${tr(crop3.name)} (${crop3.variety}), താങ്ങുവില ${crop3.mspPerQuintal}. 
നിർദ്ദേശം: നീരൊഴുക്ക് ഉറപ്പാക്കുക. നന്ദി.`,

    or: `ନମସ୍କାର ଚାଷୀ ଭାଇ ଓ ଭଉଣୀମାନେ। ନୋଭାବର୍ଷା AI ଜାତୀୟ କୃଷି-ପାଣିପାଗ ଧ୍ୱନି ବୁଲେଟିନ୍‌କୁ ସ୍ୱାଗତ। 
ସ୍ଥାନ: ${districtName}, ${stateName}। 
ପାଣିପାଗ ପୂର୍ବାନୁମାନ: ଆଜିର ତାପମାତ୍ରା ${telemetry.tempC || 29}°C ଏବଂ ଆର୍ଦ୍ରତା ${telemetry.humidity || 78}%। 
ଆପଣଙ୍କ ଅଞ୍ଚଳ ପାଇଁ ଶ୍ରେଷ୍ଠ ୩ଟି ଫସଲ: 
୧. ${tr(crop1.name)} (${crop1.variety}), ଉପଯୁକ୍ତତା ${crop1.suitability} ପ୍ରତିଶତ, ଅବଧି ${crop1.durationDays} ଦିନ। 
୨. ${tr(crop2.name)} (${crop2.variety}), ଉପଯୁକ୍ତତା ${crop2.suitability} ପ୍ରତିଶତ। 
୩. ${tr(crop3.name)} (${crop3.variety}), ସହାୟକ ମୂଲ୍ୟ ${crop3.mspPerQuintal}। 
ପରାମର୍ଶ: ଜମିରେ ଜଳ ନିଷ୍କାସନ ନାଳୀ ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ। ଧନ୍ୟବାଦ।`,

    en: `Greetings farmers and agricultural officers. Welcome to the NovaVarsha AI National Agro-Weather Voice Bulletin. 
Location: ${districtName}, ${stateName}. 
Current Weather Outlook: Temperature is ${telemetry.tempC || 29} degrees Celsius with relative humidity at ${telemetry.humidity || 78} percent. 
Precipitation Forecast: Rainfall today is ${telemetry.rainMmToday || 14} millimeters with an accumulated 7-day projection of ${telemetry.rainMm7d || 128} millimeters. Rainfall anomaly is ${telemetry.rainAnomaly || '+16%'} above climatological normal. 
Soil Moisture Status: Root-zone saturation is at ${telemetry.soilMoisture || 72} percent, indicating optimal field capacity for sowing. 
Monsoon Dynamics: Synoptic southwest monsoon is active and favorable. 
Top 3 Recommended Cultivars for your coordinates: 
Rank 1 Best Match: ${crop1.name} variety ${crop1.variety} with ${crop1.suitability} percent suitability and ${crop1.durationDays} days duration. 
Rank 2 Strong Runner-Up: ${crop2.name} variety ${crop2.variety} with ${crop2.suitability} percent suitability. 
Rank 3 Resilience Alternative: ${crop3.name} variety ${crop3.variety}, backed by government Minimum Support Price of ${crop3.mspPerQuintal}. 
Agronomic Directive: Maintain furrow drainage channels in case of heavy downpours and complete nursery transplanting within the next 48 hours. Thank you. NovaVarsha AI — Hyperlocal Climate-to-Crop Intelligence.`
  };

  // Phonetic Punjabi script for Indic TTS fallback when browser/OS lacks native pa-IN Gurmukhi voice
  const punjabiPhoneticScript = `सत श्री अकाल किसान वीरो! नोवावर्षा एआई राष्ट्रीय खेतीबाड़ी-मौसम वॉइस बुलेटिन विच तुहाडा स्वागत है। 
स्थान: ${districtName}, ${stateName}। 
मौसम भविष्यवाणी: आज दा तापमान ${telemetry.tempC || 29} डिग्री सेल्सियस अते नमी ${telemetry.humidity || 78} फीसदी है। 
मींह दा अनुमान: आज ${telemetry.rainMmToday || 14} मिलीमीटर अते अगले 7 दिनां विच कुल ${telemetry.rainMm7d || 128} मिलीमीटर मींह दी संभावना है। 
मिट्टी दी नमी: मिट्टी विच ${telemetry.soilMoisture || 72} फीसदी नमी मौजूद है, जो बिजाई लई बहुत ढुकवीं है। 
मानसून स्थिति: मानसून पूरी तरह सरगरम है। 
तुहाडे लई प्रमुख 3 सब तों वधिया फसलाम: 
पहिला फसल: ${tr(crop1.name)} (${crop1.variety}), ढुकवां पण ${crop1.suitability} फीसदी, मियाद ${crop1.durationDays} दिन। 
दूजा फसल: ${tr(crop2.name)} (${crop2.variety}), ढुकवां पण ${crop2.suitability} फीसदी। 
तीजा फसल: ${tr(crop3.name)} (${crop3.variety}), घट्टो-घट्ट समर्थन मुल्ल ${crop3.mspPerQuintal}। 
सलाह: नकासी नालियां साफ रखो अते बिजाई दा कम पूरा करो। धन्यवाद।`;

  // Romanized Punjabi script for guaranteed authentic spoken Punjabi on English-only Windows/macOS/Linux TTS
  const punjabiRomanizedScript = `Sat Sri Akal kisaan veero! NovaVarsha AI rashtri kheti baadi mausam voice bulletin vich tuhada swagat hai. 
Sthaan: ${districtName}, ${stateName}. 
Mausam bhavikhbaani: Aaj da taapmaan ${telemetry.tempC || 29} degree celsius ate nami ${telemetry.humidity || 78} feesadi hai. 
Meenh da anumaan: Aaj ${telemetry.rainMmToday || 14} millimeter ate agle sat dina vich kul ${telemetry.rainMm7d || 128} millimeter meenh di sambhaavna hai. 
Mitti di nami: Mitti vich ${telemetry.soilMoisture || 72} feesadi nami maujood hai, jo bijaayi layi bahut dhukvi hai. 
Monsoon sthiti: Monsoon poori tarah sargarram hai. 
Tuhade layi pramukh tin sabh toh vadiya fasla: 
Pehli fasal: ${crop1.name}, variety ${crop1.variety}, dhukvaan pan ${crop1.suitability} feesadi, samay ${crop1.durationDays} din. 
Dooji fasal: ${crop2.name}, variety ${crop2.variety}, dhukvaan pan ${crop2.suitability} feesadi. 
Teeji fasal: ${crop3.name}, variety ${crop3.variety}, sarkari samarthan mul ${crop3.mspPerQuintal}. 
Salah: Nakasi naaliya saaf rakho ate bijaayi da kam poora karo. Dhanwaad!`;

  // Helper to transliterate Odia Unicode script to Devanagari phonetics for Hindi/Indic TTS engines
  const odiaToDevanagari = (str) => {
    if (!str) return '';
    return str.replace(/[\u0B00-\u0B7F]/g, (char) => {
      const code = char.charCodeAt(0);
      if (code === 0x0B71) return '\u0935'; // Odia Wa -> Devanagari Va
      if (code === 0x0B5F) return '\u092F'; // Odia Ya with dot -> Devanagari Ya
      if (code === 0x0B5C) return '\u095C'; // Odia Dda with dot -> Devanagari Rra
      if (code === 0x0B5D) return '\u095D'; // Odia Ddha with dot -> Devanagari Rrha
      return String.fromCharCode(code - 0x0200);
    });
  };

  // Phonetic Odia script for Indic TTS fallback when browser/OS lacks native or-IN Odia voice
  const odiaPhoneticScript = `नमस्कार चाषी भाई ओ भउणीमाने। नोभावर्षा एआई जातीय कृषि-पाणीपाग ध्वनि बुलेटिनकु स्वागत। 
स्थान: ${odiaToDevanagari(districtName) || districtName}, ${odiaToDevanagari(stateName) || stateName}। 
पाणीपाग पूर्वानुमाना: आजिर तापमान ${telemetry.tempC || 29} डिग्री सेल्सियस एवं आर्द्रता ${telemetry.humidity || 78} प्रतिशत। 
वर्षा पूर्वानुमाना: आजि ${telemetry.rainMmToday || 14} मिलीमीटर एवं आगामी 7 दिनरे मोट ${telemetry.rainMm7d || 128} मिलीमीटर वर्षा हेबार संभावना अछि। 
माटिर आर्द्रता: माटिरे ${telemetry.soilMoisture || 72} प्रतिशत आर्द्रता उपलब्ध अछि, याहा बुणाई पाईं अनुकूल। 
मानसून स्थिति: मानसून पूर्ण रूपे सक्रिय अछि। 
आपणंक अंचल पाईं शीर्ष 3टी फसल: 
प्रथम फसल: ${odiaToDevanagari(tr(crop1.name)) || crop1.name} (${crop1.variety}), उपयुक्तता ${crop1.suitability} प्रतिशत, अवधि ${crop1.durationDays} दिन। 
द्वितीय फसल: ${odiaToDevanagari(tr(crop2.name)) || crop2.name} (${crop2.variety}), उपयुक्तता ${crop2.suitability} प्रतिशत। 
तृतीय फसल: ${odiaToDevanagari(tr(crop3.name)) || crop3.name} (${crop3.variety}), सहायक मूल्य ${crop3.mspPerQuintal}। 
परामर्श: जमिरे जल निष्कासन नाली प्रस्तुत रखन्तु। धन्यवाद।`;

  // Romanized Odia script for guaranteed authentic spoken Odia on English-only Windows/macOS/Linux TTS
  const odiaRomanizedScript = `Namaskar chasi bhai o bhaunimane! NovaVarsha AI jatiya krushi-panipaga dhwani bulletinku swagata. 
Sthan: ${districtName}, ${stateName}. 
Panipaga purbanumana: Aji taapmatra ${telemetry.tempC || 29} degree celsius ebong aadrata ${telemetry.humidity || 78} pratishat. 
Barsha purbanumana: Aji ${telemetry.rainMmToday || 14} millimeter ebong agami saat dinare mot ${telemetry.rainMm7d || 128} millimeter barsha hebaara sambhabana achhi. 
Matira aadrata: Matire ${telemetry.soilMoisture || 72} pratishat aadrata uplabdha achhi, jaha bunai pain anukula. 
Monsoon sthiti: Monsoon purna rupe sakriya achhi. 
Apananka anchala pain shirsha tinoti fasala: 
Prathama fasala: ${crop1.name}, variety ${crop1.variety}, upayuktata ${crop1.suitability} pratishat, abadhi ${crop1.durationDays} dina. 
Dwitiya fasala: ${crop2.name}, variety ${crop2.variety}, upayuktata ${crop2.suitability} pratishat. 
Trutiya fasala: ${crop3.name}, variety ${crop3.variety}, sahayaka mulya ${crop3.mspPerQuintal}. 
Paramarsha: Jamire jala nishkasana nali prastuta rakhantu. Dhanyabad!`;

  // Pre-load and cache browser voices to prevent empty voices on initial play
  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const updateVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) setAvailableVoices(v);
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const currentScript = scriptTemplates[lang] || scriptTemplates['hi'];

  // Handle SpeechSynthesis Playback with multi-tier regional voice resolution
  const handlePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech Synthesis not supported in this browser.');
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const voices = (availableVoices.length > 0) ? availableVoices : window.speechSynthesis.getVoices();
    let voiceToUse = null;
    let spokenScript = currentScript;
    let targetLangTag = getSpeechLangCode(lang);

    const isNonEnglish = (v) => {
      const l = (v.lang || '').toLowerCase();
      const n = (v.name || '').toLowerCase();
      return !l.startsWith('en') && !n.includes('english');
    };

    if (lang === 'pa') {
      // 1. Search for native Punjabi voice
      const punjabiVoice = voices.find(v => 
        isNonEnglish(v) && (
          v.lang.toLowerCase().startsWith('pa') || 
          v.name.toLowerCase().includes('punjabi') || 
          v.name.toLowerCase().includes('panjabi')
        )
      );

      if (punjabiVoice) {
        voiceToUse = punjabiVoice;
        targetLangTag = punjabiVoice.lang;
        spokenScript = currentScript;
      } else {
        // 2. Fallback to genuine Hindi/Indic voice with Devanagari Punjabi phonetics
        const indicVoice = voices.find(v => 
          isNonEnglish(v) && (
            v.lang.toLowerCase().startsWith('hi') || 
            v.name.toLowerCase().includes('hindi') || 
            v.name.toLowerCase().includes('kalpana') ||
            v.name.toLowerCase().includes('hemant') ||
            v.name.toLowerCase().includes('swara') ||
            v.name.toLowerCase().includes('madhur')
          )
        );

        if (indicVoice) {
          voiceToUse = indicVoice;
          targetLangTag = 'hi-IN';
          spokenScript = punjabiPhoneticScript;
        } else {
          // 3. Fallback for Windows/Edge installations with ONLY English voices:
          // Use Romanized Punjabi script so English TTS actually speaks authentic Punjabi words
          const enVoice = voices.find(v => v.lang.toLowerCase().startsWith('en-in')) || 
                          voices.find(v => v.lang.toLowerCase().startsWith('en')) || 
                          voices[0];
          if (enVoice) voiceToUse = enVoice;
          targetLangTag = enVoice?.lang || 'en-IN';
          spokenScript = punjabiRomanizedScript;
        }
      }
    } else if (lang === 'or') {
      // 1. Search for native Odia voice
      const odiaVoice = voices.find(v => 
        isNonEnglish(v) && (
          v.lang.toLowerCase().startsWith('or') || 
          v.name.toLowerCase().includes('odia') || 
          v.name.toLowerCase().includes('oriya')
        )
      );

      if (odiaVoice) {
        voiceToUse = odiaVoice;
        targetLangTag = odiaVoice.lang;
        spokenScript = currentScript;
      } else {
        // 2. Fallback to genuine Hindi/Indic voice with Devanagari Odia phonetics
        const indicVoice = voices.find(v => 
          isNonEnglish(v) && (
            v.lang.toLowerCase().startsWith('hi') || 
            v.name.toLowerCase().includes('hindi') || 
            v.name.toLowerCase().includes('kalpana') ||
            v.name.toLowerCase().includes('hemant') ||
            v.name.toLowerCase().includes('swara') ||
            v.name.toLowerCase().includes('madhur')
          )
        );

        if (indicVoice) {
          voiceToUse = indicVoice;
          targetLangTag = 'hi-IN';
          spokenScript = odiaPhoneticScript;
        } else {
          // 3. Fallback for Windows/Edge installations with ONLY English voices:
          // Use Romanized Odia script so English TTS speaks authentic Odia words
          const enVoice = voices.find(v => v.lang.toLowerCase().startsWith('en-in')) || 
                          voices.find(v => v.lang.toLowerCase().startsWith('en')) || 
                          voices[0];
          if (enVoice) voiceToUse = enVoice;
          targetLangTag = enVoice?.lang || 'en-IN';
          spokenScript = odiaRomanizedScript;
        }
      }
    } else {
      // Find matching regional voice for other Indic languages
      if (lang !== 'en') {
        const matchedVoice = voices.find(v => isNonEnglish(v) && v.lang.toLowerCase().startsWith(targetLangTag.slice(0, 2).toLowerCase()));
        if (matchedVoice) {
          voiceToUse = matchedVoice;
        } else {
          const hindiVoice = voices.find(v => isNonEnglish(v) && (v.lang.toLowerCase().startsWith('hi') || v.name.toLowerCase().includes('hindi')));
          if (hindiVoice) {
            voiceToUse = hindiVoice;
            targetLangTag = 'hi-IN';
          }
        }
      } else {
        const enVoice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
        if (enVoice) voiceToUse = enVoice;
      }
    }

    const utterance = new SpeechSynthesisUtterance(spokenScript);
    utterance.lang = targetLangTag;
    utterance.rate = playbackSpeed;
    utterance.pitch = 1.0;
    if (voiceToUse) {
      utterance.voice = voiceToUse;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setAudioProgress(0);

      const estDurationMs = (spokenScript.length * 70) / playbackSpeed;
      const startTime = Date.now();
      progressTimerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, Math.round((elapsed / estDurationMs) * 100));
        setAudioProgress(pct);
        if (pct >= 100) clearInterval(progressTimerRef.current);
      }, 500);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setAudioProgress(100);
      clearInterval(progressTimerRef.current);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      clearInterval(progressTimerRef.current);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
      clearInterval(progressTimerRef.current);
    }
  };

  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setAudioProgress(0);
      clearInterval(progressTimerRef.current);
    }
  };

  // If user changes language while playing, stop
  useEffect(() => {
    if (isPlaying) {
      handleStop();
    }
  }, [lang]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      clearInterval(progressTimerRef.current);
    };
  }, []);

  return (
    <div className="glass-card" style={{
      padding: '1.25rem 1.5rem',
      background: 'linear-gradient(135deg, rgba(14, 22, 38, 0.95) 0%, rgba(5, 8, 17, 0.98) 100%)',
      border: '1.5px solid var(--border-cyan)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65), 0 0 20px rgba(0, 240, 255, 0.15)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Top Banner Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--neon-cyan) 0%, #0088cc 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#050811',
            boxShadow: '0 0 16px rgba(0, 240, 255, 0.45)'
          }}>
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span className="neon-badge neon-badge-cyan" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                <span className="dot"></span>
                {tr('Live Audio Bulletin (Voice Synthesizer)')}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--neon-saffron)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                ● {lang.toUpperCase()} Audio Feed
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#fff', margin: '0.2rem 0 0' }}>
              {tr('National Agro-Weather Voice Bulletin')}
            </h3>
          </div>
        </div>

        {/* Status Indicator & Language Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
            {tr('Default')}: <strong style={{ color: 'var(--neon-cyan)' }}>हिन्दी (Hindi)</strong>
          </span>
          <div style={{
            padding: '0.25rem 0.65rem',
            borderRadius: '999px',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid var(--border-cyan)',
            fontSize: '0.72rem',
            color: 'var(--neon-cyan)',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)'
          }}>
            GPS: {activeLocation.district}
          </div>
        </div>
      </div>

      {/* Spoken Audio Highlights Pill Strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '0.6rem',
        background: 'rgba(5, 8, 17, 0.7)',
        padding: '0.75rem 1rem',
        borderRadius: '12px',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <Wind className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
          <span>{tr('Surface Temperature')}: <strong style={{ color: '#fff' }}>{telemetry.tempC}°C</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <CloudRain className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
          <span>7-{tr('Days')} {tr('Rainfall')}: <strong style={{ color: 'var(--neon-cyan)' }}>{telemetry.rainMm7d} mm</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <Droplets className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>{tr('Soil Moisture')}: <strong style={{ color: 'var(--neon-emerald)' }}>{telemetry.soilMoisture}%</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <Sprout className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>#1 {tr('Crop')}: <strong style={{ color: 'var(--neon-saffron)' }}>{tr(crop1.name)} ({crop1.variety})</strong></span>
        </div>
      </div>

      {/* Audio Player Controls & Animated Waveform */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        background: 'rgba(0, 240, 255, 0.04)',
        padding: '0.75rem 1.1rem',
        borderRadius: '12px',
        border: '1px solid var(--border-cyan)'
      }}>
        
        {/* Play / Pause / Stop Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="btn btn-primary"
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.84rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                background: 'linear-gradient(135deg, var(--neon-cyan) 0%, #0088cc 100%)',
                color: '#050811',
                borderRadius: '10px',
                gap: '0.45rem',
                boxShadow: '0 0 16px rgba(0, 240, 255, 0.4)'
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isPaused ? tr('Resume Audio') : tr('Play Voice Bulletin')}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="btn"
              style={{
                padding: '0.55rem 1.1rem',
                fontSize: '0.84rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                background: 'rgba(255, 119, 34, 0.2)',
                border: '1px solid var(--border-saffron)',
                color: 'var(--neon-saffron)',
                borderRadius: '10px',
                gap: '0.45rem'
              }}
            >
              <Pause className="w-4 h-4" />
              <span>{tr('Pause Audio')}</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              onClick={handleStop}
              className="btn btn-secondary"
              style={{
                padding: '0.55rem 0.9rem',
                fontSize: '0.82rem',
                gap: '0.35rem',
                borderRadius: '10px'
              }}
            >
              <Square className="w-3.5 h-3.5 text-rose-400" />
              <span>{tr('Stop Broadcast')}</span>
            </button>
          )}

          {/* Speed Selector Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: '0.35rem' }}>
            {[0.85, 1.0, 1.2].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                style={{
                  padding: '0.2rem 0.45rem',
                  borderRadius: '6px',
                  border: playbackSpeed === spd ? '1px solid var(--neon-cyan)' : '1px solid var(--border-subtle)',
                  background: playbackSpeed === spd ? 'rgba(0, 240, 255, 0.18)' : 'transparent',
                  color: playbackSpeed === spd ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Animated Radio Audio Visualizer Bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '26px' }}>
          {[12, 22, 16, 26, 14, 20, 24, 18, 10, 15, 25, 17, 22, 12, 18].map((h, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                borderRadius: '999px',
                background: isPlaying 
                  ? 'linear-gradient(180deg, var(--neon-cyan) 0%, var(--neon-emerald) 100%)' 
                  : 'rgba(255, 255, 255, 0.15)',
                height: isPlaying ? `${Math.min(26, Math.max(6, (h * (1 + Math.sin((i + audioProgress) * 0.5)))))}px` : '6px',
                transition: 'height 0.15s ease'
              }}
            />
          ))}
        </div>

        {/* Transcript Toggle Button */}
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '0.4rem 0.75rem',
            color: 'var(--text-secondary)',
            fontSize: '0.74rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            cursor: 'pointer'
          }}
        >
          <span>{tr('Read Spoken Transcript')}</span>
          {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {/* Progress Bar */}
      <div style={{
        height: '4px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '999px',
        marginTop: '0.65rem',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${audioProgress}%`,
          background: 'linear-gradient(90deg, var(--neon-cyan) 0%, var(--neon-saffron) 100%)',
          borderRadius: '999px',
          transition: 'width 0.4s linear'
        }} />
      </div>

      {/* Collapsible Transcript Section */}
      {showTranscript && (
        <div style={{
          marginTop: '0.85rem',
          padding: '1rem',
          background: 'rgba(5, 8, 17, 0.92)',
          borderRadius: '10px',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.84rem',
          lineHeight: 1.65,
          color: '#cbd5e1',
          maxHeight: '180px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem', color: 'var(--neon-cyan)', fontWeight: 700, fontSize: '0.76rem' }}>
            <Info className="w-3.5 h-3.5" />
            <span>{tr('Live Audio Bulletin (Voice Synthesizer)')} — {lang.toUpperCase()}</span>
          </div>
          <p style={{ margin: 0, whiteSpace: 'pre-line' }}>
            {currentScript}
          </p>
        </div>
      )}

    </div>
  );
}
