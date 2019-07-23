/**
 * TypeDocのExampleです。
 */
export default class Example {
    /** プロパティです。 */
    public message: string = 'Hello';

    /**
     * メソッドです。
     * @returns メッセージ
     */
    public sayMessage(): string {
        return this.message;
    }
}