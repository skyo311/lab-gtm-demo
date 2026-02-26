import { Outlet, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBarを使ってヘッダーを構築。影(elevation)を消して、下線だけを引くSaaS風の王道スタイル */}
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* ロゴ部分 */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'text.primary',
              letterSpacing: '-0.5px',
            }}
          >
            Tracking Lab
          </Typography>

          {/* ナビゲーション部分 */}
          <Box
            component="nav"
            sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
          >
            {/* MUIのButtonコンポーネントを、React RouterのLinkとして振る舞わせる */}
            <Button
              component={RouterLink}
              to="/product/"
              color="inherit"
              sx={{ fontWeight: 'bold' }}
            >
              プロダクト
            </Button>
            <Button
              component={RouterLink}
              to="/cases/"
              color="inherit"
              sx={{ fontWeight: 'bold' }}
            >
              導入事例
            </Button>
            <Button
              component={RouterLink}
              to="/security/"
              color="inherit"
              sx={{ fontWeight: 'bold' }}
            >
              セキュリティ
            </Button>

            {/* セグ1向け：最速CV導線（薄いグレーのボタン） */}
            <Button
              component={RouterLink}
              to="/trial/"
              variant="contained"
              disableElevation
              data-gtm-click="header_btn_trial"
              sx={{
                bgcolor: 'grey.200',
                color: 'text.primary',
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'grey.300' },
              }}
            >
              無料で試す
            </Button>

            {/* セグ2向け：リード獲得導線（濃いグレーの目立つボタン） */}
            <Button
              component={RouterLink}
              to="/contact/"
              variant="contained"
              disableElevation
              data-gtm-click="header_btn_contact"
              sx={{
                bgcolor: 'grey.900',
                color: 'common.white',
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'grey.800' },
              }}
            >
              導入相談
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* メインコンテンツ（Outletの表示領域） */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
