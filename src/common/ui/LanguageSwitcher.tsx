'use client';

import { useEffect, useState } from 'react';
import { MenuItem, type SelectChangeEvent, FormControl, InputLabel, Select } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import i18next from 'i18next';

const supportedLocales = ['en', 'vi']; // thêm 'ja' nếu cần

export default function ChangeLanguage({locale}: {locale: string}) {
  const pathname = usePathname();
  const router = useRouter();
  const [localeCu, setLocaleCu] = useState(locale || 'en');

  useEffect(() => {
    const storedLocale = locale || localStorage.getItem('locale');
    if (storedLocale && supportedLocales.includes(storedLocale)) {
      i18next.changeLanguage(storedLocale);
      setLocaleCu(storedLocale);
      localStorage.setItem('locale', storedLocale);
    }
  }, [locale]);

  const handleChange = (event: SelectChangeEvent) => {
    const newLocale = event.target.value;
    setLocaleCu(newLocale);
    i18next.changeLanguage(newLocale);
    localStorage.setItem('locale', newLocale);
  
    // Đổi ngôn ngữ trong URL
    const segments = pathname.split('/');
    
    // Nếu path không bắt đầu bằng locale, thì prepend
    if (!supportedLocales.includes(segments[1])) {
      segments.unshift(newLocale);
    } else {
      segments[1] = newLocale; // thay locale cũ
    }
    const newPath = segments.join('/') || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <FormControl className="w-[150px] h-[30px]">
      <InputLabel
        sx={{
          color: 'white',
          fontSize: '13px',
          '&.Mui-focused': { color: 'orange' },
        }}
        id="language-select-label"
      >
        Language
      </InputLabel>
      <Select
        sx={{
          color: 'white',
          backgroundColor: 'transparent',
          height: '30px',
          '& .MuiSvgIcon-root': { color: 'white' },
          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        }}
        labelId="language-select-label"
        id="language-select"
        value={localeCu}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem className="text-white" value="en">English</MenuItem>
        {/* <MenuItem className="text-white" value="ja">Japanese</MenuItem> */}
        <MenuItem className="text-white" value="vi">Vietnamese</MenuItem>
      </Select>
    </FormControl>
  );
}
