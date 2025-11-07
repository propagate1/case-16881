# Form Implementation

お問い合わせフォーム実装ワークフローを実行します（Universal Form API）。

## Context Files

- `memories/form_workflow.yaml`
- `.cursor/rules/workflows.md` （Contact Form Implementation Workflow セクション）
- `FORM実装/FORMREADME.md`
- `FORM実装/FORMTODO.md`

## Instructions

**🚨 重要: このコマンドファイルは指示のみです。詳細なワークフロー（全5ステップ）は yaml ファイルに記載されています。**

1. **🚨 CRITICAL: 必ず以下のファイルを読み込む（読まずに実行することは禁止）:**
   - `memories/form_workflow.yaml` （詳細ワークフロー・613行・本体）
   - `.cursor/rules/workflows.md` の Contact Form Implementation Workflow セクション（重要なルール）
   - `FORM実装/FORMREADME.md` （Universal Form API の仕様）
2. **yaml ファイルを読み込んでから、5つのステップを順番に実行し、絶対にスキップしない**

## Critical Rules

### Information Collection
1. **about.yaml から情報を収集（優先）:**
   - site.name → site_id, site_name
   - contact_defaults.email → admin_email
   - vercel.json の BASE_URL → productionDomain
   - pages[id:contact].fields → form fields

2. **about.yaml がない場合:**
   - ユーザーに対話的に確認
   - サイトID、会社名、メールアドレス、フィールド定義

### JSON Generation
- 管理画面登録用のJSONを生成
- site_id: 英小文字・数字・ハイフンのみ
- productionDomain: https:// を含む完全なURL（vercel.json から取得）
- fields: 各フィールドの name, label, type, required

### Component Generation
- **app/contact/page.tsx を write ツールで自動作成**
- "use client" ディレクティブ必須
- FormHandler.init() の第1引数に site_id を設定
- フォームの id 属性は "contactForm"

### Security Measures (🚨 MANDATORY)
**All generated forms MUST include:**
- ✅ **maxLength attribute** (文字数制限)
- ✅ **pattern attribute** (危険な文字制限: `[^\<\>\&\"\']+"`)
- ✅ **escapeHtml() function** (XSS対策)
- ✅ **sanitizeInput() function** (HTMLタグ除去)
- ✅ **validateForm() function** (送信前バリデーション)

**Never skip security implementation.**

### Validation Generation
- required: true のフィールドに対して必須チェックを生成
- メールアドレス形式チェック
- すべてのバリデーションを validateForm() に実装

## Default Fields

標準的なお問い合わせフォームのデフォルトフィールド:
- name (お名前) - required: true
- email (メールアドレス) - required: true
- company (会社名) - required: false
- phone (電話番号) - required: false
- message (お問い合わせ内容) - required: true, type: textarea

## Integration

- productionDomain: vercel.json の BASE_URL と統一
- admin_email: about.yaml の contact_defaults.email
- site_name: about.yaml の site.name

## Execution Example

**User:** `/form-implement`

**AI Action:**
```
[1/5] サイト情報を収集します...
  → about.yaml から情報を抽出
  → site_id: "mediaproof"
  → site_name: "株式会社メディアプルーフ"
  → admin_email: "rinnari777@gmail.com"
  → productionDomain: "https://www.example.jp"

[2/5] 管理画面登録用JSONを生成します...
  ✅ JSON生成完了（管理画面にペーストしてください）

[3/5] Next.jsコンポーネントを生成します...
  ✅ app/contact/page.tsx を作成しました

[4/5] セキュリティ対策を確認します...
  ✅ すべてのセキュリティ対策が実装されています

[5/5] 完了報告とテスト手順を提示します...
  ✅ お問い合わせフォームの実装が完了しました！
```

## Next Steps

1. 管理画面でJSON登録
2. ローカルでテスト送信
3. データ確認
4. 本番環境展開

