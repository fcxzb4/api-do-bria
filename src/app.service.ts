// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getServerStatus(): string {
    return 'Servidor rodando e saudável!';
  }

  getGreeting(nomeUsuario: string): string {
    return `Olá, ${nomeUsuario}! Seja bem-vindo ao nosso sistema.`;
  }
}
