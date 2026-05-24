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
    subtitle: '2026/5/13 三讀通過正式上路｜包租代管與社宅雙軌並行',
    items: [
      { text: '社宅總量中包租代管占比不得低於 50%，確保多元供給管道（已三讀通過）', highlight: true },
      { text: '業者表示包租代管占比入法有助穩定市場供給，預估 2027 年總媒合戶數可達 15 萬戶' },
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
    subtitle: '2026-05 最新發展｜來源：內政部、監察院、立法院質詢、國家住都中心 5/19 公告',
    items: [
      { text: '新建社宅大砍：原定 8 年新建 13 萬戶，政院 2026 年調整為 4 萬戶，改押包租代管填補缺口。民間質疑包租代管品質難控、租期不穩，恐重蹈 2024 年 3,500 戶退場潮', highlight: true },
      { text: '包租代管假業者警示：國家住都中心 2026/5/19 正式示警，部分業者僅掛牌未提供實際代管服務，租客簽約後無人負責修繕與糾紛處理。呼籲租客至國家住都中心官網（https://www.hurc.org.tw）查驗業者許可字號與近半年媒合實績，簽約前務必確認業者具備合法登記', highlight: true },
      { text: '補助分配爭議：監察院報告揭露五年 150 億租金補貼中六成（約 90 億）實質流向業者與房東，租客反遭漲租。部分房東以「可申請補貼」為由調漲租金，抵銷補貼效果' },
      { text: '租賃專法修法延宕：政院版《租賃住宅市場發展條例》修正草案逾半年未送立院審議，朝野立委聯合呼籲加速（2026/1/19），至今無進展' },
      { text: '社宅二房東稽查升級（2026/5/23 起全面啟動）：內政部 5 月起聯合六都地政局啟動全國社宅稽查專案，5/23 PChome 等多家媒體報導稽查已正式執行。查緝項目擴及私下轉租、冒名申請、人頭戶、藉社宅經營日租套房等違規行為。新增 AI 數據篩查機制 — 透過水電帳單異常、戶籍與居住事實不符等數據交叉比對鎖定高風險戶。違者立即終止租約並移送法辦，列入社宅終身停權黑名單，不得再申請任何政府住宅補助。首波稽查已查獲 127 件違規，其中 43 件移送檢調偵辦', highlight: true },
    ],
  },
  {
    icon: TrendingUp,
    title: '科技投資對租屋市場影響',
    subtitle: '2026-05-23 更新｜AMD CEO 蘇姿丰演講：AI 才打到第三局／先進封裝在地化／CPU 年增 35%',
    items: [
      { text: 'AMD CEO 蘇姿丰 2026/5/22 發表演講：認為 AI 才打到第三局，AI 推論需求即將超越訓練需求。AMD CPU 年增 35%，台灣投資已逾 100 億美元，涵蓋新竹、台南、高雄三大科學園區，預計創造逾 15,000 個高薪職位', highlight: true },
      { text: '新竹科學園區：半導體研發中心擴建。周邊租金已為全台第二高（僅次台北），套房月租 $9,000-$15,000。新增 5,000+ 工程師需求，租金年漲幅估 5-8%' },
      { text: '台南科學園區：先進封裝廠擴產。周邊租金 2024-2025 已漲 12%，套房月租 $7,000-$10,000。AMD + TSMC 雙引擎，2026 年租金上看再漲 10%' },
      { text: '高雄科學園區：AI 運算中心新設。周邊目前租金較低（套房 $5,500-$8,000），但為成長潛力最大區域。政府同步推動亞灣 2.0 智慧城市，租金補漲效應顯著' },
      { text: 'AI 推論時代來臨：蘇姿丰強調 AI 推論需求將超越訓練，邊緣運算與 Inference Chip 需求大增，可能帶動更多 IC 設計新創落地台灣，進一步推升科學園區周邊租屋需求' },
      { text: 'AMD 推動台灣先進封裝生態系在地化（Taipei Times 5/22）：蘇姿丰於 Formosa News 專訪中強調，AMD 正大力推動台灣封裝供應鏈在地化，涵蓋 CoWoS 先進封裝、2.5D/3D IC 封裝產能。此舉將加速台灣從晶圓代工向下游封裝測試整合，預計帶動新一波供應鏈擴廠與人才需求', highlight: true },
      { text: 'Meta + Broadcom + UCLA $1.25 億半導體聯合研究中心亦落腳台灣，進一步強化台灣在全球 AI/半導體供應鏈的核心地位' },
      { text: '投資者注意：科技聚落擴張帶動剛性租屋需求，園區周邊房東議價能力增強。租屋族可考慮提前簽長約鎖租金，或選擇通勤 30 分鐘內衛星城鎮降低租金壓力' },
    ],
    stats: [
      { label: 'AMD 投資', value: '>$100 億' },
      { label: '新增職位', value: '15,000+' },
      { label: 'CPU 年增', value: '35%' },
    ],
  },
  {
    icon: MapPin,
    title: '高雄住屋新政 — 租金補貼放寬與婚育宅',
    subtitle: '2026-05 陳其邁市長新政｜來源：高雄市都發局、市議會質詢',
    items: [
      { text: '高雄市租金補貼加碼放寬：中央補貼之外，高市府額外提供每戶每月 $1,500-$3,000 地方加碼（依家庭人口數），總計高雄租屋族最高可獲 $8,000/月補助', highlight: true },
      { text: '婚育宅年限延長：新婚夫婦及育有未成年子女家庭申請社宅的資格年限從 2 年延長至 5 年，且續約不受一般收入上限限制' },
      { text: '都市原住民住宅政策缺口：市議員質詢揭露高雄市都市原住民約 2.8 萬人，但社宅原住民保障名額僅 2%（約 600 戶），明顯不足。市府承諾研議提高保障比例至 5%' },
      { text: '高雄科學園區 AI 運算中心（AMD $100 億投資）帶動周邊租屋需求，2026 年租金預估再漲 8-10%，高雄市府同步加速亞灣社宅興建（目標 3,000 戶）' },
    ],
    stats: [
      { label: '高雄補助上限', value: '$8,000/月' },
      { label: '婚育宅年限', value: '5 年' },
      { label: '原住民保障', value: '僅 2%' },
    ],
  },
  {
    icon: MapPin,
    title: '新市安居社宅開放申請 — 南科首座社會住宅',
    subtitle: '2026/5/22 起受理｜670 戶 + Q2 全台招租逾千戶',
    items: [
      { text: '台南新市安居社宅 2026/5/22 正式開放申請，共 670 戶，為南部科學園區首座社會住宅。位於新市區中心，距南科僅 10 分鐘車程，預計 2027 年初可入住', highlight: true },
      { text: '房型涵蓋套房（約 8 坪/$5,000 起）、一房（約 12 坪/$7,000 起）、二房（約 18 坪/$10,000 起），其中 30% 保留給南科就業青年' },
      { text: '2026 年 Q2 全台社宅招租逾千戶：新北板橋、桃園中壢、台中北屯、高雄鳳山等多處新建社宅同步開放申請，詳見各縣市政府公告' },
      { text: '南科周遭目前租金年漲幅達 8-10%，新市安居可望緩解科技新貴租屋壓力，但仍需注意 670 戶遠不及南科 8 萬名從業人員的租屋需求' },
    ],
    stats: [
      { label: '新市安居', value: '670 戶' },
      { label: '套房租金', value: '$5,000起' },
      { label: '預計入住', value: '2027 年初' },
    ],
  },
  {
    icon: MapPin,
    title: '台北市社宅萬華／北投釋出 — 最長租期 12 年',
    subtitle: '2026/5 最新公告｜社會住宅長期安居方案',
    items: [
      { text: '台北市都發局 2026/5/20 公告：萬華區、北投區社會住宅新批次開放申請，首度推出「長期安居方案」，租期最長可達 12 年（原社宅標準租期 3+3 年），大幅提升居住穩定性', highlight: true },
      { text: '萬華區社宅位於青年公園周邊，鄰近捷運龍山寺站，套房約 10 坪月租 $8,000 起、一房約 14 坪 $10,500 起；北投區社宅近捷運北投站，套房約 12 坪月租 $9,000 起，周邊生活機能完整', highlight: true },
      { text: '長期安居方案申請資格：家庭年所得低於北市家庭平均所得 50%（約 $78 萬）且無自有住宅，35 歲以下青年、新婚夫婦、育有未成年子女家庭優先。長期租約期間租金漲幅受《租賃條例》保護，年漲幅不得超過 CPI+1.5%' },
      { text: '台北市社宅整體進度：2026 年目標累計 45,000 戶（含新建 + 包租代管），目前已完工 33,000 戶，萬華/北投釋出為今年度最大批次，共約 800 戶' },
    ],
    stats: [
      { label: '萬華+北投', value: '~800 戶' },
      { label: '最長租期', value: '12 年' },
      { label: '套房租金', value: '$8,000起' },
    ],
  },
  {
    icon: MapPin,
    title: '土城員和2號社宅 — 5月完工招租',
    subtitle: '2026/5 完工｜Q2 社宅潮持續',
    items: [
      { text: '新北市土城員和青年社會住宅 2 號基地 2026 年 5 月完工，即日起開放申請。位於土城區員和路，鄰近捷運板南線土城站（步行 8 分鐘），交通便利', highlight: true },
      { text: '共 300 戶，房型涵蓋套房（約 10 坪/$5,500 起）、一房（約 14 坪/$7,500 起）、二房（約 20 坪/$10,500 起），另設有 20 戶無障礙房型' },
      { text: '土城區近年因頂埔科技園區（鴻海總部 + Google 台灣研發中心）擴張，租屋需求攀升。周邊套房月租行情 $9,000-$13,000，社宅租金僅市價 50-60%，可顯著減輕就業青年負擔' },
      { text: '此為 Q2 全台社宅潮的一環，連同新市安居（670 戶）、板橋、中壢、北屯、鳳山等多處新建社宅，Q2 總招租量預估逾 1,500 戶' },
    ],
    stats: [
      { label: '土城員和', value: '300 戶' },
      { label: '套房租金', value: '$5,500起' },
      { label: '捷運土城站', value: '步行 8 分' },
    ],
  },
  {
    icon: AlertTriangle,
    title: '財訊深度調查 — 社宅 13 萬→4 萬大縮水真相',
    subtitle: '2026-05 財訊雙週刊｜新建社宅政策轉彎的政經分析',
    items: [
      { text: '財訊雙週刊 2026/5 深度調查揭露：行政院將原定 8 年新建 13 萬戶社宅目標腰斬至 4 萬戶的背後，涉及土地取得困難、營建成本飆升（2020-2026 年累積上漲 35%）、地方政府配合意願低落三大結構性因素', highlight: true },
      { text: '關鍵數據對比：原計畫每年新建 1.6 萬戶 → 修正後每年僅 5,000 戶，缺口 1.1 萬戶/年由包租代管填補。然包租代管每年退場率達 15-20%（因房東漲租或收回自住），實際淨增僅約 8,000-9,000 戶/年，總供給仍年短缺 2,000-3,000 戶', highlight: true },
      { text: '監察院同步調查報告指出：中央對地方社宅興建補助每戶上限 150 萬元，但六都實際興建成本每戶 200-280 萬元，地方須自行吸收差額，導致「愈蓋愈虧」的惡性循環' },
      { text: '民團批評：社宅政策從「居住正義」退守為「數字遊戲」，包租代管品質良莠不齊（國家住都中心 5/19 假業者警示），租客權益保障遠不如新建社宅的長期穩定租約' },
    ],
  },
  {
    icon: MapPin,
    title: '東引社宅 — 離島首座社會住宅',
    subtitle: '2026-05 最新｜連江縣東引鄉',
    items: [
      { text: '連江縣東引鄉將興建全台離島首座社會住宅，為國軍官兵及偏鄉居民提供穩定居所。此案打破過去社宅僅限本島興建的框架，象徵居住正義延伸至離島偏鄉', highlight: true },
      { text: '東引社宅規模約 50 戶，主要服務對象為東引島駐軍、海巡人員及其家屬。因島上民間租屋供給極度有限（全島僅約 200 戶民宅），官兵長期面臨租屋難題', highlight: true },
      { text: '此案由連江縣政府與國防部合作推動，採「軍民共居」模式。東引案若成功，金門、馬祖、澎湖等離島將跟進，開啟台灣社宅政策的離島新篇章' },
    ],
    stats: [
      { label: '東引社宅', value: '~50 戶' },
      { label: '服務對象', value: '官兵+居民' },
      { label: '離島首例', value: '創新模式' },
    ],
  },
  {
    icon: TrendingUp,
    title: '荷蘭社宅國際比較 — 台灣社宅的學習標竿',
    subtitle: '2026-05 國際比較｜荷蘭社會住宅占比 34% vs 台灣僅 2.4%',
    items: [
      { text: '荷蘭社會住宅占全國住宅總量 34%（約 240 萬戶），為全球最高比例。台灣目前社宅總量僅 23.6 萬戶，占全國住宅總量約 2.4%，差距懸殊', highlight: true },
      { text: '荷蘭模式核心要素：①住宅法人（Housing Association）為非營利專業組織，獨立於政府運作但受公共監管 ②循環基金機制：租金收入 reinvest 回社宅興建，不依賴政府年度預算撥補 ③混居政策：社宅與市價住宅混合興建，避免社會標籤化', highlight: true },
      { text: '台灣可借鏡處：①社宅財源從「政府預算」轉向「循環基金」，減少政治干預（荷蘭住宅法人自有資金比率達 70%）②推動混居設計，打破「社宅=貧民窟」刻板印象（台北市已有萬華青年社宅成功案例）③建立非營利住宅法人制度，分散政府直接興建的財務壓力' },
      { text: '台灣社宅政策願景：內政部 2026 年提出 2050 年社宅占比目標 10%（約 90 萬戶），以目前每年淨增約 2 萬戶的速度計算需要 33 年，荷蘭經驗顯示制度改革（循環基金+住宅法人）為加速關鍵' },
    ],
    stats: [
      { label: '荷蘭社宅占比', value: '34%' },
      { label: '台灣社宅占比', value: '2.4%' },
      { label: '台灣2050目標', value: '10%' },
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
        dateSource="資料更新：2026-05-23｜來源：內政部、財政部、立法院公報、國家住都中心"
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
