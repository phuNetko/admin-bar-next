// pages/bar-list.tsx
'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  IconButton
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import SelectBox from '@/components/ui/SelectBox';
import Image from 'next/image';

const dummyData = [
  {
    image: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482752AXp/anh-mo-ta.png',
    nameEn: 'Tokyo Whiskey Bar',
    nameJp: '東京ウィスキーバー',
    category: 'ウィスキーバー',
    address: '東京都港区虎ノ門1-2-3',
    public: true,
  },
  {
    image: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482752AXp/anh-mo-ta.png',
    nameEn: 'Sakura Cocktail Lounge',
    nameJp: '桜カクテルラウンジ',
    category: 'カクテルバー',
    address: '東京都渋谷区渋谷2-3-4',
    public: false,
  },
];

export default function BarsPage() {
  const [bars, setBars] = useState(dummyData);
  const [prefecture, setPrefecture] = useState('');
  const [category, setCategory] = useState('');
  const [publicStatus, setPublicStatus] = useState('');

  const handleTogglePublic = (index: number) => {
    const updated = [...bars];
    updated[index].public = !updated[index].public;
    setBars(updated);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        バー一覧
      </Typography>

      <Box mb={2} p={2} border={1} borderRadius={2} borderColor="#ddd" bgcolor="white">
        <Typography variant="subtitle1" gutterBottom>
          検索・フィルター
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          <TextField placeholder="キーワードを入力..." size="small" />
          <SelectBox 
            options={[
              {label: "都道府県", value: "prefecture"}, 
              {label: "都道府県2", value: "prefecture2"}
            ]} 
            value={prefecture} 
            onChange={setPrefecture} 
            label="都道府県"
          />
          <SelectBox 
            options={[
              {label: "カテゴリ", value: "category1"},
              {label: "カテゴリ2", value: "category2"}
            ]} 
            value={category} 
            onChange={setCategory} 
            label="カテゴリ"
          />
          <SelectBox 
            options={[
              {label: "公開", value: "public"},
              {label: "非公開", value: "private"}
            ]} 
            value={publicStatus} 
            onChange={setPublicStatus} 
              label="公開状態"
          />
          <Button variant="contained" color="error" onClick={() => {
            setPrefecture('')
            setCategory('')
            setPublicStatus('')
          }}>
            検索
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="body2">12件中 1〜10件を表示</Typography>
        <FormControl size="small">
          <Select defaultValue={10}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>写真</TableCell>
              <TableCell>英語店名</TableCell>
              <TableCell>日本語店名</TableCell>
              <TableCell>カテゴリ</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>公開状態</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bars.map((bar, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Image src={bar.image} alt={bar.nameEn} width={50} height={50} style={{ borderRadius: 6 }} />
                </TableCell>
                <TableCell>{bar.nameEn}</TableCell>
                <TableCell>{bar.nameJp}</TableCell>
                <TableCell>{bar.category}</TableCell>
                <TableCell>{bar.address}</TableCell>
                <TableCell>
                  <Switch
                    checked={bar.public}
                    onChange={() => handleTogglePublic(index)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
