import WebSocket from 'ws';
import { PrismaClient } from "@prisma/client";
//
// const ENDPOINT = 'wss://ws-api.binance.us:443/ws-api/v3/avgPrice';
const ENDPOINT = 'wss://stream.binance.us:9443';
const STREAM = '/ws/btcusdt@ticker';
const ws = new WebSocket(ENDPOINT + STREAM);

const prisma = new PrismaClient();

type BinanceResponse = {
    s: string;
    E: string;
    w: string;
    c: string;
    Q: string;
    v: string;
    q: string;
}

async function addAssetPriceRecord(record: BinanceResponse) {

    await prisma.assetPrice.create({
        data: {
            exchange: 'binance.us',
            symbol: record.s,
            eventTime: `${record.E}`,
            averagePrice: parseFloat(record.w),
            lastPrice: parseFloat(record.c),
            lastQuantity: parseFloat(record.Q),
            baseVolume: parseFloat(record.v),
            quoteVolume: parseFloat(record.q),
        },
    });

}

ws.on('open', () => {

    console.log('Connected to Binance.US WSS');

});

ws.on('message', (message: string) => {

    const _message:BinanceResponse = JSON.parse(message);
    console.log(_message);

    addAssetPriceRecord(_message)
        .catch(async (e) => {
            console.error(e);
        });

});

ws.on('close', () => {

    console.log('Disconnected from BINANCE.US WSS');

    prisma.$disconnect();

});

