/**
 * 从 Polaris 源码中拷贝的，该函数没有被他们 export 出来，只好把源码弄过来了
 * @param color
 */
export function hexToRgb(color: string) {
  if (color.length === 4) {
    const repeatHex = (hex1: number, hex2: number) =>
        color.slice(hex1, hex2).repeat(2)
    const red = parseInt(repeatHex(1, 2), 16)
    const green = parseInt(repeatHex(2, 3), 16)
    const blue = parseInt(repeatHex(3, 4), 16)

    return { blue, green, red }
  }

  const red = parseInt(color.slice(1, 3), 16)
  const green = parseInt(color.slice(3, 5), 16)
  const blue = parseInt(color.slice(5, 7), 16)

  return { blue, green, red }
}
