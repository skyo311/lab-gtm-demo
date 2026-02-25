import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
  return (
    <Box>
      {/* ヒーローエリア */}
      <Box
        sx={{ py: 10, px: 2, textAlign: 'center', backgroundColor: '#f8f9fa' }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            data-gtm-pageview="home_lp"
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // スマホとPCで文字サイズを可変
          >
            現場も、経営も、迷わないタスク管理。
          </Typography>
        </Container>
      </Box>

      {/* 機能ハイライト */}
      <Box sx={{ py: 8, px: 2 }} id="features">
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            直感的なタスク管理
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ドラッグ＆ドロップで完結するUI。
          </Typography>
        </Container>
      </Box>

      {/* 料金プラン */}
      <Box
        sx={{ py: 8, px: 2, backgroundColor: '#eef2f5' }}
        id="pricing"
        data-gtm-visibility="pricing_table"
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            料金プラン
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              justifyContent: 'center',
            }}
          >
            <Card sx={{ flex: 1, textAlign: 'center', py: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Standard
                </Typography>
                <Typography variant="h4" fontWeight="black">
                  0円
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1, textAlign: 'center', py: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Enterprise
                </Typography>
                <Typography variant="h4" fontWeight="black">
                  要相談
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 8, px: 2 }} id="faq">
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            よくある質問
          </Typography>
          <Accordion
            data-gtm-click="faq_toggle_1"
            disableGutters
            variant="outlined"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                無料プランに期間制限はありますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#fafafa' }}>
              <Typography color="text.secondary">
                ありません。ずっと無料でご利用いただけます。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </Box>
  );
}
