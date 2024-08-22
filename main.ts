class GenV3 {
    private static readonly all: string = '0123456789abcdefghijklmnopqrstuvwxyz';
    private static readonly numbers: string = '0123456789';
    private static readonly letters: string = 'abcdefghijklmnopqrstuvwxyz';

    private generateSymbol(type: string, howManySymbols: number) { // generate random symbols
        let result: string = '';

        for(let i: number = 0; i < howManySymbols; i++) {
            const randomNumber: number = Math.floor(Math.random() * type.length);
            result += type[randomNumber]; // write result
        }

        return result;
    }

    private checkArgument(type: string, howMany: number): void { // check method argument
        if (howMany <= 0) {
            throw new Error('The "howMany" argument must be a positive number or fully!');
        }
        
        if (!['all', 'numbers', 'letters'].includes(type)) {
            throw new Error('The "type" argument must be one of: "all", "numbers", "letters"');
        }
    }

    generate(type: 'all' | 'numbers' | 'letters', howMany: number): string { // generate symbols (all, numbers, letters)
        this.checkArgument(type, howMany);
        return this.generateSymbol(GenV3[type], howMany);
    }
}

export default new GenV3;