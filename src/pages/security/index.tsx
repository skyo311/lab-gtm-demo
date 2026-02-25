import { Container, Typography, Paper } from '@mui/material';

export default function Security() {
  return (
    <>
      <title>セキュリティ基準・SLA | WorkBase（ワークベース）</title>
      <meta
        name="description"
        content="WorkBaseのセキュリティ基準およびSLA（サービス品質保証）について。ISO27001取得済み、月間稼働率99.99%を保証する堅牢な体制をご紹介します。"
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* 滞在時間（熟読度）を計測するタイマートリガー用の属性はそのままキープ */}
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          gutterBottom
          data-gtm-timer="security_reading"
        >
          セキュリティ基準・SLA
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontSize: '1.1rem' }}
        >
          ISO27001取得済み。月間稼働率99.99%を保証します。
        </Typography>

        {/* 長文の規約や仕様書が入るエリアは、薄い枠線付きのPaperで読みやすく */}
        <Paper
          elevation={0}
          sx={{
            minHeight: '800px', // デモ用に高さを確保（実務ではコンテンツ量に合わせるため消してOKです）
            bgcolor: 'grey.50',
            p: { xs: 3, md: 5 }, // スマホは余白3、PCは余白5と可変にする
            mt: 4,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.8 }}
          >
            {/* 長文のセキュリティ要件ダミー */}
            詳細なデータ暗号化方式やバックアップ体制について...
            <br />
            <br />
            （※実際のページでは、ここにAWSの構成図やWAFの導入状況、アクセス制御の仕様などが記載されます。）
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
