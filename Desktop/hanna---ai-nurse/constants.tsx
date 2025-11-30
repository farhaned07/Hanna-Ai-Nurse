import { Phone, Activity, Pill, Bell, FileHeart, ShieldCheck } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "ป้องกันไม่ให้พ่อแม่คุณเข้า ICU อีกครั้ง",
  subheadline: "ด้วยราคาแค่ 100 บาท/วัน",
  socialProof: "เปิดให้บริการเร็ว ๆ นี้",
  urgency: "เหลืออีกไม่ถึง 2,000 ที่นั่ง",
  qrText: "สแกน QR เพื่อจองสิทธิ์กลุ่มแรกทันที",
  qrSub: "@hanna"
};

// TODO: Replace with your deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_API_URL = "";

export const TIMELINE_STEPS = [
  {
    time: "08:00",
    title: "ฮันนาโทรเช็คทุกเช้า",
    description: "วัดความดัน น้ำตาล อาการต่าง ๆ บอกฮันนาได้เลยค่ะ",
    icon: <Phone className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    action: {
      type: "alert",
      text: "ถ้าผิดปกติ พยาบาลและแพทย์ตรวจสอบ + ปรับยา",
      subText: "ส่งยาถึงบ้านภายใน 2 ชั่วโมง (กรุงเทพฯ)"
    }
  },
  {
    time: "19:00",
    title: "เตือนกินยาตอนเย็น",
    description: "ไม่พลาดแม้แต่เม็ดเดียว",
    icon: <Pill className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
  },
  {
    time: "21:00",
    title: "ส่งสรุปให้ลูกหลานทันที",
    description: "หากอันตราย ฮันนาเรียก 1669 ให้ทันที",
    icon: <FileHeart className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  }
];

export const TIMELINE_CLOSING = "ทุกวัน ฮันนาอยู่กับพ่อแม่คุณ เหมือนมีพยาบาลส่วนตัวมาดูแลที่บ้าน ลูกหลานจึงนอนหลับได้ โดยไม่ต้องกังวลอีก";

export const TIMELINE_DISCLAIMER = "* ฮันนาเป็นเครื่องมือช่วยติดตามสุขภาพ ไม่ใช่การรักษาทางการแพทย์ ในกรณีฉุกเฉินโปรดติดต่อ 1669";

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: "2,999",
    period: "/เดือน",
    features: ["ฮันนาโทรเช็คทุกวัน 08:00–21:00", "พยาบาล+แพทย์ปรับยา + ส่งยาถึงบ้าน", "ส่งสรุปให้ลูกหลานทุกคืน", "ติดตามแนวโน้มสุขภาพ"],
    highlight: false
  },
  {
    name: "Plus",
    price: "4,999",
    period: "/เดือน",
    features: ["ทุกอย่างใน Basic", "วิดีโอคอลหมอทุกสัปดาห์", "มีพยาบาลตอบไวใน 5 นาที", "รายงานละเอียด + แผนโภชนาการ"],
    highlight: true,
    badge: "ยอดนิยมที่สุด"
  },
  {
    name: "Family",
    price: "19,999",
    period: "/เดือน",
    features: ["ทุกอย่างใน Plus × 3 คน", "มีแดชบอร์ดครอบครัวเดียวกัน", "พยาบาลเยี่ยมบ้านทุกเดือน", "วิดีโอหมอไม่จำกัด (ประหยัด ฿10,000)"],
    highlight: false
  }
];

export const FOOTER_LINKS = {
  copyright: "© 2568 Hanna",
  support: "ได้รับการส่งเสริมจาก BOI",
  privacy: "PDPA Compliant",
  email: "farhan@hanna.care",
  terms: "ข้อกำหนดการใช้บริการ",
  policy: "นโยบายความเป็นส่วนตัว"
};