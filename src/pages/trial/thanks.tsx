import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TrialThanks() {
  return (
    <>
      <title>登録完了 | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="無料トライアルプランの登録が完了しました。すぐにTracking Labをご利用いただけます。"
      />

      <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
        <div data-gtm-view="trial_finish_lead" style={{ display: 'none' }} />

        <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 80, mb: 2 }} />

        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          登録完了
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, lineHeight: 1.8 }}
        >
          ご登録ありがとうございます。
          <br />
          すぐにすべての機能をご利用いただけます。
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          size="large"
          sx={{
            fontWeight: 'bold',
            borderWidth: 2,
            '&:hover': { borderWidth: 2 },
          }}
        >
          トップページへ戻る
        </Button>
      </Container>
    </>
  );
}
