import { Container, Typography, Box, Paper } from '@mui/material';

export default function Product() {
  return (
    <>
      <title>機能詳細 | WorkBase（ワークベース）</title>
      <meta
        name="description"
        content="WorkBaseの機能詳細。AIタスク自動生成や外部ツール連携など、業務効率化を支援する主要な機能をご紹介します。"
      />

      {/* GTMのカスタムデータ属性は、Container（実体はdiv）にそのまま付与できます。
        これで「product_details」のページビュー計測もバッチリ機能します。
      */}
      <Container
        maxWidth="md"
        sx={{ py: 8 }}
        data-gtm-pageview="product_details"
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          機能詳細
        </Typography>

        {/* 機能ブロックを縦に並べるラッパー */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* 機能1: AIタスク自動生成 */}
          <Paper
            elevation={0}
            sx={{ p: 4, bgcolor: 'grey.50', borderRadius: 2 }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              AIタスク自動生成
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              過去のデータから最適なWBSを生成します。
            </Typography>
          </Paper>

          {/* 機能2: 外部ツール連携 */}
          <Paper
            elevation={0}
            sx={{ p: 4, bgcolor: 'grey.50', borderRadius: 2 }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              外部ツール連携
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              SlackやTeamsとシームレスに連携可能です。
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
