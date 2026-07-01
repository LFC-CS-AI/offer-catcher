const skillOptions = [
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "React",
  "Vue",
  "Node.js",
  "Express",
  "Java",
  "Spring Boot",
  "Go",
  "Python",
  "C++",
  "数据结构与算法",
  "MySQL",
  "Redis",
  "MongoDB",
  "PostgreSQL",
  "RESTful API",
  "HTTP/TCP",
  "微服务",
  "消息队列",
  "Linux",
  "Shell",
  "Git",
  "Docker",
  "Kubernetes",
  "Nginx",
  "CI/CD",
  "云服务",
  "监控告警",
  "自动化测试",
  "接口测试",
  "测试用例",
  "Selenium/Playwright",
  "Pytest",
  "JMeter",
  "单元测试",
  "性能优化",
  "机器学习",
  "深度学习",
  "PyTorch",
  "TensorFlow",
  "推荐系统",
  "NLP",
  "PRD",
  "需求分析",
  "原型设计",
  "用户研究",
  "数据分析",
  "Figma/Axure"
];

const cityOptions = `北京 上海 天津 重庆 石家庄 唐山 秦皇岛 邯郸 邢台 保定 张家口 承德 沧州 廊坊 衡水 太原 大同 阳泉 长治 晋城 朔州 晋中 运城 忻州 临汾 吕梁 呼和浩特 包头 乌海 赤峰 通辽 鄂尔多斯 呼伦贝尔 巴彦淖尔 乌兰察布 兴安盟 锡林郭勒盟 阿拉善盟 沈阳 大连 鞍山 抚顺 本溪 丹东 锦州 营口 阜新 辽阳 盘锦 铁岭 朝阳 葫芦岛 长春 吉林 四平 辽源 通化 白山 松原 白城 延边 哈尔滨 齐齐哈尔 鸡西 鹤岗 双鸭山 大庆 伊春 佳木斯 七台河 牡丹江 黑河 绥化 大兴安岭 南京 无锡 徐州 常州 苏州 南通 连云港 淮安 盐城 扬州 镇江 泰州 宿迁 杭州 宁波 温州 嘉兴 湖州 绍兴 金华 衢州 舟山 台州 丽水 合肥 芜湖 蚌埠 淮南 马鞍山 淮北 铜陵 安庆 黄山 滁州 阜阳 宿州 六安 亳州 池州 宣城 福州 厦门 莆田 三明 泉州 漳州 南平 龙岩 宁德 南昌 景德镇 萍乡 九江 新余 鹰潭 赣州 吉安 宜春 抚州 上饶 济南 青岛 淄博 枣庄 东营 烟台 潍坊 济宁 泰安 威海 日照 临沂 德州 聊城 滨州 菏泽 郑州 开封 洛阳 平顶山 安阳 鹤壁 新乡 焦作 濮阳 许昌 漯河 三门峡 南阳 商丘 信阳 周口 驻马店 济源 武汉 黄石 十堰 宜昌 襄阳 鄂州 荆门 孝感 荆州 黄冈 咸宁 随州 恩施 仙桃 潜江 天门 神农架 长沙 株洲 湘潭 衡阳 邵阳 岳阳 常德 张家界 益阳 郴州 永州 怀化 娄底 湘西 广州 韶关 深圳 珠海 汕头 佛山 江门 湛江 茂名 肇庆 惠州 梅州 汕尾 河源 阳江 清远 东莞 中山 潮州 揭阳 云浮 南宁 柳州 桂林 梧州 北海 防城港 钦州 贵港 玉林 百色 贺州 河池 来宾 崇左 海口 三亚 三沙 儋州 成都 自贡 攀枝花 泸州 德阳 绵阳 广元 遂宁 内江 乐山 南充 眉山 宜宾 广安 达州 雅安 巴中 资阳 阿坝 甘孜 凉山 贵阳 六盘水 遵义 安顺 毕节 铜仁 黔西南 黔东南 黔南 昆明 曲靖 玉溪 保山 昭通 丽江 普洱 临沧 楚雄 红河 文山 西双版纳 大理 德宏 怒江 迪庆 拉萨 日喀则 昌都 林芝 山南 那曲 阿里 西安 铜川 宝鸡 咸阳 渭南 延安 汉中 榆林 安康 商洛 兰州 嘉峪关 金昌 白银 天水 武威 张掖 平凉 酒泉 庆阳 定西 陇南 临夏 甘南 西宁 海东 海北 黄南 海南 果洛 玉树 海西 银川 石嘴山 吴忠 固原 中卫 乌鲁木齐 克拉玛依 吐鲁番 哈密 昌吉 博尔塔拉 巴音郭楞 阿克苏 克孜勒苏 喀什 和田 伊犁 塔城 阿勒泰 石河子 阿拉尔 图木舒克 五家渠 北屯 铁门关 双河 可克达拉 昆玉 胡杨河 香港 澳门 台北 新北 桃园 台中 台南 高雄 基隆 新竹 嘉义`.split(/\s+/);

const scaleOptions = ["全部", "0-99人", "100-499人", "500-999人", "1000-9999人", "10000人以上"];

const defaultResume =
  "计算机科学本科，参与校园二手交易平台和课程管理后台开发。熟悉 JavaScript、TypeScript、React、Vue、HTML、CSS，了解组件化开发、路由、状态管理和接口联调。使用 Node.js 和 Express 编写过 RESTful API，接触 MySQL、Redis、Git、Docker。曾带领 4 人小组完成需求拆解、页面开发、上线测试和性能优化，项目累计 1200 名同学使用。";

const stockLeaders = [
  { rank: 1, name: "腾讯控股", ticker: "HK:00700", price: 429.8, currency: "HKD", change: "+2.29%" },
  { rank: 2, name: "网易", ticker: "NASDAQ:NTES", price: 128.14, currency: "USD", change: "-0.79%" },
  { rank: 3, name: "百度", ticker: "NASDAQ:BIDU", price: 114.29, currency: "USD", change: "+1.88%" },
  { rank: 4, name: "百度集团-SW", ticker: "HK:09888", price: 109.6, currency: "HKD", change: "+5.08%" },
  { rank: 5, name: "京东集团-SW", ticker: "HK:09618", price: 99.25, currency: "HKD", change: "+0.25%" },
  { rank: 6, name: "阿里巴巴", ticker: "NYSE:BABA", price: 95.98, currency: "USD", change: "+0.49%" },
  { rank: 7, name: "拼多多", ticker: "NASDAQ:PDD", price: 76.28, currency: "USD", change: "-0.34%" },
  { rank: 8, name: "美团-W", ticker: "HK:03690", price: 68.5, currency: "HKD", change: "+1.26%" },
  { rank: 9, name: "快手-W", ticker: "HK:01024", price: 41.6, currency: "HKD", change: "+1.46%" },
  { rank: 10, name: "京东", ticker: "NASDAQ:JD", price: 25.48, currency: "USD", change: "+0.91%" }
];

