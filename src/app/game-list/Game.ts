export interface Game {
    name: string;
    price: number;
    stock: number;
    genre: string;
    image: string;
    clearance: boolean;
    quantity: number;
}

export interface CartItem extends Game {
    original: Game;
}