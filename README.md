# description
ofs-hor-view is a view int a horizontal layout with some components。

## see also ofs-hor-layout
> ofs-hor-layout is a layout with a horizontal alignment。

## installing
```
$ npm install ofs-hor-view
```

## import in main.ts

```typescript
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
import OfsHorView from 'ofs-hor-view'
import 'ofs-hor-view/lib/style.css'

const app = createApp(App)
app.use(ElementPlus)
    .use(OfsHorView)
    .mount('#app')
```
## using in page

```html
<OfsHorView
  :side-width="260"
  :side-collapse-width="64"
  :header-height="50"
  :tags-view-height="20"
  :menus="menus"
  :options="state.options"
  :current-language="state.currentLang"
  @collapse="toggle"
  @select="menuSelected"
  @language="state.languageChange"
>
  <template #logoImage>
    <div style="font-size: 28px"></div>
  </template>
  <template #logoTitle>
    <div style="font-size: 24px">Rui Kang</div>
  </template>
  <template #hContent>
    <div>111</div>
  </template>
  <template #view>
    <div class="main">main content</div>
  </template>
</OfsHorView>
```

```typescript
import { reactive } from 'vue'
import OfsHorView from 'ofs-hor-view'

export interface SideMenu {
  id: number | undefined
  parentId: number
  parentName: string | null
  name: string | null
  url: string | null
  component: string | null
  permission: string | null
  type: number
  icon: string | null
  orderNum: number
  children: SideMenu[]
}

const toggle = (val: boolean) => {
  console.log('OfsHorView toggle:', val)
}

const menuSelected = (val: string) => {
  console.log('OfsHorView menu selected:', val)
}

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
  languageChange: (val: string) => {
    console.log('OfsHorView language change:', val)
    if (val === 'zh-CN') {
      // i18n.global.locale.value = 'zh-CN'
    }
    if (val === 'en') {
      // i18n.global.locale.value = 'en'
    }
  },
})

const menus: SideMenu[] = [
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
      } as SideMenu,
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
      } as SideMenu,
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