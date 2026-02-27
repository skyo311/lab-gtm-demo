import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

export default function Trial() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 修正：IA設計書の定義通り、正規化された絶対パスへ遷移
    navigate('/trial/thanks/');
  };

  return (
    <>
      <title>無料トライアルプラン | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="Tracking Labを今すぐ無料で体験。クレジットカード登録不要で、すべての基本機能をお試しいただけます。"
      />

      <Container maxWidth="sm" sx={{ py: 12 }}>
        <div data-gtm-view={`trial_form_arrival`} style={{ display: 'none' }} />
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          無料トライアル
        </Typography>

        {/* CVR向上のためのマイクロコピーを追加 */}
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          クレジットカード不要。1分でセットアップ完了。
        </Typography>

        {/* 入力欄が広がりすぎないよう、Boxでさらに幅を絞る */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: 400, mx: 'auto' }}
        >
          <TextField
            required
            fullWidth
            label="会社名"
            margin="normal"
            slotProps={{
              htmlInput: {
                'data-gtm-field': 'trial_company',
              },
            }}
          />

          <TextField
            required
            fullWidth
            label="お名前"
            margin="normal"
            slotProps={{
              htmlInput: {
                'data-gtm-field': 'trial_name',
              },
            }}
          />

          <TextField
            fullWidth
            label="電話番号"
            type="tel"
            placeholder="03-0000-0000"
            margin="normal"
            slotProps={{
              htmlInput: {
                'data-gtm-field': 'trial_phone',
              },
            }}
            helperText="※任意（ハイフンなし）"
          />

          <TextField
            required
            fullWidth
            type="email"
            label="メールアドレス"
            margin="normal"
            placeholder="work@example.com"
            slotProps={{
              htmlInput: {
                'data-gtm-field': 'trial_email',
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disableElevation
            data-gtm-click="trial_btn_submit"
            sx={{
              mt: 3,
              py: 2,
              bgcolor: '#0284c7', // 元コードのブルー（コンバージョンカラー）を再現
              color: 'common.white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              '&:hover': { bgcolor: '#0369a1' },
            }}
          >
            今すぐ始める
          </Button>
        </Box>
      </Container>
    </>
  );
}
