import { Singleton } from "./singleton.class"

describe('Singleton', () => {
    describe('singleton', () => {
        it('Should result in only one instance Initiation on multiple initiations', () => {

            const singleton1 = Singleton.getInstance();
            const singleton2 = Singleton.getInstance();
            expect(singleton1).toEqual(singleton2)

        });
    });
});