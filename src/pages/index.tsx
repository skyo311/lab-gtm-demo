import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
  return (
    <Box>
      {/* ヒーローエリア */}
      <Box
        sx={{ py: 24, px: 2, textAlign: 'center', backgroundColor: '#f8f9fa' }}
      >
        <Container maxWidth="md">
          <Typography color="text.disabled">【キービジュアル】</Typography>
        </Container>
      </Box>

      {/* 機能ハイライト（計測用に縦長に構成） */}
      <Box sx={{ py: 12, px: 2 }} id="features">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{ mb: 8 }}
          >
            プロダクトの主な機能
          </Typography>

          <Grid container spacing={8}>
            {/* 機能1: 実務者（セグメント1）向け */}
            <Grid size={12}>
              <Box sx={{ py: 6, borderBottom: '1px solid #eee' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  01. 直感的なタスク操作
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600 }}
                >
                  直感的なタスク操作の説明が入ります。
                  <br />
                  直感的なタスク操作の説明が入ります。
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    height: 300,
                    bgcolor: '#f0f0f0',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="text.disabled">
                    【機能デモ画像】
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* 機能2: 決裁者（セグメント2）向け */}
            <Grid size={12}>
              <Box sx={{ py: 6, borderBottom: '1px solid #eee' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  02. 高度なセキュリティと権限管理
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600 }}
                >
                  高度なセキュリティと権限管理の説明が入ります。
                  <br />
                  高度なセキュリティと権限管理の説明が入ります。
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    height: 300,
                    bgcolor: '#f0f0f0',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="text.disabled">
                    【セキュリティ管理画面イメージ】
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 料金プラン */}
      <Box
        sx={{ py: 12, px: 2, backgroundColor: '#eef2f5' }}
        id="pricing"
        data-gtm-view="pricing_section_main"
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{ mb: 8 }}
          >
            プランを選ぶ
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* 無料トライアル（セグメント1向け） */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 6,
                  border: '1px solid #e0e0e0',
                }}
                elevation={0}
              >
                <CardContent sx={{ p: 5, flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    トライアル
                  </Typography>
                  <Typography variant="h4" fontWeight="900" sx={{ my: 3 }}>
                    無料
                  </Typography>

                  <Button
                    component={RouterLink}
                    to="/trial/"
                    variant="outlined"
                    fullWidth
                    size="large"
                    data-gtm-click="pricing_btn_trial"
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      mb: 4,
                      fontWeight: 'bold',
                      textTransform: 'none',
                    }}
                  >
                    プランを選ぶ
                  </Button>

                  <Divider sx={{ mb: 4 }} />

                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    こんな方におすすめ：
                  </Typography>
                  <List dense disablePadding>
                    {[
                      '個人のプロジェクトに取り組んでいる',
                      '基本的なタスク管理、共有が必要',
                      'まずはTracking Labを試したい',
                    ].map((text) => (
                      <ListItem
                        key={text}
                        disableGutters
                        sx={{ alignItems: 'flex-start', py: 0.5 }}
                      >
                        <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                          <CheckIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* エンタープライズ（セグメント2向け） */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 6,
                  bgcolor: '#1A2027',
                  color: '#fff',
                }}
                elevation={4}
              >
                <CardContent sx={{ p: 5, flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    エンタープライズ
                  </Typography>
                  <Typography variant="h4" fontWeight="900" sx={{ my: 3 }}>
                    個別見積もり
                  </Typography>

                  <Button
                    component={RouterLink}
                    to="/contact/"
                    variant="contained"
                    fullWidth
                    size="large"
                    data-gtm-click="pricing_btn_enterprise"
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      mb: 4,
                      bgcolor: '#fff',
                      color: '#1A2027',
                      '&:hover': { bgcolor: '#f5f5f5' },
                      fontWeight: 'bold',
                      textTransform: 'none',
                    }}
                  >
                    お問い合わせ
                  </Button>

                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 4 }} />

                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    法人でのご利用に：
                  </Typography>
                  <List dense disablePadding>
                    {[
                      '全社的なセキュリティ要件（SSO等）',
                      '数百人規模での一元管理',
                      '専任担当者による導入支援',
                    ].map((text) => (
                      <ListItem
                        key={text}
                        disableGutters
                        sx={{ alignItems: 'flex-start', py: 0.5 }}
                      >
                        <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                          <CheckIcon
                            fontSize="small"
                            sx={{ color: '#4caf50' }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: 'rgba(255,255,255,0.7)' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 12, px: 2 }} id="faq">
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            よくある質問
          </Typography>
          <Accordion
            disableGutters
            variant="outlined"
            sx={{ borderRadius: 2, overflow: 'hidden' }}
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
