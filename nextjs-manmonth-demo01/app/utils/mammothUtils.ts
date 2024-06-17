import mammoth from "mammoth";

export async function extractTextFromFile(filePath) {
  try {
    const result = await mammoth.extractRawText({path: filePath});
  } catch (error) {
    console.error("Error extracting text:", error);
  }
}

export function countEnglish(text) {
  return [...text].filter((char) => /[A-Za-z]/.test(char)).length;
}

export function countChinese(text) {
  return [...text].filter((char) => /[\u4e00-\u9fff]/.test(char)).length;
}

export async function isEnglishDoc(filePath) {
  console.log("filePath:", filePath);
  const result = await mammoth.extractRawText({path: filePath});
  const englishCount = countEnglish(result.value);
  console.log("englishCount", englishCount);
  return englishCount > 0;
}

export async function isChineseDoc(filePath) {
  const result = await mammoth.extractRawText({path: filePath});
  const chineseCount = countChinese(result.value);
  return chineseCount > 0;
}

export async function isEnglishAndChineseDoc(filePath) {
  const result = await mammoth.extractRawText({path: filePath});
  const chineseCount = countChinese(result.value);
  const englishCount = countEnglish(result.value);
  return chineseCount > 0 && englishCount > 0;
}

