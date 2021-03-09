export interface Datapoint {
    name: string;
    isRed: boolean;
    isAmber: boolean;
    isGreen: boolean;
};

export const DATAPOINTS: Datapoint[] = [
    {name: 'Demograhics', isRed: false, isAmber: false, isGreen: true},
    {name: 'Encounters', isRed: false, isAmber: false, isGreen: true},
    {name: 'DemBed visits', isRed: false, isAmber: false, isGreen: true},

];