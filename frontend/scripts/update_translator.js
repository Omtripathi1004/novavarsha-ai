import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const langFilePath = path.join(__dirname, '..', 'src', 'i18n', 'languages.js');
let content = fs.readFileSync(langFilePath, 'utf8');

const oldTranslatorStart = `export function translateVernacular(englishText, lang) {`;
const newTranslator = `export function translateVernacular(englishText, lang) {
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
    const words = translatedSentence.split(/(\\s+|[,.:;()!?/+-])/);
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
`;

const idx = content.indexOf(oldTranslatorStart);
if (idx !== -1) {
  content = content.slice(0, idx) + newTranslator;
  fs.writeFileSync(langFilePath, content, 'utf8');
  console.log('Successfully updated translateVernacular in languages.js!');
} else {
  console.error('Could not find oldTranslatorStart!');
}
