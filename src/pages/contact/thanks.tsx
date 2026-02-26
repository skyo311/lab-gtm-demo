import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // 完了を示すチェックアイコン

export default function ContactThanks() {
  return (
    <>
      <title>送信完了 | Tracking Lab | タスク管理</title>
      <meta name="description" content="お問い合わせの送信が完了しました。" />

      <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
        {/* 最終CVタグ発火用ノード（GTM側で「要素の出現」をトリガーにする場合の保険） */}
        <div data-gtm-view="contact_finish_lead" style={{ display: 'none' }} />

        {/* MUIのサクセスアイコンを大きく表示して安心感を与える */}
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80, mb: 2 }} />

        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          送信完了
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, lineHeight: 1.8 }}
        >
          お問い合わせを受け付けました。
          <br />
          担当者より、通常1〜2営業日以内にご連絡いたします。
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          size="large"
          sx={{
            fontWeight: 'bold',
            borderWidth: 2,
            '&:hover': { borderWidth: 2 }, // ホバー時も線の太さを維持
          }}
        >
          トップページへ戻る
        </Button>
      </Container>
    </>
  );
}
