import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LogsService } from '../../log/log.service';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly logModel: LogsService) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log(`LoggingInterceptor: BEFORE REQUEST - ` + new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3, // Para incluir milissegundos
        }))
        const requestTime = Date.now();

        return next
            .handle()
            .pipe(
                map(async (response) => {
                    console.log(`\n`)
                    console.log(`LoggingInterceptor: AFTER REQUEST - ` + new Date().toLocaleString('pt-BR', {
                        timeZone: 'America/Sao_Paulo',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        fractionalSecondDigits: 3, // Para incluir milissegundos
                    }))
                    console.log(`\n`)
                    const diffTime = Date.now() - requestTime;
                    const ctx = context.switchToHttp();
                    const request = ctx.getRequest<Request>();

                    await this.logModel.createLog({
                        request: {
                            body: request.body,
                            headers: request.headers,
                            method: request.method
                        },
                        response: response,
                        responseTime: diffTime
                    })

                    return response
                }),
            );
    }
}