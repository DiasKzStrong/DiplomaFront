export interface ISpellWord {
    word:string,
    correct:boolean | null,
    correction?:string
    variants?:string[]
    
}

