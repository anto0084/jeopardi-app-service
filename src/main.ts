import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    // app.enableCors({credentials: false});
    app.enableCors();
    await app.listen(process.env.ENDPOINT_PORT, process.env.HOST_ADDRESS);
}
bootstrap();
// /**
//  * @see https://github.com/expressjs/cors
//  */
// export declare type CustomOrigin = (requestOrigin: string, callback: (err: Error | null, allow?: boolean) => void) => void;
// export interface CorsOptions {
//     origin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin;
//     methods?: string | string[];
//     allowedHeaders?: string | string[];
//     exposedHeaders?: string | string[];
//     credentials?: boolean;
//     maxAge?: number;
//     preflightContinue?: boolean;
//     optionsSuccessStatus?: number;
// }
