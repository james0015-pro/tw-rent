import { Building2, Percent, PiggyBank, MapPin, ClipboardList, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react'
import { ContentPageHeader } from '@/components/shared/ContentPageHeader'
import { ContentPageFooter } from '@/components/shared/ContentPageFooter'

interface HousingSection {
  icon: typeof Building2
  title: string
  subtitle?: string
  items: { label?: string; text: string; highlight?: boolean }[]
  stats?: { label: string; value: string }[]
}

interface StepSection {
  step: number
  title: string
  description: string
  note?: string
}

const SOCIAL_HOUSING_DISTRIBUTION = [
  { city: '台北市', units: 45000, pct: 18.9 },
  { city: '新北市', units: 52000, pct: 21.8 },
  { city: '桃園市', units: 28000, pct: 11.7 },
  { city: '台中市', units: 35000, pct: 14.7 },
  { city: '台南市', units: 15000, pct: 6.3 },
  { city: '高雄市', units: 30000, pct: 12.6 },
  { city: '其他縣市', units: 33800, pct: 14.2 },
]

const APPLICATION_STEPS: StepSection[] = [
  {
    step: 1,
    title: '資格確認',
    description: '家庭年所得低於各縣市中位數 1.5 倍，且家庭成員無自有住宅。35 歲以下單身青年亦可申請。',
    note: '需準備：身分證、戶口名簿、所得清單、財產清單',
  },
  {
    step: 2,
    title: '線上或臨櫃申請',
    description: '至內政部不動產資訊平台 (pip.moi.gov.tw) 線上申請，或至各縣市政府城鄉發展局臨櫃辦理。',
    note: '包租代管案件另可透過合格業者（如 591 社宅專區）協助媒合',
  },
  {
    step: 3,
    title: '資格審查',
    description: '審查期間約 15-30 個工作天，審查通過後核發租金補貼核定函。',
  },
  {
    step: 4,
    title: '媒合或自行找房',
    description: '包租代管由業者媒合；一般租金補貼可自行找房後於 3 個月內補登租約。',
    note: '社宅包租代管：業者代管、政府保證收租、弱勢優先',
  },
  {
    step: 5,
    title: '簽約入住',
    description: '簽訂住宅租賃契約（最低保障 3 年），補貼款按月撥入房客指定帳戶。',
  },
]

const sections: HousingSection[] = [
  {
    icon: Building2,
    title: '包租代管 5.0 — 2026 擴大辦理',
    subtitle: '2025 年 7 月上路｜目標媒合 10 萬戶（4.0 為 5 萬戶）',
    items: [
      { text: '全台目標媒合戶數從 5 萬戶倍增至 10 萬戶，由六都優先推動再擴及全台各縣市', highlight: true },
      { text: '業者須將租金資訊登錄內政部租賃實價登錄平台，提升市場透明度' },
      { text: '地方政府應設立租賃爭議調處機制，降低訴訟成本' },
    ],
    stats: [
      { label: '目標媒合', value: '100,000 戶' },
      { label: '年修繕補助', value: '$10,000/屋' },
      { label: '空屋活化獎勵', value: '+3 個月租金' },
    ],
  },
  {
    icon: Percent,
    title: '《住宅法》包租占比 50% 入法',
    subtitle: '2026 年立院審議中｜包租代管與社宅雙軌並行',
    items: [
      { text: '社宅總量中包租代管占比不得低於 50%，確保多元供給管道', highlight: true },
      { text: '新建社宅 + 包租代管雙軌並行，2026 年目標總量 25 萬戶' },
      { text: '包租代管業者須定期公開媒合率、租金分布、空屋率等營運數據' },
      { text: '房東加入包租代管滿 3 年，房屋稅與地價稅永久適用自用住宅稅率' },
    ],
    stats: [
      { label: '社宅總目標', value: '25 萬戶' },
      { label: '包租占比', value: '≥50%' },
      { label: '目前達成', value: '236,000 戶' },
    ],
  },
  {
    icon: PiggyBank,
    title: '信託租金稅務優惠',
    subtitle: '2025 年財政部公告｜租金收入分離課稅 + 信託保障',
    items: [
      { text: '租金收入可選擇分離課稅 10%，不併入綜合所得稅計算，降低稅率級距跳升風險', highlight: true },
      { text: '透過銀行信託專戶收取租金，確保租金收入與個人金流分離，便於稅務申報' },
      { text: '包租代管房東租金收入每月免稅額 $15,000（超過部分再減除 60% 必要費用）' },
      { text: '租約經公證後，信託專戶內租金具備強制執行效力，保障房東收款權益' },
      { text: '房屋修繕費用可全額列舉扣除，不受一般租賃 43% 必要費用上限限制' },
    ],
  },
  {
    icon: MapPin,
    title: '全台社會住宅分布 — 23.6 萬戶',
    subtitle: '資料更新：2026-05｜來源：內政部國土管理署',
    items: [
      { text: '六都合計 20.5 萬戶，占全台社宅總量 86.8%' },
      { text: '台北市 4.5 萬戶（18.9%）、新北市 5.2 萬戶（21.8%）為最大供應區' },
      { text: '2026 年新增目標 3 萬戶，其中包租代管 1.5 萬戶、新建社宅 1.5 萬戶' },
      { text: '弱勢族群保障比例：社宅總量 40% 以上優先提供予低收入戶、身心障礙者、老人', highlight: true },
    ],
  },
  {
    icon: AlertTriangle,
    title: '社宅政策轉彎與爭議追蹤',
    subtitle: '2026-05 最新發展｜來源：內政部、監察院、立法院質詢',
    items: [
      { text: '新建社宅大砍：原定 8 年新建 13 萬戶，政院 2026 年調整為 4 萬戶，改押包租代管填補缺口。民間質疑包租代管品質難控、租期不穩，恐重蹈 2024 年 3,500 戶退場潮', highlight: true },
      { text: '包租代管假業者警示：國家住都中心 2026/5 發出警告，部分業者僅掛牌無實際服務，租客簽約後無人代管、修繕無門。呼籲租客查驗業者許可字號與近半年媒合實績', highlight: true },
      { text: '補助分配爭議：監察院報告揭露五年 150 億租金補貼中六成（約 90 億）實質流向業者與房東，租客反遭漲租。部分房東以「可申請補貼」為由調漲租金，抵銷補貼效果' },
      { text: '租賃專法修法延宕：政院版《租賃住宅市場發展條例》修正草案逾半年未送立院審議，朝野立委聯合呼籲加速（2026/1/19），至今無進展' },
    ],
  },
  {
    icon: TrendingUp,
    title: '科技投資對租屋市場影響',
    subtitle: '2026-05-21 更新｜AMD 宣布 $100 億美元台灣 AI 投資（CNBC）',
    items: [
      { text: 'AMD 宣布 $100 億美元（約新台幣 3,200 億）台灣 AI 研發與製造投資，涵蓋新竹、台南、高雄三大科學園區，預計創造逾 15,000 個高薪職位', highlight: true },
      { text: '新竹科學園區：半導體研發中心擴建。周邊租金已為全台第二高（僅次台北），套房月租 $9,000-$15,000。新增 5,000+ 工程師需求，租金年漲幅估 5-8%' },
      { text: '台南科學園區：先進封裝廠擴產。周邊租金 2024-2025 已漲 12%，套房月租 $7,000-$10,000。AMD + TSMC 雙引擎，2026 年租金上看再漲 10%' },
      { text: '高雄科學園區：AI 運算中心新設。周邊目前租金較低（套房 $5,500-$8,000），但為成長潛力最大區域。政府同步推動亞灣 2.0 智慧城市，租金補漲效應顯著' },
      { text: 'Meta + Broadcom + UCLA $1.25 億半導體聯合研究中心亦落腳台灣，進一步強化台灣在全球 AI/半導體供應鏈的核心地位' },
      { text: '投資者注意：科技聚落擴張帶動剛性租屋需求，園區周邊房東議價能力增強。租屋族可考慮提前簽長約鎖租金，或選擇通勤 30 分鐘內衛星城鎮降低租金壓力' },
    ],
    stats: [
      { label: 'AMD 投資', value: '$100 億' },
      { label: '新增職位', value: '15,000+' },
      { label: '新竹租金', value: '$9K-15K/月' },
    ],
  },
]

export function SocialHousingPage() {
  const maxUnits = Math.max(...SOCIAL_HOUSING_DISTRIBUTION.map(d => d.units))

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <ContentPageHeader
        icon={<Building2 size={24} />}
        title="社會住宅與包租代管"
        dateSource="資料更新：2026-05-22｜來源：內政部、財政部、立法院公報"
        description="台灣社會住宅政策雙軌並行：政府直接興建 + 包租代管民間空屋。2026 年目標總量 25 萬戶，
          其中包租代管占比不低於 50%。以下彙整最新政策、申請資格、稅務優惠與全台分布資訊。"
      />

      {/* Distribution Bar Chart */}
      <div className="bg-surface border border-border-subtle p-5">
        <h2 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp size={16} className="text-amber-primary" />
          各地社宅分配
        </h2>
        <div className="space-y-2.5">
          {SOCIAL_HOUSING_DISTRIBUTION.map((item) => (
            <div key={item.city} className="flex items-center gap-3 text-xs">
              <span className="w-16 text-right text-text-secondary flex-shrink-0">{item.city}</span>
              <div className="flex-1 h-5 bg-canvas relative">
                <div
                  className="h-full bg-amber-primary/30 border-r border-amber-primary transition-all"
                  style={{ width: `${(item.units / maxUnits) * 100}%` }}
                />
              </div>
              <span className="w-20 text-text-primary font-mono text-right flex-shrink-0">
                {item.units.toLocaleString()}
              </span>
              <span className="w-12 text-text-dim text-right flex-shrink-0">{item.pct}%</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-text-dim text-[10px]">
          合計：<span className="text-amber-primary font-bold">238,800</span> 戶已完工／決標
        </div>
      </div>

      {/* Policy Sections */}
      {sections.map((section) => (
        <div key={section.title} className="bg-surface border border-border-subtle p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 text-amber-primary">
              <section.icon size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-bold text-text-primary">{section.title}</h2>
              {section.subtitle && (
                <p className="text-text-dim text-[10px] mt-0.5">{section.subtitle}</p>
              )}
            </div>
          </div>

          {/* Stats row */}
          {section.stats && (
            <div className="grid grid-cols-3 gap-2 mb-3 ml-9">
              {section.stats.map((s) => (
                <div key={s.label} className="bg-canvas border border-border-subtle p-2 text-center">
                  <div className="text-amber-primary font-bold text-sm">{s.value}</div>
                  <div className="text-text-dim text-[9px] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-2 ml-9">
            {section.items.map((item, i) => (
              <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                <span className={`mt-1 flex-shrink-0 ${item.highlight ? 'text-amber-primary' : 'text-text-dim'}`}>
                  {item.highlight ? '◆' : '▸'}
                </span>
                <span className={item.highlight ? 'text-amber-primary' : 'text-text-secondary'}>
                  {item.label && <span className="text-text-primary font-bold">{item.label}: </span>}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Application Steps */}
      <div className="bg-surface border border-border-subtle p-5">
        <div className="flex items-center gap-3 mb-4">
          <ClipboardList size={18} className="text-amber-primary" />
          <h2 className="text-sm font-bold text-text-primary">申請流程</h2>
        </div>
        <div className="space-y-0">
          {APPLICATION_STEPS.map((step, i) => (
            <div key={step.step} className="flex gap-3">
              {/* Step indicator line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-amber-primary/20 border border-amber-primary flex items-center justify-center text-[10px] font-bold text-amber-primary">
                  {step.step}
                </div>
                {i < APPLICATION_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-border-subtle my-1" />
                )}
              </div>
              <div className={`pb-4 ${i === APPLICATION_STEPS.length - 1 ? '' : ''}`}>
                <div className="text-xs font-bold text-text-primary">{step.title}</div>
                <div className="text-xs text-text-secondary mt-0.5 leading-relaxed">{step.description}</div>
                {step.note && (
                  <div className="text-[10px] text-text-dim mt-1 flex items-start gap-1">
                    <span className="text-amber-primary">💡</span>
                    {step.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Useful Links */}
      <div className="bg-surface border border-border-subtle p-5">
        <div className="flex items-center gap-2 mb-3">
          <ArrowRight size={16} className="text-amber-primary" />
          <h2 className="text-sm font-bold text-text-primary">相關連結</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { label: '內政部不動產資訊平台', url: 'https://pip.moi.gov.tw', desc: '租金補貼線上申請' },
            { label: '591 社宅專區', url: 'https://rent.591.com.tw/social-housing', desc: '包租代管物件查詢' },
            { label: '各縣市城鄉發展局', url: '#', desc: '各地社宅抽籤與公告' },
            { label: '財政部稅務入口網', url: 'https://www.etax.nat.gov.tw', desc: '租金分離課稅資訊' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-canvas border border-border-subtle p-3 hover:border-amber-primary/30 transition-colors group"
            >
              <div className="text-xs text-text-primary group-hover:text-amber-primary transition-colors">
                {link.label}
              </div>
              <div className="text-[10px] text-text-dim mt-0.5">{link.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <ContentPageFooter
        disclaimer="⚠ 以上資訊僅供參考，實際內容以政府公告為準"
        sources="資料來源：內政部國土管理署、財政部賦稅署、立法院議事公報、《住宅法》修正草案"
      />
    </div>
  )
}
