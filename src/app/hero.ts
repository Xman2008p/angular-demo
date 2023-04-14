export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
    // 其中 alterEgo 屬性後面接了 ? 號，代表 alterEgo 屬性不是必須的，呼叫建構函式時這個參數可以省略。
  ) {}
}
