import React from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Box,
  Tabs,
  Tab,
} from '@mui/material';

function ClubDetail() {
  return (
    <>
      <Card sx={{ minWidth: 275, display: 'flex' }}>
        <CardMedia
          component='img'
          sx={{ width: 500 }}
          image='/images/testimage.PNG'
          alt='green iguana'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography sx={{ borderBottom: 1 }} variant='h5' component='div'>
              MCU 톺아보기
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              마블 시네마틱 유니버스의 영화를 함께 샅샅이 분석해봐요!
            </Typography>
            <Typography variant='body2'>
              본 클럽은 온라인으로 진행됩니다.
              <br />
              모집 마감까지 6자리 남았어요! (현재 14명 / 최대 20명)
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant='body2' color='text.secondary'>
              *클럽 사정에 따라 모집이 조기 마감될 수 있습니다.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pb: 1,
              justifyContent: 'space-between',
            }}
          >
            <Button>신청하기</Button>
            <Button>찜하기</Button>
            <Button>공유하기</Button>
          </Box>
        </Box>
      </Card>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label='basic tabs example'>
          <Tab label='기본 정보' />
          <Tab label='상세 정보' />
          <Tab label='참여 후기' />
        </Tabs>
      </Box>
    </>
  );
}

export default ClubDetail;
