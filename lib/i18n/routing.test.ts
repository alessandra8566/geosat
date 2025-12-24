import { routing } from './routing'
import * as navigation from 'next-intl/navigation';
import * as routingModule from 'next-intl/routing';

jest.mock('next-intl/routing', () => ({
  defineRouting: jest.fn((config) => config),
}))

jest.mock('next-intl/navigation', () => ({
  createNavigation: jest.fn(() => ({
    Link: () => 'Link',
    redirect: jest.fn(),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
  })),
}))

describe('Routing Configuration', () => {
  it('應該使用正確的參數呼叫 defineRouting', () => {
    expect(routingModule.defineRouting).toHaveBeenCalledWith(
      expect.objectContaining({
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        localePrefix: 'always',
      })
    );
  });

  it('應正確導出 routing 設定物件', () => {
    expect(routing.locales).toContain('en');
    expect(routing.locales).toContain('zh');
    expect(routing.defaultLocale).toBe('en');
  });

  it('應該使用 routing 設定呼叫 createNavigation', () => {
    // 驗證 createNavigation 是否被正確觸發
    expect(navigation.createNavigation).toHaveBeenCalledWith(routing);
  });
});