import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useApp } from '../common/AppContext';
import { 
  Sparkles, Send, Bot, User, Mic, Volume2, 
  ExternalLink, FileText, ChevronRight, X, RotateCcw 
} from 'lucide-react';

const MULTILINGUAL_CHAT_KNOWLEDGE = {
  greetings: {
    en: 'Namaste! I am NovaVarsha AI, your context-aware agricultural decision assistant grounded in ICAR, IMD, and Ministry of Agriculture publications. How can I assist your farm today?',
    hi: 'नमस्ते! मैं नोवावर्षा एआई कृषि निर्णय सहायक हूँ, जो आईसीएआर (ICAR), आईएमडी और कृषि मंत्रालय के प्रकाशनों पर आधारित है। आज मैं आपकी फसल के लिए क्या सहायता कर सकता हूँ?',
    mr: 'नमस्ते! मी नोव्हावर्षा एआय कृषी निर्णय सहाय्यक आहे, जो ICAR, IMD आणि कृषी मंत्रालयाच्या मार्गदर्शक तत्त्वांवर आधारित आहे. आज मी आपल्या शेतासाठी काय मदत करू शकतो?',
    pa: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ! ਮੈਂ ਨੋਵਾਵਰਸ਼ਾ ਏਆਈ ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ ਹਾਂ, ਜੋ ਆਈਸੀਏਆਰ (ICAR) ਅਤੇ ਮੌਸਮ ਵਿਭਾਗ ਦੇ ਨਿਯਮਾਂ ਤੇ ਆਧਾਰਿਤ ਹੈ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    bn: 'নমস্কার! আমি নোভাবার্ষা এআই কৃষি সিদ্ধান্ত সহায়ক, যা ICAR এবং আবহাওয়া দপ্তরের তথ্যে চালিত। আজ আপনার ফসলের জন্য আমি কীভাবে সাহায্য করতে পারি?',
    te: 'నమస్కారం! నేను నోవావర్ష ఏఐ వ్యవసాయ నిర్ణయ సహాయకుడిని, ICAR మరియు వాతావరణ శాఖ మార్గదర్శకాలపై ఆధారపడి ఉన్నాను. ఈరోజు మీ పంటకు నేను ఏ విధంగా సహాయపడగలను?',
    ta: 'வணக்கம்! நான் நோவாவர்ஷா AI வேளாண்மை முடிவு உதவியாளர், ICAR மற்றும் வானிலை துறை வழிகாட்டுதல்களின்படி செயல்படுகிறேன். இன்று உங்கள் பயிருக்கு நான் எவ்வாறு உதவ முடியும்?',
    gu: 'નમસ્તે! હું નોવાવર્ષા એઆઈ કૃષિ સહાયક છું, જે ICAR અને હવામાન વિભાગના નિયમો પર આધારિત છે. આજે હું આપના ખેતર માટે શું સહાય કરી શકું?',
    kn: 'ನಮಸ್ಕಾರ! ನಾನು ನೋವಾವರ್ಷಾ ಎಐ ಕೃಷಿ ನಿರ್ಧಾರ ಸಹಾಯಕ. ಇಂದು ನಿಮ್ಮ ಕೃಷಿಗೆ ನಾನು ಹೇಗೆ ನೆರವಾಗಲಿ?',
    ml: 'നമസ്കാരം! ഞാൻ നോവാവർഷ എഐ കാർഷിക സഹായിയാണ്. ഇന്ന് നിങ്ങളുടെ കൃഷിക്ക് ഞാൻ എങ്ങനെ സഹായിക്കണം?',
    or: 'ନମସ୍କାର! ମୁଁ ନୋଭାବର୍ଷା ଏଆଇ କୃଷି ସହାୟକ, ଯାହା ICAR ଏବଂ ପାଣିପାଗ ବିଭାଗ ନିର୍ଦ୍ଦେଶାବଳୀ ଉପରେ ଆଧାରିତ। ଆଜି ଆପଣଙ୍କ ଫସଲ ପାଇଁ କଣ ସାହାଯ୍ୟ କରିପାରିବି?'
  },
  defaultActions: {
    en: ['What should I do if a 10-day dry spell hits?', 'Recommend top paddy cultivar', 'Explain PMFBY claim window'],
    hi: ['यदि 10 दिन का सूखा दौर आए तो क्या करें?', 'सर्वश्रेष्ठ धान की किस्म की सिफारिश करें', 'पीएमएफबीवाई (PMFBY) दावा समयसीमा समझाएं'],
    mr: ['१० दिवसांचा कोरडा काळ आल्यास काय करावे?', 'सर्वोत्तम भात वाणाची शिफारस करा', 'PMFBY पीक विमा दावा मुदत समजावून सांगा'],
    pa: ['ਜੇਕਰ 10 ਦਿਨਾਂ ਦਾ ਸੁੱਕਾ ਦੌਰ ਆਵੇ ਤਾਂ ਕੀ ਕਰੀਏ?', 'ਸਭ ਤੋਂ ਵਧੀਆ ਝੋਨੇ ਦੀ ਕਿਸਮ ਦੱਸੋ', 'PMFBY ਬੀਮਾ ਦਾਅਵਾ ਵਿਧੀ ਸਮਝਾਓ'],
    bn: ['১০ দিনের অনাবৃষ্টি হলে কী করণীয়?', 'সেরা ধান জাতের সুপারিশ করুন', 'PMFBY ফসল বীমা দাবি সময়সীমা ব্যাখ্যা করুন'],
    te: ['10 రోజుల పొడి విరామం వస్తే ఏమి చేయాలి?', 'అత్యుత్తమ వరి వంగడాన్ని సిఫార్సు చేయండి', 'PMFBY బీమా క్లెయిమ్ గడువును వివరించండి'],
    ta: ['10 நாள் வறட்சி ஏற்பட்டால் என்ன செய்ய வேண்டும்?', 'சிறந்த நெல் ரகத்தை பரிந்துரைக்கவும்', 'PMFBY பயிர் காப்பீட்டு கோரிக்கை காலக்கெடுவை விளக்குங்கள்'],
    gu: ['૧૦ દિવસનો સૂકો તબક્કો આવે તો શું કરવું?', 'શ્રેષ્ઠ ડાંગર જાતની ભલામણ કરો', 'PMFBY પાક વીમા દાવાની સમયમર્યાદા સમજાવો'],
    kn: ['10 ದಿನಗಳ ಒಣ ಹವೆ ಬಂದರೆ ಏನು ಮಾಡಬೇಕು?', 'ಉತ್ತಮ ಭತ್ತದ ತಳಿಯನ್ನು ಶಿಫಾರಸು ಮಾಡಿ', 'PMFBY ಬೆಳೆ ವಿಮೆ ಹಕ್ಕು ವಿಧಾನ ವಿವರಿಸಿ'],
    ml: ['10 ദിവസത്തെ വരൾച്ച വന്നാൽ എന്ത് ചെയ്യണം?', 'മികച്ച നെൽവിത്ത് ശുപാർശ ചെയ്യുക', 'PMFBY വിള ഇൻഷുറൻസ് ക്ലെയിം സമയം വിശദീകരിക്കുക'],
    or: ['୧୦ ଦିନିଆ ଶୁଷ୍କତା ଆସିଲେ କଣ କରିବା ଉଚିତ୍?', 'ସର୍ବୋତ୍ତମ ଧାନ କିସମ ପରାମର୍ଶ ଦିଅନ୍ତୁ', 'PMFBY ଫସଲ ବୀମା ଦାବି ଅବଧି ବୁଝାନ୍ତୁ']
  },
  droughtResp: {
    en: 'According to CRIDA Contingency Plans (DOC-CRIDA-02 §3.1): If a dry spell exceeds 8–10 days during vegetative growth, implement immediate dust mulching via shallow inter-culture. Apply 1% potassium nitrate (KNO3) foliar spray to reduce canopy dehydration, and switch to deficit micro-irrigation from farm ponds.',
    hi: 'क्रीडा (CRIDA) वर्षा आधारित आकस्मिक योजना (DOC-CRIDA-02 §3.1) के अनुसार: यदि वानस्पतिक वृद्धि के दौरान सूखा दौर 8-10 दिनों से अधिक हो जाता है, तो उथली गुड़ाई द्वारा तुरंत धूल मल्चिंग करें। पत्ती निर्जलीकरण कम करने के लिए 1% पोटेशियम नाइट्रेट (KNO3) का पर्णीय छिड़काव करें और खेत तालाब से जीवन रक्षक सूक्ष्म सिंचाई शुरू करें।',
    mr: 'क्रीडा (CRIDA) आपत्कालीन योजनेनुसार (DOC-CRIDA-02 §3.1): वाढीच्या टप्प्यात कोरडा काळ ८-१० दिवसांपेक्षा जास्त झाल्यास त्वरित उथळ डवरणी करून धूळ मल्चिंग करा. पानांमधील पाण्याचा ऱ्हास रोखण्यासाठी १% पोटॅशियम नायट्रेट (KNO3) फवारणी करा आणि शेततळ्यातून सूक्ष्म सिंचन सुरू करा.',
    pa: 'ਕ੍ਰੀਡਾ (CRIDA) ਆਫ਼ਤ ਪ੍ਰਬੰਧਨ ਨਿਯਮਾਂ ਅਨੁਸਾਰ: ਜੇਕਰ ਬਨਸਪਤੀ ਵਾਧੇ ਦੌਰਾਨ ਸੁੱਕਾ ਦੌਰ 8-10 ਦਿਨਾਂ ਤੋਂ ਵੱਧ ਜਾਵੇ, ਤਾਂ ਤੁਰੰਤ ਗੋਡੀ ਕਰਕੇ ਧੂੜ ਮਲਚਿੰਗ ਕਰੋ। ਪੱਤਿਆਂ ਵਿੱਚ ਪਾਣੀ ਦੀ ਕਮੀ ਰੋਕਣ ਲਈ 1% ਪੋਟਾਸ਼ੀਅਮ ਨਾਈਟ੍ਰੇਟ (KNO3) ਦਾ ਛਿੜਕਾਅ ਕਰੋ ਅਤੇ ਖੇਤ ਤਾਲਾਬ ਤੋਂ ਤੁਪਕਾ ਸਿੰਚਾਈ ਕਰੋ।',
    bn: 'ক্রিডা (CRIDA) খরা মোকাবিলার নির্দেশিকা অনুযায়ী: উদ্ভিজ্জ বৃদ্ধির সময় অনাবৃষ্টি ৮-১০ দিনের বেশি হলে তাৎক্ষণিক অগভীর নিড়ানি দিয়ে ধুলো মালচিং করুন। পাতার জল হ্রাস কমাতে ১% পটাশিয়াম নাইট্রেট (KNO3) স্প্রে করুন এবং খামার পুকুর থেকে জরুরি সেচ দিন।',
    te: 'క్రిడా (CRIDA) వర్షాధారిత ప్రణాళిక ప్రకారం: పెరుగుదల దశలో పొడి విరామం 8-10 రోజులు దాటితే, వెంటనే తేలికపాటి అంతరకృషి ద్వారా దుమ్ము మల్చింగ్ చేయండి. 1% పొటాషియం నైట్రేట్ (KNO3) పిచికారీ చేయండి మరియు పంటకుంటల నుండి బిందు సేద్యం అందించండి.',
    ta: 'கிரிடா (CRIDA) அவசரகால திட்டத்தின்படி: பயிர் வளர்ச்சி பருவத்தில் வறட்சி 8-10 நாட்களுக்கு மேல் நீடித்தால், மேலோட்டமான உழவு மூலம் தூள் தழைக்கூளம் அமைக்கவும். 1% பொட்டாசியம் நைட்ரேட் (KNO3) தெளித்து இலை நீர் இழப்பைத் தடுக்கவும்.',
    gu: 'ક્રીડા (CRIDA) આપત્તિ યોજના મુજબ: વાનસ્પતિક વૃદ્ધિ દરમિયાન ૮-૧૦ દિવસથી વધુ સૂકો તબક્કો આવે તો તાત્કાલિક છીછરી ખેડ કરીને ડસ્ટ મલ્ચિંગ કરો. ૧% પોટેશિયમ નાઈટ્રેટ (KNO3) છંટકાવ કરો અને ખેત તલાવડીમાંથી પૂરક સૂક્ષ્મ પિયત આપો.',
    kn: 'ಕ್ರಿಡಾ (CRIDA) ಬರ ನಿರ್ವಹಣಾ ಮಾರ್ಗಸೂಚಿಯಂತೆ: ಬೆಳವಣಿಗೆಯ ಹಂತದಲ್ಲಿ ಒಣ ಹವೆ 8-10 ದಿನ ಮೀರಿದರೆ, ತಕ್ಷಣ ಲಘು ಉಳುಮೆ ಮೂಲಕ ಧೂಳು ಮಲ್ಚಿಂಗ್ ಮಾಡಿ. 1% ಪೊಟ್ಯಾಸಿಯಮ್ ನೈಟ್ರೇಟ್ (KNO3) ಸಿಂಪಡಿಸಿ ಮತ್ತು ಕೃಷಿ ಹೊಂಡದಿಂದ ತುರ್ತು ಹನಿ ನೀರಾವರಿ ನೀಡಿ.',
    ml: 'ക്രിഡ (CRIDA) മാർഗ്ഗനിർദ്ദേശ പ്രകാരം: വളർച്ചാ ഘട്ടത്തിൽ 8-10 ദിവസത്തിലധികം മഴക്കുറവുണ്ടായാൽ ഉടൻ ചെറു ഉഴവിലൂടെ ഡസ്റ്റ് മൾച്ചിംഗ് നടത്തുക. ഇലകളിലെ ജലനഷ്ടം തടയാൻ 1% പൊട്ടാസ്യം നൈട്രേറ്റ് (KNO3) തളിക്കുക, ഫാം പോണ്ടിൽ നിന്ന് സൂക്ഷ്മ ജലസേചനം നൽകുക.',
    or: 'କ୍ରିଡା (CRIDA) ଜରୁରୀକାଳୀନ ଯୋଜନା ଅନୁଯାୟୀ: ଫସଲ ବୃଦ୍ଧି ସମୟରେ ୮-୧୦ ଦିନରୁ ଅଧିକ ଶୁଷ୍କତା ଦେଖାଦେଲେ ତୁରନ୍ତ ଉପର କୋଡ଼ା ଦ୍ୱାରା ଧୂଳି ମଲଚିଂ କରନ୍ତୁ। ୧% ପୋଟାସିୟମ୍ ନାଇଟ୍ରେଟ୍ (KNO3) ସ୍ପ୍ରେ କରନ୍ତୁ ଏବଂ ଫାର୍ମ ପୋଖରୀରୁ ଜୀବନ ରକ୍ଷାକାରୀ ଜଳସେଚନ ଦିଅନ୍ତୁ।'
  },
  pmfbyResp: {
    en: 'Under Pradhan Mantri Fasal Bima Yojana (DOC-GOV-05): Kharif crop premium is uniformly 2%. For localized calamities (inundation, hail), you MUST notify the local Agriculture Officer or the Crop Insurance App within 72 hours of the weather event to trigger immediate on-field assessment.',
    hi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY DOC-GOV-05) के तहत: खरीफ फसल प्रीमियम मात्र 2% है। स्थानीय आपदाओं (जलभराव, ओलावृष्टि) के लिए, मौके पर तत्काल सर्वेक्षण के लिए घटना के 72 घंटों के भीतर कृषि अधिकारी या फसल बीमा ऐप पर सूचित करना अनिवार्य है।',
    mr: 'प्रधानमंत्री पीक विमा योजनेअंतर्गत (PMFBY DOC-GOV-05): खरीप पिकांसाठी हप्ता दर फक्त २% आहे. स्थानिक नैसर्गिक आपत्तींच्या (पाणी साचणे, गारपीट) नुकसानीसाठी ७२ तासांच्या आत कृषी अधिकारी किंवा पीक विमा ॲपवर नोंदणी करणे बंधनकारक आहे.',
    pa: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ (PMFBY) ਅਧੀਨ: ਸਾਉਣੀ ਦੀਆਂ ਫਸਲਾਂ ਦਾ ਪ੍ਰੀਮੀਅਮ ਸਿਰਫ਼ 2% ਹੈ। ਸਥਾਨਕ ਨੁਕਸਾਨ (ਪਾਣੀ ਭਰਨਾ, ਗੜੇਮਾਰੀ) ਦੀ ਸੂਰਤ ਵਿੱਚ 72 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਖੇਤੀਬਾੜੀ ਅਧਿਕਾਰੀ ਜਾਂ ਫਸਲ ਬੀਮਾ ਐਪ ਤੇ ਸੂਚਨਾ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
    bn: 'প্রধানমন্ত্রী ফসল বিমা যোজনা (PMFBY) অধীনে: খরিফ ফসলের প্রিমিয়াম মাত্র ২%। স্থানীয় দুর্যোগের (জলাবদ্ধতা, শিলাবৃষ্টি) জন্য ৭২ ঘণ্টার মধ্যে কৃষি কর্মকর্তা বা ক্রপ ইন্স্যুরেন্স অ্যাপে আবেদন করা বাধ্যতামূলক।',
    te: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన (PMFBY) ప్రకారం: ఖరీఫ్ పంటల ప్రీమియం కేవలం 2%. స్థానిక విపత్తుల (ముంపు, వడగళ్ళు) నష్టం జరిగితే 72 గంటల్లోపు వ్యవసాయ అధికారికి లేదా క్రాప్ ఇన్సూరెన్స్ యాప్‌లో ఫిర్యాదు చేయాలి.',
    ta: 'பிரதான் மந்திரி பயிர் காப்பீட்டு திட்டத்தின்படி (PMFBY): காரீப் பயிர் பிரீமியம் 2% மட்டுமே. உள்ளூர் இயற்கை இடர்பாடுகளுக்கு (வெள்ளம், ஆலங்கட்டி மழை) 72 மணி நேரத்திற்குள் வேளாண் அலுவலரிடம் தெரிவிக்க வேண்டும்.',
    gu: 'પ્રધાનમંત્રી ફસલ બીમા યોજના (PMFBY) હેઠળ: ખરીફ પાક પ્રીમિયમ માત્ર ૨% છે. સ્થાનિક આફતો (જળબંબાકાર, કરા) માટે ઘટનાના ૭૨ કલાકમાં કૃષિ અધિકારી અથવા ક્રોપ ઇન્શ્યોરન્સ એપ પર જાણ કરવી ફરજિયાત છે.',
    kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆಯಡಿ (PMFBY): ಮುಂಗಾರು ಬೆಳೆ ಪ್ರೀಮಿಯಂ ಕೇವಲ 2%. ಸ್ಥಳೀಯ ವಿಕೋಪಗಳಿಗೆ (ಪ್ರವಾಹ, ಆಲಿಕಲ್ಲು ಮಳೆ) ಹಾನಿಯಾದ 72 ಗಂಟೆಗಳ ಒಳಗೆ ಕೃಷಿ ಅಧಿಕಾರಿ ಅಥವಾ ಆ್ಯಪ್ ಮೂಲಕ ಮಾಹಿತಿ ನೀಡುವುದು ಕಡ್ಡಾಯ.',
    ml: 'പ്രധാനമന്ത്രി ഫസൽ ബീമാ യോജന (PMFBY) പ്രകാരം: ഖാരിഫ് വിള ഇൻഷുറൻസ് പ്രീമിയം 2% മാത്രമാണ്. പ്രാദേശിക ദുരന്തങ്ങൾക്ക് (വെള്ളപ്പൊക്കം, ആലിപ്പഴം) 72 മണിക്കൂറിനകം കൃഷി ഓഫീസറെയോ ആപ്പിലോ അറിയിക്കേണ്ടതാണ്.',
    or: 'ପ୍ରଧାନମନ୍ତ୍ରୀ ଫସଲ ବୀମା ଯୋଜନା (PMFBY) ଅଧୀନରେ: ଖରିଫ୍ ଫସଲ ପ୍ରିମିୟମ୍ ମାତ୍ର ୨%। ସ୍ଥାନୀୟ ପ୍ରାକୃତିକ ବିପର୍ଯ୍ୟୟ (ଜଳବନ୍ଦୀ, କୁଆପଥର ମାଡ଼) ପାଇଁ ୭୨ ଘଣ୍ଟା ମଧ୍ୟରେ କୃଷି ଅଧିକାରୀ କିମ୍ବା ବୀମା ଆପ୍ ରେ ଜଣାଇବା ବାଧ୍ୟତାମୂଳକ।'
  },
  paddyResp: {
    en: 'ICAR-NRRI Cuttack guidelines (DOC-NRRI-03) certify Swarna (MTU-7029) for medium-late irrigated lowlands (1100–1250 mm water). If moisture stress is expected, direct seed Sahbhagi Dhan (105 days duration) which incorporates the qDTY drought-tolerant gene and saves 35% water.',
    hi: 'आईसीएआर-एनआरआरआई कटक (DOC-NRRI-03) के अनुसार: सिंचित क्षेत्रों के लिए स्वर्ण (MTU-7029) सर्वोत्तम है। यदि वर्षा में कमी या सूखे की संभावना हो, तो सहभाग धान (105 दिन की अवधि) बोएं, जिसमें qDTY सूखा-सहनशील जीन है और यह 35% पानी बचाता है।',
    mr: 'ICAR-NRRI मार्गदर्शक तत्त्वांच्या (DOC-NRRI-03) आधारे: बागायती भागासाठी स्वर्णा (MTU-7029) सर्वोत्तम आहे. पाण्याची कमतरता भासणार असल्यास सहभागी धान (१०५ दिवस कालावधी) ची पेरणी करा, ज्यामध्ये qDTY दुष्काळ-सहनशील घटक असून ३५% पाणी वाचते.',
    pa: 'ਆਈਸੀਏਆਰ-ਐਨਆਰਆਰਆਈ (DOC-NRRI-03) ਅਨੁਸਾਰ: ਸਿੰਜਾਈ ਵਾਲੇ ਖੇਤਰਾਂ ਲਈ ਸਵਰਨ (MTU-7029) ਵਧੀਆ ਹੈ। ਜੇਕਰ ਪਾਣੀ ਦੀ ਘਾਟ ਹੋਵੇ ਤਾਂ ਸਹਿਭਾਗੀ ਝੋਨਾ ਬੀਜੋ ਜੋ 105 ਦਿਨਾਂ ਵਿੱਚ ਪੱਕਦਾ ਹੈ ਅਤੇ 35% ਪਾਣੀ ਬਚਾਉਂਦਾ ਹੈ।',
    bn: 'আইসিএআর-এনআরআরআই (DOC-NRRI-03) অনুসারে: সেচযুক্ত জমির জন্য স্বর্ণা (MTU-7029) উপযুক্ত। অনাবৃষ্টির ঝুঁকি থাকলে সহভাগ ধান (১০৫ দিন মেয়াদ) বপন করুন, যা খরা প্রতিরোধী এবং ৩৫% জল সাশ্রয় করে।',
    te: 'ICAR-NRRI కటక్ మార్గదర్శకాల ప్రకారం: నీటిపారుదల ప్రాంతాలకు స్వర్ణ (MTU-7029) ఉత్తమం. తేమ కొరత ఉండే అవకాశం ఉంటే సహభాగి దాన్ (105 రోజుల కాలవ్యవధి) విత్తుకోండి, ఇది 35% నీటిని ఆదా చేస్తుంది.',
    ta: 'ICAR-NRRI வழிகாட்டுதல்களின்படி: பாசன நிலங்களுக்கு சுவர்ணா (MTU-7029) சிறந்தது. நீர் பற்றாக்குறை எதிர்பார்க்கப்பட்டால், வறட்சியைத் தாங்கும் சகபாகி தான் (105 நாட்கள்) ரகத்தை நேரடி விதைப்பு செய்யவும்.',
    gu: 'ICAR-NRRI ના નિયમો મુજબ: સિંચાઈવાળા વિસ્તારો માટે સ્વર્ણા (MTU-7029) શ્રેષ્ઠ છે. પાણીની અછતની શક્યતા હોય તો સહભાગી ડાંગર (૧૦૫ દિવસ) વાવો, જે ૩૫% પાણી બચાવે છે.',
    kn: 'ICAR-NRRI ಮಾರ್ಗಸೂಚಿಯಂತೆ: ನೀರಾವರಿ ಪ್ರದೇಶಗಳಿಗೆ ಸ್ವರ್ಣಾ (MTU-7029) ಅತ್ಯುತ್ತಮ. ನೀರಿನ ಕೊರತೆ ನಿರೀಕ್ಷಿತವಾಗಿದ್ದರೆ, ಬರ ನಿರೋಧಕ ಸಹಭಾಗಿ ಭತ್ತ (105 ದಿನಗಳ ಅವಧಿ) ಬಿತ್ತನೆ ಮಾಡಿ.',
    ml: 'ICAR-NRRI മാർഗ്ഗനിർദ്ദേശ പ്രകാരം: നനവുള്ള നിലങ്ങൾക്ക് സ്വർണ്ണ (MTU-7029) ഏറ്റവും അനുയോജ്യം. ജലക്ഷാമ സാധ്യതയുണ്ടെങ്കിൽ വരൾച്ചയെ അതിജീവിക്കുന്ന സഹഭാഗി നെല്ല് (105 ദിവസം) കൃഷി ചെയ്യുക.',
    or: 'ICAR-NRRI କଟକ ନିର୍ଦ୍ଦେଶାବଳୀ ଅନୁଯାୟୀ: ଜଳସେଚିତ ଜମି ପାଇଁ ସ୍ୱର୍ଣ୍ଣ (MTU-7029) ସର୍ବୋତ୍ତମ। ଯଦି ଜଳାଭାବ ଆଶଙ୍କା ଥାଏ, ତେବେ ସହଭାଗୀ ଧାନ (୧୦୫ ଦିନ ଅବଧି) ବୁଣନ୍ତୁ, ଯାହା ୩୫% ଜଳ ସଞ୍ଚୟ କରେ।'
  },
  generalResp: {
    en: 'Grounded in ICAR agronomic publications: Maintain proper field drainage during active monsoon surges and adhere strictly to localized soil health card fertilizer recommendations (split nitrogen application in 3 doses).',
    hi: 'आईसीएआर वैज्ञानिक दिशानिर्देश: सक्रिय मानसून के दौरान खेत में उचित जल निकासी बनाए रखें और मृदा स्वास्थ्य कार्ड की सिफारिशों के अनुसार ही उर्वरकों का प्रयोग करें (नाइट्रोजन को 3 खुराकों में दें)।',
    mr: 'ICAR शास्त्रीय शिफारसी: मुसळधार पावसात शेतातून पाण्याचा योग्य निचरा ठेवा आणि माती आरोग्य पत्रिकेनुसारच खतांचा वापर करा (नत्र खताचा वापर ३ हप्त्यांमध्ये करा).',
    pa: 'ਆਈਸੀਏਆਰ ਖੇਤੀਬਾੜੀ ਨਿਯਮ: ਭਾਰੀ ਮੀਂਹ ਦੌਰਾਨ ਖੇਤਾਂ ਵਿੱਚੋਂ ਪਾਣੀ ਦੇ ਨਿਕਾਸ ਦਾ ਪ੍ਰਬੰਧ ਰੱਖੋ ਅਤੇ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਅਨੁਸਾਰ ਹੀ ਖਾਦਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।',
    bn: 'আইসিএআর কৃষি নির্দেশিকা: ভারী বর্ষার সময় ক্ষেতে জল নিষ্কাশনের সঠিক ব্যবস্থা রাখুন এবং মৃত্তিকা স্বাস্থ্য কার্ডের সুপারিশ অনুযায়ী সুষম সার প্রয়োগ করুন।',
    te: 'ICAR వ్యవసాయ మార్గదర్శకాలు: భారీ వర్షాల సమయంలో పొలంలో సరైన నీటి పారుదల సౌకర్యం కల్పించండి మరియు భూసార పరీక్ష కార్డు సిఫార్సుల ప్రకారమే ఎరువులు వాడండి.',
    ta: 'ICAR வேளாண் பரிந்துரைகள்: கனமழையின் போது வயலில் சரியான வடிகால் வசதியை ஏற்படுத்தவும் மற்றும் மண் வள அட்டை பரிந்துரைகளின்படி உரங்களைப் பயன்படுத்தவும்.',
    gu: 'ICAR વૈજ્ઞાનિક ભલામણો: ભારે વરસાદ દરમિયાન ખેતરમાંથી પાણી નિકાલની યોગ્ય વ્યવસ્થા રાખો અને જમીન આરોગ્ય કાર્ડ મુજબ જ ખાતરનો ઉપયોગ કરો.',
    kn: 'ICAR ಕೃಷಿ ಮಾರ್ಗಸೂಚಿಗಳು: ಮುಂಗಾರು ಮಳೆಯ ಸಮಯದಲ್ಲಿ ಜಮೀನಿನಲ್ಲಿ ಸೂಕ್ತ ನೀರು ಬಸಿದು ಹೋಗುವ ವ್ಯವಸ್ಥೆ ಮಾಡಿ ಮತ್ತು ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಶಿಫಾರಸುಗಳಂತೆ ರಸಗೊಬ್ಬರ ಬಳಸಿ.',
    ml: 'ICAR കാർഷിക നിർദ്ദേശങ്ങൾ: കനത്ത മഴയുള്ളപ്പോൾ തോട്ടങ്ങളിൽ കൃത്യമായ നീർവാർച്ച ഉറപ്പാക്കുക, മണ്ണ് പരിശോധനാ കാർഡ് നിർദ്ദേശങ്ങൾ അനുസരിച്ച് മാത്രം വളപ്രയോഗം നടത്തുക.',
    or: 'ICAR ବୈଜ୍ଞାନିକ ପରାମର୍ଶ: ପ୍ରବଳ ବର୍ଷା ସମୟରେ ଜମିରୁ ଜଳ ନିଷ୍କାସନ ବ୍ୟବସ୍ଥା ସୁନିଶ୍ଚିତ କରନ୍ତୁ ଏବଂ ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଡ ଅନୁଯାୟୀ ସନ୍ତୁଳିତ ଖତ-ସାର ପ୍ରୟୋଗ କରନ୍ତୁ।'
  }
};

