import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LogsService } from '../../log/log.service';

@Injectable()
export class ExceptionLoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(ExceptionLoggingInterceptor.name);
    constructor(private readonly logModel: LogsService) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log(`ExceptionLoggingInterceptor: BEFORE REQUEST - ` + new Date().toLocaleString('pt-BR', {
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
        return next.handle().pipe(
            catchError((err) => {
                console.log(`\n`)
                console.log(`ExceptionLoggingInterceptor: AFTER REQUEST - ` + new Date().toLocaleString('pt-BR', {
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
                this.logModel.createLog({
                    request: {
                        body: request.body,
                        headers: request.headers,
                        method: request.method
                    },
                    error: err,
                    responseTime: diffTime
                })

                return throwError(() => err);
            }),
        );
    }
}
