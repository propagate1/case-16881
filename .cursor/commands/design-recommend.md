# デザイン推奨コマンド

デザインストックからリファレンスコンポーネントを検索し、ターゲットに統合するワークフローを実行します。

## 使用方法

```
/design-recommend [ターゲットコンポーネント]
```

## 使用例

```
/design-recommend HomeHero
/design-recommend app/components/home/HomeFeatures.tsx
/design-recommend AboutMission
/design-recommend ContactForm
```

## ワークフロー

1. **ワークフローファイル読み込み**: `memories/design_recommend_workflow.yaml`
2. **インデックス取得**: `curl -o scripts/_index.json "https://gist.githubusercontent.com/propagate1/5567ced2819730057503417bd35ee7cc/raw/_index.json"`
3. **ターゲット分析**: ターゲットコンポーネントを読み込み、構造を把握
4. **候補選出**: インデックスから5-6件のマッチするコンポーネントを選出
5. **ユーザー対話**: 上位2件を提示し、質問を通じて最終1件を決定
6. **リファレンス取得**: `npx shadcn@latest add "https://gist.githubusercontent.com/propagate1/5567ced2819730057503417bd35ee7cc/raw/{id}.json"` ※idは小文字（例: about3000, feature100）
7. **統合実装**: プロジェクトスタイルを維持しながらリファレンスデザインを適用

## 重要なルール

- 必ず最初に `memories/design_recommend_workflow.yaml` を読み込む
- ユーザー対話（Step 5）を省略しない
- ターゲットの既存コンテンツを保持する
- プロジェクト全体のビジュアルスタイルの一貫性を維持する
- フォント、カラー、余白はワークスペースルールに従う

## 統合の原則

### 保持（Preserve）
- 既存のテキスト・画像パス
- プロジェクトのカラースキーム
- ワークスペースルールのフォントスケール

### 採用（Adopt）
- リファレンスのレイアウトパターン
- 余白・間隔の比率
- 視覚的階層構造

### 適応（Adapt）
- 色をプロジェクトのパレットに変換
- フォントサイズをルールに準拠
- ボタンスタイルを共通化

## 禁止事項

- ❌ 単純なコンテンツ入れ替え
- ❌ プロジェクトのカラースキームを無視
- ❌ ワークスペースルールのフォントスケールを無視
- ❌ global.cssの編集
- ❌ 新しいCSSファイルの作成