export default function AssistantDrawer() {
  const { 
    isAssistantOpen, setIsAssistantOpen, 
    lang, setEvidenceDrawerData, setActiveTab, setIsReportModalOpen, tr 
  } = useApp();

  const currentGreeting = useMemo(() => {
    return MULTILINGUAL_CHAT_KNOWLEDGE.greetings[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.greetings['hi'];
  }, [lang]);

  const currentDefaultActions = useMemo(() => {
    return MULTILINGUAL_CHAT_KNOWLEDGE.defaultActions[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.defaultActions['hi'];
  }, [lang]);

  const [inputQuery, setInputQuery] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 'msg-1',
      sender: 'bot',
      text: currentGreeting,
      citations: [
        { doc_id: 'DOC-ICAR-01', title: 'ICAR Handbook of Agriculture (7th Ed.)', confidence: '96%' }
      ],
      actions: currentDefaultActions
    }
  ]);

  // Update initial message when user switches language
  useEffect(() => {
    setChatHistory(prev => {
      if (prev.length === 1 && prev[0].id === 'msg-1') {
        return [{
          id: 'msg-1',
          sender: 'bot',
          text: currentGreeting,
          citations: [
            { doc_id: 'DOC-ICAR-01', title: 'ICAR Handbook of Agriculture (7th Ed.)', confidence: '96%' }
          ],
          actions: currentDefaultActions
        }];
      }
      return prev;
    });
  }, [lang, currentGreeting, currentDefaultActions]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isAssistantOpen]);

  if (!isAssistantOpen) {
    return (
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="chat-floating-btn"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 900,
          background: 'linear-gradient(135deg, #0284c7 0%, #059669 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '9999px',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.88rem',
          boxShadow: '0 10px 25px rgba(2, 132, 199, 0.4), 0 0 15px rgba(16, 185, 129, 0.3)',
          cursor: 'pointer',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <Sparkles className="w-4 h-4 text-amber-300" />
        <span>{tr('Ask AI Assistant')} (RAG)</span>
      </button>
    );
  }

  const handleSend = (textToSend) => {
    const q = textToSend || inputQuery;
    if (!q.trim()) return;

    const userMsg = { id: `user-${Date.now()}`, sender: 'user', text: q };
    setChatHistory(prev => [...prev, userMsg]);
    setInputQuery('');

    // Synthetic RAG generation grounded strictly on DOC-ICAR-01 & DOC-CRIDA-02 in the user's selected language
    setTimeout(() => {
      let botResponse = '';
      let citations = [];
      let actions = [];

      const lowerQ = q.toLowerCase();

      if (lowerQ.includes('dry spell') || lowerQ.includes('drought') || lowerQ.includes('dry break') || lowerQ.includes('सूखा') || lowerQ.includes('कोरडा') || lowerQ.includes('অনাবৃষ্টি') || lowerQ.includes('కరువు') || lowerQ.includes('வறட்சி')) {
        botResponse = MULTILINGUAL_CHAT_KNOWLEDGE.droughtResp[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.droughtResp['hi'];
        citations = [{ doc_id: 'DOC-CRIDA-02', title: 'CRIDA Contingency Plans for Rainfed Systems', confidence: '95%' }];
        actions = [tr('Simulate in Scenario Lab'), tr('Smart Crop & Verified Cultivar Recommendations')];
      } else if (lowerQ.includes('pmfby') || lowerQ.includes('insurance') || lowerQ.includes('claim') || lowerQ.includes('बीमा') || lowerQ.includes('विमा') || lowerQ.includes('বীমা') || lowerQ.includes('కాப்பீட்டு')) {
        botResponse = MULTILINGUAL_CHAT_KNOWLEDGE.pmfbyResp[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.pmfbyResp['hi'];
        citations = [{ doc_id: 'DOC-GOV-05', title: 'PMFBY Operational Guidelines (2024)', confidence: '98%' }];
        actions = [tr('Export Report'), tr('Active Agro Advisory')];
      } else if (lowerQ.includes('paddy') || lowerQ.includes('rice') || lowerQ.includes('cultivar') || lowerQ.includes('धान') || lowerQ.includes('भात') || lowerQ.includes('వరి') || lowerQ.includes('நெல்')) {
        botResponse = MULTILINGUAL_CHAT_KNOWLEDGE.paddyResp[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.paddyResp['hi'];
        citations = [{ doc_id: 'DOC-NRRI-03', title: 'ICAR-NRRI Cuttack: Rice Cultivar Guidelines', confidence: '94%' }];
        actions = [tr('Compare Top Cultivars'), tr('Simulate in Scenario Lab')];
      } else {
        botResponse = MULTILINGUAL_CHAT_KNOWLEDGE.generalResp[lang] || MULTILINGUAL_CHAT_KNOWLEDGE.generalResp['hi'];
        citations = [{ doc_id: 'DOC-ICAR-01', title: 'ICAR Handbook of Agriculture (7th Ed.)', confidence: '91%' }];
        actions = [tr('Explainable AI (XAI) Suite & Feature Attribution'), tr('6-मोड मानचित्र')];
      }

      const botMsg = { id: `bot-${Date.now()}`, sender: 'bot', text: botResponse, citations, actions };
      setChatHistory(prev => [...prev, botMsg]);
    }, 600);
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const voiceLangs = {
        hi: 'hi-IN', mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN',
        gu: 'gu-IN', kn: 'kn-IN', ml: 'ml-IN', pa: 'pa-IN', or: 'or-IN', en: 'en-IN'
      };

      const voices = window.speechSynthesis.getVoices();
      let voiceToUse = null;
      let targetLang = voiceLangs[lang] || 'hi-IN';

      const isNonEnglish = (v) => {
        const l = (v.lang || '').toLowerCase();
        const n = (v.name || '').toLowerCase();
        return !l.startsWith('en') && !n.includes('english');
      };

      if (lang === 'pa') {
        const punjabiVoice = voices.find(v => 
          isNonEnglish(v) && (
            v.lang.toLowerCase().startsWith('pa') || 
            v.name.toLowerCase().includes('punjabi') || 
            v.name.toLowerCase().includes('panjabi')
          )
        );
        if (punjabiVoice) {
          voiceToUse = punjabiVoice;
          targetLang = punjabiVoice.lang;
        } else {
          const indicVoice = voices.find(v => 
            isNonEnglish(v) && (
              v.lang.toLowerCase().startsWith('hi') || 
              v.name.toLowerCase().includes('hindi') || 
              v.name.toLowerCase().includes('kalpana') ||
              v.name.toLowerCase().includes('swara')
            )
          );
          if (indicVoice) voiceToUse = indicVoice;
          targetLang = 'hi-IN';
        }
      } else if (lang !== 'en') {
        const matched = voices.find(v => isNonEnglish(v) && v.lang.toLowerCase().startsWith(targetLang.slice(0, 2).toLowerCase()));
        if (matched) voiceToUse = matched;
        else {
          const indicVoice = voices.find(v => isNonEnglish(v) && v.lang.toLowerCase().startsWith('hi'));
          if (indicVoice) voiceToUse = indicVoice;
        }
      } else {
        const enVoice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
        if (enVoice) voiceToUse = enVoice;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = targetLang;
      if (voiceToUse) utterance.voice = voiceToUse;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleActionClick = (action) => {
    const actStr = String(action).toLowerCase();
    if (actStr.includes('scenario') || actStr.includes('सिम्युलेट') || actStr.includes('परिस्थिती')) {
      setActiveTab('scenario');
      setIsAssistantOpen(false);
    } else if (actStr.includes('report') || actStr.includes('রিপোর্ট') || actStr.includes('रिपोर्ट') || actStr.includes('अहवाल')) {
      setIsReportModalOpen(true);
      setIsAssistantOpen(false);
    } else if (actStr.includes('map') || actStr.includes('मानचित्र') || actStr.includes('नकाशा') || actStr.includes('మ్యాప్')) {
      setActiveTab('hydromap');
      setIsAssistantOpen(false);
    } else if (actStr.includes('cultivar') || actStr.includes('crop') || actStr.includes('फसल') || actStr.includes('पिके') || actStr.includes('వరి')) {
      setActiveTab('agriculture');
      setIsAssistantOpen(false);
    } else if (actStr.includes('xai') || actStr.includes('explain')) {
      setActiveTab('xai');
      setIsAssistantOpen(false);
    } else {
      handleSend(action);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 1000,
      width: '420px',
      maxWidth: 'calc(100vw - 2rem)',
      height: '580px',
      maxHeight: 'calc(100vh - 4rem)',
      background: 'rgba(11, 17, 32, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(56, 189, 248, 0.35)',
      borderRadius: '20px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 25px rgba(56, 189, 248, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'modalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      
      {/* Header */}
      <div style={{
        padding: '0.85rem 1.15rem',
        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(16, 185, 129, 0.2) 100%)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: '#0284c7', padding: '0.35rem', borderRadius: '8px' }}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 style={{ fontSize: '0.94rem', color: '#fff', margin: 0, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              {tr('Ask AI Assistant')} (RAG)
            </h4>
            <span style={{ fontSize: '0.68rem', color: '#38bdf8' }}>
              ICAR / IMD Grounded Agricultural Bot ({lang.toUpperCase()})
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsAssistantOpen(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '0.3rem',
            borderRadius: '6px'
          }}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem'
      }}>
        {chatHistory.map(msg => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}
          >
            <div style={{
              background: msg.sender === 'user' 
                ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                : 'rgba(255, 255, 255, 0.05)',
              border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
              borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
              padding: '0.75rem 0.95rem',
              color: '#f8fafc',
              fontSize: '0.84rem',
              lineHeight: '1.45',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              {msg.text}
            </div>

            {/* Citations & Speech */}
            {msg.sender === 'bot' && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                {msg.citations && msg.citations.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                    {msg.citations.map((c, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.66rem',
                          background: 'rgba(56, 189, 248, 0.1)',
                          color: '#38bdf8',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          borderRadius: '4px',
                          padding: '0.15rem 0.4rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.2rem'
                        }}
                      >
                        <FileText className="w-2.5 h-2.5" />
                        {c.doc_id} ({c.confidence})
                      </span>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => handleSpeak(msg.text)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: isSpeaking ? '#34d399' : '#94a3b8',
                    cursor: 'pointer',
                    padding: '0.2rem',
                    marginLeft: 'auto'
                  }}
                  title="Speak Response in Regional Voice"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Suggested Action Chips */}
            {msg.actions && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                {msg.actions.map((act, i) => (
                  <button
                    key={i}
                    onClick={() => handleActionClick(act)}
                    style={{
                      fontSize: '0.72rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '999px',
                      padding: '0.25rem 0.65rem',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{act}</span>
                    <ChevronRight className="w-2.5 h-2.5 text-cyan-400" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        style={{
          padding: '0.75rem 1rem',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(5, 8, 17, 0.95)',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder={tr('Ask AI Assistant') + '...'}
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '0.55rem 0.85rem',
            color: '#fff',
            fontSize: '0.84rem',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          className="btn-cyan"
          style={{
            padding: '0.55rem 0.85rem',
            borderRadius: '10px',
            fontSize: '0.84rem',
            cursor: 'pointer'
          }}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
