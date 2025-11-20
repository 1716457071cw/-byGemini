import { Quote, Category } from './types';

export const INITIAL_QUOTES: Quote[] = [
  {
    id: 'w-1',
    text: "追求财富，而不是金钱或地位。财富是指在你睡觉时仍能为你赚钱的资产。金钱是我们转移时间和财富的方式。地位是你在此社会等级体系中的位置。",
    category: Category.WEALTH,
    tags: ['财富', '地位', '金钱'],
  },
  {
    id: 'w-2',
    text: "无视那些玩地位游戏的人。他们通过攻击玩财富创造游戏的人来获得地位。",
    category: Category.WEALTH,
    tags: ['地位游戏', '财富'],
  },
  {
    id: 'w-3',
    text: "出租时间是不会让你发财的。你必须拥有股权——企业的一部分——才能获得财务自由。",
    category: Category.WEALTH,
    tags: ['股权', '自由'],
  },
  {
    id: 'w-4',
    text: "玩复利游戏。生活中所有的回报，无论是财富、人际关系还是知识，都来自复利。",
    category: Category.WEALTH,
    tags: ['复利', '长期主义'],
  },
  {
    id: 'w-5',
    text: "代码和媒体是无需许可的杠杆。它们是新富阶层背后的杠杆。你可以创建软件和媒体，让它们在你睡觉时为你工作。",
    category: Category.WEALTH,
    tags: ['杠杆', '代码', '媒体'],
  },
  {
    id: 'h-1',
    text: "幸福不是你继承的，也不是你选择的，而是一种高度个人化的技能，就像健身或营养学一样，是可以学习的。",
    category: Category.HAPPINESS,
    tags: ['技能', '学习'],
  },
  {
    id: 'h-2',
    text: "欲望就是你跟自己签的约，不得到想要的东西，你就不会快乐。",
    category: Category.HAPPINESS,
    tags: ['欲望', '痛苦'],
  },
  {
    id: 'h-3',
    text: "平静是静止的幸福；幸福是运动的平静。",
    category: Category.HAPPINESS,
    tags: ['平静'],
  },
  {
    id: 'h-4',
    text: "人生三大要事：财富、健康和幸福。我们往往按这个顺序追求它们，但它们的重要性是反过来的。",
    category: Category.HAPPINESS,
    tags: ['优先级'],
  },
  {
    id: 'p-1',
    text: "理性的人可以通过对无法控制的事物保持漠不关心来找到平静。",
    category: Category.PHILOSOPHY,
    tags: ['斯多葛主义', '控制'],
  },
  {
    id: 'p-2',
    text: "读你喜欢的书，直到你爱上读书。",
    category: Category.PHILOSOPHY,
    tags: ['阅读', '学习'],
  },
  {
    id: 'p-3',
    text: "专长是通​​过追求你真正的求知欲和激情而不是现在的热门事物来发现的。",
    category: Category.PHILOSOPHY,
    tags: ['好奇心', '知识'],
  },
];