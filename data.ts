export type AssetPriceRecord = {

    exchange: string;
    symbol: string;
    eventTime: string;
    averagePrice: string;
    lastPrice?: string;
    lastQuantity?: string;
    baseVolume?: string;
    quoteVolume?: string;
    period?: string;

}