const stockUpdatedAt = "新浪财经行情快照：2026-07-01，按各自交易币种名义股价排序";

const jobSyncMeta = {
  status: "BOSS公开接口返回环境异常，当前展示本地缓存样本",
  source: "BOSS直聘公开搜索接口 /wapi/zpgeek/search/joblist.json",
  updatedAt: "2026-07-01 01:20"
};

const IMPORTED_JOBS_KEY = "offerCatcher.importedJobs.v1";
const IMPORTED_JOBS_TIME_KEY = "offerCatcher.importedJobs.updatedAt";

function req(name, aliases = [], detail = "") {
  return { name, aliases: [name, ...aliases], detail };
}

const jobs = [
  {
    id: "frontend-campus",
    title: "前端开发工程师",
    company: "字节跳动",
    city: "北京",
    scale: "10000人以上",
    type: "社招",
    direction: "前端",
    salary: "25-50K",
    deadline: "BOSS同步样本",
    tags: ["Web 应用", "组件化", "中大型团队"],
    summary: "负责业务 Web 产品页面开发、组件沉淀、性能优化和体验改进。",
    must: [
      req("JavaScript", ["JS"], "掌握 JavaScript 基础与异步编程"),
      req("HTML/CSS", ["HTML", "CSS"], "能完成响应式页面与样式还原"),
      req("React/Vue", ["React", "Vue"], "至少熟悉一种主流前端框架"),
      req("TypeScript", ["TS"], "能使用类型系统提升代码质量"),
      req("HTTP/TCP", ["HTTP", "TCP", "网络协议"], "理解浏览器网络与接口联调"),
      req("Git", ["版本管理"], "具备协作开发经验")
    ],
    bonus: [
      req("性能优化", ["首屏优化", "加载优化"]),
      req("单元测试", ["Jest", "Vitest"]),
      req("Node.js", ["Node"]),
      req("工程化", ["Webpack", "Vite", "构建工具"])
    ]
  },
  {
    id: "backend-java",
    title: "Java 后端开发工程师",
    company: "美团",
    city: "北京",
    scale: "10000人以上",
    type: "社招",
    direction: "后端",
    salary: "25-45K",
    deadline: "BOSS同步样本",
    tags: ["高并发", "业务中台", "交易系统"],
    summary: "参与交易、账户、营销等服务端系统设计、开发和稳定性建设。",
    must: [
      req("Java", ["JVM"]),
      req("Spring Boot", ["Spring", "SpringCloud"]),
      req("MySQL", ["数据库", "SQL"]),
      req("Redis", ["缓存"]),
      req("RESTful API", ["接口设计", "API"]),
      req("Linux", ["命令行"]),
      req("数据结构与算法", ["算法", "数据结构"])
    ],
    bonus: [
      req("微服务", ["分布式"]),
      req("消息队列", ["Kafka", "RocketMQ", "RabbitMQ"]),
      req("Docker", ["容器"]),
      req("Kubernetes", ["K8s"])
    ]
  },
  {
    id: "fullstack-startup",
    title: "全栈开发工程师",
    company: "小红书",
    city: "上海",
    scale: "10000人以上",
    type: "社招",
    direction: "全栈",
    salary: "25-45K",
    deadline: "BOSS同步样本",
    tags: ["社区产品", "前后端协作", "快速迭代"],
    summary: "参与社区产品前端页面、Node 服务和管理后台开发。",
    must: [
      req("React/Vue", ["React", "Vue"]),
      req("Node.js", ["Node"]),
      req("RESTful API", ["接口设计", "API"]),
      req("MySQL", ["数据库", "SQL"]),
      req("Git", ["版本管理"]),
      req("部署经验", ["部署", "上线", "Nginx"])
    ],
    bonus: [
      req("TypeScript", ["TS"]),
      req("Docker", ["容器"]),
      req("Redis", ["缓存"]),
      req("Figma/Axure", ["Figma", "Axure", "原型"])
    ]
  },
  {
    id: "algo-intern",
    title: "推荐算法工程师",
    company: "腾讯",
    city: "深圳",
    scale: "10000人以上",
    type: "社招",
    direction: "算法",
    salary: "30-60K",
    deadline: "BOSS同步样本",
    tags: ["推荐系统", "模型实验", "内容分发"],
    summary: "参与推荐排序、召回、特征处理、离线评估和在线实验分析。",
    must: [
      req("Python", []),
      req("机器学习", ["ML"]),
      req("深度学习", ["DL"]),
      req("数据结构与算法", ["算法", "数据结构"]),
      req("PyTorch/TensorFlow", ["PyTorch", "TensorFlow"]),
      req("SQL", ["MySQL", "数据库"])
    ],
    bonus: [
      req("推荐系统", ["排序模型", "召回"]),
      req("NLP", ["自然语言处理"]),
      req("论文阅读", ["Paper", "英文论文"]),
      req("A/B 测试", ["AB测试", "实验"])
    ]
  },
  {
    id: "test-dev",
    title: "测试开发工程师",
    company: "阿里巴巴",
    city: "杭州",
    scale: "10000人以上",
    type: "社招",
    direction: "测试",
    salary: "20-40K",
    deadline: "BOSS同步样本",
    tags: ["自动化测试", "质量平台", "业务稳定性"],
    summary: "负责 Web/服务端自动化测试、质量工具建设、发布验证和缺陷分析。",
    must: [
      req("测试用例", ["用例设计"]),
      req("接口测试", ["API测试", "Postman"]),
      req("自动化测试", ["测试自动化"]),
      req("Python", []),
      req("Linux", []),
      req("SQL", ["MySQL", "数据库"])
    ],
    bonus: [
      req("Selenium/Playwright", ["Selenium", "Playwright"]),
      req("Pytest", ["pytest"]),
      req("JMeter", ["压测", "性能测试"]),
      req("CI/CD", ["持续集成", "流水线"])
    ]
  },
  {
    id: "devops-campus",
    title: "SRE 运维开发工程师",
    company: "京东",
    city: "北京",
    scale: "10000人以上",
    type: "社招",
    direction: "运维",
    salary: "22-45K",
    deadline: "BOSS同步样本",
    tags: ["云原生", "稳定性", "平台工程"],
    summary: "参与基础设施稳定性、运维自动化、监控告警和发布系统建设。",
    must: [
      req("Linux", []),
      req("Shell", ["Bash"]),
      req("Docker", ["容器"]),
      req("Kubernetes", ["K8s"]),
      req("Nginx", []),
      req("CI/CD", ["持续集成", "流水线"]),
      req("云服务", ["云平台", "阿里云", "腾讯云", "AWS"])
    ],
    bonus: [
      req("监控告警", ["Prometheus", "Grafana"]),
      req("Python/Go", ["Python", "Go"]),
      req("Terraform", ["IaC"]),
      req("网络排障", ["TCP", "DNS", "负载均衡"])
    ]
  },
  {
    id: "pm-ai",
    title: "AI 产品经理",
    company: "百度",
    city: "北京",
    scale: "10000人以上",
    type: "社招",
    direction: "产品经理",
    salary: "25-45K",
    deadline: "BOSS同步样本",
    tags: ["AI 应用", "需求分析", "用户增长"],
    summary: "参与 AI 产品需求洞察、原型验证、版本迭代和核心指标提升。",
    must: [
      req("需求分析", ["需求拆解"]),
      req("PRD", ["需求文档"]),
      req("原型设计", ["原型", "Axure", "Figma"]),
      req("用户研究", ["用户访谈", "调研"]),
      req("数据分析", ["指标", "漏斗"]),
      req("沟通协作", ["跨团队", "项目推进"])
    ],
    bonus: [
      req("SQL", ["数据库"]),
      req("A/B 测试", ["AB测试", "实验"]),
      req("AI 产品", ["大模型", "LLM", "智能体"]),
      req("竞品分析", ["竞品"])
    ]
  },
  {
    id: "backend-go",
    title: "Go 后端开发工程师",
    company: "快手",
    city: "北京",
    scale: "10000人以上",
    type: "社招",
    direction: "后端",
    salary: "30-60K",
    deadline: "BOSS同步样本",
    tags: ["基础架构", "高可用", "分布式"],
    summary: "负责内容平台或基础服务方向的高可用后端服务设计与开发。",
    must: [
      req("Go", ["Golang"]),
      req("MySQL", ["数据库", "SQL"]),
      req("Redis", ["缓存"]),
      req("微服务", ["分布式"]),
      req("消息队列", ["Kafka", "RocketMQ"]),
      req("Linux", []),
      req("数据结构与算法", ["算法", "数据结构"])
    ],
    bonus: [
      req("Kubernetes", ["K8s"]),
      req("监控告警", ["Prometheus", "Grafana"]),
      req("性能优化", ["高并发", "压测"]),
      req("云服务", ["云平台"])
    ]
  }
];

