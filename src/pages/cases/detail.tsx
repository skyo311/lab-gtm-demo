import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { COMPANIES } from '../../data/companies';

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const company = COMPANIES.find((c) => c.id === id);
  if (!company) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography>事例データが見つかりません</Typography>
        <Button onClick={() => navigate('/cases/')}>一覧に戻る</Button>
      </Box>
    );
  }

  return (
    <>
      <title>導入事例 | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="導入事例のディスクリプションが入ります。"
      />
      <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: '100vh',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="md" sx={{ py: 10 }}>
          {/* 1. ナビゲーション（一覧へ戻る） */}
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/cases/')}
            sx={{ mb: 4, color: 'text.secondary', textTransform: 'none' }}
          >
            事例一覧に戻る
          </Button>

          {/* 2. タイトル：Pageview計測時にIDを含める */}
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            data-gtm-industry={`case_detail_${company.industry}`}
          >
            {company.name} 導入事例
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            計測テスト用：{company.name}プロジェクトにおける業務効率化の全貌
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              height: 400,
              bgcolor: 'grey.200',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 8,
            }}
          >
            <Typography color="text.disabled">
              【事例メイン画像プレースホルダー】
            </Typography>
          </Paper>

          {/* 4. 本文セクション：スクロール深度を測るために十分な高さを確保 */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              導入前の課題
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 2, mb: 6 }}
            >
              ワイヤーテキスト：ここから本文が始まります。 スクロール深度（25%,
              50%, 75%, 100%）が正しく計測されるかを確認するために、
              意図的に文章量や要素の間隔を調整しています。
            </Typography>

            <Box
              sx={{
                height: 400,
                bgcolor: 'grey.50',
                borderRadius: 2,
                mb: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography color="text.disabled">
                【図解：導入前のフロー】
              </Typography>
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Tracking Labによる解決
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 2, mb: 6 }}
            >
              中盤のセクションです。ここが画面中央に来た時に 50%
              スクロールが発火する想定です。
              UIのシンプルさと、GTM連携による計測のしやすさが採用の決め手となりました。
            </Typography>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              導入後の成果
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 2 }}
            >
              終盤のセクションです。導入後、チーム内のコミュニケーションラグが解消され、
              意思決定スピードが大幅に向上しました。
            </Typography>
          </Box>

          <Divider sx={{ my: 8 }} />

          {/* 5. 読了・CTAセクション：下部到達の計測 */}
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {company.name}の事例は参考になりましたか？
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              貴社の課題に合わせた最適な構成をご提案します。
            </Typography>

            <Button
              variant="contained"
              size="large"
              data-gtm-click={'resource_btn_whitepaper'} // PDFダウンロード計測
              sx={{
                bgcolor: 'grey.900',
                color: 'common.white',
                px: 6,
                py: 2,
                borderRadius: 2,
                '&:hover': { bgcolor: 'grey.800' },
                textTransform: 'none',
              }}
            >
              導入検討ガイド（PDF）をダウンロード
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
