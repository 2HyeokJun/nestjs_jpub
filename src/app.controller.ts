import { Controller, Get, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect('https://nestjs.com', 301)
  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }
}