const aliasMap = buildAliasMap();

const state = {
  selectedSkills: new Set(["JavaScript", "TypeScript", "HTML/CSS", "React", "Vue", "Node.js", "MySQL", "Git", "Docker", "RESTful API"]),
  selectedCities: new Set(["北京", "上海", "深圳", "杭州"]),
  selectedScales: new Set(["全部"]),
  selectedJobId: jobs[0].id,
  filter: "all",
  cityQuery: "",
  cityExpanded: false,
  selectBestNextRun: false,
  scoredJobs: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

const fields = {
  name: $("#studentName"),
  major: $("#major"),
  gradYear: $("#gradYear"),
  targetRole: $("#targetRole"),
  resume: $("#resumeText")
};

function buildAliasMap() {
  const map = {
    "HTML/CSS": ["html", "css", "页面还原", "响应式"],
    "JavaScript": ["javascript", "js", "es6"],
    "TypeScript": ["typescript", "ts"],
    "React": ["react"],
    "Vue": ["vue", "vue3"],
    "Node.js": ["node", "node.js"],
    "Go": ["go", "golang"],
    "Spring Boot": ["springboot", "spring boot", "spring"],
    "RESTful API": ["restful", "api", "接口设计", "接口联调"],
    "HTTP/TCP": ["http", "tcp", "网络协议"],
    "MySQL": ["mysql", "sql"],
    "Redis": ["redis", "缓存"],
    "MongoDB": ["mongodb"],
    "PostgreSQL": ["postgresql", "postgres"],
    "Docker": ["docker", "容器"],
    "Kubernetes": ["kubernetes", "k8s"],
    "CI/CD": ["ci/cd", "cicd", "持续集成", "流水线"],
    "Selenium/Playwright": ["selenium", "playwright"],
    "Figma/Axure": ["figma", "axure"],
    "PyTorch/TensorFlow": ["pytorch", "tensorflow"],
    "Python/Go": ["python", "go", "golang"],
    "A/B 测试": ["a/b", "ab测试", "实验"],
    "工程化": ["webpack", "vite", "构建工具", "工程化"],
    "部署经验": ["部署", "上线", "nginx"],
    "沟通协作": ["沟通", "协作", "跨团队", "项目推进"],
    "网络排障": ["dns", "负载均衡", "网络排障"]
  };

  skillOptions.forEach((skill) => {
    map[skill] = unique([skill, ...(map[skill] || [])]);
  });
  return map;
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function unique(list) {
  return Array.from(new Set(list.filter(Boolean)));
}

function getAliases(term) {
  return unique([term, ...(aliasMap[term] || [])]);
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function aliasMatched(text, alias) {
  const raw = String(text || "").toLowerCase();
  const compact = normalize(text);
  const value = String(alias || "").trim();
  const compactValue = normalize(value);
  if (!compactValue) return false;

  if (/^[a-z0-9+#./-]+$/i.test(value)) {
    const pattern = new RegExp(`(^|[^a-z0-9])${escapeRegExp(value.toLowerCase())}([^a-z0-9]|$)`, "i");
    return pattern.test(raw);
  }

  if (/^[a-z0-9+#./-]+$/i.test(compactValue) && compactValue.length <= 6) {
    const pattern = new RegExp(`(^|[^a-z0-9])${escapeRegExp(compactValue)}([^a-z0-9]|$)`, "i");
    return pattern.test(compact);
  }

  return compact.includes(compactValue);
}

function includesTerm(text, term) {
  return getAliases(term).some((alias) => aliasMatched(text, alias));
}

function splitJobBlocks(text) {
  const normalized = String(text || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
  if (!normalized) return [];

  const hardSplit = normalized
    .split(/\n(?:={3,}|-{3,}|_{3,})\n/g)
    .map((block) => block.trim())
    .filter((block) => block.length >= 30);
  if (hardSplit.length > 1) return hardSplit;

  const blankSplit = normalized
    .split(/\n{2,}/g)
    .map((block) => block.trim())
    .filter((block) => block.length >= 30);
  if (blankSplit.length > 1 && blankSplit.every((block) => /工程师|开发|测试|算法|运维|产品|经理|实习/.test(block))) {
    return blankSplit;
  }

  return [normalized];
}

function findLineValue(lines, labels) {
  const labelPattern = labels.join("|");
  const match = lines.join("\n").match(new RegExp(`(?:${labelPattern})\\s*[:：]\\s*([^\\n]+)`));
  return match ? match[1].trim() : "";
}

function detectCompany(text, lines) {
  const explicit = findLineValue(lines, ["公司", "公司名称", "企业", "招聘方"]);
  if (explicit) return explicit.replace(/[｜|].*$/, "").trim();

  const knownCompanies = [
    ...new Set([...jobs.map((job) => job.company), "字节跳动", "腾讯", "阿里巴巴", "阿里", "美团", "百度", "京东", "小红书", "快手", "网易", "拼多多", "蚂蚁集团", "携程", "滴滴", "哔哩哔哩", "B站", "华为", "小米", "金山办公", "得物"])
  ];
  return knownCompanies.find((company) => text.includes(company)) || "待确认公司";
}

function detectTitle(text, lines) {
  const explicit = findLineValue(lines, ["岗位名称", "职位名称", "职位", "岗位"]);
  if (explicit) return explicit.replace(/[｜|].*$/, "").trim();

  const titleLine = lines.find((line) => /工程师|开发|测试|算法|运维|产品经理|前端|后端|全栈|SRE|DevOps/i.test(line) && line.length <= 38);
  if (titleLine) return titleLine.replace(/招聘|急聘|校招|社招|实习/g, "").trim();

  if (/产品经理/.test(text)) return "产品经理";
  if (/测试开发|测开/.test(text)) return "测试开发工程师";
  if (/前端/.test(text)) return "前端开发工程师";
  if (/后端|服务端/.test(text)) return "后端开发工程师";
  if (/全栈/.test(text)) return "全栈开发工程师";
  if (/算法|机器学习|推荐/.test(text)) return "算法工程师";
  if (/运维|SRE|DevOps/i.test(text)) return "运维开发工程师";
  return "计算机岗位";
}

function detectDirection(text, title) {
  const source = `${title}\n${text}`;
  if (/产品经理|PRD|用户研究|需求分析/.test(source)) return "产品经理";
  if (/测试开发|测开|自动化测试|接口测试|质量/.test(source)) return "测试";
  if (/算法|机器学习|深度学习|推荐系统|NLP|PyTorch|TensorFlow/i.test(source)) return "算法";
  if (/运维|SRE|DevOps|Kubernetes|监控告警|云原生/i.test(source)) return "运维";
  if (/全栈|Node\.js.*React|React.*Node\.js|Vue.*Node\.js|Node\.js.*Vue/i.test(source)) return "全栈";
  if (/前端|React|Vue|JavaScript|TypeScript|HTML|CSS/i.test(source)) return "前端";
  if (/后端|服务端|Java|Spring|Go|Golang|微服务|Redis|MySQL/i.test(source)) return "后端";
  return "后端";
}

function detectType(text) {
  if (/实习|intern/i.test(text)) return "实习";
  if (/校招|校园招聘|应届|毕业生|管培/i.test(text)) return "校招";
  return "社招";
}

function detectSalary(text) {
  const salaryMatch = text.match(/(\d{1,3}\s*[-~—–]\s*\d{1,3}\s*K(?:[·xX]\s*\d{1,2}薪?)?|\d{1,3}\s*K\s*[-~—–]\s*\d{1,3}\s*K|\d{2,4}\s*[-~—–]\s*\d{2,4}\s*元\/天|面议)/i);
  return salaryMatch ? salaryMatch[1].replace(/\s+/g, "") : "薪资面议";
}

function detectCity(text) {
  return cityOptions.find((city) => text.includes(city)) || "全国";
}

function detectScale(text) {
  return scaleOptions.find((scale) => scale !== "全部" && text.includes(scale)) || "10000人以上";
}

function sectionAfter(text, startMarkers, stopMarkers = []) {
  const start = startMarkers
    .map((marker) => ({ marker, index: text.search(new RegExp(marker, "i")) }))
    .filter((item) => item.index >= 0)
    .sort((a, b) => a.index - b.index)[0];
  if (!start) return "";

  const from = start.index;
  const stop = stopMarkers
    .map((marker) => {
      const part = text.slice(from + start.marker.length);
      const index = part.search(new RegExp(marker, "i"));
      return index >= 0 ? from + start.marker.length + index : -1;
    })
    .filter((index) => index > from)
    .sort((a, b) => a - b)[0];
  return text.slice(from, stop || undefined);
}

function requirementsFromText(text, detail) {
  const hits = skillOptions
    .filter((skill) => includesTerm(text, skill))
    .slice(0, 8)
    .map((skill) => req(skill, aliasMap[skill] || [], detail));
  return hits;
}

function fallbackRequirements(direction, group) {
  const defaults = {
    前端: {
      must: ["JavaScript", "HTML/CSS", "React", "Vue", "TypeScript", "Git"],
      bonus: ["性能优化", "Node.js", "单元测试", "CI/CD"]
    },
    后端: {
      must: ["Java", "Spring Boot", "MySQL", "Redis", "RESTful API", "Linux"],
      bonus: ["微服务", "消息队列", "Docker", "Kubernetes"]
    },
    全栈: {
      must: ["React", "Vue", "Node.js", "RESTful API", "MySQL", "Git"],
      bonus: ["TypeScript", "Docker", "Redis", "Figma/Axure"]
    },
    算法: {
      must: ["Python", "机器学习", "深度学习", "数据结构与算法", "PyTorch", "TensorFlow"],
      bonus: ["推荐系统", "NLP", "数据分析", "性能优化"]
    },
    测试: {
      must: ["测试用例", "接口测试", "自动化测试", "Python", "Linux", "MySQL"],
      bonus: ["Selenium/Playwright", "Pytest", "JMeter", "CI/CD"]
    },
    运维: {
      must: ["Linux", "Shell", "Docker", "Kubernetes", "Nginx", "CI/CD"],
      bonus: ["监控告警", "Python", "Go", "云服务"]
    },
    产品经理: {
      must: ["需求分析", "PRD", "原型设计", "用户研究", "数据分析", "沟通协作"],
      bonus: ["SQL", "A/B 测试", "AI 产品", "竞品分析"]
    }
  };
  return (defaults[direction]?.[group] || defaults.后端[group])
    .filter((skill) => skillOptions.includes(skill) || aliasMap[skill])
    .map((skill) => req(skill, aliasMap[skill] || [], "由岗位方向补全"));
}

function createJobFromBlock(block, index) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const text = lines.join("\n");
  const title = detectTitle(text, lines);
  const direction = detectDirection(text, title);
  const mustSection = sectionAfter(text, ["任职要求", "岗位要求", "职位要求", "任职资格", "要求"], ["加分", "优先", "Bonus", "Plus", "福利", "薪资"]);
  const bonusSection = sectionAfter(text, ["加分", "优先", "Bonus", "Plus"], ["福利", "薪资", "工作地点"]);
  const must = requirementsFromText(mustSection || text, "来自导入 JD");
  const bonus = requirementsFromText(bonusSection, "来自导入 JD").filter((item) => !must.some((mustItem) => mustItem.name === item.name));

  return {
    id: `imported-${Date.now()}-${index}`,
    imported: true,
    title,
    company: detectCompany(text, lines),
    city: detectCity(text),
    scale: detectScale(text),
    type: detectType(text),
    direction,
    salary: detectSalary(text),
    deadline: "手动导入",
    tags: unique(["导入岗位", direction, detectType(text)]),
    summary: lines.find((line) => /负责|参与|岗位职责|工作内容/.test(line)) || text.slice(0, 58),
    must: must.length ? must : fallbackRequirements(direction, "must"),
    bonus: bonus.length ? bonus : fallbackRequirements(direction, "bonus")
  };
}

function parseImportedJobs(text) {
  return splitJobBlocks(text).map(createJobFromBlock);
}

function importedJobs() {
  return jobs.filter((job) => job.imported);
}

function importedJobKey(job) {
  return normalize(`${job.company}|${job.title}|${job.city}`);
}

function saveImportedJobs() {
  localStorage.setItem(IMPORTED_JOBS_KEY, JSON.stringify(importedJobs()));
  localStorage.setItem(IMPORTED_JOBS_TIME_KEY, new Date().toLocaleString("zh-CN", { hour12: false }));
}

function restoreImportedJobs() {
  try {
    const stored = JSON.parse(localStorage.getItem(IMPORTED_JOBS_KEY) || "[]");
    if (!Array.isArray(stored)) return;
    stored
      .filter((job) => job && job.title && job.company && Array.isArray(job.must) && Array.isArray(job.bonus))
      .forEach((job) => jobs.push({ ...job, imported: true }));
  } catch (error) {
    localStorage.removeItem(IMPORTED_JOBS_KEY);
  }
}

function mergeImportedJobs(nextJobs) {
  const nextKeys = new Set(nextJobs.map(importedJobKey));
  for (let i = jobs.length - 1; i >= 0; i -= 1) {
    if (jobs[i].imported && nextKeys.has(importedJobKey(jobs[i]))) {
      jobs.splice(i, 1);
    }
  }
  nextJobs.forEach((job) => jobs.push(job));
  saveImportedJobs();
}

function handleImportJobs() {
  const input = $("#jobImportText");
  const parsed = parseImportedJobs(input.value);
  if (!parsed.length) {
    toast("没有识别到岗位文本");
    return;
  }

  mergeImportedJobs(parsed);
  state.selectedJobId = parsed[0].id;
  state.filter = "all";
  state.selectBestNextRun = false;
  $$(".filter").forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  input.value = "";
  runMatch();
  toast(`已导入 ${parsed.length} 个岗位`);
}

function clearImportedJobs() {
  const count = importedJobs().length;
  if (!count) return;
  for (let i = jobs.length - 1; i >= 0; i -= 1) {
    if (jobs[i].imported) jobs.splice(i, 1);
  }
  localStorage.removeItem(IMPORTED_JOBS_KEY);
  localStorage.removeItem(IMPORTED_JOBS_TIME_KEY);
  state.selectedJobId = jobs[0].id;
  state.selectBestNextRun = true;
  runMatch();
  toast("已清空导入岗位");
}

function requirementMatched(requirement, profile) {
  const selected = Array.from(profile.skills);
  return requirement.aliases.some((term) => selected.includes(term) || includesTerm(profile.resume, term));
}

function getProfile() {
  const resume = fields.resume.value.trim();
  const autoSkills = skillOptions.filter((skill) => includesTerm(resume, skill));
  return {
    name: fields.name.value.trim() || "同学",
    major: fields.major.value,
    gradYear: fields.gradYear.value,
    targetRole: fields.targetRole.value,
    resume,
    skills: new Set(unique([...state.selectedSkills, ...autoSkills])),
    cities: new Set(state.selectedCities),
    scales: new Set(state.selectedScales)
  };
}

function scoreJob(job, profile) {
  const mustHits = job.must.filter((item) => requirementMatched(item, profile));
  const bonusHits = job.bonus.filter((item) => requirementMatched(item, profile));
  const mustGaps = job.must.filter((item) => !mustHits.includes(item));
  const bonusGaps = job.bonus.filter((item) => !bonusHits.includes(item));
  const mustScore = job.must.length ? Math.round((mustHits.length / job.must.length) * 70) : 0;
  const bonusScore = job.bonus.length ? Math.round((bonusHits.length / job.bonus.length) * 30) : 0;
  const score = clamp(mustScore + bonusScore, 0, 100);
  const cityFit = profile.cities.size === 0 || profile.cities.has(job.city);
  const scaleFit = profile.scales.has("全部") || profile.scales.has(job.scale);
  const roleFit = job.direction === profile.targetRole;

  return {
    ...job,
    score,
    mustScore,
    bonusScore,
    mustHits,
    bonusHits,
    mustGaps,
    bonusGaps,
    cityFit,
    scaleFit,
    roleFit,
    sortScore: score + (roleFit ? 80 : 0) + (scaleFit ? 45 : 0) + (cityFit ? 20 : 0)
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function runMatch(options = {}) {
  const profile = getProfile();
  setRunningState("分析中");
  state.scoredJobs = jobs
    .map((job) => scoreJob(job, profile))
    .sort((a, b) => b.sortScore - a.sortScore || b.score - a.score);

  if (options.selectBest || state.selectBestNextRun || !state.scoredJobs.some((job) => job.id === state.selectedJobId)) {
    state.selectedJobId = state.scoredJobs[0].id;
    state.selectBestNextRun = false;
  }

  renderSkills();
  renderScales();
  renderCities();
  renderStockBoard();
  renderJobSyncNote();
  renderImportState();
  renderAgent(profile);
  renderSummary();
  renderJobs();
  renderDetails(profile);
  setTimeout(() => setRunningState("已完成"), 160);
}

function setRunningState(text) {
  $("#runState").textContent = text;
}

function renderAgent(profile) {
  $("#agentSummary").textContent = `${profile.name} 的简历已解析，正在逐项对比岗位必须满足项和加分项。`;
  const selected = getSelectedJob();
  const steps = [
    ["画像解析", `${profile.major} / ${profile.gradYear}`],
    ["岗位召回", `${state.scoredJobs.length} 个机会`],
    ["需求对比", `必须 ${selected.mustHits.length}/${selected.must.length} · 加分 ${selected.bonusHits.length}/${selected.bonus.length}`]
  ];
  $("#agentSteps").innerHTML = steps
    .map(
      ([title, sub]) => `
        <div class="step done">
          <i data-lucide="circle-check"></i>
          <div><strong>${title}</strong><br><span>${sub}</span></div>
        </div>`
    )
    .join("");
  refreshIcons();
}

function renderSummary() {
  const top = state.scoredJobs[0];
  const strongCount = state.scoredJobs.filter((job) => job.score >= 75).length;
  const selected = getSelectedJob();
  $("#topScore").textContent = `${top.score}%`;
  $("#topJob").textContent = `${top.company} · ${top.title}`;
  $("#strongCount").textContent = strongCount;
  $("#mustCoverage").textContent = `${Math.round((selected.mustHits.length / selected.must.length) * 100)}%`;
  $("#bonusCoverage").textContent = `${Math.round((selected.bonusHits.length / selected.bonus.length) * 100)}%`;
}

function renderStockBoard() {
  $("#stockList").innerHTML = stockLeaders
    .map(
      (item) => `
        <li>
          <span>${item.rank}. ${item.name}</span>
          <strong>${item.price.toFixed(2)} ${item.currency}</strong>
          <em class="${item.change.startsWith("-") ? "down" : "up"}">${item.change}</em>
        </li>`
    )
    .join("");
  $("#stockUpdated").textContent = stockUpdatedAt;
}

function renderJobSyncNote() {
  const count = importedJobs().length;
  const importedAt = localStorage.getItem(IMPORTED_JOBS_TIME_KEY);
  const status = count
    ? `已合并 ${count} 个手动导入岗位，推荐列表按最新导入内容重新匹配`
    : jobSyncMeta.status;
  const updatedAt = count && importedAt ? importedAt : jobSyncMeta.updatedAt;
  $("#jobSyncNote").innerHTML = `
    <i data-lucide="database-zap"></i>
    <span>${escapeHtml(status)}</span>
    <small>${escapeHtml(updatedAt)}</small>`;
  refreshIcons();
}

function renderImportState() {
  const count = importedJobs().length;
  $("#importCount").textContent = `${count} 个导入岗位`;
  $("#clearImportedJobs").disabled = count === 0;
}

function getFilteredJobs() {
  return state.scoredJobs.filter((job) => state.filter === "all" || job.type === state.filter);
}

function renderJobs() {
  const list = $("#jobList");
  const filtered = getFilteredJobs();
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">当前筛选下暂无岗位，试试切换岗位类型。</div>`;
    return;
  }

  list.innerHTML = filtered
    .map(
      (job) => `
      <button class="job-card ${job.id === state.selectedJobId ? "active" : ""}" data-job-id="${job.id}" type="button">
        <div class="job-head">
          <div class="job-title">
            <h3>${escapeHtml(job.title)}</h3>
            <p>${escapeHtml(job.company)} · ${escapeHtml(job.city)} · ${escapeHtml(job.scale)} · ${escapeHtml(job.salary)}</p>
          </div>
          <span class="score-pill">${job.score}</span>
        </div>
        <div class="job-meta">
          <span>${escapeHtml(job.type)}</span>
          <span>${escapeHtml(job.direction)}</span>
          <span>${escapeHtml(job.deadline)}</span>
        </div>
        <div class="match-line">
          <i data-lucide="sparkle"></i>
          <span>必须满足项 ${job.mustHits.length}/${job.must.length}，加分项 ${job.bonusHits.length}/${job.bonus.length}</span>
        </div>
      </button>`
    )
    .join("");

  $$(".job-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedJobId = card.dataset.jobId;
      runMatch();
    });
  });
  refreshIcons();
}

function getSelectedJob() {
  return state.scoredJobs.find((job) => job.id === state.selectedJobId) || state.scoredJobs[0];
}

function renderDetails(profile) {
  const job = getSelectedJob();
  $("#selectedType").textContent = `${job.type} · ${job.city} · ${job.scale} · ${job.deadline}`;
  $("#selectedTitle").textContent = job.title;
  $("#selectedCompany").textContent = `${job.company}｜${job.summary}`;
  $("#selectedScore").textContent = job.score;
  $(".score-ring").style.setProperty("--score", job.score);

  renderRequirementList("#evidenceList", [
    ...job.mustHits.map((item) => ({ ...item, group: "必须满足项" })),
    ...job.bonusHits.map((item) => ({ ...item, group: "加分项" }))
  ], "暂无匹配项。请先补充简历内容或选择相关技能标签。");

  renderRequirementList("#gapList", [
    ...job.mustGaps.map((item) => ({ ...item, group: "必须满足项" })),
    ...job.bonusGaps.map((item) => ({ ...item, group: "加分项" }))
  ], "暂无明显缺失，建议继续补充量化结果。");

  renderBars(job);
  renderKeywords(job);
  renderSuggestions(job, profile);
  refreshIcons();
}

function renderRequirementList(selector, items, emptyText) {
  const target = $(selector);
  if (!items.length) {
    target.innerHTML = `<li>${emptyText}</li>`;
    return;
  }
  target.innerHTML = items
    .map((item) => `<li><strong>${escapeHtml(item.group)}：</strong>${escapeHtml(item.name)}${item.detail ? ` - ${escapeHtml(item.detail)}` : ""}</li>`)
    .join("");
}

function renderBars(job) {
  const rows = [
    ["必须满足项", job.mustScore, 70, `${job.mustHits.length}/${job.must.length}`],
    ["加分项", job.bonusScore, 30, `${job.bonusHits.length}/${job.bonus.length}`]
  ];
  $("#scoreBars").innerHTML = rows
    .map(([label, value, max, count]) => {
      const pct = Math.round((value / max) * 100);
      return `
        <div>
          <div class="bar-label"><span>${label}</span><strong>${count} · ${value}/${max}</strong></div>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
        </div>`;
    })
    .join("");
}

function renderKeywords(job) {
  const rows = [
    ...job.must.map((item) => ({ item, group: "必须", hit: job.mustHits.includes(item) })),
    ...job.bonus.map((item) => ({ item, group: "加分", hit: job.bonusHits.includes(item) }))
  ];
  $("#keywordRow").innerHTML = rows
    .map(({ item, group, hit }) => `<span class="keyword ${hit ? "hit" : "gap"}">${group} · ${item.name}</span>`)
    .join("");
}

function renderSuggestions(job) {
  const missing = [...job.mustGaps, ...job.bonusGaps];
  const suggestions = missing.length
    ? missing.slice(0, 6).map((item) => suggestionFor(job, item))
    : [
        `当前简历已覆盖 ${job.title} 的主要要求，建议把项目结果量化为访问量、响应耗时、缺陷下降率或上线周期。`,
        "把最相关项目放到简历前半部分，并在项目标题中明确岗位关键词。"
      ];
  $("#rewriteList").innerHTML = suggestions.map((item) => `<li>${item}</li>`).join("");
}

function suggestionFor(job, item) {
  const templates = {
    "React/Vue": "补充一个 React 或 Vue 项目，写清组件拆分、状态管理、路由、接口联调和上线结果。",
    "JavaScript": "在项目描述中加入 JavaScript 基础能力证据，例如异步请求、事件处理、模块化或浏览器兼容处理。",
    "HTML/CSS": "补充页面还原、响应式布局、Flex/Grid、移动端适配等具体实现，不要只写“熟悉前端”。",
    "TypeScript": "如果做过 TypeScript，请写出接口类型、泛型、类型收窄或组件 Props 约束；没有经历可补一个小型重构项目。",
    "Node.js": "补充 Node.js 服务端经历，说明路由设计、中间件、鉴权、异常处理和部署方式。",
    "Java": "补充 Java 项目，写清集合、多线程、JVM 或面向对象设计的使用场景。",
    "Spring Boot": "补充 Spring Boot 接口项目，写清 Controller/Service/DAO 分层、配置管理和接口文档。",
    "Go": "补充 Go 服务端项目，写清 Goroutine、Channel、Context 或高并发处理经验。",
    "MySQL": "补充数据库设计细节，如表结构、索引、事务、慢 SQL 优化或分页查询。",
    "Redis": "补充缓存使用场景，如热点数据、验证码、分布式锁或缓存一致性处理。",
    "Linux": "加入 Linux 命令、日志排查、进程端口定位或服务器部署经验。",
    "Docker": "补充 Dockerfile、镜像构建、容器部署或本地开发环境编排经验。",
    "Kubernetes": "补充 K8s 基础对象和发布经验，如 Deployment、Service、Ingress、滚动更新。",
    "自动化测试": "补一个自动化测试项目，写清测试框架、覆盖场景、断言方式和执行结果。",
    "接口测试": "在测试经历中写明接口测试工具、请求参数、断言、环境数据和缺陷发现。",
    "测试用例": "补充用例设计方法，如等价类、边界值、异常路径和回归测试覆盖。",
    "Python": "写清 Python 用在脚本、数据处理、自动化测试或模型实验中的具体产出。",
    "机器学习": "补充机器学习项目，写清特征处理、模型选择、评估指标和实验对比。",
    "PyTorch/TensorFlow": "补充深度学习框架实践，写清数据集、网络结构、训练过程和指标提升。",
    "需求分析": "补充需求分析案例，写清用户痛点、业务目标、方案取舍和验收指标。",
    "PRD": "放入 1 份 PRD 或需求文档经历，说明背景、功能范围、流程图和优先级。",
    "原型设计": "补充原型工具和交互说明，最好附上用户路径、关键页面和评审反馈。",
    "数据分析": "补充指标分析经历，写清数据来源、分析方法、结论和业务动作。"
  };
  return templates[item.name] || `针对“${item.name}”补充一段可验证经历：背景、任务、动作、工具、结果都要写清楚，并尽量量化。`;
}

function renderSkills() {
  const container = $("#skillChips");
  container.innerHTML = "";
  skillOptions.forEach((skill) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip ${state.selectedSkills.has(skill) ? "active" : ""}`;
    btn.textContent = skill;
    btn.addEventListener("click", () => {
      if (state.selectedSkills.has(skill)) {
        state.selectedSkills.delete(skill);
      } else {
        state.selectedSkills.add(skill);
      }
      state.selectBestNextRun = true;
      runMatch();
    });
    container.appendChild(btn);
  });
}

function renderScales() {
  const container = $("#scaleChips");
  container.innerHTML = "";
  scaleOptions.forEach((scale) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip ${state.selectedScales.has(scale) ? "active" : ""}`;
    btn.textContent = scale;
    btn.addEventListener("click", () => {
      if (scale === "全部") {
        state.selectedScales = new Set(["全部"]);
      } else {
        state.selectedScales.delete("全部");
        if (state.selectedScales.has(scale)) {
          state.selectedScales.delete(scale);
        } else {
          state.selectedScales.add(scale);
        }
        if (!state.selectedScales.size) state.selectedScales.add("全部");
      }
      state.selectBestNextRun = true;
      runMatch();
    });
    container.appendChild(btn);
  });
}

function renderCities() {
  const selected = $("#selectedCities");
  selected.innerHTML = state.selectedCities.size
    ? Array.from(state.selectedCities)
        .map((city) => `<button class="chip active removable" data-city="${city}" type="button">${city}<i data-lucide="x"></i></button>`)
        .join("")
    : `<span class="empty-note">未选择时不限制城市</span>`;

  selected.querySelectorAll("[data-city]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedCities.delete(btn.dataset.city);
      state.selectBestNextRun = true;
      runMatch();
    });
  });

  const query = normalize(state.cityQuery);
  const shouldShowOptions = state.cityExpanded || Boolean(query);
  const list = shouldShowOptions ? cityOptions
    .filter((city) => !query || normalize(city).includes(query))
    .slice(0, query ? 80 : 72) : [];

  $("#cityOptions").classList.toggle("collapsed", !shouldShowOptions);
  $("#cityToggle").innerHTML = shouldShowOptions
    ? `<i data-lucide="chevrons-up"></i><span>收起城市列表</span>`
    : `<i data-lucide="chevrons-down"></i><span>展开城市列表</span>`;
  $("#cityOptions").innerHTML = list
    .map((city) => `<button class="option-pill ${state.selectedCities.has(city) ? "active" : ""}" data-city-option="${city}" type="button">${city}</button>`)
    .join("");

  $("#cityOptions").querySelectorAll("[data-city-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const city = btn.dataset.cityOption;
      if (state.selectedCities.has(city)) {
        state.selectedCities.delete(city);
      } else {
        state.selectedCities.add(city);
      }
      state.selectBestNextRun = true;
      runMatch();
    });
  });
  refreshIcons();
}

