export class Singleton {
    private static instance: Singleton;

    private constructor() {
        // The constructor is private to prevent creating new instances of Singleton
    }

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
