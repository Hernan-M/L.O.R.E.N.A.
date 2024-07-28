interface phrasesType {
    lineOne: string[],
    lineTwo: string[],
    lineThree: string[]
}

interface boolChoicesType{
    choiceOne: string,
    choiceTwo: string
}

export const phrases: phrasesType = {
    lineOne: ["Olá.", "Bom dia","Até logo","Boa noite"],
    lineTwo: ["Estou feliz", "Estou triste", "Estou com medo" ,"Estou bravo"],
    lineThree: ["Estou com fome", "Estou com sede", "Por favor", "Preciso de ajuda"]
    
};

export const boolChoices: boolChoicesType = {
    choiceOne: 'Sim',
    choiceTwo: 'Não'
}