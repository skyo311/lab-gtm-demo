import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TrialThanks() {
  return (
    <>
      <title>登録完了 | WorkBase（ワークベース）</title>
      <meta
        name="description"
        content="無料トライアルの登録が完了しました。すぐにWorkBaseをご利用いただけます。"
      />

      <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
        {/* トライアル登録完了（セグメント1）の最終CV計測用ノード */}
        <div data-gtm-cv="sign_up" style={{ display: 'none' }} />

        {/* トライアルの「すぐ始められる感」を出すため、色は爽やかなprimary（青系）に */}
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
