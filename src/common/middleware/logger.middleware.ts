import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`\n`)
        console.log('LoggerMiddleware - ' + new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3, // Para incluir milissegundos
          }));
        console.log(`Method: ${req.method}`);
        console.log(`OriginalUrl: ${req.originalUrl}`);
        console.log(`\n`)
        next();
    }
}
