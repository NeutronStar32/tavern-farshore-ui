// 远岸 · MVU 变量结构
// 顶层五个键与 创作规划.yaml 的 mvu 段一一对应：世界、船、货舱、声望、接触度。
// z（Zod 4）与 _（lodash）由运行时注入，本文件不写任何 import。
// 数值区间用 clamp 收敛：越界的补丁会被拉回边界继续生效，不会整条被丢弃。

export const Schema = z.object({
  // 世界：时间与位置。跨天、航行、冬眠、等待都按实际耗时推进这里，不跳时间。
  世界: z.object({
    // NE 纪年日期，形如「NE 105/03/12」
    当前日期: z.string(),
    // 时段，决定光线、店铺与人流的状态
    时段: z.enum(['清晨', '上午', '午后', '傍晚', '夜']),
    // 区域加具体位置，例「长明环 居住区 拐角那家面馆」
    当前地点: z.string(),
    // 停泊或航行中；停泊时目的地留空、剩余天数为零
    航行状态: z
      .object({
        状态: z.string().prefault('停泊'),
        目的地: z.string().prefault(''),
        // 按曲率算出的剩余航程天数，抵达归零
        剩余天数: z.coerce.number().transform(天数 => Math.max(0, 天数)).prefault(0),
      })
      .prefault({}),
  }),
  // 船：余烬号的存量状态，掉得下去也修得回来
  船: z.object({
    // 燃料百分比，满箱约跑三万光年
    燃料: z.coerce.number().transform(值 => _.clamp(值, 0, 100)),
    // 生活物资折成的天数，多人按人头加速消耗
    生活物资: z.coerce.number().transform(天数 => _.clamp(天数, 0, 547)),
    // 船体完整度百分比，撞击、粗暴拆解、战斗会掉
    船体: z.coerce.number().transform(值 => _.clamp(值, 0, 100)),
    // 护盾余量百分比，靠反应堆充能
    护盾: z.coerce.number().transform(值 => _.clamp(值, 0, 100)),
    // 自由炮台状态
    炮台: z.enum(['正常', '受损', '离线']),
    // 冬眠舱占用人数，出厂双人，最多加装到六具
    冬眠舱占用: z.coerce.number().transform(人数 => _.clamp(Math.round(人数), 0, 6)),
  }),
  // 货舱：键为品名。捞到、买到上船时新增，卖出、交出、损毁时删除
  货舱: z.record(
    z.string().describe('品名'),
    z.object({
      // 数量，同品名按件或按吨记
      数量: z.coerce.number(),
      // 当前行情的粗略价，卖出去才知道真价
      估值: z.coerce.number(),
    }),
  ),
  // 声望：键为地区或族系名，各记各的，一方上升不牵动另一方
  声望: z.record(
    z.string().describe('地区或族系名'),
    z.coerce.number().transform(值 => _.clamp(值, -100, 100)),
  ),
  // 接触度：键为族名，决定同声传译芯片的语感，越低越翻不出语气与敬意
  接触度: z.record(
    z.string().describe('族名'),
    z.coerce.number().transform(值 => _.clamp(值, 0, 100)),
  ),
});

export type Schema = z.output<typeof Schema>;
