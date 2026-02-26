import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 修正：IA設計書の定義通り、正規化された絶対パス（末尾スラッシュ）へ遷移
    navigate('/contact/thanks/');
  };

  return (
    <>
      <title>導入相談・資料請求 | Tracking Lab | タスク管理</title>
      <meta
        name="description"
        content="Tracking Labの導入に関するご相談や、詳しい資料のご請求はこちらのフォームからお問い合わせください。"
      />

      {/* フォームなので、幅を少し狭め（maxWidth="sm"）にして入力しやすくする */}
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          導入相談・資料請求
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            required
            fullWidth
            label="会社名"
            margin="normal"
            slotProps={{
              htmlInput: {
                'data-gtm-field': 'contact_company',
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
                'data-gtm-field': 'contact_name',
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
                'data-gtm-field': 'contact_phone',
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
                'data-gtm-field': 'contact_email',
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disableElevation
            sx={{
              mt: 4,
              py: 2,
              bgcolor: 'grey.900',
              color: 'common.white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              '&:hover': { bgcolor: 'grey.800' },
            }}
          >
            送信する
          </Button>
        </Box>
      </Container>
    </>
  );
}