function exportPlan() {
  const profile = getProfile();
  const job = getSelectedJob();
  const content = [
    "Offer 捕手匹配报告",
    `学生：${profile.name}`,
    `目标岗位：${job.company} - ${job.title}`,
    `初筛通过率：${job.score}%`,
    "",
    "匹配项：",
    ...Array.from($("#evidenceList").querySelectorAll("li")).map((item) => `- ${item.textContent}`),
    "",
    "缺失部分：",
    ...Array.from($("#gapList").querySelectorAll("li")).map((item) => `- ${item.textContent}`),
    "",
    "简历优化建议：",
    ...Array.from($("#rewriteList").querySelectorAll("li")).map((item, index) => `${index + 1}. ${item.textContent}`)
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `offer-catcher-${profile.name}-${job.company}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  toast("匹配报告已导出");
}

async function copyBullets() {
  const text = Array.from($("#rewriteList").querySelectorAll("li"))
    .map((item, index) => `${index + 1}. ${item.textContent}`)
    .join("\n");
  try {
    await navigator.clipboard.writeText(text);
    toast("优化建议已复制");
  } catch (error) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents($("#rewriteList"));
    selection.removeAllRanges();
    selection.addRange(range);
    toast("已选中优化建议，可直接复制");
  }
}

async function handleResumeFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const label = $("#resumeFileLabel");
  label.classList.add("loading");
  $("#fileHint").textContent = `正在识别：${file.name}`;
  try {
    const text = await extractResumeText(file);
    fields.resume.value = text.trim();
    state.selectBestNextRun = true;
    runMatch({ selectBest: true });
    $("#fileHint").textContent = `已导入：${file.name}。可继续在简历内容栏修改后点击重新匹配。`;
    toast("简历已导入");
  } catch (error) {
    $("#fileHint").textContent = error.message || "简历识别失败，请改用 PDF、docx 或 txt。";
    toast("简历识别失败");
  } finally {
    label.classList.remove("loading");
    event.target.value = "";
  }
}

async function extractResumeText(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf") || file.type === "application/pdf") {
    return extractPdfText(await file.arrayBuffer());
  }
  if (name.endsWith(".docx")) {
    return extractDocxText(await file.arrayBuffer());
  }
  if (name.endsWith(".doc")) {
    return extractLegacyDocText(await file.arrayBuffer());
  }
  return file.text();
}

async function extractPdfText(arrayBuffer) {
  const pdfjs = getPdfJs();
  if (!pdfjs) throw new Error("PDF 解析库未加载，请刷新页面后重试。");
  pdfjs.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const pages = [];
  for (let index = 1; index <= pdf.numPages; index += 1) {
    const page = await pdf.getPage(index);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(" "));
  }
  return pages.join("\n");
}

async function extractDocxText(arrayBuffer) {
  const mammothLib = getMammoth();
  if (!mammothLib) throw new Error("Word 解析库未加载，请刷新页面后重试。");
  const result = await mammothLib.extractRawText({ arrayBuffer });
  return result.value;
}

function getPdfJs() {
  return window.pdfjsLib || window["pdfjs-dist/build/pdf"];
}

function getMammoth() {
  return window.mammoth;
}

function markLibraryStatus() {
  document.documentElement.dataset.pdfjsReady = String(Boolean(getPdfJs()));
  document.documentElement.dataset.mammothReady = String(Boolean(getMammoth()));
}

function extractLegacyDocText(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const utf8 = cleanBinaryText(new TextDecoder("utf-8", { fatal: false }).decode(bytes));
  let gb = "";
  try {
    gb = cleanBinaryText(new TextDecoder("gb18030", { fatal: false }).decode(bytes));
  } catch (error) {
    gb = "";
  }
  const chosen = cjkCount(gb) > cjkCount(utf8) ? gb : utf8;
  if (chosen.length < 40) {
    throw new Error("旧版 .doc 识别效果有限，建议另存为 .docx 或 PDF 后导入。");
  }
  return chosen;
}

function cleanBinaryText(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/[^\S\r\n]+/g, " ")
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9，。；：、（）()\-+.#/ \r\n]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cjkCount(text) {
  return (text.match(/[\u4e00-\u9fa5]/g) || []).length;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindEvents() {
  [fields.name, fields.major, fields.gradYear, fields.targetRole].forEach((field) => {
    field.addEventListener("input", () => runMatch({ selectBest: field === fields.targetRole }));
  });

  $("#analyzeNow").addEventListener("click", () => runMatch({ selectBest: true }));
  $("#exportPlan").addEventListener("click", exportPlan);
  $("#copyBullets").addEventListener("click", copyBullets);
  $("#resumeFile").addEventListener("change", handleResumeFile);
  $("#importJobs").addEventListener("click", handleImportJobs);
  $("#clearImportedJobs").addEventListener("click", clearImportedJobs);
  $("#citySearch").addEventListener("input", (event) => {
    state.cityQuery = event.target.value;
    if (state.cityQuery.trim()) state.cityExpanded = true;
    renderCities();
  });
  $("#cityToggle").addEventListener("click", () => {
    state.cityExpanded = !state.cityExpanded;
    renderCities();
  });

  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter").forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      state.filter = btn.dataset.filter;
      renderJobs();
    });
  });
}

restoreImportedJobs();
bindEvents();
renderSkills();
renderScales();
renderCities();
renderStockBoard();
renderJobSyncNote();
fields.resume.value = defaultResume;
markLibraryStatus();
runMatch({ selectBest: true });
