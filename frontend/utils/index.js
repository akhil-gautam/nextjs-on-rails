import React from 'react';
import cookie from 'cookie';
import Axios from 'axios';

import defaultTheme from '../components/themes/default';

export function userFromCookie(req) {
  const raw = cookie.parse(
    req ? req.headers.cookie || '' : document.cookie
  ).nextRailsUser;
  if (!raw) return null;
  return JSON.parse(raw);
}

export const ThemeContext = React.createContext({ theme: defaultTheme });

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

function authRequestInterceptor(config) {
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
