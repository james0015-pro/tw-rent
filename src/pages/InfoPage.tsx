import { Scale, Home, TrendingUp, Shield, FileText, AlertTriangle } from 'lucide-react'
import { ContentPageHeader } from '@/components/shared/ContentPageHeader'
import { ContentPageFooter } from '@/components/shared/ContentPageFooter'

interface LawSection {
  icon: typeof Scale
  title: string
  effectiveDate: string
  content: string[]
}

const lawSections: LawSection[] = [
  {
    icon: Home,
    title: '租賃住宅市場發展及管理條例 修正',
    effectiveDate: '2023 年 2 月修正 / 2025 年持續檢討',
    content: [
      '包租代管業者須將租金資訊登錄於內政部租賃實價登錄平台，提升市場透明度',
      '租賃住宅服務業應提供定型化契約，保障租賃雙方權益',
      '地方政府應設立租賃爭議調處機制，降低訴訟成本',
      '2026 年起研議將租金指數納入 CPI 權重調整參考',
    ],
  },
  {
    icon: Shield,
    title: '租約保障強化 — 3 年租期與漲幅上限',
    effectiveDate: '2024 年 7 月部分施行 / 2025 年擴大適用',
    content: [
      '住宅租賃契約最低保障租期為 3 年，房東不得無正當理由提前解約',
      '續約時租金漲幅上限：每年不得超過 CPI 年增率 + 3%（以主計總處公布為準）',
      '台北市、新北市等六都另訂區域租金漲幅天花板，優先於全國標準適用',
      '房東調漲租金須於租約到期前 3 個月以書面通知，並檢附漲幅計算依據',
    ],
  },
  {
    icon: AlertTriangle,
    title: '租霸條款 — 惡意欠租快速處理機制',
    effectiveDate: '2024 年 12 月三讀通過 / 2025 年 1 月施行',
    content: [
      '定義「惡意欠租」：連續積欠租金達 2 個月以上，且經書面催告後 15 日內仍未支付',
      '房東可向法院聲請「租賃關係消滅裁定」，簡化訴訟程序，最快 30 天內完成',
      '法院裁定確定後，由民事執行處強制執行遷讓，不需經冗長的一審判決',
      '惡意破壞房屋者，房東可請求 3 倍損害賠償，並納入租賃黑名單系統',
      '公證法第 13 條修法配套（2026 年立院審議中）：租約經公證後，可逕付強制執行 — 無需訴訟即可請求法院執行遷讓及欠租清償，大幅縮短追討時程',
    ],
  },
  {
    icon: FileText,
    title: '公證租約 — 強制執行強化機制',
    effectiveDate: '公證法第 13 條修正草案 / 2026 年立院審議中',
    content: [
      '公證租約的法律效力：經公證的租賃契約視同執行名義，房客違約時房東可直接聲請強制執行',
      '強制執行範圍：包含租金清償、房屋返還（遷讓）、違約金及損害賠償，不需先打官司',
      '公證費用：依租約總金額級距計算（例如月租 2 萬、租期 3 年 = 72 萬，公證費約 3,000-5,000 元）',
      '修法重點：擴大公證租約適用範圍至所有住宅租賃，簡化公證程序，降低公證費用門檻',
    ],
  },
  {
    icon: FileText,
    title: '租賃契約應記載及不得記載事項',
    effectiveDate: '2025 年 1 月最新版',
    content: [
      '契約應明確記載：租金金額、支付方式、押金上限（不得超過 2 個月租金）',
      '水電瓦斯費用分擔方式應於契約明定，不得以「依實際使用」含糊帶過',
      '房東不得約定禁止房客申請租金補貼，違者處 3-30 萬元罰鍰',
      '不得記載「房客放棄民法上權利」或「不得報稅」等違法條款',
    ],
  },
  {
    icon: TrendingUp,
    title: '300 億租金補貼專案 — 2026 年延長',
    effectiveDate: '2025-2026 年持續實施',
    content: [
      '2026 年度預算維持 300 億元，預計補貼戶數從 50 萬戶擴大至 75 萬戶',
      '補貼金額依行政區分級：台北市每戶每月最高 8,000 元、新北市 5,000 元、其他縣市 2,000-4,000 元',
      '申請資格：家庭年所得低於各縣市中位數 1.5 倍，且無自有住宅',
      '新增「就業青年加碼」：35 歲以下單身青年，補貼金額額外加碼 20%',
      '線上申請：內政部不動產資訊平台 https://pip.moi.gov.tw',
    ],
  },
  {
    icon: Scale,
    title: '租賃專法修法追蹤 — 政院草案卡關逾半年',
    effectiveDate: '立法院 2026 年 5 月最新進度',
    content: [
      '政院版《租賃住宅市場發展及管理條例》修正草案於 2025 年 11 月經行政院會通過，但至今逾 6 個月仍未送立法院審議，進度嚴重延宕',
      '朝野立委聯合呼籲（2026/1/19）：民進黨、國民黨、民眾黨立委跨黨派共同舉行記者會，要求政院於 2026 年 3 月前送審草案。政院回應「跨部會協調中」，至今無具體時間表',
      '草案核心爭點：①公證法第 13 條修正配套（司法院與法務部立場分歧）②租金實價登錄強制揭露範圍（財政部反對全面揭露）③房客黑名單系統隱私疑慮（國發會要求個資影響評估）',
      '財政部立場：反對租金全面實價登錄，主張僅包租代管案件強制登錄即可，一般租賃維持自願申報。內政部主張全面強制，兩部會協商陷入僵局',
      '司法院立場：對公證法修法持保留態度，認為租約全面公證將導致公證人力不足（全台僅約 600 位公證人）。建議分階段：先強制社宅／包租代管案件公證，一般租賃維持自願',
      '民間團體反應：崔媽媽基金會、租客聯盟等民團多此赴立院陳情，呼籲勿因部會本位主義犧牲租屋族權益',
    ],
  },
  {
    icon: Scale,
    title: '包租代管 5.0 — 2026 年擴大辦理',
    effectiveDate: '2025 年 7 月上路',
    content: [
      '全台目標媒合戶數提升至 10 萬戶（4.0 為 5 萬戶）',
      '房東優惠：每屋每年最高 10,000 元修繕補助、房屋稅/地價稅適用自用稅率',
      '新增「社宅包租代管」模式：政府保證收租、業者管理、弱勢優先',
      '空屋活化獎勵：閒置 1 年以上房屋加入包租代管，額外租金補貼 3 個月',
    ],
  },
]

export function InfoPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <ContentPageHeader
        icon={<Scale size={24} />}
        title="租賃條例與政策資訊"
        dateSource="資料更新：2026-05-22｜來源：內政部、立法院公報"
        description="以下彙整台灣最新租賃相關法規修訂與政策變動，涵蓋租期保障、漲幅限制、租霸處理機制、
          租金補貼及包租代管等六大面向。租屋族與房東皆應了解自身權益。"
      />

      {/* Law Sections */}
      {lawSections.map((section) => (
        <div key={section.title} className="bg-surface border border-border-subtle p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 text-amber-primary">
              <section.icon size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-bold text-text-primary">{section.title}</h2>
              <p className="text-text-dim text-[10px] mt-0.5">生效日期：{section.effectiveDate}</p>
            </div>
          </div>
          <ul className="space-y-2 ml-9">
            {section.content.map((item, i) => (
              <li key={i} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                <span className="text-amber-primary mt-1 flex-shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Footer */}
      <ContentPageFooter
        disclaimer="⚠ 以上資訊僅供參考，實際內容以政府公告為準。如有法律問題，請諮詢專業律師。"
        sources="資料來源：內政部地政司、立法院議事公報、行政院公報資訊網"
      />
    </div>
  )
}
