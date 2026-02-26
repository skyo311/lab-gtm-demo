import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Button,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import BusinessIcon from '@mui/icons-material/Business';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { COMPANIES } from '../../data/companies';

export default function Cases() {
  const navigate = useNavigate();

  return (
    <>
      <title>導入事例 | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="導入事例のディスクリプションが入ります。"
      />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            導入事例・リソース
          </Typography>

          {/* 1. 導入企業事例セクション（4カラム） */}
          <Box component="section" sx={{ mt: 8 }}>
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 4 }}
            >
              企業別ケーススタディ
            </Typography>

            <Grid container spacing={3}>
              {COMPANIES.map((company) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={company.id}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      borderRadius: 2,
                      borderColor: 'divider',
                      '&:hover': { bgcolor: grey[50] },
                    }}
                  >
                    <CardActionArea
                      onClick={() => navigate(`/cases/${company.id}`)}
                      data-gtm-click={`case_card_${company.name}`} // 個別企業クリック計測
                    >
                      <CardContent sx={{ textAlign: 'center', py: 4 }}>
                        <BusinessIcon
                          sx={{ fontSize: 40, color: 'grey.400', mb: 2 }}
                        />
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          gutterBottom
                        >
                          {company.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {company.body}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 2. お役立ち資料セクション（高確度リード獲得用） */}
          <Paper
            component="section"
            variant="outlined"
            sx={{
              mt: 10,
              p: 6,
              bgcolor: grey[50],
              borderRadius: 3,
              textAlign: 'center',
              borderColor: 'divider',
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
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
            >
              具体的な導入ステップや費用対効果をまとめた資料を無料でダウンロードいただけます。
              <br />
              （セグメント2：決裁権者向けの検討材料）
            </Typography>

            <Button
              component="a"
              href="/whitepaper.pdf"
              download
              data-gtm-click="resource_btn_whitepaper" // PDFダウンロード計測
              variant="contained"
              disableElevation
              startIcon={<DownloadIcon />}
              sx={{
                bgcolor: 'grey.900',
                color: 'common.white',
                fontWeight: 'bold',
                py: 2,
                px: 4,
                borderRadius: 2,
                '&:hover': { bgcolor: grey[800] },
                textTransform: 'none',
              }}
            >
              導入検討ガイド（PDF）をダウンロード
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
