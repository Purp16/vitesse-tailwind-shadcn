/**
 * 动态获取图片url 用于 `<img>` 的 `:src` 绑定
 */
export default function getImageUrl(src: string) {
  return new URL(src, import.meta.url).href;
}
