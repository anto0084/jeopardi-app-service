
import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { GameModule } from 'game/game.module';

@Module({
  imports: [],
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}