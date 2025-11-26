import { Phone, Activity, Pill, Bell, FileHeart, ShieldCheck } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "ป้องกันไม่ให้พ่อแม่คุณเข้า ICU อีกครั้ง",
  subheadline: "ด้วยราคาแค่ 66 บาท/วัน",
  socialProof: "ตอนนี้มี 28,417 คนจองสิทธิ์กลุ่มแรกแล้ว",
  urgency: "เหลือสิทธิ์ส่วนลด 50% ตลอดชีพ อีกไม่ถึง 2,000 ที่นั่ง",
  qrText: "สแกน QR เพื่อจองสิทธิ์กลุ่มแรกทันที",
  qrSub: "@hanna"
};

// TODO: Replace with your deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_API_URL = "";

export const TIMELINE_STEPS = [
  {
    time: "08:00",
    title: "ฮันนาโทรเช็คทุกเช้า",
    description: "วัดความดัน น้ำตาล บอกฮันนาได้เลย",
    icon: <Phone className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    action: {
      type: "alert",
      text: "ปรับยา + ส่งยาถึงบ้านใน 1 ชม.",
      subText: "ถ้าผิดปกติ ฮันนาจัดการให้ทันที"
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
    title: "ส่งสรุปให้ลูกหลาน",
    description: "แจ้งเตือนทันทีหากอันตราย",
    icon: <FileHeart className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  }
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: "799",
    period: "/เดือน",
    features: ["โทรเช็คสุขภาพทุกวัน", "สรุปผลรายสัปดาห์", "แจ้งเตือนกินยา"],
    highlight: false
  },
  {
    name: "Plus",
    price: "1,999",
    period: "/เดือน",
    features: ["ทุกอย่างใน Basic", "บริการส่งยาถึงบ้าน", "ปรึกษาพยาบาล 24 ชม.", "วิเคราะห์แนวโน้มสุขภาพ"],
    highlight: true,
    badge: "ยอดนิยมที่สุด"
  },
  {
    name: "Family",
    price: "3,999",
    period: "/เดือน",
    features: ["ดูแลได้สูงสุด 3 ท่าน", "รายงานแยกรายบุคคล", "ผู้จัดการส่วนตัว VIP"],
    highlight: false
  }
];

export const FOOTER_LINKS = {
  copyright: "© 2568 Hanna",
  support: "ได้รับการส่งเสริมจาก BOI",
  privacy: "PDPA Compliant",
  email: "farhan@hanna.care"
};