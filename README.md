# CSR-RAP Business Copilot v1.0

**CSR-RAP AI商业副驾驶**是一款面向香港、深圳及粤港澳大湾区中小企业老板、创业者和管理者的简体中文企业诊断 Web App。

在线演示：[https://csr-rap-business-copilot.leelab.chatgpt.site](https://csr-rap-business-copilot.leelab.chatgpt.site)

> 本项目中的 CSR 指复杂系统 CSR 理论及其商业应用，不是 Corporate Social Responsibility。

## 核心模型

项目采用商业三性框架：

```text
B = R × A × P
```

- **R — 商业共性（Regularity）**：客户价值、需求、性价比、获客、信任和商业模式。
- **A — 行业特性（Application / Industry）**：增长、市场空间、竞争、壁垒、政策风险和规模化潜力。
- **P — 企业个性（Personality）**：团队、资源、产品、渠道、执行、战略聚焦和竞争优势。

第一代 MVP 使用透明、可解释的规则引擎，不使用未经验证的复杂数学模型。

## 主要功能

- 渐进式企业资料与经营痛点采集
- 31 道 R／A／P 五级量表诊断题
- R、A、P 维度评分与企业健康指数
- 最低约束维度识别
- Top 3 风险与 Top 3 优先行动
- 首个 AI 员工推荐
- 30／60／90 天行动计划
- 一页式 Business Dashboard
- 企业数字画像及历史诊断记录
- 基于企业画像的中文 AI 商业副驾驶
- 示例企业演示模式，与真实数据明确区分
- CSR-RAP 专业咨询申请表
- 桌面端和手机端响应式界面

## 评分规则

每个维度的五级答案转换为 0–100 分：

```text
R Score = R 题目归一化得分
A Score = A 题目归一化得分
P Score = P 题目归一化得分

Health Score = 0.35R + 0.30A + 0.35P
Constraint Score = min(R, A, P)
```

评分区间：

- 80–100：优势区
- 60–79：改善区
- 40–59：风险区
- 0–39：警戒区

## 技术栈

- React 19
- Next.js 16 / Vinext
- TypeScript
- Tailwind CSS 4
- Cloudflare Workers
- Cloudflare D1
- Drizzle ORM
- OpenAI Sites 部署结构

## 本地开发

### 环境要求

- Node.js 22.13 或更高版本
- npm

### 安装与启动

```bash
npm ci
npm run dev
```

### 质量检查

```bash
npm run lint
npm run build
npm test
```

### 数据库迁移

数据库结构位于 `db/schema.ts`，迁移文件位于 `drizzle/`。

```bash
npm run db:generate
```

在 OpenAI Sites 上部署时，D1 逻辑绑定名为 `DB`。其他托管环境需要自行配置兼容的 Cloudflare D1 绑定。

## 主要目录

```text
app/
  api/diagnoses/     诊断记录 API
  page.tsx           主要产品界面与交互
  globals.css        视觉与响应式样式
db/                  数据库模型
drizzle/             SQL 迁移
public/              静态资源
scripts/             构建与验证脚本
tests/               自动化检查
worker/              Cloudflare Worker 入口
```

## 数据与隐私

- 仅收集完成企业诊断所需的最少数据。
- 请勿输入商业秘密、身份证号码、银行卡资料、医疗资料或其他不必要的敏感信息。
- 本 MVP 不收集银行卡、信用卡或支付密码，不执行任何支付或金融交易。
- 示例企业数据不会覆盖真实企业诊断数据。

## 免责声明

诊断结果基于用户提供的信息和 CSR-RAP 规则引擎生成，仅供经营分析与决策参考，不构成法律、审计、税务、投资、融资或财务建议，也不保证特定经营结果。

## 项目状态

当前版本为第一代公开演示 MVP。后续路线可包括账户权限、团队协作、行业题库、真实大模型服务、咨询线索管理、动态预测及情境模拟。

## 知识产权

Copyright © 2026 Yi-Kuen Lee / CSR-RAP Project. All rights reserved.

本仓库公开用于产品演示、技术交流和合作评估。除非版权持有人另行书面授权，不授予复制、修改、再发布、商业化或创建衍生产品的许可。
