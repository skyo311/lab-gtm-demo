import { Container, Typography, Box, Paper } from '@mui/material';

export default function Product() {
  return (
    <>
      <title>プロダクト | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="プロダクトのディスクリプションが入ります。"
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          プロダクト
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
              ① タスク自動生成
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
              ② 外部ツール連携
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
