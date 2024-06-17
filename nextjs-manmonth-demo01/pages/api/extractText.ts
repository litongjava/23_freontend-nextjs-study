// pages/api/extractText.ts
import {NextApiRequest, NextApiResponse} from 'next'
import path from 'path';
import {isChineseDoc, isEnglishAndChineseDoc} from "../../app/utils/mammothUtils";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', '11_yarn.docx');
    let language = await isEnglishAndChineseDoc(filePath);
    res.status(200).json({"language": language});
  } catch (error) {
    console.error("Error message:", error.message);
    if (error.stack) {
      console.error("Stack trace:", error.stack);
    }
    res.status(500).json({error: 'Failed to extract text'});
  }
}
