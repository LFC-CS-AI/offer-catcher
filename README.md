# Offer 捕手

计算机学生求职匹配智能体 Demo。打开 `index.html` 即可运行，也可以用任意静态托管平台部署。

## 本地运行

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 交付物

- Demo 页面：`index.html`
- 样式：`styles.css`
- 匹配逻辑：`app.js`
- 主视觉资产：`assets/offer-catcher-hero.png`
- 本地解析库：`assets/vendor/pdf.min.js`、`assets/vendor/mammoth.browser.min.js`
- 方案说明：`docs/方案说明.md`
- PDF 方案说明：`output/pdf/offer-catcher-solution.pdf`

## 当前功能

- 求职目标：前端、后端、全栈、算法、测试、运维、产品经理
- 专业：教育部本科专业目录中的计算机类专业
- 每日焦点：互联网公司股价前十排行榜
- 偏好城市：中国城市多选，默认折叠，可搜索或展开选择
- 公司规模：全部、0-99人、100-499人、500-999人、1000-9999人、10000人以上
- 简历导入：PDF、Word docx/doc、txt、md
- 岗位推荐：互联网公司技术岗样本，并显示 BOSS 公开同步状态
- 岗位更新：支持粘贴官网/BOSS/牛客等岗位详情文本，自动解析为岗位并参与匹配
- 匹配诊断：匹配项、缺失部分、初筛通过率、简历优化建议

## 部署建议

这是纯静态项目，可以直接部署到 Vercel、Netlify、GitHub Pages、Cloudflare Pages，根目录选择当前文件夹即可。
