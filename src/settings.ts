import type { RecursiveRequired, Settings } from '#/global'
import { cloneDeep } from 'es-toolkit'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'

const globalSettings: Settings.all = {
  app: {
    colorScheme: '',
    radius: 0.75,
    enablePermission: true,
    enableDynamicTitle: true,
  },
  menu: {
    mainMenuClickMode: 'smart',
  },
  tabbar: {
    enable: true,
    enableIcon: true,
  },
  toolbar: {
    navSearch: false,
    fullscreen: true,
    pageReload: true,
    colorScheme: true,
  },
  copyright: {
    enable: true,
    dates: '2025',
    company: 'Colawallex',
    website: 'https://www.colawallex.com',
    beian: '闽ICP备-00000000001号',
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
