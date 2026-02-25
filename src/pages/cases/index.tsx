import { Box, Container, Typography, Paper, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; // MUIのアイコンを追加

export default function Cases() {
  return (
    <>
      {/* タイトルとディスクリプションを「導入事例」用に修正！ */}
      <title>導入事例 | WorkBase（ワークベース）</title>
      <meta
        name="description"
        content="WorkBaseを導入して業務効率化を実現した企業の業界別ケーススタディや、お役立ち資料をご紹介します。"
      />

      {/* 画面中央寄せのコンテナ */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          導入事例・リソース
        </Typography>

        {/* 企業ロゴの視認計測 */}
        <Box
          component="section"
          data-gtm-visibility="case_logos"
          sx={{ mt: 6 }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            業界別ケーススタディ
          </Typography>
          <Box sx={{ fontSize: '3rem', letterSpacing: '1rem' }}>🏢 🏦 🏥</Box>
        </Box>

        {/* PDFダウンロード計測（高確度リード予兆） */}
        <Paper
          component="section"
          elevation={0} // 影を消してフラットに
          sx={{
            mt: 8,
            p: 4,
            bgcolor: '#e0f2fe', // 元の薄いブルーを維持
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            お役立ち資料
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            具体的な導入ステップや費用対効果をまとめた資料を無料でダウンロードいただけます。
          </Typography>

          {/* テキストリンクから、クリックしやすい大きなボタンに変更 */}
          <Button
            component="a"
            href="/whitepaper.pdf"
            download
            data-gtm-click="file_download_whitepaper"
            variant="contained"
            disableElevation
            startIcon={<DownloadIcon />} // ダウンロードアイコンを付与
            sx={{
              bgcolor: '#0284c7',
              fontWeight: 'bold',
              py: 1.5,
              px: 3,
              '&:hover': { bgcolor: '#0369a1' }, // ホバー時は少し濃くする
            }}
          >
            導入検討ガイド（PDF）をダウンロード
          </Button>
        </Paper>
      </Container>
    </>
  );
}
