# description
ofs-hor-example is an example with a horizontal view template named ofs-view-layout。

## description
> ofs-view-layout is a view template with a horizontal alignment。

## import in main.ts

```typescript
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
import OfsHorView from 'ofs-view-layout'
import 'ofs-view-layout/lib/style.css'

const app = createApp(App)
app.use(ElementPlus)
    .use(OfsHorView)
    .mount('#app')
```
## using in page

```html
<ofs-hor-view
  :side-width="260"
  :side-collapse-width="64"
  :header-height="50"
  :tags-view-height="20"
  :menus="menus"
  :options="state.options"
  :current-lang="state.currentLang"
  :logo-router="state.logoRouter"
  :avatar-url="state.avatarUrl"
  :dark="state.dark"
  :is-language="state.isLanguage"
  :is-theme-switch="state.isThemeSwitch"
  :is-avatar="state.isAvatar"
  :dark-text="state.darkText"
  :logout-text="state.logoutText"
  :setting-items="state.settingItems"
  @collapse="toggle"
  @select="menuSelected"
  @language="state.languageChange"
  @theme-switch="themeSwitch"
  @setting-command="settingCommand"
  @logout="logout"
>
  <template #logoImage>
    <div style="font-size: 28px">RK</div>
  </template>
  <template #logoTitle>
    <div style="font-size: 24px">Rui Kang</div>
  </template>
  <template #hContent>
    <div>header content</div>
  </template>
  <template #view>
    <div class="main">main content</div>
  </template>
</ofs-hor-view>
```

```typescript
import { reactive } from 'vue'
import OfsHorView from 'ofs-view-layout'
import type { SettingItem, SideMenu } from 'ofs-view-type'

const state = reactive({
  options: [
    {
      value: 'zh-CN',
      label: '中文',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'en1',
      label: 'English1',
    },
  ],
  currentLang: 'zh-CN',
  logoRouter: '/test',
  avatarUrl:
    'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81MDNmMTkxNDUwNzNkNmFkMjlhZWJkMDEzYTVmZjI3OD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5OSXtGzFm9QS7bDnYwGGZQSfatCPy25BzeoYaSmid_E', //默认值
  dark: true,
  isLanguage: true,
  isThemeSwitch: true,
  isAvatar: true,
  darkText: '暗黑模式',
  logoutText: '退出',
  settingItems: [{ command: 'test', text: 'test' } as typeof SettingItem],
  languageChange: (val: string) => {
    window.console.log('OfsHorView language change:', val)
    if (val === 'zh-CN') {
      // i18n.global.locale.value = 'zh-CN'
    }
    if (val === 'en') {
      // i18n.global.locale.value = 'en'
    }
  },
})

const toggle = (val: boolean) => {
  window.console.log('OfsHorView toggle:', val)
}

const menuSelected = (val: string) => {
  window.console.log('OfsHorView menu selected:', val)
}

const themeSwitch = () => {
  window.console.log('OfsHorView theme switch')
}

const logout = () => {
  window.console.log('OfsHorView logout')
}

const settingCommand = (val: string | number | object) => {
  window.console.log('OfsHorView setting command:', val)
}
const menus: typeof SideMenu[] = [
  {
    id: 1,
    parentId: 0,
    parentName: 'Test Parent Name One',
    name: 'Test Name One',
    url: 'test/url/1',
    component: null,
    permission: null,
    type: 0,
    icon: 'view',
    orderNum: 1,
    children: [
      {
        id: 2,
        parentId: 1,
        parentName: 'Test Parent Name Two',
        name: 'Test Name Two',
        url: 'test/url/2',
        component: null,
        permission: null,
        type: 1,
        icon: 'view',
        orderNum: 1,
      },
    ],
  },
  {
    id: 1,
    parentId: 0,
    parentName: 'Test Parent Name Two',
    name: 'Test Name Two',
    url: 'test/url/3',
    component: null,
    permission: null,
    type: 0,
    icon: 'view',
    orderNum: 1,
    children: [
      {
        id: 2,
        parentId: 1,
        parentName: 'Test Parent Name Two',
        name: 'Test Name Two',
        url: 'test/url/4',
        component: null,
        permission: null,
        type: 1,
        icon: 'view',
        orderNum: 1,
      },
    ],
  },
]
```

```scss
.main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
