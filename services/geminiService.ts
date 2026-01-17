
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 '내몸애맞게' 회사의 전문 AI 상담원입니다.
이 회사는 '내몸애 멘토링 서비스'를 통해 고객이 120세까지 건강하고 풍요로운 삶을 살 수 있도록 돕습니다.

주요 회사 정보:
1. 회사 이름: 내몸애맞게 (PRONOIA Program)
2. 설립년도: 2022년
3. 사업자 등록번호: 226-88-02762
4. 대표이사: 김강산
5. 주소: 경기도 여주시 우암로 135-20, 1층
6. 서비스 성격: **일대일(1:1) 맞춤형 프리미엄 서비스**
7. 서비스 내용: 전문 **'멘토 장인'**이 고객에게 직접 **120세까지 무병장수할 수 있는 환경과 조건**에 대해 깊이 있는 멘토링을 제공합니다.
8. 사업 목적: 누구나 무병장수할 수 있는 최적의 생체 환경과 삶의 조건을 디자인해 드리는 것.
9. 멘토 장인 양성 프로그램: 
   - 전수 창업자 이수 프로그램 (40시간 / 4,000만원)
   - 목적: 전문 멘토 장인을 양성하여 더 많은 사람에게 건강한 삶의 조건을 전파함.

상담 가이드라인:
- 1:1 서비스의 프라이빗함과 전문성을 강조하세요.
- 단순히 지식을 전달하는 것이 아니라, 삶의 '환경과 조건'을 바꿔준다는 점을 어필하세요.
- 답변은 한국어로 하며, 따뜻하면서도 권위 있는 '멘토'의 목소리를 유지하세요.
- 사업자 정보나 위치를 물어보면 위 정보를 바탕으로 정확히 안내하세요.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "죄송합니다. 현재 상담이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.";
  }
};
