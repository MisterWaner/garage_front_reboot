export type NavbarLink = {
    href: string;
    label: string;
};

export type Review = {
    author: string;
    title: string;
    rating: number;
    comment: string;
};

export type Car = {
    immatriculation: string;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    color: string;
    fuel: string;
    price: number;
    power: number;
    description: string;
    transmission: string;
    images: string[];
    status: string;
};